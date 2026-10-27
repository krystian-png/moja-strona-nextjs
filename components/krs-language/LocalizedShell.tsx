import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import type { KrsLandingCopy } from "@/lib/krs-language-copy"

export function LocalizedNav({ t }: { t: KrsLandingCopy }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D4D9DE] bg-[#FAFAF9]/95 shadow-sm backdrop-blur-md" lang={t.locale}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold sm:text-base">
          <Link href="/" className="text-lg font-bold text-[#22364A] hover:text-[#8B5C24]">ZmianaKRS</Link>
          <a className="inline-flex items-center gap-1.5 text-[#73471F] hover:underline" href="tel:+48572234779"><Phone className="h-4 w-4" aria-hidden="true"/>+48 572 234 779</a>
          <a className="inline-flex items-center gap-1.5 text-[#73471F] hover:underline" href="mailto:biuro@zmianakrs.pl"><Mail className="h-4 w-4" aria-hidden="true"/>biuro@zmianakrs.pl</a>
        </div>
        <nav aria-label={t.languageName} className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <a href="#services-krs" className="rounded-md px-2 py-2 text-[#243445] hover:bg-slate-100">{t.sections.servicesEyebrow}</a>
          <a href="#faq-krs" className="rounded-md px-2 py-2 text-[#243445] hover:bg-slate-100">FAQ</a>
          <a href="#contact-krs" className="rounded-md bg-amber-500 px-3 py-2 text-slate-950 hover:bg-amber-400">{t.sections.ctaLabel}</a>
          <LanguageSwitcher current={t.locale === "ru" ? "ru" : t.locale === "en" ? "en" : "uk"} />
        </nav>
      </div>
    </header>
  )
}

export function LocalizedFooter({ t }: { t: KrsLandingCopy }) {
  return (
    <footer lang={t.locale} className="bg-[#122334] text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-9 text-sm sm:flex-row sm:items-center">
        <div><strong className="text-base">ZmianaKRS</strong><p className="mt-1 text-slate-200">{t.footer}</p><p className="mt-2 text-slate-300">{t.polishLegalNote}</p></div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href={t.locale === "uk" ? "/uk/regulamin" : t.locale === "en" ? "/en/terms-of-service" : t.locale === "ru" ? "/ru/regulamin" : "/regulamin"} lang={t.locale === "uk" ? "uk" : t.locale === "en" ? "en" : t.locale === "ru" ? "ru" : "pl"} className="text-amber-200 underline-offset-2 hover:underline">{t.locale === "uk" ? "Умови користування" : t.locale === "en" ? "Terms of Service" : t.locale === "ru" ? "Условия оказания услуг" : "Regulamin (PL)"}</Link>
          <Link href={t.locale === "uk" ? "/uk/polityka-prywatnosci" : t.locale === "en" ? "/en/cookie-policy" : t.locale === "ru" ? "/ru/polityka-prywatnosci" : "/polityka-prywatnosci"} lang={t.locale === "uk" ? "uk" : "pl"} className="text-amber-200 underline-offset-2 hover:underline">{t.locale === "uk" ? "Політика конфіденційності та cookies" : t.locale === "en" ? "Privacy and Cookies Policy" : t.locale === "ru" ? "Политика конфиденциальности и cookies" : "Polityka prywatności (PL)"}</Link>
          <a href="mailto:biuro@zmianakrs.pl" className="text-amber-200 hover:underline">biuro@zmianakrs.pl</a>
        </div>
      </div>
    </footer>
  )
}
