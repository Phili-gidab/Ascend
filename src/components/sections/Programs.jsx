import { motion } from 'framer-motion'
import { HeartPulse, GraduationCap, ShieldCheck, Briefcase, Check } from 'lucide-react'
import Section from '../ui/Section'
import ImageSlot from '../ui/ImageSlot'
import { programs } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

const icons = {
  health: HeartPulse,
  education: GraduationCap,
  protection: ShieldCheck,
  economic: Briefcase,
}

export default function Programs() {
  return (
    <Section
      id="programs"
      index="02"
      eyebrow="What we do"
      title="Four sectors, one inclusive future."
      highlight={[1]}
      intro="We work across health, education, protection and economic empowerment — every program designed to be accessible and disability-inclusive."
      tone="paper"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2"
      >
        {programs.map((p) => {
          const Icon = icons[p.icon] ?? HeartPulse
          return (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-sand/50 transition-colors hover:border-brand"
            >
              <ImageSlot
                src={p.image}
                alt={`${p.title} program`}
                label={`Add photo — ${p.image}`}
                ratio="aspect-[16/10]"
                rounded="rounded-none"
                parallax
              />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-ink">{p.title}</h3>
                </div>
                <p className="text-ink/70">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm font-medium text-ink/75">
                      <Check className="size-4 shrink-0 text-gold" strokeWidth={3} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
