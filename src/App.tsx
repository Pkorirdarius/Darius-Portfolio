import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { OtherProjects } from './components/sections/OtherProjects'
import { Research } from './components/sections/Research'
import { Skills } from './components/sections/Skills'
import { Certifications } from './components/sections/Certifications'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-graphite"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Research />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
