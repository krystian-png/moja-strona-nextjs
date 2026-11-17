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

const pagePath = "/uslugi/zmiana-umowy-spolki-zoo"
const pageUrl = `${siteUrl}${pagePath}`
const title = "Zmiana umowy spółki z o.o. w KRS – S24 lub notariusz"
const description = "Zmieniasz umowę spółki z o.o.? Sprawdź, kiedy wystarczy S24, kiedy potrzebny jest notariusz i jak zlecić przygotowanie dokumentów oraz wpis do KRS."

const fees = [
  { label: "Opłata sądowa za standardowy wniosek o zmianę wpisu przez PRS", value: "250 zł" },
  { label: "Opłata sądowa za zmianę dokonaną na wzorcu uchwały w S24", value: "200 zł" },
  { label: "Opłata skarbowa od złożenia pełnomocnictwa, jeśli jest należna", value: "17 zł" },
  { label: "Notariusz – protokół zgromadzenia wspólników, z wyjątkiem protokołu dokumentującego podwyższenie kapitału", value: "maks. 900 zł taksy + VAT i koszt wypisów" },
]

const steps = [
  { title: "Sprawdzamy umowę", text: "Napisz, co ma się zmienić i jakie dokumenty już masz. Sprawdzimy umowę, ustalimy tryb i podamy cenę." },
  { title: "Przygotowujemy dokumenty", text: "Przygotujemy dokumenty i wskażemy, kto je podpisuje. Jeśli potrzebny jest notariusz, uzgodnimy z nim czynności." },
  { title: "Zgłaszamy zmianę do KRS", text: "Złożymy wniosek w PRS lub S24 i poprowadzimy sprawę do jej zakończenia. Po wpisie prześlemy potwierdzenie." },
]

const faq = [
  {
    question: "Jaka większość głosów jest potrzebna do zmiany umowy spółki?",
    answer: "Uchwała o zmianie umowy spółki zapada większością dwóch trzecich głosów, a przy istotnej zmianie przedmiotu działalności – trzech czwartych (art. 246 § 1 k.s.h.). Umowa spółki może stawiać surowsze warunki. Jeżeli zmiana zwiększa świadczenia wspólników albo uszczupla ich prawa udziałowe lub prawa przyznane im osobiście, potrzebna jest też zgoda wszystkich wspólników, których dotyczy (art. 246 § 3 k.s.h.). Przy uchwale na wzorcu w S24 głos muszą oddać wszyscy wspólnicy.",
  },
  {
    question: "Ile jest czasu na zgłoszenie zmiany umowy do KRS?",
    answer: "Spółka składa wniosek w ciągu 7 dni od podjęcia uchwały (art. 22 ustawy o KRS). Zmiana umowy niezgłoszona w ciągu 6 miesięcy od podjęcia uchwały nie wywołuje skutków prawnych (art. 256 § 3 w zw. z art. 169 § 1 k.s.h.). W S24 złóż wniosek w ciągu 7 dni od podjęcia uchwały.",
  },
  {
    question: "Od kiedy zmiana umowy spółki jest skuteczna?",
    answer: "Od wpisu do KRS (art. 255 § 1 k.s.h.). Do tego czasu stosujesz dotychczasową umowę. Dotyczy to także uchwały podjętej na wzorcu w S24.",
  },
  {
    question: "Czy wspólnik może głosować nad zmianą umowy przez pełnomocnika?",
    answer: "Tak, jeśli ustawa lub umowa spółki tego nie ogranicza. Pełnomocnictwo trzeba udzielić na piśmie pod rygorem nieważności, a jego kopię dołącza się do księgi protokołów. Pełnomocnikiem na zgromadzeniu wspólników nie może być członek zarządu ani pracownik spółki (art. 243 k.s.h.).",
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
    images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Zmiana umowy spółki z o.o. – ZmianaKRS" }],
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

export default function ZmianaUmowySpolkiZooPage() {
  return (
    <div className={`${landing.page} ${styles.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
      <Navbar contactAction={{ href: "#kontakt", label: "Opisz sprawę" }} />
      <main>
        <section className={landing.hero}>
          <div className={`${landing.container} ${styles.heroGrid}`}>
            <div>
              <h1>{title}</h1>
              <p className={landing.lead}>Chcesz zmienić nazwę spółki, zasady reprezentacji lub inne postanowienia umowy? Sprawdzimy, czy wystarczy S24, czy potrzebny jest notariusz. Przygotujemy dokumenty, zgłosimy zmianę do KRS i poprowadzimy sprawę do jej zakończenia.</p>
              <div className={styles.actions}>
                <a href="#kontakt" className={landing.primary}>Zleć zmianę umowy spółki</a>
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

        <section className={landing.tinted} aria-labelledby="tryb">
          <div className={landing.container}>
            <h2 id="tryb">Czy uchwała o zmianie umowy spółki wymaga notariusza?</h2>
            <div className={styles.paths}>
              <article className={styles.path}>
                <h3>Uchwała u notariusza i zgłoszenie w PRS</h3>
                <p>Wspólnicy podejmują uchwałę, a notariusz sporządza protokół. Tę drogę może wybrać każda spółka. Jest jedyną możliwą, gdy umowę zawarto u notariusza, później zmieniono ją poza wzorcem S24 albo planowana zmiana wykracza poza dostępny wzorzec. Po zmianie umowy u notariusza spółka nie może już zmieniać umowy w S24. Po uchwale zmianę zgłasza się w Portalu Rejestrów Sądowych (PRS).</p>
              </article>
              <article className={styles.path}>
                <h3>Zmiana umowy w S24 bez notariusza</h3>
                <p>Z S24 skorzystasz, jeśli spółkę założono na wzorcu, umowy później nie zmieniano poza wzorcem, a planowana zmiana mieści się w zakresie dostępnym w tym systemie. Wspólnicy podejmują uchwałę na wzorcu w S24 i w tym samym systemie składa się wniosek do KRS.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={landing.section} aria-labelledby="zakres">
          <div className={landing.container}>
            <h2 id="zakres">Ile kosztuje zmiana umowy spółki z o.o.?</h2>
            <div data-nosnippet>
              <div className={styles.priceCards}>
                <article className={styles.priceBox}>
                  <h3>Obsługa zmiany umowy u notariusza</h3>
                  <p className={styles.priceLine}><strong>od 1 100 zł netto</strong></p>
                  <p>Sprawdzamy umowę, przygotowujemy projekt zmiany, dokumenty potrzebne w sprawie i tekst jednolity. Koordynujemy czynności z notariuszem, zgłaszamy zmianę do KRS i prowadzimy sprawę przed sądem rejestrowym do jej zakończenia.</p>
                </article>
                <article className={styles.priceBox}>
                  <h3>Obsługa zmiany umowy w S24</h3>
                  <p className={styles.priceLine}><strong>599 zł netto</strong> cena stała za obsługę</p>
                  <p>Sprawdzamy, czy zmiana jest możliwa na wzorcu. Przygotowujemy dokumenty, wskazujemy, kto je podpisuje, i prowadzimy sprawę przed sądem rejestrowym do jej zakończenia.</p>
                </article>
              </div>
              <div className={styles.readyDocs}>
                <h3>Masz już uchwałę lub protokół notarialny?</h3>
                <p>Możesz zlecić samo zgłoszenie w KRS. Sprawdzimy, czy dokumenty wystarczą do złożenia wniosku, i na tej podstawie podamy cenę obsługi.</p>
              </div>
            </div>
            <FeeTable
              caption="Opłaty i koszty zewnętrzne"
              rows={fees}
              note="Opłaty sądowe i koszt notariusza nie są częścią honorarium. Jeżeli protokół dokumentuje podwyższenie kapitału zakładowego, maksymalną taksę ustala się według kwoty, o którą kapitał rośnie."
            />
            <div className={styles.afterFees}>
              <a href="#kontakt" className={landing.primary}>Poproś o wycenę zmiany umowy</a>
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

        <section className={landing.section} aria-labelledby="kiedy">
          <div className={`${landing.container} ${styles.prose}`}>
            <h2 id="kiedy">Co wymaga zmiany umowy spółki?</h2>
            <p>Umowę zmieniasz m.in. wtedy, gdy spółka zmienia nazwę, przenosi siedzibę do innej miejscowości albo zmienia zapisane w umowie zasady reprezentacji, prawa wspólników lub przedmiot działalności. Przy podwyższeniu kapitału najpierw sprawdź, czy obecna umowa już określa maksymalną wysokość i termin podwyższenia oraz czy planowana zmiana mieści się w tych granicach.</p>
            <p>Jeśli przeprowadzasz spółkę do innej miejscowości, zobacz <Link href="/uslugi/zmiana-adresu-spolki-zoo">obsługę zmiany adresu i siedziby spółki</Link>.</p>
            <p>Jeśli nowe kody PKD mieszczą się w przedmiocie działalności określonym w umowie i wystarczy aktualizacja wpisu, zobacz <Link href="/uslugi/zmiana-kodow-pkd">usługę zmiany kodów PKD w KRS</Link>.</p>
          </div>
        </section>

        <section className={landing.tinted} aria-labelledby="jak-zglosic">
          <div className={`${landing.container} ${styles.prose}`}>
            <h2 id="jak-zglosic">Jak zgłosić zmianę umowy spółki do KRS?</h2>
            <p>Po podjęciu uchwały zarząd zgłasza zmianę elektronicznie. Przy uchwale u notariusza wniosek składa się w PRS. Jeżeli wypis aktu jest w Centralnym Repozytorium Elektronicznych Wypisów Aktów Notarialnych (CREWAN), we wniosku podaje się numer dokumentu w tym repozytorium. Przy uchwale podjętej na wzorcu wniosek składa się w S24. Do wniosku o zmianę umowy dołącza się jej tekst jednolity uwzględniający zmiany.</p>
          </div>
        </section>

        <section className={landing.faqSection} aria-labelledby="faq">
          <div className={`${landing.container} ${landing.faqGrid}`}>
            <div>
              <h2 id="faq">Najczęściej zadawane pytania</h2>
              <p>Nie ma tu Twojego pytania? <a href="#kontakt">Napisz do nas</a>.</p>
            </div>
            <div>
              <Faq items={faq} />
              <p className={styles.faqLink}><Link href="/uslugi/zmiana-wspolnika-spolki-zoo">Sprawdź obsługę zmiany wspólnika w KRS</Link></p>
            </div>
          </div>
        </section>

        <section className={landing.section} aria-labelledby="samodzielnie">
          <div className={`${landing.container} ${styles.prose}`}>
            <h2 id="samodzielnie">Składasz wniosek samodzielnie?</h2>
            <p>Jeśli możesz zmienić umowę w S24, w instrukcji znajdziesz kolejność czynności od uchwały wspólników po podpisanie i wysłanie wniosku.</p>
            <p><Link href="/artykul/zmiana-umowy-spolki-portal-s24-instrukcja">Jak złożyć wniosek o zmianę umowy spółki przez S24</Link></p>
          </div>
        </section>

        <ContactSection
          heading="Zleć zmianę umowy spółki"
          text="Podaj nazwę spółki i opisz, które postanowienia chcesz zmienić. Napisz, jeśli masz już uchwałę lub termin u notariusza. Sprawę prowadzi radca prawny."
        />
      </main>
      <Footer className={landing.footer} />
    </div>
  )
}
