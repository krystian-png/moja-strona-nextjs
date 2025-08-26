"use client"

import React from "react"
import { useRouter } from "next/navigation"

export default function CTA() {
  const router = useRouter()
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">Gotowy na zmianę?</h2>
      <p className="text-sm text-gray-600 mb-8">
        Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej spółce.
      </p>
      <button
        onClick={() => router.push("/kontakt")}
        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Skontaktuj się z nami
      </button>
    </section>
  )
}
