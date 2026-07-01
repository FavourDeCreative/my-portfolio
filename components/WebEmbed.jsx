"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { client, hasSanityConfig, urlFor } from "@/lib/sanity";

const PROJECTS_QUERY = `*[_type == "project" && isFeatured != false] | order(orderRank asc, title asc) {
  title,
  link,
  image,
  "imageUrl": image.asset->url
}`;

const fallbackSites = [
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
  const [sites, setSites] = useState(fallbackSites);

  useEffect(() => {
    if (!hasSanityConfig) return;

    client
      .fetch(PROJECTS_QUERY)
      .then((data) => {
        if (data?.length) setSites(data);
      })
      .catch(() => {
        setSites(fallbackSites);
      });
  }, []);

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
              key={`${site.title}-${i}`}
              href={site.link}
              target={site.link.startsWith("#") ? undefined : "_blank"}
              rel={site.link.startsWith("#") ? undefined : "noreferrer"}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black transition hover:border-cyan-400/40"
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={
                    site.imageUrl ||
                    (site.image?._type === "image"
                      ? urlFor(site.image).width(900).height(560).url()
                      : site.image)
                  }
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
