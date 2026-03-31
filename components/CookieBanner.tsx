"use client"

import { useEffect, useState } from "react"

type ConsentState = "granted" | "denied"

function setConsent(analytics: ConsentState, marketing: ConsentState) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  })
}

function getStoredConsent(): "accepted" | "declined" | null {
  try {
    return localStorage.getItem("cookie_consent") as "accepted" | "declined" | null
  } catch {
    return null
  }
}

function storeConsent(value: "accepted" | "declined") {
  try {
    localStorage.setItem("cookie_consent", value)
  } catch {}
}

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      setShow(true)
    }

    const handler = () => {
      setShowPanel(true)
      setShow(true)
    }
    window.addEventListener("openCookieSettings", handler)
    return () => window.removeEventListener("openCookieSettings", handler)
  }, [])

  function acceptAll() {
    storeConsent("accepted")
    setConsent("granted", "granted")
    setShow(false)
    setShowPanel(false)
  }

  function declineAll() {
    storeConsent("declined")
    setConsent("denied", "denied")
    setShow(false)
    setShowPanel(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ustawienia cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-700 bg-slate-900 px-4 py-5 shadow-2xl sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            Używamy plików cookies do analizy ruchu (Google Analytics) oraz zapewnienia
            poprawnego działania serwisu. Możesz zaakceptować wszystkie lub odrzucić
            opcjonalne cookies.{" "}
            <a
              href="/polityka-prywatnosci"
              className="text-amber-400 underline hover:text-amber-300"
            >
              Polityka prywatności
            </a>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={declineAll}
            className="rounded border border-gray-600 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </div>
  )
}
