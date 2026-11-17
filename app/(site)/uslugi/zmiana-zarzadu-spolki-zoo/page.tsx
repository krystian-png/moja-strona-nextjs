import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, ArrowRight, BookOpen, Check, UserPlus, UserMinus, LogOut, Users, FilePenLine } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"
import InlineContactForm from "../_components/InlineContactForm"
import styles from "./page.module.css"

const pagePath = "/uslugi/zmiana-zarzadu-spolki-zoo"
const pageUrl = `${siteUrl}${pagePath}`
const title = "Zmiana zarządu spółki z o.o. w KRS – obsługa online"
const description = "Powołanie, odwołanie lub rezygnacja członka zarządu spółki z o.o.? Sprawdź dokumenty, zakres obsługi i zleć zgłoszenie zmiany w KRS."
const resignationArticle = "/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs"
const applicationGuide = "/artykul/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci"
const situations = [
  {
    "id": "powolanie",
    "title": "Powołanie członka zarządu",
    "text": "Co do zasady członka zarządu powołują wspólnicy uchwałą, ale umowa spółki może przewidywać inny sposób (art. 201 § 4 k.s.h.). Ustalamy, kto w Twojej spółce jest do tego uprawniony, przygotowujemy uchwałę lub inny dokument powołania, oświadczenie nowego członka zarządu o zgodzie na powołanie i adresie do doręczeń oraz zgłoszenie do KRS.",
    "label": "Powołanie",
    "sub": "Nowy członek zarządu"
  },
  {
    "id": "odwolanie",
    "title": "Odwołanie członka zarządu",
    "text": "Odwołanie, podobnie jak powołanie, następuje co do zasady uchwałą wspólników, chyba że umowa spółki stanowi inaczej. Sprawdzamy, kto podjął decyzję, od kiedy jest skuteczna, kto zostaje w zarządzie i kto podpisze wniosek.",
    "label": "Odwołanie",
    "sub": "Zmiana składu organu"
  },
  {
    "id": "rezygnacja",
    "title": "Rezygnacja członka zarządu",
    "text": "Rezygnacja jest oświadczeniem członka zarządu. Sprawdzimy, komu i kiedy złożono rezygnację. Jeśli w zarządzie nie ma zostać nikt, sprawdzimy też umowę spółki i tryb z art. 202 § 6 k.s.h.",
    "label": "Rezygnacja",
    "sub": "Ustąpienie z funkcji"
  },
  {
    "id": "prezes",
    "title": "Zmiana prezesa zarządu",
    "text": "Zmiana prezesa może wiązać się z powołaniem lub odwołaniem członka zarządu albo jedynie ze zmianą funkcji w istniejącym składzie. Sprawdzamy postanowienia umowy spółki i ustalamy, jakich dokumentów wymaga zmiana.",
    "label": "Zmiana prezesa",
    "sub": "Nowy prezes zarządu"
  },
  {
    "id": "dane-czlonka",
    "title": "Zmiana danych członka zarządu",
    "text": "Zmiana nazwiska członka zarządu ujawnionego w KRS wymaga wniosku o zmianę wpisu. Adres do doręczeń nie jest wpisywany do rejestru – jego zmianę zgłasza się do akt rejestrowych, bez opłaty sądowej. Może to zrobić spółka albo sam członek zarządu (art. 19a ust. 5b i 5c ustawy o KRS). Nie każda zmiana danych oznacza powołanie nowego członka zarządu.",
    "label": "Zmiana danych członka zarządu",
    "sub": "Nazwisko lub adres do doręczeń"
  }
]
const icons = [UserPlus, UserMinus, LogOut, Users, FilePenLine]
const faq = [
  {
    "question": "Czy powołanie nowego członka zarządu wymaga notariusza?",
    "answer": "Zwykle nie. Najczęściej wystarczy uchwała wspólników albo innego organu wskazanego w umowie spółki. Jeżeli jednocześnie trzeba zmienić umowę spółki lub występuje szczególna forma czynności, ustalimy to na podstawie dokumentów."
  },
  {
    "question": "Czy rezygnacja członka zarządu wymaga uchwały wspólników?",
    "answer": "Nie. Rezygnacja jest oświadczeniem woli i nie wymaga przyjęcia przez wspólników. Liczy się to, komu i jak złożysz rezygnację. Jeśli po rezygnacji w zarządzie nie zostanie nikt, składasz ją wspólnikom i zwołujesz ich zgromadzenie, chyba że umowa przewiduje inny sposób."
  },
  {
    "question": "Czy można zgłosić zmianę prezesa bez zmiany składu zarządu?",
    "answer": "Tak, jeżeli zmienia się funkcja jednej z osób już zasiadających w zarządzie. Rodzaj dokumentów i zakres wpisu zależą od umowy spółki i sposobu obsadzenia tej funkcji."
  },
  {
    "question": "Czy wszystkie zmiany zarządu można zgłosić w S24?",
    "answer": "Nie. Możliwość użycia S24 zależy od rodzaju czynności i sytuacji konkretnej spółki. W pozostałych przypadkach korzysta się z PRS."
  },
  {
    "question": "Czy mogę zlecić tylko zgłoszenie do KRS na gotowych dokumentach?",
    "answer": "Tak. Napisz, jakie dokumenty masz. Sprawdzimy je i ustalimy zakres obsługi przed rozpoczęciem pracy."
  },
  {
    "question": "Ile trwa zmiana zarządu w KRS?",
    "answer": "Przepisy przewidują, że sąd rejestrowy rozpoznaje wniosek w ciągu 7 dni od jego wpływu. Faktyczny czas zależy jednak m.in. od obciążenia sądu i ewentualnych wezwań. Daty wpisu nie gwarantujemy."
  }
]
const knowledge = [
  {
    "title": "Jak zgłosić zmianę zarządu do KRS?",
    "paragraphs": [
      "Najpierw przygotuj dokument potwierdzający zmianę, np. uchwałę o powołaniu lub odwołaniu, albo oświadczenie o rezygnacji z dowodem jej złożenia. Dołącz go do wniosku o zmianę danych zarządu. Wniosek składa się elektronicznie przez Portal Rejestrów Sądowych (PRS) albo – gdy jest to dopuszczalne – przez system S24.",
      "PRS jest standardową ścieżką. S24 nie jest dostępny automatycznie przy każdej zmianie i w każdej spółce. Tryb ustalamy na podstawie stanu prawnego i dokumentów spółki."
    ]
  },
  {
    "title": "Jakie dokumenty są potrzebne do zmiany zarządu w KRS?",
    "paragraphs": [
      "Lista zależy od tego, co zmienia się w spółce. Najczęściej potrzebna jest uchwała o powołaniu lub odwołaniu, oświadczenie nowo powołanej osoby o zgodzie na powołanie i jej adres do doręczeń, a w przypadku rezygnacji – dokument pozwalający wykazać skuteczność oświadczenia. Do wniosku dołącza się załączniki wymagane w danym trybie, a gdy działa pełnomocnik – właściwe pełnomocnictwo.",
      "Oświadczenia o zgodzie nie trzeba dołączać, jeżeli nowy członek zarządu sam podpisuje wniosek albo udzielił pełnomocnictwa do jego złożenia, a także gdy jego zgoda wynika z protokołu z posiedzenia organu, który go powołał, lub z umowy spółki (art. 19a ust. 5 ustawy o KRS)."
    ]
  },
  {
    "title": "Kto podpisuje wniosek do KRS?",
    "paragraphs": [
      "Wniosek podpisują osoby uprawnione do reprezentowania spółki albo ustanowiony pełnomocnik procesowy, zależnie od trybu i sposobu działania. KRS może jeszcze pokazywać poprzedni skład zarządu. Przed złożeniem wniosku sprawdzamy w dokumentach, kto może reprezentować spółkę.",
      "Dokumenty sporządzone elektronicznie opatruje się kwalifikowanym podpisem elektronicznym, podpisem zaufanym albo podpisem osobistym. Dokumenty papierowe dołącza się jako odpisy poświadczone elektronicznie przez notariusza albo pełnomocnika będącego adwokatem lub radcą prawnym. Jeżeli dołączy się zwykłe skany, oryginały trzeba przesłać do sądu w ciągu 3 dni (art. 694⁴ k.p.c.). Gdy prowadzimy sprawę jako pełnomocnik, sami poświadczamy odpisy dokumentów."
    ]
  },
  {
    "title": "W jakim terminie zgłosić zmianę zarządu?",
    "paragraphs": [
      "Wniosek o zmianę wpisu w KRS składa się w terminie 7 dni od zdarzenia uzasadniającego wpis, chyba że przepis szczególny stanowi inaczej (art. 22 ustawy o KRS). To termin na złożenie wniosku przez spółkę. Sąd rejestrowy powinien rozpoznać wniosek w terminie 7 dni od jego wpływu (art. 20a ust. 1 ustawy o KRS), ale daty wpisu nie da się zagwarantować."
    ]
  },
  {
    "title": "Od kiedy powołanie, odwołanie lub rezygnacja są skuteczne?",
    "paragraphs": [
      "Co do zasady wpis zmiany członka zarządu do KRS potwierdza zdarzenie, które nastąpiło wcześniej. Moment skuteczności zależy od rodzaju czynności, treści uchwały lub skutecznego złożenia oświadczenia. Szczególne zasady dotyczą m.in. rezygnacji, gdy po niej żaden mandat w zarządzie nie byłby obsadzony."
    ]
  }
]
const steps = [
  {
    "title": "Ustalamy sytuację spółki.",
    "text": "Opisujesz zmianę i piszesz, czy masz już uchwałę lub inne dokumenty. Mówimy, co przygotować i gdzie złożyć wniosek."
  },
  {
    "title": "Przygotowujemy dokumentację.",
    "text": "Sporządzamy wymagane dokumenty albo weryfikujemy dokumenty klienta, ustalamy osoby podpisujące i kompletujemy załączniki."
  },
  {
    "title": "Zgłaszamy zmianę do KRS.",
    "text": "Składamy wniosek w PRS lub S24 i informujemy, jak przebiega sprawa w sądzie."
  }
]
const fees = [
  [
    "Opłata sądowa od wniosku o zmianę wpisu w KRS",
    "250 zł"
  ],
  [
    "Opłata sądowa w S24 za zmianę dokonaną uchwałą na wzorcu",
    "200 zł"
  ],
  [
    "Zgłoszenie zmiany adresu do doręczeń członka zarządu",
    "bez opłaty sądowej"
  ],
  [
    "Opłata skarbowa od dokumentu pełnomocnictwa, jeśli jest należna",
    "17 zł"
  ],
  [
    "Notariusz, jeśli dana czynność go wymaga",
    "zależnie od czynności"
  ]
]

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${title} | ${brandName}`, description, url: pageUrl, siteName: brandName,
    images: [{ url: `${siteUrl}/images/krs-services.png`, width: 1200, height: 630, alt: "Zmiana zarządu spółki z o.o. w KRS" }],
  },
  twitter: { card: "summary_large_image", title: `${title} | ${brandName}`, description, images: [`${siteUrl}/images/krs-services.png`] },
}

const schemas = [
  {
    "@context": "https://schema.org", "@type": "Service", name: "Zmiana zarządu spółki z o.o. w KRS", url: pageUrl, description,
    provider: { "@id": organizationSchema["@id"] }, areaServed: { "@type": "Country", name: "Poland" },
    offers: { "@type": "Offer", url: `${pageUrl}#zakres`, description: "od 499 zł netto dla typowej pełnej obsługi",
      priceSpecification: { "@type": "PriceSpecification", minPrice: 499, priceCurrency: "PLN", valueAddedTaxIncluded: false } },
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Usługi", item: `${siteUrl}/uslugi` },
      { "@type": "ListItem", position: 3, name: "Zmiana zarządu spółki z o.o. w KRS", item: pageUrl },
    ],
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
  })) },
]

export default function ZmianaZarzaduPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
      <Navbar contactAction={{ href: "#kontakt", label: "Opisz sprawę" }} />
      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div>
              <h1>Zmiana zarządu spółki z o.o. w KRS</h1>
              <p>Powołujesz lub odwołujesz członka zarządu? Ktoś złożył rezygnację albo zmienia się prezes? Przygotujemy dokumenty i złożymy wniosek do KRS.</p>
              <p>Sprawdzimy, czy spółka może skorzystać z S24, czy wniosek trzeba złożyć w PRS. Przed przyjęciem zlecenia powiemy, jakich dokumentów potrzebujemy.</p>
              <p className={styles.serviceLine}>Obsługa zdalna · Zgłoszenie przez PRS lub S24</p>
            </div>
            <div className={styles.priceCard}>
              <p className={styles.heroPrice}>Zmiana zarządu <strong>od 499 zł netto</strong></p>
              <p>W typowej sprawie przygotowujemy potrzebne dokumenty i zgłaszamy zmianę do KRS.</p>
              <a href="#kontakt" className={styles.primary}>Zleć zmianę zarządu <ArrowUpRight aria-hidden="true" size={20} /></a>
              <a href="#zakres" className={styles.secondary}>Zakres i cena <ArrowDown aria-hidden="true" size={18} /></a>
            </div>
          </div>
        </section>

        <section className={styles.tinted}>
          <div className={styles.container}>
            <p className={styles.eyebrow} aria-hidden="true">Sytuacje</p>
            <h2>Jaką zmianę zarządu chcesz zgłosić?</h2>
            <p>Wybierz sytuację dotyczącą Twojej spółki. Pokażemy, jakie formalności są potrzebne i co możemy przygotować.</p>
            <div className={styles.situationGrid}>
              {situations.map(({ id, title, sub, text }, index) => {
                const Icon = icons[index]
                return <article id={id} key={id} className={styles.situationCard}>
                  <div className={styles.situationHeading}>
                    <span className={styles.icon}><Icon aria-hidden="true" size={22} /></span>
                    <h3>{title}</h3>
                    <p className={styles.situationSub}>{sub}</p>
                  </div>
                  <div className={styles.situationBody}>
                    <p>{text}</p>
                    <div className={styles.cardFooter}>
                      <a href="#kontakt">Opisz tę zmianę →</a>
                      {id === "rezygnacja" && <Link href={resignationArticle}>Rezygnacja członka zarządu – szczególne przypadki</Link>}
                    </div>
                  </div>
                </article>
              })}
            </div>
          </div>
        </section>

        <section id="zakres" className={styles.scope}>
          <div className={styles.container}>
            <p className={styles.eyebrow} aria-hidden="true">Zakres i cena</p>
            <h2>Co obejmuje obsługa zmiany zarządu?</h2>
            <p>Przygotujemy dokumenty i złożymy wniosek. Masz już podpisane dokumenty? Sprawdzimy je i powiemy, czy można złożyć wniosek na ich podstawie.</p>
            <div className={styles.offerGrid}>
              <article className={styles.fullOffer}>
                <h3>Pełna obsługa zmiany zarządu</h3>
                <p className={styles.offerPrice}>Zmiana zarządu <strong>od 499 zł netto</strong></p>
                <p>Sprawdzamy umowę spółki i dokumenty, przygotowujemy wymaganą uchwałę oraz inne potrzebne dokumenty, kompletujemy załączniki i zgłaszamy zmianę zarządu do KRS. Przy rezygnacji pomagamy ustalić, komu ją złożyć i jakie dokumenty przygotować.</p>
                <p className={styles.listTitle}>Zakres typowej sprawy w punktach:</p>
                <ul>
                  <li><Check aria-hidden="true" size={20} /><span>Sprawdzenie sytuacji spółki i trybu zgłoszenia.</span></li>
                  <li><Check aria-hidden="true" size={20} /><span>Uchwała o powołaniu lub odwołaniu albo dokumenty rezygnacji oraz pozostałe załączniki.</span></li>
                  <li><Check aria-hidden="true" size={20} /><span>Przygotowanie wniosku PRS/S24, ustalenie podpisów i zgłoszenie zmiany do KRS.</span></li>
                </ul>
                <a href="#kontakt" className={styles.primary}>Opisz zmianę zarządu <ArrowUpRight aria-hidden="true" size={20} /></a>
                <Link href="/cennik">Zobacz wszystkie ceny usług KRS</Link>
              </article>
              <article className={styles.readyOffer}>
                <h3>Masz już dokumenty? Obsługa zgłoszenia do KRS</h3>
                <p>Masz już przygotowane i podpisane dokumenty? Napisz, czym dysponujesz – sprawdzimy ich kompletność i ustalimy zakres zgłoszenia do KRS.</p>
                <a href="#kontakt" className={styles.secondary}>Opisz swoje dokumenty <ArrowUpRight aria-hidden="true" size={20} /></a>
              </article>
            </div>
            <p className={styles.note}>Podane ceny są kwotami netto za obsługę prawną. Opłaty sądowe i ewentualne koszty zewnętrzne rozliczamy osobno.</p>
          </div>
        </section>

        <section className={styles.cooperation}>
          <div className={styles.container}>
            <p className={styles.eyebrow} aria-hidden="true">Współpraca</p>
            <h2>Jak przeprowadzimy zmianę zarządu?</h2>
            <ol className={styles.steps}>{steps.map(({ title, text }, index) => <li key={title}>
              <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </li>)}</ol>
          </div>
        </section>

        <section className={styles.tinted}>
          <div className={styles.container}>
            <p className={styles.eyebrow} aria-hidden="true">Formalności i opłaty</p>
            <div className={styles.knowledgeGrid}>
              {knowledge.map(({ title, paragraphs }, index) => <div key={title} className={styles.knowledge}>
                <h2>{title}</h2>{paragraphs.map(text => <p key={text}>{text}</p>)}
                {index === 0 && <Link href={applicationGuide}>Jak przygotować i złożyć wniosek o zmianę zarządu w KRS – PRS i S24</Link>}
              </div>)}
              <div className={styles.knowledge}><h2>Co po zmianie wpisu w KRS?</h2><p>Po wpisie sprawdź, czy bank, główni kontrahenci i osoby obsługujące spółkę posługują się aktualnymi danymi zarządu. Jeżeli członek zarządu był zgłoszony do Centralnego Rejestru Beneficjentów Rzeczywistych jako beneficjent rzeczywisty zajmujący wyższe stanowisko kierownicze, spółka aktualizuje to zgłoszenie w terminie 14 dni od zmiany w KRS. Inne obowiązki wobec urzędów lub rejestrów zależą od konkretnej sytuacji.</p></div>
            </div>
            <div className={styles.feeCard}>
              <div>
                <h2>Ile kosztuje wpis zmiany zarządu do KRS?</h2>
                <p>Poniżej są opłaty i inne koszty, które mogą dojść do honorarium za obsługę prawną.</p>
                <p>Od 29 listopada 2025 r. nie pobiera się dodatkowej opłaty za obowiązkowe ogłoszenie wpisu KRS w Monitorze Sądowym i Gospodarczym.</p>
                <Link href="/cennik">Zobacz pełny cennik usług</Link>
              </div>
              <table className={styles.fees}>
                <caption>Opłaty i koszty zewnętrzne</caption>
                <thead><tr><th scope="col">Rodzaj</th><th scope="col">Kwota</th></tr></thead>
                <tbody>{fees.map(([kind, amount]) => <tr key={kind}><th scope="row">{kind}</th><td>{amount}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.eyebrow} aria-hidden="true">Poradniki</p>
            <h2>Gdzie znaleźć szczegółowe informacje?</h2>
            <ul className={styles.reading}>
              <li><Link href={resignationArticle} className={styles.readingCard}><span className={styles.icon}><BookOpen aria-hidden="true" size={22} /></span><span>Rezygnacja członka zarządu spółki z o.o. – skuteczność oświadczenia, szczególne przypadki i zgłoszenie do KRS</span><ArrowRight aria-hidden="true" size={22} /></Link></li>
              <li><Link href={applicationGuide} className={styles.readingCard}><span className={styles.icon}><BookOpen aria-hidden="true" size={22} /></span><span>Wniosek o zmianę zarządu w KRS – procedura PRS i S24, podpisy, załączniki i opłaty</span><ArrowRight aria-hidden="true" size={22} /></Link></li>
            </ul>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`${styles.container} ${styles.faqGrid}`}>
            <div>
              <p className={styles.eyebrow} aria-hidden="true">FAQ</p>
              <h2>Najczęstsze pytania</h2>
              <p>Nie ma tu Twojego pytania?</p>
              <a href="#kontakt" className={styles.questionButton}>Zadaj pytanie</a>
            </div>
            <div className={styles.faq}>{faq.map(({ question, answer }) => <details key={question}>
              <summary><h3>{question}</h3></summary><p>{answer}</p>
            </details>)}</div>
          </div>
        </section>

        <section id="kontakt" className={styles.contact}>
          <div className={`${styles.container} ${styles.contactGrid}`}>
            <div>
              <h2>Zleć zgłoszenie zmiany zarządu</h2>
              <p>Napisz, kogo chcesz wpisać lub wykreślić z KRS i czy dokumenty są już podpisane.</p>
              <address className={styles.contactDetails}>
                <p>Telefon: <a href="tel:+48572234779">572 234 779</a></p>
                <p>E-mail: <a href="mailto:biuro@zmianakrs.pl">biuro@zmianakrs.pl</a></p>
              </address>
            </div>
            <div className={styles.contactForm}><InlineContactForm className="max-w-none" /></div>
          </div>
        </section>
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}
