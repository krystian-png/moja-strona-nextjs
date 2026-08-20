import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Phone } from "lucide-react"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PkdLookup from "@/components/services/PkdLookup"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import servicesBackground from "@/public/images/profesjonalne-biuro-obslugi-krs-eksperci-zmiany-wpisu-rejestr-sadowy-doswiadczenie.webp"

import InlineContactForm from "../_components/InlineContactForm"

const pagePath = "/uslugi/zmiana-kodow-pkd"
const pageUrl = `${siteUrl}${pagePath}`
const description = "Po 31 grudnia 2026 r. system KRS sam wymieni kody PKD w dziale 3 rejestru. Sprawdź w wyszukiwarce, jaki kod dostanie Twoja spółka. Obsługa wniosku – 599 zł netto."

const faqItems = [
  { question: "Co się stanie, jeżeli nie zrobię nic?", answer: "Przy powiązaniu jednoznacznym system podmieni kod jeden do jednego i wpis pozostanie prawidłowy. Przy powiązaniu wieloznacznym wpisze kod wskazany w kluczu interpretacyjnym – niezależnie od tego, czy odpowiada on rzeczywistej działalności spółki. Sprawdzisz to w wyszukiwarce wyżej." },
  { question: "Czy zmiana kodów PKD wymaga zmiany umowy spółki?", answer: "Nie zawsze. Jeżeli przedmiot działalności określony w umowie obejmuje działalność, którą chcesz ujawnić, wystarczy zgłoszenie zmiany wpisu. Zmiana umowy jest konieczna dopiero wtedy, gdy docelowe kody wykraczają poza przedmiot działalności wynikający z umowy. Ustalamy to na etapie analizy." },
  { question: "Co, jeżeli system wykreśli moją działalność przeważającą?", answer: "Nową działalność przeważającą zgłasza się przy pierwszym składanym wniosku o zmianę wpisu, nie później niż w terminie pięciu lat (art. 22 ust. 2 ustawy o KRS). Samo zgłoszenie nie wymaga zmiany umowy spółki, o ile przedmiot działalności z niej wynika." },
  { question: "Składam do KRS inny wniosek jeszcze w tym roku – co wtedy?", answer: "Spółka, która w okresie przejściowym składa wniosek dotyczący przedmiotu działalności, ma obowiązek posłużyć się już klasyfikacją PKD 2025 (§ 2 ust. 3 rozporządzenia Rady Ministrów z dnia 18 grudnia 2024 r.). Przy okazji innej zmiany warto uporządkować kody od razu." },
]

const schemas = [
  { "@context": "https://schema.org", "@type": "Service", name: "Zmiana kodów PKD w KRS (PKD 2007 → PKD 2025)", url: pageUrl, description, offers: { "@type": "Offer", price: "599", priceCurrency: "PLN", priceSpecification: { "@type": "UnitPriceSpecification", description: "cena netto" } }, areaServed: { "@type": "Country", name: "Poland" }, provider: organizationSchema },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Usługi", item: `${siteUrl}/uslugi` },
    { "@type": "ListItem", position: 3, name: "Zmiana kodów PKD w KRS", item: pageUrl },
  ] },
]

export const metadata: Metadata = {
  title: "Zmiana kodów PKD w KRS – sprawdź, co wpisze system | ZmianaKRS",
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title: "Zmiana kodów PKD w KRS – sprawdź, co wpisze system | ZmianaKRS", description, url: pageUrl, siteName: brandName, images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Zmiana kodów PKD w KRS" }] },
  twitter: { card: "summary_large_image", title: "Zmiana kodów PKD w KRS – sprawdź, co wpisze system | ZmianaKRS", description, images: [`${siteUrl}/images/krs-services.png`] },
}

const card = "rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8"
const heading = "mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl"
const cell = "px-5 py-3.5 align-top"

export default function ZmianaKodowPkdPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="zmiana-kodow-pkd-structured-data" type="application/ld+json">{JSON.stringify(schemas)}</Script>
      <div className="fixed inset-0 -z-20" style={{ backgroundImage: `url(${servicesBackground.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
      <div className="fixed inset-0 -z-10 bg-slate-950/60" />
      <Navbar />

      <main className="relative px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <section className="mx-auto mb-12 max-w-7xl">
          <div className={`${card} lg:p-10`}>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Po 31 grudnia 2026 r. system KRS sam wymieni kody PKD Twojej spółki</h1>
              <p className="text-lg text-white/90">Wymiana nastąpi bez wniosku spółki i bez badania, czym spółka faktycznie się zajmuje. Przy 471 kodach to podmiana jeden do jednego i nic złego się nie dzieje. Przy 185 kodach jednemu kodowi PKD 2007 odpowiada kilka podklas PKD 2025 – wtedy system wybiera jedną z nich za spółkę.</p>
              <p className="text-lg text-white/90">Wpisz kod z działu 3 swojego odpisu i sprawdź, co się z nim stanie.</p>
              <div id="wyszukiwarka" className="scroll-mt-24"><PkdLookup /></div>
              <p className="text-sm text-white/70">Dane pochodzą z kluczy przejścia PKD 2007 – PKD 2025, stanowiących część załącznika do rozporządzenia Rady Ministrów z dnia 18 grudnia 2024 r. w sprawie Polskiej Klasyfikacji Działalności (Dz.U. poz. 1936). Kod oznaczony jako wpisywany przez system to kod wskazany w kluczu interpretacyjnym, do którego odsyła art. 20e ust. 1 pkt 2 ustawy o KRS. Narzędzie ma charakter informacyjny i nie zastępuje analizy konkretnego przypadku.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10">
          <div className={card}>
            <h2 className={heading}>Trzy scenariusze wymiany – art. 20e ustawy o KRS</h2>
            <div className="space-y-4 text-lg text-white/90">
              <p><strong>Powiązanie jednoznaczne.</strong> Kodowi PKD 2007 odpowiada dokładnie jedna podklasa PKD 2025. System podmienia kod jeden do jednego, wpis pozostaje prawidłowy. Dotyczy 471 z 656 kodów ujętych w kluczach przejścia.</p>
              <p><strong>Powiązanie wieloznaczne.</strong> Kodowi odpowiada kilka podklas. System wpisuje ten kod, który wskazano w kluczu interpretacyjnym – w uproszczonej relacji jeden do jednego, przygotowanej na potrzeby automatycznej konwersji. Nikt nie bada, którą z tych działalności spółka faktycznie prowadzi. Dotyczy 185 kodów; skrajny przypadek to 47.91.Z, któremu odpowiada 37 różnych podklas.</p>
              <p><strong>Brak dopasowania.</strong> Jeżeli kodowi nie odpowiada żadna podklasa PKD 2025, system wykreśla go bez wpisania nowego.</p>
              <p>Automatyczna wymiana nie obejmuje działalności pożytku publicznego (art. 20e ust. 2 ustawy o KRS).</p>
            </div>
          </div>

          <div className={card}>
            <h2 className={heading}>Nowe podklasy, których system nie nada</h2>
            <p className="mb-5 text-lg text-white/90">W PKD 2025 wyodrębniono podklasy, których w PKD 2007 nie było. To właśnie one najczęściej opisują działalność precyzyjnie – i to właśnie ich klucz interpretacyjny zwykle nie wybiera.</p>
            <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5">
              <table className="w-full min-w-[760px] border-collapse text-left"><thead><tr className="border-b border-white/20 bg-white/10"><th className={cell}>Kod w odpisie</th><th className={cell}>Co wpisze system</th><th className={cell}>Kod, który zwykle odpowiada rzeczywistej działalności</th></tr></thead>
                <tbody>
                  {[
                    ["62.01.Z", "62.10.B – pozostałe programowanie", "62.10.A", " – programowanie gier komputerowych"],
                    ["62.02.Z", "62.20.B – pozostałe doradztwo w zakresie informatyki", "62.20.A", " – cyberbezpieczeństwo"],
                    ["63.11.Z", "63.10.D – pozostała infrastruktura obliczeniowa", "63.10.A", " – kolokacja centrów danych, chmura"],
                    ["86.90.E", "86.99.D – pozostała opieka zdrowotna", "86.93.Z", " – działalność psychologiczna i psychoterapeutyczna"],
                    ["81.29.Z", "81.23.B – pozostałe sprzątanie", "81.23.A", " – dezynfekcja, dezynsekcja, deratyzacja"],
                    ["52.29.A / B / C", "52.26.Z – pozostała działalność wspomagająca transport", "52.25.Z", " – logistyka, 52.31.Z – pośrednictwo w transporcie towarów"],
                  ].map(([a,b,c,d]) => <tr key={a} className="border-b border-white/20 last:border-0"><td className={cell}>{a}</td><td className={cell}>{b}</td><td className={cell}><strong>{c}</strong>{d}</td></tr>)}
                </tbody></table>
            </div>
            <h3 className="mb-3 mt-8 text-xl font-bold text-amber-400 sm:text-2xl">Pułapka: numer zostaje ten sam, znaczenie się zmienia</h3>
            <div className="space-y-4 text-lg text-white/90">
              <p><strong>47.91.Z</strong> w PKD 2007 oznaczał sprzedaż detaliczną prowadzoną przez domy sprzedaży wysyłkowej lub Internet. W PKD 2025 ten sam numer istnieje nadal, ale oznacza pośrednictwo w sprzedaży detalicznej niewyspecjalizowanej – zupełnie inną działalność. Numer w odpisie zostanie ten sam, znaczenie będzie inne.</p>
              <p><strong>85.51.Z</strong> – pozaszkolne formy edukacji sportowej oraz zajęć sportowych i rekreacyjnych – istnieje w obu klasyfikacjach, więc system go nie ruszy. Tyle że kluby fitness mają w PKD 2025 własną podklasę 93.13.Z. Spółka prowadząca klub fitness zostanie z kodem edukacyjnym, mimo że nikt niczego nie zmienił.</p>
            </div>
          </div>

          <div className={card}>
            <h2 className={heading}>Najprostszy test: czy Twój wpis w ogóle był aktualizowany</h2>
            <p className="text-lg text-white/90">159 kodów PKD 2007 nie ma swojego numeru w PKD 2025. Nie znaczy to, że znikną – każdemu klucz przejścia przypisuje jakiś odpowiednik. Znaczy to co innego: <strong>jeżeli którykolwiek z nich figuruje dziś w dziale 3, wpis spółki na pewno nie był aktualizowany od wejścia w życie PKD 2025.</strong></p>
            <p className="my-5 text-lg text-white/90">Najczęstsze w rejestrze spółek (brzmienie wg schematu klasyfikacji PKD 2007, załącznik do rozporządzenia Rady Ministrów z dnia 24 grudnia 2007 r., Dz.U. Nr 251 poz. 1885):</p>
            <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5"><table className="w-full min-w-[560px] border-collapse text-left"><thead><tr className="border-b border-white/20 bg-white/10"><th className={cell}>Kod</th><th className={cell}>Dotychczasowe brzmienie</th></tr></thead><tbody>
              {[
                ["41.10.Z", "Realizacja projektów budowlanych związanych ze wznoszeniem budynków"], ["45.11.Z", "Sprzedaż hurtowa i detaliczna samochodów osobowych i furgonetek"], ["46.51.Z", "Sprzedaż hurtowa komputerów, urządzeń peryferyjnych i oprogramowania"], ["52.29.C", "Działalność pozostałych agencji transportowych"], ["62.01.Z", "Działalność związana z oprogramowaniem"], ["62.02.Z", "Działalność związana z doradztwem w zakresie informatyki"], ["63.11.Z", "Przetwarzanie danych; zarządzanie stronami internetowymi (hosting) i podobna działalność"], ["64.92.Z", "Pozostałe formy udzielania kredytów"], ["68.10.Z", "Kupno i sprzedaż nieruchomości na własny rachunek"], ["69.20.Z", "Działalność rachunkowo-księgowa; doradztwo podatkowe"], ["70.22.Z", "Pozostałe doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania"], ["74.10.Z", "Działalność w zakresie specjalistycznego projektowania"], ["82.99.Z", "Pozostała działalność wspomagająca prowadzenie działalności gospodarczej, gdzie indziej niesklasyfikowana"],
              ].map(([code,name]) => <tr key={code} className="border-b border-white/20 last:border-0"><td className={`${cell} font-mono`}>{code}</td><td className={cell}>{name}</td></tr>)}
            </tbody></table></div>
          </div>

          <div id="oferta" className={`${card} scroll-mt-24`}>
            <h2 className={heading}>Zlecenie zmiany kodów PKD – 599 zł netto</h2>
            <div className="space-y-4 text-lg text-white/90">
              <p>Prowadzimy sprawę od analizy odpisu do wpisu w rejestrze:</p>
              <ul className="list-disc space-y-2 pl-6"><li>analiza kodów figurujących dziś w dziale 3,</li><li>ustalenie, które podlegają wymianie jednoznacznej, a które wieloznacznej,</li><li>dobór kodów PKD 2025 odpowiadających rzeczywistej działalności, z limitem dziesięciu pozycji i wskazaniem działalności przeważającej na poziomie podklasy (art. 40 pkt 1 ustawy o KRS),</li><li>przygotowanie dokumentów i złożenie wniosku elektronicznie,</li><li>prowadzenie sprawy do wpisu, w tym reakcja na wezwania sądu.</li></ul>
              <p><strong>599 zł netto</strong> – jedna spółka, do dziesięciu pozycji PKD, bez zmiany umowy spółki. Jeżeli docelowe kody wykraczają poza przedmiot działalności wskazany w umowie i zmiana umowy okaże się konieczna, wyceniamy to odrębnie.</p>
              <p>Wniosek o wymianę kodów PKD 2007 na PKD 2025 złożony do 31 grudnia 2026 r. nie podlega opłacie sądowej (art. 20e ust. 3 ustawy o KRS). Standardowa opłata za zmianę wpisu wynosi 250 zł.</p>
            </div>
            <InlineContactForm className="mt-8 max-w-xl" />
          </div>

          <div className={card}>
            <h2 className={heading}>Najczęstsze pytania</h2>
            <div className="space-y-6 text-lg text-white/90">{faqItems.map(({question,answer}) => <div key={question}><h3 className="mb-2 text-xl font-bold text-amber-400">{question}</h3><p>{answer}</p></div>)}</div>
          </div>

          <div className={card}>
            <h2 className={heading}>Zobacz także</h2>
            <ul className="list-disc space-y-2 pl-6 text-lg">
              <li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/uslugi/zmiana-umowy-spolki-zoo">zmiana umowy spółki z o.o.</Link></li>
              <li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/artykul/zmiana-przedmiotu-dzialalnosci-spolka-zoo">zmiana przedmiotu działalności spółki</Link></li>
              <li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/uslugi">wszystkie usługi zmian w KRS</Link></li>
              <li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/cennik">cennik</Link></li>
            </ul>
            <h2 className={`${heading} mt-10`}>Kontakt</h2>
            <p className="text-lg text-white/90">Sprawdziłeś kody i chcesz, żeby rejestr opisywał to, czym spółka faktycznie się zajmuje? Napisz albo zadzwoń – ustalimy zakres i przygotujemy wniosek.</p>
            <div className="mt-4 flex flex-col gap-3 text-lg sm:flex-row sm:gap-6"><a href="tel:+48572234779" className="inline-flex items-center gap-2 underline underline-offset-2 hover:text-amber-300"><Phone className="h-5 w-5 text-amber-400" />572 234 779</a><a href="mailto:biuro@zmianakrs.pl" className="text-amber-400 underline hover:text-amber-300">biuro@zmianakrs.pl</a></div>
            <InlineContactForm className="mt-8 max-w-xl" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
