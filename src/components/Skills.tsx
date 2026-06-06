import { motion } from 'framer-motion'
import { useInView } from '../useInView'
import { FaPaintBrush } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const categories = [
  {
    icon: <FaPaintBrush />, title: 'Frontend', gradient: 'from-purple/20 to-blue/20',
    skills: [
      { name: 'React.js', pct: 88 }, { name: 'TypeScript', pct: 80 },
      { name: 'JavaScript ES6+', pct: 85 }, { name: 'HTML5 & CSS3', pct: 92 },
      { name: 'Tailwind CSS', pct: 87 },
    ],
  },
  {
    icon: <FaCogs />, title: 'Backend', gradient: 'from-cyan/20 to-blue/20',
    skills: [
      { name: 'Node.js', pct: 82 }, { name: 'Express.js', pct: 80 },
      { name: 'Java', pct: 75 }, { name: 'REST API Design', pct: 83 },
    ],
  },
  {
    icon: <FaDatabase />, title: 'Database', gradient: 'from-emerald-500/20 to-cyan/20',
    skills: [
      { name: 'MySQL', pct: 78 }, { name: 'MongoDB', pct: 75 },
      { name: 'Database Design', pct: 77 },{ name: 'Firebase Firestore', pct: 80 },
    ],
  },
  {
    icon: <FaTools />, title: 'Tools & DevOps', gradient: 'from-amber-500/20 to-red-500/20',
    skills: [
      { name: 'Git & GitHub', pct: 85 }, { name: 'Postman', pct: 82 },
      { name: 'VS Code', pct: 90 }, { name: 'Agile / Scrum', pct: 72 },
    ],
  },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

function SkillBar({ name, pct, inView, delay }: { name: string; pct: number; inView: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/75">{name}</span>
        <span className="text-xs text-white/40">{pct}%</span>
      </div>
      <div className="h-1 bg-white/[0.07] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-10" style={{ background: 'linear-gradient(180deg, #0B0B0F 0%, rgba(139,92,246,0.03) 50%, #0B0B0F 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Technical Skills</span>
          <h2 className="font-syne font-extrabold mt-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            My <span className="grad-text">Tech Stack</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto">Technologies I work with to build modern, scalable applications</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="p-8 rounded-2xl glass glass-hover"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-syne font-bold">{cat.title}</h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} inView={inView} delay={ci * 0.1 + si * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}