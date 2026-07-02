import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import EthiopiaMap from '../ui/EthiopiaMap'
import { org } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Coverage() {
  return (
    <Section
      id="coverage"
      eyebrow="Where we work"
      title="Five regions. One national movement."
      highlight={[0, 1]}
      intro="From Tigray to Oromia, AFA works where the need is greatest — through local partners, government offices and grassroots structures."
      tone="dark"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-3"
            aria-label="Coverage regions"
          >
            {org.coverage.map((region, i) => (
              <motion.li
                key={region}
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-2xl border border-ink-line bg-ink-soft/40 px-5 py-4 transition-colors hover:border-gold/60"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-extrabold text-cream">{region}</span>
                <span
                  aria-hidden="true"
                  className="ml-auto font-display text-sm font-extrabold text-cream/25 transition-colors group-hover:text-gold/70"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal as="p" delay={0.15} className="mt-8 max-w-md text-sm leading-relaxed text-cream/60">
            Working across {org.sectors.join(', ').toLowerCase()} — registered nationally with ACSO
            (Reg. No. {org.registration.certificate}), so coverage can grow wherever the mission
            leads.
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <EthiopiaMap covered={org.coverage} />
        </Reveal>
      </div>
    </Section>
  )
}
