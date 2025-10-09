import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import accountantsBackground from "@/public/images/miejsce-pracy-ksiegowego-kawa-dokumenty-atmosfera-zaufania-profesjonalna-wspolpraca-obsluga-krs.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import { Calculator, Clock, FileText, TrendingUp, Users } from "lucide-react"

const pageUrl = `${siteUrl}/ksiegowi`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Obsługa zmian KRS dla biur rachunkowych",
  url: pageUrl,
  provider: organizationSchema,
  serviceType: "White-label KRS filing",
  audience: {
    "@type": "Audience",
    audienceType: "Biura rachunkowe i kancelarie",
  },
}

export const metadata: Metadata = {
  title: "Współpraca z biurami księgowymi | ZmianaKRS",
  description:
    "Profesjonalne wsparcie w obsłudze zmian wpisów do KRS dla biur rachunkowych. Zadbaj o klientów, a my przejmiemy formalności.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Współpraca z biurami księgowymi | ZmianaKRS",
    description:
      "Pozwól zespołowi ZmianaKRS przygotować dokumenty i złożyć wnioski do KRS, a Twoje biuro skoncentruje się na księgowości.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Obsługa zmian KRS dla biur rachunkowych",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wsparcie KRS dla biur księgowych",
    description:
      "Deleguj przygotowanie i złożenie wniosków KRS ekspertom. Zapewnij klientom pełną obsługę bez obciążania zespołu.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

const containerPadding = "w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32"

const accountantBenefits = [
  {
    icon: Users,
    title: "Skup się na księgowości i doradztwie podatkowym",
    description:
      "Przekazujesz nam formalności KRS, a Twój zespół może skoncentrować się na bieżącej obsłudze klientów i rozwijaniu usług.",
  },
  {
    icon: Calculator,
    title: "Zachowaj dobre relacje z klientami",
    description:
      "Dostarczamy komplet dokumentów i jasne instrukcje, dzięki czemu klienci otrzymują od Ciebie gotowe rozwiązania i wiedzą, co zrobić dalej.",
  },
  {
    icon: Clock,
    title: "Zapewnij klientom profesjonalną obsługę prawną",
    description:
      "Przygotowujemy uchwały, formularze i pilnujemy formalnych wymogów, aby każdy wniosek został złożony bezbłędnie i terminowo.",
  },
  {
    icon: TrendingUp,
    title: "Transparentność i partnerstwo",
    description:
      "Otrzymujesz czytelne raporty z etapów spraw, rekomendacje kolejnych działań i wsparcie ekspertów w nietypowych sytuacjach.",
  },
  {
    icon: Clock,
    title: "Szybka i skuteczna obsługa",
    description:
      "Rozpoczynamy działania od razu po przekazaniu danych. Dbamy o terminy sądowe i urzędowe, by Twoi klienci nie czekali na wpis.",
  },
  {
    icon: Users,
    title: "Pełna komunikacja w Twoim imieniu",
    description:
      "Informujemy o postępach, przekazujemy aktualizacje i zachowujemy ustalone z Tobą standardy komunikacji white-label.",
  },
]

const trustReasons = [
  {
    icon: FileText,
    title: "Wieloletnie doświadczenie",
    description:
      "Posiadamy wieloletnie doświadczenie w obsłudze wpisów do KRS i na bieżąco śledzimy zmiany w przepisach prawa spółek.",
  },
  {
    icon: Clock,
    title: "Szybka i skuteczna obsługa",
    description:
      "Zapewniamy sprawne przeprowadzenie procedury – od przygotowania dokumentów po złożenie wniosku i uzyskanie wpisu.",
  },
  {
    icon: TrendingUp,
    title: "Transparentność i elastyczność",
    description:
      "Działamy jasno i elastycznie – proponujemy dogodne zasady współpracy dopasowane do specyfiki Twojego biura.",
  },
  {
    icon: Users,
    title: "Pełna komunikacja",
    description:
      "Na bieżąco informujemy o statusie sprawy i pozostajemy w stałym kontakcie z Tobą oraz Twoimi klientami.",
  },
]

const cooperationProcess = [
  {
    step: "01",
    title: "Polecasz nas swoim klientom",
    description:
      "Klient trafia do nas z Twoją rekomendacją. Omawiamy zakres zmian w KRS i ustalamy sposób przekazania dokumentów.",
  },
  {
    step: "02",
    title: "My zajmujemy się całą procedurą",
    description:
      "Przygotowujemy komplet uchwał, formularzy i wniosek do KRS. W razie potrzeby konsultujemy treść dokumentów z Tobą.",
  },
  {
    step: "03",
    title: "Informujemy o postępach",
    description:
      "Regularnie raportujemy status sprawy, przekazujemy potwierdzenia z sądu i podpowiadamy kolejne działania.",
  },
  {
    step: "04",
    title: "Wy skupiacie się na swojej pracy",
    description:
      "Twoje biuro kontynuuje obsługę księgową klientów, a my prowadzimy proces do momentu uzyskania wpisu w rejestrze.",
  },
]

const seoContent = `Obsługa zmian w KRS dla biur rachunkowych – profesjonalne wsparcie Twoich klientów
Oferujemy kompleksowe usługi w zakresie obsługi zmian wpisu w Krajowym Rejestrze Sądowym (KRS) dla spółek obsługiwanych przez biura rachunkowe. Współpracujemy z biurami rachunkowymi, które chcą zapewnić swoim klientom profesjonalne i bezpieczne wprowadzenie zmian do rejestru sądowego – bez konieczności angażowania dodatkowych zasobów czy tracenia czasu na skomplikowane formalności.
Specjalizujemy się w przygotowaniu wniosków o zmianę w KRS, sporządzaniu uchwał do KRS i kompletnej obsłudze dokumentów rejestrowych spółki. Doradzamy, jak skutecznie zgłosić zmianę danych rejestracyjnych w KRS – w tym zmianę zarządu, adresu siedziby spółki, PKD, wspólników czy kapitału zakładowego.

Zakres naszej obsługi dla biur rachunkowych:
przygotowanie i składanie wniosków o zmianę w KRS
sporządzanie uchwał i dokumentów rejestrowych spółki
zmiana zarządu w KRS
zmiana danych spółki w KRS (adres, PKD, wspólnicy, kapitał)
elektroniczne zgłoszenie zmian do KRS przez system S24
monitorowanie wpisu zmian do KRS
kompleksowe doradztwo na każdym etapie procesu

Elektroniczne zgłoszenie zmian do KRS – system S24
Zapewniamy pełne wsparcie w zakresie elektronicznego zgłoszenia zmian do KRS przez system S24. Przygotowujemy dokumenty i pomagamy w ich prawidłowym złożeniu online, co pozwala Twoim klientom na szybkie i wygodne dokonanie zmian rejestrowych.

Dlaczego warto z nami współpracować?
Wieloletnie doświadczenie w obsłudze zmian w KRS
Specjalizacja w elektronicznym zgłaszaniu zmian przez system S24
Elastyczne warunki współpracy dostosowane do potrzeb biura rachunkowego
Konkurencyjne ceny i indywidualne wyceny
Terminowość, rzetelność i pełne bezpieczeństwo formalno-prawne

Współpraca B2B z biurami rachunkowymi
Naszym celem jest wsparcie biur rachunkowych w kompleksowej obsłudze ich klientów. Dzięki naszej pomocy możesz rozszerzyć ofertę swojego biura o profesjonalne usługi związane z rejestracją zmian w KRS i zaoferować klientom pełne wsparcie w tym zakresie – bez konieczności inwestowania we własne zasoby czy szkolenia pracowników.
Skontaktuj się z nami, aby omówić szczegóły współpracy. Razem zadbamy o to, aby Twoi klienci mogli wprowadzać zmiany w KRS sprawnie, bezpiecznie i zgodnie z przepisami.`

export default function AccountantsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="ksiegowi-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${accountantsBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-900/60" aria-hidden />

      <Navbar />

      <main className="relative flex flex-col gap-16 mt-16 pb-24">
        <section className="relative pt-20 pb-6 text-white overflow-hidden">
          <div className={`relative z-10 text-center ${containerPadding}`}>
            <div className="mx-auto max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Współpraca z <span className="text-amber-400">Biurami Księgowymi</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Profesjonalne wsparcie w zakresie wpisów do KRS. Pozwól nam zająć się formalnościami, podczas gdy Ty skupiasz się
                na księgowości.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-8 text-white overflow-hidden">
          <div className={containerPadding}>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Problem, który dobrze znacie</h2>
                <div className="text-left space-y-4">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Wielu klientów uważa, że formalności związane ze zmianami wpisów w Krajowym Rejestrze Sądowym (KRS) – zmiana
                    adresu, aktualizacja kodów PKD, zmiana zarządu czy inne modyfikacje – powinny być wliczone w usługi księgowe i
                    niechętnie płaci za nie dodatkowo.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Z kolei dla Was, jako biura, wykonywanie tych czynności „po kosztach” lub bez odpowiedniego wynagrodzenia to nie
                    tylko strata czasu, ale i ryzyko błędów oraz odpowiedzialności prawnej, zwłaszcza jeśli nie macie specjalistycznej
                    wiedzy w zakresie prawa spółek i procedur rejestrowych.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 text-white overflow-hidden">
          <div className={containerPadding}>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Nasze rozwiązanie – profesjonalne wsparcie</h2>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  Oferujemy Państwu <strong>kompleksową obsługę wpisów i zmian w KRS</strong>, która pozwoli Wam:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {accountantBenefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={benefit.title}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-amber-300 mt-1">
                          <Icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                          <p className="text-gray-200">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 text-white overflow-hidden">
          <div className={containerPadding}>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Dlaczego warto nam zaufać?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trustReasons.map((reason) => {
                  const Icon = reason.icon
                  return (
                    <div
                      key={reason.title}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-amber-300 mt-1">
                          <Icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
                          <p className="text-gray-200">{reason.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Jak wygląda współpraca?</h2>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  Proces współpracy jest prosty i przejrzysty. Oto jak to działa:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {cooperationProcess.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SEOExpandableSection
          title="Obsługa zmian w KRS dla biur rachunkowych"
          buttonLabel="Rozwiń sekcję SEO"
          content={seoContent}
          pageId="accountants-seo"
        />
      </main>

      <Footer />
    </div>
  )
}
