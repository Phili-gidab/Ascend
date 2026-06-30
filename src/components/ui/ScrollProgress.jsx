import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Thin gold reading-progress bar fixed to the top of the viewport, driven by
 * GSAP ScrollTrigger. Purely informational and low-motion, so it's kept on
 * even under reduced-motion.
 */
export default function ScrollProgress() {
  const bar = useRef(null)

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`
      },
    })
    return () => st.kill()
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-gold" />
    </div>
  )
}
