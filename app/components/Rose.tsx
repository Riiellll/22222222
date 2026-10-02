import type { CSSProperties } from "react";

const PALS = {
  red: ["#4a0512", "#8e0f2e", "#b3123a", "#c81e4a", "#e0446a"],
  pink: ["#b83a5e", "#e0446a", "#f28ba5", "#f6a9bd", "#f8d7de"],
  blush: ["#d98a9c", "#f28ba5", "#f8d7de", "#fbeff0", "#fff7f7"],
};
export type Tone = keyof typeof PALS;

const RINGS = [
  { n: 7, s: 1 },
  { n: 6, s: 0.84 },
  { n: 5, s: 0.68 },
  { n: 4, s: 0.5 },
  { n: 3, s: 0.32 },
];
const PETAL = "M0 2C-22-4-25-34 0-43C25-34 22-4 0 2Z";

export default function Rose({
  size = 80,
  tone = "red",
  spin = 0,
  className = "",
  style,
}: {
  size?: number;
  tone?: Tone;
  spin?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const pal = PALS[tone];
  return (
    <svg className={`rose ${className}`} width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden="true">
      {RINGS.map((ring, i) =>
        Array.from({ length: ring.n }, (_, k) => (
          <path
            key={`${i}-${k}`}
            d={PETAL}
            transform={`translate(50 50) rotate(${(360 / ring.n) * k + i * 23 + spin}) scale(${ring.s})`}
            fill={pal[i]}
            stroke={pal[Math.max(0, i - 1)]}
            strokeOpacity="0.55"
            strokeWidth="1"
          />
        ))
      )}
      <path d="M50 50m-2.5 0a2.5 2.5 0 1 1 2.5 2.5a5 5 0 1 1-5-5" fill="none" stroke={pal[0]} strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
