"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const skills = [
  { img: "/skills/html.png" },
  { img: "/skills/tailwind.png" },
  { img: "/skills/react.png" },
  { img: "/skills/next.png" },
  { img: "/skills/vue.png" },
  { img: "/skills/gsap.png" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(95);
      } else if (window.innerWidth < 1024) {
        setRadius(135);
      } else {
        setRadius(170);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-[60px] pb-12 sm:pt-[80px] md:flex md:items-center md:pt-[120px]">

      {/* BACKGROUND */}
      <div className="hero absolute inset-0" />

      {/* BLOBS */}
      <div className="absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full blur-[120px] sm:h-[280px] sm:w-[280px]" />
      <div className="absolute -bottom-24 -left-24 h-[200px] w-[200px] rounded-full blur-[120px] sm:h-[240px] sm:w-[240px]" />

      <div
        ref={heroRef}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16"
      >

        {/* ORBIT */}
        <div className="relative order-1 flex min-h-[320px] items-start justify-center pt-2 sm:min-h-[420px] sm:items-center md:order-2 md:min-h-[500px]">

          {/* GLOW */}
          <div className="absolute h-[180px] w-[180px] rounded-full blur-3xl sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px]" />

          {/* CENTER IMAGE */}
          <div className="relative z-10 h-32 w-32 overflow-hidden rounded-full border sm:h-44 sm:w-44 md:h-56 md:w-56">
            <img
              src="/me.jpg"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ORBIT RING */}
          <div
            className="absolute rounded-full border"
            style={{
              width: radius * 2 + 60,
              height: radius * 2 + 60,
            }}
          />

          {/* ORBIT ITEMS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative animate-spin-slow"
              style={{
                width: radius * 2,
                height: radius * 2,
              }}
            >
              {skills.map((skill, i) => {
                const angle = (i / skills.length) * 2 * Math.PI;

                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    <div className="animate-counter-spin">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl transition hover:scale-110 sm:h-11 sm:w-11 md:h-14 md:w-14">

                        <img
                          src={skill.img}
                          alt="skill"
                          className="h-4 w-4 object-contain sm:h-5 sm:w-5 md:h-8 md:w-8"
                        />

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:pt-12 md:text-left">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] sm:text-sm md:mb-6 md:text-base">
            Frontend Developer
          </p>

          <h1 className="max-w-[14ch] text-3xl font-black leading-[1.05] sm:text-5xl md:text-7xl">
            Building{" "}
            <span>
              futuristic
            </span>{" "}
            digital experiences.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed sm:text-base md:mt-8 md:text-lg">
            I'm FavourDeCreative, a creative web developer focused on building
            immersive, responsive, and high-performance websites using modern
            web technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 md:mt-12 md:justify-start md:gap-5">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
            >
              View Projects
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="rounded-full border px-5 py-3 text-sm transition sm:px-8 sm:py-4 sm:text-base"
            >
              Hire Me
            </a>

          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }

        .animate-counter-spin {
          animation: counter 18s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}