"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const stars: Star[] = [];
    const STAR_COUNT = 180;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.15 + 0.02,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle =
          Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.4 +
          0.6;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 180, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y < -star.radius) {
          star.y = canvas.height + star.radius;
          star.x = Math.random() * canvas.width;
        }
      });

      // Occasional shooting star
      if (Math.random() < 0.002) {
        const sx = Math.random() * canvas.width;
        const sy = Math.random() * (canvas.height / 2);
        const len = 80 + Math.random() * 60;
        const angle = Math.PI / 4;
        const grad = ctx.createLinearGradient(
          sx,
          sy,
          sx + Math.cos(angle) * len,
          sy + Math.sin(angle) * len
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        grad.addColorStop(1, "rgba(191, 90, 242, 0)");
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + Math.cos(angle) * len, sy + Math.sin(angle) * len);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    draw();

    const handleResize = () => {
      resize();
      initStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
