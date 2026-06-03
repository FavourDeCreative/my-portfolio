"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import logoImg from "@/public/logo1.png"; // Adjust the path (e.g., "../../public/logo.png") depending on your folder depth

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 bg-[#071925]/70">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* 1. LOGO (LEFT) */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-wider text-white"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="FavourDeCreative Logo"
              placeholder="blur"
              className=""
              priority
            />
          </div>
          <span className="fst">
            Favour<span className="logo-text">DeCreative</span>
          </span>
        </Link>

        {/* 2. NAVLINKS (MIDDLE) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium txt">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative transition hover:text-white py-1 group"
            >
              {link.name}
              {/* Subtle blue active/hover indicator dot underneath */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* 3. LET'S TALK BUTTON (RIGHT) */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="flex items-center gap-2 border btn2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-all duration-300  group"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#071925]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-5 shadow-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium tt hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 border rounded-full py-3 mt-4 text-base font-medium btn2"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
