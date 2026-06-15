"use client";


import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
const posts = [
  {
    title: "Building a modern portfolio",
    date: "June 2026",
    excerpt:
      "A quick look at the process, tools, and design decisions behind a clean developer portfolio.",
    link: "/blog/modern-portfolio",
  },
  {
    title: "Design systems for small teams",
    date: "May 2026",
    excerpt:
      "How to keep your UI consistent and reusable without slowing down progress.",
    link: "/blog/design-systems",
  },
  {
    title: "Optimizing React apps",
    date: "April 2026",
    excerpt:
      "Practical tips for performance, structure, and maintainability in React projects.",
    link: "/blog/optimizing-react",
  },
];

export default function Blog() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="blog-page">
      <div className="blog-header">
        <p className="small-label">Blog</p>
        <h1>Latest posts</h1>
        <p className="description">
          Stories on development, design, and the projects that shape my work.
        </p>
      </div>

      <section className="blog-list" id="blog">
        <Navbar />
        {posts.map((post, index) => (
          <article
            key={post.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="blog-card"
          >
            <time dateTime={post.date} className="blog-date">
              {post.date}
            </time>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={post.link} className="blog-link">
              Read article <ArrowUpRight className="inline-block w-4 h-4 ml-2" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
