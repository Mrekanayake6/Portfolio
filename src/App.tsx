import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
<div className="min-h-screen bg-[#0B0B0F] text-white overflow-x-hidden relative">
  <ParticleBackground />

  <Navbar />
  <ScrollToTop />
  <main className="relative z-10">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <Contact />
    
  </main>
</div>
  );
}