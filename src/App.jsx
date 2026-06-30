import { MotionConfig } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { useScrollFx } from './hooks/useScrollFx'
import { useReducedMotion } from './hooks/useReducedMotion'

import SkipLink from './components/layout/SkipLink'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Programs from './components/sections/Programs'
import Focus from './components/sections/Focus'
import VisionMission from './components/sections/VisionMission'
import Values from './components/sections/Values'
import Principles from './components/sections/Principles'
import Band from './components/sections/Band'
import Impact from './components/sections/Impact'
import Goals from './components/sections/Goals'
import Objectives from './components/sections/Objectives'
import Donate from './components/sections/Donate'
import Contact from './components/sections/Contact'

export default function App() {
  const reduced = useReducedMotion()
  // Lenis smooth scroll + GSAP scroll effects only when motion is allowed.
  useLenis(!reduced)
  useScrollFx(!reduced)

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <ScrollProgress />
        <SkipLink />
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Programs />
          <Focus />
          <VisionMission />
          <Values />
          <Principles />
          <Band />
          <Impact />
          <Goals />
          <Objectives />
          <Donate />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
