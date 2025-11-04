import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent, { type Article } from "./blog-content";
import { allPosts } from "contentlayer/generated";

const pageUrl = "https://zmianakrs.pl/blog";

export const metadata: Metadata = {
  title: "Blog KRS - ZmianaKRS | Przydatne artykuły o zmianach w KRS",
  description:
    "Blog o zmianach w KRS. Przydatne artykuły o aktualizacji danych w KRS, zmianach w umowie spółki i procedurach rejestracyjnych.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Blog KRS - ZmianaKRS | Przydatne artykuły o zmianach w KRS",
    description:
      "Blog o zmianach w KRS. Przydatne artykuły o aktualizacji danych w KRS, zmianach w umowie spółki i procedurach rejestracyjnych.",
    url: pageUrl,
    type: "website",
  },
};

const defaultCategory = "Aktualności";

function resolveCoverPath(cover?: string) {
  if (!cover) {
    return undefined;
  }

  if (cover.startsWith("http")) {
    return cover;
  }

  if (cover.startsWith("/")) {
    return cover;
  }

  const normalized = cover.replace(/^images\//, "");
  return `/images/${normalized}`;
}

function mapPostsToArticles(): Article[] {
  return [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post, index) => ({
      id: `${index + 1}`,
      title: post.title,
      slug: post.slug,
      excerpt: post.description,
      category: post.tags?.[0] ?? defaultCategory,
      imageUrl: resolveCoverPath(post.cover),
      imageAlt: post.title,
      publishedAt: post.date,
    }));
}

export default function BlogPage() {
  const articles = mapPostsToArticles();

  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <main>
        <BlogContent articles={articles} />
      </main>
      <Footer />
    </div>
  );
}
