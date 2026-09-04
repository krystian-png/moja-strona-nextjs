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

const paragraphClass = "text-gray-300 mb-4"
const listClass = "list-disc pl-6 text-gray-300 mb-4 space-y-2"
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
            <h1 className="text-3xl font-bold text-white mb-2">REGULAMIN SERWISU INTERNETOWEGO ZMIANAKRS.PL</h1>
            <p className="text-gray-300 italic mb-8">wersja obowiązująca od 4 września 2026 r.</p>
            <div className="prose prose-invert max-w-none">
              <h2 className={headingClass}>§ 1. Postanowienia ogólne</h2>
              <p className={paragraphClass}>1. Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem www.zmianakrs.pl („Serwis”), zasady świadczenia usług drogą elektroniczną za pośrednictwem Serwisu oraz podstawowe zasady zamawiania i realizacji usług świadczonych przez Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP 669-217-69-58 („Usługodawca”).</p>
              <p className={paragraphClass}>2. Serwis prezentuje informacje o usługach Usługodawcy dotyczących w szczególności Krajowego Rejestru Sądowego, rejestracji podmiotów i zmian danych rejestrowych oraz zawiera materiały o charakterze informacyjnym i edukacyjnym.</p>
              <p className={paragraphClass}>3. Regulamin jest udostępniany nieodpłatnie w Serwisie w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.</p>
              <p className={paragraphClass}>4. Przed rozpoczęciem korzystania z usługi świadczonej drogą elektroniczną Usługobiorca powinien zapoznać się z Regulaminem. Rozpoczęcie korzystania z danej usługi elektronicznej oznacza zawarcie umowy o jej świadczenie na zasadach określonych w Regulaminie.</p>
              <p className={paragraphClass}>5. Samo przeglądanie publicznie dostępnych treści Serwisu nie prowadzi do zawarcia umowy o odpłatną usługę prawną lub rejestrową.</p>

              <h2 className={headingClass}>§ 2. Definicje</h2>
              <p className={paragraphClass}><strong className="text-white">Usługodawca –</strong> Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP 669-217-69-58.</p>
              <p className={paragraphClass}><strong className="text-white">Usługobiorca –</strong> osoba korzystająca z Serwisu lub usług świadczonych za jego pośrednictwem.</p>
              <p className={paragraphClass}><strong className="text-white">Serwis –</strong> serwis internetowy dostępny pod adresem www.zmianakrs.pl.</p>
              <p className={paragraphClass}><strong className="text-white">Usługi elektroniczne –</strong> usługi świadczone drogą elektroniczną w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną, w szczególności formularz kontaktowy oraz udostępnianie funkcjonalności Serwisu wymagających indywidualnego żądania użytkownika.</p>
              <p className={paragraphClass}><strong className="text-white">Usługi kancelarii –</strong> odpłatne usługi prawne, rejestrowe i formalne świadczone przez Usługodawcę na podstawie indywidualnych ustaleń z klientem, w szczególności dotyczące KRS, S24, PRS, zakładania podmiotów, przygotowania dokumentów i reprezentacji w postępowaniach rejestrowych.</p>
              <p className={paragraphClass}><strong className="text-white">Formularz kontaktowy –</strong> narzędzie umożliwiające przesłanie do Usługodawcy zapytania dotyczącego usług.</p>

              <h2 className={headingClass}>§ 3. Adresaci Serwisu i usług</h2>
              <p className={paragraphClass}>1. Oferta odpłatnych Usług kancelarii jest kierowana przede wszystkim do przedsiębiorców, spółek i innych podmiotów organizacyjnych oraz osób działających w związku z działalnością gospodarczą lub zawodową.</p>
              <p className={paragraphClass}>2. Usługodawca nie kieruje oferty Serwisu do konsumentów. Jeżeli jednak w konkretnym przypadku bezwzględnie obowiązujące przepisy przyznają Usługobiorcy ochronę właściwą konsumentowi albo przedsiębiorcy korzystającemu z określonych uprawnień konsumenckich, postanowienia Regulaminu nie wyłączają ani nie ograniczają tej ochrony.</p>
              <p className={paragraphClass}>3. Usługodawca może odmówić przyjęcia zlecenia, w szczególności w razie konfliktu interesów, braku możliwości wykonania zlecenia zgodnie z prawem lub zasadami wykonywania zawodu radcy prawnego albo gdy charakter sprawy wykracza poza zakres świadczonych usług.</p>

              <h2 className={headingClass}>§ 4. Rodzaje i zakres usług świadczonych drogą elektroniczną</h2>
              <p className={paragraphClass}>1. Za pośrednictwem Serwisu Usługodawca świadczy nieodpłatnie usługi elektroniczne obejmujące:</p>
              <ul className={listClass}><li>umożliwienie przeglądania treści i informacji udostępnionych w Serwisie;</li><li>umożliwienie przesłania zapytania za pomocą formularza kontaktowego;</li><li>inne funkcjonalności Serwisu, jeżeli zostaną wyraźnie udostępnione jako usługi realizowane na indywidualne żądanie użytkownika.</li></ul>
              <p className={paragraphClass}>2. Przesłanie formularza kontaktowego nie oznacza automatycznego przyjęcia zlecenia ani zawarcia umowy o odpłatną Usługę kancelarii.</p>
              <p className={paragraphClass}>3. Usługa formularza kontaktowego rozpoczyna się z chwilą rozpoczęcia korzystania z formularza i kończy z chwilą jego skutecznego wysłania albo rezygnacji z wysłania.</p>

              <h2 className={headingClass}>§ 5. Wymagania techniczne i zasady korzystania z Serwisu</h2>
              <p className={paragraphClass}>1. Do korzystania z Serwisu potrzebne są: urządzenie z dostępem do Internetu, aktualna przeglądarka internetowa oraz – w przypadku formularza – aktywny adres e-mail.</p>
              <p className={paragraphClass}>2. Korzystanie z Serwisu może wiązać się ze standardowymi zagrożeniami występującymi w Internecie. Usługobiorca powinien korzystać z aktualnego oprogramowania i odpowiednich zabezpieczeń urządzenia.</p>
              <p className={paragraphClass}>3. Zabronione jest dostarczanie za pośrednictwem Serwisu treści o charakterze bezprawnym oraz podejmowanie działań mogących zakłócić, uszkodzić lub ograniczyć prawidłowe funkcjonowanie Serwisu.</p>
              <p className={paragraphClass}>4. Usługobiorca powinien przekazywać dane zgodne z prawdą i nie powinien przesyłać danych lub dokumentów, których przekazanie nie jest potrzebne do przedstawienia zapytania.</p>

              <h2 className={headingClass}>§ 6. Zawarcie i rozwiązanie umowy o usługę elektroniczną</h2>
              <p className={paragraphClass}>1. Umowa o świadczenie nieodpłatnej usługi elektronicznej zostaje zawarta z chwilą rozpoczęcia korzystania z danej funkcjonalności Serwisu.</p>
              <p className={paragraphClass}>2. Usługobiorca może w każdej chwili zakończyć korzystanie z usługi elektronicznej przez opuszczenie Serwisu, zaprzestanie korzystania z danej funkcjonalności lub niewysłanie formularza.</p>
              <p className={paragraphClass}>3. Usługodawca może czasowo ograniczyć dostęp do Serwisu w związku z pracami technicznymi, bezpieczeństwem systemu lub awarią.</p>

              <h2 className={headingClass}>§ 7. Zamawianie i realizacja Usług kancelarii</h2>
              <p className={paragraphClass}>1. Informacje o Usługach kancelarii zamieszczone w Serwisie mają charakter informacyjny i – o ile wyraźnie nie wskazano inaczej – nie stanowią oferty w rozumieniu Kodeksu cywilnego.</p>
              <p className={paragraphClass}>2. Zakres, wynagrodzenie, dokumenty wymagane do realizacji zlecenia oraz inne istotne warunki mogą być określone na stronie danej usługi albo uzgadniane indywidualnie z klientem.</p>
              <p className={paragraphClass}>3. Umowa o Usługę kancelarii zostaje zawarta w sposób wynikający z indywidualnych ustaleń stron, w szczególności przez potwierdzenie przyjęcia zlecenia przez Usługodawcę oraz dokonanie wymaganej płatności, chyba że strony uzgodnią inaczej.</p>
              <p className={paragraphClass}>4. Rozpoczęcie realizacji może być uzależnione od otrzymania wymaganych danych, dokumentów, pełnomocnictw oraz płatności.</p>
              <p className={paragraphClass}>5. Terminy wskazywane przez Usługodawcę odnoszą się do czynności pozostających po jego stronie i nie obejmują czasu działania sądów, organów, systemów teleinformatycznych ani innych podmiotów trzecich, chyba że wyraźnie wskazano inaczej.</p>

              <h2 className={headingClass}>§ 8. Wynagrodzenie, opłaty i dokumenty rozliczeniowe</h2>
              <p className={paragraphClass}>1. Wynagrodzenie za Usługi kancelarii wynika z cennika w Serwisie albo z indywidualnej wyceny.</p>
              <p className={paragraphClass}>2. O ile przy danej usłudze lub w indywidualnych ustaleniach nie wskazano inaczej, opłaty sądowe, skarbowe, notarialne i inne koszty zewnętrzne nie stanowią wynagrodzenia Usługodawcy.</p>
              <p className={paragraphClass}>3. Usługodawca może przesłać klientowi fakturę pro forma, fakturę lub inne informacje niezbędne do dokonania płatności.</p>
              <p className={paragraphClass}>4. Jeżeli klient przekazuje Usługodawcy środki przeznaczone na opłaty sądowe lub inne koszty zewnętrzne, ich przeznaczenie jest wskazywane w ustaleniach dotyczących konkretnego zlecenia.</p>

              <h2 className={headingClass}>§ 9. Reklamacje dotyczące usług świadczonych drogą elektroniczną</h2>
              <p className={paragraphClass}>1. Reklamacje dotyczące działania Serwisu lub usług świadczonych drogą elektroniczną można składać na adres e-mail: biuro@zmianakrs.pl.</p>
              <p className={paragraphClass}>2. Reklamacja powinna zawierać informacje pozwalające zidentyfikować problem oraz dane kontaktowe umożliwiające udzielenie odpowiedzi.</p>
              <p className={paragraphClass}>3. Usługodawca rozpatruje reklamację bez zbędnej zwłoki, co do zasady w terminie 14 dni od jej otrzymania. Jeżeli rozpatrzenie reklamacji wymaga dodatkowych informacji, Usługodawca może zwrócić się o ich uzupełnienie.</p>
              <p className={paragraphClass}>4. Postanowienia niniejszego paragrafu dotyczą reklamacji usług elektronicznych i nie ograniczają uprawnień wynikających z bezwzględnie obowiązujących przepisów ani zasad odpowiedzialności związanych z właściwą Usługą kancelarii.</p>

              <h2 className={headingClass}>§ 10. Dane osobowe i prywatność</h2>
              <p className={paragraphClass}>1. Administratorem danych osobowych przetwarzanych w związku z Serwisem i świadczeniem Usług kancelarii jest Krystian Karpiuk Kancelaria Radcy Prawnego.</p>
              <p className={paragraphClass}>2. Szczegółowe informacje o przetwarzaniu danych osobowych, w tym informacje wymagane przez art. 13 i 14 RODO, znajdują się w Polityce Prywatności i Cookies dostępnej w Serwisie.</p>
              <p className={paragraphClass}>3. Zasady wykorzystywania plików cookies i podobnych technologii określa Polityka Prywatności i Cookies oraz ustawienia mechanizmu zarządzania zgodami dostępnego w Serwisie.</p>

              <h2 className={headingClass}>§ 11. Dane przekazywane do rejestrów i organów</h2>
              <p className={paragraphClass}>1. W ramach realizacji Usług kancelarii dane mogą być przekazywane do właściwych systemów i organów, w szczególności Portalu Rejestrów Sądowych, systemu S24, Krajowego Rejestru Sądowego, sądów rejestrowych oraz innych organów właściwych dla danego zlecenia.</p>
              <p className={paragraphClass}>2. Zakres przekazywanych danych zależy od rodzaju zlecenia i wymagań wynikających z przepisów prawa oraz funkcjonalności właściwego systemu.</p>
              <p className={paragraphClass}>3. Podmioty publiczne otrzymujące dane działają jako odrębni administratorzy w zakresie wynikającym z przepisów regulujących ich działalność.</p>

              <h2 className={headingClass}>§ 12. Materiały informacyjne i odpowiedzialność</h2>
              <p className={paragraphClass}>1. Publicznie dostępne artykuły, opisy usług i inne materiały w Serwisie mają charakter ogólny i informacyjny. Nie stanowią indywidualnej porady prawnej ani opinii odnoszącej się do konkretnego stanu faktycznego.</p>
              <p className={paragraphClass}>2. Indywidualna pomoc prawna lub rejestrowa jest świadczona dopiero w ramach przyjętego zlecenia i w zakresie uzgodnionym z klientem.</p>
              <p className={paragraphClass}>3. Usługodawca dokłada należytej staranności do prawidłowego działania Serwisu, jednak nie gwarantuje jego nieprzerwanej dostępności, w szczególności w przypadku awarii, prac technicznych lub zdarzeń pozostających poza kontrolą Usługodawcy.</p>
              <p className={paragraphClass}>4. Postanowienia Regulaminu nie wyłączają odpowiedzialności, której zgodnie z bezwzględnie obowiązującymi przepisami prawa nie można wyłączyć ani ograniczyć.</p>

              <h2 className={headingClass}>§ 13. Prawa własności intelektualnej</h2>
              <p className={paragraphClass}>1. Treści udostępnione w Serwisie mogą stanowić przedmiot praw autorskich lub innych praw własności intelektualnej.</p>
              <p className={paragraphClass}>2. Korzystanie z Serwisu nie oznacza nabycia praw do jego treści. Dozwolone jest korzystanie z nich w granicach wynikających z przepisów prawa lub wyraźnej zgody uprawnionego.</p>

              <h2 className={headingClass}>§ 14. Zmiany Regulaminu</h2>
              <p className={paragraphClass}>1. Usługodawca może zmienić Regulamin z ważnych przyczyn, w szczególności w razie zmiany prawa, funkcjonalności Serwisu, sposobu świadczenia usług lub konieczności zwiększenia bezpieczeństwa.</p>
              <p className={paragraphClass}>2. Aktualna wersja Regulaminu jest publikowana w Serwisie wraz z datą obowiązywania.</p>
              <p className={paragraphClass}>3. Zmiana Regulaminu nie narusza praw nabytych ani warunków odpłatnej Usługi kancelarii już uzgodnionych z klientem, chyba że zmiana wynika z bezwzględnie obowiązujących przepisów.</p>

              <h2 className={headingClass}>§ 15. Kontakt</h2>
              <p className={paragraphClass}>Kontakt z Usługodawcą: biuro@zmianakrs.pl, tel. 572 234 779, Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń.</p>
            </div>
          </div></div></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
