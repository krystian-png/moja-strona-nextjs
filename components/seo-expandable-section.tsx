"use client"

import React, { useState } from "react"

interface SEOExpandableSectionProps {
  title: string
  content: string
  pageId: string
}

export default function SEOExpandableSection({
  title,
  content,
  pageId,
}: SEOExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id={pageId} className="my-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left font-semibold"
        aria-expanded={expanded}
      >
        {title}
      </button>
      {expanded && (
        <div className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
          {content}
        </div>
      )}
    </section>
  )
}
