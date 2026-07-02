import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import Section from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import ImageSlot from '../components/ui/ImageSlot'
import { postsByDate, readMinutes, formatDate } from '../data/posts'
import { stagger, fadeUp, viewportOnce } from '../lib/motion'

function Meta({ post, tone = 'light' }) {
  const sub = tone === 'light' ? 'text-ink/55' : 'text-cream/70'
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium ${sub}`}>
      <span>{formatDate(post.date)}</span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-3.5" aria-hidden="true" /> {readMinutes(post)} min read
      </span>
    </div>
  )
}

export default function BlogPage() {
  const [featured, ...rest] = postsByDate

  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Stories & updates."
      highlight={[0]}
      intro="News from the field, program deep-dives, and perspectives on disability inclusion in Ethiopia."
      tone="paper"
    >
      {/* Featured — latest post */}
      <Reveal>
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-[2rem] border border-line bg-sand/50 transition-colors hover:border-brand md:grid-cols-[1.15fr_1fr]"
        >
          <ImageSlot
            src={featured.image}
            alt={featured.imageAlt}
            ratio="aspect-[16/10] md:aspect-auto md:h-full"
            rounded="rounded-none"
            className="min-h-56"
          />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-brand px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                {featured.category}
              </span>
              <span className="eyebrow text-gold">Latest</span>
            </div>
            <h3 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl lg:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-ink/70">{featured.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <Meta post={featured} />
              <span className="inline-flex items-center gap-2 font-bold text-brand">
                Read story
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>

      {/* The rest */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {rest.map((post) => (
          <motion.article key={post.slug} variants={fadeUp}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-sand/40 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-ink/5"
            >
              <ImageSlot
                src={post.image}
                alt={post.imageAlt}
                ratio="aspect-[16/10]"
                rounded="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 w-fit rounded-full border border-line bg-paper px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand">
                  {post.category}
                </span>
                <h3 className="font-display text-xl font-extrabold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <Meta post={post} />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
