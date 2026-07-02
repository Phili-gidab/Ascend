import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, X, Heart, MoveRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../ui/Reveal'
import AnimatedHeading from '../ui/AnimatedHeading'
import { gallery } from '../../data/site'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger)

const atWidth = (src, w) => src.replace(/w=\d+/, `w=${w}`)

/** Vertical offsets that give the filmstrip its staggered, editorial rhythm. */
const DRIFT = [0, 48, -40, 28, -52, 36, -28, 56, -44, 24, -36, 44]

function Frame({ item, index, onOpen }) {
  const size = item.tall
    ? 'w-[clamp(240px,26vw,400px)] aspect-[3/4]'
    : 'w-[clamp(320px,38vw,600px)] aspect-[16/11]'
  return (
    <figure
      className="group relative shrink-0"
      style={{ transform: `translateY(${DRIFT[index % DRIFT.length]}px)` }}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`Open photo: ${item.title} — ${item.place}`}
        className={`photo-grade relative block overflow-hidden rounded-2xl border border-cream/10 ${size}`}
      >
        <img
          src={item.image}
          alt={`${item.title} — ${item.place}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        {/* caption veil */}
        <span className="absolute inset-x-0 bottom-0 z-10 flex translate-y-2 flex-col gap-0.5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-12 text-left opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-display text-lg font-extrabold leading-tight text-white">
            {item.title}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {item.place}
          </span>
        </span>
      </button>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-1 font-display text-sm font-extrabold tracking-[0.3em] text-cream/30"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </figure>
  )
}

/**
 * Gallery — a cinematic pinned filmstrip on desktop: vertical scroll drives
 * the strip horizontally past a giant ghost word, each frame staggered off the
 * centreline like prints on a studio wall. Falls back to a masonry grid on
 * touch/small screens and under reduced motion. Every frame opens an
 * accessible <dialog> lightbox.
 */
export default function Gallery() {
  const reduced = useReducedMotion()
  const [wide, setWide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches,
  )
  const horizontal = wide && !reduced

  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const ghostRef = useRef(null)
  const progressRef = useRef(null)
  const counterRef = useRef(null)
  const dialogRef = useRef(null)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => setWide(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useLayoutEffect(() => {
    if (!horizontal) return
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const distance = () => track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
            if (counterRef.current) {
              const n = Math.max(1, Math.min(gallery.length, Math.ceil(self.progress * gallery.length)))
              counterRef.current.textContent = String(n).padStart(2, '0')
            }
          },
        },
      })

      // Ghost word drifts slower for depth.
      gsap.to(ghostRef.current, {
        x: () => -distance() * 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: 1,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [horizontal])

  const openAt = (i) => {
    setCurrent(i)
    dialogRef.current?.showModal()
  }
  const closeLightbox = () => dialogRef.current?.close()
  const step = (dir) =>
    setCurrent((c) => (c === null ? c : (c + dir + gallery.length) % gallery.length))

  const item = current !== null ? gallery[current] : null

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="relative overflow-hidden bg-ink text-cream">
      {/* Header (always vertical flow) */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-4 pt-16 sm:px-10 sm:pt-24">
        <Reveal className="mb-5 flex items-center gap-3">
          <span className="eyebrow text-gold">Gallery</span>
          <span className="h-px flex-1 bg-cream/20" />
          {horizontal && (
            <span className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50 lg:flex">
              Scroll to travel <MoveRight className="size-4 text-gold" aria-hidden="true" />
            </span>
          )}
        </Reveal>
        <AnimatedHeading
          as="h2"
          id="gallery-heading"
          text="Moments of ascent."
          highlight={[2]}
          highlightColor="var(--color-gold)"
          className="max-w-3xl text-headline text-white"
        />
        <Reveal as="p" delay={0.1} className="mt-5 max-w-2xl text-lg text-cream/75">
          Life, dignity and joy across the communities we serve — from Ashenda dancers in Tigray to
          the tactile paths of Addis Ababa.
        </Reveal>
      </div>

      {horizontal ? (
        /* ---- Pinned filmstrip (desktop, motion allowed) ---- */
        <div ref={rootRef} className="relative flex h-screen flex-col justify-center">
          {/* Ghost word layer */}
          <div
            ref={ghostRef}
            aria-hidden="true"
            className="text-ghost pointer-events-none absolute top-1/2 left-[8vw] -translate-y-1/2 whitespace-nowrap font-display text-[24vw] font-extrabold leading-none"
          >
            ASCEND&nbsp;FOR&nbsp;ALL
          </div>

          <div ref={trackRef} className="flex w-max items-center gap-[4.5vw] pl-[8vw] pr-[10vw]">
            {gallery.map((g, i) => (
              <Frame key={g.image} item={g} index={i} onOpen={openAt} />
            ))}

            {/* Outro CTA panel */}
            <div className="flex w-[26rem] shrink-0 flex-col items-start gap-5 pr-10">
              <p className="font-display text-3xl font-extrabold leading-tight text-white">
                Your story could be <span className="text-gold">next.</span>
              </p>
              <p className="text-cream/70">
                Help us turn more moments like these into lifetimes of independence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-ink transition-colors hover:bg-gold/90"
              >
                <Heart className="size-4" aria-hidden="true" /> Get involved
              </Link>
            </div>
          </div>

          {/* Progress rail + counter */}
          <div className="pointer-events-none absolute inset-x-0 bottom-8 mx-auto flex w-full max-w-7xl items-center gap-5 px-6 sm:px-10">
            <span className="font-display text-sm font-extrabold text-gold">
              <span ref={counterRef}>01</span>
              <span className="text-cream/40"> / {String(gallery.length).padStart(2, '0')}</span>
            </span>
            <div className="h-px flex-1 overflow-hidden rounded-full bg-cream/15">
              <div
                ref={progressRef}
                className="h-full w-full origin-left bg-gold"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* ---- Masonry fallback (mobile, tablets, reduced motion) ---- */
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-8 sm:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="columns-2 gap-4 md:columns-3 [&>*]:mb-4"
          >
            {gallery.map((g, i) => (
              <motion.figure key={g.image} variants={fadeUp} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => openAt(i)}
                  aria-label={`Open photo: ${g.title} — ${g.place}`}
                  className="photo-grade group relative block w-full overflow-hidden rounded-2xl border border-cream/10"
                >
                  <img
                    src={atWidth(g.image, 768)}
                    alt={`${g.title} — ${g.place}`}
                    loading="lazy"
                    className={`w-full object-cover ${g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                  />
                  <span className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-0.5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-4 pt-10 text-left">
                    <span className="font-display text-sm font-extrabold leading-tight text-white sm:text-base">
                      {g.title}
                    </span>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      {g.place}
                    </span>
                  </span>
                </button>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      )}

      {/* ---- Lightbox ---- */}
      <dialog
        ref={dialogRef}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        aria-label={item ? `${item.title} — ${item.place}` : 'Photo viewer'}
        className="m-auto w-[min(96vw,72rem)] rounded-3xl border border-cream/15 bg-ink p-0 text-cream backdrop:bg-ink/90 backdrop:backdrop-blur-sm"
      >
        {item && (
          <div className="flex flex-col">
            <div className="relative">
              <img
                src={atWidth(item.image, 1920)}
                alt={`${item.title} — ${item.place}`}
                className="max-h-[72vh] w-full rounded-t-3xl object-contain bg-ink"
              />
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close photo viewer"
                className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-ink/70 text-cream backdrop-blur-md transition-colors hover:bg-ink"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-extrabold leading-tight text-white sm:text-xl">
                  {item.title}
                  <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {item.place}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{item.desc}</p>
              </div>
              <p className="hidden font-display text-sm font-extrabold text-cream/50 sm:block">
                {String(current + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="grid size-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="grid size-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
