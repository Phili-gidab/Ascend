import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLenis } from '../../hooks/useLenis'
import { useScrollFx } from '../../hooks/useScrollFx'
import { useReducedMotion } from '../../hooks/useReducedMotion'

import SkipLink from './SkipLink'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../ui/ScrollProgress'

/** Resets scroll on navigation (or jumps to an in-page #hash) and refreshes triggers. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
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
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <ScrollProgress />
        <SkipLink />
        <Navbar />
        <ScrollManager />
        {/* Non-home pages start with a normal section, so clear the fixed navbar. */}
        <main id="main" className={isHome ? '' : 'pt-20'}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
