import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import Image from "next/image"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

import { getArticle, getArticleContent, articlesMetadata } from "./articles-data"

const woodenStructureImage =
  "/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp"

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articlesMetadata.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticle(params.slug)
  if (!article) return {}

  const pageUrl = `${siteUrl}/artykul/${article.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/artykul/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: pageUrl,
      type: "article",
      siteName: brandName,
      images: article.imageUrl
        ? [
            {
              url: article.imageUrl.startsWith("http")
                ? article.imageUrl
                : `${siteUrl}${article.imageUrl}`,
              width: 1200,
              height: 630,
              alt: article.imageAlt || article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.imageUrl
        ? [
            article.imageUrl.startsWith("http")
              ? article.imageUrl
              : `${siteUrl}${article.imageUrl}`,
          ]
        : [],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle(params.slug)
  const content = getArticleContent(params.slug)

  if (!article || !content) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.imageUrl
      ? article.imageUrl.startsWith("http")
        ? article.imageUrl
        : `${siteUrl}${article.imageUrl}`
      : undefined,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: brandName,
    },
    publisher: organizationSchema,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/artykul/${article.slug}`,
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

      {/* Tlo z obrazem */}
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

      {/* Przyciemnienie */}
      <div className="fixed inset-0 -z-10 bg-slate-900/60" aria-hidden />

      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8">
            <header className="mb-6">
              <Badge className="bg-amber-600 text-white mb-4 hover:bg-amber-700">
                {article.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <time
                className="text-gray-400 block"
                dateTime={article.publishedAt}
              >
                Opublikowano {formatDate(article.publishedAt)}
              </time>
            </header>

            <div
              className="text-lg leading-relaxed text-gray-200 prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-200 prose-p:mb-4 prose-strong:text-white prose-em:text-gray-300 prose-a:text-amber-400 prose-a:underline hover:prose-a:text-amber-300 prose-ul:text-gray-200 prose-ul:my-4 prose-li:mb-2 prose-img:w-full prose-img:h-auto prose-img:min-h-[300px] prose-img:max-h-[500px] prose-img:object-cover prose-img:rounded-2xl prose-img:shadow-md prose-img:mb-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
