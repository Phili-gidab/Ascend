import AnimatedHeading from './AnimatedHeading'
import Reveal from './Reveal'

/**
 * Standard section scaffold: a labelled landmark with a numbered eyebrow and a
 * kinetic heading. Tones map to the warm palette:
 *   paper (default) · sand (alt) · teal (statement band) · dark (footer-ish)
 */
const TONES = {
  paper: { bg: 'bg-paper text-ink', line: 'bg-line', sub: 'text-ink/70', eyebrow: 'text-brand', hl: 'var(--color-brand)' },
  sand: { bg: 'bg-sand text-ink', line: 'bg-line', sub: 'text-ink/70', eyebrow: 'text-brand', hl: 'var(--color-brand)' },
  teal: { bg: 'bg-brand text-cream', line: 'bg-cream/25', sub: 'text-cream/85', eyebrow: 'text-cream', hl: 'var(--color-gold)' },
  dark: { bg: 'bg-ink text-cream', line: 'bg-ink-line', sub: 'text-cream/70', eyebrow: 'text-gold', hl: 'var(--color-gold)' },
}

export default function Section({
  id,
  index,
  eyebrow,
  title,
  highlight,
  intro,
  children,
  tone = 'paper',
  className = '',
}) {
  const t = TONES[tone] ?? TONES.paper
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 md:py-32 ${t.bg} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 md:mb-16">
          {eyebrow && (
            <Reveal className="mb-5 flex items-center gap-3">
              <span className={`eyebrow ${t.eyebrow}`}>
                {index ? `${index} — ` : ''}
                {eyebrow}
              </span>
              <span className={`h-px flex-1 ${t.line}`} />
            </Reveal>
          )}
          <AnimatedHeading
            as="h2"
            id={headingId}
            text={title}
            highlight={highlight}
            highlightColor={t.hl}
            className="max-w-4xl text-headline"
          />
          {intro && (
            <Reveal as="p" delay={0.1} className={`mt-6 max-w-2xl text-lg leading-relaxed ${t.sub}`}>
              {intro}
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
