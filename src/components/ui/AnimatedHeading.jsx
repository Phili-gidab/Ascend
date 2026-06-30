import { motion } from 'framer-motion'
import { EASE, viewportOnce } from '../../lib/motion'

/**
 * Kinetic, word-by-word heading reveal inside clipping line-masks — the
 * signature "award-site" headline treatment. Each word slides up from behind
 * an overflow-hidden mask with a small stagger.
 *
 * Accessibility: the full string is rendered as real text, and the visual
 * word-splitting is presentational only (one <h*> with the words inside),
 * so screen readers read it normally. Under reduced motion, MotionConfig
 * collapses the slide to a simple fade.
 *
 * @param {string} text   - heading copy (words are split on spaces)
 * @param {keyof JSX.IntrinsicElements} as - heading tag, default h2
 */
export default function AnimatedHeading({
  text,
  as = 'h2',
  className = '',
  highlight = [],
  highlightColor = 'var(--color-brand)',
  id,
}) {
  const Tag = motion[as] ?? motion.h2
  const words = text.split(' ')

  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            paddingBottom: '0.08em',
            marginRight: '0.25em',
          }}
        >
          <motion.span
            className="inline-block"
            style={{ color: highlight.includes(i) ? highlightColor : undefined }}
            variants={{
              hidden: { y: '110%' },
              show: { y: 0, transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
