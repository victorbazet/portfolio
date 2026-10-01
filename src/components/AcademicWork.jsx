import Section from './Section.jsx'
import { academicWork } from '../data/content.js'

function DocumentCard({ item, description, text }) {
  const href = `/documents/${item.file}`

  return (
    <article className="group flex flex-col rounded-xl border border-ink-700/60 bg-ink-850 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/15">
      <h4 className="text-base font-medium leading-snug text-paper">{item.title}</h4>

      <p className="mt-2.5 grow text-sm leading-relaxed text-paper-muted">
        {description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md border border-ink-600 px-3.5 py-2 text-sm text-paper transition-colors hover:border-paper-faint hover:bg-ink-800"
      >
        <span>
          {text.work.view}
          <span className="sr-only"> — {item.title}</span>
        </span>
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export default function AcademicWork({ text }) {
  return (
    <Section id="work" eyebrow={text.work.eyebrow} title={text.work.title}>
      <p className="-mt-3 mb-10 max-w-2xl leading-relaxed text-paper-muted">
        {text.work.intro}
      </p>

      <div className="space-y-12">
        {academicWork.map((category, index) => (
          <div key={category.id}>
            <div className="mb-6 border-b border-ink-700/60 pb-4">
              <h3 className="text-lg font-semibold tracking-tight text-paper">
                {text.work.categories[index]}
              </h3>
              {text.work.blurbs[index] && (
                <p className="mt-1.5 text-sm text-paper-faint">{text.work.blurbs[index]}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <DocumentCard key={item.file} item={item} description={text.work.descriptions[index][itemIndex]} text={text} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
