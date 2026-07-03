import { motion } from 'framer-motion'
import  { FaBook, FaGraduationCap } from 'react-icons/fa'

const educations = [
  {
    icon: <FaGraduationCap/>,
    degree: 'BEng — Software Engineering',
    institution: 'Java Institute for Advanced Technology',
    period: '2023 – Present · Undergraduate',
    desc: 'Comprehensive software engineering program covering OOP, data structures, algorithms, web development, database design, software architecture, and project management. Active member of the coding club and tech community.',
    tags: ['Software Engineering', 'OOP', 'Algorithms', 'Web Dev'],
    gradient: 'from-purple/10 to-blue/10',
    borderColor: 'rgba(139,92,246,0.2)',
    glowColor: 'rgba(139,92,246,0.1)',
  },
  {
    icon: <FaBook/>,
    degree: 'Self-Directed Learning',
    institution: 'Online Platforms & Open Source',
    period: '2022 – Present · Continuous',
    desc: 'Supplementing formal education with courses on Udemy, Coursera, and freeCodeCamp. Completed specializations in React, Node.js, TypeScript, and modern full-stack development. Active contributor on GitHub.',
    tags: ['Udemy', 'Coursera', 'freeCodeCamp', 'Open Source'],
    gradient: 'from-cyan/10 to-blue/10',
    borderColor: 'rgba(6,182,212,0.2)',
    glowColor: 'rgba(6,182,212,0.1)',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-6 md:px-10"style={{ background: 'linear-gradient(180deg, #0B0B0F 0%, rgba(139,92,246,0.03) 50%, #0B0B0F 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Education</span>
          <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Academic <span className="grad-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${edu.gradient} border transition-all duration-300 hover:-translate-y-2`}
              style={{ borderColor: edu.borderColor }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: `radial-gradient(circle, ${edu.glowColor}, transparent 70%)` }} />

              <div className="text-4xl mb-5">{edu.icon}</div>
              <h3 className="font-syne font-bold text-lg mb-1">{edu.degree}</h3>
              <p className="text-purple-light font-medium text-sm mb-1">{edu.institution}</p>
              <p className="text-white/40 text-xs mb-4">📅 {edu.period}</p>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{edu.desc}</p>
              <div className="flex flex-wrap gap-2">
                {edu.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple/10 border border-purple/15 text-purple-light">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}