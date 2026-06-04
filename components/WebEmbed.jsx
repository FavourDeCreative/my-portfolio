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
    title: "Fintech Dashboard",
    image: "/sites/site3.png",
    link: "https://example.com",
  },
];

export default function Work() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto" id="work">
        {/* Header */}
        <div className="mb-12">
          <p className="txt uppercase tracking-[0.3em] mb-4">
            Live Preview
          </p>

          <h2 className="text-5xl font-bold">View Our Work</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {sites.map((site, i) => (
            <a
              key={i}
              href={site.link}
              target="_blank"
              className="group rounded-2xl overflow-hidden border border-white/10 bg-black hover:border-cyan-400/40 transition"
            >
              {/* Screenshot */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">{site.title}</h3>
                <p className="text-zinc-500 text-sm mt-2">
                  Click to view live project →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
