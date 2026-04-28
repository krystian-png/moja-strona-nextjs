import type { Metadata } from "next"
import Script from "next/script"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogContent, { type Article } from "./blog-content"
import { allPosts } from "contentlayer/generated"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/blog"
const pageUrl = `${siteUrl}${pagePath}`
const pageTitle = "Blog ZmianaKRS | Artykuły o zmianach w KRS"

const pageDescription =
  "Blog o zmianach w KRS. Przydatne artykuły o aktualizacji danych w KRS, zmianach w umowie spółki i procedurach rejestracyjnych."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

function toAbsoluteImageUrl(path?: string) {
  if (!path) {
    return undefined
  }
  if (path.startsWith("http")) {
    return path
  }
  if (path.startsWith("/")) {
    return `${siteUrl}${path}`
  }
  return undefined
}

const blogPostsStructuredData = allPosts.map((post) => {
  const coverPath = resolveCoverPath(post.cover)

  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: toAbsoluteImageUrl(coverPath),
    url: `${siteUrl}/artykul/${post.slug}`,
    datePublished: post.date,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": pageUrl },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/artykul/${post.slug}`,
    },
  }
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": pageUrl,
  name: "Blog ZmianaKRS",
  url: pageUrl,
  description: pageDescription,
  isPartOf: { "@id": `${siteUrl}/#website` },
  publisher: organizationSchema,
  blogPost: blogPostsStructuredData,
}

function resolveCoverPath(cover?: string) {
  if (!cover) {
    return undefined
  }
  if (cover.startsWith("http") || cover.startsWith("/")) {
    return cover
  }
  const normalized = cover.replace(/^images\//, "")
  return `/images/${normalized}`
}

function toTimestamp(value: string) {
  const timestamp = new Date(value).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

function mapPostsToArticles(): Article[] {
  return [...allPosts]
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
    .map((post) => ({
      id: post.slug,
      title: post.title,
      slug: post.slug,
      excerpt: post.description,
      category: post.tags?.[0] ?? "Spółki i zmiany w KRS",
      imageUrl: resolveCoverPath(post.cover),
      imageAlt: post.title,
      publishedAt: post.date,
      href: `/artykul/${post.slug}`,
    }))
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
