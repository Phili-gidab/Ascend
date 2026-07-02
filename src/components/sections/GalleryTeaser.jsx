import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import AnimatedHeading from '../ui/AnimatedHeading'
import { gallery } from '../../data/site'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const atWidth = (src, w) => src.replace(/w=\d+/, `w=${w}`)

/**
 * Homepage gallery teaser — a slow, continuous film reel of gallery frames
 * drifting across a dark band, inviting a visit to the full gallery.
 * Under reduced motion the reel stands still and simply overflows with
 * horizontal swipe/scroll.
 */
export default function GalleryTeaser() {
  const reduced = useReducedMotion()
  const reel = gallery.slice(0, 8)
  // Two copies back-to-back make the marquee loop seamless.
  const strip = reduced ? reel : [...reel, ...reel]

  return (
    <section aria-labelledby="gallery-teaser-heading" className="overflow-hidden bg-ink py-16 text-cream sm:py-24">
      <div className="mx-auto mb-10 flex w-full max-w-7xl flex-wrap items-end justify-between gap-6 px-6 sm:px-10">
        <div>
          <Reveal className="mb-5 flex items-center gap-3">
            <span className="eyebrow text-gold">Gallery</span>
            <span className="h-px w-24 bg-cream/20" />
          </Reveal>
          <AnimatedHeading
            as="h2"
            id="gallery-teaser-heading"
            text="Life, in focus."
            highlight={[1]}
            highlightColor="var(--color-gold)"
            className="text-headline text-white"
          />
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 font-bold text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Visit the gallery
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      {/* Film reel */}
      <div
        className={reduced ? 'overflow-x-auto px-6' : 'overflow-hidden'}
        aria-label="A preview of photos from our gallery"
      >
        <div className={`flex w-max items-center gap-4 ${reduced ? '' : 'animate-marquee'}`}>
          {strip.map((g, i) => (
            <Link
              key={`${g.image}-${i}`}
              to="/gallery"
              tabIndex={i >= reel.length ? -1 : 0}
              aria-hidden={i >= reel.length ? 'true' : undefined}
              aria-label={i < reel.length ? `${g.title} — open gallery` : undefined}
              className="photo-grade group relative block shrink-0 overflow-hidden rounded-xl border border-cream/10"
            >
              <img
                src={atWidth(g.image, 480)}
                alt={i < reel.length ? `${g.title} — ${g.place}` : ''}
                loading="eager"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                  g.tall ? 'h-56 w-40 sm:h-72 sm:w-52' : 'h-56 w-72 sm:h-72 sm:w-96'
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-8">
                <span className="block truncate text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  {g.place}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
