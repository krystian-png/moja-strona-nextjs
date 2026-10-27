"use client"

import { useEffect } from "react"

/**
 * Preview-only locale synchronization.
 * A dedicated server-rendered language root is required before publication.
 */
export default function DocumentLocale({ locale }: { locale: string }) {
  useEffect(() => {
    const oldLocale = document.documentElement.lang
    document.documentElement.lang = locale
    return () => {
      document.documentElement.lang = oldLocale || "pl"
    }
  }, [locale])

  return null
}
