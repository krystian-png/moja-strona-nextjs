import type { Metadata } from "next"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog Zmiana KRS — poradniki i aktualności",
    description: "Praktyczne artykuły o zmianach w KRS, rejestracji i prowadzeniu spółek.",
  };
}

export default function BlogListing() {
  const posts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      {posts.length === 0 ? (
        <p>Brak wpisów.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg font-medium hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-600">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
