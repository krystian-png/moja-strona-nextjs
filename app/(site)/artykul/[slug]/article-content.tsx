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
    <div 
      className="min-h-screen pb-20"
      style={{
        backgroundImage: 'url(/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-slate-900/60">
        <div className="relative h-96 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
        </div>

        <article className="relative z-10 -mt-32 mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-12 shadow-2xl sm:px-8 lg:px-12">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
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

          <header className="mb-10">
            <Badge className="mb-4 bg-amber-600 text-white hover:bg-amber-700">
              {article.category}
            </Badge>

            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </div>
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-bold 
              prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-amber-400 
              prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-amber-300
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300
              prose-ul:text-gray-300 prose-li:text-gray-300
              prose-img:my-8 prose-img:rounded-lg 
              prose-strong:text-white prose-strong:font-semibold"
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
      </div>
    </div>
  );
}
