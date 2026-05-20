import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT TEXT */}
        <div>
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            I create modern interfaces with smooth user experiences.
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            I specialize in frontend development using React, Next.js, Vue.js,
            and Nuxt.js. My focus is building fast, responsive, SEO-optimized
            websites that feel smooth and look modern across all devices.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          {/* glow background */}
          <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-cyan-400/20 blur-[120px] rounded-full" />

          {/* image card */}
          <div className="relative w-[260px] sm:w-[300px] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/me.jpg"
              alt="FavourDeCreative"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-100"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
