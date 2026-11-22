"use client";
import { useEffect, useState } from "react";

const items = [
  ["#servicios", "Servicios"],
  ["#ia", "Agente IA"],
  ["#soluciones", "Soluciones"],
  ["#espacios", "Espacios"],
  ["#nosotros", "Nosotros"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container nav-in">
        <a href="#inicio" className="logo"><span className="logo-mark">DIGIX</span>DIGIX GROUP</a>
        <div className={`links${open ? " open" : ""}`}>
          {items.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <a href="#contacto" className="btn btn-primary nav-cta">Cotiza tu proyecto</a>
        <button className="menu-btn" aria-label="Menú" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  );
}
