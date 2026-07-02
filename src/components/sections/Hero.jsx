import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Heart } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { org, visionMission, heroImage, heroImageWide, stats } from '../../data/site'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Magnetic from '../ui/Magnetic'
import Counter from '../ui/Counter'

gsap.registerPlugin(ScrollTrigger)

const EASE = [0.16, 1, 0.3, 1]

/** The promise, cycled: everyone deserves the chance to … */
const ROTATING = ['ascend', 'learn', 'earn', 'lead', 'thrive']

export default function Hero() {
  const root = useRef(null)
  const media = useRef(null)
  const reduced = useReducedMotion()
  const [word, setWord] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => setWord((w) => (w + 1) % ROTATING.length), 2800)
    return () => clearInterval(t)
  }, [reduced])

  useLayoutEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      // Slow Ken-Burns zoom + drift as the hero scrolls away.
      gsap.fromTo(
        media.current,
        { scale: 1.02, yPercent: 0 },
        {
          scale: 1.1,
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      id="top"
      ref={root}
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* Background photo (brand gradient shows through if it fails to load) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, var(--color-brand-deep), var(--color-ink))' }}
      />
      {/* Portrait original on portrait screens; CDN face-aware 16:9 crop on landscape. */}
      <picture>
        <source media="(orientation: landscape)" srcSet={heroImageWide} />
        <img
          ref={media}
          src={heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 size-full origin-center object-cover"
        />
      </picture>

      {/* Scrims for text legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/40" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-10 pt-28 sm:px-10 sm:pb-14 sm:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-cream backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            <span className="eyebrow !tracking-[0.14em] sm:!tracking-[0.2em]">
              Disability-led · National NGO · Ethiopia
            </span>
          </motion.div>

          <h1 className="sr-only">
            {org.name} — {org.tagline}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-4xl text-[clamp(2.15rem,6.5vw,6rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:leading-[1.02]"
          >
            Everyone deserves the chance to
            {/* The cycling word always sits alone on its own line, so the
                headline never re-wraps as words of different widths rotate.
                Static text for screen readers; the cycle is visual-only. */}
            <span className="sr-only"> ascend.</span>
            <span aria-hidden="true" className="relative block h-[1.18em] overflow-hidden">
              {reduced ? (
                <span className="relative inline-block text-gold">
                  ascend.
                  <span className="absolute bottom-[0.04em] left-0 h-[0.08em] w-full rounded-full bg-gold" />
                </span>
              ) : (
                /* Overlapping slot-machine swap: the outgoing word slides up
                   and out while the incoming one rises — never an empty line. */
                <AnimatePresence initial={false}>
                  <motion.span
                    key={ROTATING[word]}
                    initial={{ y: '115%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-115%' }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="absolute left-0 top-0 inline-block text-gold"
                  >
                    {ROTATING[word]}.
                    <span className="absolute bottom-[0.04em] left-0 h-[0.08em] w-full rounded-full bg-gold" />
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-5 max-w-xl text-base text-cream/85 sm:mt-6 sm:text-xl"
          >
            {visionMission.mission}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
          >
            <Magnetic strength={0.4} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-white shadow-lg shadow-ink/30 transition-colors hover:bg-brand-deep sm:w-auto"
              >
                <Heart className="size-5" aria-hidden="true" /> Donate now
              </Link>
            </Magnetic>
            <Link
              to="/programs"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:w-auto"
            >
              Explore our work
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <div className="mt-8 flex items-center gap-2 text-sm text-cream/55 sm:mt-12">
            <ArrowDown className="size-4 animate-bounce text-gold" aria-hidden="true" />
            Scroll to explore
          </div>
        </div>

        {/* Overlaid stat bar */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden border-t border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink/30 px-5 py-6 sm:px-7">
              <dd className="font-display text-3xl font-extrabold text-gold sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs leading-snug text-cream/70 sm:text-sm">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
