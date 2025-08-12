import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/canonical";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await getPostBySlug(params?.slug);
  if (!post) return {};
  const canonical = await getCanonicalUrl(`/blog/${post.slug}`);
  return {
    title: `${post.title} | Zmiana KRS Blog`,
    description: post.description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: any) {
  const post = await getPostBySlug(params?.slug);
  if (!post) notFound();
  return (
    <main className="prose max-w-3xl mx-auto p-6">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
