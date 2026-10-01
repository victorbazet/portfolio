import { profile } from '../data/content.js'
import AskAI from './AskAI.jsx'

export default function Hero({ text }) {
  return (
    <section id="top" className="relative px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-accent/[0.08] blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {profile.tagline}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-paper sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-muted sm:text-lg">
          {text.hero.intro}
        </p>

        <AskAI text={text} />

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-paper px-5 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:bg-white"
          >
            {text.hero.email}
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-paper-faint hover:bg-ink-850"
          >
            {text.hero.resume}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-paper-faint">
          <span>{text.hero.location}</span>
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
