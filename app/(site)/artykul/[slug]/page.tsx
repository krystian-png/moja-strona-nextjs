import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteUrl } from "@/lib/seo";

import ArticleContent from "./article-content";
import { articlesMetadata, getArticle } from "./articles-data";

interface ArticlePageProps {
  params: { slug: string };
}

const canonicalBase = `${siteUrl}/artykul`;

export function generateStaticParams() {
  return articlesMetadata.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = getArticle(params.slug);

  if (!article) {
    return {
      title: "Artykuł nie znaleziony - ZmianaKRS",
    };
  }

  const canonicalUrl = `${canonicalBase}/${article.slug}`;

  return {
    title: `${article.title} | ZmianaKRS`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: article.publishedAt,
      images: [
        {
          url: `${siteUrl}${article.imageUrl}`,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ArticleContent article={article} />
      <Footer />
    </>
  );
}
