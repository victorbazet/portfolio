import Section from './Section.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="rounded-lg border border-ink-700/60 bg-ink-850 p-6">
            <h3 className="text-xs uppercase tracking-[0.14em] text-paper-faint">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
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
