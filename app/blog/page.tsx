import type { Metadata } from "next"
import Script from "next/script"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogContent, { type Article } from "./blog-content"
import { allPosts } from "contentlayer/generated"
import { articlesMetadata } from "@/app/(site)/artykul/[slug]/articles-data"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/blog"
const pageUrl = `${siteUrl}${pagePath}`

export const metadata: Metadata = {
  title: "Blog KRS - ZmianaKRS | Przydatne artykuły o zmianach w KRS",
  description:
    "Blog o zmianach w KRS. Przydatne artykuły o aktualizacji danych w KRS, zmianach w umowie spółki i procedurach rejestracyjnych.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Blog KRS - ZmianaKRS | Przydatne artykuły o zmianach w KRS",
    description:
      "Blog o zmianach w KRS. Przydatne artykuły o aktualizacji danych w KRS, zmianach w umowie spółki i procedurach rejestracyjnych.",
    url: pageUrl,
    type: "website",
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Blog o zmianach w KRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog KRS - ZmianaKRS | Przydatne artykuły o zmianach w KRS",
    description:
      "Blog o zmianach w KRS. Przydatne artykuły o aktualizacji danych w KRS, zmianach w umowie spółki i procedurach rejestracyjnych.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const defaultCategory = "Aktualności"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog ZmianaKRS – zmiany w KRS",
  url: pageUrl,
  publisher: organizationSchema,
}

function resolveCoverPath(cover?: string) {
  if (!cover) {
    return undefined
  }

  if (cover.startsWith("http")) {
    return cover
  }

  if (cover.startsWith("/")) {
    return cover
  }

  const normalized = cover.replace(/^images\//, "")
  return `/images/${normalized}`
}

function toTimestamp(value: string) {
  const timestamp = new Date(value).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
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
  }))
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
    }))
}

function mapPostsToArticles(): Article[] {
  const combined = [...getStaticArticles(), ...getDynamicArticles()]

  const bySlug = new Map<string, Article>()

  combined.forEach((article) => {
    const existing = bySlug.get(article.slug)
    if (!existing || toTimestamp(article.publishedAt) > toTimestamp(existing.publishedAt)) {
      bySlug.set(article.slug, article)
    }
  })

  return Array.from(bySlug.values()).sort(
    (a, b) => toTimestamp(b.publishedAt) - toTimestamp(a.publishedAt),
  )
}

export default function BlogPage() {
  const articles = mapPostsToArticles()

  return (
    <div className="relative min-h-screen text-white">
      <Script id="blog-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Navbar />
      <main>
        <BlogContent articles={articles} />
      </main>
      <Footer />
    </div>
  )
}
