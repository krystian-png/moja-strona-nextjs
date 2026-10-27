"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

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

export default function CookieBanner({ forceLocale }: {forceLocale?: string} = {}) {
  const pathname = usePathname()
  const russianPage = forceLocale === "ru" || pathname === "/ru" || pathname?.startsWith("/ru/")
  const englishPage = forceLocale === "en" || pathname === "/en" || pathname?.startsWith("/en/")
  const ukrainianPreview = forceLocale === "uk" || pathname === "/uk" || pathname?.startsWith("/uk/") || pathname === "/podglad/uk" || pathname?.startsWith("/podglad/uk/")
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
      aria-label={ukrainianPreview ? "Налаштування cookies" : englishPage ? "Cookie settings" : russianPage ? "Настройки cookies" : "Ustawienia cookies"}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-700 bg-slate-900 px-4 py-5 shadow-2xl sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-300">
            {ukrainianPreview ? (
              <>Ми використовуємо файли cookies для аналізу відвідуваності (Google Analytics) і належної роботи сайту. Ви можете прийняти всі cookies або відхилити необов’язкові. </>
            ) : russianPage ? (
              <>Мы используем необходимые cookies для работы сайта и необязательные cookies для аналитики (Google Analytics). Вы можете принять все или отклонить необязательные. </>
            ) : englishPage ? (
              <>We use cookies for website functionality and optional analytics (Google Analytics). You can accept all cookies or reject non-essential ones. </>
            ) : (
              <>Używamy plików cookies do analizy ruchu (Google Analytics) oraz zapewnienia poprawnego działania serwisu. Możesz zaakceptować wszystkie lub odrzucić opcjonalne cookies. </>
            )}
            <a
              href={ukrainianPreview ? "/uk/polityka-prywatnosci" : englishPage ? "/en/cookie-policy" : russianPage ? "/ru/polityka-prywatnosci" : "/polityka-prywatnosci"}
              className="text-amber-400 underline hover:text-amber-300"
            >
              {ukrainianPreview ? "Політика конфіденційності та cookies" : englishPage ? "Privacy and Cookies Policy" : russianPage ? "Политика конфиденциальности и cookies" : "Polityka prywatności"}
            </a>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={declineAll}
            className="rounded border border-gray-600 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
          >
            {ukrainianPreview ? "Лише необхідні" : englishPage ? "Necessary only" : russianPage ? "Только необходимые" : "Tylko niezbędne"}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >
            {ukrainianPreview ? "Приймаю всі" : englishPage ? "Accept all" : russianPage ? "Принять все" : "Akceptuję wszystkie"}
          </button>
        </div>
      </div>
    </div>
  )
}
