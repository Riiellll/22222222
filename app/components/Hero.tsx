import type { CSSProperties } from "react";
import { data } from "../data";
import Rose, { type Tone } from "./Rose";

const GARLAND: { tone: Tone; size: number; pos: CSSProperties; d: number }[] = [
  { tone: "red", size: 58, pos: { top: -34, left: "50%", marginLeft: -29 }, d: 0.2 },
  { tone: "pink", size: 40, pos: { top: 4, left: "22%" }, d: 0.35 },
  { tone: "pink", size: 40, pos: { top: 4, right: "22%" }, d: 0.5 },
  { tone: "red", size: 66, pos: { top: "34%", left: -38 }, d: 0.6 },
  { tone: "blush", size: 44, pos: { top: "18%", right: -30 }, d: 0.75 },
  { tone: "pink", size: 50, pos: { bottom: "22%", left: -24 }, d: 0.9 },
  { tone: "red", size: 72, pos: { bottom: "6%", right: -36 }, d: 1.05 },
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="arch-wrap rv" style={{ ["--d" as string]: "0s" }}>
        <div className="arch-outline" />
        <div className="arch">
          <img src={data.heroPhoto} alt={data.name} />
        </div>
        {GARLAND.map((g, i) => (
          <span key={i} className="hr rv" style={{ ...g.pos, transitionDelay: `${0.5 + g.d}s` }}>
            <Rose
              size={g.size}
              tone={g.tone}
              spin={i * 31}
              className="float"
              style={{ animationDelay: `${-i * 0.9}s`, animationDuration: `${5 + (i % 3)}s` }}
            />
          </span>
        ))}
        <span className="age" aria-label={`${data.age} years old`}>
          {data.age}
        </span>
      </div>

      <h1 className="hero-title rv" style={{ ["--d" as string]: "0.45s" }}>
        Happy birthday,
        <br />
        {data.name}
      </h1>
      <p className="hero-sub rv" style={{ ["--d" as string]: "0.8s" }}>
        {data.heroLine}
      </p>
      <div className="cue rv" style={{ ["--d" as string]: "1.2s" }} aria-hidden="true" />
    </header>
  );
}
