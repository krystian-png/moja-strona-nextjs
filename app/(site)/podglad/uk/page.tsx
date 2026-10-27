import type { Metadata } from "next"
import { ArrowRight, BadgeCheck, Building2, Check, ClipboardCheck, FileCheck2, FilePenLine, FileText, MapPin, Scale, Users } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import KrsContactForm from "@/components/krs-language/KrsContactForm"
import DocumentLocale from "@/components/krs-language/DocumentLocale"
import { ukLanding as t } from "@/lib/krs-language-copy"

export const metadata: Metadata = {
  title: "Зміни в KRS у Польщі — юридичний супровід компаній | ZmianaKRS",
  description: "Зміна даних у KRS польської компанії: правління, учасники, продаж часток, адреса, договір товариства та PKD. Документи, заява, юридична допомога.",
  robots: { index: false, follow: false },
}

const icons = [Users, FileCheck2, MapPin, FilePenLine, Building2, ClipboardCheck]

function Heading({ eyebrow, title, id, inverse = false, description }: { eyebrow: string; title: string; id?: string; inverse?: boolean; description?: string }) {
  return (
    <header className="mb-8 max-w-3xl md:mb-10">
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[.15em] ${inverse ? "text-amber-300" : "text-[#976020]"}`}>{eyebrow}</p>
      <h2 id={id} className={`text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl ${inverse ? "text-white" : "text-[#18232C]"}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-8 ${inverse ? "text-slate-100" : "text-[#1E2730]"}`}>{description}</p>}
    </header>
  )
}

export default function UkrainianKrsPreview() {
  return (
    <div lang="uk" className="min-h-screen bg-white text-[#18242D]">
      <DocumentLocale locale="uk" />
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <section className="grid items-start gap-10 border-b border-[#D8DEE3] pb-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
          <div className="max-w-2xl lg:pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.15em] text-[#956020] sm:text-sm">{t.eyebrow}</p>
            <h1 className="text-3xl font-semibold leading-[1.13] tracking-tight text-[#1B2D3C] sm:text-4xl lg:text-[3.25rem]">
              {t.titleLineOne}<span className="mt-2 block text-[#31475A]">{t.titleLineTwo}</span>
            </h1>
            <div className="mt-7 max-w-xl space-y-4 text-base leading-8 text-[#1D252D] sm:text-lg">{t.hero.map(p => <p key={p}>{p}</p>)}</div>
            <ul className="mt-8 flex flex-wrap gap-2.5">{t.highlights.map(item => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full border border-[#CFD6DD] bg-[#F4F6F7] px-3.5 py-2 text-sm font-medium text-[#1D2934]"><Check className="h-4 w-4 shrink-0 text-[#99601F]" aria-hidden="true" />{item}</li>
            ))}</ul>
          </div>
          <section id="formularz-uk" aria-labelledby="form-title-uk" className="scroll-mt-28 rounded-2xl border border-[#263442] bg-gradient-to-br from-[#172B3D] to-[#253D51] p-5 text-white shadow-[0_20px_40px_rgba(40,42,45,.17)] sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-amber-300">{t.eyebrow}</p>
            <h2 id="form-title-uk" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{t.form.heading}</h2>
            <p className="mb-6 mt-3 text-base leading-7 text-[#E4EBF1]">{t.form.intro}</p>
            <KrsContactForm locale="uk" copy={t.form} />
          </section>
        </section>
        <section aria-labelledby="services-uk" className="my-5 rounded-2xl border border-[#E4E8EB] bg-[#F3F5F6] px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          <Heading eyebrow={t.sections.servicesEyebrow} title={t.sections.servicesTitle} description={t.sections.servicesIntro} id="services-uk"/>
          <div className="grid gap-x-9 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service,i) => {const Icon=icons[i];return (
              <article key={service.title} className="border-t border-[#C5CDD3] px-1 pb-3 pt-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#E4E9ED]"><Icon aria-hidden="true" className="h-5 w-5 text-[#995F22]"/></span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#152433]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#1E252C]">{service.description}</p>
              </article>
            )})}
          </div>
        </section>
        <section aria-labelledby="steps-uk" className="rounded-2xl border border-[#21384E] bg-[#203447] px-5 py-10 sm:px-8 lg:px-12">
          <Heading eyebrow={t.sections.stepsEyebrow} title={t.sections.stepsTitle} id="steps-uk" inverse/>
          <div className="grid gap-7 md:grid-cols-3">{t.steps.map((step,i)=>(
            <article key={step.title} className="border-t border-slate-400 pt-5">
              <p className="text-3xl font-light text-amber-300">0{i+1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#EEF2F5]">{step.description}</p>
            </article>
          ))}</div>
          <div className="mt-9 flex items-start gap-3 rounded-lg border border-slate-500/40 bg-[#172A3C]/45 px-4 py-4">
            <FileText aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-amber-300"/><p className="text-base leading-7 text-[#EEF2F5]">{t.sections.stepsNote}</p>
          </div>
        </section>
        <section className="grid gap-8 py-16 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div><Scale aria-hidden="true" className="mb-5 h-9 w-9 text-[#995F22]"/><h2 className="text-2xl font-semibold text-[#1B2D3C] sm:text-3xl">{t.sections.lawyerTitle}</h2></div>
          <div className="space-y-4 text-base leading-8 text-[#202830]">{t.sections.lawyerBody.map(p=><p key={p}>{p}</p>)}</div>
        </section>
        <section aria-labelledby="pricing-uk" className="rounded-2xl border border-[#DEE4E8] bg-[#F0F3F5] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:gap-12">
            <Heading id="pricing-uk" eyebrow={t.sections.pricingEyebrow} title={t.sections.pricingTitle}/>
            <div className="space-y-4 text-base leading-8 text-[#202830]">{t.sections.pricingBody.map(p=><p key={p}>{p}</p>)}</div>
          </div>
        </section>
        <section aria-labelledby="faq-uk" className="py-16 md:py-20">
          <Heading id="faq-uk" eyebrow={t.sections.faqEyebrow} title={t.sections.faqTitle}/>
          <div className="grid gap-x-9 gap-y-6 md:grid-cols-2">{t.faq.map(item=>(
            <article key={item.question} className="border-t border-[#C7D0D6] px-1 pb-3 pt-5">
              <h3 className="flex items-start gap-3 text-lg font-semibold leading-snug text-[#162330]"><BadgeCheck aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#995F22]"/>{item.question}</h3>
              <p className="mt-4 text-base leading-7 text-[#1C242C]">{item.answer}</p>
            </article>
          ))}</div>
        </section>
        <section aria-labelledby="cta-uk" className="flex flex-col items-start justify-between gap-7 rounded-2xl bg-gradient-to-r from-[#1B3043] to-[#263C4F] px-6 py-9 sm:px-9 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[.17em] text-amber-300">{t.sections.ctaEyebrow}</p>
            <h2 id="cta-uk" className="text-2xl font-semibold text-white sm:text-3xl">{t.sections.ctaTitle}</h2>
            <p className="mt-3 text-base leading-7 text-[#E5EDF3]">{t.sections.ctaBody}</p>
          </div>
          <a href="#formularz-uk" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-slate-950 hover:bg-amber-400">{t.sections.ctaLabel}<ArrowRight aria-hidden="true" className="h-5 w-5"/></a>
        </section>
      </main>
      <Footer className="mt-0"/>
    </div>
  )
}
