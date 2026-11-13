import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCode, FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import profileImage from '../assets/pro.jpg'

const phrases = [
  'Software Engineer',
  'Full Stack Developer',
  'React & TypeScript Specialist',
  'Java Backend Engineer',
  'Mobile App Developer',
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
          setCharIdx((c) => c + 1)
        }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(phrase.substring(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        }, 40)
      } else {
        setDeleting(false)
        setPhraseIdx((i) => (i + 1) % phrases.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/Mrekanayake6', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/lakshan-ekanayake-164909296/', label: 'LinkedIn' },
    { icon: <BsWhatsapp size={17} />, href: 'https://wa.me/94713872042', label: 'WhatsApp' },
    { icon: <FiInstagram size={18} />, href: 'https://www.instagram.com/s.ekanayake_?igsh=MTlodnM1NXRmdXNjMg%3D%3D&utm_source=qr', label: 'Instagram' },
    { icon: <FiMail size={18} />, href: 'mailto:lakshanekanayake6@gmail.com', label: 'Email' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text Content (Col 7) */}
          <div className="lg:col-span-7 text-left">
            {/* Status Beacon Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-xl shadow-[0_0_20px_-3px_rgba(99,102,241,0.25)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-syne font-extrabold leading-[1.08] tracking-tight mb-4 text-white"
              style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)' }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <br />
              <span className="grad-text">Supun Lakshan</span>
              <br />
              <span className="text-slate-100">Ekanayake</span>
            </motion.h1>

            {/* Typewriter Role Container */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <HiSparkles className="text-indigo-400 text-sm animate-pulse" />
              <span className="text-base sm:text-lg font-medium text-slate-200 min-w-[200px]">
                {displayed}
                <span className="inline-block w-0.5 h-5 ml-1 bg-cyan-400 align-middle animate-blink" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Passionate <strong className="text-white font-semibold">Software Engineer & Full Stack Developer</strong> based in Sri Lanka.
              I architect modern, high-performance web applications, robust enterprise backends, and intuitive digital experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <a href="#projects" className="btn-primary">
                <span>Explore Featured Work</span>
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                <FiDownload size={15} />
                <span>Resume / Contact</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <span className="text-xs uppercase tracking-widest text-slate-500 font-mono mr-1">
                Follow:
              </span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: High-End Avatar Frame (Col 5) */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative py-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Ambient Aura Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/25 via-purple/20 to-cyan/25 rounded-full blur-3xl scale-95 pointer-events-none animate-pulse_slow" />

            <div className="relative w-[280px] sm:w-[340px] md:w-[370px] lg:w-[410px] xl:w-[430px] h-[280px] sm:h-[340px] md:h-[370px] lg:h-[410px] xl:h-[430px]">
              {/* Animated Conic Gradient Ring */}
              <motion.div
                className="absolute inset-0 rounded-full p-[3px] shadow-[0_0_60px_rgba(99,102,241,0.4)]"
                style={{
                  background: 'conic-gradient(from 0deg, #6366F1, #8B5CF6, #06B6D4, #10B981, #6366F1)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-[#07080F]" />
              </motion.div>

              {/* Inner Picture Container */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden bg-[#0A0D18] border border-white/15 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Supun Lakshan Ekanayake"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_top] rounded-full transition-transform duration-700 hover:scale-105 brightness-[1.02] contrast-[1.02]"
                />
              </div>

              {/* Floating Glass Pill 1: Full Stack */}
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-4 lg:-left-8 lg:bottom-6 glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 border border-white/10 shadow-2xl backdrop-blur-xl z-20 max-w-[210px] sm:max-w-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <FiCode size={17} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Full Stack Dev</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">React · Node · Java</p>
                </div>
              </motion.div>

              {/* Floating Glass Pill 2: Graduate */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 lg:-right-8 lg:top-6 glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 border border-white/10 shadow-2xl backdrop-blur-xl z-20 max-w-[210px] sm:max-w-none"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple/20 to-indigo-500/20 border border-purple/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <FaGraduationCap size={17} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">BEng Graduate</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">Software Engineering</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center gap-2.5 mt-20 text-slate-500 text-[11px] font-mono tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group hover:text-slate-300 transition-colors"
          >
            <span>Scroll Down</span>
            <div className="w-5 h-9 rounded-full border border-white/20 p-1 flex justify-center group-hover:border-indigo-400/50 transition-colors">
              <motion.div
                className="w-1.5 h-2 bg-gradient-to-b from-indigo-400 to-cyan-400 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
