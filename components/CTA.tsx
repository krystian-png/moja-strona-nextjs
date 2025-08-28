"use client"

import React from "react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">Gotowy na zmianę?</h2>
      <p className="text-sm text-gray-600 mb-8">
        Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej spółce.
      </p>
      <Link
        href="/kontakt"
        className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 inline-block"
      >
        Skontaktuj się z nami
      </Link>
    </section>
  )
}
