import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiInstagram,
  FiArrowUpRight,
  FiMessageSquare,
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const contacts = [
  {
    icon: <SiWhatsapp />,
    title: 'WhatsApp',
    value: '+94 71 387 2042',
    actionText: 'Direct WhatsApp Chat',
    link: 'https://wa.me/94713872042',
    accent: '#10B981',
  },
  {
    icon: <FiLinkedin />,
    title: 'LinkedIn',
    value: 'Lakshan Ekanayake',
    actionText: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/lakshan-ekanayake-164909296/',
    accent: '#3B82F6',
  },
  {
    icon: <FiGithub />,
    title: 'GitHub',
    value: 'MRekanayake',
    actionText: 'View Repositories',
    link: 'https://github.com/Mrekanayake6',
    accent: '#8B5CF6',
  },
  {
    icon: <FiInstagram />,
    title: 'Instagram',
    value: '@s.ekanayake_',
    actionText: 'Follow on Instagram',
    link: 'https://www.instagram.com/s.ekanayake_?igsh=MTlodnM1NXRmdXNjMg%3D%3D&utm_source=qr',
    accent: '#EC4899',
  },
  {
    icon: <FiMapPin />,
    title: 'Location',
    value: 'Kandy / Colombo, Sri Lanka',
    actionText: 'View on Google Maps',
    link: 'https://maps.google.com/?q=Sri+Lanka',
    accent: '#06B6D4',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden scroll-mt-24"
    >
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-indigo-500/10 via-cyan/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

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
            <FiMessageSquare className="text-indigo-400" />
            <span>Get Connected</span>
          </div>
          <h2
            className="font-syne font-extrabold tracking-tight mt-1 text-white"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Let's Start a <span className="grad-text">Conversation</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm sm:text-base font-normal">
            Whether you have an internship opportunity, a project to build, or simply want to connect — reach out directly through any platform below.
          </p>
        </motion.div>

        {/* Contact Matrix */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {contacts.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Subtle top-right icon link */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-xl text-white shadow-inner group-hover:scale-105 transition-transform duration-300"
                  style={{ color: c.accent }}
                >
                  {c.icon}
                </div>

                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/[0.08] transition-colors">
                  <FiArrowUpRight size={15} />
                </div>
              </div>

              <div>
                <h3 className="font-syne font-bold text-white text-base mb-1">
                  {c.title}
                </h3>
                <p className="text-slate-200 text-sm font-medium font-mono truncate mb-3">
                  {c.value}
                </p>
                <span className="text-xs font-semibold text-indigo-400 group-hover:text-cyan transition-colors flex items-center gap-1">
                  {c.actionText} →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Internal specular light ray */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
            Let’s Build Something <span className="grad-text">Amazing 🚀</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            I am currently open for full-time junior software engineer positions, internships, and collaborations focused on building modern, scalable web solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/94713872042"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <SiWhatsapp size={16} className="text-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshan-ekanayake-164909296/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiLinkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
