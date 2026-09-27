import Section from './Section.jsx'
import { about, profile } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Finance, with a build-it habit">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((text, i) => (
            <p key={i} className="leading-relaxed text-paper-muted">
              {text}
            </p>
          ))}
        </div>

        <div className="space-y-5 self-start">
          <img
            src={profile.photo.src}
            alt={profile.photo.alt}
            width="450"
            height="520"
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg border border-ink-700/60 object-cover"
          />

          <dl className="space-y-5 rounded-lg border border-ink-700/60 bg-ink-850 p-6">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.14em] text-paper-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-paper">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
