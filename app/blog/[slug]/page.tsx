import { notFound } from "next/navigation";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) notFound();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Artykuł: {slug}</h1>
      <p className="mt-2 text-sm text-gray-600">Placeholder treści.</p>
    </main>
  );
}
