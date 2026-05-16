"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef();
  const glowRef = useRef();

  useEffect(() => {
    // Hero entrance animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      },
    );

    // Mouse movement animation
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(glowRef.current, {
        x: clientX - window.innerWidth / 2,
        y: clientY - window.innerHeight / 2,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28 md:pt-32 relative overflow-hidden bg-black"
    >
      {/* Static subtle grid glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_50%)]" />

      {/* 🔥 Mouse-follow glow */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full
        bg-cyan-400/20 blur-[120px] pointer-events-none
        -translate-x-1/2 -translate-y-1/2"
      />

      <div ref={heroRef} className="max-w-5xl text-center relative z-10">
        <p className="uppercase tracking-[0.4em] text-cyan-400 mb-6">
          Frontend Developer
        </p>

        <h1 className="text-5xl md:text-8xl font-black leading-tight">
          Building
          <span className="text-cyan-400"> futuristic </span>
          digital experiences.
        </h1>

        <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          I’m FavourDeCreative, a creative web developer focused on building
          immersive, responsive, and high-performance websites using modern web
          technologies.
        </p>

        <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            View Projects
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#contact"
            className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
