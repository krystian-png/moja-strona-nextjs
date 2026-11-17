import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ContactLinks from "@/components/landing/ContactLinks"
import ContactSection from "@/components/landing/ContactSection"
import Faq from "@/components/landing/Faq"
import FeeTable from "@/components/landing/FeeTable"
import Steps from "@/components/landing/Steps"
import landing from "@/components/landing/landing.module.css"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import styles from "./page.module.css"

const pagePath = "/uslugi/zmiana-wspolnika-spolki-zoo"
const pageUrl = `${siteUrl}${pagePath}`
const title = "Zmiana wspólnika spółki z o.o. w KRS – sprzedaż udziałów"
const description = "Sprzedaż, darowizna lub dziedziczenie udziałów? Sprawdzimy, jakie dokumenty są potrzebne, przygotujemy listę wspólników i zgłosimy zmianę do KRS."

const scenarios = [
  {
    title: "Umowa jest już podpisana",
    text: "Sprawdzimy umowę sprzedaży lub darowizny i ustalimy, które dane trzeba zaktualizować. Przygotujemy nową listę wspólników i złożymy dokumenty do sądu rejestrowego.",
  },
  {
    title: "Dopiero planujesz sprzedaż lub darowiznę",
    text: "Sprawdzimy, czy umowa spółki wymaga zgody na zbycie albo przyznaje pozostałym wspólnikom prawo pierwszeństwa. Przygotowanie umowy zbycia i ewentualnych zgód wyceniamy osobno.",
  },
  {
    title: "Udziały przeszły w drodze dziedziczenia",
    text: "Sprawdzimy dokument potwierdzający nabycie spadku i postanowienia umowy spółki o wstąpieniu spadkobierców. Ustalimy, jak zaktualizować listę wspólników i jakie dane zgłosić do KRS.",
  },
]

const fees = [
  { label: "Wniosek o zmianę wpisu w KRS przez PRS", value: "250 zł" },
  { label: "Opłata skarbowa od złożenia pełnomocnictwa, jeśli jest należna", value: "17 zł" },
  { label: "Notarialne poświadczenie podpisów pod umową zbycia, jeśli jest potrzebne", value: "według taksy notarialnej" },
]

const steps = [
  { title: "Sprawdzamy dokumenty", text: "Czytamy umowę spółki i dokumenty dotyczące udziałów. Ustalamy, czy zmienia się wpis w KRS, czy wystarczy złożyć listę wspólników do akt." },
  { title: "Przygotowujemy zgłoszenie", text: "Sporządzamy listę wspólników i pozostałe dokumenty oraz wskazujemy, kto je podpisuje. Jeśli transakcja jest dopiero przed Tobą, osobno uzgadniamy jej zakres." },
  { title: "Składamy dokumenty", text: "Zgłaszamy zmianę do KRS albo składamy listę do akt rejestrowych. Prowadzimy sprawę do jej zakończenia i informujemy o wyniku." },
]

const faq = [
  {
    question: "Czy sprzedaż udziałów wymaga zmiany umowy spółki?",
    answer: "Sama sprzedaż istniejących udziałów zwykle nie wymaga zmiany umowy spółki. Przed podpisaniem umowy sprzedaży sprawdź, czy umowa spółki nie wymaga zgody na zbycie, nie przyznaje prawa pierwszeństwa albo nie wprowadza innego ograniczenia. Jeśli przy okazji zmieniasz np. zasady reprezentacji, zmianę umowy spółki zgłaszasz jako odrębną czynność.",
  },
  {
    question: "Czy można sprzedać udziały bez notariusza?",
    answer: "Tylko w S24, jeśli umowę spółki zawarto przy wykorzystaniu wzorca w tym systemie – wtedy zbycie udziałów jest możliwe na wzorcu S24 (art. 180 § 2 k.s.h.). W pozostałych przypadkach umowa zbycia wymaga formy pisemnej z podpisami notarialnie poświadczonymi (art. 180 § 1 k.s.h.).",
  },
  {
    question: "Od kiedy kupujący może wykonywać prawa wspólnika wobec spółki?",
    answer: "Przejście udziałów jest skuteczne wobec spółki od chwili, gdy otrzyma ona zawiadomienie wraz z dowodem przejścia udziałów (art. 187 § 1 k.s.h.). Przy zwykłej sprzedaży istniejących udziałów nabywca nie musi w tym celu czekać na zmianę wpisu w KRS.",
  },
  {
    question: "Czy po zmianie wspólnika trzeba zaktualizować CRBR?",
    answer: "Jeśli zmieniły się dane zgłoszone do Centralnego Rejestru Beneficjentów Rzeczywistych, spółka aktualizuje je we własnym zakresie w ciągu 14 dni, nie licząc sobót i dni ustawowo wolnych od pracy. Przy zwykłej sprzedaży udziałów termin liczy się od dokonania zmiany, bez czekania na wpis w KRS. Jeśli zmiana staje się skuteczna dopiero z wpisem, termin biegnie od wpisu.",
  },
]

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: brandName,
    images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Zmiana wspólnika spółki z o.o. – ZmianaKRS" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/images/krs-services.png`] },
}

const schemas = [
  {
    "@context": "https://schema.org", "@type": "Service", name: title, url: pageUrl, description,
    provider: organizationSchema, areaServed: { "@type": "Country", name: "Poland" },
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Usługi", item: `${siteUrl}/uslugi` },
      { "@type": "ListItem", position: 3, name: title, item: pageUrl },
    ],
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
  })) },
]

export default function ZmianaWspolnikaSpolkiZooPage() {
  return (
    <div className={`${landing.page} ${styles.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
      <Navbar contactAction={{ href: "#kontakt", label: "Opisz sprawę" }} />
      <main>
        <section className={landing.hero}>
          <div className={`${landing.container} ${styles.heroGrid}`}>
            <div>
              <h1>{title}</h1>
              <p className={landing.lead}>Umowa sprzedaży lub darowizny udziałów jest już podpisana? Sprawdzimy dokumenty, przygotujemy nową listę wspólników i zajmiemy się zgłoszeniem do KRS. Jeśli dopiero przygotowujesz transakcję albo udziały przeszły w drodze dziedziczenia, ustalimy, od czego zacząć.</p>
              <div className={styles.actions}>
                <a href="#kontakt" className={landing.primary}>Zleć zmianę wspólnika</a>
                <a href="#zakres" className={landing.secondary}>Zakres i cena</a>
              </div>
              <p className={styles.serviceLine}>Obsługa zdalna · Zgłoszenie przez PRS lub S24</p>
            </div>
            <aside className={styles.heroCard}>
              <p className={styles.heroCardTitle}>Zdalnie, przez PRS lub S24</p>
              <p>Przygotowujemy dokumenty, składamy je do sądu rejestrowego i prowadzimy sprawę do jej zakończenia.</p>
              <ContactLinks />
            </aside>
          </div>
        </section>

        <section className={landing.tinted} aria-labelledby="etap">
          <div className={landing.container}>
            <h2 id="etap">Na jakim etapie jest zmiana wspólnika?</h2>
            <div className={styles.scenarios}>
              {scenarios.map(({ title: heading, text }) => (
                <article key={heading} className={styles.scenario}>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={landing.section} aria-labelledby="zakres">
          <div className={landing.container}>
            <h2 id="zakres">Ile kosztuje zmiana wspólnika w KRS?</h2>
            <div className={styles.priceBox} data-nosnippet>
              <p className={styles.priceLine}>Formalności po przeniesieniu udziałów <strong>od 599 zł netto</strong></p>
              <p>Cena dotyczy standardowej sprawy na podstawie gotowego dokumentu przeniesienia udziałów. Sprawdzimy umowę spółki i dokumenty, przygotujemy nową listę wspólników i pozostałe dokumenty potrzebne do zgłoszenia. Złożymy je i poprowadzimy sprawę przed sądem rejestrowym do jej zakończenia.</p>
              <p>Przygotowanie umowy sprzedaży lub darowizny udziałów wyceniamy osobno. Dodatkowe zgody, zawiadomienia i ograniczenia zapisane w umowie spółki mogą wpłynąć na cenę. Honorarium podamy przed przyjęciem zlecenia.</p>
            </div>
            <FeeTable
              caption="Opłaty i koszty zewnętrzne"
              rows={fees}
              note="Opłaty sądowe i koszty notarialne nie są częścią honorarium. Jeśli sprawa dotyczy tylko złożenia nowej listy wspólników do akt, tryb zgłoszenia ustalimy po sprawdzeniu dokumentów."
            />
            <div className={styles.afterFees}>
              <a href="#kontakt" className={landing.primary}>Poproś o wycenę zmiany wspólnika</a>
              <p><Link href="/cennik">Zobacz pełny cennik</Link></p>
            </div>
          </div>
        </section>

        <section className={landing.band} aria-labelledby="wspolpraca">
          <div className={landing.container}>
            <h2 id="wspolpraca">Jak wygląda współpraca?</h2>
            <Steps items={steps} />
          </div>
        </section>

        <section className={landing.section} aria-labelledby="wpis">
          <div className={`${landing.container} ${styles.prose}`}>
            <h2 id="wpis">Czy każda zmiana wspólnika wymaga zmiany wpisu w KRS?</h2>
            <p>Wniosek o zmianę wpisu składasz, gdy zmieniają się dane ujawniane w rejestrze. KRS pokazuje wspólników, którzy mają samodzielnie lub łącznie z innymi co najmniej 10% kapitału zakładowego, liczbę i łączną wartość ich udziałów, a jeśli spółka ma jednego wspólnika – wzmiankę, że jest on jedynym wspólnikiem (art. 38 pkt 8 lit. c i d ustawy o KRS). Wpis trzeba też zaktualizować, gdy zmienia się liczba udziałów wspólnika, którego dane nadal są ujawnione.</p>
            <p>Po każdej zmianie w księdze udziałów zarząd składa w sądzie rejestrowym nową listę wspólników podpisaną przez wszystkich członków zarządu (art. 188 § 3 k.s.h.). Lista obejmuje wszystkich wspólników, również tych, których nie widać w odpisie z KRS. Jeśli dane ujawnione w rejestrze się nie zmieniają, nową listę składa się do akt rejestrowych.</p>
          </div>
        </section>

        <section className={landing.tinted} aria-labelledby="jak-zglosic">
          <div className={`${landing.container} ${styles.prose}`}>
            <h2 id="jak-zglosic">Jak zgłosić zmianę wspólnika do KRS online i jakie dokumenty dołączyć?</h2>
            <p>Zmianę udziałowców zgłasza się elektronicznie. Standardową drogą jest Portal Rejestrów Sądowych (PRS). Jeśli umowę spółki zawarto w S24, a udziały zbyto na wzorcu w tym systemie, listę wspólników sporządza się na wzorcu S24 (art. 188 § 4 k.s.h.).</p>
            <p>Przygotuj dokument potwierdzający przejście udziałów, np. umowę sprzedaży, umowę darowizny albo dokument potwierdzający nabycie spadku. Sprawdź, czy spółka dostała zawiadomienie wraz z dowodem przejścia udziałów. Zarząd wpisuje zmianę do księgi udziałów i podpisuje nową listę wspólników. Zależnie od sprawy potrzebne mogą być też inne dokumenty, np. zgoda na zbycie udziałów albo pełnomocnictwo.</p>
            <p>Jeśli zmienia się wpis w KRS, spółka składa wniosek w ciągu 7 dni od zdarzenia, które uzasadnia wpis (art. 22 ustawy o KRS). To termin dla spółki, nie dla sądu.</p>
          </div>
        </section>

        <section className={landing.section} aria-labelledby="inwestor">
          <div className={`${landing.container} ${styles.prose}`}>
            <h2 id="inwestor">Wejście inwestora do spółki</h2>
            <p>Inwestor może kupić istniejące udziały albo objąć nowe przy podwyższeniu kapitału zakładowego. W drugim przypadku sprawdzimy, czy umowa spółki pozwala podwyższyć kapitał w planowanej wysokości i terminie. Jeśli trzeba też zmienić umowę spółki, ustalimy zakres obu spraw i podamy łączną cenę.</p>
            <p><Link href="/uslugi/zmiana-umowy-spolki-zoo">Sprawdź obsługę zmiany umowy spółki</Link></p>
          </div>
        </section>

        <section className={landing.faqSection} aria-labelledby="faq">
          <div className={`${landing.container} ${landing.faqGrid}`}>
            <div>
              <h2 id="faq">Najczęściej zadawane pytania</h2>
              <p>Nie ma tu Twojego pytania? <a href="#kontakt">Napisz do nas</a>.</p>
            </div>
            <Faq items={faq} />
          </div>
        </section>

        <ContactSection
          heading="Zleć zmianę wspólnika"
          text="Napisz, czy umowa sprzedaży lub darowizny jest już podpisana, czy potrzebujesz pomocy przed transakcją. Jeśli chodzi o dziedziczenie, napisz, jaki dokument masz. Sprawę prowadzi radca prawny."
        />
      </main>
      <Footer className={landing.footer} />
    </div>
  )
}
