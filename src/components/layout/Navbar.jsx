import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import { nav, org } from '../../data/site'
import Magnetic from '../ui/Magnetic'
import LogoIcon from '../ui/LogoIcon'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const isHome = pathname === '/'
  // Light text over the dark home hero; solid dark-on-paper otherwise.
  const solid = scrolled || open || !isHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? 'border-b border-line bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10"
      >
        <Link to="/" className="group flex items-center gap-2.5" aria-label={`${org.name} — home`}>
          <LogoIcon className="size-9 sm:size-10" />
          <span
            className={`font-display text-base font-extrabold tracking-tight transition-colors sm:text-lg ${
              solid ? 'text-ink' : 'text-white'
            }`}
          >
            {org.name}
            <span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  const base = 'rounded-full px-4 py-2 text-sm font-semibold transition-colors'
                  if (solid)
                    return `${base} ${isActive ? 'bg-brand/10 text-brand' : 'text-ink/70 hover:text-brand'}`
                  return `${base} ${isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:text-white'}`
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
              >
                <Heart className="size-4" aria-hidden="true" /> Donate
              </Link>
            </Magnetic>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`grid size-11 place-items-center rounded-full border transition-colors md:hidden ${
            solid ? 'border-line text-ink' : 'border-white/40 text-white'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-display text-2xl font-bold transition-colors ${
                        isActive ? 'text-brand' : 'text-ink hover:text-brand'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-3">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 font-bold text-white"
                >
                  <Heart className="size-4" aria-hidden="true" /> Donate
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
