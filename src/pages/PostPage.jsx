import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, Clock, LinkIcon } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import ImageSlot from '../components/ui/ImageSlot'
import Markdown from '../components/ui/Markdown'
import NotFoundPage from './NotFoundPage'
import { findPost, postsByDate, readMinutes, formatDate } from '../data/posts'

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.7l8-9.2L1 2h7l4.8 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
  </svg>
)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.33H7.7V13h2.74v8h3.06z" />
  </svg>
)
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.6-1.3.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.4 3.9 1 2.1 2.7 3.8 4.8 4.8 1.7.8 2.6.8 3.5.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.2-.2-.3-.5-.4z" />
  </svg>
)

function ShareRow({ post }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const text = encodeURIComponent(post.title)
  const enc = encodeURIComponent(url)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  const iconBtn =
    'grid size-11 place-items-center rounded-full border border-line text-ink/60 transition-colors hover:border-brand hover:text-brand'

  return (
    <div className="flex items-center gap-2.5">
      <span className="mr-1 text-sm font-bold uppercase tracking-[0.16em] text-ink/45">Share</span>
      <button type="button" onClick={copy} aria-label={copied ? 'Link copied' : 'Copy link'} className={iconBtn}>
        {copied ? <Check className="size-4.5 text-green" /> : <LinkIcon className="size-4.5" />}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={iconBtn}
      >
        <XIcon className="size-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={iconBtn}
      >
        <FacebookIcon className="size-4.5" />
      </a>
      <a
        href={`https://wa.me/?text=${text}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className={iconBtn}
      >
        <WhatsAppIcon className="size-4.5" />
      </a>
    </div>
  )
}

export default function PostPage() {
  const { slug } = useParams()
  const post = findPost(slug)

  useEffect(() => {
    if (post) document.title = `${post.title} — ASCEND FOR ALL (AFA)`
  }, [post])

  if (!post) return <NotFoundPage />

  const related = postsByDate.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article aria-labelledby="post-heading" className="bg-paper">
      {/* Header */}
      <div className="mx-auto w-full max-w-4xl px-6 pt-14 sm:px-10 sm:pt-20">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink/55 transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> All stories
          </Link>
        </Reveal>
        <Reveal delay={0.05} className="mt-7 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
            {post.category}
          </span>
          <span className="flex items-center gap-4 text-sm font-medium text-ink/55">
            {formatDate(post.date)}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" /> {readMinutes(post)} min read
            </span>
          </span>
        </Reveal>
        <Reveal
          as="h1"
          delay={0.1}
          id="post-heading"
          className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
        >
          {post.title}
        </Reveal>
        <Reveal delay={0.15} className="mt-6 flex flex-wrap items-center justify-between gap-5 border-y border-line py-4">
          <p className="text-sm font-semibold text-ink/60">
            By <span className="text-ink">{post.author}</span>
          </p>
          <ShareRow post={post} />
        </Reveal>
      </div>

      {/* Cover */}
      <div className="mx-auto mt-10 w-full max-w-5xl px-6 sm:px-10">
        <Reveal delay={0.1}>
          <ImageSlot
            src={post.image}
            alt={post.imageAlt}
            ratio="aspect-[16/8.5]"
            rounded="rounded-[2rem]"
            className="border border-line shadow-xl shadow-ink/5"
            sizes="(min-width: 1024px) 60rem, 100vw"
          />
        </Reveal>
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="text-[1.05rem]">
          <Markdown body={post.body} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-7">
          <ShareRow post={post} />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-deep"
          >
            Support this work
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Related */}
      <div className="border-t border-line bg-sand/50">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="eyebrow text-ink/50">More stories</h2>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
            <Link to="/blog" className="text-sm font-bold text-brand hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex items-center gap-5 rounded-3xl border border-line bg-paper p-4 transition-all hover:-translate-y-0.5 hover:border-brand"
              >
                <ImageSlot
                  src={p.image}
                  alt=""
                  ratio="aspect-square"
                  rounded="rounded-2xl"
                  className="w-24 shrink-0 sm:w-28"
                  sizes="8rem"
                />
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand">{p.category}</p>
                  <h3 className="mt-1.5 font-display text-lg font-extrabold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium text-ink/50">{formatDate(p.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
