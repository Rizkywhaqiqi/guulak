"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Our Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Outlets", href: "/outlets" },
  { name: "Gallery", href: "/gallery" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-word" aria-label="Guulak home" onClick={() => setOpen(false)}>GUULAK<span className="brand-dot">!</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.name}</Link>)}
        </nav>
        <Link href="/menu" className="nav-pill">Explore Menu <ArrowUpRight size={17} aria-hidden /></Link>
        <button className="mobile-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => <Link onClick={() => setOpen(false)} href={link.href} key={link.href}>{link.name}<ArrowUpRight size={18} /></Link>)}
        </nav>
      )}
    </header>
  );
}
