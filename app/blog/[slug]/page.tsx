import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { allPosts } from "contentlayer/generated"
import Mdx from "@/components/Mdx"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

export const revalidate = 3600

interface BlogPostPageProps {
  params: { slug: string }
}

function resolveCoverPath(cover?: string) {
  if (!cover) return undefined
  if (cover.startsWith("http")) return cover
  if (cover.startsWith("/")) return cover
  const normalized = cover.replace(/^images\//, "")
  return `/images/${normalized}`
}

function buildOgImageUrl(cover?: string) {
  const path = resolveCoverPath(cover)
  if (!path) return `${siteUrl}/images/krs-services.png`
  if (path.startsWith("http")) return path
  return `${siteUrl}${path}`
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  const pagePath = `/blog/${post.slug}`
  const pageUrl = `${siteUrl}${pagePath}`
  const ogImageUrl = buildOgImageUrl(post.cover)

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: pageUrl,
      type: "article",
      siteName: brandName,
      publishedTime: post.date,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const pagePath = `/blog/${post.slug}`
  const pageUrl = `${siteUrl}${pagePath}`
  const ogImageUrl = buildOgImageUrl(post.cover)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: brandName,
    },
    publisher: organizationSchema,
    image: ogImageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  }

  return (
    <main className="max-w-3xl mx-auto p-6 prose">
      <Script id="blogpost-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <h1 className="mb-4 text-2xl font-semibold">{post.title}</h1>
      <Mdx code={post.body.code} />
    </main>
  )
}
