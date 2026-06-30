import { motion } from 'framer-motion'
import { HeartPulse, HeartHandshake, Accessibility, Wrench } from 'lucide-react'
import Section from '../ui/Section'
import { focus } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

const icons = [HeartPulse, HeartHandshake, Accessibility, Wrench]

export default function Focus() {
  return (
    <Section
      id="focus"
      index="03"
      eyebrow="Our approach"
      title="A rights-based approach to disability."
      highlight={[1]}
      intro={focus.lead}
      tone="sand"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2"
      >
        {focus.areas.map((area, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.article
              key={area.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-line bg-paper p-8 transition-colors hover:border-brand sm:p-10"
            >
              <div className="mb-6 inline-grid size-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="size-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-ink">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{area.desc}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
