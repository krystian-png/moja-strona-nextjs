"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function getSessionId(): string {
  if (typeof window === "undefined") return ""

  let sessionId = sessionStorage.getItem("session_id")
  if (!sessionId) {
    sessionId = crypto.randomUUID()
    sessionStorage.setItem("session_id", sessionId)
  }
  return sessionId
}

export function PageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const sessionId = getSessionId()

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "page",
        path: pathname,
        sessionId
      })
    }).catch(() => {})
  }, [pathname])

  return null
}
