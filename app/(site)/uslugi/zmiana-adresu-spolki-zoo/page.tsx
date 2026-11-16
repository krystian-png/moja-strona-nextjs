import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { brandName, organizationSchema } from "@/lib/seo";
import InlineContactForm from "../_components/InlineContactForm";
import styles from "./page.module.css";

const pageUrl = "https://zmianakrs.pl/uslugi/zmiana-adresu-spolki-zoo";
const title = "Zmiana adresu i siedziby spółki z o.o. w KRS";
const description =
  "Ta sama miejscowość czy inna? Sprawdź, kiedy wystarczy uchwała zarządu, kiedy zmienić umowę spółki, ile kosztuje wpis i jak przeprowadzimy zgłoszenie.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${title} | ${brandName}`,
    description,
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: "https://zmianakrs.pl/images/krs-services.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${brandName}`,
    description,
    images: ["https://zmianakrs.pl/images/krs-services.png"],
  },
};
const faq = [
  {
    question: "Ile mam czasu na zgłoszenie do KRS?",
    paragraphs: [
      "Wniosek należy złożyć w terminie 7 dni od zdarzenia uzasadniającego wpis. Przy zmianie adresu jest to co do zasady dzień zmiany wskazany w uchwale zarządu. Przy zmianie siedziby licz ten termin od podjęcia uchwały zmieniającej umowę spółki.",
      "Przy zmianie siedziby obowiązuje też drugi, ważniejszy termin. Zmiana umowy, której nie zgłoszono do sądu rejestrowego w ciągu 6 miesięcy od jej podjęcia, nie wywołuje skutków prawnych (uchwała Sądu Najwyższego z 29 kwietnia 2022 r., III CZP 75/22). Jeżeli umowę zmieniono na wzorcu w S24, termin ten wynosi 7 dni (art. 256 § 3 w zw. z art. 169 § 2 k.s.h.).",
    ],
  },
  {
    question: "Od kiedy zmiana jest skuteczna?",
    paragraphs: [
      "Zmiana siedziby jest skuteczna od dnia wpisu do KRS. Jeżeli zmieniasz sam adres w tej samej miejscowości i umowa spółki pozostaje bez zmian, zmiana jest co do zasady skuteczna z dniem wskazanym w uchwale zarządu, a wpis ujawnia nowy adres. Do czasu aktualizacji KRS zadbaj o odbiór pism pod dotychczasowym adresem.",
    ],
  },
  {
    question: "Czy przeprowadzkę można załatwić przez S24?",
    paragraphs: [
      "Zmianę siedziby można przeprowadzić w S24, jeżeli umowę spółki zawarto na wzorcu, nie zmieniano jej później poza wzorcem, a postanowienie o siedzibie można zmienić w tym systemie. W przeciwnym razie uchwałę zmieniającą umowę protokołuje notariusz, a wniosek składa się w PRS. Przy samej zmianie adresu sprawdzimy, czy spółka może skorzystać z wzorca uchwały adresowej w S24.",
    ],
  },
  {
    question: "Czy mogę zgłosić przeprowadzkę razem z innymi zmianami?",
    paragraphs: [
      "Tak, jeżeli zmiany da się ująć we wspólnym wniosku. Jeśli równocześnie zmieniasz zarząd albo inne postanowienia umowy, ustalimy kolejność czynności i zakres zgłoszenia.",
    ],
  },
];
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: pageUrl,
    provider: organizationSchema,
    areaServed: { "@type": "Country", name: "Poland" },
    offers: {
      "@type": "Offer",
      url: `${pageUrl}#zmiana-adresu`,
      description: "Standardowa zmiana adresu w tej samej miejscowości",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 499,
        priceCurrency: "PLN",
        valueAddedTaxIncluded: false,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://zmianakrs.pl/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Usługi",
        item: "https://zmianakrs.pl/uslugi",
      },
      { "@type": "ListItem", position: 3, name: title, item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, paragraphs }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: paragraphs.join(" ") },
    })),
  },
];

export default function AddressPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar contactAction={{ href: "#kontakt", label: "Opisz sprawę" }} />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <h1>{title}</h1>
                <p>
                  Zmieniasz biuro w tej samej miejscowości? Zwykle wystarczy
                  decyzja o nowym adresie i zgłoszenie do KRS. Przy
                  przeprowadzce do innej miejscowości trzeba również zmienić
                  umowę spółki. Przygotujemy dokumenty i przeprowadzimy
                  zgłoszenie.
                </p>
                <p>
                  <a className={styles.primary} href="#kontakt">
                    Zleć zmianę adresu lub siedziby
                  </a>
                </p>
              </div>
              <aside className={styles.priceCard}>
                <p className={styles.heroPrice}>
                  <strong>od 499 zł netto</strong>
                </p>
                <p>standardowa zmiana adresu w tej samej miejscowości</p>
              </aside>
            </div>
            <div className={styles.scenarios}>
              <a href="#zmiana-adresu" className={styles.scenario}>
                <h3>Ta sama miejscowość</h3>
                <p>
                  Zmienia się ulica, numer budynku lub lokalu. Zwykle decyzję
                  podejmuje zarząd. Jeżeli w umowie spółki wpisano także pełny
                  adres, sprawdzimy, czy trzeba zmienić jej treść.
                </p>
                <span className={styles.scenarioLink}>
                  Zobacz zakres zmiany adresu →
                </span>
              </a>
              <a href="#zmiana-siedziby" className={styles.scenario}>
                <h3>Inna miejscowość</h3>
                <p>
                  Zmienia się siedziba spółki. Potrzebna jest uchwała wspólników
                  zmieniająca umowę i wpis do KRS. Sprawdzimy, czy można
                  przeprowadzić zmianę w S24, czy potrzebny będzie notariusz.
                </p>
                <span className={styles.scenarioLink}>
                  Zobacz zakres zmiany siedziby →
                </span>
              </a>
            </div>
          </div>
        </section>
        <section id="zakres" className={styles.tinted}>
          <div className={styles.container}>
            <h2>Ile kosztuje zmiana adresu lub siedziby spółki?</h2>
            <div className={styles.offers}>
              <article id="zmiana-adresu" className={styles.addressOffer}>
                <h3>Zmiana adresu w tej samej miejscowości</h3>
                <p>
                  <strong>Od 499 zł netto</strong> za obsługę standardowej zmiany adresu.
                  Sprawdzimy umowę spółki, przygotujemy potrzebne dokumenty i
                  zgłosimy nowy adres do KRS. Postępowanie przed sądem
                  rejestrowym prowadzimy w uzgodnionym zakresie. Opłatę sądową i
                  ewentualną opłatę skarbową rozliczamy osobno.
                </p>
              </article>
              <article id="zmiana-siedziby" className={styles.seatOffer}>
                <h3>Zmiana siedziby i adresu</h3>
                <p>
                  Ustalimy, jak zmienić umowę spółki, przygotujemy dokumenty i
                  zgłosimy nową siedzibę oraz adres do KRS. Jeżeli zmianę umowy
                  można przeprowadzić w S24, jej obsługa kosztuje 599 zł netto.
                  Jeżeli potrzebny jest protokół notarialny, koordynujemy
                  czynności z notariuszem, a obsługa zmiany umowy w tym
                  wariancie zaczyna się od 1 100 zł netto. Zakres i wycenę całej
                  przeprowadzki podamy przed rozpoczęciem pracy. Koszt
                  notariusza i opłaty urzędowe rozliczamy osobno.
                </p>
                <p>
                  <a href="/uslugi/zmiana-umowy-spolki-zoo">
                    Sprawdź zakres usługi zmiany umowy spółki
                  </a>
                </p>
              </article>
            </div>
            <article className={styles.readyOffer}>
              <h3>Masz już uchwałę lub inne dokumenty?</h3>
              <p>
                Napisz, jakie dokumenty są gotowe. Sprawdzimy je pod kątem
                zgłoszenia i ustalimy zakres obsługi samego wniosku.
              </p>
              <p>
                <a href="#kontakt">Opisz gotowe dokumenty</a>
              </p>
            </article>
            <div className={styles.feeCard}>
              <h3>Opłaty sądowe i pozostałe koszty</h3>
              <table className={styles.fees}>
                <caption>Opłaty sądowe i pozostałe koszty</caption>
                <thead>
                  <tr>
                    <th scope="col">Rodzaj opłaty</th>
                    <th scope="col">Kwota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Standardowy wniosek o zmianę wpisu przez PRS
                    </th>
                    <td>250 zł</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Zmiana dokonana na wzorcu uchwały w S24, gdy sprawę można
                      złożyć w tym systemie
                    </th>
                    <td>200 zł</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Opłata skarbowa od złożenia pełnomocnictwa, jeśli jest
                      należna
                    </th>
                    <td>17 zł</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Notariusz – protokół uchwały zmieniającej umowę (tylko
                      poza S24)
                    </th>
                    <td>według taksy, maksymalnie 900 zł + VAT, oraz wypisy</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Od 29 listopada 2025 r. do wniosków o zmianę wpisu nie dolicza
                się 100 zł za ogłoszenie w Monitorze Sądowym i Gospodarczym.
              </p>
              <p>
                Przykład. Przy standardowej zmianie adresu zgłaszanej przez PRS
                koszt obejmuje honorarium od 499 zł netto i 250 zł opłaty
                sądowej. Do honorarium doliczamy VAT. Jeżeli składamy
                pełnomocnictwo, dochodzi opłata skarbowa, o ile jest należna.
              </p>
              <p>
                <a href="/cennik">Zobacz cennik obsługi zmian w KRS</a>
              </p>
              <p>
                <a href="#kontakt">Opisz swoją sprawę</a>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.cooperation}>
          <div className={styles.container}>
            <h2>Jak przeprowadzimy zmianę?</h2>
            <ol className={styles.steps}>
              <li>
                <span className={styles.stepNumber} aria-hidden="true">
                  1
                </span>
                <h3>Ustalamy zakres.</h3>
                <p>
                  Podajesz nazwę spółki oraz obecny i planowany adres.
                  Sprawdzamy umowę, dotychczasowy tryb zmian w spółce i
                  dokumenty, które już masz.
                </p>
              </li>
              <li>
                <span className={styles.stepNumber} aria-hidden="true">
                  2
                </span>
                <h3>Przygotowujemy dokumenty.</h3>
                <p>
                  Ustalamy, kto podejmuje decyzję i kto podpisuje dokumenty oraz
                  wniosek. Jeżeli zmiana wymaga notariusza, uzgadniamy z nim
                  czynności.
                </p>
              </li>
              <li>
                <span className={styles.stepNumber} aria-hidden="true">
                  3
                </span>
                <h3>Zgłaszamy zmianę.</h3>
                <p>
                  Składamy wniosek w odpowiednim systemie i informujemy o
                  przebiegu postępowania przed sądem rejestrowym. Po wpisie
                  przekazujemy potwierdzenie zmiany w KRS.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.narrow}>
            <article>
              <h2>Uchwała zarządu o zmianie adresu spółki</h2>
              <p>
                Jeżeli spółka przeprowadza się w tej samej miejscowości, a
                zmiana mieści się w kompetencjach zarządu, decyzję zwykle
                dokumentuje uchwała zarządu. Sprawdź najpierw umowę spółki.
                Jeżeli wskazuje konkretną ulicę i numer, może być potrzebna
                także zmiana umowy.
              </p>
              <blockquote>
                <strong>Przykładowa treść postanowienia uchwały</strong>
                <p>
                  &quot;Zarząd [nazwa spółki] sp. z o.o. postanawia zmienić adres
                  spółki na [ulica, numer budynku i lokalu, kod pocztowy,
                  miejscowość] z dniem [data].&quot;
                </p>
              </blockquote>
              <p>
                W dokumencie podaj datę podjęcia uchwały. Ustal, kto podpisuje
                dokument zgodnie z zasadami podejmowania i dokumentowania uchwał
                zarządu. Podpis pod wnioskiem do KRS to osobna kwestia. Wniosek
                podpisują osoby uprawnione do reprezentacji spółki albo jej
                pełnomocnik procesowy.
              </p>
              <p>
                Przy zmianie miejscowości wspólnicy podejmują uchwałę
                zmieniającą postanowienie umowy o siedzibie. Do zgłoszenia
                potrzebny jest również tekst jednolity zmienionej umowy. Jeżeli
                uchwałę zaprotokołował notariusz, we wniosku w PRS wskazuje się
                numer dokumentu w CREWAN.
              </p>
            </article>
          </div>
        </section>
        <section className={styles.tinted}>
          <div className={styles.narrow}>
            <h2>Termin zgłoszenia i skuteczność zmiany</h2>
            <div className={styles.faq}>
              {faq.map(({ question, paragraphs }) => (
                <article key={question}>
                  <h3>{question}</h3>
                  {paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.narrow}>
            <article>
              <h2>Składasz wniosek samodzielnie?</h2>
              <p>
                W poradniku pokazujemy, gdzie zgłosić zmianę, jakie dane
                uzupełnić, co dołączyć do wniosku i jak go podpisać oraz wysłać.
              </p>
              <p>
                <a href="/artykul/zmiana-adresu-i-siedziby-spolki-w-krs">
                  Jak złożyć wniosek o zmianę adresu lub siedziby w PRS i S24
                </a>
              </p>
            </article>
          </div>
        </section>
        <section id="kontakt" className={styles.contact}>
          <div className={`${styles.container} ${styles.contactGrid}`}>
            <div>
              <h2>Zleć zmianę adresu lub siedziby spółki</h2>
              <p>
                Opisz krótko planowaną zmianę i napisz, czy masz już uchwałę lub
                inne dokumenty. Ustalimy, jakie formalności są potrzebne, i
                podamy zakres obsługi.
              </p>
              <p>
                <a href="mailto:biuro@zmianakrs.pl">biuro@zmianakrs.pl</a>
              </p>
              <p>
                <a href="tel:+48572234779">572 234 779</a>
              </p>
            </div>
            <div className={styles.contactForm}>
              <InlineContactForm className="max-w-none" />
            </div>
          </div>
        </section>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
