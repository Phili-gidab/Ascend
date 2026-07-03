import { useState } from 'react'
import { ImagePlus } from 'lucide-react'

/** Build a responsive srcset for Unsplash CDN URLs (no-op for local files). */
const UNSPLASH_WIDTHS = [480, 768, 1080, 1400]
const srcSetFor = (src) => {
  if (!src?.includes('images.unsplash.com')) return undefined
  return UNSPLASH_WIDTHS.map((w) => `${src.replace(/w=\d+/, `w=${w}`)} ${w}w`).join(', ')
}

/**
 * Photography slot.
 *
 * Drop a real image at `src` (e.g. /images/program-health.jpg in /public) and
 * it shows automatically. If the file is missing it renders a quiet branded
 * placeholder so the layout is never broken. Every photo gets the shared
 * `.photo-grade` treatment so mixed photography reads as one set.
 *
 * @param {string} src    image URL or path under /public (optional)
 * @param {string} alt    accessible description (required when a real photo is used)
 * @param {string} label  placeholder text shown when no image is present
 * @param {string} ratio  aspect-ratio utility class (e.g. 'aspect-[4/3]')
 * @param {string} sizes  responsive `sizes` hint for CDN images
 * @param {string} position  CSS object-position to bias the crop (e.g. '50% 20%')
 */
export default function ImageSlot({
  src,
  alt = '',
  label = 'Photo coming soon',
  ratio = 'aspect-[4/3]',
  rounded = 'rounded-3xl',
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  position,
  parallax = false,
}) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  // When parallax is on, the image is oversized + absolutely placed so GSAP can
  // drift it inside the overflow-hidden frame without ever revealing an edge.
  const imgClass = parallax
    ? 'absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover'
    : 'size-full object-cover'

  return (
    <div className={`photo-grade relative overflow-hidden ${rounded} ${ratio} ${className}`}>
      {showImage ? (
        <img
          src={src}
          srcSet={srcSetFor(src)}
          sizes={srcSetFor(src) ? sizes : undefined}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={imgClass}
          style={position ? { objectPosition: position } : undefined}
          {...(parallax ? { 'data-parallax': '', 'data-speed': '12' } : {})}
        />
      ) : (
        <div
          className="grid size-full place-items-center bg-gradient-to-br from-brand/15 via-sand to-gold/15 p-6 text-center"
          role="img"
          aria-label={alt || label}
        >
          <div className="text-ink/40">
            <ImagePlus className="mx-auto size-8" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold">{label}</p>
          </div>
        </div>
      )}
    </div>
  )
}
