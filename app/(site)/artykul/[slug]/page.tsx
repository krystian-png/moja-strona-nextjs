import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import Image from "next/image"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import reportStyles from "./report.module.css"
import InlineContactForm from "@/app/(site)/uslugi/_components/InlineContactForm"
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

function toAbsoluteCoverUrl(cover?: string) {
  if (!cover) {
    return undefined
  }
  if (cover.startsWith("http")) {
    return cover
  }
  if (cover.startsWith("/")) {
    return `${siteUrl}${cover}`
  }
  return `${siteUrl}/${cover}`
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const isReport = post.slug === "pkd-2025-raport-wdrozenia-reformy"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: toAbsoluteCoverUrl(post.cover),
    url: `${siteUrl}/artykul/${post.slug}`,
    isPartOf: { "@id": `${siteUrl}/blog` },
    datePublished: post.date,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
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
    <div className={isReport ? `relative min-h-screen ${reportStyles.reportPage}` : "relative min-h-screen"}>
      <Script id="article-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {!isReport && (
        <>
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
        </>
      )}

      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {isReport && (
          <div className="sticky top-[76px] z-30 mx-auto mb-4 flex max-w-[900px] items-center justify-between gap-3 rounded-lg border border-[#315574] bg-[#17334e] px-3 py-2.5 shadow-lg sm:px-4 xl:hidden" aria-label="Zleć zmianę kodów PKD">
            <span className="min-w-0 text-sm font-semibold leading-tight text-white sm:text-base">Potrzebujesz zmiany PKD w KRS?</span>
            <a href="/uslugi/zmiana-kodow-pkd#wycena" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-amber-500 px-3 py-2 text-center text-sm font-bold text-slate-950 transition hover:bg-amber-400 sm:px-5">Zleć zmianę PKD →</a>
          </div>
        )}
        <div className={isReport ? `${reportStyles.reportLayout} mx-auto w-full` : "max-w-4xl mx-auto"}>
          <div className={isReport ? `${reportStyles.reportMain} min-w-0` : undefined}>
          <article className={isReport ? reportStyles.reportArticle : "bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8"}>
            <header className="mb-6">
              <Badge className="bg-amber-600 text-white mb-4 hover:bg-amber-700">
                Spółki i zmiany w KRS
              </Badge>
              <h1 className={isReport ? reportStyles.reportTitle : "text-3xl sm:text-4xl font-bold text-white mb-4"}>
                {post.title}
              </h1>
              <div className={isReport ? `${reportStyles.reportMeta} space-y-1` : "text-gray-400 space-y-1"}>
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

            <div className={isReport ? `${reportStyles.reportBody} prose max-w-none` : "text-lg leading-relaxed text-gray-200 prose prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-200 prose-p:mb-4 prose-strong:text-white prose-em:text-gray-300 prose-a:text-amber-400 prose-a:underline hover:prose-a:text-amber-300 prose-ul:text-gray-200 prose-ul:my-4 prose-li:mb-2 prose-img:w-full prose-img:h-auto prose-img:rounded-lg prose-img:my-6"}>
              <MDXContent code={post.body.code} />
            </div>
          </article>
          {isReport && (
            <aside className={reportStyles.reportDisclaimer} aria-label="Informacja prawna">
              <strong>Informacja prawna</strong>
              <p>Raport ma charakter informacyjny i edukacyjny. Nie stanowi indywidualnej porady prawnej, podatkowej ani finansowej i nie zastępuje analizy konkretnego stanu faktycznego. Przepisy prawa oraz praktyka organów i sądów mogą ulegać zmianom. Przed podjęciem decyzji dotyczącej wpisu PKD należy uwzględnić rzeczywisty zakres działalności przedsiębiorstwa i aktualne przepisy.</p>
            </aside>
          )}
          </div>
          {isReport && (
            <aside className={`${reportStyles.reportSidebar} hidden xl:block min-w-0`} aria-label="Zleć zmianę kodów PKD">
              <div className={`${reportStyles.reportSticky} sticky top-28 rounded-lg bg-[#17334e] p-4 text-white shadow-lg`}>
                <div className={reportStyles.reportSidebarIntro}>
                  <span className={reportStyles.reportSidebarEyebrow}>OBSŁUGA ZMIAN W KRS</span>
                  <h2>Zleć zmianę kodów PKD</h2>
                  <p>Sprawdzimy zakres zmian i przygotujemy wniosek do KRS. Napisz, czego potrzebuje Twoja spółka.</p>
                </div>
                <InlineContactForm className={reportStyles.reportContactForm} />
              </div>
            </aside>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
