"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    type P = { x: number; y: number; rx: number; vx: number; vy: number; a: number; ma: number; life: number; ml: number; col: [number, number, number]; pulse: boolean; ps: number; sp: boolean; sw: number; ss: number };
    let particles: P[] = [];
    let raf = 0;

    const resize = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };

    const colorPick = (): [number, number, number] => {
      // Awakened Academy brand particles: warm gold, soft cream, teal accent, soft magenta
      const palette: [number, number, number][] = [
        [188, 156, 118], // gold
        [216, 189, 150], // gold-lt
        [244, 237, 224], // cream
        [10, 138, 130],  // teal-soft
        [196, 168, 196], // dusty magenta highlight
      ];
      const weights = [0.38, 0.28, 0.18, 0.1, 0.06];
      const r = Math.random();
      let s = 0;
      for (let i = 0; i < weights.length; i++) {
        s += weights[i];
        if (r < s) return palette[i];
      }
      return palette[0];
    };

    const spawn = (): P => {
      const col = colorPick();
      return {
        x: Math.random() * W,
        y: H + Math.random() * 40,
        rx: Math.random() * 2.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.25 + Math.random() * 0.5),
        a: 0,
        ma: Math.random() * 0.6 + 0.1,
        life: 0,
        ml: 200 + Math.random() * 300,
        col,
        pulse: Math.random() < 0.3,
        ps: 0.02 + Math.random() * 0.03,
        sp: Math.random() < 0.12,
        sw: Math.random() * Math.PI * 2,
        ss: 0.008 + Math.random() * 0.015,
      };
    };

    const init = () => {
      particles = [];
      const n = Math.min(Math.floor((W * H) / 9000), 120);
      for (let i = 0; i < n; i++) {
        const p = spawn();
        p.y = Math.random() * H;
        p.a = p.ma * Math.random();
        p.life = Math.random() * p.ml;
        particles.push(p);
      }
    };

    const sparkle = (p: P) => {
      const a = p.rx * 2.5;
      const [r, g, b] = p.col;
      ctx.strokeStyle = `rgba(${r},${g},${b},${p.a})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(p.x - a, p.y); ctx.lineTo(p.x + a, p.y);
      ctx.moveTo(p.x, p.y - a); ctx.lineTo(p.x, p.y + a);
      ctx.moveTo(p.x - a * 0.7, p.y - a * 0.7); ctx.lineTo(p.x + a * 0.7, p.y + a * 0.7);
      ctx.moveTo(p.x + a * 0.7, p.y - a * 0.7); ctx.lineTo(p.x - a * 0.7, p.y + a * 0.7);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p, i) => {
        p.life++;
        p.sw += p.ss;
        p.x += p.vx + Math.sin(p.sw) * 0.04;
        p.y += p.vy;
        const pr = p.life / p.ml;
        p.a = pr < 0.15
          ? p.ma * (pr / 0.15)
          : pr > 0.75
            ? p.ma * (1 - (pr - 0.75) / 0.25)
            : p.pulse
              ? p.ma * (0.6 + 0.4 * Math.sin(p.life * p.ps))
              : p.ma;
        if (p.sp) {
          sparkle(p);
        } else {
          const [r, g, b] = p.col;
          const g2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.rx * 3.5);
          g2.addColorStop(0, `rgba(${r},${g},${b},${p.a})`);
          g2.addColorStop(0.5, `rgba(${r},${g},${b},${p.a * 0.4})`);
          g2.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.rx * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = g2;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.rx * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${p.a * 1.5})`;
          ctx.fill();
        }
        if (p.life >= p.ml || p.y < -20) particles[i] = spawn();
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas id="particles" ref={ref} />;
}
