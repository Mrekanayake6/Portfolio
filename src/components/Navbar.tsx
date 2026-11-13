import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'

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
      setScrolled(window.scrollY > 40)
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 transition-all duration-300 pointer-events-none">
        <motion.nav
          className={`w-full max-w-6xl flex items-center justify-between px-5 md:px-7 py-3 rounded-2xl md:rounded-full transition-all duration-300 pointer-events-auto ${
            scrolled
              ? 'bg-[#090b14]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-transparent border border-transparent'
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <a
            href="#"
            className="grad-text font-syne font-extrabold text-2xl tracking-tight cursor-pointer hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            SLE.
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-xs tracking-wider uppercase font-semibold px-4 py-2 rounded-full transition-all duration-200 block ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple/20 to-cyan/20 border border-indigo-400/30 rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple to-cyan hover:opacity-95 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(99,102,241,0.35)]"
            >
              <span>Hire Me</span>
              <FiArrowUpRight className="text-sm" />
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col justify-between p-6 bg-[#06070D]/95 backdrop-blur-2xl border-l border-white/10"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between pt-2">
              <span className="font-syne font-bold text-xl text-white">
                Navigation<span className="text-cyan">.</span>
              </span>
              <button
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-5 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-syne font-bold text-2xl text-slate-300 hover:text-white flex items-center justify-between py-2 border-b border-white/[0.05]"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span>{link.label}</span>
                  <FiArrowUpRight className="text-indigo-400 text-xl" />
                </motion.a>
              ))}
            </div>

            <div className="pb-4">
              <a
                href="#contact"
                className="w-full btn-primary py-3.5 text-sm flex items-center justify-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <span>Get In Touch</span>
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
