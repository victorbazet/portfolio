import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'

const LOCALES = ['en', 'fr']

function LocaleSwitch({ locale, onLocaleChange, label, className = '' }) {
  return (
    <div role="group" aria-label={label} className={`rounded-full border border-ink-600 p-0.5 ${className}`}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => onLocaleChange(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
            locale === code ? 'bg-paper text-ink-900' : 'text-paper-faint hover:text-paper'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Nav({ text, locale, onLocaleChange }) {
  const [open, setOpen] = useState(false)

  // Close the mobile menu once the viewport is wide enough to show the full nav.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-tight text-paper transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <nav className="ml-8 hidden items-center gap-6 lg:flex" aria-label={text.sections}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {text.nav[item.key]}
            </a>
          ))}
        </nav>

        <LocaleSwitch
          locale={locale}
          onLocaleChange={onLocaleChange}
          label={text.language}
          className="ml-auto hidden md:inline-flex"
        />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded border border-ink-600 px-3 py-1.5 text-sm text-paper-muted transition-colors hover:border-paper-faint hover:text-paper md:hidden"
        >
          {open ? text.close : text.menu}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={text.sections}
          className="border-t border-ink-700/60 px-6 py-3 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {text.nav[item.key]}
            </a>
          ))}
          <LocaleSwitch
            locale={locale}
            onLocaleChange={onLocaleChange}
            label={text.language}
            className="mt-2 inline-flex"
          />
        </nav>
      )}
    </header>
  )
}
