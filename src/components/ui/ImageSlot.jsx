import { useState } from 'react'
import { ImagePlus } from 'lucide-react'

/**
 * Photography slot.
 *
 * Drop a real image at `src` (e.g. /images/program-health.jpg in /public) and
 * it shows automatically. Until then — or if the file is missing — it renders a
 * branded placeholder describing what photo belongs here, so the layout is
 * never broken and content editors know exactly what to supply.
 *
 * @param {string} src    path under /public (optional)
 * @param {string} alt    accessible description (required when a real photo is used)
 * @param {string} label  placeholder hint shown when no image is present
 * @param {string} ratio  aspect-ratio utility class (e.g. 'aspect-[4/3]')
 */
export default function ImageSlot({
  src,
  alt = '',
  label = 'Add photo',
  ratio = 'aspect-[4/3]',
  rounded = 'rounded-3xl',
  className = '',
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
    <div className={`relative overflow-hidden ${rounded} ${ratio} ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={imgClass}
          {...(parallax ? { 'data-parallax': '', 'data-speed': '12' } : {})}
        />
      ) : (
        <div
          className="grid size-full place-items-center bg-gradient-to-br from-brand/15 via-sand to-gold/15 p-6 text-center"
          role="img"
          aria-label={alt || label}
        >
          <div className="text-ink/45">
            <ImagePlus className="mx-auto size-8" aria-hidden="true" />
            <p className="mt-2 text-sm font-semibold">{label}</p>
            {src && <p className="mt-1 text-xs text-ink/30">{src}</p>}
          </div>
        </div>
      )}
    </div>
  )
}
