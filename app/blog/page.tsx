import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const canonical = "https://www.zmianakrs.pl/blog";
  return {
    title: "Blog Zmiana KRS — poradniki i aktualności",
    description: "Praktyczne artykuły o zmianach w KRS, rejestracji i prowadzeniu spółek.",
    alternates: { canonical },
  };
}

export default function BlogListing() {
  const posts = allPosts;
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <h2 className="text-xl font-medium">
              <Link href={`/blog/${p.slug}`} className="underline">
                {p.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600">{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
