import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ImageSlot from '../ui/ImageSlot'
import { background, org, aboutImage } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Who we are"
      title="A national, disability-led movement for inclusion."
      highlight={[2]}
      tone="sand"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Image with floating badge */}
        <Reveal className="relative">
          <ImageSlot
            src={aboutImage}
            alt="Community members supported by ASCEND FOR ALL in Ethiopia"
            label="Add photo — community"
            ratio="aspect-[4/5]"
            rounded="rounded-t-[4.5rem] rounded-b-3xl sm:rounded-t-[7rem] lg:rounded-t-[10rem]"
            className="border border-line shadow-xl shadow-ink/5"
          />
          <div className="absolute -bottom-4 -right-2 max-w-[11rem] rounded-2xl border border-line bg-paper p-3.5 shadow-lg shadow-ink/10 sm:-bottom-5 sm:-right-5 sm:max-w-[12rem] sm:p-4">
            <p className="font-display text-xl font-extrabold text-brand">Est. {org.established.split(',')[1]?.trim() || '2026'}</p>
            <p className="mt-0.5 text-xs text-ink/60">
              Registered with ACSO · Reg. No. {org.registration.certificate}
            </p>
          </div>
        </Reveal>

        {/* Copy + expertise */}
        <div>
          <Reveal className="border-l-4 border-gold/70 pl-5">
            <p className="text-lg font-semibold leading-relaxed text-ink sm:text-xl">
              {background.lead}
            </p>
          </Reveal>
          <Reveal as="p" className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
            {background.body}
          </Reveal>

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="eyebrow mb-12 text-ink/50">Founder expertise</h3>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-x-10 gap-y-5 sm:grid-cols-2"
            >
              {background.expertise.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] font-medium leading-snug text-ink/80">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

      {/* Partner trust strip */}
      <Reveal className="mt-16 border-t border-line pt-10 sm:mt-20">
        <p className="eyebrow mb-6 text-ink/45">Expertise forged across leading institutions</p>
        <ul className="flex flex-wrap gap-2.5">
          {background.partners.map((p) => (
            <li
              key={p}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-ink/60 transition-colors hover:border-brand hover:text-brand"
            >
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
