"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type SEOExpandableSectionProps = {
  /** Nagłówek sekcji (opcjonalny – sam label przycisku może go zastąpić) */
  title?: string;
  /** Treść sekcji – akapity oddzielone pustą linią */
  content: string;
  /** Unikalny identyfikator sekcji na stronie */
  pageId: string;
  /** Tekst na przycisku rozwijania (opcjonalny) */
  buttonLabel?: string;
};

export default function SEOExpandableSection({
  title,
  content,
  pageId,
  buttonLabel,
}: SEOExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const contentId = `${pageId}-seo-content`;
  const toggleId = `${contentId}-toggle`;
  const label = buttonLabel ?? title ?? "Więcej o naszych usługach KRS";

  const paragraphs = content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      id={pageId}
      aria-labelledby={toggleId}
      className="bg-white/5 backdrop-blur-sm border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Ukryty nagłówek dla czytników ekranu, jeśli podano title */}
        {title ? (
          <h3 className="sr-only" id={`${pageId}-title`}>
            {title}
          </h3>
        ) : null}

        <button
          type="button"
          id={toggleId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-center gap-3 text-amber-400 hover:text-amber-300 text-lg font-medium transition-colors"
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <span className="text-center">{label}</span>
          {isOpen ? (
            <ChevronUp className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {isOpen ? (
          <div
            id={contentId}
            className="mt-6 space-y-4 text-gray-300 text-sm sm:text-base text-justify"
          >
            {paragraphs.map((paragraph, index) => (
              <p key={`${contentId}-${index}`}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
