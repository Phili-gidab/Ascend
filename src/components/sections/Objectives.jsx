import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import { objectives } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Objectives() {
  return (
    <Section
      id="objectives"
      index="10"
      eyebrow="Specific objectives"
      title="How we turn goals into action."
      highlight={[5]}
      intro="Concrete commitments across advocacy, livelihoods, protection, education, health and psychosocial care."
      tone="paper"
    >
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-x-12 gap-y-1 md:grid-cols-2"
      >
        {objectives.map((obj, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            className="group flex items-start gap-4 border-b border-line py-5"
          >
            <ArrowRight className="mt-1 size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
            <span className="leading-relaxed text-ink/75">{obj}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
