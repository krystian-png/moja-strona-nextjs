import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import Image from "next/image"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const woodenStructureImage =
  "/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp"

interface ArticlePageProps {
  params: { slug: string }
}

function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const pageUrl = `${siteUrl}/artykul/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/artykul/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: pageUrl,
      type: "article",
      siteName: brandName,
      images: post.cover
        ? [
            {
              url: post.cover.startsWith("http") ? post.cover : `${siteUrl}${post.cover}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.cover
        ? [post.cover.startsWith("http") ? post.cover : `${siteUrl}${post.cover}`]
        : [],
    },
  }
}

function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component />
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.cover
      ? post.cover.startsWith("http")
        ? post.cover
        : `${siteUrl}${post.cover}`
      : undefined,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: brandName,
    },
    publisher: organizationSchema,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/artykul/${post.slug}`,
    },
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="relative min-h-screen">
      <Script id="article-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div className="fixed inset-0 -z-20">
        <Image
          src={woodenStructureImage}
          alt="Drewniana konstrukcja z dokumentami prawnymi"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-slate-900/60" aria-hidden />

      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8">
            <header className="mb-6">
              <Badge className="bg-amber-600 text-white mb-4 hover:bg-amber-700">
                Spółki i zmiany w KRS
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="text-gray-400 space-y-1">
                <time dateTime={post.date} className="block">
                  Opublikowano {formatDate(post.date)}
                </time>
                {post.updated && (
                  <time dateTime={post.updated as string} className="block">
                    Zaktualizowano {formatDate(post.updated as string)}
                  </time>
                )}
              </div>
            </header>

            <div className="text-lg leading-relaxed text-gray-200 prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-200 prose-p:mb-4 prose-strong:text-white prose-em:text-gray-300 prose-a:text-amber-400 prose-a:underline hover:prose-a:text-amber-300 prose-ul:text-gray-200 prose-ul:my-4 prose-li:mb-2 prose-img:w-full prose-img:h-auto prose-img:rounded-lg prose-img:my-6">
              <MDXContent code={post.body.code} />
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
