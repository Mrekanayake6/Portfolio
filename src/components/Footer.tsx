import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#040508] py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#05060A] rounded-[7px] flex items-center justify-center">
                <span className="font-syne font-extrabold text-xs text-indigo-300">SE</span>
              </div>
            </div>
            <span className="font-syne font-bold text-base text-white tracking-tight">
              Supun Lakshan<span className="text-cyan">.</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 font-normal">
            Software Engineer & Full Stack Developer · Sri Lanka
          </p>
        </div>

        {/* Center: Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Mrekanayake6"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/lakshan-ekanayake-164909296/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="https://wa.me/94713872042"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all"
          >
            <SiWhatsapp size={15} />
          </a>
          <a
            href="mailto:lakshanekanayake6@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all"
          >
            <FiMail size={16} />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Supun Lakshan.</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            title="Back to top"
          >
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

