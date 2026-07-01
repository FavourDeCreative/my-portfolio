import Image from "next/image";

const sites = [
  {
    title: "Gbenga Gomes Portfolio",
    image: "/sites/site1.jpg",
    link: "https://gbenga-gomes.vercel.app",
  },
  {
    title: "CDORF.ng",
    image: "/sites/cdorf.png",
    link: "https://cdorf.vercel.app",
  },
  {
    title: "More Projects Coming Soon",
    image: "/hero.png",
    link: "#contact",
  },
];

export default function Work() {
  return (
    <section className="px-4 py-24 sm:px-6 md:py-32" id="work">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="txt mb-4 uppercase tracking-[0.3em]">
            Live Preview
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">View Our Work</h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {sites.map((site, i) => (
            <a
              key={i}
              href={site.link}
              target={site.link.startsWith("#") ? undefined : "_blank"}
              rel={site.link.startsWith("#") ? undefined : "noreferrer"}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black transition hover:border-cyan-400/40"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">{site.title}</h3>
                <p className="text-zinc-500 text-sm mt-2">
                  {site.link.startsWith("#")
                    ? "Contact us to start yours"
                    : "Click to view live project"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
