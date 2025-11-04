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

const blogBackgroundImage =
  "/images/drewniana-konstrukcja-dokumenty-prawne-szeregu-organizacja-porzadek-artykuly-prawnicze-krs.webp";

export default function ArticleContent({ article }: ArticleContentProps) {
  const content = getArticleContent(article.slug);

  return (
    <div className="relative min-h-screen pb-20 text-white">
      <div className="fixed inset-0 -z-20">
        <Image
          src={blogBackgroundImage}
          alt="Drewniana konstrukcja z dokumentami w szeregu - tło bloga"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="fixed inset-0 -z-10 bg-slate-900/70" />

      <div className="relative z-10 px-4 pt-28 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
          <div className="relative h-[22rem] sm:h-[26rem]">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-slate-950/85" />
          </div>

          <div className="px-6 py-10 sm:px-10 lg:px-14">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-300">
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
              <Badge className="mb-4 bg-amber-600 text-white">
                {article.category}
              </Badge>

              <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </div>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-amber-400 prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-amber-300 prose-img:my-8 prose-img:rounded-lg prose-strong:text-white prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="mt-16 border-t border-white/10 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-medium text-amber-400 transition-colors hover:text-amber-300"
              >
                ← Wróć do bloga
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
