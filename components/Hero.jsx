"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const skills = [
  { img: "/skills/html.png", glow: "rgba(255, 84, 4, 0.6)" },
  { img: "/skills/tailwind.png", glow: "rgba(0, 245, 255, 0.6)" },
  { img: "/skills/react.png", glow: "rgba(97, 218, 251, 0.6)" },
  { img: "/skills/next.png", glow: "rgba(255, 255, 255, 0.25)" },
  { img: "/skills/vue.png", glow: "rgba(34, 197, 94, 0.6)" },
  { img: "/skills/gsap.png", glow: "rgba(236, 72, 153, 0.6)" },
];

export default function Hero() {
  const heroRef = useRef();
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 95 : 120);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 pt-[100px] md:pt-[120px] pb-16 relative overflow-hidden bg-[#071925]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,84,4,0.10),transparent_45%),radial-gradient(circle_at_center,rgba(139,92,246,0.10),transparent_55%)]" />

      {/* BLOBS */}
      <div className="absolute w-[280px] h-[280px] bg-cyan-400/30 blur-[140px] top-[-120px] right-[-120px] rounded-full" />
      <div className="absolute w-[260px] h-[260px] bg-orange-500/30 blur-[140px] bottom-[-120px] left-[-120px] rounded-full" />

      <div
        ref={heroRef}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10"
      >
        {/* ORBIT */}
        <div className="relative flex items-center justify-center order-1 md:order-2">
          {/* GLOW */}
          <div className="absolute w-[220px] md:w-[260px] h-[220px] md:h-[260px] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/20 via-orange-500/10 to-purple-500/20" />

          {/* CENTER IMAGE */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/20 z-10">
            <img
              src="/me.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ORBIT RING */}
          <div className="absolute w-[300px] sm:w-[360px] md:w-[420px] h-[300px] sm:h-[360px] md:h-[420px] rounded-full border border-white/10" />

          {/* ORBIT ITEMS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] animate-spin-slow">
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
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center transition hover:scale-110"
                        style={{
                          boxShadow: `0 0 25px ${skill.glow}`,
                        }}
                      >
                        <img
                          src={skill.img}
                          alt="skill"
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
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
<div className="order-2 md:order-1 text-center md:text-left md:mt-6 lg:mt-10">
  <p className="uppercase tracking-[0.4em] text-cyan-300 mb-4 md:mb-6 text-sm md:text-base">
    Frontend Developer
  </p>

  <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight">
    Building{" "}
    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
      futuristic
    </span>{" "}
    digital experiences.
  </h1>

  <p className="mt-6 md:mt-8 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
    I'm FavourDeCreative, a creative web developer focused on building
    immersive, responsive, and high-performance websites using modern
    web technologies.
  </p>

  <div className="mt-10 md:mt-12 flex gap-4 md:gap-5 flex-wrap justify-center md:justify-start">
    <a
      href="#projects"
      className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
    >
      View Projects <ArrowUpRight size={18} />
    </a>

    <a
      href="#contact"
      className="border border-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white hover:text-black transition"
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
