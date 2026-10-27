import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import type { KrsLandingCopy } from "@/lib/krs-language-copy"

export function LocalizedNav({ t }: { t: KrsLandingCopy }) {
  const currentLanguage = t.locale === "vi" ? "vi" : t.locale === "zh" ? "zh" : t.locale === "ru" ? "ru" : t.locale === "en" ? "en" : "uk"
  return (
    <header className="sticky top-0 z-50 border-b border-[#D4D9DE] bg-[#FAFAF9]/95 shadow-sm backdrop-blur-md" lang={t.locale}>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 px-4 py-2.5 sm:px-6 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-5 lg:gap-y-3 lg:px-8 lg:py-3">
        <Link href="/" aria-label="ZmianaKRS.pl — strona główna" className="col-start-1 inline-flex w-fit items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
          <Image src="/images/logo-zmianakrs-header.svg" alt="ZmianaKRS.pl" width={374} height={120} priority className="h-auto w-[152px] sm:w-[165px] lg:w-[210px] xl:w-[225px]" />
        </Link>
        <div className="col-start-2 justify-self-end lg:hidden">
          <LanguageSwitcher current={currentLanguage} />
        </div>
        <div className="col-span-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-semibold sm:text-sm lg:col-span-1 lg:gap-x-5 lg:text-base">
          <a className="inline-flex items-center gap-1.5 whitespace-nowrap text-[#73471F] hover:underline" href="tel:+48572234779"><Phone className="h-4 w-4 shrink-0" aria-hidden="true"/>+48 572 234 779</a>
          <a className="inline-flex items-center gap-1.5 whitespace-nowrap text-[#73471F] hover:underline" href="mailto:biuro@zmianakrs.pl"><Mail className="h-4 w-4 shrink-0" aria-hidden="true"/>biuro@zmianakrs.pl</a>
        </div>
        <nav aria-label={t.languageName} className="col-span-2 flex min-w-0 flex-wrap items-center gap-1 text-[13px] font-semibold sm:gap-2 sm:text-sm lg:col-span-1">
          <a href="#services-krs" className="rounded-md px-1.5 py-2 text-[#243445] hover:bg-slate-100 sm:px-2">{t.sections.servicesEyebrow}</a>
          <a href="#faq-krs" className="rounded-md px-1.5 py-2 text-[#243445] hover:bg-slate-100 sm:px-2">FAQ</a>
          <a href="#contact-krs" className="rounded-md bg-amber-500 px-2.5 py-2 text-slate-950 hover:bg-amber-400 sm:px-3">{t.sections.ctaLabel}</a>
          <div className="hidden lg:block"><LanguageSwitcher current={currentLanguage} /></div>
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
          <Link href={t.locale === "uk" ? "/uk/regulamin" : t.locale === "en" ? "/en/terms-of-service" : t.locale === "ru" ? "/ru/regulamin" : t.locale === "zh" ? "/zh/regulamin" : t.locale === "vi" ? "/vi/regulamin" : "/regulamin"} lang={t.locale === "uk" ? "uk" : t.locale === "en" ? "en" : t.locale === "ru" ? "ru" : t.locale === "zh" ? "zh-Hans" : t.locale === "vi" ? "vi" : "pl"} className="text-amber-200 underline-offset-2 hover:underline">{t.locale === "uk" ? "Умови користування" : t.locale === "en" ? "Terms of Service" : t.locale === "ru" ? "Условия оказания услуг" : t.locale === "zh" ? "服务条款" : t.locale === "vi" ? "Điều khoản dịch vụ" : "Regulamin (PL)"}</Link>
          <Link href={t.locale === "uk" ? "/uk/polityka-prywatnosci" : t.locale === "en" ? "/en/cookie-policy" : t.locale === "ru" ? "/ru/polityka-prywatnosci" : t.locale === "zh" ? "/zh/polityka-prywatnosci" : t.locale === "vi" ? "/vi/polityka-prywatnosci" : "/polityka-prywatnosci"} lang={t.locale === "zh" ? "zh-Hans" : t.locale} className="text-amber-200 underline-offset-2 hover:underline">{t.locale === "uk" ? "Політика конфіденційності та cookies" : t.locale === "en" ? "Privacy and Cookies Policy" : t.locale === "ru" ? "Политика конфиденциальности и cookies" : t.locale === "zh" ? "隐私及 Cookie 政策" : t.locale === "vi" ? "Quyền riêng tư và Cookie" : "Polityka prywatności (PL)"}</Link>
          <a href="mailto:biuro@zmianakrs.pl" className="text-amber-200 hover:underline">biuro@zmianakrs.pl</a>
        </div>
      </div>
    </footer>
  )
}
