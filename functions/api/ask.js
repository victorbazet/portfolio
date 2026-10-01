import Anthropic from '@anthropic-ai/sdk'
import { systemPrompt } from '../../src/data/assistant.js'

// POST /api/ask — streams Claude's answer back as plain text.
// Body: { messages: [{ role: 'user' | 'assistant', content: string }, ...] }, ending with a user turn.
//
// ANTHROPIC_API_KEY is a Cloudflare Pages secret; it never reaches the browser.
// The limits below are a first line of defence only. The hard cap on spend is the
// monthly limit set on the API key's workspace in the Claude Console.

const MODEL = 'claude-haiku-4-5'
const MAX_QUESTION_CHARS = 500
const MAX_ANSWER_CHARS = 2000
const MAX_HISTORY_MESSAGES = 12
const RATE_LIMIT = { requests: 20, windowMs: 10 * 60 * 1000 }

// Marker the client looks for to replace a partial answer with a friendly message.
const STREAM_ERROR = '\u0000error'

// Per-isolate, so it resets whenever Cloudflare spins up a new one: best effort only.
const recentRequests = new Map()

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

function isRateLimited(ip) {
  const now = Date.now()
  const hits = (recentRequests.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs)
  hits.push(now)
  recentRequests.set(ip, hits)
  return hits.length > RATE_LIMIT.requests
}

function isAllowedOrigin(origin) {
  if (!origin) return true
  const { hostname } = new URL(origin)
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === 'victor-bazet-braun.pages.dev' ||
    hostname.endsWith('.victor-bazet-braun.pages.dev')
  )
}

// Returns a clean message list, or null if the payload is not a valid conversation.
function sanitizeMessages(raw) {
  if (!Array.isArray(raw) || raw.length === 0) return null

  const messages = raw.slice(-MAX_HISTORY_MESSAGES)
  while (messages.length && messages[0].role !== 'user') messages.shift()

  const clean = []
  for (const m of messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string') {
      return null
    }
    const content = m.content.trim()
    if (!content) return null
    const limit = m.role === 'user' ? MAX_QUESTION_CHARS : MAX_ANSWER_CHARS
    if (content.length > limit) return null
    clean.push({ role: m.role, content })
  }

  if (!clean.length || clean[clean.length - 1].role !== 'user') return null
  return clean
}

export async function onRequestPost({ request, env }) {
  if (!env.ANTHROPIC_API_KEY) return json({ error: 'not_configured' }, 503)
  if (!isAllowedOrigin(request.headers.get('origin'))) return json({ error: 'forbidden' }, 403)

  const ip = request.headers.get('cf-connecting-ip') ?? 'local'
  if (isRateLimited(ip)) return json({ error: 'rate_limited' }, 429)

  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'bad_request' }, 400)
  }

  const messages = sanitizeMessages(body?.messages)
  if (!messages) return json({ error: 'bad_request' }, 400)

  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY })
  const stream = client.messages.stream({
    model: MODEL,
    // Answers are two to four sentences; this also bounds the cost of any single request.
    max_tokens: 1024,
    cache_control: { type: 'ephemeral' },
    system: systemPrompt,
    messages,
  })

  // Wait for the first event so auth, rate-limit, and validation errors from the API
  // come back as a proper HTTP error instead of an empty 200 stream.
  const events = stream[Symbol.asyncIterator]()
  let first
  try {
    first = await events.next()
  } catch (error) {
    const status = error instanceof Anthropic.RateLimitError ? 429 : 502
    console.error('Claude API error', error?.status, error?.message)
    return json({ error: status === 429 ? 'rate_limited' : 'upstream_error' }, status)
  }

  const encoder = new TextEncoder()
  const send = (controller, event) => {
    if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
      controller.enqueue(encoder.encode(event.delta.text))
    }
  }

  const readable = new ReadableStream({
    async start(controller) {
      try {
        if (!first.done) send(controller, first.value)
        for (let next = await events.next(); !next.done; next = await events.next()) {
          send(controller, next.value)
        }
        const message = await stream.finalMessage()
        if (message.stop_reason === 'refusal') controller.enqueue(encoder.encode(STREAM_ERROR))
      } catch (error) {
        console.error('Claude stream error', error?.status, error?.message)
        controller.enqueue(encoder.encode(STREAM_ERROR))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  })
}
