import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiInstagram, FiCopy, FiCheck, FiArrowUpRight, FiMessageSquare } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const contacts = [
  {
    icon: <FiMail />,
    title: 'Email Address',
    value: 'lakshanekanayake6@gmail.com',
    actionText: 'Send Email',
    link: 'mailto:lakshanekanayake6@gmail.com',
    isEmail: true,
    color: 'from-indigo-500/20 to-purple/20',
    borderColor: 'border-indigo-500/30',
    accent: '#6366F1',
  },
  {
    icon: <SiWhatsapp />,
    title: 'WhatsApp',
    value: '+94 71 387 2042',
    actionText: 'Direct Chat',
    link: 'https://wa.me/94713872042',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    accent: '#10B981',
  },
  {
    icon: <FiLinkedin />,
    title: 'LinkedIn',
    value: 'Lakshan Ekanayake',
    actionText: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/lakshan-ekanayake-164909296/',
    color: 'from-blue-500/20 to-cyan/20',
    borderColor: 'border-blue-500/30',
    accent: '#3B82F6',
  },
  {
    icon: <FiGithub />,
    title: 'GitHub',
    value: 'MRekanayake',
    actionText: 'View Repositories',
    link: 'https://github.com/Mrekanayake6',
    color: 'from-purple/20 to-indigo-500/20',
    borderColor: 'border-purple/30',
    accent: '#8B5CF6',
  },
  {
    icon: <FiInstagram />,
    title: 'Instagram',
    value: '@s.ekanayake_',
    actionText: 'Follow on Instagram',
    link: 'https://www.instagram.com/s.ekanayake_?igsh=MTlodnM1NXRmdXNjMg%3D%3D&utm_source=qr',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30',
    accent: '#EC4899',
  },
  {
    icon: <FiMapPin />,
    title: 'Location',
    value: 'Kandy / Colombo, Sri Lanka',
    actionText: 'Available Worldwide / Remote',
    link: '#',
    color: 'from-cyan/20 to-blue-500/20',
    borderColor: 'border-cyan/30',
    accent: '#06B6D4',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('lakshanekanayake6@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact"
      className="relative z-10 py-28 px-6 md:px-10 overflow-hidden"
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
            Whether you have an internship opportunity, a project to build, or simply want to connect — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target={c.link.startsWith('http') || c.link.startsWith('mailto') ? '_blank' : '_self'}
              rel="noreferrer"
              className={`glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer`}
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

                {c.isEmail ? (
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 text-xs"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="text-emerald-400" />
                        <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy size={13} />
                        <span className="text-[10px] font-mono">Copy</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/[0.08] transition-colors">
                    <FiArrowUpRight size={15} />
                  </div>
                )}
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
          className="mt-16 glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Internal light ray */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
            Ready to Build Something <span className="grad-text">Exceptional?</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            I am currently open for full-time junior software engineer positions, internships, and freelance projects. Let's discuss how I can add value to your organization.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:lakshanekanayake6@gmail.com"
              className="btn-primary"
            >
              <FiMail size={16} />
              <span>Send An Email</span>
            </a>
            <a
              href="https://wa.me/94713872042"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <SiWhatsapp size={16} className="text-emerald-400" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
