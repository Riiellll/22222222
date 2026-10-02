"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { data } from "../data";

const TILTS = [-3, 2.5, -1.5, 3, -2.5, 1.5, -3.5, 2];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const total = data.gallery.length;

  const step = (n: number) =>
    setOpen((o) => (o === null ? null : (o + n + total) % total));

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open === null]);

  const current = open === null ? null : data.gallery[open];

  return (
    <section className="section wrap">
      <h2 className="h2">Little pieces of us</h2>
      <p className="lede">Tap a photo to see it up close.</p>

      <ul className="polaroids">
        {data.gallery.map((g, i) => (
          <li key={g.src} style={{ ["--tilt" as string]: `${TILTS[i % TILTS.length]}deg` } as CSSProperties}>
            <button className="polaroid" onClick={() => setOpen(i)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span className="cap">{g.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setOpen(null)}
        >
          <button className="icon-btn lb-close" onClick={() => setOpen(null)} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <figure className="lb-card" key={open} onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.caption} />
            <figcaption className="cap">{current.caption}</figcaption>
          </figure>

          <div className="lb-nav" onClick={(e) => e.stopPropagation()}>
            <button className="icon-btn" onClick={() => step(-1)} aria-label="Previous photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button className="icon-btn" onClick={() => step(1)} aria-label="Next photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
