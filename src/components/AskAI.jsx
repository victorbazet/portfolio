import { useEffect, useRef, useState } from 'react'

const MAX_QUESTIONS = 10
const STREAM_ERROR = '\u0000error'

export default function AskAI({ text }) {
  const t = text.ask
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const threadRef = useRef(null)
  const abortRef = useRef(null)

  const asked = messages.filter((m) => m.role === 'user').length
  const limitReached = asked >= MAX_QUESTIONS

  // Keep the latest answer in view as it streams in.
  useEffect(() => {
    const el = threadRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  useEffect(() => () => abortRef.current?.abort(), [])

  async function ask(question) {
    const q = question.trim()
    if (!q || pending || limitReached) return

    const history = [...messages.filter((m) => !m.error), { role: 'user', content: q }]
    setMessages([...history, { role: 'assistant', content: '', streaming: true }])
    setInput('')
    setPending(true)

    const update = (patch) =>
      setMessages((prev) => [...prev.slice(0, -1), { ...prev[prev.length - 1], ...patch }])

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) {
        const { error } = await res.json().catch(() => ({}))
        update({ content: t.errors[error] ?? t.errors.default, streaming: false, error: true })
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let answer = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        if (answer.includes(STREAM_ERROR)) {
          update({ content: t.errors.default, streaming: false, error: true })
          return
        }
        update({ content: answer })
      }
      update({ content: answer.trim() || t.errors.default, streaming: false, error: !answer.trim() })
    } catch (err) {
      if (err.name !== 'AbortError') {
        update({ content: t.errors.default, streaming: false, error: true })
      }
    } finally {
      setPending(false)
    }
  }

  function reset() {
    abortRef.current?.abort()
    setMessages([])
    setPending(false)
  }

  return (
    <div className="mt-10 w-full max-w-2xl rounded-2xl text-left border border-ink-600/80 bg-ink-850/70 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-5">
      <div className="relative mb-3 flex items-center justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.title}
        </p>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={reset}
            className="absolute right-0 text-xs text-paper-faint transition-colors hover:text-paper"
          >
            {t.reset}
          </button>
        )}
      </div>

      {messages.length > 0 && (
        <div
          ref={threadRef}
          aria-live="polite"
          className="mb-4 max-h-80 space-y-4 overflow-y-auto pr-1"
        >
          {messages.map((m, i) =>
            m.role === 'user' ? (
              <p key={i} className="text-sm font-medium text-paper">
                {m.content}
              </p>
            ) : (
              <p
                key={i}
                className={`whitespace-pre-wrap text-sm leading-relaxed ${m.error ? 'text-paper-faint' : 'text-paper-muted'}`}
              >
                {m.content}
                {m.streaming && (
                  <span
                    aria-hidden="true"
                    className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-accent"
                  />
                )}
              </p>
            ),
          )}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          ask(input)
        }}
        className="flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-900/80 p-1.5 pl-4 transition-colors focus-within:border-accent/70"
      >
        <label htmlFor="ask-input" className="sr-only">
          {t.label}
        </label>
        <input
          id="ask-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          disabled={limitReached}
          placeholder={limitReached ? t.limit : t.placeholder}
          autoComplete="off"
          className="min-w-0 grow bg-transparent py-2 text-sm text-paper placeholder:text-paper-faint focus:outline-none disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!input.trim() || pending || limitReached}
          aria-label={t.send}
          className="shrink-0 rounded-lg bg-paper px-3.5 py-2 text-sm font-medium text-ink-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {pending ? '…' : '↑'}
        </button>
      </form>

      {messages.length === 0 && (
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {t.suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => ask(s)}
              className="rounded-full border border-ink-600 px-3 py-1.5 text-xs text-paper-muted transition-colors hover:border-accent/60 hover:text-paper"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-[11px] leading-relaxed text-paper-faint">{t.disclaimer}</p>
    </div>
  )
}
