import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`,
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt }`,
    { slug: params.slug },
  );
  return {
    title: `${post.title} | FavourDeCreative`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, publishedAt, excerpt, body
    }`,
    { slug: params.slug },
  );

  if (!post) notFound();

  return (
    <main className="post-page">
      <Navbar />
      <article className="post-content">
        <Link href="/blog" className="back-link">
          <ArrowLeft className="inline-block w-4 h-4 mr-2" />
          Back to blog
        </Link>
        <time className="blog-date">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h1>{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-body">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  );
}
