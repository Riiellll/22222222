"use client";

import { useState, type CSSProperties } from "react";
import { data } from "../data";
import Rose, { type Tone } from "./Rose";

type Bit = { left: number; delay: number; dur: number; size: number; color: string; rose: boolean; tone: Tone };

const COLORS = ["#E0446A", "#F28BA5", "#F8D7DE", "#E9BFB8"];
const TONES: Tone[] = ["red", "pink", "blush"];
const ROSES: { size: number; tone: Tone; lift: number }[] = [
  { size: 58, tone: "pink", lift: 0 },
  { size: 74, tone: "red", lift: 14 },
  { size: 94, tone: "red", lift: 28 },
  { size: 74, tone: "pink", lift: 14 },
  { size: 58, tone: "blush", lift: 0 },
];

export default function Wish() {
  const [out, setOut] = useState(false);
  const [bits, setBits] = useState<Bit[]>([]);
  const { wish } = data;

  const blow = () => {
    if (out) return;
    setOut(true);
    setBits(
      Array.from({ length: 56 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        dur: 3 + Math.random() * 2.5,
        size: 14 + Math.random() * 18,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rose: Math.random() < 0.3,
        tone: TONES[Math.floor(Math.random() * TONES.length)],
      }))
    );
    window.setTimeout(() => setBits([]), 7000);
  };

  return (
    <section className="section wrap wish">
      <h2 className="h2">{out ? wish.after : wish.before}</h2>

      <button className="cake-btn" onClick={blow} disabled={out} aria-label="Blow out the candle">
        <svg viewBox="0 0 240 240" aria-hidden="true">
          <ellipse cx="120" cy="208" rx="104" ry="14" fill="#000" opacity=".6" />
          <ellipse cx="120" cy="198" rx="100" ry="12" fill="#F8D7DE" />
          <rect x="48" y="134" width="144" height="62" rx="12" fill="#8E0F2E" />
          <circle cx="76" cy="166" r="4" fill="#E9BFB8" />
          <circle cx="104" cy="176" r="4" fill="#E9BFB8" />
          <circle cx="136" cy="166" r="4" fill="#E9BFB8" />
          <circle cx="164" cy="176" r="4" fill="#E9BFB8" />
          <rect x="64" y="94" width="112" height="46" rx="12" fill="#C81E4A" />
          <path
            d="M64 106 q0 -12 12 -12 h88 q12 0 12 12 v4 q-8 14 -16 0 q-8 16 -16 0 q-8 12 -16 0 q-8 18 -16 0 q-8 12 -16 0 q-8 16 -16 0 q-8 14 -16 0 z"
            fill="#FBEFF0"
          />
          <rect x="116" y="58" width="8" height="38" rx="3" fill="#E9BFB8" />
          <path d="M116 70 l8 6 M116 82 l8 6" stroke="#C99A93" strokeWidth="2" />
          {out ? (
            <path className="smoke" d="M120 52 q-9 -10 0 -18 q9 -8 0 -18" />
          ) : (
            <g>
              <circle cx="120" cy="40" r="26" fill="#FFC857" opacity=".18" />
              <path className="flame" d="M120 24 q11 15 0 30 q-11 -15 0 -30z" fill="#FFB224" />
              <path className="flame" d="M120 36 q5 8 0 17 q-5 -9 0 -17z" fill="#FFF1B8" />
            </g>
          )}
        </svg>
      </button>

      {out ? (
        <div className="finale">
          <p className="finale-text">{wish.message}</p>
          <p className="hand finale-sign">
            {wish.closing}
            <br />
            {data.from}
          </p>
          <div className="finale-roses" aria-hidden="true">
            {ROSES.map((r, i) => (
              <span key={i} className="fr" style={{ animationDelay: `${0.4 + i * 0.22}s`, marginBottom: r.lift }}>
                <Rose size={r.size} tone={r.tone} spin={i * 37} />
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className="lede">{wish.hint}</p>
      )}

      <div className="confetti" aria-hidden="true">
        {bits.map((b, i) => (
          <span
            key={i}
            className="bit"
            style={
              {
                left: `${b.left}%`,
                fontSize: `${b.size}px`,
                color: b.color,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.dur}s`,
              } as CSSProperties
            }
          >
            {b.rose ? <Rose size={Math.round(b.size * 1.7)} tone={b.tone} /> : "♥"}
          </span>
        ))}
      </div>
    </section>
  );
}
