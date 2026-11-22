"use client";
import { useEffect, useState } from "react";

export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [text, setText] = useState("0");
  useEffect(() => {
    let n = 0, raf = 0;
    const step = () => {
      n += end / 60;
      if (n < end) { setText(Math.floor(n).toLocaleString("es")); raf = requestAnimationFrame(step); }
      else setText(suffix);
    };
    step();
    return () => cancelAnimationFrame(raf);
  }, [end, suffix]);
  return <b>{text}</b>;
}

export function Clock() {
  const [t, setT] = useState("9:41");
  useEffect(() => {
    const tick = () => { const d = new Date(); setT(`${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`); };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return <div className="time">{t}</div>;
}

export function Year() {
  const [y, setY] = useState<number | null>(null);
  useEffect(() => setY(new Date().getFullYear()), []);
  return <>{y}</>;
}
