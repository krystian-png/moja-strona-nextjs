import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ContactLinks from "@/components/landing/ContactLinks"
import ContactSection from "@/components/landing/ContactSection"
import Faq from "@/components/landing/Faq"
import FeeTable from "@/components/landing/FeeTable"
import PriceCard, { type PriceCardProps } from "@/components/landing/PriceCard"
import Steps from "@/components/landing/Steps"
import styles from "@/components/landing/landing.module.css"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/cennik"
const pageUrl = `${siteUrl}${pagePath}`
const title = "Ile kosztuje zmiana wpisu w KRS? Cennik usług dla spółek z o.o."
const description = "Sprawdź ceny zmiany zarządu, wspólnika, adresu, prokury, umowy spółki i kodów PKD. Poznaj opłaty sądowe oraz zakres obsługi KRS."

const proceedings = "Prowadzenie sprawy przed sądem rejestrowym do jej zakończenia"

const priceCards: PriceCardProps[] = [
  {
    title: "Zmiana zarządu",
    description: "Powołanie lub odwołanie członka zarządu, zmiana prezesa albo zgłoszenie rezygnacji do KRS.",
    prices: [{ value: "od 499 zł netto" }],
    items: [
      "Sprawdzenie umowy spółki i dokumentów",
      "Uchwała i pozostałe dokumenty potrzebne do zmiany",
      "Wniosek do KRS w PRS lub S24",
      proceedings,
    ],
    note: "Przy samej rezygnacji przygotowujemy tylko te dokumenty, których wymaga sytuacja – uchwała nie zawsze jest potrzebna.",
    href: "/uslugi/zmiana-zarzadu-spolki-zoo",
    linkLabel: "Sprawdź usługę zmiany zarządu",
  },
  {
    title: "Zmiana wspólnika",
    description: "Formalności w spółce i aktualizacja wpisu w KRS po przeniesieniu udziałów.",
    prices: [{ value: "od 599 zł netto" }],
    items: [
      "Sprawdzenie postanowień umowy spółki potrzebnych do rejestracji zmiany",
      "Nowa lista wspólników i pozostałe dokumenty spółki",
      "Zgłoszenie zmiany do KRS",
      proceedings,
    ],
    note: "Cena nie obejmuje umowy zbycia udziałów – wyceniamy ją osobno. Dodatkowe zgody, zawiadomienia albo szczególne okoliczności transakcji mogą zmienić zakres i cenę.",
    href: "/uslugi/zmiana-wspolnika-spolki-zoo",
    linkLabel: "Sprawdź usługę zmiany wspólnika",
  },
  {
    title: "Zmiana adresu spółki",
    description: "Nowy adres w tej samej miejscowości i zgłoszenie zmiany do KRS.",
    prices: [{ value: "od 499 zł netto" }],
    items: [
      "Sprawdzenie umowy spółki",
      "Uchwała zarządu i pozostałe dokumenty",
      "Wniosek do KRS w PRS lub S24",
      proceedings,
    ],
    note: "Przeprowadzka do innej miejscowości to zmiana siedziby. Wymaga zmiany umowy spółki i wyceniamy ją osobno.",
    href: "/uslugi/zmiana-adresu-spolki-zoo",
    linkLabel: "Sprawdź usługę zmiany adresu i siedziby",
  },
  {
    title: "Prokura",
    description: "Ustanowienie prokury, zmiana prokurenta albo wykreślenie prokurenta z KRS.",
    prices: [{ value: "od 499 zł netto" }],
    items: [
      "Ustalenie rodzaju prokury i sposobu jej wykonywania",
      "Uchwała zarządu, dokument prokury i pozostałe dokumenty",
      "Wniosek do KRS w PRS lub S24",
      proceedings,
    ],
    href: "/uslugi/prokurent-krs",
    linkLabel: "Sprawdź usługę dotyczącą prokury",
  },
  {
    title: "Zmiana umowy spółki",
    description: "Zmiana postanowień umowy spółki i zgłoszenie do KRS. To, czy wystarczy S24, zależy od umowy spółki i zakresu zmiany.",
    prices: [
      { label: "w S24 (cena stała)", value: "599 zł netto" },
      { label: "u notariusza", value: "od 1 100 zł netto" },
    ],
    items: [
      "Sprawdzenie, czy zmianę można przeprowadzić w S24",
      "Projekt zmian umowy i tekst jednolity",
      "Przy wariancie notarialnym – współpraca z notariuszem",
      "Wniosek do KRS i prowadzenie sprawy do jej zakończenia",
    ],
    note: "Taksa notarialna i opłaty sądowe są poza ceną.",
    href: "/uslugi/zmiana-umowy-spolki-zoo",
    linkLabel: "Sprawdź usługę zmiany umowy spółki",
  },
  {
    title: "Zmiana kodów PKD 2007 → PKD 2025",
    description: "Dobór kodów PKD 2025 do faktycznej działalności spółki i zgłoszenie zmiany do KRS – nie tylko złożenie wniosku.",
    prices: [{ label: "cena stała", value: "799 zł netto" }],
    items: [
      "Analiza obecnych kodów z odpisu KRS",
      "Dobór kodów PKD 2025 do rzeczywistej działalności spółki",
      "Sprawdzenie, czy nowe kody mieszczą się w umowie spółki",
      "Dokumenty i wniosek do KRS",
    ],
    note: "Cena dotyczy jednej spółki, do 10 pozycji PKD w KRS, bez zmiany umowy spółki.",
    highlight: "Wniosek dotyczący samej wymiany kodów PKD 2007 na PKD 2025, złożony do 31 grudnia 2026 r., jest zwolniony z opłaty sądowej. Zwolnienie nie obejmuje innych zmian zgłaszanych przy tej okazji.",
    href: "/uslugi/zmiana-kodow-pkd",
    linkLabel: "Sprawdź usługę zmiany kodów PKD",
  },
  {
    title: "Założenie spółki z o.o. przez S24",
    description: "Spółka z o.o. zakładana online na wzorcu umowy S24, gdy standardowa umowa odpowiada wspólnikom.",
    prices: [{ value: "od 799 zł netto" }],
    items: [
      "Ustalenie danych wspólników, zarządu i kapitału",
      "Umowa na wzorcu S24 i dokumenty rejestracyjne",
      "Wniosek w S24 przygotowany do podpisu",
      "Pomoc przy podpisach i złożeniu wniosku",
    ],
    note: "Wspólnicy i członkowie zarządu potrzebują konta w S24 oraz podpisu kwalifikowanego, zaufanego albo osobistego. Opłaty sądowe są poza ceną.",
    href: "#kontakt",
    linkLabel: "Zapytaj o założenie spółki przez S24",
  },
  {
    title: "Założenie spółki z o.o. z indywidualną umową",
    description: "Rejestracja spółki z umową przygotowaną pod wspólników, gdy wzorzec S24 nie wystarcza.",
    prices: [{ value: "od 1 199 zł netto" }],
    items: [
      "Rozmowa o potrzebach wspólników",
      "Projekt indywidualnej umowy spółki i dokumenty rejestracyjne",
      "Współpraca z wybranym notariuszem",
      "Wniosek do KRS i prowadzenie sprawy do jej zakończenia",
    ],
    note: "Taksa notarialna, opłaty sądowe i inne koszty zewnętrzne są poza ceną.",
    href: "#kontakt",
    linkLabel: "Zapytaj o założenie spółki z indywidualną umową",
  },
]

const fees = [
  { label: "Opłata sądowa – wniosek o zmianę wpisu w PRS", value: "250 zł" },
  { label: "Opłata sądowa – S24, gdy zmianę wprowadza uchwała na wzorcu", value: "200 zł" },
  { label: "Wniosek o samą wymianę kodów PKD 2007 na PKD 2025, złożony do 31 grudnia 2026 r.", value: "0 zł" },
  { label: "Opłata skarbowa od pełnomocnictwa, jeśli podlega opłacie", value: "17 zł" },
  { label: "Notariusz", value: "zależnie od czynności" },
  { label: "Ogłoszenie wpisu w Monitorze Sądowym i Gospodarczym", value: "0 zł" },
]

const exampleSteps = [
  "Analiza umowy spółki – zakres prawa pierwszeństwa, terminy, forma zawiadomień i ewentualny wymóg zgody na zbycie.",
  "Zawiadomienie zarządu – wspólnik informuje zarząd o planowanym zbyciu udziałów, tak jak przewiduje umowa.",
  "Zawiadomienie pozostałych wspólników – zarząd przekazuje im informacje wymagane umową spółki.",
  "Oświadczenia uprawnionych – wspólnicy wskazują, czy chcą skorzystać z prawa pierwszeństwa. Sprawdzamy też skutki upływu terminów.",
  "Zgoda na zbycie, jeśli umowa jej wymaga – uchwała lub zgoda w formie przewidzianej umową. Rezygnacja z prawa pierwszeństwa nie zastępuje zgody.",
  "Zbycie udziałów – umowa w wymaganej formie.",
  "Po transakcji – nowa lista wspólników, a gdy zmiana tego dotyczy, także nowa lista członków organów lub osób uprawnionych do powołania zarządu, i dokumenty do KRS. Zmianę w Centralnym Rejestrze Beneficjentów Rzeczywistych spółka zgłasza we własnym zakresie.",
]

const steps = [
  { title: "Opisujesz sprawę", text: "Wystarczy kilka zdań o zmianie, której potrzebuje spółka." },
  { title: "Sprawdzamy zakres", text: "Ustalamy potrzebne dokumenty, tryb zgłoszenia i ewentualne dodatkowe czynności." },
  { title: "Dostajesz wycenę", text: "Podajemy honorarium, koszty zewnętrzne i kolejne kroki." },
]

const faq = [
  {
    question: "Jakie dodatkowe koszty mogą pojawić się przy zmianie wpisu w KRS?",
    answer: "Zwykle opłata sądowa: 250 zł w PRS albo 200 zł w S24, gdy zmianę wprowadza uchwała na wzorcu. Jeśli pełnomocnictwo podlega opłacie skarbowej, dochodzi 17 zł. Przy czynnościach notarialnych płacisz też notariuszowi. Wniosek dotyczący samej wymiany kodów PKD 2007 na PKD 2025, złożony do 31 grudnia 2026 r., jest zwolniony z opłaty sądowej.",
  },
  {
    question: "Czy mogę zlecić kilka zmian jednocześnie?",
    answer: "Tak. Ustalimy kolejność czynności, sprawdzimy, czy można je objąć jednym wnioskiem, i podamy cenę całości.",
  },
  {
    question: "Czy muszę mieć przygotowane dokumenty?",
    answer: "Nie. Możemy je przygotować. Jeśli masz już gotowe uchwały i pozostałe dokumenty, sprawdzimy je i podamy cenę samego zgłoszenia do KRS.",
  },
  {
    question: "Czy całą sprawę można załatwić zdalnie?",
    answer: "Tak, w większości spraw. Dokumenty i wnioski obsługujemy elektronicznie. Jeśli czynność wymaga notariusza, powiemy o tym przed przyjęciem zlecenia.",
  },
]

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${title} | ${brandName}`,
    description,
    url: pageUrl,
    siteName: brandName,
    images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Cennik usług KRS" }],
  },
  twitter: { card: "summary_large_image", title: `${title} | ${brandName}`, description, images: [`${siteUrl}/images/krs-services.png`] },
}

const schemas = [
  {
    "@context": "https://schema.org", "@type": "Service", name: "Cennik usług zmiany wpisu w KRS", url: pageUrl, description,
    provider: { "@id": organizationSchema["@id"] }, areaServed: { "@type": "Country", name: "Poland" },
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Cennik", item: pageUrl },
    ],
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
  })) },
]

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
      <Navbar contactAction={{ href: "#kontakt", label: "Opisz sprawę" }} />
      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.narrow}`}>
            <h1>Ile kosztuje zmiana wpisu w KRS?</h1>
            <p className={styles.subtitle}>Cennik usług dla spółek z o.o.</p>
            <p className={styles.lead}>Sprawdź ceny obsługi najczęstszych zmian w spółce z o.o.: zarządu, wspólnika, adresu, prokury, umowy spółki i kodów PKD. Zakładamy też spółki przez S24 i z indywidualną umową.</p>
            <p>Podajemy ceny netto naszego honorarium. Przy cenach „od” ostateczną kwotę ustalamy po sprawdzeniu zakresu sprawy – zawsze przed zleceniem. Zmiana kodów PKD ma cenę stałą. Opłaty sądowe, notarialne i inne koszty zewnętrzne rozliczamy osobno.</p>
            <ContactLinks />
          </div>
        </section>

        <section className={styles.tinted} aria-labelledby="ceny">
          <div className={styles.container}>
            <h2 id="ceny">Ceny obsługi zmian w KRS</h2>
            <div className={styles.priceGrid}>
              {priceCards.map((card) => <PriceCard key={card.title} {...card} />)}
            </div>
            <div className={styles.packageCard}>
              <div>
                <h3>Kilka zmian naraz</h3>
                <p className={styles.packagePrice}>Wycena indywidualna</p>
                <p>Zmieniasz jednocześnie wspólników, zarząd, umowę lub inne dane spółki? Ustalimy kolejność czynności, sprawdzimy, czy wystarczy jeden wniosek, i podamy cenę całości.</p>
              </div>
              <a href="#kontakt" className={styles.primary}>Poproś o wycenę</a>
            </div>
            <p className={styles.commonNote}>Ceny dotyczą obsługi prawnej i są kwotami netto – doliczamy do nich VAT. Opłaty sądowe, skarbowe, notarialne i inne koszty zewnętrzne rozliczamy osobno, chyba że oferta indywidualna stanowi inaczej. Jeśli masz już gotowe dokumenty, opisz sytuację – ustalimy, czego jeszcze potrzeba.</p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="oplaty">
          <div className={styles.container}>
            <h2 id="oplaty">Opłata sądowa i inne koszty zmiany wpisu w KRS</h2>
            <p>Poza naszym honorarium mogą wystąpić opłaty urzędowe i notarialne. Nie są częścią ceny usługi.</p>
            <FeeTable
              caption="Koszty zewnętrzne przy zmianie wpisu w KRS"
              rows={fees}
              note="S24 nie jest dostępny dla każdej spółki i każdej zmiany. Opłata 200 zł dotyczy tylko zmian wprowadzanych uchwałą na wzorcu. Od 29 listopada 2025 r. nie płaci się dodatkowych 100 zł za ogłoszenie wpisu w Monitorze Sądowym i Gospodarczym."
            />
          </div>
        </section>

        <section className={styles.warm} aria-labelledby="od-czego-zalezy">
          <div className={`${styles.container} ${styles.narrow}`}>
            <h2 id="od-czego-zalezy">Od czego zależy cena obsługi?</h2>
            <p>Nie każda zmiana w spółce wymaga tyle samo pracy. Czasem wystarczy jedna uchwała i wniosek do KRS. Kiedy indziej trzeba najpierw przeanalizować umowę spółki, przygotować dodatkowe dokumenty, uzyskać zgody albo przeprowadzić kilka powiązanych czynności. Dlatego cenę ustalamy na podstawie rzeczywistego zakresu pracy.</p>
            <details className={styles.example}>
              <summary>Zobacz przykład: zmiana wspólnika przy prawie pierwszeństwa</summary>
              <p>W jednej z bardziej złożonych spraw umowa spółki przewidywała prawo pierwszeństwa nabycia udziałów przez pozostałych wspólników i szczegółową procedurę jego wykonania. Poniższe etapy wynikały z tej umowy – nie są obowiązkowe przy każdej sprzedaży udziałów.</p>
              <ol className={styles.exampleSteps}>
                {exampleSteps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <p>Dlatego dwa podobne na pierwszy rzut oka zlecenia mogą wymagać zupełnie innej liczby dokumentów i czynności. Rozbudowaną procedurę wyceniamy po analizie umowy spółki.</p>
            </details>
          </div>
        </section>

        <section className={styles.band} aria-labelledby="wycena">
          <div className={styles.container}>
            <h2 id="wycena">Jak wygląda wycena?</h2>
            <Steps items={steps} />
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq">
          <div className={`${styles.container} ${styles.faqGrid}`}>
            <div>
              <h2 id="faq">Najczęstsze pytania</h2>
              <p>Nie ma tu Twojego pytania? <a href="#kontakt">Napisz do nas</a>.</p>
            </div>
            <Faq items={faq} />
          </div>
        </section>

        <ContactSection
          heading="Ty prowadzisz firmę. My zajmujemy się formalnościami."
          text="Opisz krótko zmianę, której potrzebujesz. Sprawdzimy zakres czynności i podamy cenę. Numer KRS nie jest potrzebny."
        />
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}
