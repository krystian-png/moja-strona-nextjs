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
  { question: "Czy KRS automatycznie zmieni kody PKD 2007 na PKD 2025?", answer: "Tak. Po zakończeniu okresu przejściowego kody w dziale 3 rejestru wymienia system teleinformatyczny KRS, bez wniosku spółki i bez opłaty (art. 20e ust. 1 ustawy o KRS). Warto to odróżnić od tego, co dzieje się w rejestrze REGON i w CEIDG — tam obowiązują odrębne przepisy i odrębne terminy. Wymiana w KRS nie obejmuje działalności pożytku publicznego (art. 20e ust. 2 ustawy o KRS)." },
  { question: "Co stanie się z kodami PKD po 31 grudnia 2026 r.?", answer: "Zależy od tego, jaki kod figuruje w dziale 3. Jeżeli odpowiada mu dokładnie jedna podklasa PKD 2025, system podmienia kod jeden do jednego. Jeżeli odpowiada mu kilka podklas, system wpisuje tę wskazaną w kluczu interpretacyjnym. Jeżeli nie odpowiada mu żadna, kod zostaje wykreślony bez wpisania nowego." },
  { question: "Czy muszę zmienić kody PKD do końca 2026 r.?", answer: "Nie ma obowiązku złożenia wniosku wyłącznie w tym celu — po terminie system dokona wymiany sam. Okres przejściowy jest natomiast jedynym momentem, w którym o doborze kodów decyduje spółka, a nie klucz interpretacyjny. Osobna sytuacja dotyczy spółek, które w tym okresie i tak składają wniosek dotyczący przedmiotu działalności: te muszą posłużyć się już klasyfikacją PKD 2025 (§ 2 ust. 3 rozporządzenia Rady Ministrów z dnia 18 grudnia 2024 r.)." },
  { question: "Gdzie sprawdzę, jakie kody PKD ma moja spółka?", answer: "Kody figurują w dziale 3 wpisu w rejestrze przedsiębiorców. Znajdziesz je w aktualnym odpisie z KRS, który można bezpłatnie pobrać w Portalu Rejestrów Sądowych. Wystarczy przepisać kod do wyszukiwarki na tej stronie, żeby zobaczyć, co się z nim stanie." },
  { question: "Jak sprawdzić, jaki kod PKD 2025 odpowiada mojemu staremu kodowi?", answer: "Odpowiedniki wynikają z kluczy przejścia opublikowanych przy rozporządzeniu PKD 2025. Możesz je sprawdzić w wyszukiwarce na tej stronie — pokazuje wszystkie odpowiedniki danego kodu PKD 2007 oraz ten, który wpisze system, jeżeli spółka nie złoży wniosku." },
  { question: "Co to jest klucz interpretacyjny PKD?", answer: "Gdy jednemu kodowi PKD 2007 odpowiada kilka podklas PKD 2025, w kluczach przejścia jedna z nich jest wskazana jako uproszczona relacja jeden do jednego. To właśnie klucz interpretacyjny. Powstał po to, żeby automatyczna konwersja mogła się odbyć bez udziału człowieka. Nie jest oceną, która podklasa jest właściwa dla konkretnej spółki." },
  { question: "Czy jeden kod PKD 2007 może odpowiadać kilku kodom PKD 2025?", answer: "Tak. Spośród 656 kodów ujętych w kluczach przejścia 185 ma więcej niż jeden odpowiednik. Rekordzista to 47.91.Z, któremu odpowiada 37 różnych podklas PKD 2025. Przy każdym z tych 185 kodów system wybiera jedną podklasę za spółkę." },
  { question: "Czy system może wpisać niewłaściwy kod PKD?", answer: "Może wpisać kod, który nie odpowiada faktycznej działalności spółki. Nie jest to błąd — system działa dokładnie zgodnie z kluczem interpretacyjnym. Rzecz w tym, że klucz został przygotowany na potrzeby masowej konwersji, a nie oceny pojedynczej spółki, a sąd rejestrowy przy automatycznej wymianie nie bada, czym spółka się zajmuje." },
  { question: "Ile kodów PKD można ujawnić w KRS?", answer: "Nie więcej niż dziesięć pozycji, w tym jedną działalność przeważającą określoną na poziomie podklasy (art. 40 pkt 1 ustawy o KRS). Limit ten bywa problemem właśnie przy przechodzeniu na PKD 2025, bo jeden stary kod może rozpaść się na kilka nowych podklas — i trzeba zdecydować, które z nich w ogóle ujawnić." },
  { question: "Ile kosztuje zmiana PKD w KRS?", answer: "Wniosek dotyczący wymiany kodów PKD 2007 na PKD 2025, złożony do 31 grudnia 2026 r., jest zwolniony z opłaty sądowej (art. 20e ust. 3 ustawy o KRS). Standardowa opłata za zmianę wpisu w rejestrze przedsiębiorców wynosi 250 zł. Koszt naszej obsługi to 599 zł netto." },
  { question: "Czy zmiana PKD do końca 2026 r. jest bez opłaty sądowej?", answer: "Tak, jeżeli wniosek dotyczy wymiany dotychczasowych kodów PKD 2007 na odpowiadające im kody PKD 2025 i został złożony do 31 grudnia 2026 r. (art. 20e ust. 3 ustawy o KRS). Zwolnienie dotyczy samej wymiany kodów — jeżeli przy okazji zgłaszasz inne zmiany w rejestrze, do tych zmian stosuje się zasady ogólne." },
  { question: "Czy przy zmianie PKD trzeba zmieniać umowę spółki?", answer: "Nie zawsze. Jeżeli przedmiot działalności określony w umowie obejmuje działalność, którą chcesz ujawnić w rejestrze, wystarczy zgłoszenie zmiany wpisu. Zmiana umowy jest konieczna dopiero wtedy, gdy docelowe kody wykraczają poza przedmiot działalności wynikający z umowy. Ustalamy to na etapie analizy, przed podjęciem jakichkolwiek dalszych czynności." },
  { question: "Czy do zmiany PKD potrzebny jest notariusz?", answer: "Do samego zgłoszenia zmiany kodów w rejestrze — nie. Notariusz wchodzi w grę dopiero wtedy, gdy konieczna okazuje się zmiana umowy spółki: w spółce z o.o. uchwała o zmianie umowy wymaga protokołu sporządzonego przez notariusza (art. 255 § 3 KSH). Wyjątkiem jest zmiana dokonywana przy użyciu wzorca umowy w systemie S24, jeżeli spółka spełnia warunki tego trybu." },
  { question: "Czy mogę zmienić PKD przy okazji innego wniosku do KRS?", answer: "Tak — i w wielu przypadkach właśnie tak trzeba. Spółka, która w okresie przejściowym składa wniosek dotyczący przedmiotu działalności, ma obowiązek posłużyć się już klasyfikacją PKD 2025 (§ 2 ust. 3 rozporządzenia Rady Ministrów z dnia 18 grudnia 2024 r.). Jeżeli planujesz zmianę zarządu, adresu albo umowy spółki, warto uporządkować kody przy tej samej okazji." },
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
              <p className="text-lg text-white/90">Wymiana nastąpi bez wniosku spółki i bez badania, czym spółka faktycznie się zajmuje. Przy 185 kodach jednemu kodowi PKD 2007 odpowiada kilka podklas PKD 2025 — wtedy system wybiera jedną z nich za spółkę.</p>
              <p className="text-lg text-white/90">Wpisz kod z działu 3 swojego odpisu i sprawdź, co się z nim stanie.</p>
              <div id="wyszukiwarka" className="scroll-mt-24"><PkdLookup /></div>
              <p className="text-sm text-white/70">Dane pochodzą z kluczy przejścia PKD 2007 – PKD 2025, stanowiących część załącznika do rozporządzenia Rady Ministrów z dnia 18 grudnia 2024 r. w sprawie Polskiej Klasyfikacji Działalności (Dz.U. poz. 1936). Kod oznaczony jako wpisywany przez system to kod wskazany w kluczu interpretacyjnym, do którego odsyła art. 20e ust. 1 pkt 2 ustawy o KRS. Narzędzie ma charakter informacyjny i nie zastępuje analizy konkretnego przypadku.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10">
          <div id="oferta" className={`${card} scroll-mt-24`}>
            <h2 className={heading}>Co dostajesz za 599 zł netto</h2>
            <div className="space-y-4 text-lg text-white/90">
              <div><strong>1. Sprawdzamy cały dział 3 rejestru</strong><p>Nie jeden kod z wyszukiwarki — wszystkie ujawnione pozycje.</p></div>
              <div><strong>2. Dobieramy kody do faktycznej działalności</strong><p>Nie przepisujemy klucza interpretacyjnego. Ustalamy, czym spółka rzeczywiście się zajmuje, i dobieramy podklasy, które to opisują.</p></div>
              <div><strong>3. Sprawdzamy umowę spółki</strong><p>Ustalamy, czy zmiana mieści się w przedmiocie działalności wynikającym z umowy.</p></div>
              <div><strong>4. Przygotowujemy i składamy wniosek</strong><p>Nie dostajesz instrukcji do samodzielnego wykonania.</p></div>
              <div><strong>5. Prowadzimy sprawę do wpisu</strong><p>Jeżeli sąd wezwie do uzupełnienia braków — odpowiadamy.</p></div>
              <div className="rounded-xl border border-amber-400/50 bg-amber-400/10 p-5"><p className="text-2xl font-bold text-amber-400">599 zł netto za całość</p><p className="mt-1 text-base">jedna spółka • do 10 pozycji PKD • bez zmiany umowy spółki</p></div>
              <p className="font-bold">Jeżeli po analizie okaże się, że właściwe kody wykraczają poza przedmiot działalności wynikający z umowy spółki, poinformujemy Cię o tym przed wykonaniem jakichkolwiek dodatkowych czynności. Zmiana umowy nie jest objęta ceną 599 zł i wymaga osobnej wyceny.</p>
            </div>
            <InlineContactForm className="mt-8 max-w-xl" />
          </div>

          <div className={card}>
            <h2 className={heading}>Sam wniosek jest prosty. Problemem jest wybór kodów.</h2>
            <div className="space-y-5 text-lg text-white/90">
              <div><strong>Klucz przejścia nie mówi, który kod jest właściwy dla Twojej spółki.</strong><p>Pokazuje wszystkie możliwe odpowiedniki i jeden kod techniczny, wskazany na potrzeby automatycznej konwersji.</p></div>
              <div><strong>Jeden stary kod może odpowiadać kilku nowym działalnościom naraz.</strong><p>Czasem prawidłowym rozwiązaniem nie jest jeden nowy kod, tylko dwa albo trzy — bo w PKD 2025 rozdzielono to, co wcześniej mieściło się pod jednym numerem.</p></div>
              <div><strong>W rejestrze mieści się dziesięć pozycji, w tym jedna przeważająca.</strong><p>Wynika to z art. 40 pkt 1 ustawy o KRS. Trzeba więc zdecydować nie tylko, czym zastąpić stare kody, ale też które działalności w ogóle ujawnić i która jest główna.</p></div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className={card}><h2 className="mb-3 text-2xl font-bold text-amber-400">Do 31 grudnia 2026 r. wybierasz Ty</h2><p className="text-lg text-white/90">Po zakończeniu okresu przejściowego kody w dziale 3 wymienia system, na podstawie klucza interpretacyjnego (art. 20e ust. 1 ustawy o KRS). Wcześniej decyzja należy do spółki.</p></div>
            <div className={card}><h2 className="mb-3 text-2xl font-bold text-amber-400">Wniosek jest teraz bez opłaty sądowej</h2><p className="text-lg text-white/90">Wniosek o wymianę kodów PKD 2007 na PKD 2025 złożony do 31 grudnia 2026 r. nie podlega opłacie sądowej (art. 20e ust. 3 ustawy o KRS). Późniejsza korekta wpisu to już zwykła zmiana danych w rejestrze.</p></div>
          </div>

          <div className={card}>
            <h2 className={heading}>Trzy scenariusze wymiany — art. 20e ustawy o KRS</h2>
            <div className="space-y-4 text-lg text-white/90">
              <p><strong>Powiązanie jednoznaczne.</strong> Kodowi PKD 2007 odpowiada dokładnie jedna podklasa PKD 2025. System podmienia kod jeden do jednego, wpis pozostaje prawidłowy. Dotyczy 471 z 656 kodów ujętych w kluczach przejścia.</p>
              <p><strong>Powiązanie wieloznaczne.</strong> Kodowi odpowiada kilka podklas. System wpisuje ten kod, który wskazano w kluczu interpretacyjnym. Nikt nie bada, którą z tych działalności spółka faktycznie prowadzi. Dotyczy 185 kodów; skrajny przypadek to 47.91.Z, któremu odpowiada 37 różnych podklas.</p>
              <p><strong>Brak dopasowania.</strong> Jeżeli kodowi nie odpowiada żadna podklasa PKD 2025, system wykreśla go bez wpisania nowego.</p>
              <p>Automatyczna wymiana nie obejmuje działalności pożytku publicznego (art. 20e ust. 2 ustawy o KRS).</p>
            </div>
            <h3 className="mb-3 mt-8 text-xl font-bold text-amber-400 sm:text-2xl">Co, jeżeli wykreślona zostanie działalność przeważająca</h3>
            <p className="text-lg text-white/90">Nową działalność przeważającą zgłasza się przy pierwszym składanym wniosku o zmianę wpisu, nie później niż w terminie pięciu lat (art. 22 ust. 2 ustawy o KRS). Samo zgłoszenie nie wymaga zmiany umowy spółki, o ile przedmiot działalności z niej wynika.</p>
          </div>

          <div className={card}>
            <h2 className={heading}>Dlaczego automatyczna zmiana może być błędna</h2>
            <p className="mb-5 text-lg text-white/90">W PKD 2025 wyodrębniono podklasy, których w PKD 2007 nie było. Działalności, które kiedyś mieściły się pod jednym numerem, dostały własne pozycje — i to właśnie te nowe, precyzyjne podklasy klucz interpretacyjny zwykle pomija.</p>
            <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5"><table className="w-full min-w-[760px] border-collapse text-left"><thead><tr className="border-b border-white/20 bg-white/10"><th className={cell}>Kod w odpisie</th><th className={cell}>Co wpisze system</th><th className={cell}>Kod, który często odpowiada rzeczywistej działalności</th></tr></thead><tbody>
              {[["62.01.Z","62.10.B – pozostałe programowanie","62.10.A"," – programowanie gier komputerowych"],["62.02.Z","62.20.B – pozostałe doradztwo w zakresie informatyki","62.20.A"," – cyberbezpieczeństwo"],["63.11.Z","63.10.D – pozostała infrastruktura obliczeniowa","63.10.A"," – kolokacja centrów danych, chmura"],["86.90.E","86.99.D – pozostała opieka zdrowotna","86.93.Z"," – działalność psychologiczna i psychoterapeutyczna"],["81.29.Z","81.23.B – pozostałe sprzątanie","81.23.A"," – dezynfekcja, dezynsekcja, deratyzacja"],["41.20.Z","41.00.A – budynki mieszkalne","41.00.B"," – budynki niemieszkalne (hale, magazyny, biurowce)"],["52.29.A / B / C","52.26.Z – pozostała działalność wspomagająca transport","52.25.Z"," – logistyka, 52.31.Z – pośrednictwo w transporcie towarów"]].map(([a,b,c,d]) => <tr key={a} className="border-b border-white/20 last:border-0"><td className={cell}>{a}</td><td className={cell}>{b}</td><td className={cell}><strong>{c}</strong>{d}</td></tr>)}
            </tbody></table></div>
            <h3 className="mb-3 mt-8 text-xl font-bold text-amber-400 sm:text-2xl">Pułapka: numer zostaje ten sam, znaczenie się zmienia</h3>
            <div className="space-y-4 text-lg text-white/90"><p><strong>47.91.Z</strong> w PKD 2007 oznaczał sprzedaż detaliczną prowadzoną przez domy sprzedaży wysyłkowej lub Internet. W PKD 2025 ten sam numer istnieje nadal, ale oznacza pośrednictwo w sprzedaży detalicznej niewyspecjalizowanej – zupełnie inną działalność. Numer w odpisie zostanie ten sam, znaczenie będzie inne.</p><p><strong>85.51.Z</strong> – pozaszkolne formy edukacji sportowej oraz zajęć sportowych i rekreacyjnych – istnieje w obu klasyfikacjach, więc system go nie ruszy. Tyle że kluby fitness mają w PKD 2025 własną podklasę 93.13.Z. Spółka prowadząca klub fitness zostanie z kodem edukacyjnym, mimo że nikt niczego nie zmienił.</p></div>
          </div>

          <div className={card}>
            <h2 className={heading}>Najprostszy test: czy Twój wpis w ogóle był aktualizowany</h2>
            <p className="text-lg text-white/90">159 kodów PKD 2007 nie ma swojego numeru w PKD 2025. Nie znaczy to, że znikną – każdemu klucz przejścia przypisuje jakiś odpowiednik. Znaczy to co innego: <strong>jeżeli którykolwiek z nich figuruje dziś w dziale 3, wpis spółki na pewno nie był aktualizowany od wejścia w życie PKD 2025.</strong></p>
            <p className="my-5 text-lg text-white/90">Najczęstsze w rejestrze spółek (brzmienie wg schematu klasyfikacji PKD 2007, załącznik do rozporządzenia Rady Ministrów z dnia 24 grudnia 2007 r., Dz.U. Nr 251 poz. 1885):</p>
            <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5"><table className="w-full min-w-[560px] border-collapse text-left"><thead><tr className="border-b border-white/20 bg-white/10"><th className={cell}>Kod</th><th className={cell}>Dotychczasowe brzmienie</th></tr></thead><tbody>
              {[["41.10.Z","Realizacja projektów budowlanych związanych ze wznoszeniem budynków"],["45.11.Z","Sprzedaż hurtowa i detaliczna samochodów osobowych i furgonetek"],["46.51.Z","Sprzedaż hurtowa komputerów, urządzeń peryferyjnych i oprogramowania"],["52.29.C","Działalność pozostałych agencji transportowych"],["62.01.Z","Działalność związana z oprogramowaniem"],["62.02.Z","Działalność związana z doradztwem w zakresie informatyki"],["63.11.Z","Przetwarzanie danych; zarządzanie stronami internetowymi (hosting) i podobna działalność"],["64.92.Z","Pozostałe formy udzielania kredytów"],["68.10.Z","Kupno i sprzedaż nieruchomości na własny rachunek"],["69.20.Z","Działalność rachunkowo-księgowa; doradztwo podatkowe"],["70.22.Z","Pozostałe doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania"],["74.10.Z","Działalność w zakresie specjalistycznego projektowania"],["82.99.Z","Pozostała działalność wspomagająca prowadzenie działalności gospodarczej, gdzie indziej niesklasyfikowana"]].map(([code,name]) => <tr key={code} className="border-b border-white/20 last:border-0"><td className={`${cell} font-mono`}>{code}</td><td className={cell}>{name}</td></tr>)}
            </tbody></table></div>
          </div>

          <div className={card}><h2 className={heading}>Najczęstsze pytania</h2><div className="space-y-6 text-lg text-white/90">{faqItems.map(({question,answer}) => <div key={question}><h3 className="mb-2 text-xl font-bold text-amber-400">{question}</h3><p>{answer}</p></div>)}</div></div>

          <div className={card}>
            <h2 className={heading}>Zobacz także</h2>
            <ul className="list-disc space-y-2 pl-6 text-lg"><li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/uslugi/zmiana-umowy-spolki-zoo">zmiana umowy spółki z o.o.</Link></li><li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/artykul/zmiana-przedmiotu-dzialalnosci-spolka-zoo">zmiana przedmiotu działalności spółki</Link></li><li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/uslugi">wszystkie usługi zmian w KRS</Link></li><li><Link className="text-amber-400 underline transition hover:text-amber-300" href="/cennik">cennik</Link></li></ul>
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
