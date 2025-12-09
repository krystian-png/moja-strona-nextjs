import type { HTMLAttributes } from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { AlertTriangle, CheckCircle, FileText, Mail, Phone } from "lucide-react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SEOExpandableSection from "@/components/SEOExpandableSection"
import { Card } from "@/components/ui/card"
import professionalWaitingRoomImage from "@/public/images/profesjonalna-poczekalnia-prawnicza-z-eleganckimi-krzeslami-atmosfera-zaufania-podczas-ustalania-cen.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const combinedClassName = className ? `p-8 ${className}` : "p-8"
  return <div className={combinedClassName} {...props} />
}

const steps = [
  "Kontaktujesz się z nami i opisujesz zakres zmiany w KRS.",
  "Otrzymujesz od nas ofertę cenową i wykaz wymaganych dokumentów.",
  "Wybierasz zakres usługi – czy chcesz tylko złożenia wniosku, czy także przygotowania dokumentów.",
  "Otrzymujesz fakturę i po jej opłaceniu rozpoczynamy pracę.",
  "Finalnie otrzymujesz urzędowe potwierdzenie złożenia wniosku i – po wpisie – zaktualizowany wydruk z KRS.",
]

const benefits = [
  "Przejrzyste zasady i ceny – bez ukrytych kosztów",
  "Ty decydujesz, z czego korzystasz",
  "Obsługa zdalna – obsługujemy klientów z całej Polski, możesz przesłać nam niezbędne dokumenty pocztą lub kurierem",
  "Dokumenty gotowe do podpisu i bezpieczne złożenie wniosku",
]

const seoContent = `Cennik usług – zmiana danych w KRS dla spółek i biur rachunkowych

Oferujemy konkurencyjne ceny za kompleksową obsługę zmian wpisu w Krajowym Rejestrze Sądowym (KRS). Każdą usługę wyceniamy indywidualnie, biorąc pod uwagę zakres zmian w KRS, tryb zgłoszenia (papierowy lub elektroniczny przez system S24) oraz potrzeby klienta. Dzięki temu masz pewność, że płacisz tylko za to, czego faktycznie potrzebujesz.

Zapewniamy pełną obsługę wniosków KRS – od analizy potrzeb, przez przygotowanie uchwał do KRS i wszystkich dokumentów rejestrowych spółki, po złożenie wniosku o zmianę w KRS w sądzie rejestrowym. Obsługujemy zarówno zmiany zarządu w KRS, zmianę danych rejestracyjnych spółki (adresu, PKD, wspólników, kapitału), jak i zmianę umowy spółki KRS.

Obsługa elektronicznego zgłoszenia zmian do KRS – system S24

Proponujemy również kompleksowe wsparcie w elektronicznym zgłoszeniu zmian do KRS za pośrednictwem systemu S24. To szybki i wygodny sposób na rejestrację zmian, pozwalający ograniczyć formalności i skrócić czas oczekiwania na wpis zmian do KRS. Przygotowujemy komplet dokumentów i pomagamy w ich prawidłowym złożeniu online.

Indywidualna wycena i elastyczne warunki współpracy

Każda zmiana w KRS ma swoją specyfikę. Dlatego zawsze przygotowujemy indywidualną wycenę dostosowaną do potrzeb Twojej firmy. Proponujemy elastyczne warunki dla spółek oraz dla biur rachunkowych obsługujących wielu klientów i chcących korzystać z naszej obsługi wniosków KRS.

Skontaktuj się z nami, aby poznać szczegóły oferty

Zachęcamy do kontaktu w celu uzyskania indywidualnej wyceny i omówienia szczegółów współpracy. Oferujemy konkurencyjne ceny, profesjonalne doradztwo i pełne bezpieczeństwo formalno-prawne w procesie zmiany wpisu w KRS.`

const pagePath = "/cennik"
const pageUrl = `${siteUrl}${pagePath}`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cennik usług zmiany wpisu w KRS",
  url: pageUrl,
  provider: organizationSchema,
  areaServed: { "@type": "Country", name: "Polska" },
  serviceType: "Obsługa zmian w KRS",
  offers: [
    {
      "@type": "Offer",
      name: "Złożenie wniosku o zmianę wpisu w KRS",
      priceSpecification: { "@type": "PriceSpecification", price: "799", priceCurrency: "PLN" },
      description:
        "Podstawowa usługa obejmująca przygotowanie i złożenie elektronicznego wniosku o zmianę wpisu w KRS wraz z monitoringiem sprawy.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Przygotowanie dokumentów do wniosku KRS",
      priceSpecification: { "@type": "PriceSpecification", price: "50", priceCurrency: "PLN" },
      description:
        "Przygotowanie pojedynczych dokumentów, uchwał i list wymaganych do skutecznego zgłoszenia zmian w KRS.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Dokumenty Zwyczajnego Zgromadzenia Wspólników",
      priceSpecification: { "@type": "PriceSpecification", price: "499", priceCurrency: "PLN" },
      description:
        "Wsparcie w przygotowaniu dokumentów do zatwierdzenia rocznego sprawozdania finansowego i złożenia ich w KRS.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Rejestracja spółki z o.o. w systemie S24",
      priceSpecification: { "@type": "PriceSpecification", price: "699", priceCurrency: "PLN" },
      description:
        "Przygotowanie i złożenie kompletnego wniosku o rejestrację spółki z o.o. w systemie S24 wraz z koordynacją podpisów.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Rejestracja spółki z o.o. z indywidualną umową",
      priceSpecification: { "@type": "PriceSpecification", price: "1199", priceCurrency: "PLN" },
      description:
        "Przygotowanie niestandardowej umowy spółki, obsługa wizyty w kancelarii notarialnej oraz złożenie wniosku do KRS.",
      availability: "https://schema.org/InStock",
    },
  ],
}

export const metadata: Metadata = {
  title: "Cennik obsługi zmian w KRS",
  description:
    "Sprawdź ile kosztuje złożenie wniosku o zmianę w KRS, przygotowanie dokumentów oraz wsparcie przy założeniu spółki z o.o.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "Cennik obsługi zmian w KRS | ZmianaKRS",
    description:
      "Przejrzyste ceny obsługi zmian w KRS, przygotowania dokumentów i rejestracji spółek z o.o.",
    url: pageUrl,
    siteName: brandName,
    images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Cennik usług KRS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennik obsługi zmian w KRS",
    description:
      "Poznaj ceny złożenia wniosku do KRS, przygotowania dokumentów i rejestracji spółek.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="cennik-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${professionalWaitingRoomImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-900/70" aria-hidden />

      <Navbar />

      <main className="relative z-10 flex-1">
        <section className="relative flex-1 pt-20 pb-20 text-white overflow-hidden">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 space-y-16">
              <section className="rounded-3xl bg-slate-900/40 px-8 py-12 backdrop-blur-sm text-left">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                    Koszt zmiany wpisu w rejestrze przedsiębiorców KRS
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-200 mb-10">
                    Na koszt zmiany wpisu w rejestrze przedsiębiorców KRS składają się cztery niezależne elementy:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* 1. Opłata sądowa */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-sm font-semibold text-amber-300">
                        1
                      </span>
                      <h3 className="text-lg font-semibold text-white">Opłata sądowa</h3>
                    </div>
                    <p className="text-base sm:text-lg text-slate-300 pl-11">
                      Opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS wynosi
                      <span className="font-semibold text-amber-300"> 250 zł</span>. Jest to stała
                      opłata uiszczana przy składaniu wniosku w systemie PRS lub S24, niezależnie
                      od rodzaju wprowadzanych zmian (chyba że przepisy stanowią inaczej w przypadku
                      szczególnych czynności zgłoszeniowych).
                    </p>
                  </div>

                  {/* 2. Wynagrodzenie za usługę */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-sm font-semibold text-amber-300">
                        2
                      </span>
                      <h3 className="text-lg font-semibold text-white">Wynagrodzenie za naszą usługę</h3>
                    </div>
                    <p className="text-base sm:text-lg text-slate-300 pl-11">
                      Wysokość wynagrodzenia zależy od zakresu zmian i nakładu pracy, w tym m.in.
                      liczby i rodzaju przygotowanych dokumentów niezbędnych do załączenia do wniosku.
                      Szczegółowe stawki naszych usług znajdziesz poniżej w sekcji pakietów.
                    </p>
                  </div>

                  {/* 3. Opłata skarbowa */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-sm font-semibold text-amber-300">
                        3
                      </span>
                      <h3 className="text-lg font-semibold text-white">Opłata skarbowa od pełnomocnictwa</h3>
                    </div>
                    <p className="text-base sm:text-lg text-slate-300 pl-11">
                      Opłata skarbowa od pełnomocnictwa wynosi
                      <span className="font-semibold text-amber-300"> 17 zł</span> i jest wymagana
                      wyłącznie wtedy, gdy zmiana wpisu dokonywana jest przez pełnomocnika.
                    </p>
                  </div>

                  {/* 4. Koszty notarialne */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20 text-sm font-semibold text-amber-300">
                        4
                      </span>
                      <h3 className="text-lg font-semibold text-white">Ewentualne koszty notarialne</h3>
                    </div>
                    <p className="text-base sm:text-lg text-slate-300 pl-11">
                      Jeżeli dana czynność wymaga aktu notarialnego (np. zmiana umowy spółki poza S24),
                      do opłaty sądowej i wynagrodzenia za naszą usługę dochodzą jeszcze opłaty notarialne.
                      Są to odrębne koszty, które nie stanowią części opłaty sądowej, ale wpływają na
                      całkowity koszt całej operacji dla spółki.
                    </p>
                  </div>
                </div>
              </section>

              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                  Cennik usług zmian wpisu w <span className="text-amber-400">KRS</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mx-auto max-w-4xl">
                  Oferujemy jasne, przejrzyste ceny i elastyczny model rozliczeń – dopasowany do Twoich potrzeb. Z góry wiesz, ile
                  zapłacisz i za co. Każdy klient sam decyduje o zakresie usługi – możesz zlecić nam tylko złożenie wniosku o zmianę
                  wpisu w KRS, albo także przygotowanie potrzebnych dokumentów. Ty wybierasz – my działamy.
                </p>
              </div>

              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Przejrzyste ceny wniosków o zmianę wpisu w KRS
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="!p-0 bg-white/10 backdrop-blur-sm !border-white/20 !shadow-none hover:bg-white/15 transition-all duration-300">
                    <CardContent>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Podstawowa usługa: Złożenie wniosku o zmianę wpisu w KRS
                          </h3>
                          <p className="text-3xl font-bold text-amber-400">799 zł netto*</p>
                        </div>
                      </div>
                      <div className="space-y-6 text-left">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Co obejmuje:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• złożenie elektronicznego wniosku o zmianę wpisu w KRS za pośrednictwem Portalu Rejestrów Sądowych (PRS), w oparciu o dostarczone przez klienta oryginały dokumentów</li>
                            <li>• działanie na podstawie udzielonego pełnomocnictwa</li>
                            <li>• monitoring wniosku i obsługa ewentualnych wezwań formalnych</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Dla kogo:</h4>
                          <p className="text-gray-300">
                            Dla klientów, którzy posiadają już komplet wymaganych dokumentów (np. uchwały, zgody, listy), gotowe do złożenia oraz przekażą nam podpisane pełnomocnictwo.
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-amber-600/20 border border-amber-600/30 rounded-lg text-left">
                        <p className="text-amber-200 text-sm">* Podana cena nie uwzględnia opłat sądowych i skarbowych</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="!p-0 bg-white/10 backdrop-blur-sm !border-white/20 !shadow-none hover:bg-white/15 transition-all duration-300">
                    <CardContent>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-white mb-2">Przygotowanie dokumentów wymaganych do wniosku</h3>
                          <p className="text-3xl font-bold text-amber-400">50 zł netto / dokument</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 text-left">
                        Jeśli nie posiadasz gotowych dokumentów – możemy je dla Ciebie przygotować. Dotyczy to w szczególności:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-left">
                        <ul className="space-y-2 text-gray-300">
                          <li>• uchwały o zmianie zarządu</li>
                          <li>• uchwały o zmianie siedziby/adresu spółki</li>
                          <li>• zgody wspólników na zbycie udziałów</li>
                          <li>• listy wspólników</li>
                        </ul>
                        <ul className="space-y-2 text-gray-300">
                          <li>• listy osób uprawnionych do powołania zarządu</li>
                          <li>• listy aktualnych członków zarządu</li>
                          <li>• innych dokumentów koniecznych do złożenia wniosku o zmianę w KRS</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-300 space-y-2 text-left">
                        <p>Umowy zbycia udziałów wyceniane są osobno (od 100 zł netto) w zależności od stopnia złożoności i sytuacji właścicielskiej spółki.</p>
                        <p>Dokumenty przygotowywane są na podstawie informacji dostarczonych przez klienta i zawsze zgodnie z aktualnym stanem prawnym.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <Card className="!p-0 bg-white/10 backdrop-blur-sm !border-white/20 !shadow-none hover:bg-white/15 transition-all duration-300">
                      <CardContent>
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg">
                            <AlertTriangle className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-3xl font-bold text-amber-400 mb-2">Zmiana umowy spółki</h3>
                            <p className="text-2xl font-bold text-white">Wycena indywidualna</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-left">
                          Zmiana umowy spółki (np. zmiana PKD, kapitału zakładowego, siedziby czy innych postanowień umowy) wyceniana jest osobno w zależności od stopnia złożoności i zakresu zmian. <a href="/kontakt" className="text-amber-400 hover:text-amber-300 underline">Skontaktuj się</a> żeby ustalić szczegóły lub sprawdź nasze <a href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">usługi KRS</a>.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Card className="!p-0 bg-white/10 backdrop-blur-sm !border-white/20 !shadow-none hover:bg-white/15 transition-all duration-300 relative overflow-hidden">
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 text-left">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-600 rounded-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-amber-300 mb-1">Roczne sprawozdanie finansowe</div>
                          <h3 className="text-2xl text-white font-bold">
                            Pomoc w przygotowaniu dokumentów Zwyczajnego Zgromadzenia Wspólników
                          </h3>
                          <div className="text-2xl font-bold text-amber-400 mt-1">499 zł netto</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 text-justify">
                      Kompleksowe wsparcie w przygotowaniu dokumentów wymaganych do zatwierdzenia rocznego sprawozdania finansowego i spełnienia obowiązku złożenia ich do KRS.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Oferujemy pomoc w zakresie:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3 text-gray-200">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Sporządzenie protokołu Zwyczajnego Zgromadzenia Wspólników z wszystkimi wymaganymi uchwałami</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-200">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Przygotowanie wzoru sprawozdania Zarządu z działalności</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-200">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Załączenie rocznego sprawozdania finansowego klienta do protokołu</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-200">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Pomoc w złożeniu kompletu dokumentów do Repozytorium Dokumentów Finansowych KRS</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Zamów i złóż dokumenty do KRS na czas – bez stresu</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          Usługa przeznaczona dla spółek z o.o. chcących w terminie i bez błędów wypełnić obowiązki rejestrowe i uniknąć kar za opóźnienie lub brak złożenia dokumentów
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href="tel:+48572234779"
                            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            <span className="text-sm font-medium">Zadzwoń</span>
                          </a>
                          <a
                            href="mailto:biuro@zmianakrs.pl"
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="text-sm font-medium">Email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="textcenter mb-8 mt-12">
                  <h2 className="text-4xl font-bold text-white mb-6">Zakładanie spółki z o.o.</h2>
                </div>
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Chcesz założyć spółkę z o.o. bez błędów, sprawnie i z pełną zgodnością z przepisami? Dobrze trafiłeś. Pomogliśmy już w utworzeniu kilkuset spółek w całej Polsce – zarówno przez system S24, jak i w formie aktu notarialnego. Działamy zdalnie, szybko i bezpiecznie.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <Card className="!p-0 bg-white/10 backdrop-blur-sm !border-white/20 !shadow-none hover:bg-white/15 transition-all duration-300">
                    <CardContent>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                          <span className="text-white font-bold text-xs">S24</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">Spółka z o.o. przez system S24</h3>
                          <p className="text-lg text-gray-300 mb-2">szybka rejestracja online</p>
                          <p className="text-3xl font-bold text-amber-400">od 699 zł netto*</p>
                          <p className="text-sm text-gray-300">
                            (ostateczna cena zależy od liczby wspólników i stopnia skomplikowania umowy)
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Spółkę możesz założyć przez internetowy system S24, jeśli odpowiada Ci standardowa, szablonowa umowa spółki. To wygodne i szybkie rozwiązanie, szczególnie gdy zależy Ci na czasie.
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Co oferujemy:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• przygotowanie kompletu dokumentów i wniosku niezbędnych do rejestracji spółki w S24</li>
                          <li>• przesłanie ich do podpisu przez wszystkich wspólników i członków zarządu</li>
                          <li>• wsparcie w zakresie podpisu i opłaty wniosku</li>
                        </ul>
                      </div>
                      <div className="bg-amber-50/10 backdrop-blur-sm border border-amber-200/30 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2">Uwaga - System S24 wymaga:</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• posiadania konta na portalu s24 przez wszystkich wspólników i członków zarządu</li>
                          <li>• posiadania kwalifikowanego podpisu elektronicznego, profilu zaufanego lub e-dowodu</li>
                          <li>• korzystania z szablonowej umowy spółki, bez możliwości jej modyfikacji poza dostępnymi polami</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="!p-0 bg-white/10 backdrop-blur-sm !border-white/20 !shadow-none hover:bg-white/15 transition-all duration-300">
                    <CardContent>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg">
                          <span className="text-white font-bold text-xs">PRS</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">Spółka z o.o. z niestandardową umową</h3>
                          <p className="text-lg text-gray-300 mb-2">zakładanie przez notariusza i Portal Rejestrów Sądowych</p>
                          <p className="text-3xl font-bold text-amber-400">od 1199 zł netto**</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Jeśli zależy Ci na szczególnych zapisach w umowie spółki (np. różnych rodzajach udziałów, szczególnych uprawnieniach wspólników, odrębnym roku obrotowym itd.), najlepszym rozwiązaniem będzie założenie spółki w formie aktu notarialnego.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">W ramach usługi:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• przygotujemy indywidualną umowę spółki i komplet pozostałych dokumentów</li>
                            <li>• skontaktujemy się z kancelarią notarialną wybraną przez Ciebie</li>
                            <li>• po podpisaniu aktu – złożymy kompletny wniosek o wpis do KRS</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Korzyści:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• pełna elastyczność umowy spółki</li>
                            <li>• dopasowanie struktury do Twoich celów biznesowych</li>
                            <li>• kompleksowa obsługa rejestracji</li>
                            <li>• od przygotowania dokumentów po skuteczny wpis w KRS</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-amber-600/20 border border-amber-600/30 rounded-lg text-left">
                  <p className="text-amber-200 text-sm">
                    * i ** - podane ceny nie obejmują kosztów notarialnych, sądowych, w tym za ogłoszenie w MSiG i opłat skarbowych
                  </p>
                </div>

                <div className="mt-16">
                  <h2 className="text-3xl font-bold text-white text-center mb-8">Jak przebiega współpraca?</h2>
                  <div className="grid md:grid-cols-5 gap-6">
                    {steps.map((step, index) => (
                      <div key={step} className="text-center">
                        <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">Dlaczego warto?</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOExpandableSection content={seoContent} pageId="pricing" />
      </main>

      <Footer />
    </div>
  )
}
