"use client";

import { useEffect, useState } from "react";
import { Brand } from "../ui/brand";

const links = [["Our scooters", "#range"], ["Why electric", "#benefits"], ["About us", "#showroom"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    desktop.addEventListener("change", onResize);
    document.addEventListener("keydown", onKey);
    return () => {
      desktop.removeEventListener("change", onResize);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-inner container">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <a className="pill header-showroom" href="#showroom">Find a showroom</a>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}
        <a href="#book-test-ride" onClick={() => setOpen(false)}>Book a test ride<span>↗</span></a>
      </nav>
    </header>
  );
}
