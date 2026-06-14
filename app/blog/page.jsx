"use client";

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
  return (
    <main className="blog-page">
      <div className="blog-header">
        <p className="small-label">Blog</p>
        <h1>Latest posts</h1>
        <p className="description">
          Stories on development, design, and the projects that shape my work.
        </p>
      </div>

      <section className="blog-list">
        {posts.map((post) => (
          <article key={post.title} className="blog-card">
            <time dateTime={post.date} className="blog-date">
              {post.date}
            </time>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={post.link} className="blog-link">
              Read article
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
