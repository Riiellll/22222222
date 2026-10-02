"use client";

import { useEffect, useState } from "react";
import { data } from "../data";

export default function Together() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = now === null ? null : Math.max(0, now - new Date(data.startDate).getTime());
  const pad = (n: number) => String(n).padStart(2, "0");

  const units =
    diff === null
      ? [["days", "–"], ["hours", "–"], ["minutes", "–"], ["seconds", "–"]]
      : [
          ["days", String(Math.floor(diff / 86400000))],
          ["hours", pad(Math.floor(diff / 3600000) % 24)],
          ["minutes", pad(Math.floor(diff / 60000) % 60)],
          ["seconds", pad(Math.floor(diff / 1000) % 60)],
        ];

  return (
    <section className="section wrap together">
      <h2 className="h2">I've been loving you for</h2>
      <div className="units">
        {units.map(([label, value]) => (
          <div className="unit" key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="lede">And I'm just getting started.</p>
    </section>
  );
}
