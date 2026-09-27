import Section from './Section.jsx'
import { academicWork } from '../data/content.js'

function DocumentCard({ item }) {
  const href = `/documents/${item.file}`

  return (
    <article className="group flex flex-col rounded-lg border border-ink-700/60 bg-ink-850 p-6 transition-colors hover:border-ink-600">
      <h4 className="text-base font-medium leading-snug text-paper">{item.title}</h4>

      <p className="mt-2.5 grow text-sm leading-relaxed text-paper-muted">
        {item.description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md border border-ink-600 px-3.5 py-2 text-sm text-paper transition-colors hover:border-paper-faint hover:bg-ink-800"
      >
        <span>
          View PDF
          <span className="sr-only"> — {item.title}</span>
        </span>
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export default function AcademicWork() {
  return (
    <Section id="work" eyebrow="Academic work" title="Selected coursework and writing">
      <p className="-mt-4 mb-12 max-w-2xl leading-relaxed text-paper-muted">
        Marketing plans, equity valuations, and essays written at The College of New Jersey.
        Every document opens as a PDF.
      </p>

      <div className="space-y-16">
        {academicWork.map((category) => (
          <div key={category.id}>
            <div className="mb-6 border-b border-ink-700/60 pb-4">
              <h3 className="text-lg font-semibold tracking-tight text-paper">
                {category.title}
              </h3>
              {category.blurb && (
                <p className="mt-1.5 text-sm text-paper-faint">{category.blurb}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <DocumentCard key={item.file} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
