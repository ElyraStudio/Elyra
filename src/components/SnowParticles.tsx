import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  opacity: number;
}

const SnowParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 40 : 100;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Algumas partículas maiores para criar profundidade
        r: Math.random() * 1.5 + (Math.random() > 0.9 ? 1 : 0.2),
        vx: (Math.random() - 0.5) * 0.3, // Movimento lateral sutil
        vy: Math.random() * 0.5 + 0.1,   // Velocidade de descida
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };

    const animate = () => {
      // Background levemente transparente para criar um rastro mínimo (motion blur)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        
        // Cor primária sutil (azul/celeste) misturada ao branco
        ctx.fillStyle = `rgba(200, 230, 255, ${p.opacity})`;
        ctx.fill();

        // Movimento
        p.y += p.vy;
        p.x += p.vx;

        // Reposicionamento (Seamless Loop)
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-[1] opacity-60"
      aria-hidden="true"
    />
  );
};

export default SnowParticles;