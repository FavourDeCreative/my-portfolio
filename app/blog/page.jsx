"use client";

import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { client } from "@/lib/sanity";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  publishedAt,
  excerpt
}`;

export default function Blog() {
  const cardsRef = useRef([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(POSTS_QUERY).then((data) => {
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, [posts]); // runs after posts load

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
            key={post.slug.current}
            ref={(el) => (cardsRef.current[index] = el)}
            className="blog-card"
          >
            <time className="blog-date">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </time>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug.current}`} className="blog-link">
              Read article{" "}
              <ArrowUpRight className="inline-block w-4 h-4 ml-2" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
