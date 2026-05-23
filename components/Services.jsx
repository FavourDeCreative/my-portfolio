"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Search,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern and responsive websites built with performance, scalability, and clean user experience in mind.",
  },
  {
    icon: LayoutDashboard,
    title: "Frontend Engineering",
    description:
      "Interactive frontend systems using Next.js, React, Vue.js, and modern UI technologies.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts optimized across mobile, tablet, and desktop devices.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Fast-loading websites structured for search engine visibility and better ranking.",
  },
  {
    icon: Layers3,
    title: "UI / UX Design",
    description:
      "Clean and modern interface design focused on engagement and conversion.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* heading */}
        <div className="service-heading max-w-3xl mb-16">
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-5">
            Our Services
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Digital solutions crafted for modern brands.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            We help businesses build strong online experiences through modern
            design, frontend engineering, SEO optimization, and responsive web
            development.
          </p>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-cyan-400/30 transition-all duration-500"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />

                {/* icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500">
                  <Icon className="text-cyan-400" size={30} />
                </div>

                {/* title */}
                <h3 className="relative z-10 text-2xl font-semibold text-white mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* description */}
                <p className="relative z-10 text-zinc-400 leading-relaxed text-base">
                  {service.description}
                </p>

                {/* button */}
                <div className="relative z-10 mt-8 flex items-center gap-3 text-cyan-400 font-medium group-hover:translate-x-2 transition duration-500">
                  <span>Learn More</span>
                  <ArrowUpRight size={18} />
                </div>

                {/* corner border */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-cyan-400/10 rounded-tr-[32px]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
