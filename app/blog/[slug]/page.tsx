import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import MDXComponents from "@/components/MDX"

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

  const Component = useMDXComponent(post.body.code)

  return (
    <main className="max-w-3xl mx-auto p-6 prose">
      <h1 className="mb-4 text-2xl font-semibold">{post.title}</h1>
      <Component components={MDXComponents} />
    </main>
  )
}
