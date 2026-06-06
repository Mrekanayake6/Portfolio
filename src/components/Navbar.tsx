import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about','skills','projects','experience','education','contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled ? 'bg-black/85 backdrop-blur-xl border-b border-white/[0.06]' : ''
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <a
          href="#"
          className="grad-text font-syne font-extrabold text-xl tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SLE.
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  active === link.href.slice(1) ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 rounded-full ${
                    active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-10"
            style={{ background: 'rgba(11,11,15,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-5 right-6 text-white/60 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <FiX size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-syne font-bold text-3xl text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}