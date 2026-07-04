import { motion } from 'framer-motion'
import { image } from 'framer-motion/client'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    featured: true,

    emoji: '',
    title: 'Atuwa — E Commerce Platform',
    image: 'src/assets/atuwa.png',
    desc: 'A mobile-first online marketplace connecting Sri Lankan farmers with consumers. Features a curated catalog of medicinal rice, ancient grains, flour varieties, and aromatic spices with secure ordering and integrated payment.',
    tags: ['HTML', 'CSS', 'MySQL',],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.3), rgba(16,185,129,0.2))',
    github: 'https://github.com/Mrekanayake6', live: 'https://atuwa-ui.vercel.app/',
  },
  {
    id: 2,
    emoji: '',
    title: 'DevConnect — Developer Forum',
    image: null,
    desc: 'A Q&A community platform for developers with threaded discussions, code snippets with syntax highlighting, upvotes, tag-based filtering, and real-time notifications.',
    tags: ['React', 'MongoDB', 'Node.js', 'JWT Auth'],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(139,92,246,0.3))',
    github: 'https://github.com/Mrekanayake6', live: '#',
  },
  {
    id: 3,
    emoji: '',
    title: 'ExpenseTrack — Finance Dashboard',
    image: null,
    desc: 'Personal finance management app with visual analytics, smart budget tracking, recurring transactions, category breakdowns, and CSV export functionality.',
    tags: ['React', 'TypeScript', 'Chart.js', 'MySQL'],
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.4), rgba(16,185,129,0.3))',
    github: 'https://github.com/Mrekanayake6', live: '#',
  },
  {
    id: 4,
    emoji: '',
    title: 'EduPortal — Learning Management System',
    image: null,
    desc: 'Full-featured LMS for course delivery, student progress tracking, quizzes, assignment submission, and automatic certificate generation for academic institutions.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(239,68,68,0.3))',
    github: 'https://github.com/Mrekanayake6', live: null,
  },
  {
    id: 5,
    emoji: '',
    title: 'TaskFlow AI — Smart Task Manager',
    image: null,
    desc: 'Intelligent task management with AI-powered prioritization, drag-and-drop kanban board, team collaboration features, deadline reminders, and productivity analytics.',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(59,130,246,0.2))',
    github: 'https://github.com/Mrekanayake6', live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'linear-gradient(180deg, #0B0B0F 0%, rgba(139,92,246,0.03) 50%, #0B0B0F 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="section-tag">Portfolio</span>
            <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Featured <span className="grad-text">Projects</span>
            </h2>
          </motion.div>
          <p className="text-white/50 text-sm max-w-xs">Showcasing real-world applications I've designed and built from scratch.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={`glass rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-purple/30 ${p.featured ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              
              <div
                className="relative flex items-center justify-center"
                style={{ height: p.featured ? 240 : 180, background: p.gradient }}
              >
                <img
                  src={p.image ?? undefined}

                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {p.featured && (
                  <span className="absolute top-4 left-4 text-xs font-bold text-white bg-gradient-to-r from-purple to-blue px-3 py-1.5 rounded-full">⭐ Featured</span>
                )}
                <span className="text-4xl">{p.emoji}</span>
                <span className="absolute bottom-4 right-4 text-xs text-white/50 border border-white/15 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">{p.title.split('—')[0].trim()}</span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-syne font-bold text-base mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple/10 border border-purple/15 text-purple-light">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={p.github} className="flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-full bg-white/6 border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all">
                    <FiGithub size={13} /> GitHub
                  </a>
                  {p.live && (
                    <a href={p.live} className="flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-full text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' }}>
                      <FiExternalLink size={13} /> Live Demo
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