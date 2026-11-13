import { motion } from 'framer-motion'
import { AiFillRocket } from 'react-icons/ai'
import { FaGraduationCap, FaProjectDiagram } from 'react-icons/fa'
import { FiMonitor, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    icon: <FaProjectDiagram />,
    title: 'Lead Full Stack Developer — Atuwa Platform',
    company: 'Flagship Agri-Tech Project',
    location: 'Sri Lanka',
    date: '2026 – Present',
    desc: 'Architecting and developing Atuwa, a full-stack e-commerce marketplace connecting Sri Lankan farmers directly with consumers. Designed relational schema in MySQL, implemented modular frontend in React, established API endpoints, and built user checkout flows.',
    tags: ['React', 'JavaScript', 'MySQL', 'Full Stack Architecture', 'REST APIs', 'UI/UX Design'],
    glow: 'rgba(99, 102, 241, 0.4)',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Software Engineering Graduate Developer',
    company: 'IIC University of Technology',
    location: 'Cambodia · Academic & Projects',
    date: '2022 – 2026',
    desc: 'Completed rigorous 4-year BEng (Hons) software engineering curriculum. Engineered foundational academic software systems including an enterprise LMS, student portal, and banking system with EJB scheduled services. Applied OOP paradigms, database normalisation, and agile team practices.',
    tags: ['Java EE', 'Spring Boot', 'React', 'MySQL', 'Software Architecture', 'Agile'],
    glow: 'rgba(59, 130, 246, 0.4)',
  },
  {
    icon: <FiMonitor />,
    title: 'Freelance Web Developer',
    company: 'Independent Contractor',
    location: 'Remote · Client Work',
    date: '2023 – 2024',
    desc: 'Delivered client web solutions and landing pages for small businesses and personal brands. Handled end-to-end development, from wireframing to deployment, optimizing for high mobile responsiveness, SEO foundations, and cross-browser consistency.',
    tags: ['HTML5/CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
    glow: 'rgba(6, 182, 212, 0.4)',
  },
  {
    icon: <AiFillRocket />,
    title: 'Open to Software Engineering Opportunities',
    company: 'Software Engineer / Full Stack Intern / Junior Role',
    location: 'Sri Lanka / Remote Worldwide',
    date: 'Available Immediately',
    desc: 'Eager to contribute engineering skills to a collaborative team building real-world enterprise products. Ready to adapt quickly, write robust test-driven code, and contribute to scalable web applications and distributed systems.',
    tags: ['Full Stack Ready', 'Fast Learner', 'Problem Solver', 'Team Collaboration'],
    glow: 'rgba(16, 185, 129, 0.4)',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <FiBriefcase className="text-indigo-400" />
            <span>Career Path</span>
          </div>
          <h2
            className="font-syne font-extrabold tracking-tight mt-1 text-white"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Experience & <span className="grad-text">Journey</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-md mx-auto text-sm sm:text-base font-normal">
            Track record of building production projects, engineering academic systems, and professional growth.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical Spine */}
          <div
            className="absolute left-9 sm:left-13 top-4 bottom-4 w-[2px]"
            style={{
              background: 'linear-gradient(180deg, #6366F1 0%, #8B5CF6 35%, #06B6D4 70%, transparent 100%)',
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative flex items-start gap-6 sm:gap-8 group"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Timeline Node Icon Pin */}
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-lg text-white flex-shrink-0 z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
                    boxShadow: `0 0 25px ${exp.glow}`,
                  }}
                >
                  <span className="text-indigo-300 group-hover:text-white transition-colors">
                    {exp.icon}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 sm:p-7 group-hover:border-indigo-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-syne font-bold text-base sm:text-lg text-white group-hover:text-indigo-200 transition-colors">
                      {exp.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                      <FiCalendar size={12} />
                      {exp.date}
                    </span>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin size={11} className="text-cyan" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                    {exp.desc}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
