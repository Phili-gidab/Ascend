import { useEffect, useState } from 'react'
import { readSettings, A11Y_EVENT } from '../lib/a11y'

/**
 * Tracks whether motion should be reduced — from the OS
 * `prefers-reduced-motion` setting OR the on-site accessibility toolbar.
 * Used to gate every non-essential animation across the site.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches || readSettings().motion
    )
  })

  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches || readSettings().motion)
    mq.addEventListener('change', update)
    window.addEventListener(A11Y_EVENT, update)
    return () => {
      mq.removeEventListener('change', update)
      window.removeEventListener(A11Y_EVENT, update)
    }
  }, [])

  return reduced
}
