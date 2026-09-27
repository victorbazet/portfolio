export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`border-t border-ink-700/60 px-6 py-20 sm:px-8 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <header className="mb-10">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
