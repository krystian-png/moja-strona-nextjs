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
  description: "Zapoznaj się z regulaminem świadczenia usług obsługi wniosków KRS. Warunki współpracy, prawa i obowiązki stron w procesie zmiany wpisu.",
  url: pageUrl,
  mainEntity: organizationSchema,
}

export const metadata: Metadata = {
  title: "Regulamin świadczenia usług - warunki obsługi wniosków KRS",
  description: "Zapoznaj się z regulaminem świadczenia usług obsługi wniosków KRS. Warunki współpracy, prawa i obowiązki stron w procesie zmiany wpisu.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Regulamin świadczenia usług | ZmianaKRS",
    description: "Zapoznaj się z regulaminem świadczenia usług obsługi wniosków KRS.",
    url: pageUrl,
    siteName: brandName,
  },
}

const sections = [
  ["§ 1. Postanowienia ogólne",
    "Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem zmianakrs.pl, zwanego dalej „Serwisem”, zasady świadczenia usług drogą elektroniczną za pośrednictwem Serwisu oraz podstawowe zasady zamawiania i realizacji odpłatnych usług przez Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58, zwanego dalej „Usługodawcą”.",
    "Serwis prezentuje ofertę Usługodawcy w zakresie obsługi prawnej i formalnej związanej w szczególności z Krajowym Rejestrem Sądowym, funkcjonowaniem spółek i innych podmiotów oraz zawiera publikacje, materiały i narzędzia o charakterze informacyjnym.",
    "Za pośrednictwem Serwisu Usługodawca świadczy również usługi drogą elektroniczną, w szczególności polegające na udostępnianiu treści Serwisu, formularza kontaktowego oraz dostępnych w Serwisie narzędzi informacyjnych.",
    "Regulamin jest dostępny nieodpłatnie w Serwisie w sposób umożliwiający jego pozyskanie, odtwarzanie, utrwalenie i wydrukowanie.",
    "Korzystanie z Serwisu oraz świadczenie Usług odbywa się na zasadach określonych w Regulaminie oraz zgodnie z obowiązującymi przepisami prawa."],
  ["§ 2. Definicje",
    "Usługodawca – Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58.",
    "Klient – osoba fizyczna, osoba prawna albo jednostka organizacyjna nieposiadająca osobowości prawnej, która zawarła z Usługodawcą umowę o świadczenie Usługi.",
    "Serwis – serwis internetowy dostępny pod adresem zmianakrs.pl.",
    "Usługa – odpłatna usługa świadczona przez Usługodawcę na rzecz Klienta, w szczególności w zakresie przygotowywania dokumentów, obsługi postępowań rejestrowych, składania wniosków, zakładania spółek, zmian danych ujawnianych w KRS, obsługi korporacyjnej spółek oraz innych czynności prawnych lub formalnych uzgodnionych z Klientem.",
    "Usługa elektroniczna – usługa świadczona drogą elektroniczną za pośrednictwem Serwisu, w szczególności udostępnianie treści Serwisu, formularza kontaktowego lub narzędzi informacyjnych.",
    "Regulamin – niniejszy Regulamin.",
    "Formularz kontaktowy – narzędzie dostępne w Serwisie umożliwiające przesłanie zapytania do Usługodawcy."],
  ["§ 3. Klienci i zakres stosowania Regulaminu",
    "Oferta Usługodawcy kierowana jest przede wszystkim do przedsiębiorców, spółek, innych jednostek organizacyjnych oraz osób działających w związku z prowadzoną działalnością gospodarczą lub zawodową.",
    "Usługodawca może świadczyć Usługi również na rzecz osób fizycznych nieprowadzących działalności gospodarczej lub zawierających umowę poza zakresem prowadzonej działalności gospodarczej lub zawodowej.",
    "Jeżeli Klient jest konsumentem albo osobą fizyczną prowadzącą działalność gospodarczą, do której w odniesieniu do danej umowy stosuje się na podstawie obowiązujących przepisów przepisy dotyczące konsumenta, postanowienia Regulaminu stosuje się z uwzględnieniem przysługującej takiej osobie ochrony.",
    "Postanowienia Regulaminu nie wyłączają ani nie ograniczają praw Klienta wynikających z bezwzględnie obowiązujących przepisów prawa."],
  ["§ 4. Rodzaj i zakres Usług",
    "Usługodawca świadczy w szczególności Usługi obejmujące przygotowywanie i weryfikację dokumentów związanych z wpisami i zmianami w Krajowym Rejestrze Sądowym, przygotowywanie i składanie wniosków do KRS, reprezentowanie Klientów w postępowaniach rejestrowych, zakładanie spółek, obsługę zmian umów i danych spółek, przygotowywanie dokumentacji korporacyjnej oraz inne czynności prawne lub formalne indywidualnie uzgodnione z Klientem.",
    "Szczegółowy zakres konkretnej Usługi wynika z informacji zamieszczonych w Serwisie oraz indywidualnych ustaleń dokonanych z Klientem, w szczególności w korespondencji elektronicznej.",
    "Jeżeli zakres Usługi został indywidualnie uzgodniony z Klientem w sposób odmienny od informacji znajdujących się w Serwisie lub Regulaminie, pierwszeństwo mają indywidualne ustalenia stron.",
    "Czynności niewskazane w zakresie zamówionej Usługi nie są objęte wynagrodzeniem, chyba że strony uzgodnią inaczej.",
    "Opłaty sądowe, skarbowe, notarialne oraz inne opłaty należne osobom trzecim lub organom publicznym nie stanowią części wynagrodzenia Usługodawcy, chyba że wyraźnie wskazano inaczej."],
  ["§ 5. Obowiązki Klienta",
    "Klient zobowiązany jest przekazywać Usługodawcy informacje i dokumenty zgodne z prawdą, kompletne i aktualne w zakresie niezbędnym do realizacji Usługi.",
    "Klient zobowiązany jest niezwłocznie informować Usługodawcę o zmianie okoliczności mogących mieć znaczenie dla realizowanej Usługi.",
    "Klient odpowiada za prawdziwość, kompletność oraz aktualność informacji i dokumentów przekazanych Usługodawcy, z zastrzeżeniem obowiązków Usługodawcy wynikających z przepisów prawa, zasad wykonywania zawodu radcy prawnego oraz uzgodnionego zakresu Usługi.",
    "Klient zobowiązany jest przekazać dokumenty, złożyć podpisy, udzielić pełnomocnictw lub dokonać innych czynności wymagających jego działania w terminie umożliwiającym prawidłową realizację Usługi.",
    "Zabronione jest przekazywanie za pośrednictwem Serwisu treści bezprawnych lub naruszających prawa osób trzecich."],
  ["§ 6. Warunki techniczne korzystania z Serwisu",
    "Do korzystania z Serwisu niezbędne jest urządzenie posiadające dostęp do Internetu oraz aktualną przeglądarkę internetową.",
    "Do korzystania z formularza kontaktowego oraz prowadzenia korespondencji związanej z Usługą niezbędne jest posiadanie aktywnego adresu poczty elektronicznej.",
    "Klient zobowiązany jest korzystać z Serwisu zgodnie z jego przeznaczeniem, obowiązującymi przepisami prawa oraz dobrymi obyczajami.",
    "Zabronione jest podejmowanie działań mogących zakłócić, uszkodzić albo ograniczyć prawidłowe funkcjonowanie Serwisu lub naruszać bezpieczeństwo jego systemów informatycznych.",
    "Usługodawca może czasowo ograniczyć dostępność Serwisu w szczególności z przyczyn technicznych, konserwacyjnych, związanych z bezpieczeństwem albo wynikających z działania dostawców infrastruktury teleinformatycznej."],
  ["§ 7. Zawarcie umowy i realizacja Usługi",
    "Przesłanie zapytania za pośrednictwem Serwisu, poczty elektronicznej, telefonu lub innego kanału komunikacji nie powoduje samo przez się zawarcia umowy o świadczenie Usługi.",
    "Przed zawarciem umowy Klient otrzymuje informację o zakresie Usługi i wynagrodzeniu, a w razie potrzeby również o innych istotnych warunkach jej realizacji.",
    "Regulamin stanowi wzorzec umowny i znajduje zastosowanie również do odpłatnych Usług. Usługodawca udostępnia Klientowi Regulamin przed zawarciem umowy, w szczególności przez wskazanie w korespondencji zawierającej ofertę, wycenę lub warunki zlecenia adresu, pod którym Regulamin jest dostępny, w sposób umożliwiający Klientowi jego przechowywanie i odtwarzanie.",
    "Umowa o świadczenie Usługi zostaje zawarta z chwilą zaakceptowania przez Klienta przedstawionych warunków i potwierdzenia przyjęcia zlecenia przez Usługodawcę albo z chwilą zapłaty wynagrodzenia lub kwoty wskazanej w fakturze proforma, jeżeli z przedstawionych Klientowi warunków wynika, że dokonanie płatności stanowi akceptację oferty, chyba że strony uzgodnią inaczej.",
    "Rozpoczęcie czynności wymagających dokumentów, informacji, pełnomocnictwa lub współdziałania Klienta następuje po ich otrzymaniu przez Usługodawcę.",
    "Terminy realizacji wskazywane przez Usługodawcę dotyczą czynności pozostających po stronie Usługodawcy i – o ile wyraźnie nie wskazano inaczej – nie obejmują czasu działania sądów, organów administracji publicznej, systemów teleinformatycznych ani innych niezależnych od Usługodawcy podmiotów.",
    "Jeżeli w opisie Usługi, ofercie lub korespondencji użyto określenia „obsługa do wpisu”, „prowadzenie sprawy do wpisu” albo określenia o podobnym znaczeniu, oznacza ono zakres obsługi obejmujący prowadzenie sprawy rejestrowej do jej zakończenia w zakresie uzgodnionym z Klientem, w tym odpowiedź na wezwania sądu objęte zakresem Usługi. Określenie takie nie stanowi gwarancji dokonania przez sąd określonego wpisu ani wydania rozstrzygnięcia określonej treści.",
    "Usługodawca może odmówić przyjęcia zlecenia albo – w przypadkach dopuszczonych prawem i zasadami wykonywania zawodu radcy prawnego – zakończyć jego wykonywanie, w szczególności w przypadku konfliktu interesów, braku wymaganego współdziałania Klienta, żądania dokonania czynności sprzecznej z prawem lub zasadami etyki zawodowej albo innych okoliczności uniemożliwiających prawidłowe świadczenie pomocy prawnej."],
  ["§ 8. Wynagrodzenie i płatności",
    "Wynagrodzenie za Usługi określane jest w cenniku zamieszczonym w Serwisie albo indywidualnie uzgadniane z Klientem.",
    "Jeżeli zakres Usługi wymaga wykonania czynności dodatkowych, nieobjętych pierwotnym zleceniem, Usługodawca informuje o tym Klienta przed wykonaniem takich czynności wymagających dodatkowego wynagrodzenia.",
    "Płatność następuje na podstawie faktury, faktury proforma albo innego dokumentu lub informacji przekazanej Klientowi.",
    "O ile strony nie uzgodnią inaczej, wynagrodzenie Usługodawcy jest płatne przed rozpoczęciem realizacji Usługi.",
    "Wynagrodzenie Usługodawcy nie obejmuje opłat sądowych, skarbowych, notarialnych ani innych kosztów należnych osobom trzecim lub organom publicznym, chyba że z oferty albo indywidualnych ustaleń wyraźnie wynika inaczej.",
    "W przypadku zmiany zakresu zlecenia na żądanie Klienta albo ujawnienia się konieczności wykonania czynności wykraczających poza pierwotnie uzgodniony zakres Usługi wysokość dodatkowego wynagrodzenia wymaga uzgodnienia z Klientem."],
  ["§ 9. Odpowiedzialność związana z Usługami",
    "Usługodawca wykonuje Usługi z należytą starannością wymaganą przy wykonywaniu zawodu radcy prawnego, zgodnie z obowiązującymi przepisami prawa oraz zasadami wykonywania zawodu.",
    "Zobowiązanie Usługodawcy ma charakter zobowiązania starannego działania, chyba że z bezwzględnie obowiązujących przepisów prawa lub wyraźnych indywidualnych ustaleń stron wynika inaczej.",
    "Usługodawca nie gwarantuje wydania przez sąd rejestrowy, organ administracji publicznej ani inny właściwy organ rozstrzygnięcia określonej treści, w szczególności dokonania żądanego wpisu do Krajowego Rejestru Sądowego.",
    "Usługodawca nie gwarantuje terminu rozpoznania sprawy przez sąd lub organ ani terminu działania niezależnych systemów teleinformatycznych.",
    "Usługodawca nie ponosi odpowiedzialności za następstwa podania przez Klienta informacji nieprawdziwych, niepełnych lub nieaktualnych, zatajenia informacji mających znaczenie dla sprawy, nieprzekazania wymaganych dokumentów albo niewykonania w terminie czynności wymagającej działania Klienta, chyba że Usługodawca wiedział albo przy zachowaniu wymaganej staranności powinien był wiedzieć o nieprawidłowości mającej znaczenie dla wykonania Usługi.",
    "Usługodawca nie ponosi odpowiedzialności za skutki działania lub zaniechania sądów, organów administracji publicznej ani za niezależne od Usługodawcy działanie, awarie lub niedostępność systemów teleinformatycznych, w szczególności Portalu Rejestrów Sądowych i systemu S24, chyba że szkoda wynika z okoliczności, za które odpowiedzialność ponosi Usługodawca.",
    "W przypadku Klienta będącego przedsiębiorcą, z wyłączeniem osoby fizycznej, do której w odniesieniu do danej umowy stosuje się przepisy art. 385¹–385³ Kodeksu cywilnego, odpowiedzialność Usługodawcy z tytułu niewykonania lub nienależytego wykonania Usługi obejmuje wyłącznie rzeczywiście poniesioną stratę i nie obejmuje utraconych korzyści.",
    "W przypadku Klienta, o którym mowa w ust. 7, łączna odpowiedzialność odszkodowawcza Usługodawcy wynikająca z niewykonania lub nienależytego wykonania konkretnej Usługi jest ograniczona do dwukrotności wynagrodzenia netto faktycznie zapłaconego Usługodawcy za Usługę, z której wynikła szkoda.",
    "Ograniczeń odpowiedzialności określonych w ust. 7 i 8 nie stosuje się do szkody wyrządzonej umyślnie.",
    "Umowa o świadczenie Usługi określa prawa i obowiązki Usługodawcy oraz Klienta i nie ustanawia obowiązków Usługodawcy wobec osób trzecich. W szczególności wspólnicy, członkowie organów, prokurenci, pracownicy oraz kontrahenci Klienta nie nabywają na podstawie umowy zawartej z Klientem samodzielnych uprawnień odszkodowawczych wobec Usługodawcy. Postanowienie to nie wyłącza odpowiedzialności Usługodawcy wobec osoby trzeciej, jeżeli jej podstawa wynika bezpośrednio z obowiązujących przepisów prawa.",
    "Postanowienia niniejszego paragrafu nie wyłączają ani nie ograniczają odpowiedzialności Usługodawcy w zakresie, w którym jej wyłączenie albo ograniczenie jest niedopuszczalne na podstawie bezwzględnie obowiązujących przepisów prawa."],
  ["§ 10. Reklamacje",
    "Klient może zgłosić reklamację dotyczącą funkcjonowania Serwisu, Usługi elektronicznej albo wykonania Usługi.",
    "Reklamację można przesłać pocztą elektroniczną na adres biuro@zmianakrs.pl albo pisemnie na adres Usługodawcy.",
    "Reklamacja powinna zawierać informacje pozwalające na identyfikację Klienta i sprawy oraz opis zgłaszanych zastrzeżeń.",
    "Usługodawca rozpatruje reklamację bez zbędnej zwłoki, nie później niż w terminie wynikającym z obowiązujących przepisów prawa.",
    "Jeżeli rozpatrzenie reklamacji wymaga uzyskania od Klienta dodatkowych informacji, Usługodawca może zwrócić się o ich przekazanie."],
  ["§ 11. Ochrona danych osobowych",
    "Administratorem danych osobowych przetwarzanych przez Usługodawcę w związku z korzystaniem z Serwisu i świadczeniem Usług jest Krystian Karpiuk Kancelaria Radcy Prawnego.",
    "Dane osobowe są przetwarzane w zakresie niezbędnym w szczególności do obsługi zapytań, zawierania i wykonywania umów, świadczenia pomocy prawnej, realizacji obowiązków prawnych oraz dochodzenia lub obrony roszczeń.",
    "Szczegółowe informacje dotyczące przetwarzania danych osobowych, podstaw prawnych, okresów przechowywania danych oraz praw osób, których dane dotyczą, znajdują się w Polityce prywatności dostępnej w Serwisie.",
    "Klient przekazujący Usługodawcy dane osobowe innych osób zobowiązany jest posiadać podstawę prawną do ich przekazania."],
  ["§ 12. Przekazywanie danych w związku z realizacją Usług",
    "Realizacja niektórych Usług wymaga przekazania danych osobowych do właściwych sądów, organów administracji publicznej lub systemów teleinformatycznych wykorzystywanych w postępowaniach rejestrowych, w szczególności Portalu Rejestrów Sądowych i systemu S24.",
    "Zakres przekazywanych danych jest ograniczony do danych niezbędnych do realizacji danej czynności lub wykonania obowiązku prawnego.",
    "Sądy, organy publiczne oraz inne podmioty otrzymujące dane w związku z realizacją Usługi mogą przetwarzać je jako odrębni administratorzy, jeżeli wynika to z właściwych przepisów prawa.",
    "Szczegółowe zasady przetwarzania danych przez Usługodawcę określa Polityka prywatności."],
  ["§ 13. Materiały i informacje dostępne w Serwisie",
    "Artykuły, poradniki, wyszukiwarki, kalkulatory, zestawienia oraz inne ogólnodostępne materiały zamieszczone w Serwisie mają charakter informacyjny i edukacyjny.",
    "Materiały, o których mowa w ust. 1, nie stanowią indywidualnej porady prawnej, podatkowej ani finansowej i nie zastępują analizy konkretnego stanu faktycznego.",
    "Zamieszczenie w Serwisie informacji dotyczącej określonego zagadnienia nie oznacza przyjęcia przez Usługodawcę zlecenia ani powstania stosunku prawnego pomiędzy Usługodawcą a osobą korzystającą z materiałów.",
    "Usługodawca dokłada należytej staranności, aby informacje zamieszczane w Serwisie były rzetelne i aktualne, jednak przepisy prawa, praktyka organów i sądów oraz funkcjonalność systemów teleinformatycznych mogą ulegać zmianom.",
    "Usługodawca nie ponosi odpowiedzialności za działania lub zaniechania podjęte wyłącznie na podstawie ogólnych materiałów dostępnych w Serwisie, bez uwzględnienia okoliczności konkretnej sprawy.",
    "Postanowienia niniejszego paragrafu dotyczą ogólnodostępnych materiałów i informacji zamieszczonych w Serwisie i nie stanowią wyłączenia ani ograniczenia odpowiedzialności Usługodawcy za odpłatną Usługę świadczoną na podstawie umowy zawartej z Klientem."],
  ["§ 14. Prawa własności intelektualnej",
    "Treści zamieszczone w Serwisie, w szczególności teksty, opracowania, materiały, elementy graficzne, układ Serwisu oraz stworzone przez Usługodawcę narzędzia, mogą podlegać ochronie na podstawie przepisów dotyczących własności intelektualnej.",
    "Korzystanie z Serwisu nie powoduje przeniesienia na użytkownika jakichkolwiek praw do materiałów udostępnionych w Serwisie.",
    "Materiały mogą być wykorzystywane na własny użytek w zakresie dozwolonym przez obowiązujące przepisy prawa.",
    "Kopiowanie, rozpowszechnianie lub wykorzystywanie materiałów w celach komercyjnych w zakresie wykraczającym poza dozwolony użytek wymaga zgody Usługodawcy, chyba że obowiązujące przepisy stanowią inaczej."],
  ["§ 15. Postanowienia końcowe",
    "Regulamin obowiązuje od dnia wskazanego na jego początku.",
    "Do umów zawartych przed wejściem w życie nowej wersji Regulaminu stosuje się Regulamin obowiązujący w chwili zawarcia umowy, chyba że strony zgodnie postanowią inaczej albo zmiana wynika z bezwzględnie obowiązujących przepisów prawa."],
] as const

const paragraphClass = "text-gray-300 mb-4"
const headingClass = "text-xl font-semibold text-white mt-8 mb-4"

export default function RegulaminPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="regulamin-structured-data" type="application/ld+json">{JSON.stringify(structuredData)}</Script>
      <div className="fixed inset-0 -z-20" style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
      <div className="fixed inset-0 -z-10 bg-slate-950/70" aria-hidden />
      <Navbar />
      <main className="relative z-10 flex-1">
        <section className="relative pt-20 pb-20 overflow-hidden">
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto"><div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-2">Regulamin serwisu internetowego ZmianaKRS.pl</h1>
            <p className="text-gray-300 italic mb-8">obowiązujący od 28 września 2026 r.</p>
            <div className="prose prose-invert max-w-none">
              {sections.map(([heading, ...paragraphs]) => (
                <section key={heading}>
                  <h2 className={headingClass}>{heading}</h2>
                  {paragraphs.map((paragraph, index) => (
                    <p className={paragraphClass} key={paragraph}>{index + 1}. {paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div></div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
