import { motion } from 'framer-motion'
import { useInView } from '../useInView'
import { FiLayout, FiServer, FiDatabase, FiCpu, FiCode } from 'react-icons/fi'

const categories = [
  {
    icon: <FiLayout className="text-indigo-400" />,
    title: 'Frontend Engineering',
    description: 'Modern, responsive, accessible web interfaces',
    accentColor: 'indigo',
    skills: [
      { name: 'React.js & Next.js', pct: 90 },
      { name: 'TypeScript & JavaScript (ES6+)', pct: 86 },
      { name: 'Tailwind CSS & Modern CSS3', pct: 92 },
      { name: 'HTML5 & Responsive Layouts', pct: 95 },
      { name: 'Redux Toolkit & State Management', pct: 84 },
    ],
  },
  {
    icon: <FiServer className="text-cyan" />,
    title: 'Backend & APIs',
    description: 'Scalable services, business logic, microservices',
    accentColor: 'cyan',
    skills: [
      { name: 'Node.js & Express.js', pct: 85 },
      { name: 'Java & Object Oriented Design', pct: 82 },
      { name: 'RESTful API Architecture', pct: 88 },
      { name: 'Spring Boot (Foundations)', pct: 75 },
      { name: 'Authentication (JWT, OAuth)', pct: 80 },
    ],
  },
  {
    icon: <FiDatabase className="text-emerald-400" />,
    title: 'Database Architecture',
    description: 'Relational data modeling, NoSQL document stores',
    accentColor: 'emerald',
    skills: [
      { name: 'MySQL & Relational Modeling', pct: 84 },
      { name: 'MongoDB & NoSQL Schemas', pct: 80 },
      { name: 'Firebase & Firestore', pct: 82 },
      { name: 'Database Optimization & Indexing', pct: 76 },
    ],
  },
  {
    icon: <FiCpu className="text-purple-light" />,
    title: 'Tools, DevOps & Methodology',
    description: 'Version control, API testing, agile practices',
    accentColor: 'purple',
    skills: [
      { name: 'Git & GitHub Collaboration', pct: 88 },
      { name: 'Postman & API Validation', pct: 86 },
      { name: 'Agile & Scrum Workflow', pct: 80 },
      { name: 'VS Code & Dev Productivity', pct: 92 },
    ],
  },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

function SkillBar({
  name,
  pct,
  inView,
  delay,
}: {
  name: string
  pct: number
  inView: boolean
  delay: number
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs sm:text-sm font-medium text-slate-200">{name}</span>
        <span className="text-xs font-mono font-semibold text-slate-400">{pct}%</span>
      </div>
      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden p-[1px] border border-white/[0.04]">
        <motion.div
          className="h-full rounded-full shadow-[0_0_12px_rgba(99,102,241,0.5)]"
          style={{
            background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)',
          }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <FiCode className="text-indigo-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            className="font-syne font-extrabold tracking-tight mt-2 text-white"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            My <span className="grad-text">Tech Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm sm:text-base font-normal">
            Specialized engineering capabilities and tech stacks honed through real-world software development.
          </p>
        </motion.div>

        {/* 2x2 Grid of Skill Categories */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-2xl p-7 sm:p-8 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-indigo-200 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="pt-2">
                {cat.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    pct={s.pct}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
