import Section from './Section.jsx'
import { about, profile } from '../data/content.js'

export default function About({ text }) {
  return (
    <Section id="about" eyebrow={text.about.eyebrow} title={text.about.title}>
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="space-y-5">
            {text.about.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-paper-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid gap-x-8 gap-y-5 rounded-xl border border-ink-700/60 bg-ink-850/80 p-6 sm:grid-cols-2">
            {about.facts.map((fact, index) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.14em] text-paper-faint">
                  {text.about.facts[index]}
                </dt>
                <dd className="mt-1 text-sm text-paper">{text.about.values[index]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src={profile.photo.src}
          alt={profile.photo.alt}
          width="450"
          height="520"
          loading="lazy"
          decoding="async"
          className="w-full self-start rounded-xl border border-ink-700/60 object-cover shadow-2xl shadow-black/20"
        />
      </div>
    </Section>
  )
}
