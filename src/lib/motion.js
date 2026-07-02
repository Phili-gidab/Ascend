/**
 * Shared Framer Motion variants. Keeping them in one place keeps the
 * scroll-reveal language consistent across every section.
 */
export const EASE = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

/**
 * Viewport config so reveals fire once, shortly after entering view.
 * `amount` must stay LOW: it is the fraction of the WHOLE element that must be
 * visible, and tall stacked grids on phones (e.g. four program cards ≈ 2500px)
 * can never reach a high fraction of an ~800px viewport — at 0.3 the reveal
 * never fired on mobile and content stayed at opacity 0.
 */
export const viewportOnce = { once: true, amount: 0.1, margin: '0px 0px -5% 0px' }
