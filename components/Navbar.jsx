"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import logoImg from "@/public/logo1.png";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 bg-[#071925]/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        {/* 1. LOGO (LEFT) */}
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3 text-lg font-bold tracking-wide text-white sm:text-xl"
        >
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <Image
              src={logoImg}
              alt="FavourDeCreative Logo"
              placeholder="blur"
              priority
            />
          </div>
          <span className="fst truncate">
            Favour<span className="logo-text">DeCreative</span>
          </span>
        </Link>

        {/* 2. NAVLINKS (MIDDLE) */}
        <nav className="hidden flex-1 items-center justify-center gap-2 text-sm font-medium txt lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-full px-3 py-2 transition hover:text-white xl:px-4"
            >
              {link.name}
              {/* Subtle blue active/hover indicator dot underneath */}
              <span className="absolute bottom-1 left-1/2 h-1 w-3 -translate-x-1/2 rounded-full opacity-0 line transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* 3. LET'S TALK BUTTON (RIGHT) */}
        <div className="hidden shrink-0 items-center lg:flex">
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 btn2 xl:px-5"
          >
            <span className="hidden xl:inline">Visit Our Academy</span>
            <span className="xl:hidden">Academy</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-x-0 top-20 flex flex-col gap-2 border-b border-white/10 bg-[#071925]/95 p-4 shadow-xl backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium tt transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full border py-3 text-base font-medium btn2"
          >
            Visit Our Academy
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
