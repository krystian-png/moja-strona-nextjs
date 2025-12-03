import type { Metadata } from "next"
import Script from "next/script"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
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
    <div className="relative min-h-screen bg-slate-100 text-slate-900">
      <Script id="privacy-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Navbar />
      <main className="relative z-10 flex-1 py-16 sm:py-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">Polityka prywatności i cookies</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Polityka Prywatności i Cookies</h1>
            <p className="mt-4 text-base text-slate-700">
              Niniejsza Polityka Prywatności i Cookies określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies
              w serwisie internetowym www.zmianakrs.pl (dalej: „Serwis"), prowadzonym przez Krystian Karpiuk Kancelaria Radcy Prawnego,
              ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58 (dalej: „Administrator").
            </p>
            <div className="prose mt-8 max-w-none text-slate-800 prose-h2:mt-10 prose-h2:text-2xl prose-h2:text-slate-900 prose-p:text-slate-800 prose-li:text-slate-800">
              <h2 className="text-2xl font-semibold">§1. Informacje ogólne</h2>
              <p>Serwis oraz świadczone usługi są skierowane wyłącznie do przedsiębiorców w rozumieniu art. 43 Kodeksu cywilnego. Administrator nie świadczy usług na rzecz konsumentów.</p>
              <p>Administrator nie świadczy usług elektronicznych w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.</p>
              <p>Korzystanie z Serwisu oznacza akceptację niniejszej Polityki Prywatności i Cookies.</p>

              <h2 className="text-2xl font-semibold">§2. Administrator danych osobowych i kontakt</h2>
              <p>
                Administratorem danych osobowych jest Krystian Karpiuk Kancelaria Radcy Prawnego, ul. Wschodnia 24/3, 62-030 Luboń, NIP: 669-217-69-58, e-mail:
                {" "}
                <a className="text-amber-600 hover:text-amber-500" href="mailto:biuro@zmianakrs.pl">
                  biuro@zmianakrs.pl
                </a>
                , tel.:{" "}
                <a className="text-amber-600 hover:text-amber-500" href="tel:+48572234779">
                  572 234 779
                </a>
                .
              </p>
              <p>W sprawach dotyczących ochrony danych osobowych można kontaktować się pod podanym adresem e-mail lub telefonicznie.</p>

              <h2 className="text-2xl font-semibold">§3. Cele i podstawy prawne przetwarzania danych</h2>
              <p>Administrator przetwarza dane osobowe w celu:</p>
              <ul className="list-disc pl-6">
                <li>realizacji usług obsługi wpisów i zmian do KRS, zakładania spółek oraz przygotowywania dokumentów (art. 6 ust. 1 lit. b RODO),</li>
                <li>wypełnienia obowiązków prawnych (art. 6 ust. 1 lit. c RODO),</li>
                <li>kontaktu i komunikacji z Użytkownikiem (art. 6 ust. 1 lit. b i f RODO),</li>
                <li>marketingu bezpośredniego własnych usług (za zgodą – art. 6 ust. 1 lit. a RODO),</li>
                <li>zapewnienia bezpieczeństwa i administrowania Serwisem (art. 6 ust. 1 lit. f RODO).</li>
              </ul>
              <p>Dane przetwarzane są wyłącznie w zakresie niezbędnym do realizacji powyższych celów.</p>

              <h2 className="text-2xl font-semibold">§4. Rodzaje przetwarzanych danych</h2>
              <p>
                Dane osobowe obejmują: imię i nazwisko, nazwę firmy, adres e-mail, numer telefonu, dane rejestrowe spółki, adres siedziby, dane pełnomocnictwa, adres IP, dane techniczne
                urządzenia i przeglądarki oraz inne dane niezbędne do realizacji usług.
              </p>
              <p>Dane mogą pochodzić bezpośrednio od Użytkownika lub być pozyskiwane automatycznie podczas korzystania z Serwisu (np. pliki cookies).</p>

              <h2 className="text-2xl font-semibold">§5. Odbiorcy danych i przekazywanie danych poza EOG</h2>
              <p>Dane mogą być przekazywane:</p>
              <ul className="list-disc pl-6">
                <li>podmiotom przetwarzającym dane na zlecenie Administratora (dostawcy IT, hosting, biura księgowe, kancelaria prawne, notariusze itp.),</li>
                <li>organom publicznym na podstawie przepisów prawa,</li>
                <li>partnerom technologicznym (w tym Google, Meta, Hotjar, Smartsupp) w zakresie niezbędnym do realizacji usług.</li>
              </ul>
              <p>Przekazywanie danych poza Europejski Obszar Gospodarczy odbywa się wyłącznie na podstawie decyzji Komisji Europejskiej o adekwatności ochrony lub standardowych klauzul umownych.</p>

              <h2 className="text-2xl font-semibold">§6. Przekazywanie danych osobowych do systemów rejestrowych i sądów rejestrowych</h2>
              <p>
                W ramach realizacji usług Administrator przekazuje dane osobowe do systemów rejestrowych, w tym platformy elektronicznej S24 prowadzonej przez Ministerstwo Sprawiedliwości,
                Portalu Rejestrów Sądowych (PRS) oraz bezpośrednio do sądów rejestrowych, w celu złożenia wniosków i realizacji obowiązków wynikających z przepisów prawa, w szczególności ustawy
                o Krajowym Rejestrze Sądowym.
              </p>
              <p>Przekazanie tych danych jest niezbędne do wykonania umowy oraz realizacji usług i nie jest możliwe bez ich udostępnienia właściwym organom rejestrowym.</p>
              <p>Ministerstwo Sprawiedliwości oraz sądy rejestrowe są administratorami danych osobowych w zakresie przetwarzania danych w systemach S24 i PRS oraz w sądach rejestrowych.</p>

              <h2 className="text-2xl font-semibold">§7. Okres przechowywania danych</h2>
              <p>Dane są przechowywane przez okres niezbędny do realizacji celów, w tym przez czas trwania umowy oraz okresy wymagane przepisami prawa.</p>
              <p>Po upływie okresu dane są usuwane lub anonimizowane.</p>

              <h2 className="text-2xl font-semibold">§8. Prawa osób, których dane dotyczą</h2>
              <p>Użytkownik ma prawo do:</p>
              <ul className="list-disc pl-6">
                <li>dostępu do danych,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>przenoszenia danych,</li>
                <li>wniesienia sprzeciwu,</li>
                <li>cofnięcia zgody w dowolnym momencie,</li>
                <li>wniesienia skargi do organu nadzorczego (Prezesa UODO).</li>
              </ul>
              <p>Realizację praw można zgłaszać pod adresem e-mail: biuro@zmianakrs.pl.</p>

              <h2 className="text-2xl font-semibold">§9. Bezpieczeństwo danych</h2>
              <p>Administrator stosuje środki techniczne i organizacyjne zapewniające bezpieczeństwo danych, w tym szyfrowanie SSL, kontrolę dostępu i audyty.</p>
              <p>Dane nie są wykorzystywane do profilowania ani zautomatyzowanego podejmowania decyzji.</p>

              <h2 className="text-2xl font-semibold">§10. Pliki cookies i technologie śledzące</h2>
              <p>Serwis używa plików cookies w celach:</p>
              <ul className="list-disc pl-6">
                <li>niezbędnych do działania serwisu (nie wymagają zgody),</li>
                <li>analitycznych,</li>
                <li>marketingowych.</li>
              </ul>
              <p>Użytkownik wyraża świadomą zgodę na stosowanie cookies innych niż niezbędne poprzez aktywne działanie (np. kliknięcie „Akceptuję" w banerze cookies).</p>
              <p>Użytkownik może w każdej chwili zmienić ustawienia cookies w przeglądarce lub za pomocą panelu dostępnego na stronie - link w stopce – Zmiana ustawień cookies.</p>

              <h2 className="text-2xl font-semibold">§11. Zmiany Polityki Prywatności i Cookies</h2>
              <p>Administrator zastrzega sobie prawo do zmiany polityki z ważnych przyczyn, o czym poinformuje użytkowników na stronie.</p>
              <p>Aktualna wersja polityki jest zawsze dostępna na stronie Serwisu.</p>

              <h2 className="text-2xl font-semibold">§12. Kontakt</h2>
              <p>Wszelkie pytania dotyczące ochrony danych osobowych i cookies należy kierować na adres e-mail: biuro@zmianakrs.pl.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
