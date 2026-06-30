import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Heart } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { org, visionMission, heroImage, stats } from '../../data/site'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import Magnetic from '../ui/Magnetic'
import Counter from '../ui/Counter'
import ImageSlot from '../ui/ImageSlot'

gsap.registerPlugin(ScrollTrigger)

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  const root = useRef(null)
  const photo = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        photo.current,
        { yPercent: -5 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="top" ref={root} aria-label="Introduction" className="relative overflow-hidden bg-paper">
      {/* soft warm accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 size-[55vw] max-w-2xl rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-40">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-7 flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-12 bg-gold" />
            <span className="eyebrow text-brand">Disability-led · National NGO · Ethiopia</span>
          </motion.div>

          <h1 className="sr-only">
            {org.name} — {org.tagline}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-ink"
          >
            Everyone deserves the chance to{' '}
            <span className="relative inline-block whitespace-nowrap">
              ascend.
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
                className="absolute -bottom-1 left-0 h-[0.12em] w-full origin-left rounded-full bg-gold"
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="mt-7 max-w-xl text-lg text-ink/70 sm:text-xl"
          >
            {visionMission.mission}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.4}>
              <a
                href="#donate"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-deep"
              >
                <Heart className="size-5" aria-hidden="true" /> Donate now
              </a>
            </Magnetic>
            <a
              href="#programs"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 font-bold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Explore our work
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-2.5"
            aria-label="Regions of operation"
          >
            {org.coverage.map((region) => (
              <li
                key={region}
                className="rounded-full border border-line bg-sand/60 px-4 py-1.5 text-sm text-ink/70"
              >
                {region}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Composition: arched photo + offset gold block + floating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 h-full w-full rounded-t-[11rem] rounded-b-[2rem] bg-gold/25"
          />
          <div
            aria-hidden="true"
            className="absolute -left-5 bottom-16 size-24 rounded-full border-[6px] border-brand/15"
          />
          <div ref={photo} className="relative will-change-transform">
            <ImageSlot
              src={heroImage}
              alt="A person with a disability supported by ASCEND FOR ALL in Ethiopia"
              label="Add hero photo — /images/hero.jpg"
              ratio="aspect-[4/5]"
              rounded="rounded-t-[11rem] rounded-b-[2rem]"
              className="border border-line shadow-2xl shadow-ink/10"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl border border-line bg-paper p-4 shadow-xl shadow-ink/10 sm:-left-6">
            <p className="font-display text-3xl font-extrabold text-brand">1 in 6</p>
            <p className="mt-0.5 text-xs leading-snug text-ink/65">
              people live with a disability. Together, we help them rise.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stat band */}
      <div className="bg-ink">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink px-6 py-7 sm:px-8">
              <dd className="font-display text-3xl font-extrabold text-gold sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs leading-snug text-cream/70 sm:text-sm">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
