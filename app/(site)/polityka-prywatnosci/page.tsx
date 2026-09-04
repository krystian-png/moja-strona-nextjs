import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import backgroundImage from "@/public/images/solidne-fundamenty-prawne-eksperci-krs-doswiadczenie-wnioski-zmiana-wpisu.webp"
import { brandName, organizationSchema, siteUrl } from "@/lib/seo"

const pagePath = "/polityka-prywatnosci"
const pageUrl = `${siteUrl}${pagePath}`

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Polityka prywatności - ochrona danych osobowych w usługach KRS",
  description: "Dowiedz się jak chronimy Twoje dane osobowe podczas obsługi wniosków KRS. Zgodność z RODO i zasady przetwarzania danych klientów.",
  url: pageUrl,
  mainEntity: organizationSchema,
}

export const metadata: Metadata = {
  title: "Polityka prywatności - ochrona danych osobowych w usługach KRS",
  description: "Dowiedz się jak chronimy Twoje dane osobowe podczas obsługi wniosków KRS. Zgodność z RODO i zasady przetwarzania danych klientów.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Polityka prywatności | ZmianaKRS",
    description: "Dowiedz się jak chronimy Twoje dane osobowe podczas obsługi wniosków KRS.",
    url: pageUrl,
    siteName: brandName,
  },
}

const paragraphClass = "text-gray-300 mb-4"
const listClass = "list-disc pl-6 text-gray-300 mb-4 space-y-2"
const headingClass = "text-xl font-semibold text-white mt-8 mb-4"

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="privacy-structured-data" type="application/ld+json">{JSON.stringify(structuredData)}</Script>
      <div className="fixed inset-0 -z-20" style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
      <div className="fixed inset-0 -z-10 bg-slate-950/70" aria-hidden />
      <Navbar />
      <main className="relative z-10 flex-1"><section className="relative pt-20 pb-20 overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto"><div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-2">POLITYKA PRYWATNOŚCI I COOKIES ZMIANAKRS.PL</h1>
          <p className="text-gray-300 italic mb-8">wersja obowiązująca od 4 września 2026 r.</p>
          <div className="prose prose-invert max-w-none">
            <h2 className={headingClass}>§ 1. Informacje ogólne</h2>
            <p className={paragraphClass}>1. Niniejsza Polityka Prywatności i Cookies opisuje zasady przetwarzania danych osobowych w związku z korzystaniem z serwisu www.zmianakrs.pl („Serwis”), kontaktem z Administratorem oraz korzystaniem z usług świadczonych przez Krystian Karpiuk Kancelaria Radcy Prawnego.</p>
            <p className={paragraphClass}>2. Polityka realizuje obowiązki informacyjne wynikające w szczególności z art. 13 i 14 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 („RODO”) oraz zawiera informacje dotyczące plików cookies i podobnych technologii.</p>
            <p className={paragraphClass}>3. Polityka ma charakter informacyjny i nie wymaga od użytkownika jej „akceptacji”. W zakresie, w którym przetwarzanie danych lub korzystanie z określonych technologii wymaga zgody, zgoda jest pozyskiwana odrębnie.</p>

            <h2 className={headingClass}>§ 2. Administrator danych i kontakt</h2>
            <p className={paragraphClass}>1. Administratorem danych osobowych jest Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP 669-217-69-58 („Administrator”).</p>
            <p className={paragraphClass}>2. Kontakt w sprawach dotyczących danych osobowych: biuro@zmianakrs.pl, tel. 572 234 779.</p>
            <p className={paragraphClass}>3. Administrator nie wyznaczył inspektora ochrony danych. W sprawach dotyczących ochrony danych można kontaktować się bezpośrednio z Administratorem.</p>

            <h2 className={headingClass}>§ 3. Kategorie osób i danych</h2>
            <p className={paragraphClass}>Administrator może przetwarzać dane:</p>
            <ul className={listClass}><li>osób odwiedzających Serwis i korzystających z formularza kontaktowego;</li><li>osób kierujących zapytania e-mailem lub telefonicznie;</li><li>klientów, osób reprezentujących klientów oraz osób kontaktowych po stronie klientów;</li><li>wspólników, członków organów, prokurentów, pełnomocników, beneficjentów rzeczywistych oraz innych osób, których dane są potrzebne do realizacji konkretnego zlecenia;</li><li>kontrahentów, dostawców i osób działających w ich imieniu.</li></ul>
            <p className={paragraphClass}>Zakres danych może obejmować w szczególności: imię i nazwisko, stanowisko lub funkcję, firmę/nazwę podmiotu, dane rejestrowe, adres, adres e-mail, numer telefonu, PESEL lub inne identyfikatory – jeżeli są niezbędne do danej czynności – dane zawarte w pełnomocnictwach, uchwałach, umowach, dokumentach rejestrowych i korespondencji, a w związku z korzystaniem z Serwisu także adres IP oraz dane techniczne urządzenia i przeglądarki.</p>

            <h2 className={headingClass}>§ 4. Cele i podstawy prawne przetwarzania</h2>
            <p className={paragraphClass}>Administrator przetwarza dane osobowe w następujących celach i na następujących podstawach:</p>
            <ul className={listClass}><li>obsługa zapytań, przygotowanie wyceny, podjęcie działań przed zawarciem umowy oraz komunikacja dotycząca potencjalnego zlecenia – art. 6 ust. 1 lit. b RODO, a w odniesieniu do osób działających w imieniu innego podmiotu także art. 6 ust. 1 lit. f RODO;</li><li>zawarcie i wykonanie umowy oraz realizacja usług prawnych, rejestrowych i formalnych – art. 6 ust. 1 lit. b RODO, a w odniesieniu do osób innych niż strona umowy – art. 6 ust. 1 lit. f RODO;</li><li>wykonywanie obowiązków prawnych ciążących na Administratorze, w szczególności podatkowych, rachunkowych, zawodowych oraz innych obowiązków wynikających z właściwych przepisów – art. 6 ust. 1 lit. c RODO;</li><li>ustalenie, dochodzenie lub obrona roszczeń, zapewnienie rozliczalności, bezpieczeństwa oraz organizacji pracy – art. 6 ust. 1 lit. f RODO; prawnie uzasadnionym interesem jest ochrona praw Administratora, dokumentowanie przebiegu współpracy i zapewnienie bezpieczeństwa;</li><li>administrowanie i zabezpieczenie Serwisu, prowadzenie statystyk technicznych i zapobieganie nadużyciom – art. 6 ust. 1 lit. f RODO w zakresie niewymagającym zgody;</li><li>analityka, pomiar skuteczności Serwisu lub działania marketingowe z wykorzystaniem technologii wymagających zgody – art. 6 ust. 1 lit. a RODO w związku z udzieloną zgodą; w zakresie przechowywania informacji lub uzyskiwania dostępu do informacji w urządzeniu końcowym zastosowanie mają również przepisy Prawa komunikacji elektronicznej.</li></ul>
            <p className={paragraphClass}>Administrator nie wykorzystuje danych do wysyłania niezamówionych informacji handlowych z naruszeniem przepisów dotyczących komunikacji elektronicznej.</p>

            <h2 className={headingClass}>§ 5. Dane dotyczące osób trzecich i źródła danych – art. 14 RODO</h2>
            <p className={paragraphClass}>1. W ramach usług rejestrowych Administrator często otrzymuje dane osób innych niż osoba bezpośrednio zlecająca usługę, np. członków zarządu, wspólników, prokurentów, pełnomocników, beneficjentów rzeczywistych, pracowników lub osób kontaktowych.</p>
            <p className={paragraphClass}>2. Dane takie mogą pochodzić od klienta lub osoby działającej w jego imieniu, z dokumentów przekazanych Administratorowi, z publicznych rejestrów i ewidencji, w szczególności KRS, CEIDG i CRBR, a także z innych publicznie dostępnych źródeł, jeżeli jest to potrzebne do realizacji zlecenia.</p>
            <p className={paragraphClass}>3. Kategorie przetwarzanych danych obejmują dane identyfikacyjne, kontaktowe, informacje o funkcji lub relacji z podmiotem oraz inne dane niezbędne do przygotowania dokumentów lub wykonania czynności objętych zleceniem.</p>
            <p className={paragraphClass}>4. Wobec osób, których dane Administrator uzyskał z innych źródeł, obowiązek informacyjny jest realizowany zgodnie z art. 14 RODO, z uwzględnieniem przewidzianych w tym przepisie wyjątków. Publiczne udostępnienie niniejszej Polityki może stanowić jeden ze środków zapewnienia przejrzystości przetwarzania, lecz nie zastępuje indywidualnego obowiązku informacyjnego tam, gdzie prawo wymaga jego indywidualnej realizacji.</p>

            <h2 className={headingClass}>§ 6. Odbiorcy danych</h2>
            <p className={paragraphClass}>Dane mogą być ujawniane lub powierzane – wyłącznie w zakresie potrzebnym do danego celu – następującym kategoriom odbiorców:</p>
            <ul className={listClass}><li>dostawcom hostingu, poczty elektronicznej, systemów IT, oprogramowania i usług technicznych;</li><li>podmiotom świadczącym usługi księgowe, płatnicze, archiwizacyjne lub wsparcia administracyjnego;</li><li>notariuszom, tłumaczom, innym prawnikom lub specjalistom, jeżeli udział takiego podmiotu jest potrzebny do realizacji zlecenia;</li><li>sądom, organom administracji i innym podmiotom publicznym, jeżeli przekazanie danych wynika z prawa lub jest potrzebne do wykonania zlecenia;</li><li>operatorom narzędzi analitycznych, komunikacyjnych lub marketingowych wykorzystywanych w Serwisie – w zakresie wynikającym z konfiguracji Serwisu i udzielonych zgód.</li></ul>

            <h2 className={headingClass}>§ 7. PRS, S24, KRS i inne systemy publiczne</h2>
            <p className={paragraphClass}>1. W związku z realizacją usług Administrator może przekazywać dane do Portalu Rejestrów Sądowych (PRS), systemu S24, Krajowego Rejestru Sądowego, sądów rejestrowych, Centralnego Rejestru Beneficjentów Rzeczywistych oraz innych właściwych rejestrów lub organów.</p>
            <p className={paragraphClass}>2. Zakres przekazywanych danych zależy od rodzaju sprawy, treści dokumentów oraz wymagań właściwego systemu lub organu.</p>
            <p className={paragraphClass}>3. Organy i podmioty publiczne przetwarzające dane w ramach swoich ustawowych kompetencji działają jako odrębni administratorzy danych.</p>

            <h2 className={headingClass}>§ 8. Przekazywanie danych poza EOG</h2>
            <p className={paragraphClass}>1. W związku z korzystaniem przez Administratora z usług dostawców technologicznych może dochodzić do przekazywania danych poza Europejski Obszar Gospodarczy.</p>
            <p className={paragraphClass}>2. Jeżeli dochodzi do takiego transferu, Administrator korzysta z mechanizmów przewidzianych w rozdziale V RODO, w szczególności decyzji Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony albo standardowych klauzul umownych, a w razie potrzeby stosuje dodatkowe zabezpieczenia.</p>
            <p className={paragraphClass}>3. Informację o stosowanym mechanizmie transferu oraz możliwość uzyskania informacji o zabezpieczeniach można uzyskać, kontaktując się z Administratorem.</p>

            <h2 className={headingClass}>§ 9. Okres przechowywania danych</h2>
            <p className={paragraphClass}>Dane są przechowywane przez okres zależny od celu ich przetwarzania:</p>
            <ul className={listClass}><li>dane związane z zapytaniem – przez okres potrzebny do jego obsługi, a następnie przez okres uzasadniony możliwością powrotu do rozmów oraz potrzebą wykazania przebiegu kontaktu;</li><li>dane związane z wykonaniem umowy i dokumentacją sprawy – przez okres realizacji zlecenia, a następnie przez okres wynikający z przepisów prawa, zasad wykonywania zawodu oraz okres przedawnienia potencjalnych roszczeń;</li><li>dokumenty księgowe i podatkowe – przez okres wymagany przepisami prawa podatkowego i rachunkowego;</li><li>dane przetwarzane na podstawie zgody – do czasu jej wycofania, chyba że dalsze przechowywanie jest uzasadnione inną podstawą prawną;</li><li>dane techniczne i bezpieczeństwa – przez okres niezbędny do zapewnienia bezpieczeństwa, diagnostyki i ochrony przed nadużyciami.</li></ul>
            <p className={paragraphClass}>Jeżeli dla konkretnej kategorii danych przepisy ustanawiają dłuższy lub krótszy okres, Administrator stosuje okres wynikający z tych przepisów.</p>

            <h2 className={headingClass}>§ 10. Dobrowolność podania danych</h2>
            <p className={paragraphClass}>1. Podanie danych jest co do zasady dobrowolne.</p>
            <p className={paragraphClass}>2. Podanie danych wymaganych do przygotowania oferty, zawarcia lub wykonania umowy, przygotowania dokumentów, udzielenia pełnomocnictwa albo złożenia wniosku do właściwego rejestru lub organu może być warunkiem wykonania danej czynności. Niepodanie niezbędnych danych może uniemożliwić przedstawienie oferty, zawarcie lub wykonanie umowy albo realizację zlecenia.</p>
            <p className={paragraphClass}>3. Jeżeli obowiązek podania określonych danych wynika z przepisów prawa lub wymogów właściwego systemu publicznego, Administrator informuje o tym w zakresie odpowiednim do danej sprawy.</p>

            <h2 className={headingClass}>§ 11. Prawa osób, których dane dotyczą</h2>
            <p className={paragraphClass}>W granicach wynikających z RODO osobie, której dane dotyczą, przysługuje prawo do:</p>
            <ul className={listClass}><li>dostępu do danych i uzyskania ich kopii;</li><li>sprostowania danych;</li><li>usunięcia danych;</li><li>ograniczenia przetwarzania;</li><li>przenoszenia danych – gdy spełnione są przesłanki ustawowe;</li><li>wniesienia sprzeciwu wobec przetwarzania opartego na art. 6 ust. 1 lit. f RODO;</li><li>cofnięcia zgody w dowolnym momencie, gdy przetwarzanie opiera się na zgodzie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania;</li><li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li></ul>
            <p className={paragraphClass}>Realizację praw można zgłaszać na adres: biuro@zmianakrs.pl. Zakres poszczególnych praw zależy od podstawy i celu przetwarzania oraz od wyjątków przewidzianych w RODO i innych przepisach.</p>

            <h2 className={headingClass}>§ 12. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
            <p className={paragraphClass}>Administrator nie podejmuje wobec osób decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby wobec nich skutki prawne lub w podobny sposób istotnie na nie wpływały w rozumieniu art. 22 RODO.</p>
            <p className={paragraphClass}>Narzędzia analityczne lub reklamowe mogą tworzyć statystyczne profile użytkowników w zakresie wynikającym z udzielonych zgód i konfiguracji danego narzędzia, jednak Administrator nie wykorzystuje ich do podejmowania decyzji, o których mowa powyżej.</p>

            <h2 className={headingClass}>§ 13. Bezpieczeństwo</h2>
            <p className={paragraphClass}>Administrator stosuje odpowiednie środki techniczne i organizacyjne adekwatne do ryzyka, w szczególności kontrolę dostępu, zabezpieczenia transmisji oraz rozwiązania służące ochronie systemów i dokumentacji. Dobór zabezpieczeń jest okresowo weryfikowany odpowiednio do charakteru przetwarzania i dostępnych technologii.</p>

            <h2 className={headingClass}>§ 14. Cookies i podobne technologie</h2>
            <p className={paragraphClass}>1. Serwis może wykorzystywać pliki cookies oraz podobne technologie służące do przechowywania informacji w urządzeniu użytkownika lub uzyskiwania dostępu do informacji już w nim przechowywanych.</p>
            <p className={paragraphClass}>2. Technologie niezbędne mogą być stosowane bez zgody, jeżeli są konieczne do transmisji komunikatu lub dostarczenia usługi żądanej przez użytkownika.</p>
            <p className={paragraphClass}>3. Cookies i podobne technologie służące celom analitycznym, marketingowym lub innym celom niewymaganym do działania żądanej usługi są uruchamiane po uzyskaniu wymaganej zgody.</p>
            <p className={paragraphClass}>4. Użytkownik może wyrazić, odmówić lub wycofać zgodę za pomocą mechanizmu zarządzania zgodami dostępnego w Serwisie. Wycofanie zgody nie wpływa na zgodność z prawem działań dokonanych przed jej wycofaniem.</p>
            <p className={paragraphClass}>5. Szczegółowa lista wykorzystywanych technologii, ich dostawców, celów i okresów działania powinna odpowiadać faktycznej konfiguracji Serwisu i jest prezentowana w panelu zarządzania zgodami, jeżeli dany mechanizm taką funkcję zapewnia.</p>

            <h2 className={headingClass}>§ 15. Narzędzia zewnętrzne</h2>
            <p className={paragraphClass}>Serwis może korzystać z usług zewnętrznych dostawców, w tym narzędzi analitycznych, komunikacyjnych lub reklamowych. Zakres ich działania zależy od aktualnej konfiguracji Serwisu. Narzędzia wymagające zgody są uruchamiane dopiero po jej udzieleniu. Informacje o konkretnych dostawcach powinny być zgodne z faktycznie aktywnymi narzędziami wskazanymi w panelu zarządzania zgodami lub innych informacjach udostępnionych w Serwisie.</p>

            <h2 className={headingClass}>§ 16. Usługi świadczone drogą elektroniczną</h2>
            <p className={paragraphClass}>Serwis umożliwia korzystanie z usług świadczonych drogą elektroniczną, w szczególności z formularza kontaktowego. Zasady świadczenia tych usług, wymagania techniczne oraz tryb reklamacyjny określa Regulamin Serwisu.</p>

            <h2 className={headingClass}>§ 17. Zmiany Polityki</h2>
            <p className={paragraphClass}>1. Polityka może być aktualizowana w szczególności w razie zmiany prawa, sposobu przetwarzania danych, funkcjonalności Serwisu lub wykorzystywanych narzędzi.</p>
            <p className={paragraphClass}>2. Aktualna wersja Polityki jest dostępna w Serwisie wraz z datą jej obowiązywania.</p>

            <h2 className={headingClass}>§ 18. Kontakt</h2>
            <p className={paragraphClass}>Pytania dotyczące prywatności i przetwarzania danych osobowych można kierować na adres: biuro@zmianakrs.pl lub telefonicznie pod numer 572 234 779.</p>
          </div>
        </div></div></div>
      </section></main>
      <Footer />
    </div>
  )
}
