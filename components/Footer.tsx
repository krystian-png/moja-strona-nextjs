"use client"

import Link from "next/link"

export type FooterProps = {
  className?: string
  variant?: "default" | "english"
}

export default function Footer({
  className,
  variant = "default",
}: FooterProps = {}) {
  const currentYear = new Date().getFullYear()
  const isEnglish = variant === "english"
  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61588617781836",
    linkedin: "https://www.linkedin.com/company/zmianakrs-pl/",
  }

  const footerClassName = [
    "bg-slate-900 text-white",
    className ?? "mt-12",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <footer className={footerClassName} role="contentinfo">
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {isEnglish ? (
            <div className="flex flex-col items-start gap-4">
              <ul className="space-y-3 text-base font-semibold text-white md:text-lg">
                <li>
                  <Link
                    href="/en/terms-of-service"
                    className="transition-colors hover:text-amber-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/cookie-policy"
                    className="transition-colors hover:text-amber-400"
                  >
                    Privacy and Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
              <div>
                <h3 className="mb-1 text-sm font-bold">Zmiana KRS</h3>
                <p className="text-xs text-gray-300">
                  Profesjonalne usługi KRS dla Twojej firmy.
                </p>
              </div>

              <div className="flex flex-col gap-6 md:flex-row lg:gap-8">
                <div>
                  <h4 className="mb-1 text-xs font-semibold">Usługi</h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      <Link
                        href="/uslugi"
                        className="transition-colors hover:text-white"
                      >
                        Zmiana wpisu w KRS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/uslugi"
                        className="transition-colors hover:text-white"
                      >
                        Zmiana zarządu w KRS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/uslugi"
                        className="transition-colors hover:text-white"
                      >
                        Zmiana umowy spółki
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cennik"
                        className="transition-colors hover:text-white"
                      >
                        Cennik usług KRS
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-1 text-xs font-semibold">Firma</h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      <Link
                        href="/o-nas"
                        className="transition-colors hover:text-white"
                      >
                        O nas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="transition-colors hover:text-white"
                      >
                        Blog KRS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ksiegowi"
                        className="transition-colors hover:text-white"
                      >
                        Dla księgowych
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kontakt"
                        className="transition-colors hover:text-white"
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-1 text-xs font-semibold">Pomoc</h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      <Link
                        href="/regulamin"
                        className="transition-colors hover:text-white"
                      >
                        Regulamin
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/polityka-prywatnosci"
                        className="transition-colors hover:text-white"
                      >
                        Polityka prywatności
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() =>
                          window.dispatchEvent(
                            new CustomEvent("openCookieSettings")
                          )
                        }
                        className="text-left transition-colors hover:text-white"
                      >
                        Zmiana ustawień cookies
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className={isEnglish ? "text-center w-full" : "lg:text-right"}>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
              <div className="flex items-center space-x-2 lg:justify-end">
                <div className="rounded-full bg-blue-600 p-1.5">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    href="tel:+48572234779"
                    className="text-base font-semibold text-white transition-colors hover:text-amber-400"
                  >
                    {isEnglish ? "+48 572 234 779" : "572 234 779"}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2 lg:justify-end">
                <div className="rounded-full bg-blue-600 p-1.5">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    href="mailto:biuro@zmianakrs.pl"
                    className="text-base font-semibold text-white transition-colors hover:text-amber-400"
                  >
                    biuro@zmianakrs.pl
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`mt-4 flex items-center gap-3 ${
                isEnglish ? "justify-center" : "justify-start lg:justify-end"
              }`}
            >
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-white transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-white transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19ZM8.34 18.34V9.67H5.67v8.67h2.67ZM7 8.5a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1Zm11.34 9.84v-4.73c0-2.53-1.35-3.71-3.15-3.71-1.45 0-2.1.8-2.46 1.36v-1.17h-2.67v8.25h2.67v-4.61c0-1.22.23-2.4 1.74-2.4 1.49 0 1.51 1.39 1.51 2.48v4.53h2.36Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-left">
          <p className="text-xs text-gray-300">
            &copy; {currentYear} Zmiana KRS. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
