import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060A] text-slate-100 overflow-x-hidden relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* High-End Ambient Background: Cyber Grid, Floating Aurora Orbs, Cursor Spotlight & Stardust */}
      <AmbientBackground />

      {/* Floating Modern Capsule Navbar */}
      <Navbar />

      {/* Scroll To Top Action Button */}
      <ScrollToTop />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Modern High-End Footer */}
      <Footer />
    </div>
  )
}
