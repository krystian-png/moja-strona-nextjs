import React, { useState } from 'react'

interface SEOExpandableSectionProps {
  title: string
  children: React.ReactNode
}

export default function SEOExpandableSection({ title, children }: SEOExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="my-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left font-semibold"
        aria-expanded={expanded}
      >
        {title}
      </button>
      {expanded && <div className="mt-2 text-sm text-gray-700">{children}</div>}
    </section>
  )
}
