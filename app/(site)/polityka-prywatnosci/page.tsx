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
  description:
    "Dowiedz się jak chronimy Twoje dane osobowe podczas obsługi wniosków KRS. Zgodność z RODO i zasady przetwarzania danych klientów.",
  url: pageUrl,
  mainEntity: organizationSchema,
}

export const metadata: Metadata = {
  title: "Polityka prywatności - ochrona danych osobowych w usługach KRS",
  description:
    "Dowiedz się jak chronimy Twoje dane osobowe podczas obsługi wniosków KRS. Zgodność z RODO i zasady przetwarzania danych klientów.",
  alternates: { canonical: pagePath },
  openGraph: {
    title: "Polityka prywatności | ZmianaKRS",
    description: "Dowiedz się jak chronimy Twoje dane osobowe podczas obsługi wniosków KRS.",
    url: pageUrl,
    siteName: brandName,
  },
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="relative min-h-screen text-white">
      <Script id="privacy-structured-data" type="application/ld+json">
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
                <h1 className="text-3xl font-bold text-white mb-8">Polityka Prywatności i Cookies</h1>

                <div className="prose prose-invert max-w-none">
                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§1. Informacje ogólne</h2>
                  <p className="text-gray-300 mb-4">
                    Niniejsza Polityka Prywatności i Cookies określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies w serwisie internetowym www.zmianakrs.pl (dalej: &quot;Serwis&quot;), prowadzonym przez Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58 (dalej: &quot;Administrator&quot;).
                  </p>
                  <p className="text-gray-300 mb-4">
                    Serwis oraz świadczone usługi są skierowane wyłącznie do przedsiębiorców w rozumieniu art. 43 Kodeksu cywilnego. Administrator nie świadczy usług na rzecz konsumentów.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Administrator nie świadczy usług elektronicznych w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Korzystanie z Serwisu oznacza akceptację niniejszej Polityki Prywatności i Cookies.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§2. Administrator danych osobowych i kontakt</h2>
                  <p className="text-gray-300 mb-4">
                    Administratorem danych osobowych jest Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58, e-mail: <a href="mailto:biuro@zmianakrs.pl" className="text-amber-400 hover:text-amber-300 underline">biuro@zmianakrs.pl</a>, tel.: <a href="tel:+48572234779" className="text-amber-400 hover:text-amber-300 underline">572 234 779</a>.
                  </p>
                  <p className="text-gray-300 mb-4">
                    W sprawach dotyczących ochrony danych osobowych można kontaktować się pod podanym adresem e-mail lub telefonicznie.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§3. Cele i podstawy prawne przetwarzania danych</h2>
                  <p className="text-gray-300 mb-4">Administrator przetwarza dane osobowe w celu:</p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>realizacji usług obsługi wpisów i zmian do KRS, zakładania spółek oraz przygotowywania dokumentów (art. 6 ust. 1 lit. b RODO),</li>
                    <li>wypełnienia obowiązków prawnych (art. 6 ust. 1 lit. c RODO),</li>
                    <li>kontaktu i komunikacji z Użytkownikiem (art. 6 ust. 1 lit. b i f RODO),</li>
                    <li>marketingu bezpośredniego własnych usług (za zgodą – art. 6 ust. 1 lit. a RODO),</li>
                    <li>zapewnienia bezpieczeństwa i administrowania Serwisem (art. 6 ust. 1 lit. f RODO).</li>
                  </ul>
                  <p className="text-gray-300 mb-4">
                    Dane przetwarzane są wyłącznie w zakresie niezbędnym do realizacji powyższych celów.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§4. Rodzaje przetwarzanych danych</h2>
                  <p className="text-gray-300 mb-4">
                    Dane osobowe obejmują: imię i nazwisko, nazwę firmy, adres e-mail, numer telefonu, dane rejestrowe spółki, adres siedziby, dane pełnomocnictwa, adres IP, dane techniczne urządzenia i przeglądarki oraz inne dane niezbędne do realizacji usług.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Dane mogą pochodzić bezpośrednio od Użytkownika lub być pozyskiwane automatycznie podczas korzystania z Serwisu (np. pliki cookies).
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§5. Odbiorcy danych i przekazywanie danych poza EOG</h2>
                  <p className="text-gray-300 mb-4">Dane mogą być przekazywane:</p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>podmiotom przetwarzającym dane na zlecenie Administratora (dostawcy IT, hosting, biura księgowe, kancelaria prawne, notariusze itp.),</li>
                    <li>organom publicznym na podstawie przepisów prawa,</li>
                    <li>partnerom technologicznym (w tym Google, Meta, Hotjar, Smartsupp) w zakresie niezbędnym do realizacji usług.</li>
                  </ul>
                  <p className="text-gray-300 mb-4">
                    Przekazywanie danych poza Europejski Obszar Gospodarczy odbywa się wyłącznie na podstawie decyzji Komisji Europejskiej o adekwatności ochrony lub standardowych klauzul umownych.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§6. Przekazywanie danych osobowych do systemów rejestrowych i sądów rejestrowych</h2>
                  <p className="text-gray-300 mb-4">
                    W ramach realizacji usług Administrator przekazuje dane osobowe do systemów rejestrowych, w tym platformy elektronicznej S24 prowadzonej przez Ministerstwo Sprawiedliwości, Portalu Rejestrów Sądowych (PRS) oraz bezpośrednio do sądów rejestrowych, w celu złożenia wniosków i realizacji obowiązków wynikających z przepisów prawa, w szczególności ustawy o Krajowym Rejestrze Sądowym.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Przekazanie tych danych jest niezbędne do wykonania umowy oraz realizacji usług i nie jest możliwe bez ich udostępnienia właściwym organom rejestrowym.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Ministerstwo Sprawiedliwości oraz sądy rejestrowe są administratorami danych osobowych w zakresie przetwarzania danych w systemach S24 i PRS oraz w sądach rejestrowych.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§7. Okres przechowywania danych</h2>
                  <p className="text-gray-300 mb-4">
                    Dane są przechowywane przez okres niezbędny do realizacji celów, w tym przez czas trwania umowy oraz okresy wymagane przepisami prawa.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Po upływie okresu dane są usuwane lub anonimizowane.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§8. Prawa osób, których dane dotyczą</h2>
                  <p className="text-gray-300 mb-4">Użytkownik ma prawo do:</p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>dostępu do danych,</li>
                    <li>sprostowania danych,</li>
                    <li>usunięcia danych,</li>
                    <li>ograniczenia przetwarzania,</li>
                    <li>przenoszenia danych,</li>
                    <li>wniesienia sprzeciwu,</li>
                    <li>cofnięcia zgody w dowolnym momencie,</li>
                    <li>wniesienia skargi do organu nadzorczego (Prezesa UODO).</li>
                  </ul>
                  <p className="text-gray-300 mb-4">
                    Realizację praw można zgłaszać pod adresem e-mail: biuro@zmianakrs.pl.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§9. Bezpieczeństwo danych</h2>
                  <p className="text-gray-300 mb-4">
                    Administrator stosuje środki techniczne i organizacyjne zapewniające bezpieczeństwo danych, w tym szyfrowanie SSL, kontrolę dostępu i audyty.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Dane nie są wykorzystywane do profilowania ani zautomatyzowanego podejmowania decyzji.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§10. Pliki cookies i technologie śledzące</h2>
                  <p className="text-gray-300 mb-4">Serwis używa plików cookies w celach:</p>
                  <ul className="list-disc pl-6 text-gray-300 mb-4">
                    <li>niezbędnych do działania serwisu (nie wymagają zgody),</li>
                    <li>analitycznych,</li>
                    <li>marketingowych.</li>
                  </ul>
                  <p className="text-gray-300 mb-4">
                    Użytkownik wyraża świadomą zgodę na stosowanie cookies innych niż niezbędne poprzez aktywne działanie (np. kliknięcie &quot;Akceptuję&quot; w banerze cookies).
                  </p>
                  <p className="text-gray-300 mb-4">
                    Użytkownik może w każdej chwili zmienić ustawienia cookies w przeglądarce lub za pomocą panelu dostępnego na stronie - link w stopce – Zmiana ustawień cookies.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§11. Zmiany Polityki Prywatności i Cookies</h2>
                  <p className="text-gray-300 mb-4">
                    Administrator zastrzega sobie prawo do zmiany polityki z ważnych przyczyn, o czym poinformuje użytkowników na stronie.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Aktualna wersja polityki jest zawsze dostępna na stronie Serwisu.
                  </p>

                  <h2 className="text-xl font-semibold text-white mt-8 mb-4">§12. Kontakt</h2>
                  <p className="text-gray-300 mb-4">
                    Wszelkie pytania dotyczące ochrony danych osobowych i cookies należy kierować na adres e-mail: biuro@zmianakrs.pl.
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
