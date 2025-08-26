import React from 'react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">Gotowy na zmianę?</h2>
      <p className="text-sm text-gray-600 mb-8">
        Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej spółce.
      </p>
      <Link
        href="/kontakt"
        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Skontaktuj się
      </Link>
    </section>
  )
}
