"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Globe,
  PenTool,
  Palette,
  Video,
  FileText,
  Search,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern websites and web applications built for performance, scalability, and business growth.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User-focused interfaces designed to improve usability, engagement, and conversion.",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Creative branding materials, social media assets, marketing graphics, and visual content.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional editing for promotional videos, reels, advertisements, and social media content.",
  },
  {
    icon: FileText,
    title: "Blogging",
    description:
      "Content creation and blog management to educate audiences and strengthen online presence.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Search engine optimization strategies that improve rankings and increase organic traffic.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector(".service-heading");
      const cards = sectionRef.current.querySelectorAll(".service-card");

      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="service-heading max-w-3xl mb-20">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 txt">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Digital solutions crafted for modern brands.
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-2xl tt">
            We help businesses grow through web development, UI/UX design,
            graphics design, video editing, blogging, and SEO optimization.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  service-card 
                  group relative
                  border border-white
                  rounded-[32px]
                  p-6 md:p-8
                  min-h-[320px]
                  cursor-pointer
                  transition-transform duration-500
                  hover:-translate-y-2
                "
              >
                <div
                  className="
                  w-14 h-14 md:w-16 md:h-16
                  border card
                  rounded-2xl
                  flex items-center tt justify-center
                  mb-6
                  group-hover:scale-110
                  transition-transform duration-500
                "
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-lg md:text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <div
                  className="
                  absolute bottom-6 right-6
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform duration-500
                "
                >
                  <ArrowUpRight size={22} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
