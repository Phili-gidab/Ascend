import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowUpRight, BookOpen, Accessibility, Briefcase } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../ui/Reveal'
import AnimatedHeading from '../ui/AnimatedHeading'
import Magnetic from '../ui/Magnetic'
import { donate, donateImage } from '../../data/site'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

gsap.registerPlugin(ScrollTrigger)

const tierIcons = [BookOpen, Accessibility, Briefcase]

export default function Donate() {
  const root = useRef(null)
  const media = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        media.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      id="donate"
      ref={root}
      aria-labelledby="donate-heading"
      className="relative scroll-mt-24 overflow-hidden bg-brand-deep px-6 py-16 text-cream sm:px-10 sm:py-24 md:py-32"
    >
      {/* Background photo + brand overlays for legibility */}
      <img
        ref={media}
        src={donateImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-110 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-brand-deep/70" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 size-[40vw] max-w-xl rounded-full bg-gold opacity-15 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <Reveal className="mb-5 flex items-center gap-3">
            <span className="eyebrow text-gold">{donate.eyebrow}</span>
            <span className="h-px flex-1 bg-cream/20" />
          </Reveal>
          <AnimatedHeading
            as="h2"
            id="donate-heading"
            text={donate.title}
            highlight={[4]}
            highlightColor="var(--color-gold)"
            className="max-w-xl text-headline text-white"
          />
          <Reveal as="p" delay={0.1} className="mt-6 max-w-lg text-lg text-cream/85">
            {donate.body}
          </Reveal>

          <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.4}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 font-bold text-brand transition-colors hover:bg-white"
              >
                <Heart className="size-5" aria-hidden="true" /> Become a donor
              </Link>
            </Magnetic>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 font-bold text-cream transition-colors hover:border-cream hover:bg-white/10"
            >
              Partner with us
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Impact tiers */}
        <div>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {donate.options.map((o, i) => {
              const Icon = tierIcons[i % tierIcons.length]
              return (
                <motion.li
                  key={o.amount}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-2xl border border-cream/15 bg-white/10 px-6 py-5 backdrop-blur-md transition-colors hover:border-gold/50 hover:bg-white/15"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream/10 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-cream sm:text-3xl">{o.amount}</span>
                  <span className="ml-auto max-w-[60%] text-right text-sm text-cream/85 sm:text-base">{o.impact}</span>
                </motion.li>
              )
            })}
          </motion.ul>
          <Reveal as="p" className="mt-5 text-sm text-cream/70">
            {donate.note}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
