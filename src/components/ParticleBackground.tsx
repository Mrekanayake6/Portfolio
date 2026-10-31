import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Particle colors in luxury tech palette
    const colors = [
      "rgba(129, 140, 248, ", // indigo
      "rgba(167, 139, 250, ", // violet
      "rgba(56, 189, 248, ",  // sky cyan
      "rgba(45, 212, 191, ",  // teal
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      alpha: number;
    }

    const particleCount = Math.min(Math.floor((w * h) / 18000), 65);
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1,
      baseColor: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.3,
    }));

    const maxDist = 140;
    const maxDist2 = maxDist * maxDist;

    let mouseX = w / 2;
    let mouseY = h / 2;
    let targetMouseX = w / 2;
    let targetMouseY = h / 2;

    const onMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, w, h);

      // Subtle ambient radial glow following mouse
      const ambientGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 500);
      ambientGlow.addColorStop(0, "rgba(99, 102, 241, 0.06)");
      ambientGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.02)");
      ambientGlow.addColorStop(1, "transparent");
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        // Draw particle node
        ctx.fillStyle = `${p.baseColor}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist2 = dx * dx + dy * dy;

          if (dist2 < maxDist2) {
            const opacity = (1 - dist2 / maxDist2) * 0.22;
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connection to mouse
        const dxm = p.x - mouseX;
        const dym = p.y - mouseY;
        const distm = dxm * dxm + dym * dym;

        if (distm < maxDist2 * 1.5) {
          const opacity = (1 - distm / (maxDist2 * 1.5)) * 0.3;
          ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-80"
      style={{ display: "block" }}
    />
  );
}
