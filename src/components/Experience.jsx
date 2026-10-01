import Section from './Section.jsx'
import { experience } from '../data/content.js'

export default function Experience({ text }) {
  return (
    <Section id="experience" eyebrow={text.experience.eyebrow} title={text.experience.title}>
      <div className="space-y-4">
        {experience.map((role, index) => (
          <article
            key={role.id}
            className="rounded-xl border border-ink-700/60 bg-ink-850 p-7 shadow-lg shadow-black/10 sm:p-9"
          >
            <h3 className="text-lg font-semibold tracking-tight text-paper">
              {text.experience.roles[index]}
            </h3>
            <p className="mt-1.5 text-sm text-paper-muted">{role.company}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-paper-faint">
              {text.experience.locations[index]} · {text.experience.dates[index]}
            </p>

            <ul className="mt-7 space-y-3">
              {text.experience.points[index].map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-paper-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
