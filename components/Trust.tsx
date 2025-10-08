import Image from "next/image"

import Link from "next/link"

export default function Trust() {
  return (
    <>
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 text-center">
              Profesjonalna obsługa wniosków o zmianę wpisu w KRS
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 text-center">
              Aktualizacja danych w KRS – obowiązek, którego nie warto odkładać
            </h3>

            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Zmiana danych w KRS to nie tylko formalność – to prawny obowiązek każdej spółki wpisanej do rejestru. Niedopełnienie go może skutkować poważnymi konsekwencjami: grzywną, odpowiedzialnością członków zarządu, a nawet odmową wykonania czynności przez kontrahenta czy notariusza.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-5 mb-3">
                Kompleksowa obsługa zmian w KRS
              </h3>

              <p className="text-base sm:text-lg">
                Nasza firma specjalizuje się w{" "}
                <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                  kompleksowej obsłudze wniosków KRS
                </Link>{" "}
                – od przygotowania uchwał i dokumentów, przez złożenie elektronicznego wniosku w systemie PRS lub S24, aż po uzyskanie postanowienia sądu. Pomagamy zarówno przy{" "}
                <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                  zmianie zarządu w KRS
                </Link>
                , zmianie adresu, siedziby, PKD czy kapitału zakładowego, jak i przy aktualizacji{" "}
                <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 underline">
                  umowy spółki KRS
                </Link>{" "}
                lub dopisaniu prokurenta.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mt-5 mb-3">
                Profesjonalne wsparcie w procesie zmiany wpisu w KRS
              </h3>

              <p className="text-base sm:text-lg">
                Działamy sprawnie, bez zbędnych formalności i w pełnej zgodzie z obowiązującymi przepisami. Jeśli potrzebujesz pomocy w zgłoszeniu zmiany do KRS – sprawdź{" "}
                <Link href="/cennik" className="text-amber-400 hover:text-amber-300 underline">
                  nasz cennik usług KRS
                </Link>{" "}
                lub{" "}
                <Link href="/kontakt" className="text-amber-400 hover:text-amber-300 underline">
                  skontaktuj się z nami
                </Link>
                . Poznaj także{" "}
                <Link href="/o-nas" className="text-amber-400 hover:text-amber-300 underline">
                  nasze doświadczenie
                </Link>{" "}
                i przeczytaj{" "}
                <Link href="/blog" className="text-amber-400 hover:text-amber-300 underline">
                  artykuły o zmianach w KRS
                </Link>
                .
              </p>

              <div className="text-center mt-6">
                <p className="text-lg sm:text-xl font-semibold text-amber-400 mb-5">
                  Skorzystaj z doświadczenia i uniknij błędów – powierz wpis zmian do KRS profesjonalistom.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
                  <Link href="/blog" className="text-amber-400 hover:text-amber-300 underline text-lg">
                    Blog
                  </Link>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <Link href="/o-nas" className="text-amber-400 hover:text-amber-300 underline text-lg">
                    O nas
                  </Link>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <Link href="/ksiegowi" className="text-amber-400 hover:text-amber-300 underline text-lg">
                    Współpraca z księgowymi
                  </Link>
                </div>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Skontaktuj się z nami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 py-10 space-y-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-5 text-center text-white">
            Czym jest Krajowy Rejestr Sądowy (KRS)?
          </h1>

          <Image
            src="/images/budynek-krs-tablica-przy-wejsciu.webp"
            alt="budynek-krs-tablica-przy-wejsciu"
            className="rounded-2xl shadow-md mb-6 mx-auto max-w-full h-auto"
            width={400}
            height={300}
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-sm text-gray-300 mb-8 sr-only">
            Wejście do budynku z tablicą „Krajowy Rejestr Sądowy&quot; – symbol jawności i legalności rejestrów.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
            <strong>Krajowy Rejestr Sądowy (KRS)</strong> to centralny, jawny rejestr publiczny prowadzony przez sądy rejestrowe (działające w strukturze sądów okręgowych) zgodnie z ustawą z dnia 20 sierpnia 1997 r. o Krajowym Rejestrze Sądowym (Dz.U. z 2023 r. poz. 685). Rejestr ten stanowi kluczowy filar przejrzystości i bezpieczeństwa obrotu prawnego i gospodarczego w Polsce.
          </p>

          <ul className="list-disc list-inside my-5 space-y-2 text-white text-base sm:text-lg">
            <li>Rejestr przedsiębiorców</li>
            <li>Rejestr stowarzyszeń, fundacji i organizacji</li>
            <li>Krajowy Rejestr Zadłużonych (KRZ)</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
            Zgodnie z art. 8 ust. 1 uKRS, rejestr jest jawny – każdy ma prawo dostępu do danych bez wykazywania interesu prawnego. Wpisy korzystają z domniemania prawdziwości (art. 17 uKRS) i są dostępne przez wyszukiwarkę eKRS.{" "}
            <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 font-semibold underline">
              Profesjonalna obsługa zmian w KRS
            </Link>{" "}
            gwarantuje zgodność z wszystkimi wymogami prawnymi.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Jakie dane ujawnia się w KRS?
          </h2>

          <Image
            src="/images/dokumenty-finansowe-repozytorium-krs.webp"
            alt="dokumenty-finansowe-repozytorium-krs"
            className="rounded-2xl shadow-md mb-6 mx-auto max-w-full h-auto"
            width={400}
            height={300}
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-sm text-gray-300 mb-8 sr-only">
            Przechowywane dokumenty finansowe w repozytorium KRS – dostępność i obowiązki informacyjne spółek.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
            W zależności od podmiotu, KRS zawiera m.in. dane identyfikacyjne (KRS, NIP, REGON), firmę, formę prawną, PKD, organy reprezentacji, wspólników, kapitał zakładowy, adresy, postępowania upadłościowe i restrukturyzacyjne, dane pełnomocników, kuratorów oraz złożone dokumenty.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Kto podlega obowiązkowi rejestracji w KRS?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
            W rejestrze przedsiębiorców ujmuje się spółki osobowe i kapitałowe, spółdzielnie, przedsiębiorstwa państwowe, oddziały firm zagranicznych i inne jednostki na podstawie przepisów szczególnych. Rejestr stowarzyszeń obejmuje fundacje, stowarzyszenia, związki zawodowe, izby gospodarcze i inne organizacje społeczne.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Charakter wpisów – konstytutywny i deklaratoryjny
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
            Wpis może tworzyć skutki prawne (konstytutywny) lub je jedynie potwierdzać (deklaratoryjny). Przykładowo:{" "}
            <Link href="/uslugi" className="text-amber-400 hover:text-amber-300 font-semibold underline">
              zmiana umowy spółki
            </Link>{" "}
            wymaga wpisu do KRS (konstytutywny), natomiast powołanie członka zarządu skuteczne jest od uchwały, choć wpis ma znaczenie dla bezpieczeństwa obrotu (art. 17 uKRS).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Tryby elektroniczne: PRS i S24
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-5 text-white">
            Wnioski do KRS składa się wyłącznie elektronicznie: przez PRS (pełna funkcjonalność) lub S24 (uproszczony system dla prostych przypadków, z użyciem wzorców umów). Oba wymagają podpisu kwalifikowanego lub profilu zaufanego.
          </p>

          <Image
            src="/images/budynek-urzedu-osoby-z-teczkami-przy-wejsciu-do-krs.webp"
            alt="budynek-urzedu-osoby-z-teczkami-przy-wejsciu-do-krs"
            className="rounded-2xl shadow-md mb-6 mx-auto max-w-full h-auto"
            width={400}
            height={300}
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-sm text-gray-300 mb-8 sr-only">
            Przedsiębiorcy kierujący się do sądu rejestrowego w celu aktualizacji danych w KRS.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
            Repozytorium dokumentów KRS
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            Na mocy art. 19e uKRS, spółki składają sprawozdania finansowe, uchwały, opinie biegłych i inne dokumenty. Brak ich złożenia grozi grzywną lub rozwiązaniem spółki bez likwidacji (art. 25a uKRS).
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
            Znaczenie KRS dla bezpieczeństwa obrotu
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-6 text-white">
            KRS zapewnia przejrzystość – dane w nim ujawnione są wiążące wobec osób trzecich. Zgodnie z art. 14 uKRS, nikt nie może powołać się na nieznajomość wpisu opublikowanego w Monitorze Sądowym i Gospodarczym. Kontrahenci mogą ufać danym ujawnionym w rejestrze.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
            Aktualizacja danych w KRS – dlaczego to ważne?
          </h2>

          <ul className="list-disc list-inside my-4 space-y-2 text-white text-base sm:text-lg">
            <li>Nieaktualne dane mogą unieważnić czynności prawne</li>
            <li>Chronią osoby działające w zaufaniu do rejestru</li>
            <li>Są podstawą oceny odpowiedzialności zarządu</li>
            <li>Brak aktualizacji może skutkować karą lub odpowiedzialnością cywilną (art. 23 uKRS, art. 293 i 483 k.s.h.)</li>
          </ul>

          <p className="mt-6 font-semibold text-lg sm:text-xl text-center text-white">
            Krajowy Rejestr Sądowy to nie tylko obowiązek – to fundament zaufania i wiarygodności w obrocie gospodarczym.{" "}
            <Link href="/kontakt" className="text-amber-400 hover:text-amber-300 font-semibold underline">
              Skontaktuj się z nami
            </Link>
            , aby uzyskać profesjonalną pomoc w aktualizacji danych w KRS.
          </p>
        </div>
      </section>
    </>
  )
}
