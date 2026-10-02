"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#C81E4A", "#E0446A", "#F28BA5", "#8E0F2E", "#F8D7DE", "#B3123A"];

type P = {
  x: number; y: number; s: number; vy: number; vx: number; r: number; vr: number;
  sw: number; a: number; c: string; ex: number; ey: number; burst: boolean;
};

export default function Petals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const make = (anywhere: boolean): P => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -24,
      s: 7 + Math.random() * 10,
      vy: 0.35 + Math.random() * 0.55,
      vx: (Math.random() - 0.5) * 0.3,
      r: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.03,
      sw: Math.random() * Math.PI * 2,
      a: 0.28 + Math.random() * 0.5,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      ex: 0,
      ey: 0,
      burst: false,
    });

    const burst = (x: number, y: number): P => {
      const ang = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 5;
      return {
        ...make(false),
        x, y,
        s: 6 + Math.random() * 9,
        a: 0.65 + Math.random() * 0.3,
        ex: Math.cos(ang) * sp,
        ey: Math.sin(ang) * sp - 2,
        burst: true,
      };
    };

    const count = w < 600 ? 24 : 44;
    const petals: P[] = Array.from({ length: count }, () => make(true));

    const onTap = (e: PointerEvent) => {
      if (petals.length > 170) return;
      for (let i = 0; i < 14; i++) petals.push(burst(e.clientX, e.clientY));
    };
    window.addEventListener("pointerdown", onTap);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.ex *= 0.95;
        p.ey *= 0.95;
        p.y += p.vy + p.ey;
        p.sw += 0.015;
        p.x += p.vx + Math.sin(p.sw) * 0.4 + p.ex;
        p.r += p.vr;
        if (p.y > h + 24) {
          if (p.burst) {
            petals.splice(i--, 1);
            continue;
          }
          petals[i] = make(false);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.moveTo(0, -p.s);
        ctx.bezierCurveTo(p.s * 0.7, -p.s * 0.6, p.s * 0.6, p.s * 0.6, 0, p.s);
        ctx.bezierCurveTo(-p.s * 0.6, p.s * 0.6, -p.s * 0.7, -p.s * 0.6, 0, -p.s);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.18)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -p.s * 0.8);
        ctx.lineTo(0, p.s * 0.8);
        ctx.stroke();
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onTap);
    };
  }, []);

  return <canvas ref={ref} className="petals" aria-hidden="true" />;
}
