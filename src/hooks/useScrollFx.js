import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Central GSAP scroll effects, wired once at the app root.
 *
 * Currently: subtle parallax for any element marked `data-parallax`
 * (with optional `data-speed`). Targets are oversized inner <img>s inside
 * overflow-hidden frames, so the drift never reveals edges.
 *
 * Disabled entirely under prefers-reduced-motion.
 */
export function useScrollFx(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '10')
        gsap.fromTo(
          el,
          { yPercent: -(speed / 2) },
          {
            yPercent: speed / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    })

    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => {
      ctx.revert()
      clearTimeout(t)
    }
  }, [enabled])
}
