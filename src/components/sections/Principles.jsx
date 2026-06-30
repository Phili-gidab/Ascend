import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from '../ui/Section'
import { principles } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Principles() {
  return (
    <Section
      id="principles"
      index="07"
      eyebrow="How we work"
      title="Operating principles."
      highlight={[1]}
      intro="A rigorous, locally-led, evidence-based approach — blending grassroots knowledge with global best practice."
      tone="sand"
    >
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="border-t border-line"
      >
        {principles.map((p, i) => (
          <motion.li
            key={p.title}
            variants={fadeUp}
            className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-b border-line py-7 transition-colors hover:bg-paper md:grid-cols-[5rem_1fr_1.4fr] md:items-center"
          >
            <span className="font-display text-xl font-bold text-brand">0{i + 1}</span>
            <h3 className="flex items-center gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
              {p.title}
              <ArrowUpRight className="size-5 shrink-0 text-ink/30 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </h3>
            <p className="col-span-2 max-w-2xl leading-relaxed text-ink/65 md:col-span-1">{p.desc}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
