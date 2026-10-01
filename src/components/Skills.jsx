import Section from './Section.jsx'
import { skills } from '../data/content.js'

export default function Skills({ text }) {
  return (
    <Section id="skills" eyebrow={text.skills.eyebrow} title={text.skills.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <div key={group.title} className="rounded-xl border border-ink-700/60 bg-ink-850 p-6 transition-colors hover:border-ink-600">
            <h3 className="text-xs uppercase tracking-[0.14em] text-paper-faint">
              {text.skills.groups[index]}
            </h3>
            <ul className="mt-4 space-y-2">
              {text.skills.items[index].map((item) => (
                <li key={item} className="text-sm text-paper-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
