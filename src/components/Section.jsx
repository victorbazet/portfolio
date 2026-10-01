export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`border-t border-ink-700/60 px-6 py-14 sm:px-8 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <header className="mb-8">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-paper sm:text-4xl">
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
