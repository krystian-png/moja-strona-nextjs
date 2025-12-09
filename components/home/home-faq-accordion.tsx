'use client';

import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function HomeFAQAccordion() {
  return (
    <section id="faq" className="mx-auto mt-16 w-full max-w-4xl px-4">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg backdrop-blur md:p-8">
        <h2 className="mb-4 text-center text-2xl font-semibold text-white md:text-3xl">
          Najczęściej zadawane pytania o zmianę wpisu w KRS
        </h2>
        <p className="mb-6 text-center text-sm text-slate-200/80 md:text-base">
          Poniżej znajdziesz odpowiedzi na najważniejsze pytania dotyczące zmiany wpisu
          w rejestrze przedsiębiorców KRS, kosztów oraz obowiązków związanych z aktualizacją danych.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              1. Czym jest zmiana wpisu w KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              Zmiana wpisu w Krajowym Rejestrze Sądowym (KRS) to aktualizacja danych ujawnionych w rejestrze przedsiębiorców – takich jak skład zarządu, sposób reprezentacji, umowa spółki (obejmująca m.in. firmę, siedzibę, kapitał zakładowy czy PKD) lub inne informacje prawnie wymagane do ujawnienia. Obowiązek aktualizacji wynika z ustawy o KRS i dotyczy każdej spółki wpisanej do rejestru.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              2. Jakie zmiany najczęściej zgłasza się do KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              Najczęściej aktualizowane dane to: zmiana zarządu, powołanie lub odwołanie prokurenta, zmiana umowy spółki obejmująca m.in. firmę (nazwę), siedzibę, wysokość kapitału zakładowego lub zmianę PKD. Zmiana tych danych wymaga zgłoszenia ich do KRS, tak aby rejestr odzwierciedlał aktualny stan prawny spółki.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              3. Czy zmiana wpisu w KRS jest obowiązkowa?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Tak. Każda zmiana danych ujawnionych w rejestrze przedsiębiorców musi zostać zgłoszona do KRS w terminie określonym przepisami. Brak zgłoszenia może prowadzić do odpowiedzialności osób reprezentujących spółkę.
              </p>
              <p>
                Więcej na ten temat przeczytasz w artykule:{" "}
                <Link
                  href="/artykul/obowiazek-aktualizacji-danych-krs-ryzyka-zaniechania"
                  className="underline underline-offset-2 hover:text-sky-300"
                >
                  Obowiązek aktualizacji danych w KRS a ryzyka związane z zaniechaniem
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              4. Jak wygląda proces zmiany wpisu w KRS z Waszym udziałem?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              Szczegółowy opis krok po kroku znajdziesz w sekcji „Jak działamy” na stronie Usługi – tam przedstawiamy cały proces od pierwszego kontaktu, przez analizę sytuacji, po złożenie kompletnego wniosku do KRS.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              5. Czy mogę zgłosić zmianę w KRS samodzielnie?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              Tak, zmiany możesz dokonać samodzielnie przez system PRS lub – w określonych przypadkach – S24. Wymaga to jednak przygotowania poprawnych uchwał, wniosku i załączników, a także podpisania dokumentów podpisem kwalifikowanym lub Profilem Zaufanym. Błędny wniosek może skutkować zwrotem lub wezwaniem do uzupełnienia braków.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              6. Jakie dokumenty są potrzebne do zmiany danych w KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              W zależności od rodzaju zmiany najczęściej wymagane są: uchwała wspólników lub odpowiedni dokument zarządu, tekst jednolity umowy spółki w przypadku zmian umowy oraz formularz PRS lub wniosek S24. Zakres dokumentacji zależy od rodzaju modyfikowanych danych.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              7. Jakie są konsekwencje braku aktualizacji danych w KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Brak terminowego zgłoszenia zmiany danych spółki w KRS może mieć kilka skutków. Po pierwsze, sąd może nałożyć na członków zarządu grzywnę za niedopełnienie obowiązku zgłoszeniowego (art. 24 i n. uKRS). Po drugie, kontrahenci, bank lub notariusz mogą odmówić dokonania czynności, jeśli dane w KRS są nieaktualne.
              </p>
              <p>
                Więcej na ten temat przeczytasz tutaj:{" "}
                <Link
                  href="/artykul/obowiazek-aktualizacji-danych-krs-ryzyka-zaniechania"
                  className="underline underline-offset-2 hover:text-sky-300"
                >
                  Obowiązek aktualizacji danych w KRS a ryzyka związane z zaniechaniem
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              8. Co składa się na całkowity koszt wpisu lub zmiany wpisu w KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Na całkowity koszt wpisu lub zmiany wpisu w KRS składają się: opłaty sądowe, wynagrodzenie za naszą usługę oraz ewentualne dodatkowe opłaty (np. skarbowe lub notarialne), jeśli są wymagane.
              </p>
              <p>
                Szczegółowe stawki za poszczególne usługi znajdziesz w zakładce{" "}
                <Link href="/cennik" className="underline underline-offset-2 hover:text-sky-300">
                  Cennik
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              9. Ile wynosi opłata sądowa za pierwszy wpis spółki do KRS po zmianie przepisów?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Po zmianie przepisów opłata sądowa za pierwszy wpis spółki z o.o. do rejestru przedsiębiorców KRS wynosi:
              </p>
              <ul className="mb-2 list-disc pl-5">
                <li>250 zł – jeżeli rejestracja odbywa się online z wykorzystaniem wzorca umowy (S24),</li>
                <li>500 zł – jeżeli zgłoszenie następuje przez PRS na pełnym formularzu, po zawarciu umowy w formie aktu notarialnego.</li>
              </ul>
              <p>
                Do opłaty sądowej dochodzi wynagrodzenie za naszą usługę oraz ewentualne inne opłaty, w zależności od sytuacji. Szczegółowe kwoty znajdziesz w zakładce{" "}
                <Link href="/cennik" className="underline underline-offset-2 hover:text-sky-300">
                  Cennik
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              10. Ile wynosi opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS (np. zmianę zarządu, zmianę wspólników, zgłoszenie prokury)?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Opłata sądowa za zmianę wpisu w rejestrze przedsiębiorców KRS wynosi 250 zł za jeden wniosek o zmianę wpisu. Dotyczy to m.in. zmiany zarządu, zmiany wspólników, zgłoszenia lub odwołania prokury, zmiany siedziby czy sposobu reprezentacji.
              </p>
              <p>
                Do opłaty sądowej dochodzi wynagrodzenie za naszą usługę – szczegółowe informacje znajdziesz w zakładce{" "}
                <Link href="/cennik" className="underline underline-offset-2 hover:text-sky-300">
                  Cennik
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              11. Czy przy wpisie lub zmianie wpisu w KRS trzeba płacić 100 zł za ogłoszenie w MSiG?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Nie. Od 29 listopada 2025 r. wpisy i zmiany wpisów w KRS nie są już ogłaszane w Monitorze Sądowym i Gospodarczym, dlatego nie pobiera się opłaty 100 zł za ogłoszenie.
              </p>
              <p>
                Więcej informacji o tym, jak rozliczamy naszą usługę przy zmianie wpisu, znajdziesz w zakładce{" "}
                <Link href="/cennik" className="underline underline-offset-2 hover:text-sky-300">
                  Cennik
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              12. Od czego zależy wysokość wynagrodzenia za Waszą usługę przy wpisie lub zmianie w KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              <p className="mb-2">
                Wynagrodzenie za naszą usługę zależy m.in. od liczby i rodzaju wprowadzanych zmian oraz konieczności przygotowania dodatkowych dokumentów (np. uchwał, tekstu jednolitego umowy, pełnomocnictw) i liczby dokumentów, które muszą zostać dołączone do wniosku.
              </p>
              <p className="mb-2">
                Ceny za wszystkie usługi związane ze zmianą wpisu w KRS są jasno wyszczególnione w zakładce{" "}
                <Link href="/cennik" className="underline underline-offset-2 hover:text-sky-300">
                  Cennik
                </Link>
                .
              </p>
              <p>
                Opłata sądowa jest stała, natomiast wysokość naszego wynagrodzenia wynika z nakładu pracy i liczby przygotowanych dla Ciebie dokumentów.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13" className="border border-white/5 bg-slate-900/40 px-3 py-1 rounded-xl">
            <AccordionTrigger className="text-left text-sm font-medium text-white md:text-base">
              13. Co jeszcze może wpływać na koszt zmiany wpisu w KRS?
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-100/90 md:text-base">
              Jeżeli dana czynność wymaga aktu notarialnego (np. zmiana umowy spółki poza S24), do opłaty sądowej i wynagrodzenia za naszą usługę dochodzą jeszcze opłaty notarialne. Są to odrębne koszty, które nie są częścią opłaty sądowej, ale wpływają na całkowity koszt całej operacji dla spółki.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
