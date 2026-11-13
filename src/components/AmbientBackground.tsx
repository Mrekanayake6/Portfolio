import { useEffect, useRef, useState } from 'react'

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 3
    let currentX = targetX
    let currentY = targetY
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const updateMouse = () => {
      // Smooth lerp easing for the spotlight
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      setMousePos({ x: Math.round(currentX), y: Math.round(currentY) })
      animationId = requestAnimationFrame(updateMouse)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animationId = requestAnimationFrame(updateMouse)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Subtle floating ambient stardust (soft glowing dust particles)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    interface Star {
      x: number
      y: number
      size: number
      alpha: number
      speedY: number
      pulseSpeed: number
      pulseVal: number
      color: string
    }

    const starCount = Math.min(Math.floor((w * h) / 32000), 40)
    const starColors = [
      'rgba(129, 140, 248, ', // indigo
      'rgba(56, 189, 248, ',  // sky cyan
      'rgba(167, 139, 250, ', // violet
      'rgba(241, 245, 249, ', // soft white
    ]

    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      speedY: -(Math.random() * 0.25 + 0.1),
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseVal: Math.random() * Math.PI,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }))

    const render = () => {
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        s.y += s.speedY
        s.pulseVal += s.pulseSpeed

        if (s.y < -10) {
          s.y = h + 10
          s.x = Math.random() * w
        }

        const currentAlpha = Math.max(0.1, s.alpha + Math.sin(s.pulseVal) * 0.2)

        ctx.fillStyle = `${s.color}${currentAlpha})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Obsidian Background */}
      <div className="absolute inset-0 bg-[#05060A]" />

      {/* Cyber Grid with radial vignette mask */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 95%)',
        }}
      />

      {/* Floating Animated Aurora Glows (Smooth Breathing Orbs) */}
      <div
        className="absolute -top-[15%] left-[10%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-30 animate-float"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, #4338CA 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[35%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-25 animate-float_delayed"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, #0284C7 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-20 animate-pulse_slow"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, #6D28D9 50%, transparent 70%)',
        }}
      />

      {/* Interactive Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.09), transparent 80%)`,
        }}
      />

      {/* Subtle Floating Stardust Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  )
}
