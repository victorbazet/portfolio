import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {profile.tagline}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-muted sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-paper px-5 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:bg-white"
          >
            Email me
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-paper-faint hover:bg-ink-850"
          >
            Download resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper-faint">
          <span>{profile.location}</span>
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-ink-600 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper-faint"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
