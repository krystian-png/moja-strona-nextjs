"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SEOExpandableSectionProps {
  content: string;
  pageId: string;
}

export default function SEOExpandableSection({
  content,
  pageId,
}: SEOExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `${pageId}-seo-content`;

  const paragraphs = content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="bg-white/5 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-4 text-amber-400 hover:text-amber-300 text-lg font-medium transition-colors"
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <span>Więcej o naszych usługach KRS</span>
          {isOpen ? <ChevronUp className="h-6 w-6" aria-hidden="true" /> : <ChevronDown className="h-6 w-6" aria-hidden="true" />}
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
