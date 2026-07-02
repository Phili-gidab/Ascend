import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import Monogram from '../ui/Monogram'
import { team } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Team() {
  const { executive, board } = team

  return (
    <Section
      id="team"
      eyebrow="Leadership"
      title="The people behind the mission."
      highlight={[1]}
      intro="A board-led organization guided by professionals with lived experience and deep roots in disability inclusion."
      tone="paper"
    >
      {/* Executive — featured */}
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-sand/60 p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative grid gap-8 md:grid-cols-[minmax(0,15rem)_1fr] md:items-center lg:gap-14">
          <Monogram
            name={executive.name}
            src={executive.image}
            alt={`${executive.name}, ${executive.role} of ASCEND FOR ALL`}
            ratio="aspect-[4/5]"
            rounded="rounded-t-full rounded-b-3xl"
            textSize="text-6xl"
            className="mx-auto w-52 shadow-xl shadow-ink/10 md:w-full"
          />
          <div>
            <p className="eyebrow text-gold">{executive.role}</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {executive.name}
            </h3>
            <div className="mt-5 max-w-xl border-l-4 border-gold/60 pl-5">
              <p className="leading-relaxed text-ink/75">{executive.bio}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${executive.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
              >
                <Mail className="size-4" /> Email
              </a>
              <a
                href={executive.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink/75 transition-colors hover:border-brand hover:text-brand"
              >
                <Phone className="size-4 text-brand" /> Call
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Board */}
      <div className="mt-14 flex items-center gap-3">
        <h3 className="eyebrow text-ink/50">Board of Directors</h3>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {board.map((m, i) => {
          // Until real names are announced, lead with the role alone.
          const hasRealName = !/^board\s/i.test(m.name)
          return (
          <motion.li
            key={`${m.role}-${i}`}
            variants={fadeUp}
            className="group rounded-2xl border border-line bg-sand/40 p-5 text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-ink/5"
          >
            <Monogram
              name={m.name}
              initials={m.initials}
              src={m.image}
              alt={hasRealName ? `${m.name}, ${m.role}` : m.role}
              ratio="aspect-square"
              rounded="rounded-full"
              textSize="text-2xl"
              tone={i}
              className="mx-auto w-20 border-2 border-paper shadow-md shadow-ink/10 sm:w-24"
            />
            <p className="mt-4 font-bold leading-snug text-ink">{hasRealName ? m.name : m.role}</p>
            {hasRealName && <p className="mt-1 text-sm text-ink/55">{m.role}</p>}
            <span
              aria-hidden="true"
              className="mx-auto mt-3 block h-0.5 w-6 rounded-full bg-gold/40 transition-all group-hover:w-10 group-hover:bg-gold"
            />
          </motion.li>
          )
        })}
      </motion.ul>
    </Section>
  )
}
