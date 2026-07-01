import { motion } from 'framer-motion'
import Section from '../ui/Section'
import { goals } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Goals() {
  return (
    <Section
      id="goals"
      eyebrow="Our goals"
      title="The change we are working toward."
      highlight={[2]}
      tone="sand"
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-2"
      >
        {goals.map((goal, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            className="group flex items-baseline gap-5 border-b border-line py-6 sm:gap-10"
          >
            <span className="font-display text-xl font-bold text-brand sm:text-2xl">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-xl font-semibold leading-snug text-ink/85 transition-colors group-hover:text-ink sm:text-2xl md:text-3xl">
              {goal}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}
