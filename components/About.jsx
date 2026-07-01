import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] txt">
          About FavourDeCreative
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          We build modern websites that help brands grow online.
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          FavourDeCreative is a modern web agency focused on creating fast,
          responsive, and visually engaging websites for businesses, brands, and
          startups. We combine clean design, smooth animations, and scalable
          frontend technologies to deliver digital experiences that stand out.
        </p>

        <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-white/75">
          From business websites to custom frontend solutions, our goal is to
          help brands establish a strong online presence with performance,
          creativity, and user experience at the center of every project.
        </p>

        {/* STATS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border p-5 backdrop-blur-md card">
            <h3 className="text-3xl font-bold tt">50+</h3>
            <p className="mt-2 text-sm text-white/70">Projects Built</p>
          </div>

          <div className="rounded-2xl border p-5 backdrop-blur-md card">
            <h3 className="text-3xl font-bold tt">100%</h3>
            <p className="mt-2 text-sm text-white/70">Responsive Design</p>
          </div>

          <div className="rounded-2xl border p-5 backdrop-blur-md card">
            <h3 className="text-3xl font-bold tt">24/7</h3>
            <p className="mt-2 text-sm text-white/70">Support & Updates</p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
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
