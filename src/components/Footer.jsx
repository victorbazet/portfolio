import { contact, profile, shuren } from '../data/content.js'

export default function Footer({ text }) {
  return (
    <footer id="contact" className="relative z-10 border-t border-ink-700/60 px-6 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
          {text.contact.eyebrow}
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          {text.contact.heading}
        </h2>

        <p className="mt-4 max-w-xl leading-relaxed text-paper-muted">{text.contact.note}</p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-block text-lg text-paper underline decoration-ink-600 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
        >
          {profile.email}
        </a>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700/60 pt-7 text-sm text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex flex-wrap gap-6">
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href={shuren.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              Shuren
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
