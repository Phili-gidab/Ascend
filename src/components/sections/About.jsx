import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ImageSlot from '../ui/ImageSlot'
import Marquee from '../ui/Marquee'
import { background, org, aboutImage, aboutImageSecondary } from '../../data/site'
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
      <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Photo collage */}
        <Reveal className="relative pb-16 pl-6 sm:pl-10">
          {/* decorative gold ring behind the collage */}
          <div
            aria-hidden="true"
            className="absolute -left-2 top-10 size-36 rounded-full border-[10px] border-gold/20 sm:size-44"
          />
          <ImageSlot
            src={aboutImage}
            alt="A blind advocate addresses AFA's launching workshop beneath the ASCEND FOR ALL banner"
            label="Community photo coming soon"
            ratio="aspect-[4/5]"
            rounded="rounded-t-[4.5rem] rounded-b-3xl sm:rounded-t-[7rem] lg:rounded-t-[9rem]"
            position="42% 45%"
            className="relative border border-line shadow-xl shadow-ink/5"
          />
          {/* overlapping secondary photo */}
          <div className="absolute -bottom-0 left-0 w-36 rotate-[-3deg] sm:w-44">
            <ImageSlot
              src={aboutImageSecondary}
              alt="A mother in an orange shawl with her son at the eye-care clinic"
              ratio="aspect-[3/4]"
              rounded="rounded-2xl"
              position="50% 35%"
              className="border-4 border-sand shadow-lg shadow-ink/15"
              sizes="11rem"
            />
          </div>
          {/* Est. badge */}
          <div className="absolute -right-2 bottom-10 max-w-[11rem] rounded-2xl border border-line bg-paper p-3.5 shadow-lg shadow-ink/10 sm:-right-4 sm:max-w-[12rem] sm:p-4">
            <p className="font-display text-xl font-extrabold text-brand">
              Est. {org.established.split(',')[1]?.trim() || '2026'}
            </p>
            <p className="mt-0.5 text-xs text-ink/60">
              Registered with ACSO · Reg. No. {org.registration.certificate}
            </p>
          </div>
        </Reveal>

        {/* Copy + expertise */}
        <div>
          <Reveal className="relative border-l-4 border-gold/70 pl-5 sm:pl-6">
            <p className="text-lg font-semibold leading-relaxed text-ink sm:text-[1.35rem] sm:leading-[1.6]">
              {background.lead}
            </p>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {background.body}
          </Reveal>

          <div className="mt-12">
            <div className="mb-7 flex items-center gap-3">
              <h3 className="eyebrow text-ink/50">Founder expertise</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-x-10 sm:grid-cols-2"
            >
              {background.expertise.map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="group flex items-baseline gap-4 border-b border-line py-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-extrabold tracking-wide text-gold transition-transform group-hover:-translate-y-0.5"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.95rem] font-semibold leading-snug text-ink/80 transition-colors group-hover:text-ink">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>

      {/* Partner experience — ticker with an accessible text fallback */}
      <Reveal className="mt-16 border-t border-line pt-10 sm:mt-20">
        <p className="eyebrow mb-7 text-ink/45">Expertise forged across leading institutions</p>
        <Marquee items={background.partners} className="text-ink/25" />
        <p className="sr-only">{background.partners.join(', ')}</p>
      </Reveal>
    </Section>
  )
}
