import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import Section from '../ui/Section'
import ImageSlot from '../ui/ImageSlot'
import { postsByDate, readMinutes, formatDate } from '../../data/posts'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'

/** Homepage teaser: the three latest posts. */
export default function BlogStrip() {
  const latest = postsByDate.slice(0, 3)

  return (
    <Section
      id="blog-strip"
      eyebrow="From the blog"
      title="Ideas, updates, field notes."
      highlight={[0]}
      tone="paper"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {latest.map((post) => (
          <motion.article key={post.slug} variants={fadeUp}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-sand/40 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-ink/5"
            >
              <ImageSlot src={post.image} alt={post.imageAlt} ratio="aspect-[16/9]" rounded="rounded-none" />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs font-medium text-ink/50">
                  <span className="rounded-full border border-line bg-paper px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand">
                    {post.category}
                  </span>
                  {formatDate(post.date)}
                </div>
                <h3 className="flex-1 font-display text-lg font-extrabold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-4 inline-flex items-center gap-1.5 border-t border-line pt-4 text-sm font-medium text-ink/55">
                  <Clock className="size-3.5" aria-hidden="true" /> {readMinutes(post)} min read
                  <span className="ml-auto inline-flex items-center gap-1 font-bold text-brand">
                    Read
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-9 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-7 py-3.5 font-bold text-ink/75 transition-colors hover:border-brand hover:text-brand"
        >
          All stories
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  )
}
