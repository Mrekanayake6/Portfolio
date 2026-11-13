import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiLayers, FiCheckCircle } from 'react-icons/fi'
import atuwaImage from '../assets/atuwa.png'
import bankImage from '../assets/bank.png'

interface Project {
  id: number
  featured?: boolean
  category: 'Full Stack' | 'Enterprise Java' | 'Frontend / AI'
  title: string
  subtitle: string
  image: string | null
  desc: string
  highlights?: string[]
  tags: string[]
  github: string
  live: string | null
}

const projects: Project[] = [
  {
    id: 1,
    featured: true,
    category: 'Full Stack',
    title: 'Atuwa — E-Commerce Platform',
    subtitle: 'Agricultural E-Commerce & Direct Farmer Marketplace',
    image: atuwaImage,
    desc: 'A full-scale mobile-first e-commerce platform bridging Sri Lankan farmers with consumers. Features curated medicinal rice, spices, ancient grains, dynamic product filtering, cart management, and order handling.',
    highlights: [
      'Complete shopping flow with cart & checkout',
      'Mobile-first responsive architecture',
      'High-performance product catalog & search',
    ],
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Vercel'],
    github: 'https://github.com/Mrekanayake6',
    live: 'https://atuwa-ui.vercel.app/',
  },
  {
    id: 2,
    category: 'Enterprise Java',
    title: 'EJB Banking System & Time Services',
    subtitle: 'Enterprise Financial Transaction Engine',
    image: bankImage,
    desc: 'An enterprise banking application built using Enterprise JavaBeans (EJB 3.x) managing secure accounts, deposits, fund transfers, and audit logs. Utilizes automated EJB Timer Services for periodic interest calculation and account maintenance.',
    highlights: [
      'Automated background scheduled tasks via EJB Timers',
      'Transactional integrity and ACID compliance',
      'Comprehensive customer ledger & history',
    ],
    tags: ['Java EE', 'EJB 3', 'Hibernate', 'MySQL', 'GlassFish'],
    github: 'https://github.com/Mrekanayake6',
    live: null,
  },
  {
    id: 3,
    category: 'Full Stack',
    title: 'DevConnect — Developer Community Forum',
    subtitle: 'Technical Discussion & Knowledge Platform',
    image: null,
    desc: 'A modern developer Q&A forum with threaded discussions, interactive code snippets with syntax highlighting, community upvoting, tag filtering, and JWT-secured user authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    github: 'https://github.com/Mrekanayake6',
    live: null,
  },
  {
    id: 4,
    category: 'Enterprise Java',
    title: 'EduPortal — Academic Management System',
    subtitle: 'Institution Course & Learning Hub',
    image: null,
    desc: 'A comprehensive LMS facilitating automated student enrollment, course syllabi delivery, assignment submissions, grading pipelines, and digital certificate generation.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'React'],
    github: 'https://github.com/Mrekanayake6',
    live: null,
  },
  {
    id: 5,
    category: 'Frontend / AI',
    title: 'TaskFlow AI — Smart Productivity Suite',
    subtitle: 'Intelligent Kanban & Workflow Automation',
    image: null,
    desc: 'An AI-enhanced task management application with drag-and-drop Kanban workflow, dynamic priority weighting, deadline reminders, and team productivity analytics.',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'OpenAI'],
    github: 'https://github.com/Mrekanayake6',
    live: null,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Enterprise Java' | 'Frontend / AI'>('All')

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-tag">
              <FiFolder className="text-indigo-400" />
              <span>Selected Works</span>
            </div>
            <h2
              className="font-syne font-extrabold tracking-tight mt-1 text-white"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              Featured <span className="grad-text">Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-normal">
            Real-world software engineering applications, enterprise architectures, and digital products built with modern stacks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {(['All', 'Full Stack', 'Enterprise Java', 'Frontend / AI'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan text-white shadow-glow-sm scale-105'
                  : 'bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-indigo-500/40 transition-all duration-300 ${
                p.featured && filter === 'All' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Card Media Preview Header */}
              <div
                className={`relative w-full overflow-hidden bg-[#0A0D18] border-b border-white/[0.08] flex items-center justify-center ${
                  p.featured && filter === 'All' ? 'h-64 sm:h-72' : 'h-52'
                }`}
              >
                {/* Browser Mockup Chrome Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 backdrop-blur-md border-b border-white/[0.08] px-3.5 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                    {p.title.split('—')[0].toLowerCase().trim()}.app
                  </span>
                  <div className="w-6" />
                </div>

                {p.image ? (
                  <div className="w-full h-full pt-8 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ) : (
                  /* Stylized Code / Dashboard Placeholder for projects without screenshots */
                  <div className="w-full h-full pt-8 p-6 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-950/40 via-[#0B0D18] to-cyan-950/30 relative">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 shadow-glow-sm group-hover:scale-110 transition-transform duration-300">
                      <FiLayers size={26} />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-300 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                      {p.subtitle}
                    </span>
                  </div>
                )}

                {/* Badges Overlay */}
                {p.featured && (
                  <div className="absolute top-11 left-3.5 z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-gradient-to-r from-indigo-500 via-purple to-cyan px-3 py-1 rounded-full shadow-lg">
                      ★ Flagship Project
                    </span>
                  </div>
                )}

                <div className="absolute top-11 right-3.5 z-20">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-300 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-syne font-bold text-lg text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                    {p.desc}
                  </p>

                  {/* Highlights if featured */}
                  {p.highlights && (
                    <ul className="mb-5 space-y-1.5">
                      {p.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-center gap-2 text-xs text-slate-300">
                          <FiCheckCircle className="text-emerald-400 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 ${
                      p.live ? 'flex-1' : 'w-full'
                    }`}
                  >
                    <FiGithub size={14} />
                    <span>View Repository</span>
                  </a>

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple to-cyan hover:opacity-90 transition-all duration-200 shadow-glow-sm hover:scale-[1.02]"
                    >
                      <span>Live Preview</span>
                      <FiExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
