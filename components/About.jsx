import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            I create modern interfaces with smooth experiences.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            I specialize in frontend development using React, Next.js, Vue.js,
            and Nuxt.js. I focus on creating websites that are visually
            engaging, fast, SEO optimized, and fully responsive across all
            devices.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          {/* glowing background aura */}
          <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[140px] rounded-full" />

          {/* image frame */}
          <div className="relative w-[320px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <Image
              src="/me.jpg" // replace with your real image
              alt="FavourDeCreative"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-100"
            />

            {/* cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
