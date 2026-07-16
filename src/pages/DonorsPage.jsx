import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ChevronUp, HandHeart, Heart } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import ImageSlot from '../components/ui/ImageSlot'
import Markdown from '../components/ui/Markdown'
import { donorStory as story } from '../data/site'

/** A single story chapter: photo and prose, alternating sides on desktop. */
function Chapter({ chapter, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={flip ? 'lg:order-2' : ''}>
        <ImageSlot
          src={chapter.image}
          alt={chapter.imageAlt}
          ratio="aspect-[4/3]"
          rounded="rounded-[2rem]"
          className="border border-line shadow-xl shadow-ink/5"
          sizes="(min-width: 1024px) 38rem, 100vw"
        />
      </div>
      <div className={flip ? 'lg:order-1' : ''}>
        <h2 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
          {chapter.heading}
        </h2>
        <div className="mt-3 text-[1.02rem]">
          <Markdown body={chapter.body} />
        </div>
      </div>
    </Reveal>
  )
}

export default function DonorsPage() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    document.title = `${story.title} — ASCEND FOR ALL (AFA)`
  }, [])

  const [firstChapter, ...moreChapters] = story.chapters

  return (
    <article aria-labelledby="donors-heading" className="bg-paper">
      {/* Header */}
      <header className="mx-auto w-full max-w-4xl px-6 pt-16 text-center sm:px-10 sm:pt-24">
        <Reveal className="flex items-center justify-center">
          <span className="eyebrow text-brand">{story.eyebrow}</span>
        </Reveal>
        <Reveal
          as="h1"
          delay={0.05}
          id="donors-heading"
          className="mt-5 font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight text-ink"
        >
          {story.title}
        </Reveal>
        <Reveal as="p" delay={0.1} className="mt-3 font-display text-lg font-bold text-gold sm:text-xl">
          {story.subtitle}
        </Reveal>
        <Reveal delay={0.15} className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-sand px-5 py-2.5">
          <HandHeart className="size-4 shrink-0 text-brand" aria-hidden="true" />
          <span className="text-sm font-semibold text-ink/75">
            Made possible by the <span className="text-ink">{story.funder}</span>
          </span>
        </Reveal>
        <Reveal as="p" delay={0.2} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
          {story.lead}
        </Reveal>
      </header>

      {/* Cover */}
      <div className="mx-auto mt-10 w-full max-w-5xl px-6 sm:px-10">
        <Reveal delay={0.05}>
          <ImageSlot
            src={story.cover}
            alt={story.coverAlt}
            ratio="aspect-[16/8.5]"
            rounded="rounded-[2rem]"
            className="border border-line shadow-xl shadow-ink/5"
            sizes="(min-width: 1024px) 60rem, 100vw"
          />
        </Reveal>
      </div>

      {/* Impact highlights */}
      <div className="mx-auto mt-12 w-full max-w-5xl px-6 sm:px-10">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {story.highlights.map((h, i) => (
            <Reveal as="div" key={h.label} delay={i * 0.05} className="rounded-2xl border border-line bg-sand/60 p-5 text-center">
              <dt className="font-display text-3xl font-extrabold text-brand sm:text-4xl">{h.value}</dt>
              <dd className="mt-1.5 text-xs font-semibold leading-snug text-ink/60 sm:text-sm">{h.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      {/* Story */}
      <div className="mx-auto w-full max-w-5xl space-y-16 px-6 py-14 sm:px-10 sm:py-20">
        <Chapter chapter={firstChapter} index={0} />

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="more"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-16 pt-16">
                {moreChapters.map((chapter, i) => (
                  <Chapter key={chapter.heading} chapter={chapter} index={i + 1} />
                ))}

                {/* Photo grid */}
                <Reveal>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {story.gallery.map((g) => (
                      <ImageSlot
                        key={g.image}
                        src={g.image}
                        alt={g.alt}
                        ratio="aspect-[4/3]"
                        rounded="rounded-2xl"
                        className="border border-line"
                        sizes="(min-width: 640px) 20rem, 50vw"
                      />
                    ))}
                  </div>
                </Reveal>

                {/* Closing — heartfelt thank you */}
                <Reveal className="overflow-hidden rounded-[2rem] border border-line bg-sand">
                  <div className="grid items-center gap-0 lg:grid-cols-2">
                    <ImageSlot
                      src={story.closing.image}
                      alt={story.closing.imageAlt}
                      ratio="aspect-[4/3]"
                      rounded="rounded-none"
                      sizes="(min-width: 1024px) 30rem, 100vw"
                    />
                    <div className="p-8 sm:p-10 lg:p-12">
                      <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                        {story.closing.heading}
                      </h2>
                      <div className="mt-3 text-[1.02rem]">
                        <Markdown body={story.closing.body} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read more / less */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper px-7 py-3.5 font-bold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            {expanded ? 'Show less' : 'Read the full story'}
            {expanded ? (
              <ChevronUp className="size-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-line bg-sand/50">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center sm:px-10">
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold leading-tight text-ink">
            Help us write the next chapter
          </h2>
          <p className="max-w-xl text-lg text-ink/70">
            Your support funds sight-restoring care, mobility, and dignity for children and families across Ethiopia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-white transition-colors hover:bg-brand-deep"
            >
              <Heart className="size-5" aria-hidden="true" /> Become a donor
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-bold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Partner with us
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
