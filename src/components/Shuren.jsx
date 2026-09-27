import Section from './Section.jsx'
import { shuren } from '../data/content.js'

export default function Shuren() {
  return (
    <Section id="shuren" eyebrow="Featured project" title={shuren.name}>
      <div className="rounded-lg border border-ink-700/60 bg-ink-850 p-7 sm:p-9">
        <p className="max-w-3xl leading-relaxed text-paper-muted">{shuren.summary}</p>

        <ul className="mt-7 space-y-3">
          {shuren.highlights.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-paper-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-ink-700/60 pt-7">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-paper-faint">Stack</p>
          <ul className="flex flex-wrap gap-2">
            {shuren.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-ink-600 px-2.5 py-1 text-xs text-paper-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={shuren.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-paper transition-colors hover:text-accent"
        >
          Visit shuren.fr
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  )
}
