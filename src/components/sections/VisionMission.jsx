import { Link } from 'react-router-dom'
import { Eye, Compass, ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { visionMission } from '../../data/site'

/** Decorative ascending chevrons echoing the AFA logo. */
function Chevrons({ className = '' }) {
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true" fill="none">
      <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 70 L100 20 L160 70" />
        <path d="M30 130 L100 75 L170 130" />
        <path d="M20 190 L100 130 L180 190" />
      </g>
    </svg>
  )
}

export default function VisionMission() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative scroll-mt-24 overflow-hidden bg-ink px-6 py-16 text-cream sm:px-10 sm:py-24 md:py-32"
    >
      <Chevrons className="pointer-events-none absolute -right-10 top-10 w-72 text-gold/10 md:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal className="mb-14 flex items-center gap-3">
          <span className="eyebrow text-gold">Our purpose</span>
          <span className="h-px flex-1 bg-ink-line" />
        </Reveal>

        <h2 id="vision-heading" className="sr-only">
          Our vision and mission
        </h2>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Vision — the inspirational star */}
          <Reveal className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold">
                <Eye className="size-5" />
              </span>
              <span className="eyebrow text-gold">Vision</span>
            </div>
            <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.15] text-cream">
              {visionMission.vision}
            </p>
          </Reveal>

          {/* Mission — supporting, offset down on desktop */}
          <Reveal delay={0.12} className="max-w-xl lg:mt-24">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border border-cream/25 text-cream/80">
                <Compass className="size-5" />
              </span>
              <span className="eyebrow text-cream/60">Mission</span>
            </div>
            <p className="text-lg leading-relaxed text-cream/75 sm:text-xl">
              {visionMission.mission}
            </p>
            <Link
              to="/programs"
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-cream"
            >
              See how we deliver it
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
