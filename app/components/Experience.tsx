"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { data } from "../data";
import Heart from "./Heart";
import Petals from "./Petals";
import Rose from "./Rose";

type Phase = "closed" | "opening" | "open" | "gone";

export default function Experience({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("closed");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", phase !== "gone");
    return () => document.body.classList.remove("locked");
  }, [phase]);

  const openLetter = () => {
    if (phase !== "closed") return;
    setPhase("opening");

    const audio = audioRef.current;
    if (data.music && audio) {
      audio.volume = 0.6;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }

    window.setTimeout(() => setPhase("open"), 2400);
    window.setTimeout(() => setPhase("gone"), 3700);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const revealed = phase === "open" || phase === "gone";

  useEffect(() => {
    if (!revealed || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".section, .divider"));
    els.forEach((el) => el.classList.add("pre"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("seen");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [revealed]);

  return (
    <div className="stage" data-phase={phase}>
      {data.music ? <audio ref={audioRef} src={data.music} loop preload="auto" /> : null}

      {revealed ? <Petals /> : null}

      {phase !== "gone" && (
        <div className={`gate ${phase}`}>
          <Petals />
          <p className="gate-title">A letter for {data.name}</p>

          <div className="envelope" onClick={openLetter}>
            <div className="env-back" />
            <div className="env-letter">
              <span className="env-heart">
                <Heart size={22} />
              </span>
              <span className="hand">Happy birthday</span>
            </div>
            <div className="env-front" />
            <div className="env-flap" />
            <button
              className="seal"
              onClick={(e) => {
                e.stopPropagation();
                openLetter();
              }}
              aria-label="Open your letter"
            >
              <Heart size={26} />
            </button>
            <span className="env-rose" style={{ right: -22, top: -36 }}>
              <Rose size={64} tone="pink" className="float" />
            </span>
            <span className="env-rose" style={{ left: -28, bottom: -24 }}>
              <Rose size={80} className="float" style={{ animationDelay: "-2s" }} />
            </span>
            <span className="env-rose" style={{ right: -16, bottom: -22 }}>
              <Rose size={52} tone="blush" spin={30} className="float" style={{ animationDelay: "-3.5s" }} />
            </span>
          </div>

          <p className="gate-tap">Tap the seal to open it</p>
        </div>
      )}

      {data.music && revealed ? (
        <button
          className="music"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm11-2a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </button>
      ) : null}

      <main>{children}</main>
    </div>
  );
}
