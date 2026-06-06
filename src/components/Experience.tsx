import { motion } from 'framer-motion'
import { AiFillRocket } from 'react-icons/ai';
import { FaGraduationCap, FaProjectDiagram, } from 'react-icons/fa';
import { FiMonitor,    } from "react-icons/fi";

const experiences = [
  {
    icon: <FaProjectDiagram/>,
    title: 'Lead Developer — Atua Platform',
    company: 'Personal Project · Sri Lanka',
    date: '2024 – Present',
    desc: 'Architecting and building Atua, a full-stack e-commerce platform for Sri Lankan medicinal products. Designed the database schema, built RESTful APIs with Node.js/Express, and crafted a mobile-first React frontend with seamless product browsing and checkout flow.',
    tags: ['React', 'Node.js', 'MySQL', 'REST API', 'Mobile-First'],
    glow: 'rgba(139,92,246,0.4)',
  },
  {
    icon: <FaGraduationCap/>,
    title: 'BEng graduate Developer',
    company: 'Java Institute · Sri Lanka',
    date: '2023 – Present',
    desc: 'Active participant in academic software engineering projects including an LMS, student portal, and enterprise inventory management system. Applying OOP principles, agile methodologies, and full-stack development practices in collaborative team environments.',
    tags: ['Java', 'React', 'MySQL', 'Agile'],
    glow: 'rgba(59,130,246,0.4)',
  },
  {
    icon: <FiMonitor/>,
    title: 'Freelance Web Developer',
    company: 'Self-Employed · Remote',
    date: '2023 – 2024',
    desc: 'Delivered responsive websites and web applications for small businesses and entrepreneurs. Projects ranged from portfolio sites and landing pages to custom inventory and booking systems. Focused on performance, mobile responsiveness, and clean UX.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'WordPress'],
    glow: 'rgba(6,182,212,0.4)',
  },
  {
    icon: <AiFillRocket/>,
    title: 'Seeking Software Engineering Internship',
    company: 'Open to Opportunities · Sri Lanka / Remote',
    date: 'Available Now',
    desc: 'Ready to join a dynamic engineering team as an intern or junior developer. Strong foundation in full-stack development, eager to learn from experienced engineers, contribute to production codebases, and grow professionally.',
    tags: ['Full Stack', 'Internship Ready', 'Fast Learner', 'Team Player'],
    glow: 'rgba(139,92,246,0.4)',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'linear-gradient(180deg, #0B0B0F, rgba(59,130,246,0.03), #0B0B0F)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Experience</span>
          <h2 className="font-syne font-extrabold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            My <span className="grad-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, #8B5CF6, #06B6D4, transparent)' }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="flex gap-8 mb-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Dot */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 z-10"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', boxShadow: `0 0 20px ${exp.glow}` }}
              >
                {exp.icon}
              </div>

              {/* Card */}
              <div className="flex-1 glass glass-hover rounded-2xl p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h3 className="font-syne font-bold text-base">{exp.title}</h3>
                  <span className="text-xs text-purple-light bg-purple/10 border border-purple/20 px-3 py-1 rounded-full whitespace-nowrap">{exp.date}</span>
                </div>
                <p className="text-white/45 text-sm mb-3">{exp.company}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple/10 border border-purple/15 text-purple-light">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}