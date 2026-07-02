import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MotionConfig, motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLenis, scrollTo } from '../../hooks/useLenis'
import { useScrollFx } from '../../hooks/useScrollFx'
import { useReducedMotion } from '../../hooks/useReducedMotion'

import SkipLink from './SkipLink'
import Navbar from './Navbar'
import Footer from './Footer'
import A11yToolbar from './A11yToolbar'
import ScrollProgress from '../ui/ScrollProgress'

const TITLES = {
  '/': 'ASCEND FOR ALL (AFA) — Disability-led inclusion in Ethiopia',
  '/about': 'About — ASCEND FOR ALL (AFA)',
  '/programs': 'Programs — ASCEND FOR ALL (AFA)',
  '/impact': 'Impact — ASCEND FOR ALL (AFA)',
  '/gallery': 'Gallery — ASCEND FOR ALL (AFA)',
  '/blog': 'Blog — ASCEND FOR ALL (AFA)',
  '/contact': 'Contact & Donate — ASCEND FOR ALL (AFA)',
}

/**
 * Resets scroll on navigation (or jumps to an in-page #hash), refreshes
 * triggers, and hands keyboard/screen-reader focus to the new page's content.
 * All scrolling goes through the Lenis-aware helper — a bare window.scrollTo
 * gets overwritten on the next frame by the smooth-scroll lerp.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Blog posts set their own title (effects run child-first, so don't clobber).
    if (!pathname.startsWith('/blog/')) {
      document.title = TITLES[pathname] || 'Page not found — ASCEND FOR ALL (AFA)'
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        scrollTo(el, { immediate: true, offset: -96 })
        return
      }
    }
    scrollTo(0, { immediate: true })
    document.getElementById('main')?.focus({ preventScroll: true })
    ScrollTrigger.refresh()
  }, [pathname, hash])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  const isHome = pathname === '/'

  useLenis(!reduced)
  useScrollFx(!reduced, pathname)

  return (
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div className="grain">
        <ScrollProgress />
        <SkipLink />
        <Navbar />
        <ScrollManager />
        {/* Non-home pages start with a normal section, so clear the fixed navbar. */}
        <main id="main" tabIndex={-1} className={`outline-none ${isHome ? '' : 'pt-20'}`}>
          {/* Soft entrance on every route change (no exit phase — keeps Lenis/ScrollTrigger stable). */}
          <motion.div
            key={pathname}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => ScrollTrigger.refresh()}
          >
            <Outlet />
          </motion.div>
        </main>
        <Footer />
        <A11yToolbar />
      </div>
    </MotionConfig>
  )
}
