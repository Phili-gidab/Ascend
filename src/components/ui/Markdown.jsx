import { Link } from 'react-router-dom'

/**
 * Minimal markdown renderer for blog bodies — no dependencies, full design
 * control. Supports: paragraphs (blank-line separated), `## ` and `### `
 * headings, `> ` block quotes, `- ` lists, **bold**, *italic*, and
 * [links](url). Internal links (starting with /) use the SPA router.
 */

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g

function renderInline(text, keyBase = '') {
  return text.split(INLINE).map((part, i) => {
    const key = `${keyBase}-${i}`
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={key}>{part.slice(2, -2)}</strong>
    }
    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={key}>{part.slice(1, -1)}</em>
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const [, label, href] = link
      const cls = 'font-semibold text-brand underline decoration-gold/60 underline-offset-4 transition-colors hover:decoration-gold'
      return href.startsWith('/') ? (
        <Link key={key} to={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
        </a>
      )
    }
    return part
  })
}

export default function Markdown({ body }) {
  const blocks = body.trim().split(/\n\s*\n/)

  return (
    <>
      {blocks.map((block, i) => {
        const b = block.trim()

        if (b.startsWith('## ')) {
          return (
            <h2 key={i} className="mt-12 mb-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              {renderInline(b.slice(3), i)}
            </h2>
          )
        }
        if (b.startsWith('### ')) {
          return (
            <h3 key={i} className="mt-10 mb-3 font-display text-xl font-extrabold text-ink sm:text-2xl">
              {renderInline(b.slice(4), i)}
            </h3>
          )
        }
        if (b.startsWith('> ')) {
          return (
            <blockquote
              key={i}
              className="my-8 border-l-4 border-gold pl-5 font-display text-xl font-bold leading-relaxed text-ink sm:text-2xl"
            >
              {renderInline(b.replace(/^> /gm, '').replace(/\n/g, ' '), i)}
            </blockquote>
          )
        }
        if (/^- /m.test(b)) {
          const items = b.split('\n').filter((l) => l.startsWith('- '))
          return (
            <ul key={i} className="my-6 space-y-2.5">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 leading-relaxed text-ink/80">
                  <span className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span>{renderInline(item.slice(2), `${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="my-5 leading-[1.85] text-ink/80">
            {renderInline(b.replace(/\n/g, ' '), i)}
          </p>
        )
      })}
    </>
  )
}
