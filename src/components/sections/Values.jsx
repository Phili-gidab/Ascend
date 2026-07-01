import { motion } from 'framer-motion'
import Section from '../ui/Section'
import { values } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Values() {
  return (
    <Section
      id="values"
      eyebrow="What guides us"
      title="Five values we never compromise."
      highlight={[1]}
      intro="Principles that shape every decision, partnership, and program we deliver."
      tone="paper"
    >
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {values.map((v, i) => (
          <motion.li
            key={v.title}
            variants={fadeUp}
            className="group relative flex flex-col bg-paper p-6 transition-colors hover:bg-sand sm:p-8"
          >
            <span
              aria-hidden="true"
              className="font-display text-5xl font-extrabold text-ink/10 transition-colors group-hover:text-brand/40"
            >
              0{i + 1}
            </span>
            <h3 className="mt-6 text-2xl font-extrabold text-ink">{v.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/65">{v.desc}</p>
            <span
              aria-hidden="true"
              className="mt-6 h-1 w-10 origin-left rounded-full bg-brand transition-transform duration-500 group-hover:scale-x-[2.5]"
            />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
