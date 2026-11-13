import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../useInView'
import { FiTarget, FiZap, FiCode, FiAward } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'

const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+', icon: <FiCode /> },
  { label: 'Technologies Mastered', value: 20, suffix: '+', icon: <FiZap /> },
  { label: 'Years Experience', value: 4, suffix: '+', icon: <HiSparkles /> },
  { label: 'Certifications', value: 5, suffix: '', icon: <FiAward /> },
]

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Redux Toolkit",
  "REST APIs",
  "Git & GitHub",
  "Android Dev",
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.5)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 40
    const interval = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 25)
    return () => clearInterval(interval)
  }, [inView, target])

  return (
    <div ref={ref} className="grad-text font-syne font-extrabold text-3xl sm:text-4xl">
      {count}
      {suffix}
    </div>
  )
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT: Bio & Skill Tags (Col 7) */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">
              <HiSparkles className="text-indigo-400" />
              <span>About Me</span>
            </div>

            <h2
              className="font-syne font-extrabold leading-tight tracking-tight mb-6 text-white"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}
            >
              Crafting High-Impact <br />
              <span className="grad-text">Digital Solutions</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm <strong className="text-white font-semibold">Supun Lakshan Ekanayake</strong>, a dedicated Software Engineer and Full Stack Developer from{' '}
                <strong className="text-white font-semibold">Sri Lanka 🇱🇰</strong>. I graduated with a{' '}
                <strong className="text-white font-semibold">BEng (Hons) in Software Engineering</strong> from{' '}
                <strong className="text-indigo-300 font-semibold">IIC University of Technology</strong>.
              </p>
              <p>
                I specialize in architecting end-to-end software applications that combine maintainable architecture, sleek user interfaces, and robust backend engineering. Whether building reactive frontends or scalable microservices, my focus is always on delivering measurable value and seamless user experiences.
              </p>
              <p>
                Currently, I am spearheading <strong className="text-white font-semibold">Atuwa</strong> — a specialized mobile-first e-commerce ecosystem empowering local agricultural producers to reach direct markets with modern inventory and payment infrastructure.
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/80 border border-white/10 hover:border-indigo-400/40 hover:text-indigo-300 hover:bg-indigo-950/30 transition-all duration-200 cursor-default shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: High-End Highlight Cards & Stats (Col 5) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Career Objective Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-glow-sm">
                  <FiTarget size={18} />
                </div>
                <h4 className="font-syne font-bold text-white text-base">Career Objective</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                To contribute as a software engineering professional in forward-thinking teams, developing scalable, enterprise-grade software while mastering cutting-edge cloud architectures and modern development paradigms.
              </p>
            </div>

            {/* Currently Working On Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cyan/15 border border-cyan/30 flex items-center justify-center text-cyan shadow-glow-cyan">
                  <FiZap size={18} />
                </div>
                <h4 className="font-syne font-bold text-white text-base">Current Highlight</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Developing <strong className="text-cyan font-semibold">Atuwa</strong> — a full-featured e-commerce platform and supply chain bridge connecting indigenous Sri Lankan organic farmers directly to consumers, with secure transaction processing.
              </p>
            </div>

            {/* Stats Matrix */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-5 text-center group hover:border-indigo-500/30 transition-all duration-300"
                >
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                  <p className="text-slate-400 text-xs font-medium mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
