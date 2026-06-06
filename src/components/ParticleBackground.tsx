import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const maxDist = 130;
    const maxDist2 = maxDist * maxDist;

    const mouse = { x: w / 2, y: h / 2 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.fillStyle = "rgba(10,10,18,0.25)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // dot
        ctx.fillStyle = "#A78BFA";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist2 = dx * dx + dy * dy;

          if (dist2 < maxDist2) {
            const opacity = 1 - dist2 / maxDist2;

            ctx.strokeStyle = `rgba(167,139,250,${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // mouse lines
        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const distm = dxm * dxm + dym * dym;

        if (distm < maxDist2) {
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: "block" }}
    />
  );
}