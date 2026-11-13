export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#05060A]" />

      {/* Static Subtle Modern Grid with Radial Mask */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 20%, black 20%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 20%, black 20%, transparent 95%)',
        }}
      />

      {/* Static Ambient Color Radiance (No movement / No animation) */}
      <div
        className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, #3B82F6 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[38%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[10%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
