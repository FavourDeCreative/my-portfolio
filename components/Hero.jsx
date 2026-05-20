"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link"
import {
  Smile,
  Users,
  Rocket,
  BadgeCheck,
  Play,
  ArrowUpRight,
} from "lucide-react";

// ─── Stats Data ──────────────────────────────────────────────────────────────
const STATS = [
  { value: "50+", label: "Projects Completed", icon: Smile },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "3+", label: "Years Experience", icon: Rocket },
  { value: "100%", label: "Client Satisfaction", icon: BadgeCheck },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7 },
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          btnsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-8 overflow-hidden font-sans select-none"
      id="hero"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-20%] right-[-10%] w-[75%] h-[120%] pointer-events-none z-0" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-12 flex flex-col justify-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="opacity-0 flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px]" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase t1">
              Welcome to FavourDeCreative
            </span>
          </div>

          {/* Heading (smaller) */}
          <h1
            ref={headingRef}
            className="opacity-0 font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] t2"
          >
            We Build Modern
            <span className="t3"> Web</span> Experiences
            That Drive <span className="t3">Results.</span>
          </h1>

          {/* Subtitle (reduced spacing) */}
          <p
            ref={subRef}
            className="opacity-0 mt-4 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            We help brands and businesses grow online with high-performing
            websites and digital solutions that deliver real impact.
          </p>

          {/* BUTTONS (smaller padding) */}
          {/* BUTTONS (smaller padding) */}
          <div
            ref={btnsRef}
            className="opacity-0 flex flex-wrap items-center justify-center gap-4 mt-6"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full transition-all duration-300 btn1"
            >
              View Our Work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* Play Showreel removed (unchanged as you commented it out) */}
          </div>
        </div>
      </div>

    </section>
  );
}
