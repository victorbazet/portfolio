import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu once the viewport is wide enough to show the full nav.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => mq.matches && setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-900/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-paper transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded border border-ink-600 px-3 py-1.5 text-sm text-paper-muted transition-colors hover:border-paper-faint hover:text-paper md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-ink-700/60 px-6 py-3 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
