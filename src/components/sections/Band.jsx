import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../ui/Reveal'
import AnimatedHeading from '../ui/AnimatedHeading'
import { bandImage, org } from '../../data/site'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function Band() {
  const root = useRef(null)
  const media = useRef(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        media.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={root}
      aria-labelledby="band-heading"
      className="relative flex min-h-[55vh] items-center overflow-hidden bg-ink py-16 sm:py-24"
    >
      <img
        ref={media}
        src={bandImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-125 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand-deep/80" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 text-cream sm:px-10">
        <AnimatedHeading
          as="h2"
          id="band-heading"
          text="When barriers fall, potential rises."
          highlight={[4]}
          highlightColor="var(--color-gold)"
          className="max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-tight text-white"
        />
        <Reveal as="p" delay={0.1} className="mt-5 max-w-xl text-lg text-cream/85">
          Across {org.coverage.length} regions of Ethiopia, we are building a future without limits —
          for every person with a disability.
        </Reveal>
        <Reveal delay={0.2} className="mt-8">
          <a
            href="#donate"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 font-bold text-brand transition-colors hover:bg-white"
          >
            Support our work
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
