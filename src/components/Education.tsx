import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward, FaBookOpen } from 'react-icons/fa'
import { FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi'

const educations = [
  {
    icon: <FaGraduationCap className="text-indigo-400" />,
    degree: 'Bachelor of Engineering (Hons) in Software Engineering',
    institution: 'IIC University of Technology',
    location: 'Cambodia · Affiliated Program',
    period: '2022 – 2026 · Graduate',
    desc: 'Comprehensive 4-year engineering curriculum focused on rigorous software engineering principles, distributed systems, object-oriented design, relational databases, data structures, algorithms, and cloud paradigms.',
    keyPoints: [
      'Core coursework in Advanced Data Structures, OOP, Software Architecture & Quality',
      'Capstone Projects in Enterprise Java Systems, Web Portals & E-Commerce',
      'Active participant in tech coding clubs and collaborative peer sprints',
    ],
    tags: ['Software Engineering', 'Java EE', 'Database Systems', 'Algorithms', 'Web Architecture'],
    glowColor: 'rgba(99, 102, 241, 0.25)',
  },
  {
    icon: <FaBookOpen className="text-cyan" />,
    degree: 'Continuous Professional Specializations',
    institution: 'Industry Accreditations & Self-Directed Learning',
    location: 'Global Online Platforms · Continuous',
    period: '2022 – Present',
    desc: 'Actively expanding specialized engineering depth through hands-on technical labs, verified industry curricula, and practical open-source project implementations.',
    keyPoints: [
      'Cisco Networking Academy: Network fundamentals & network security principles',
      'KodeKloud & AWS: Modern DevOps, Docker fundamentals, and cloud hosting',
      'Full Stack Modern Web: React, TypeScript, Next.js, Node.js API development',
    ],
    tags: ['Cisco Networking', 'React / TypeScript', 'Docker & DevOps', 'REST APIs', 'Git'],
    glowColor: 'rgba(6, 182, 212, 0.25)',
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <FaAward className="text-indigo-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2
            className="font-syne font-extrabold tracking-tight mt-1 text-white"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Education & <span className="grad-text">Credentials</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-md mx-auto text-sm sm:text-base font-normal">
            Formal engineering degree foundation backed by continuous industry certifications.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Radial Glow Highlight */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${edu.glowColor} 0%, transparent 70%)`,
                }}
              />

              <div>
                {/* Header with Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                    <FiCalendar size={12} className="text-indigo-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-1 group-hover:text-indigo-200 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-indigo-300 text-sm font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                  <FiMapPin size={11} className="text-cyan" />
                  {edu.location}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                  {edu.desc}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-6">
                  {edu.keyPoints.map((kp, kpi) => (
                    <div key={kpi} className="flex items-start gap-2 text-xs text-slate-300">
                      <FiCheckCircle className="text-cyan flex-shrink-0 mt-0.5" />
                      <span>{kp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {edu.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
