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
        {programs.map((p, i) => {
          const Icon = icons[p.icon] ?? HeartPulse
          return (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-sand/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl hover:shadow-ink/10"
            >
              <div className="relative overflow-hidden">
                <ImageSlot
                  src={p.image}
                  alt={`${p.title} program`}
                  label={`${p.title} — photo coming soon`}
                  ratio="aspect-[16/10]"
                  rounded="rounded-none"
                  position={p.imagePos}
                  parallax
                />
                {/* sector index on the photo */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/25 bg-ink/40 px-3.5 py-1.5 font-display text-sm font-extrabold tracking-[0.2em] text-white backdrop-blur-md"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* gold baseline that draws on hover */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                {/* ghost numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2 right-4 font-display text-[5.5rem] font-extrabold leading-none text-ink/[0.05] transition-colors duration-300 group-hover:text-gold/15"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="mb-4 flex items-center gap-3.5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-ink">{p.title}</h3>
                </div>
                <p className="max-w-md text-ink/70">{p.desc}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm font-semibold text-ink/75">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gold/15">
                        <Check className="size-3 text-gold" strokeWidth={3.5} aria-hidden="true" />
                      </span>
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
