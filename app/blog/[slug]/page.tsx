import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

export const revalidate = 86400;

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  const canonical = `https://www.zmianakrs.pl/blog/${post.slug}`;
  return {
    title: `${post.title} | Zmiana KRS Blog`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return (
    <main className="prose max-w-3xl mx-auto p-6">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body?.html ?? "" }} />
    </main>
  );
}
