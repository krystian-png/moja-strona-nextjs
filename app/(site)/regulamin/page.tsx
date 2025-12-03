import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import backgroundImage from "@/public/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/regulamin"
const pageUrl = `${siteUrl}${pagePath}`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Regulamin świadczenia usług - warunki obsługi wniosków KRS",
  description:
    "Zapoznaj się z regulaminem świadczenia usług obsługi wniosków KRS. Warunki współpracy, prawa i obowiązki stron w procesie zmiany wpisu.",
  url: pageUrl,
  mainEntity: organizationSchema,
}

export const metadata: Metadata = {
  title: "Regulamin świadczenia usług - warunki obsługi wniosków KRS",
  description:
    "Zapoznaj się z regulaminem świadczenia usług obsługi wniosków KRS. Warunki współpracy, prawa i obowiązki stron w procesie zmiany wpisu.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "Regulamin świadczenia usług | ZmianaKRS",
    description: "Zapoznaj się z regulaminem świadczenia usług obsługi wniosków KRS.",
    url: pageUrl,
    siteName: brandName,
  },
}

export default function RegulaminPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="regulamin-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="fixed inset-0 -z-10 bg-slate-950/70" aria-hidden />

      <Navbar />

      <main className="relative z-10 flex-1">
        <section className="relative pt-20 pb-20 overflow-hidden">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h1 className="text-3xl font-bold text-white mb-8">Regulamin serwisu internetowego</h1>

                <div className="prose prose-invert max-w-none">
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 1. Postanowienia ogólne</h2>
                  <p className="text-gray-300 mb-4">
                    Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem www.zmianakrs.pl
 (dalej: &quot;Serwis&quot;) oraz zasady świadczenia usług przez Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58 (dalej: &quot;Usługodawca&quot;).
                  </p>
                  <p className="text-gray-300 mb-4">
                    Serwis prezentuje ofertę usług obsługi wniosków do KRS oraz zawiera publikacje o charakterze wyłącznie informacyjnym i edukacyjnym.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu w całości.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Regulamin jest dostępny nieodpłatnie na stronie Serwisu w formie umożliwiającej jego pobranie, utrwalenie i wydrukowanie.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługodawca prowadzi Serwis na zasadach określonych w niniejszym Regulaminie oraz zgodnie z przepisami obowiązującego prawa.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 2. Definicje</h2>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Usługodawca</strong> – podmiot świadczący usługi opisane w §1 ust. 2.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Usługobiorca</strong> – wyłącznie przedsiębiorca w rozumieniu art. 43 Kodeksu cywilnego, korzystający z usług Serwisu.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Serwis</strong> – strona internetowa pod adresem www.zmianakrs.pl.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Usługi</strong> – usługi polegające na przygotowywaniu dokumentów do wpisów i zmian w Krajowym Rejestrze Sądowym, zakładaniu spółek oraz kompleksowej obsłudze formalnej związanej ze zgłaszaniem zmian wpisów do KRS, w tym obsługi Walnych Zgromadzeń Wspólników i przygotowywania dokumentów na takie zgromadzenia oraz innych czynnościach formalnych świadczonych przez Usługodawcę.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Regulamin</strong> – niniejszy dokument.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Formularz kontaktowy</strong> – narzędzie dostępne w Serwisie, umożliwiające złożenie zapytania lub zamówienia usługi.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-white">Informacje organizacyjne</strong> – szczegóły dotyczące danej Usługi dostępne na stronie Serwisu lub przekazywane indywidualnie, w tym: zakres usługi, sposób realizacji, płatności, osoba kontaktowa.</p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 3. Wyłączenie obsługi konsumentów</h2>
                  <p className="text-gray-300 mb-4">
                    Serwis i Usługi dostępne są wyłącznie dla przedsiębiorców, tj. podmiotów prowadzących działalność gospodarczą lub zawodową.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługodawca nie świadczy usług na rzecz konsumentów w rozumieniu art. 22¹ Kodeksu cywilnego.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Osoby korzystające z Serwisu oświadczają, że działają jako przedsiębiorcy i zawierają umowy w ramach prowadzonej działalności gospodarczej.
                  </p>
                  <p className="text-gray-300 mb-4">
                    W przypadku stwierdzenia, że Usługobiorca jest konsumentem, Usługodawca zastrzega sobie prawo odmowy świadczenia usług lub rozwiązania umowy.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 4. Rodzaj i zakres usług</h2>
                  <p className="text-gray-300 mb-4">Usługodawca świadczy usługi polegające na:</p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>przygotowywaniu dokumentów niezbędnych do wpisów i zmian w KRS,</li>
                    <li>zakładaniu spółek z o.o. oraz innych podmiotów w systemie S24 lub tradycyjnym,</li>
                    <li>doradztwie formalnym i prawnym w zakresie rejestracji i zmian w KRS,</li>
                    <li>składaniu wniosków do KRS na zlecenie Usługobiorcy,</li>
                    <li>udostępnianiu przygotowanych dokumentów do podpisu i dalszej obsługi przez Usługobiorcę.</li>
                  </ul>
                  <p className="text-gray-300 mb-4">
                    Usługi są realizowane na podstawie indywidualnych ustaleń, po dostarczeniu przez Usługobiorcę wszystkich wymaganych dokumentów, w tym podpisanych pełnomocnictw, jeśli są niezbędne.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Informacje i materiały zamieszczone w Serwisie mają charakter wyłącznie ogólny i informacyjny, nie stanowią doradztwa prawnego ani oferty w rozumieniu Kodeksu cywilnego.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 5. Warunki korzystania z usług</h2>
                  <p className="text-gray-300 mb-4">
                    Do korzystania z usług niezbędne jest posiadanie urządzenia z dostępem do Internetu oraz aktywnego adresu e-mail.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługobiorca zobowiązuje się do podania danych zgodnych z prawdą i dostarczenia wymaganych dokumentów.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Zabronione jest dostarczanie treści bezprawnych lub naruszających prawa osób trzecich.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługodawca zastrzega sobie prawo do odmowy realizacji usługi w przypadku naruszenia postanowień Regulaminu lub w przypadku konfliktu interesów, naruszenia zasad etyki zawodowej lub innych okoliczności uzasadniających odmowę świadczenia usług.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługobiorca zobowiązuje się do korzystania z Serwisu i usług wyłącznie na własny użytek, z poszanowaniem praw własności intelektualnej Usługodawcy oraz osób trzecich.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 6. Warunki techniczne korzystania z Serwisu oraz bezpieczeństwo</h2>
                  <p className="text-gray-300 mb-4">
                    Do prawidłowego korzystania z Serwisu niezbędne jest posiadanie przez Usługobiorcę urządzenia końcowego (komputera, smartfona lub innego urządzenia) z dostępem do Internetu oraz aktualnej przeglądarki internetowej obsługującej standardy techniczne wykorzystywane przez Serwis.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługobiorca zobowiązany jest korzystać z Serwisu w sposób zgodny z jego przeznaczeniem oraz obowiązującymi przepisami prawa, a także zasadami współżycia społecznego.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Zabrania się podejmowania przez Usługobiorcę jakichkolwiek działań mogących zakłócić, uszkodzić lub ograniczyć prawidłowe funkcjonowanie Serwisu.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 7. Zawarcie umowy i realizacja usług</h2>
                  <p className="text-gray-300 mb-4">
                    Umowa o świadczenie usług zostaje zawarta z chwilą potwierdzenia przyjęcia zamówienia przez Usługodawcę oraz opłacenia faktury przez Usługobiorcę, chyba że strony ustalą inaczej.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Realizacja usługi rozpoczyna się po otrzymaniu wszystkich wymaganych dokumentów oraz zaksięgowaniu płatności.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługobiorca wyraża zgodę na rozpoczęcie realizacji usługi niezwłocznie po zawarciu umowy.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługobiorca traci prawo do odstąpienia od umowy po rozpoczęciu realizacji usługi.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 8. Płatności</h2>
                  <p className="text-gray-300 mb-4">
                    Wynagrodzenie za usługi określone jest w cenniku dostępnym na stronie Serwisu lub ustalane indywidualnie.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Płatność następuje na podstawie faktury elektronicznej przesłanej na adres e-mail Usługobiorcy.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Realizacja usługi następuje po zaksięgowaniu płatności.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Na wyraźną prośbę Usługobiorcy możliwe jest wystawienie faktury proforma.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 9. Ochrona danych osobowych</h2>
                  <p className="text-gray-300 mb-4">
                    Administratorem danych osobowych jest Usługodawca.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Dane przetwarzane są zgodnie z RODO w celu realizacji usług oraz wypełnienia obowiązków prawnych.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Szczegółowe informacje znajdują się w Polityce Prywatności dostępnej na stronie Serwisu.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługobiorca zobowiązany jest do przekazywania danych osobowych osób trzecich wyłącznie w zakresie i na zasadach zgodnych z obowiązującymi przepisami prawa.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 10. Klauzula dotycząca przekazywania danych osobowych</h2>
                  <p className="text-gray-300 mb-4">
                    W ramach realizacji usług Usługodawca przekazuje dane osobowe Usługobiorcy do systemów rejestrowych, w tym platformy S24, Portalu Rejestrów Sądowych (PRS) oraz bezpośrednio do sądów rejestrowych.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Przekazanie danych osobowych jest niezbędne do wykonania umowy oraz realizacji usług i nie jest możliwe bez ich udostępnienia właściwym organom rejestrowym.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Ministerstwo Sprawiedliwości oraz sądy rejestrowe są administratorami danych osobowych w zakresie przetwarzania danych w systemach S24, PRS oraz w sądach rejestrowych.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§ 11. Wyłączenie odpowiedzialności</h2>
                  <p className="text-gray-300 mb-4">
                    Materiały, informacje oraz treści udostępnione w Serwisie mają charakter wyłącznie informacyjny i edukacyjny. Nie stanowią one profesjonalnej porady prawnej, podatkowej, finansowej ani innej specjalistycznej usługi doradczej świadczonej przez Usługodawcę.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Usługodawca oraz podmioty współpracujące z nim przy prowadzeniu Serwisu nie ponoszą odpowiedzialności za skutki jakiegokolwiek wykorzystania, interpretacji lub zastosowania informacji zawartych w Serwisie przez Usługobiorców lub osoby trzecie.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Każda sytuacja prawna, podatkowa, finansowa lub inna, której dotyczy zainteresowanie Usługobiorcy, jest indywidualna i wymaga szczegółowej analizy oraz konsultacji z odpowiednio wykwalifikowanym profesjonalistą.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Informacje i materiały dostępne w Serwisie nie mogą zastępować profesjonalnej porady i nie zwalniają Usługobiorcy z obowiązku uzyskania takiej porady przed podjęciem jakichkolwiek działań.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Korzystanie z Serwisu oraz informacji w nim zawartych odbywa się na wyłączną odpowiedzialność Usługobiorcy. Usługodawca nie ponosi odpowiedzialności za decyzje podjęte na podstawie tych informacji.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Materiały i informacje zamieszczone w Serwisie nie stanowią oferty handlowej ani zobowiązania do świadczenia usług.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
