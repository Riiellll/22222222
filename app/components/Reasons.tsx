"use client";

import { useState } from "react";
import { data } from "../data";
import Rose from "./Rose";

export default function Reasons() {
  const list = data.reasons;
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const go = (n: number) => {
    setDir(n > 0 ? "next" : "prev");
    setI((c) => (c + n + list.length) % list.length);
  };

  return (
    <section className="section wrap reasons">
      <h2 className="h2">{list.length} reasons I love you</h2>

      <div className="deck">
        <div className="card ghost g2" />
        <div className="card ghost g1" />
        <article
          key={i}
          className={`card top in-${dir}`}
          onClick={() => go(1)}
          aria-live="polite"
        >
          <Rose size={46} tone="pink" className="card-rose" />
          <span className="count hand">
            {i + 1} of {list.length}
          </span>
          <p className="reason">{list[i]}</p>
        </article>
      </div>

      <div className="deck-controls">
        <button className="icon-btn" onClick={() => go(-1)} aria-label="Previous reason">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button className="pill" onClick={() => go(1)}>
          Next reason
        </button>
      </div>
    </section>
  );
}
