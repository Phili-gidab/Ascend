import { useState } from 'react'

const initialsOf = (name = '') =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')

/**
 * Person avatar: shows the photo at `src` when one exists, otherwise a
 * dignified initials monogram on a brand gradient — never an "add photo"
 * placeholder in front of visitors.
 */
const GRADIENTS = [
  'from-ink via-ink-soft to-brand',
  'from-brand-deep via-brand to-ink-soft',
  'from-ink-soft via-ink to-brand-deep',
]

export default function Monogram({
  name,
  initials,
  src,
  alt = '',
  ratio = 'aspect-square',
  rounded = 'rounded-t-[3.5rem] rounded-b-2xl',
  textSize = 'text-4xl',
  tone = 0,
  className = '',
}) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  if (showImage) {
    return (
      <div className={`photo-grade relative overflow-hidden ${rounded} ${ratio} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`relative grid place-items-center overflow-hidden bg-gradient-to-br ${GRADIENTS[tone % GRADIENTS.length]} ${rounded} ${ratio} ${className}`}
    >
      {/* soft gold halo behind the letters */}
      <span className="absolute -bottom-1/4 left-1/2 size-3/4 -translate-x-1/2 rounded-full bg-gold/25 blur-2xl" />
      <span className={`relative font-display font-extrabold tracking-wide text-cream ${textSize}`}>
        {initials || initialsOf(name)}
      </span>
    </div>
  )
}
