import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import aboutBackground from "@/public/images/Solidne-fundamenty-prawne-eksperci-KRS-z-wieloletnim-doświadczeniem-w-obsłudze-wniosków-o-zmianę-wpi.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import { Card } from "@/components/ui/card"
import { Award, DollarSign, Globe } from "lucide-react"
import SEOExpandableSection from "@/components/SEOExpandableSection"

const pagePath = "/o-nas"
const pageUrl = `${siteUrl}${pagePath}`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "O nas - ZmianaKRS",
  url: pageUrl,
  publisher: organizationSchema,
  description:
    "Poznaj zespół ZmianaKRS odpowiedzialny za obsługę zmian w Krajowym Rejestrze Sądowym dla spółek i biur rachunkowych.",
}

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Jesteśmy zespołem prawników, analityków i konsultantów ds. KRS. Od 2015 roku pomagamy spółkom sprawnie przechodzić przez zmiany w rejestrze.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "O nas | ZmianaKRS",
    description:
      "Dowiedz się, jak pracujemy przy obsłudze zmian w KRS. Poznaj proces, wartości i doświadczenie zespołu ZmianaKRS.",
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: `${siteUrl}/images/krs-services.png`,
        width: 1200,
        height: 630,
        alt: "Zespół ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poznaj ZmianaKRS",
    description: "Sprawdź, kto stoi za sukcesem setek obsłużonych zmian w KRS i jak wspieramy naszych klientów.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function AboutPage() {
  const seoSectionContent = `Kim jesteśmy – profesjonalna obsługa zmian w KRS dla spółek i biur rachunkowych

Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem w obsłudze zmian w Krajowym Rejestrze Sądowym (KRS). Pomagamy spółkom prawa handlowego, fundacjom i stowarzyszeniom w szybkim, bezpiecznym i zgodnym z przepisami wprowadzaniu zmian do rejestru sądowego. Naszym celem jest uproszczenie całego procesu – od przygotowania wniosku o zmianę w KRS, przez sporządzenie uchwał i dokumentów, aż po skuteczne złożenie wniosku i uzyskanie wpisu zmian do KRS.

Specjalizujemy się w kompleksowej obsłudze wniosków KRS, w tym w elektronicznym zgłoszeniu zmian do KRS przez system S24. Doradzamy, jak zmienić dane w KRS, pomagamy przy zmianie zarządu w KRS, zmianie adresu siedziby spółki, PKD, kapitału zakładowego czy składu wspólników. Nasze usługi KRS dla spółek obejmują pełne wsparcie prawno-formalne i indywidualne podejście do każdej sprawy.

Nasze wartości:

Profesjonalizm i rzetelność

Terminowość i dbałość o każdy szczegół

Przejrzyste zasady współpracy

Pełna zgodność z obowiązującymi przepisami prawa

Indywidualne podejście do każdego klienta

Współpraca z biurami rachunkowymi

Wspieramy biura rachunkowe, które obsługują spółki wymagające zmian danych rejestrowych w KRS. Proponujemy partnerskie podejście, indywidualną wycenę i kompleksową obsługę wniosków KRS dla klientów biura rachunkowego. Współpraca z nami to pewność terminowego i prawidłowego zgłoszenia zmian do KRS.

Dlaczego warto nam zaufać?

Wieloletnie doświadczenie w obsłudze zmian w KRS

Specjalizacja w elektronicznym zgłaszaniu zmian do KRS przez system S24

Pełna obsługa dokumentów rejestrowych spółki

Atrakcyjne warunki współpracy dla biur rachunkowych

Dedykowane doradztwo na każdym etapie procesu

Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach KRS dla spółek i biur rachunkowych. Zapewniamy profesjonalne, bezpieczne i wygodne rozwiązania dopasowane do Twoich potrzeb.`

  return (
    <div className="relative min-h-screen text-white">
      <Script id="onas-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${aboutBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/60" aria-hidden />

      <Navbar />

      <main>
        <section className="relative pt-20 pb-20 text-white overflow-hidden">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                Eksperci ds. zmian wpisu w <span className="text-amber-400">KRS</span>
              </h1>

              <div className="space-y-8 mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6 text-center">
                  Doświadczenie w obsłudze wniosków o zmianę wpisu w KRS
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 leading-relaxed text-justify">
                  Jesteśmy zespołem specjalistów z ponad 10-letnim doświadczeniem w obsłudze formalności związanych z Krajowym
                  Rejestrem Sądowym. Od lat wspieramy przedsiębiorców w całej Polsce w skutecznym i bezbłędnym składaniu wniosków o
                  zmianę wpisu w KRS. Przeprowadziliśmy już kilkaset postępowań rejestrowych, pomagając zarówno małym firmom, jak i
                  dużym spółkom kapitałowym.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
                  Wiemy, że dla wielu przedsiębiorców zmiany w KRS bywają stresujące, czasochłonne i pełne niejasności. Dlatego
                  stworzyliśmy zdalną usługę, która łączy kompleksową pomoc prawną, profesjonalną obsługę wniosków KRS oraz
                  transparentny model rozliczeń. Naszym celem jest uproszczenie procedur i zagwarantowanie pełnego bezpieczeństwa
                  prawnego na każdym etapie — od przygotowania dokumentów aż po uzyskanie wpisu w rejestrze.
                </p>
              </div>

              <div className="w-full">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Dlaczego warto nam zaufać w procesie zmiany zarządu w KRS?
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="!bg-white/10 !border-white/20 !shadow-none backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-lg mb-4 mx-auto">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">Setki zrealizowanych spraw</h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-justify">
                        Nie jesteśmy teoretykami. Obsłużyliśmy już kilkaset wniosków o zmianę wpisu w KRS — od prostych zmian adresu,
                        przez zmiany PKD, zarządu, aż po skomplikowane przekształcenia spółek. To praktyka ukształtowała nasze
                        podejście: ma być szybko, skutecznie i bezpiecznie.
                      </p>
                    </div>
                  </Card>

                  <Card className="!bg-white/10 !border-white/20 !shadow-none backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-lg mb-4 mx-auto">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">Obsługa zdalna, bez względu na lokalizację</h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-justify">
                        Działamy w pełni zdalnie, co oznacza, że możesz zlecić nam obsługę swojego wniosku niezależnie od miejsca, w
                        którym prowadzisz działalność. Dokumenty przygotujemy elektronicznie, wniosek złożymy online – Ty nie musisz
                        nawet wychodzić z biura.
                      </p>
                    </div>
                  </Card>

                  <Card className="!bg-white/10 !border-white/20 !shadow-none backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-lg mb-4 mx-auto">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 text-center">Przejrzysty system rozliczeń</h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-justify">
                        Nie lubimy ukrytych kosztów ani niejasnych umów. Nasze{" "}
                        <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                          usługi KRS
                        </Link>{" "}
                        są wyceniane w sposób jasny i zrozumiały. Wiesz, ile zapłacisz i co dokładnie otrzymasz. Ceny zaczynają się już
                        od 799 zł netto za kompletne złożenie wniosku o zmianę w KRS z dokumentami dostarczonymi przez klienta.
                        Szczegóły znajdziesz w{" "}
                        <Link href="/cennik" className="text-amber-400 hover:text-amber-300 underline">
                          cenniku usług KRS
                        </Link>
                        . Jeśli potrzebujesz więcej –{" "}
                        <Link href="/kontakt" className="text-amber-400 hover:text-amber-300 underline">
                          skontaktuj się z nami
                        </Link>{" "}
                        i przygotujemy ofertę dostosowaną do Twojej sytuacji.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="mt-20 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Z nami zmiana wpisu w KRS to formalność</h3>
                <div className="space-y-6 text-gray-300">
                  <p className="text-base sm:text-lg leading-relaxed text-justify">
                    Jeśli zależy Ci na szybkiej, rzetelnej i wygodnej obsłudze zmian w KRS, jesteśmy do Twojej dyspozycji. Zapewniamy
                    kompleksową pomoc przy wpisie do KRS, profesjonalne wsparcie merytoryczne oraz realne odciążenie Cię od żmudnych
                    procedur. Sprawdź nasze{" "}
                    <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                      usługi zmian wpisu w KRS
                    </Link>{" "}
                    i poznaj szczegóły{" "}
                    <Link href="/cennik" className="text-amber-400 hover:text-amber-300 underline">
                      cennika obsługi wniosków KRS
                    </Link>
                    .
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-justify">
                    <Link
                      href="/kontakt"
                      className="font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer transition-colors duration-200"
                    >
                      Skontaktuj się z nami
                    </Link>{" "}
                    i przekonaj się, że wniosek o zmianę wpisu w KRS nie musi być trudny ani czasochłonny. My zajmiemy się
                    formalnościami — Ty możesz zająć się prowadzeniem biznesu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOExpandableSection
          title="Więcej o naszych usługach KRS"
          content={seoSectionContent}
          pageId="about"
        />
      </main>

      <Footer />
    </div>
  )
}
