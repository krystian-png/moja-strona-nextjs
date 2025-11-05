import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Mdx from "@/components/Mdx"
import Link from "next/link"

export const revalidate = 3600

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "url(/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-slate-900/60" />

      <main className="relative mx-auto max-w-4xl px-4 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-block text-amber-400 transition-colors hover:text-amber-300"
        >
          ← Wróć do bloga
        </Link>

        <article className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-12">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>

          <div className="mb-8 text-sm text-gray-400">
            {post.date &&
              new Date(post.date).toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </div>

          <div
            className="prose prose-lg prose-invert max-w-none prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300 prose-headings:font-bold prose-headings:text-white prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl prose-h2:text-amber-400 prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-2xl prose-h3:text-amber-300 prose-img:my-8 prose-img:rounded-lg prose-li:text-gray-300 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-gray-300 prose-strong:font-semibold prose-strong:text-white"
          >
            <Mdx code={post.body.code} />
          </div>
        </article>
      </main>
    </div>
  )
}
