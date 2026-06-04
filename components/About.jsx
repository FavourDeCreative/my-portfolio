import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-6 overflow-hidden abt"
    >
      {/* background glow */}
      <div className=" rounded-full pointer-events-none justify-center " />

      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"> */}
      {/* LEFT CONTENT */}
      <div>
        <p className="uppercase  txt text-sm mb-5 text-center">
          About FavourDeCreative
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-white">
          We build modern websites that help brands grow online.
        </h2>

        <p className="mt-7 text-lg leading-relaxed max-w-l text-center">
          FavourDeCreative is a modern web agency focused on creating fast,
          responsive, and visually engaging websites for businesses, brands, and
          startups. We combine clean design, smooth animations, and scalable
          frontend technologies to deliver digital experiences that stand out.
        </p>

        <p className="mt-5  leading-relaxed max-w-l text-center">
          From business websites to custom frontend solutions, our goal is to
          help brands establish a strong online presence with performance,
          creativity, and user experience at the center of every project.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="border card backdrop-blur-md rounded-2xl p-5">
            <h3 className="text-3xl font-bold tt">50+</h3>
            <p className="text-sm tx mt-2">Projects Built</p>
          </div>

          <div className="border card backdrop-blur-md rounded-2xl p-5">
            <h3 className="text-3xl font-bold tt">100%</h3>
            <p className="text-sm mt-2">Responsive Design</p>
          </div>

          <div className="border card backdrop-blur-md rounded-2xl p-5">
            <h3 className="text-3xl font-bold tt">24/7</h3>
            <p className="text-sm mt-2">Support & Updates</p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <a
            href="#work"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full btn1 font-semibold hover:scale-105 transition duration-300"
          >
            View Our Work
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
