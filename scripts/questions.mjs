// Prints every question visitors asked the AI assistant, oldest first.
// Usage: npm run questions
import { execFileSync } from 'node:child_process'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const NAMESPACE = '827277f0655247149e5e682cc4db9c68'
const wrangler = (...args) =>
  execFileSync('npx', ['wrangler', ...args], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })

const keys = JSON.parse(wrangler('kv', 'key', 'list', '--namespace-id', NAMESPACE, '--remote', '--prefix', 'q:'))
  .map((k) => k.name)
  .sort()

if (!keys.length) {
  console.log('Aucune question pour le moment.')
  process.exit(0)
}

const dir = mkdtempSync(join(tmpdir(), 'questions-'))
const file = join(dir, 'keys.json')
writeFileSync(file, JSON.stringify(keys))
let values
try {
  values = JSON.parse(wrangler('kv', 'bulk', 'get', file, '--namespace-id', NAMESPACE, '--remote'))
} finally {
  rmSync(dir, { recursive: true, force: true })
}

console.log(`${keys.length} question(s)\n`)
for (const key of keys) {
  const raw = values[key]
  if (!raw) continue
  const { at, question, country } = typeof raw === 'string' ? JSON.parse(raw) : raw
  const when = new Date(at).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
  console.log(`${when}${country ? ` [${country}]` : ''}  ${question}`)
}
