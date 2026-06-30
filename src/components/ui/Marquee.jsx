import { Plus } from 'lucide-react'

/**
 * Infinite horizontal ticker. The track is duplicated so the CSS translateX
 * loop is seamless. Purely decorative, so it's hidden from assistive tech and
 * the animation is removed entirely under prefers-reduced-motion (see index.css).
 */
export default function Marquee({ items, className = '' }) {
  const Track = () => (
    <ul className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-8">
          <span className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            {item}
          </span>
          <Plus className="size-5 text-brand sm:size-7" strokeWidth={2.5} />
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`flex w-full overflow-hidden ${className}`} aria-hidden="true">
      <Track />
      <Track />
    </div>
  )
}
