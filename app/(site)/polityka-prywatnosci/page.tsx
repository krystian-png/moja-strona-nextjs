import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import privacyBackground from "@/public/images/dokumenty-ksiegowe-zwyczajne-walne-zgromadzenie-krs.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pageUrl = `${siteUrl}/polityka-prywatnosci`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  name: "Polityka prywatności ZmianaKRS",
  url: pageUrl,
  publisher: organizationSchema,
  inLanguage: "pl-PL",
  description:
    "Dowiedz się, jakie dane osobowe przetwarzamy podczas obsługi zmian w KRS oraz w jaki sposób je zabezpieczamy.",
}

export const metadata: Metadata = {
  title: "Polityka prywatności | ZmianaKRS",
  description:
    "Sprawdź, w jaki sposób ZmianaKRS przetwarza dane osobowe i zapewnia bezpieczeństwo informacji podczas obsługi zmian w KRS.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Polityka prywatności | ZmianaKRS",
    description:
      "Poznaj zasady przetwarzania danych osobowych i bezpieczeństwa informacji stosowane przez ZmianaKRS.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Polityka prywatności ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polityka prywatności ZmianaKRS",
    description: "Informacje o przetwarzaniu danych osobowych klientów i partnerów biznesowych.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const sections = [
  {
    title: "Jakie dane przetwarzamy?",
    content:
      "Przetwarzamy dane identyfikacyjne osób reprezentujących spółkę, dane kontaktowe oraz dokumenty korporacyjne niezbędne do przygotowania wniosku. W przypadku pełnomocnictw gromadzimy także informacje o prokurentach i członkach zarządu.",
    pageId: "privacy-1",
  },
  {
    title: "Cele i podstawy prawne",
    content:
      "Dane przetwarzamy w celu przygotowania i złożenia wniosków do KRS (art. 6 ust. 1 lit. b RODO), realizacji obowiązków prawnych (art. 6 ust. 1 lit. c) oraz na podstawie uzasadnionego interesu administratora – m.in. w celu ochrony przed roszczeniami (art. 6 ust. 1 lit. f).",
    pageId: "privacy-2",
  },
  {
    title: "Okres przechowywania",
    content:
      "Dokumenty przechowujemy przez okres wymagany przepisami – zazwyczaj 6 lat od zakończenia współpracy. Na Twoje życzenie możemy przekazać pełną kopię dokumentacji oraz potwierdzenia złożenia wniosku.",
    pageId: "privacy-3",
  },
  {
    title: "Twoje prawa",
    content:
      "Masz prawo do dostępu do danych, ich sprostowania, ograniczenia przetwarzania, a także wniesienia sprzeciwu lub żądania usunięcia. W sprawach związanych z ochroną danych skontaktuj się z nami mailowo: rodo@zmianakrs.pl.",
    pageId: "privacy-4",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="privacy-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-10 bg-slate-900/70"
        style={{
          backgroundImage: `url(${privacyBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-20 lg:py-24">
        <section>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Bezpieczeństwo danych</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Polityka prywatności ZmianaKRS
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            Dbamy o poufność informacji powierzonych nam podczas obsługi zmian w KRS. Poniżej znajdziesz szczegółowe zasady
            przetwarzania danych osobowych oraz sposoby zabezpieczania dokumentacji.
          </p>
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 px-8 py-12 backdrop-blur md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Administrator danych</h2>
            <p className="text-slate-200">
              Administratorem danych jest {brandName}, ul. Postępu 15, 02-676 Warszawa. W sprawach związanych z ochroną danych
              skontaktuj się z nami pod adresem rodo@zmianakrs.pl lub telefonicznie +48 572 234 779.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Wdrażamy procedury kontroli dostępu oraz szyfrowania repozytoriów dokumentów.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Regularnie weryfikujemy upoważnienia oraz prowadzimy szkolenia z bezpieczeństwa informacji.</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>Prowadzimy rejestr czynności przetwarzania i testy procedur reagowania na incydenty.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          {sections.map((section) => (
            <SEOExpandableSection key={section.pageId} title={section.title} content={section.content} pageId={section.pageId} />
          ))}
        </section>

        <section className="rounded-3xl bg-amber-500/10 px-10 py-12 text-center text-slate-900 backdrop-blur">
          <h2 className="text-3xl font-semibold text-white">Masz pytania dotyczące ochrony danych?</h2>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Skontaktuj się z naszym zespołem, aby otrzymać dodatkowe informacje lub zgłosić incydent bezpieczeństwa.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            href="mailto:rodo@zmianakrs.pl"
          >
            Napisz do inspektora danych
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
