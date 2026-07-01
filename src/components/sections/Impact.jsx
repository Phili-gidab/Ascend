import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Section from '../ui/Section'
import ImageSlot from '../ui/ImageSlot'
import { testimonials } from '../../data/site'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

export default function Impact() {
  return (
    <Section
      id="impact"
      eyebrow="Impact & stories"
      title="Change, in people's own words."
      highlight={[2]}
      intro="When barriers come down, potential rises. These are the kinds of stories our work makes possible."
      tone="paper"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            variants={fadeUp}
            className="flex flex-col overflow-hidden rounded-3xl border border-line bg-sand/50"
          >
            <ImageSlot
              src={t.image}
              alt={`Portrait — ${t.role}`}
              label={`Add portrait — ${t.image}`}
              ratio="aspect-[4/3]"
              rounded="rounded-none"
              parallax
            />
            <blockquote className="flex flex-1 flex-col p-7">
              <Quote className="size-7 text-brand/30" aria-hidden="true" />
              <p className="mt-3 flex-1 text-lg leading-relaxed text-ink/80">“{t.quote}”</p>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="block font-bold text-ink">{t.name}</span>
                <span className="text-sm text-ink/55">{t.role}</span>
              </figcaption>
            </blockquote>
          </motion.figure>
        ))}
      </motion.div>

      <p className="mt-6 text-sm italic text-ink/45">
        Illustrative stories shown for layout — to be replaced with real, consented testimonials.
      </p>
    </Section>
  )
}
