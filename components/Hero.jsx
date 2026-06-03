"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logoImg from "@/public/logo1.png";

import {
  ArrowUpRight,
  Smile,
  Users,
  Rocket,
  BadgeCheck,
  Globe,
  PenBox,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    value: "50+",
    label: "Projects",
    icon: Smile,
  },
  {
    value: "30+",
    label: "Clients",
    icon: Users,
  },
  {
    value: "3+",
    label: "Years",
    icon: Rocket,
  },
  {
    value: "100%",
    label: "Satisfaction",
    icon: BadgeCheck,
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const shadowRef = useRef(null);
const card1Ref = useRef(null);
const card2Ref = useRef(null);
const card3Ref = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".hero-left", {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-right", {
      opacity: 0,
      x: 60,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".stat-card", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.4,
    });

    // Logo floating
    gsap.to(logoRef.current, {
      y: -25,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Logo tilt
    gsap.to(logoRef.current, {
      rotate: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Shadow breathing
    gsap.to(shadowRef.current, {
      scale: 0.75,
      opacity: 0.25,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Scroll rotation
    gsap.to(logoRef.current, {
      rotationY: 45,
      rotationX: 15,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Floating cards
    gsap.to(card1Ref.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(card2Ref.current, {
      y: -20,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(card3Ref.current, {
      y: -12,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <div className="mb-4">
              <p className="uppercase tracking-[0.3em] text-xs font-semibold txt">
                Welcome To FavourDeCreative
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We Build Modern
              <br />
              <span className="one">Web Experiences</span>
              <br />
              That Drive Results.
            </h1>

            <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed">
              We help brands and businesses grow online with
              high-performing websites and digital solutions
              that deliver measurable results.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border btn1"
              >
                View Our Work

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
  className="hero-right relative flex justify-center items-center"
  style={{ perspective: "1200px" }}
>
  <div
    className="
      relative
      w-full
      max-w-[260px]
      sm:max-w-[320px]
      md:max-w-[420px]
      lg:max-w-[520px]
      xl:max-w-[600px]
      aspect-square
      border
      rounded-[32px]
      flex
      items-center
      justify-center
      transition-all
      duration-500
    "
  >
    {/* Shadow */}
    <div
      ref={shadowRef}
      className="
        absolute
        bottom-8
        md:bottom-10
        w-32
        md:w-48
        h-6
        md:h-10
        rounded-full
        bg-black/20
        blur-2xl
        z-0
      "
    />

    {/* Logo */}
    <div
      ref={logoRef}
      className="
        relative
        z-10
        will-change-transform
        [transform-style:preserve-3d]
      "
    >
      <Image
        src={logoImg}
        alt="FavourDeCreative Logo"
        placeholder="blur"
        priority
        className="
          select-none
          w-[180px]
          sm:w-[220px]
          md:w-[300px]
          lg:w-[380px]
          xl:w-[450px]
          h-auto
        "
      />
    </div>

    {/* UI/UX */}
    <div
      ref={card1Ref}
      className="
        absolute
        top-4 md:top-8
        -left-2 md:-left-6
        px-3 py-2
        md:px-5 md:py-3
        border
        rounded-2xl
        icon
        flex
        items-center
        gap-2
        text-xs
        md:text-sm
      "
    >
      <PenBox size={16} />
      <span>UI / UX Design</span>
    </div>

    {/* Web Development */}
    <div
      ref={card2Ref}
      className="
        absolute
        bottom-8 md:bottom-16
        -left-3 md:-left-10
        px-3 py-2
        md:px-5 md:py-3
        border
        rounded-2xl
        icon
        flex
        items-center
        gap-2
        text-xs
        md:text-sm
      "
    >
      <Globe size={16} />
      <span>Web Development</span>
    </div>

    {/* SEO */}
    <div
      ref={card3Ref}
      className="
        absolute
        top-1/2
        -right-2 md:-right-8
        px-3 py-2
        md:px-5 md:py-3
        border
        rounded-2xl
        icon
        flex
        items-center
        gap-2
        text-xs
        md:text-sm
      "
    >
      <Rocket size={16} />
      <span>SEO</span>
    </div>
  </div>
</div>

              {/* Floating Card 1 */}
              <div className="absolute top-8 -left-6 border rounded-2xl px-5 py-3 icon flex items-center gap-2">
                <PenBox size={18} />
                <span>UI / UX Design</span>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-16 -left-10 border rounded-2xl px-5 py-3 icon flex items-center gap-2">
                <Globe size={18} />
                <span>Web Development</span>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute top-1/2 -right-8 rounded-2xl px-5 py-3 icon flex items-center gap-2">
                <Rocket size={18} />
                <span>SEO</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-16">
          <div className="flex gap-4 justify-between">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="
                    stat-card
                    flex-1
                    border
                    rounded-2xl
                    p-4
                    text-center
                  "
                >
                  <Icon
                    size={20}
                    className="mx-auto mb-3"
                  />

                  <h3 className="text-xl md:text-3xl font-bold">
                    {stat.value}
                  </h3>

                  <p className="text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}