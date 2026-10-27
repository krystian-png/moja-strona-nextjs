import Link from "next/link"
import { Globe2, Mail, Phone, ChevronDown } from "lucide-react"
import type { KrsLandingCopy } from "@/lib/krs-language-copy"

const languageOptions = [
  {code:"pl", name:"Polski", href:"/podglad/obsluga-miedzynarodowa"},
  {code:"en", name:"English", href:"/podglad/en"},
  {code:"uk", name:"Українська", href:"/podglad/uk"},
  {code:"ru", name:"Русский", href:"/podglad/ru"},
  {code:"zh", name:"简体中文", href:"/podglad/zh"},
  {code:"vi", name:"Tiếng Việt", href:"/podglad/vi"},
  {code:"vi", name:"Tiếng Việt", href:"/podglad/vi"},
]

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
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[#182B3C] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-700">
              <Globe2 className="h-4 w-4" aria-hidden="true"/><span className="uppercase">{t.locale}</span><ChevronDown className="h-4 w-4" aria-hidden="true"/>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 min-w-[190px] rounded-lg border border-slate-200 bg-white p-1.5 shadow-xl">
              {languageOptions.map(option=> (
                <Link key={option.code} href={option.href} hrefLang={option.code === "zh" ? "zh-Hans" : option.code} lang={option.code}
                  aria-current={option.code === t.locale ? "page" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-sm text-[#203142] hover:bg-slate-100 ${option.code === t.locale ? "bg-slate-100 font-bold" : ""}`}>
                  {option.name}
                </Link>
              ))}
            </div>
          </details>
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
          <Link href="/regulamin" lang="pl" className="text-amber-200 underline-offset-2 hover:underline">Regulamin (PL)</Link>
          <Link href="/polityka-prywatnosci" lang="pl" className="text-amber-200 underline-offset-2 hover:underline">Polityka prywatności (PL)</Link>
          <a href="mailto:biuro@zmianakrs.pl" className="text-amber-200 hover:underline">biuro@zmianakrs.pl</a>
        </div>
      </div>
    </footer>
  )
}
