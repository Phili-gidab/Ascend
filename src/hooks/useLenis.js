import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * The live Lenis instance (null when smoothing is off, e.g. reduced motion).
 * Programmatic scrolls MUST go through this when it exists — a plain
 * `window.scrollTo` gets overwritten on the next frame by Lenis's own lerp.
 */
let activeLenis = null
export const getLenis = () => activeLenis

/** Lenis-aware scroll helper: jumps (or glides) reliably in both modes. */
export function scrollTo(target, { immediate = false, offset = 0 } = {}) {
  if (activeLenis) {
    activeLenis.scrollTo(target, { immediate, offset, force: true })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' })
  } else if (target instanceof Element) {
    const top = target.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' })
  }
}

/**
 * Initialises Lenis smooth scrolling and drives it from GSAP's ticker so that
 * ScrollTrigger and Lenis stay perfectly in sync.
 *
 * When `enabled` is false (e.g. prefers-reduced-motion) we skip smoothing
 * entirely and fall back to the browser's native scroll — important for
 * accessibility and for users who get motion sickness.
 */
export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) {
      // Make sure ScrollTrigger still works with native scrolling.
      ScrollTrigger.refresh()
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Smoothly handle in-page #anchor links; offset clears the fixed navbar.
      anchors: { offset: -96 },
    })
    activeLenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    // Recalculate trigger positions once fonts/layout settle.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 600)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      if (activeLenis === lenis) activeLenis = null
      window.removeEventListener('load', refresh)
      clearTimeout(t)
    }
  }, [enabled])
}
