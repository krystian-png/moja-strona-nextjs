import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent, { type Article } from "./blog-content";
import { allPosts } from "contentlayer/generated";
import { articlesMetadata } from "@/lib/articles-data";

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

function toTimestamp(value: string) {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function getStaticArticles(): Article[] {
  return articlesMetadata.map((article) => ({
    id: article.slug,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    category: article.category,
    imageUrl: article.imageUrl,
    imageAlt: article.imageAlt,
    publishedAt: article.publishedAt,
  }));
}

function getDynamicArticles(): Article[] {
  return [...allPosts]
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
    .map((post) => ({
      id: post.slug,
      title: post.title,
      slug: post.slug,
      excerpt: post.description,
      category: post.tags?.[0] ?? defaultCategory,
      imageUrl: resolveCoverPath(post.cover),
      imageAlt: post.title,
      publishedAt: post.date,
    }));
}

function mapPostsToArticles(): Article[] {
  const combined = [...getStaticArticles(), ...getDynamicArticles()];

  const bySlug = new Map<string, Article>();

  combined.forEach((article) => {
    const existing = bySlug.get(article.slug);
    if (!existing || toTimestamp(article.publishedAt) > toTimestamp(existing.publishedAt)) {
      bySlug.set(article.slug, article);
    }
  });

  return Array.from(bySlug.values()).sort(
    (a, b) => toTimestamp(b.publishedAt) - toTimestamp(a.publishedAt),
  );
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
