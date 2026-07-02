import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Programs from '../components/sections/Programs'
import Coverage from '../components/sections/Coverage'
import Band from '../components/sections/Band'
import Impact from '../components/sections/Impact'
import GalleryTeaser from '../components/sections/GalleryTeaser'
import BlogStrip from '../components/sections/BlogStrip'
import Donate from '../components/sections/Donate'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Coverage />
      <Band />
      <Impact />
      <GalleryTeaser />
      <BlogStrip />
      <Donate />
    </>
  )
}
