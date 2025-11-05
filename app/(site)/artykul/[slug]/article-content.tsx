"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import type { ArticleMetadata } from "./articles-data";
import { getArticleContent } from "./articles-data";

interface ArticleContentProps {
  article: ArticleMetadata;
}

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function ArticleContent({ article }: ArticleContentProps) {
  const content = getArticleContent(article.slug);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp"
          alt="Drewniana konstrukcja z dokumentami prawnymi w szeregu - organizacja i porządek w artykułach prawniczych KRS"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32" role="main">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="transition-colors hover:text-amber-400">
            Strona główna
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/blog" className="transition-colors hover:text-amber-400">
            Blog
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-white">{article.title}</span>
        </nav>
        <article className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
          <header className="mb-6">
            <Badge className="bg-amber-600 text-white mb-4 hover:bg-amber-700">
              {article.category}
            </Badge>
            <h1 className="text-4xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <time className="text-gray-400 mb-8 block" dateTime={article.publishedAt}>
              Opublikowano {formatDate(article.publishedAt)}
            </time>
          </header>
          <div
            className="text-lg leading-relaxed text-gray-200 prose prose-lg max-w-none prose-headings:text-white prose-strong:text-white prose-em:text-gray-300 prose-img:w-full prose-img:h-auto prose-img:min-h-[400px] prose-img:object-cover prose-img:rounded-lg prose-img:mb-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              ← Wróć do bloga
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
