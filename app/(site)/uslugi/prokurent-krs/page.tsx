import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { brandName, organizationSchema } from "@/lib/seo";
import InlineContactForm from "../_components/InlineContactForm";
import styles from "./page.module.css";

const pageUrl = "https://zmianakrs.pl/uslugi/prokurent-krs";
const title = "Prokura w spółce z o.o. – wpis, zmiana i wykreślenie w KRS";
const description =
  "Ustanawiasz, zmieniasz lub odwołujesz prokurę w spółce z o.o.? Sprawdź koszt i zleć przygotowanie dokumentów oraz zgłoszenie prokurenta do KRS online.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: brandName,
    images: [
      {
        url: "https://zmianakrs.pl/images/krs-services.png",
        width: 1200,
        height: 630,
        alt: "Prokura w spółce z o.o. – ZmianaKRS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "https://zmianakrs.pl/images/krs-services.png",
        alt: "Prokura w spółce z o.o. – ZmianaKRS",
      },
    ],
  },
};
const faq = [
  {
    question: "Czym się różni prokura samoistna od łącznej?",
    answer:
      "Przy prokurze samoistnej prokurent działa sam w granicach umocowania. Przy łącznej działa wspólnie z innymi prokurentami w określony sposób. Można też udzielić prokury wykonywanej z członkiem zarządu. Przy prokurze łącznej i wykonywanej z członkiem zarządu we wniosku do KRS podaj sposób jej wykonywania.",
  },
  {
    question: "Czy ustanowienie prokury wymaga zmiany umowy spółki?",
    answer:
      "Zwykle wystarczy decyzja zarządu i prawidłowe udzielenie prokury. Dotyczy to również prokury wykonywanej wspólnie z członkiem zarządu. Jeżeli równocześnie chcesz zmienić sposób reprezentacji zarządu zapisany w umowie, [sprawdź obsługę zmiany umowy spółki](/uslugi/zmiana-umowy-spolki-zoo).",
  },
  {
    question: "Czy prokurenta trzeba zgłosić do KRS?",
    answer:
      "Tak. Spółka ma na to co do zasady 7 dni od skutecznego udzielenia prokury. Prokurent może działać już od jej skutecznego udzielenia. Wpis ujawnia jego umocowanie. Do czasu wpisu bank lub kontrahent może poprosić o dokument prokury.",
  },
  {
    question: "Kto powołuje prokurenta w spółce z o.o.?",
    answer:
      "Zarząd. Jeśli umowa spółki nie stanowi inaczej, w zarządzie wieloosobowym potrzebna jest zgoda wszystkich członków. Co do zasady prokurę może odwołać każdy członek zarządu. [Zobacz poradnik o ustanowieniu i zgłoszeniu prokury](/artykul/prokurent-krs-ustanowienie-prokury-wpis).",
  },
  {
    question: "Ile trwa wpis prokurenta?",
    answer:
      "Ustawa przewiduje co do zasady 7 dni na rozpoznanie wniosku od jego wpływu do sądu. Jeżeli sąd wezwie do usunięcia przeszkody, termin na rozpoznanie biegnie od jej usunięcia. Faktyczna data wpisu zależy od przebiegu sprawy.",
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
      url: `${pageUrl}#zakres`,
      description: "Standardowy wpis jednego prokurenta samoistnego",
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
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      },
    })),
  },
];

function renderAnswer(answer: string) {
  return answer.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return link ? (
      <a key={i} href={link[2]}>
        {link[1]}
      </a>
    ) : (
      part
    );
  });
}

export default function ProkuraPage() {
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
                  Jeśli powołujesz prokurenta, trzeba prawidłowo udzielić mu
                  prokury i zgłosić ją do KRS. Gdy zmieniasz rodzaj prokury albo
                  prokurent przestaje działać w imieniu spółki, trzeba
                  zaktualizować wpis. Przygotujemy dokumenty i przeprowadzimy
                  zgłoszenie online. Możesz też zlecić nam wniosek na podstawie
                  gotowych dokumentów.
                </p>

                <p>
                  <a className={styles.primary} href="#kontakt">
                    Zleć zgłoszenie prokury do KRS
                  </a>
                  <br />
                  <a href="tel:+48572234779">572 234 779</a> ·{" "}
                  <a href="mailto:biuro@zmianakrs.pl">biuro@zmianakrs.pl</a>
                </p>
              </div>
              <aside className={styles.priceCard}>
                <p className={styles.heroPrice}>
                  <strong>od 499 zł netto</strong>
                </p>
                <p>standardowy wpis jednego prokurenta samoistnego</p>
              </aside>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Jakiej zmiany dotyczącej prokury potrzebujesz?</h2>
            <div className={styles.scenarios}>
              <article className={styles.scenario}>
                <h3>Ustanowienie prokury i wpis prokurenta do KRS</h3>
                <p>
                  Chcesz, by wskazana osoba mogła podpisywać umowy w imieniu
                  spółki. Ustalimy, czy ma działać samodzielnie, z innym
                  prokurentem czy z członkiem zarządu. Przygotujemy zgłoszenie
                  do KRS.
                </p>
              </article>

              <article className={styles.scenario}>
                <h3>Zmiana prokurenta lub rodzaju prokury</h3>
                <p>
                  Jeśli jedna osoba zastępuje drugą, zgłosimy wykreślenie
                  dotychczasowego prokurenta i wpis nowego. Jeśli osoba zostaje,
                  a zmienia się sposób jej działania, przygotujemy dokumenty do
                  zmiany rodzaju prokury lub sposobu jej wykonywania. Możemy też
                  zgłosić zmianę danych prokurenta.
                </p>
              </article>

              <article className={styles.scenario}>
                <h3>Odwołanie prokury, rezygnacja i wykreślenie prokurenta</h3>
                <p>
                  Zgłaszamy wykreślenie po odwołaniu, rezygnacji lub wygaśnięciu
                  prokury, np. po śmierci prokurenta. Sprawdzimy podstawę
                  wykreślenia i zgłosimy ją w PRS.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className={styles.tinted}>
          <div className={styles.container}>
            <h2>Co obejmuje obsługa prokury?</h2>
            <div className={styles.offers}>
              <article className={styles.addressOffer}>
                <h3>Pełna obsługa z przygotowaniem dokumentów</h3>
                <p>
                  Sprawdzamy umowę spółki i zasady reprezentacji. Przygotowujemy
                  uchwałę i dokument udzielenia prokury albo dokumenty do jej
                  zmiany lub odwołania, zależnie od sprawy. Przy wpisie nowego
                  prokurenta przygotowujemy potrzebne oświadczenia. Ustalamy,
                  kto podpisuje dokumenty i jak je złożyć.
                </p>
              </article>

              <article className={styles.addressOffer}>
                <h3>Zgłoszenie na gotowych dokumentach</h3>
                <p>
                  Jeśli dokumenty są już podpisane, sprawdzamy ich kompletność,
                  podpisy i zgodność danych z wnioskiem. Dajemy znać, jeśli
                  potrzebne są uzupełnienia. Zakres przygotowania nowych
                  dokumentów uzgadniamy przed zleceniem.
                </p>
              </article>
            </div>

            <p>
              W obu wariantach przygotowujemy wniosek i prowadzimy zgłoszenie. W
              PRS możemy podpisać i złożyć wniosek jako pełnomocnik spółki. Przy
              S24 ustalamy, kto podpisze i wyśle wniosek w systemie.
              Postępowanie przed sądem rejestrowym prowadzimy w uzgodnionym
              zakresie i informujemy o jego wyniku.
            </p>
          </div>
        </section>
        <section className={styles.tinted}>
          <div className={styles.container}>
            <h2 id="zakres">
              Ile kosztuje ustanowienie, zmiana lub wykreślenie prokury?
            </h2>

            <p>Obsługa prokury od 499 zł netto.</p>

            <p>
              Przykład standardowej sprawy to wpis jednego prokurenta
              samoistnego w spółce z o.o., z przygotowaniem dokumentów i
              zgłoszeniem do KRS, przy typowej reprezentacji i bez dodatkowych
              zmian. Cenę potwierdzamy przed zleceniem. Jeśli masz gotowe
              dokumenty albo zgłaszasz kilka zmian, wyceniamy zakres po
              sprawdzeniu sprawy.
            </p>

            <table className={styles.fees}>
              <thead>
                <tr>
                  <th scope="col">Opłata zewnętrzna</th>
                  <th scope="col">Kwota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Opłata zewnętrzna">
                    Wniosek o zmianę wpisu w PRS
                  </td>
                  <td data-label="Kwota">250 zł</td>
                </tr>
                <tr>
                  <td data-label="Opłata zewnętrzna">
                    Wniosek o ustanowienie prokury przez S24 z użyciem wzorca
                  </td>
                  <td data-label="Kwota">200 zł</td>
                </tr>
                <tr>
                  <td data-label="Opłata zewnętrzna">
                    Złożenie odrębnego pełnomocnictwa procesowego, jeśli opłata
                    jest należna
                  </td>
                  <td data-label="Kwota">17 zł</td>
                </tr>
              </tbody>
            </table>

            <p>
              Opłaty urzędowe rozliczamy oddzielnie.{" "}
              <a href="/cennik">Zobacz cennik obsługi zmian w KRS</a>.<br />
              <a href="#kontakt">Poproś o wycenę zgłoszenia prokury</a>
            </p>
          </div>
        </section>
        <section className={styles.cooperation}>
          <div className={styles.container}>
            <h2>Jak wygląda współpraca?</h2>

            <ol className={styles.steps}>
              <li>
                <span className={styles.stepNumber} aria-hidden="true">
                  1
                </span>
                Krótko opisujesz zmianę i piszesz, czy dokumenty są gotowe.
                Jeśli masz numer KRS, podaj go w wiadomości.
              </li>
              <li>
                <span className={styles.stepNumber} aria-hidden="true">
                  2
                </span>
                Potwierdzamy zakres, cenę i tryb zgłoszenia. Jeśli
                przygotowujemy dokumenty, przekazujemy je do podpisu.
              </li>
              <li>
                <span className={styles.stepNumber} aria-hidden="true">
                  3
                </span>
                Przeprowadzamy zgłoszenie w uzgodnionym trybie i przekazujemy
                informację o rozstrzygnięciu.
              </li>
            </ol>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Składasz wniosek samodzielnie?</h2>

            <p>
              Spółka ma co do zasady 7 dni na złożenie wniosku od zdarzenia,
              które uzasadnia wpis, zmianę lub wykreślenie. Wniosek składasz
              elektronicznie w Portalu Rejestrów Sądowych (PRS). Jeśli spółka
              spełnia warunki S24, możesz ustanowić prokurę na wzorcu w tym
              systemie i zgłosić jej wpis. Zmianę rodzaju już wpisanej prokury
              lub wykreślenie prokurenta zgłaszasz w PRS.
            </p>

            <p>
              Do wpisu potrzebujesz dokumentu udzielenia prokury i oświadczenia
              o adresie do doręczeń prokurenta. Co do zasady dołączasz też jego
              zgodę na powołanie. Przy wykreśleniu dołącz dokument, z którego
              wynika, dlaczego i kiedy prokura ustała.
            </p>

            <p>
              <a href="/artykul/prokurent-krs-ustanowienie-prokury-wpis">
                Jak zgłosić prokurenta do KRS w PRS lub S24
              </a>
            </p>
          </div>
        </section>
        <section className={styles.tinted}>
          <div className={styles.container}>
            <h2>Najczęściej zadawane pytania</h2>
            <div className={styles.faq}>
              {faq.map(({ question, answer }) => (
                <article key={question}>
                  <h3>{question}</h3>
                  <p>{renderAnswer(answer)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="kontakt" className={styles.contact}>
          <div className={`${styles.container} ${styles.contactGrid}`}>
            <div>
              <h2>Zleć zgłoszenie prokury do KRS</h2>

              <p>
                Napisz, czy chodzi o ustanowienie, zmianę czy wykreślenie
                prokury i czy dokumenty są już gotowe. Jeśli masz numer KRS,
                wpisz go w wiadomości. Sprawę prowadzi radca prawny.
              </p>

              <p>
                <a href="tel:+48572234779">572 234 779</a> ·{" "}
                <a href="mailto:biuro@zmianakrs.pl">biuro@zmianakrs.pl</a>
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
