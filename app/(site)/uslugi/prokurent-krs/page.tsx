import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"

import InlineContactForm from "../_components/InlineContactForm"

const pagePath = "/uslugi/prokurent-krs"
const pageUrl = `${siteUrl}${pagePath}`

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prokurent w spółce – ustanowienie prokury i wpis do KRS",
  url: pageUrl,
  provider: organizationSchema,
  offers: {
    "@type": "Offer",
    price: "799",
    priceCurrency: "PLN",
  },
  areaServed: { "@type": "Country", name: "Poland" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy prokura wymaga zmiany umowy spółki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zasadniczo nie. Prokura samoistna i łączna między prokurentami nie wymagają zmiany umowy spółki. Zmiana umowy może być potrzebna gdy spółka chce wprowadzić prokurę łączną mieszaną (prokurent + członek zarządu), ponieważ taka konstrukcja musi wynikać z umowy spółki lub przepisów ustawy.",
      },
    },
    {
      "@type": "Question",
      name: "Czy prokurent może złożyć wniosek do KRS w imieniu spółki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Znaczna część sądów rejestrowych stoi na stanowisku, że prokura nie obejmuje umocowania do reprezentacji w postępowaniu rejestrowym. Dla bezpieczeństwa wniosek powinien podpisać zarząd lub profesjonalny pełnomocnik – adwokat albo radca prawny.",
      },
    },
    {
      "@type": "Question",
      name: "Ile trwa wpis prokurenta do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Przy kompletnych i poprawnych dokumentach wpis następuje zazwyczaj w ciągu kilku tygodni, zależnie od obciążenia sądu rejestrowego.",
      },
    },
    {
      "@type": "Question",
      name: "Czy prokura jest skuteczna przed wpisem do KRS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak – wpis prokury do KRS ma charakter deklaratoryjny, co oznacza że prokura jest skuteczna od chwili jej udzielenia w formie pisemnej. Jednak banki i kontrahenci wymagają potwierdzenia prokury wpisem w rejestrze.",
      },
    },
    {
      "@type": "Question",
      name: "Czy prokurentem może być cudzoziemiec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak – przepisy nie wymagają polskiego obywatelstwa ani numeru PESEL. Prokurentem może być każda osoba fizyczna z pełną zdolnością do czynności prawnych.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Usługi",
      item: `${siteUrl}/uslugi`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Prokurent w spółce – ustanowienie prokury i wpis do KRS",
      item: pageUrl,
    },
  ],
}

export const metadata: Metadata = {
  title: "Prokurent w spółce – ustanowienie prokury i wpis do KRS | ZmianaKRS",
  description:
    "Ustanowienie prokurenta, powołanie lub odwołanie prokury i wpis do KRS. Przygotujemy dokumenty i złożymy wniosek w PRS lub S24 za Ciebie. Obsługa od 799 zł netto.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Prokurent w spółce – ustanowienie prokury i wpis do KRS | ZmianaKRS",
    description:
      "Ustanowienie prokurenta, powołanie lub odwołanie prokury i wpis do KRS. Przygotujemy dokumenty i złożymy wniosek w PRS lub S24 za Ciebie. Obsługa od 799 zł netto.",
    url: pageUrl,
    siteName: brandName,
    images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Prokurent w spółce – ZmianaKRS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prokurent w spółce – ustanowienie prokury i wpis do KRS | ZmianaKRS",
    description:
      "Ustanowienie prokurenta, powołanie lub odwołanie prokury i wpis do KRS. Przygotujemy dokumenty i złożymy wniosek w PRS lub S24 za Ciebie. Obsługa od 799 zł netto.",
    images: [`${siteUrl}/images/krs-services.png`],
  },
}

export default function ProkurentKrsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="prokurent-krs-structured-data" type="application/ld+json">
        {JSON.stringify([legalServiceSchema, faqSchema, breadcrumbSchema])}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${servicesBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/60" />

      <Navbar />

      <main className="relative px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <section className="mx-auto mb-12 max-w-7xl">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Prokurent w spółce – ustanowienie prokury i wpis do KRS</h1>
                <p className="text-lg text-white/90">
                  Prokura to szczególne pełnomocnictwo udzielane przez przedsiębiorcę podlegającego wpisowi do rejestru
                  przedsiębiorców KRS. Pozwala przekazać zaufanej osobie szerokie umocowanie do działania w imieniu spółki — bez
                  konieczności powoływania jej do zarządu i bez zmian w strukturze korporacyjnej. Ustanowienie prokurenta wymaga
                  zachowania określonej formy, prawidłowego przygotowania dokumentów oraz terminowego zgłoszenia do KRS.
                </p>
                <p className="text-lg text-white/90">
                  Oferujemy kompleksową obsługę prokury — od analizy umowy spółki i przygotowania uchwały zarządu, przez sporządzenie
                  dokumentów, po elektroniczne złożenie wniosku w PRS lub S24 i monitorowanie sprawy do momentu wpisu.
                </p>
              </div>
              <div className="w-full lg:pt-2">
                <InlineContactForm className="max-w-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Podstawa prawna ustanowienia prokury</h2>
              <p className="text-lg text-white/90">
                Prokura jest uregulowana w art. 109¹–109⁸ Kodeksu cywilnego. Może być udzielona wyłącznie przez przedsiębiorcę
                podlegającego obowiązkowi wpisu do rejestru przedsiębiorców KRS (art. 109¹ § 1 k.c.). Prokurentem może być wyłącznie
                osoba fizyczna posiadająca pełną zdolność do czynności prawnych (art. 109² § 2 k.c.).
              </p>
              <p className="text-lg text-white/90">
                W spółce z o.o. ustanowienie prokury należy do wyłącznych kompetencji zarządu i wymaga zgody wszystkich jego członków,
                chyba że umowa spółki stanowi inaczej (art. 208 § 6 k.s.h.). Prokura musi być udzielona w formie pisemnej pod rygorem
                nieważności (art. 109² § 1 k.c.).
              </p>
              <p className="text-lg text-white/90">
                Zgodnie z art. 109⁸ k.c., udzielenie prokury przedsiębiorca powinien zgłosić do rejestru przedsiębiorców KRS w
                terminie 7 dni od jej ustanowienia. Ten sam obowiązek dotyczy odwołania prokury i jej wygaśnięcia.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Rodzaje prokury</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold sm:text-2xl">Prokura samoistna</h3>
                <p className="text-lg text-white/90">
                  Prokurent działa samodzielnie, bez współdziałania z innymi osobami. Najszerszy zakres umocowania — stosowana gdy
                  spółka chce zapewnić prokurentowi pełną swobodę działania operacyjnego. Wymaga najwyższego poziomu zaufania do
                  osoby prokurenta.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold sm:text-2xl">Prokura łączna</h3>
                <p className="text-lg text-white/90">
                  Skuteczne działanie wymaga współdziałania co najmniej dwóch prokurentów. Zwiększa bezpieczeństwo poprzez mechanizm
                  wzajemnej kontroli, kosztem szybkości działania. Przy prokurze łącznej mieszanej (prokurent + członek zarządu)
                  konieczne jest odpowiednie postanowienie w umowie spółki lub wynikające z przepisów ustawy (uchwała SN III CZP
                  34/14).
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold sm:text-2xl">Prokura oddziałowa</h3>
                <p className="text-lg text-white/90">
                  Umocowanie ograniczone do spraw wpisanego do rejestru oddziału przedsiębiorstwa. Stosowana w podmiotach o strukturze
                  wielooddziałowej — pozwala precyzyjnie rozdzielić kompetencje bez nadawania szerokiego umocowania ogólnego.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Zakres umocowania prokurenta</h2>
              <p className="text-lg text-white/90">
                Prokura obejmuje umocowanie do czynności sądowych i pozasądowych związanych z prowadzeniem przedsiębiorstwa (art.
                109¹ § 1 k.c.). Prokurent może m.in. podpisywać umowy handlowe, reprezentować spółkę w relacjach z kontrahentami i
                urzędami oraz działać w postępowaniach sądowych.
              </p>
              <p className="text-lg text-white/90">
                Ograniczenia prokury wobec osób trzecich są nieskuteczne — wewnętrzne regulaminy i limity kwotowe nie wiążą
                kontrahentów działających w dobrej wierze (art. 109¹ § 2 k.c.).
              </p>
              <p className="text-lg text-white/90">
                Prokura nie obejmuje: zbycia przedsiębiorstwa, oddania go do czasowego korzystania oraz zbycia i obciążenia
                nieruchomości — do tych czynności wymagane jest odrębne pełnomocnictwo szczególne (art. 109³ k.c.).
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Koszty wpisu prokurenta do KRS</h2>
              <p className="text-lg text-white/90">Na koszt zgłoszenia prokury do KRS składają się:</p>
              <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5">
                <table className="w-full min-w-[420px] border-collapse text-left text-base">
                  <thead>
                    <tr className="border-b border-white/20 bg-white/10">
                      <th className="px-5 py-3.5">Element kosztu</th>
                      <th className="px-5 py-3.5">Kwota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20 bg-white/5">
                      <td className="px-5 py-3.5">Opłata sądowa — wniosek przez PRS</td>
                      <td className="px-5 py-3.5">250 zł</td>
                    </tr>
                    <tr className="border-b border-white/20 bg-white/[0.03]">
                      <td className="px-5 py-3.5">Opłata sądowa — wniosek przez S24 (przy spełnieniu warunków ustawowych)</td>
                      <td className="px-5 py-3.5">200 zł</td>
                    </tr>
                    <tr className="border-b border-white/20 bg-white/5">
                      <td className="px-5 py-3.5">Opłata skarbowa od pełnomocnictwa</td>
                      <td className="px-5 py-3.5">17 zł</td>
                    </tr>
                    <tr className="border-b border-white/20 bg-white/[0.03]">
                      <td className="px-5 py-3.5">Nasza obsługa — złożenie wniosku</td>
                      <td className="px-5 py-3.5">od 799 zł netto</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="px-5 py-3.5">Przygotowanie dokumentów (uchwała, oświadczenie prokurenta)</td>
                      <td className="px-5 py-3.5">od 50 zł netto / dokument</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-white/90">
                Jeżeli ustanowienie prokury wymaga jednocześnie{" "}
                <Link href="/uslugi/zmiana-umowy-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                  zmiany umowy spółki
                </Link>
                , koszt obejmuje również przygotowanie dokumentów do zmiany umowy. Szczegółowy{" "}
                <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300">
                  cennik usług KRS
                </Link>{" "}
                znajdziesz na stronie cennika.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Dokumenty do ustanowienia prokurenta</h2>
              <p className="text-lg text-white/90">Do zgłoszenia prokury do KRS wymagane są:</p>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>uchwała zarządu o ustanowieniu prokury wraz z określeniem jej rodzaju,</li>
                <li>oświadczenie prokurenta o przyjęciu prokury i adresie do doręczeń,</li>
                <li>lista osób uprawnionych do reprezentacji spółki,</li>
                <li>potwierdzenie uiszczenia opłaty sądowej.</li>
              </ul>
              <p className="text-lg text-white/90">
                Brak któregokolwiek z dokumentów lub niespójność między uchwałą a wnioskiem jest jedną z najczęstszych przyczyn
                wezwań sądu do uzupełnienia braków, co wydłuża całą procedurę.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Jak przeprowadzimy ustanowienie prokury</h2>
              <ol className="space-y-4 text-lg text-white/90">
                <li>
                  <p className="font-semibold text-white">1. Analiza umowy spółki</p>
                  <p>Sprawdzamy zasady reprezentacji i ustalamy właściwy rodzaj prokury odpowiedni dla Twojej spółki.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">2. Przygotowanie uchwały zarządu</p>
                  <p>
                    Sporządzamy dokument zgodny z wymogami art. 208 § 6 k.s.h. i art. 109² k.c., z precyzyjnym określeniem rodzaju
                    prokury.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-white">3. Weryfikacja dokumentów</p>
                  <p>Sprawdzamy spójność uchwały, danych prokurenta i zakresu wpisu — eliminując ryzyko wezwania sądu do uzupełnienia braków.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">4. Złożenie wniosku elektronicznego</p>
                  <p>Składamy wniosek o wpis prokurenta do KRS przez Portal Rejestrów Sądowych (PRS) lub S24.</p>
                </li>
                <li>
                  <p className="font-semibold text-white">5. Monitorowanie sprawy</p>
                  <p>Nadzorujemy postępowanie przed sądem rejestrowym do momentu dokonania wpisu prokurenta w KRS.</p>
                </li>
              </ol>
              <InlineContactForm className="max-w-md" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Odwołanie prokury i wykreślenie z KRS</h2>
              <p className="text-lg text-white/90">
                Prokura może być odwołana przez każdego członka zarządu w każdym czasie — niezależnie od tego, że do jej ustanowienia
                wymagana była zgoda wszystkich członków zarządu (art. 208 § 7 k.s.h.). Odwołanie prokury należy zgłosić do KRS w
                terminie 7 dni.
              </p>
              <p className="text-lg text-white/90">
                Prokura wygasa również z mocy prawa m.in. w przypadku: wykreślenia spółki z rejestru, ogłoszenia upadłości, otwarcia
                likwidacji oraz śmierci prokurenta (art. 1097 k.c.).
              </p>
              <p className="text-lg text-white/90">
                Obsługujemy zarówno wpis ustanowienia, jak i wykreślenie prokurenta z KRS. W przypadku gdy odwołanie prokury wiąże
                się ze zmianą sposobu reprezentacji spółki, może być konieczna również{" "}
                <Link href="/uslugi/zmiana-umowy-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                  zmiana umowy spółki
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Najczęstsze błędy przy wpisie prokurenta do KRS</h2>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>nieprecyzyjne określenie rodzaju prokury w uchwale — rozbieżność z wnioskiem,</li>
                <li>próba ustanowienia prokury łącznej mieszanej bez odpowiednich postanowień w umowie spółki,</li>
                <li>brak oświadczenia prokurenta o adresie do doręczeń,</li>
                <li>podpisanie wniosku niezgodnie z zasadami reprezentacji spółki,</li>
                <li>wybór trybu S24 bez spełnienia ustawowych przesłanek,</li>
                <li>przekroczenie 7-dniowego terminu na zgłoszenie prokury do KRS.</li>
              </ul>
              <p className="text-lg text-white/90">
                Skutkiem takich błędów może być wezwanie sądu do uzupełnienia braków lub zwrot wniosku, co wydłuża procedurę i
                opóźnia ujawnienie prokurenta w rejestrze.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-5">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Najczęściej zadawane pytania</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy prokura wymaga zmiany umowy spółki?</h3>
                <p className="text-lg text-white/90">
                  Zasadniczo nie. Prokura samoistna i łączna między prokurentami nie wymagają zmiany umowy spółki. Zmiana umowy może
                  być potrzebna gdy spółka chce wprowadzić prokurę łączną mieszaną (prokurent + członek zarządu), ponieważ taka
                  konstrukcja musi wynikać z umowy spółki lub przepisów ustawy.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy prokurent może złożyć wniosek do KRS w imieniu spółki?</h3>
                <p className="text-lg text-white/90">
                  Znaczna część sądów rejestrowych stoi na stanowisku, że prokura nie obejmuje umocowania do reprezentacji w
                  postępowaniu rejestrowym. Dla bezpieczeństwa wniosek powinien podpisać zarząd lub profesjonalny pełnomocnik –
                  adwokat albo radca prawny.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Ile trwa wpis prokurenta do KRS?</h3>
                <p className="text-lg text-white/90">
                  Przy kompletnych i poprawnych dokumentach wpis następuje zazwyczaj w ciągu kilku tygodni, zależnie od obciążenia
                  sądu rejestrowego.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy prokura jest skuteczna przed wpisem do KRS?</h3>
                <p className="text-lg text-white/90">
                  Tak – wpis prokury do KRS ma charakter deklaratoryjny, co oznacza że prokura jest skuteczna od chwili jej
                  udzielenia w formie pisemnej. Jednak banki i kontrahenci wymagają potwierdzenia prokury wpisem w rejestrze.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Czy prokurentem może być cudzoziemiec?</h3>
                <p className="text-lg text-white/90">
                  Tak – przepisy nie wymagają polskiego obywatelstwa ani numeru PESEL. Prokurentem może być każda osoba fizyczna z
                  pełną zdolnością do czynności prawnych.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">Chcesz wiedzieć więcej?</h2>
              <ul className="list-disc space-y-2 pl-6 text-lg text-white/90">
                <li>
                  <Link
                    href="/blog/prokurent-krs-ustanowienie-prokury-wpis"
                    className="text-amber-400 underline transition hover:text-amber-300"
                  >
                    Prokurent w KRS – kompletny przewodnik
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi/zmiana-zarzadu-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                    Zmiana zarządu sp. z o.o.
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi/zmiana-umowy-spolki-zoo" className="text-amber-400 underline transition hover:text-amber-300">
                    Zmiana umowy spółki z o.o.
                  </Link>
                </li>
                <li>
                  <Link href="/cennik" className="text-amber-400 underline transition hover:text-amber-300">
                    Cennik usług KRS
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi" className="text-amber-400 underline transition hover:text-amber-300">
                    Wszystkie usługi zmian w KRS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
