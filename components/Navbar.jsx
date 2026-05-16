"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest">
          FavourDeCreative
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 p-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
