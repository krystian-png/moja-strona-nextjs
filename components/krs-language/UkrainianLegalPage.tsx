import type { Metadata } from "next"
import Link from "next/link"
import type { LegalDocument } from "@/lib/krs-legal-uk-terms"
import { ukLanding } from "@/lib/krs-language-copy"
import { LocalizedNav, LocalizedFooter } from "@/components/krs-language/LocalizedShell"
import DocumentLocale from "@/components/krs-language/DocumentLocale"

export function ukrainianLegalMetadata(title: string, description: string): Metadata {
 return { title, description, robots: { index: false, follow: false }, openGraph: { title, description, locale: "uk_UA", siteName: "ZmianaKRS" } }
}
export default function UkrainianLegalPage({document}: {document: LegalDocument}) {
 return <div lang="uk" className="min-h-screen bg-white text-[#18242D]">
 <DocumentLocale locale="uk" />
 <LocalizedNav t={ukLanding} />
 <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
 <Link href="/uk" className="text-sm font-semibold text-amber-800 hover:underline">← Повернутися до послуг</Link>
 <h1 className="mt-8 text-3xl font-bold leading-tight text-[#172B3D] sm:text-4xl">{document.title}</h1>
 <p className="mt-3 text-sm text-slate-700">{document.effective}</p>
 <p className="mt-6 rounded-lg border-l-4 border-amber-600 bg-slate-100 p-4 leading-7">{document.intro}</p>
 <div className="mt-10 space-y-10">{document.sections.map(section=><section key={section.heading}>
 <h2 className="mb-5 text-xl font-bold text-[#172B3D] sm:text-2xl">{section.heading}</h2>
 <div className="space-y-4">{section.paragraphs.map((paragraph,index)=><p key={index} className="leading-8 text-[#202830]">{paragraph}</p>)}</div>
 </section>)}</div>
 <p className="mt-12 border-t border-slate-300 pt-5 text-sm text-slate-700">{document.closing}</p>
 </main><LocalizedFooter t={ukLanding} /></div>
}