import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiInstagram,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiMessageSquare,
  FiSend,
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const contacts = [
  {
    icon: <FiMail />,
    title: 'Email Address',
    value: 'lakshanekanayake6@gmail.com',
    actionText: 'Send Email',
    link: 'mailto:lakshanekanayake6@gmail.com',
    isEmail: true,
    accent: '#6366F1',
  },
  {
    icon: <SiWhatsapp />,
    title: 'WhatsApp',
    value: '+94 71 387 2042',
    actionText: 'Direct Chat',
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
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('lakshanekanayake6@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setSending(true)

    // Simulate reliable dispatch & formulate mailto fallback
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      // Open mailto as automated seamless dispatch
      const mailtoUrl = `mailto:lakshanekanayake6@gmail.com?subject=Message from ${encodeURIComponent(
        formState.name
      )} via Portfolio&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`
      window.location.href = mailtoUrl
    }, 700)
  }

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
            Whether you have an internship opportunity, a project to build, or simply want to connect — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target={c.link.startsWith('http') || c.link.startsWith('mailto') ? '_blank' : '_self'}
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

        {/* Quick Message Form & Direct Call-to-Action */}
        <motion.div
          className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Internal specular light ray */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 text-left">
              <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                Send a <span className="grad-text">Direct Message</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Have an inquiry or project proposal? Send a quick note directly, or reach out instantly via WhatsApp or Email.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/94713872042"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all text-slate-200 text-sm"
                >
                  <SiWhatsapp className="text-emerald-400 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-xs text-white">Instant WhatsApp Chat</p>
                    <p className="text-[11px] text-slate-400">+94 71 387 2042</p>
                  </div>
                </a>

                <a
                  href="mailto:lakshanekanayake6@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all text-slate-200 text-sm"
                >
                  <FiMail className="text-indigo-400 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-xs text-white">Direct Email</p>
                    <p className="text-[11px] text-slate-400 truncate">lakshanekanayake6@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 text-2xl">
                    <FiCheck />
                  </div>
                  <h4 className="font-syne font-bold text-lg text-white mb-1">
                    Thank You!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4">
                    Your message has been initiated. Supun will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({ name: '', email: '', message: '' })
                    }}
                    className="text-xs text-emerald-400 font-semibold underline hover:text-emerald-300"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Supun, I would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-primary py-3 text-sm flex items-center justify-center gap-2"
                  >
                    <FiSend size={15} />
                    <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
