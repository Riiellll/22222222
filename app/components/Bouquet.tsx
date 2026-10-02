"use client";

import { useState } from "react";
import { data } from "../data";
import Rose, { type Tone } from "./Rose";

const TONES: Tone[] = ["red", "pink", "red", "blush", "pink", "red"];

export default function Bouquet() {
  const { bouquet } = data;
  const [opened, setOpened] = useState<number[]>([]);
  const [cur, setCur] = useState<number | null>(null);
  const total = bouquet.promises.length;

  const pick = (i: number) => {
    setCur(i);
    setOpened((o) => (o.includes(i) ? o : [...o, i]));
  };

  return (
    <section className="section wrap">
      <h2 className="h2">{bouquet.title}</h2>
      <p className="lede">{bouquet.hint}</p>

      <div className="bq">
        {bouquet.promises.map((_, i) => (
          <button
            key={i}
            className={`bq-btn${opened.includes(i) ? " on" : ""}${cur === i ? " cur" : ""}`}
            style={{ animationDelay: `${i * 0.35}s` }}
            onClick={() => pick(i)}
            aria-label={`Open rose ${i + 1}`}
          >
            <Rose size={104} tone={TONES[i % TONES.length]} spin={i * 40} />
          </button>
        ))}
      </div>

      {cur !== null && (
        <div className="paper bq-note" key={cur} aria-live="polite">
          <span className="hand bq-count">
            {opened.length} of {total} opened
          </span>
          <p>{bouquet.promises[cur]}</p>
        </div>
      )}
      {opened.length === total ? <p className="lede bq-final">{bouquet.final}</p> : null}
    </section>
  );
}
