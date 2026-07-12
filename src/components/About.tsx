import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../useInView'



const stats = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies', value: 8, suffix: '' },
  { label: 'Years Coding', value: 2, suffix: '+' },
  { label: 'Certifications', value: 5, suffix: '' },
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
  "Git",
  "Postman"
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.5)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 60
    const interval = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(interval) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(interval)
  }, [inView, target])

  return <div ref={ref} className="grad-text font-syne font-extrabold text-4xl">{count}{suffix}</div>
}

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-10"style={{ background: 'linear-gradient(180deg, #0B0B0F 0%, rgba(139,92,246,0.03) 50%, #0B0B0F 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>
            <span className="section-tag">About Me</span>
            <h2 className="font-syne font-extrabold leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Crafting Digital <span className="grad-text">Experiences</span>
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed">
              <p>I'm <strong className="text-white">Supun Lakshan Ekanayake</strong>, a passionate Software Engineer and Full Stack Developer from <strong className="text-white">Sri Lanka</strong>. I hold a <strong className="text-white">BEng (Hons) in Software Engineering from IIC University of Technology</strong>, I specialize in building scalable, user-centric web applications.</p>
              <p>I love turning complex problems into elegant solutions — with a strong focus on clean code, modern architectures, and seamless user experiences across all devices.</p>
              <p>My current flagship project is <strong className="text-white">Atuwa</strong> — an online mobile commerce platform for medicinal rice, grains, flour, and spices connecting Sri Lankan farmers with consumers.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {skills.map(s => (
                <span key={s} className="px-3 py-1.5 rounded-full text-sm font-medium text-purple-light bg-purple/10 border border-purple/20">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="rounded-2xl p-7 border mb-5" style={{ background: 'linear-gradient(135deg,rgba(139,92,246,.08),rgba(6,182,212,.08))', borderColor: 'rgba(139,92,246,.15)' }}>
              <h4 className="text-purple-light font-bold mb-3">  Career Objective</h4>
              <p className="text-white/60 text-sm leading-relaxed">To secure an internship or junior software engineering role where I can contribute meaningfully to impactful products, grow as a developer, and collaborate with experienced teams on real-world challenges.</p>
            </div>
            <div className="rounded-2xl p-7 border mb-7" style={{ background: 'linear-gradient(135deg,rgba(6,182,212,.08),rgba(59,130,246,.08))', borderColor: 'rgba(6,182,212,.15)' }}>
              <h4 className="text-cyan font-bold mb-3"> Currently Working On</h4>
              <p className="text-white/60 text-sm leading-relaxed">Atuwa — a mobile-first e-commerce platform for authentic Sri Lankan medicinal rice, grains, flour, and spices, featuring a modern product catalog and secure ordering system.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="glass glass-hover rounded-2xl p-6 text-center">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                  <p className="text-white/40 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}