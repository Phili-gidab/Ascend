import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'

/**
 * Scroll-reveal wrapper. Honors reduced motion automatically because the whole
 * tree is wrapped in <MotionConfig reducedMotion="user">.
 *
 * @param {string} as - element tag to render (default div)
 */
export default function Reveal({ as = 'div', children, className, delay = 0, ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
