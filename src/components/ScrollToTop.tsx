import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900/90 backdrop-blur-xl border border-white/15 text-slate-200 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-600/20 shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <FiArrowUp size={18} />
    </button>
  )
}
