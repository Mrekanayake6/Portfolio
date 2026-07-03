import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import profileImage from "../assets/pro.jpg";
import { FaCommentDots } from "react-icons/fa";


const phrases = [
  'Software Engineer',
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Java Developer',
  'Problem Solver',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => {
          setDisplayed(phrase.substring(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 100)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(phrase.substring(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 60)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/Mrekanayake6', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/supunlakshan', label: 'LinkedIn' },
    { icon: <BsWhatsapp size={18} />, href: 'https://wa.me/94713872042', label: 'WhatsApp' },
    { icon: <FiMail size={18} />, href: 'mailto:supun.lakshan@example.com', label: 'Email' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 px-6 md:px-10 z-10"style={{ background: 'linear-gradient(180deg, #0B0B0F 0%, rgba(139,92,246,0.03) 50%, #0B0B0F 100%)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-purple/10 border border-purple/25 rounded-full px-4 py-2 text-sm text-purple-light mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              className="font-syne font-extrabold leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              Hi, I'm <br />
              <span className="grad-text">Supun Lakshan</span>
              <br />Ekanayake
            </motion.h1>

            <motion.div
              className="flex items-center gap-1 h-9 mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            >
              <span className="text-lg text-white/60">{displayed}</span>
              <span className="inline-block w-0.5 h-5 bg-purple animate-blink" />
            </motion.div>

            <motion.p
              className="text-white/55 text-base leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            >
              Passionate Software Engineer & Full Stack Developer based in Sri Lanka 🇱🇰 —
              building modern, scalable applications with clean code and exceptional UX.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            >
              <a href="#projects" className="btn-primary"> View My Work</a>
              <a href="#contact" className="btn-outline"><FaCommentDots /> Let's Talk</a>
            </motion.div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            >
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:bg-purple/15 hover:border-purple/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Avatar */}
          <motion.div
            className="flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Spinning ring */}
            <div className="relative" style={{ width: 325, height: 325 }}>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #8B5CF6, #3B82F6, #06B6D4, #8B5CF6)',
                  padding: 3,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full" style={{ background: '#0B0B0F' }} />
              </motion.div>

              {/* Inner circle */}
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  inset: 6,
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.2))',
                }}
              >
                <img
                  src={profileImage}
                  alt="Supun Lakshan Ekanayake"
                  className="w-full h-full object-contain rounded-full   object-cover shadow-lg shadow-purple/30"
                />
              </div>

              {/* Float card 1 */}
              <motion.div
                className="absolute -bottom-5 -left-8 glass rounded-2xl px-4 py-3 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div>
                  <p className="text-sm font-semibold leading-none mb-1">Full Stack Dev</p>
                  <p className="text-xs text-white/40"> Software Engineer · React · Node.js · Java · Android Development</p>
                </div>
              </motion.div>

              {/* Float card 2 */}
              <motion.div
                className="absolute -top-3 -right-8 glass rounded-2xl px-4 py-3 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple" />
                <div>
                  <p className="text-sm font-semibold leading-none mb-1">🎓 IIC University of Technology</p>
                  <p className="text-xs text-white/40">BEng Graduate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-16 text-white/30 text-[0.65rem] tracking-widest uppercase"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        >
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-0.5 h-2 bg-white/40 rounded-full"
              animate={{ y: [0, 10], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          Scroll Down
        </motion.div>
      </div>
    </section>
  )
}