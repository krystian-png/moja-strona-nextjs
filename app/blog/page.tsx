import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog Zmiana KRS — poradniki i aktualności",
    description: "Praktyczne artykuły o zmianach w KRS, rejestracji i prowadzeniu spółek.",
  };
}

export default function BlogListing() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <p>Brak wpisów.</p>
    </main>
  );
}
