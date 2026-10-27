"use client"

import Link from "next/link"
import { Check, ChevronDown, Globe2 } from "lucide-react"

type Locale = "pl" | "en" | "uk" | "ru" | "zh" | "vi"

const languages: { code: Locale; label: string; flag: string; href: string }[] = [
  { code: "pl", label: "Polski", flag: "🇵🇱", href: "/" },
  { code: "en", label: "English", flag: "🇬🇧", href: "/en" },
  { code: "uk", label: "Українська", flag: "🇺🇦", href: "/uk" },
  { code: "ru", label: "Русский", flag: "🌐", href: "/ru" },
  { code: "zh", label: "简体中文", flag: "🇨🇳", href: "/zh" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", href: "/vi" },
]

export default function LanguageSwitcher({
  current = "pl",
  mobile = false,
}: {
  current?: Locale
  mobile?: boolean
}) {
  const selected = languages.find((item) => item.code === current) ?? languages[0]

  return (
    <details className={`group relative z-[60] text-sm ${mobile ? "w-full" : "shrink-0"}`}>
      <summary
        aria-label="Wybierz język / Select language"
        className={`flex cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-[#D4C5B4] bg-white px-3.5 py-2.5 font-semibold text-[#263649] shadow-sm transition hover:border-[#9D6225] hover:bg-[#FFF8EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AD6B23] [&::-webkit-details-marker]:hidden ${mobile ? "w-full justify-between" : ""}`}
      >
        <Globe2 aria-hidden="true" className="h-4 w-4 text-[#A66423]" />
        <span>{selected.flag}</span>
        <span>{selected.code.toUpperCase()}</span>
        <ChevronDown aria-hidden="true" className="h-4 w-4 text-[#506174] transition-transform group-open:rotate-180" />
      </summary>
      <div className={`z-[70] mt-2 rounded-xl border border-[#DCE2E8] bg-white p-1.5 shadow-xl ${mobile ? "w-full" : "absolute right-0 top-full w-max min-w-[194px] max-w-[calc(100vw-2rem)]"}`}>
        {languages.map(({code, label, flag, href}) => (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            aria-current={current === code ? "page" : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#233346] transition hover:bg-[#F2F5F7] ${current === code ? "bg-[#F2F5F7] font-bold" : ""}`}
          >
            <span aria-hidden="true" className="text-base">{flag}</span>
            <span className="flex-1">{label}</span>
            {current === code && <Check aria-hidden="true" className="h-4 w-4 text-[#9A601F]"/>}
          </Link>
        ))}
      </div>
    </details>
  )
}
