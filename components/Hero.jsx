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
        setRadius(70);
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
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071925] px-5 py-24 flex items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,84,4,0.10),transparent_45%),radial-gradient(circle_at_center,rgba(139,92,246,0.10),transparent_55%)]" />

      {/* BLOBS */}
      <div className="absolute top-[-100px] right-[-100px] h-[220px] w-[220px] rounded-full bg-cyan-400/30 blur-[120px]" />

      <div className="absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-orange-500/30 blur-[120px]" />

      {/* CONTENT */}
      <div
        ref={heroRef}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2"
      >
        {/* TEXT */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300 sm:text-sm md:text-base">
            Frontend Developer & Graphic Designer
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              futuristic
            </span>{" "}
            websites & creative digital experiences.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:mx-0 md:text-lg">
            I'm FavourDeCreative, a frontend developer and graphic designer in
            Nigeria focused on creating immersive, responsive, and
            high-performance websites, branding, logos, and modern digital
            experiences for businesses and creators.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 px-6 py-3 font-semibold text-black transition hover:scale-105 sm:px-8 sm:py-4"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black sm:px-8 sm:py-4"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* ORBIT */}
        <div className="relative order-1 flex items-center justify-center md:order-2">
          {/* GLOW */}
          <div className="absolute h-[220px] w-[220px] rounded-full bg-gradient-to-br from-cyan-400/20 via-orange-500/10 to-purple-500/20 blur-3xl sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]" />

          {/* CENTER IMAGE */}
          <div className="relative z-10 h-32 w-32 overflow-hidden rounded-full border border-white/20 sm:h-44 sm:w-44 md:h-56 md:w-56">
            <img
              src="/me.jpg"
              alt="FavourDeCreative Frontend Developer and Graphic Designer"
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
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:scale-110 sm:h-12 sm:w-12 md:h-14 md:w-14"
                        style={{
                          boxShadow: `0 0 18px ${skill.glow}`,
                        }}
                      >
                        <img
                          src={skill.img}
                          alt="Frontend development skill"
                          className="h-4 w-4 object-contain sm:h-6 sm:w-6 md:h-8 md:w-8"
                        />

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
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