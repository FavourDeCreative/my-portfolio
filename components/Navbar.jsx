"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
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
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 bg-[#071925]/70">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-2xl font-bold tracking-widest
          "
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Favour
          </span>{" "}
          <span className="text-white/80">DeCreative</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-white/70">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative transition
                hover:text-white
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px]
                after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-orange-500
                after:transition-all hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-4 text-lg text-white/70">
          {[
            FaGithub,
            FaLinkedinIn,
            FaInstagram,
            FaXTwitter,
            FaWhatsapp,
            FaFacebookF,
            FaTiktok,
          ].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="
                transition
                hover:scale-110
                hover:bg-gradient-to-r
                hover:from-cyan-400
                hover:via-purple-500
                hover:to-orange-500
                hover:bg-clip-text
                hover:text-transparent
              "
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 p-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-white/80"
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE SOCIALS */}
          <div className="flex items-center gap-5 text-xl pt-4 border-t border-white/10 text-white/70">
            {[
              FaFacebookF,
              FaWhatsapp,
              FaTiktok,
              FaGithub,
              FaLinkedinIn,
              FaInstagram,
              FaXTwitter,
            ].map((Icon, i) => (
              <a key={i} href="#">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
