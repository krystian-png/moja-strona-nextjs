# Etap 0 — punkt odniesienia SEO i poprawki techniczne

Odczyt produkcji: 2026-11-16T10:34:32.515354+00:00 (16 listopada 2026, Europe/Zurich: UTC+1).
Bazowy aktualny `main`: `37e1f1c26c4fd294226b0f5768ba542afa355b16` (PR #405). Ponowny `git ls-remote` potwierdził ten sam SHA. Gałąź: `fix/etap-0-seo`.
Zweryfikowana domena produkcyjna: https://zmianakrs.pl. Nie potwierdzono SHA wdrożenia produkcyjnego w panelu Vercel; poniżej oddzielamy pomiar produkcji od lokalnego buildu bazowego SHA.

## Wynik

- Usunięto podwójną markę z 11 tytułów, także strony głównej. Przyczyna: zwykły `metadata.title` zawierał markę, a nadrzędny layout stosował `%s | ZmianaKRS`. `lib/seo.ts` przekazuje title bez transformacji; `generateMetadata` artykułów przekazuje `post.title`. Nie zmieniono szablonu ani OG/Twitter. Brak dodatkowych potwierdzonych przypadków w przeglądzie deklaracji metadanych tras.
- W pięciu MDX usunięto nagłówki powtarzające temat tytułu z szablonu. Dwie istniejące kotwice z nagłówków Markdown zachowano jako puste `span id`. Pozostałe trzy nagłówki HTML nie miały ID. Wszystkie istniejące ID z próby zostały zachowane. Nie znaleziono kolejnych H1 w MDX; skontrolowano również wszystkie 17 wygenerowanych artykułów.
- Poprawiono trzy href; zachowano listę `/blog` i istniejące przekierowania. Pozostały kod, treści ofert, ceny, formularze i konfiguracja admina bez zmian. Zmiany widocznej treści ograniczają się do usunięcia powtórzonych nagłówków oraz opisowego tekstu wskazanego linku.
- Podgląd `VERCEL_ENV=preview`: globalny `X-Robots-Tag: noindex, nofollow` z `next.config.mjs`, a robots pozwala odczytać tę dyrektywę (`Allow: /`). Produkcja nie otrzymuje tej reguły; środowisko lokalne bez VERCEL_ENV zachowuje `Disallow: /`. Nie zmieniono middleware ani zabezpieczeń platformy.

## HTML przed i po

Przed: produkcja (pełny pomiar `production-before.json`) oraz build bazowego SHA (`local-before.json`). Po: `npm run build`, VERCEL_ENV=production, serwer http://localhost:3001 (`local-after-production.json`). Na produkcji niczego nie wdrożono. JSON zawierają status, końcowy URL, pełne title, wszystkie H1, canonical, href i ID.

| URL | title przed → po | H1 przed → po |
|---|---|---|
| `/` | Zmiana wpisu w KRS dla spółek – od 999 zł, zdalnie \| ZmianaKRS \| ZmianaKRS → Zmiana wpisu w KRS dla spółek – od 999 zł, zdalnie \| ZmianaKRS | 1 → 1 |
| `/cennik` | Ile kosztuje zmiana wpisu w KRS? Cennik usług \| ZmianaKRS \| ZmianaKRS → Ile kosztuje zmiana wpisu w KRS? Cennik usług \| ZmianaKRS | 1 → 1 |
| `/uslugi` | Usługi zmian wpisu w KRS dla spółek – obsługa wniosków KRS \| ZmianaKRS \| ZmianaKRS → Usługi zmian wpisu w KRS dla spółek – obsługa wniosków KRS \| ZmianaKRS | 1 → 1 |
| `/o-nas` | O nas – Eksperci ds. zmian wpisu w KRS \| ZmianaKRS \| ZmianaKRS → O nas – Eksperci ds. zmian wpisu w KRS \| ZmianaKRS | 1 → 1 |
| `/ksiegowi` | Obsługa KRS dla biur rachunkowych – współpraca B2B \| ZmianaKRS \| ZmianaKRS → Obsługa KRS dla biur rachunkowych – współpraca B2B \| ZmianaKRS | 1 → 1 |
| `/blog` | Blog ZmianaKRS \| Artykuły o zmianach w KRS \| ZmianaKRS → Blog \| Artykuły o zmianach w KRS \| ZmianaKRS | 1 → 1 |
| `/uslugi/zmiana-zarzadu-spolki-zoo` | Zmiana zarządu sp. z o.o. – obsługa od 999 zł \| ZmianaKRS \| ZmianaKRS → Zmiana zarządu sp. z o.o. – obsługa od 999 zł \| ZmianaKRS | 1 → 1 |
| `/uslugi/zmiana-adresu-spolki-zoo` | Zmiana adresu spółki z o.o. – obsługa od 999 zł \| ZmianaKRS \| ZmianaKRS → Zmiana adresu spółki z o.o. – obsługa od 999 zł \| ZmianaKRS | 1 → 1 |
| `/uslugi/prokurent-krs` | Prokurent w spółce – ustanowienie prokury i wpis do KRS \| ZmianaKRS \| ZmianaKRS → Prokurent w spółce – ustanowienie prokury i wpis do KRS \| ZmianaKRS | 1 → 1 |
| `/uslugi/zmiana-umowy-spolki-zoo` | Zmiana umowy spółki z o.o. – S24 lub notariusz, od 999 zł \| ZmianaKRS \| ZmianaKRS → Zmiana umowy spółki z o.o. – S24 lub notariusz, od 999 zł \| ZmianaKRS | 1 → 1 |
| `/uslugi/zmiana-wspolnika-spolki-zoo` | Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, od 999 zł \| ZmianaKRS \| ZmianaKRS → Zmiana wspólnika spółki z o.o. – sprzedaż udziałów, od 999 zł \| ZmianaKRS | 1 → 1 |
| `/uslugi/zmiana-kodow-pkd` | Zmiana kodów PKD w KRS – sprawdź, co wpisze system \| ZmianaKRS → Zmiana kodów PKD w KRS – sprawdź, co wpisze system \| ZmianaKRS | 1 → 1 |
| `/artykul/prokurent-krs-ustanowienie-prokury-wpis` | Prokurent w KRS: ustanowienie prokury i wpis (PRS/S24) – terminy, opłaty, błędy \| ZmianaKRS → Prokurent w KRS: ustanowienie prokury i wpis (PRS/S24) – terminy, opłaty, błędy \| ZmianaKRS | 2 → 1 |
| `/artykul/zmiana-adresu-i-siedziby-spolki-w-krs` | Zmiana adresu i siedziby spółki w KRS krok po kroku – PRS i S24, opłaty, terminy, błędy \| ZmianaKRS → Zmiana adresu i siedziby spółki w KRS krok po kroku – PRS i S24, opłaty, terminy, błędy \| ZmianaKRS | 2 → 1 |
| `/artykul/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci` | Zmiana zarządu w spółce z o.o. – krok po kroku i najważniejsze formalności \| ZmianaKRS → Zmiana zarządu w spółce z o.o. – krok po kroku i najważniejsze formalności \| ZmianaKRS | 2 → 1 |
| `/artykul/zmiana-przedmiotu-dzialalnosci-spolka-zoo` | Zmiana przedmiotu działalności w spółce z ograniczoną odpowiedzialnością \| ZmianaKRS → Zmiana przedmiotu działalności w spółce z ograniczoną odpowiedzialnością \| ZmianaKRS | 2 → 1 |
| `/artykul/zmiany-spolka-jawna-zgloszenie-krs` | Zmiany w spółce jawnej wymagające zgłoszenia do KRS \| ZmianaKRS → Zmiany w spółce jawnej wymagające zgłoszenia do KRS \| ZmianaKRS | 2 → 1 |
| `/artykul/rezygnacja-czlonka-zarzadu-spolka-zoo-wpis-krs` | Rezygnacja członka zarządu spółki z o.o. a wpis do KRS \| ZmianaKRS → Rezygnacja członka zarządu spółki z o.o. a wpis do KRS \| ZmianaKRS | 1 → 1 |
| `/artykul/zmiana-umowy-spolki-portal-s24-instrukcja` | Jak krok po kroku złożyć wniosek o zmianę umowy spółki przez portal S24 \| ZmianaKRS → Jak krok po kroku złożyć wniosek o zmianę umowy spółki przez portal S24 \| ZmianaKRS | 1 → 1 |

Każda z 19 stron: HTTP 200, końcowy URL bez zmiany ścieżki, jeden title i jeden H1 po poprawce, jeden canonical zachowany przed/po. Pełna treść H1 jest w JSON. Ceny w tytułach zachowane.

## Linki i przekierowania

| Źródło | Poprzedni href | Nowy href | Wynik lokalnego HTTP po zmianie |
|---|---|---|---|
| `/uslugi/prokurent-krs` | `/blog/prokurent-krs-ustanowienie-prokury-wpis` | `/artykul/prokurent-krs-ustanowienie-prokury-wpis` | 200 bez przekierowania; canonical `https://zmianakrs.pl/artykul/prokurent-krs-ustanowienie-prokury-wpis` |
| `/uslugi/zmiana-adresu-spolki-zoo` | `/artykul/zmiana-adresu-i-siedziby-spolki-w-krs-krok-po-kroku` | `/artykul/zmiana-adresu-i-siedziby-spolki-w-krs` | 200 bez przekierowania; canonical `https://zmianakrs.pl/artykul/zmiana-adresu-i-siedziby-spolki-w-krs` |
| `/uslugi` — „Zmiany przedmiotu działalności (PKD)” | `/uslugi/zmiana-umowy-spolki-zoo` | `/uslugi/zmiana-kodow-pkd` | 200 bez przekierowania; canonical `https://zmianakrs.pl/uslugi/zmiana-kodow-pkd` |

Link prokury już miał opisowy tekst „Prokurent w KRS – kompletny przewodnik”; zachowano go. Goły URL poradnika adresowego zastąpiono opisem. Innych href do `/blog/<slug>` w kodzie ani w skontrolowanym HTML nie znaleziono (warunek aktywności Navbar to nie link).

`/blog/prokurent-krs-ustanowienie-prokury-wpis`: produkcja i lokalnie 308 → `/artykul/prokurent-krs-ustanowienie-prokury-wpis` → 200. Pliki `alias-before.txt`, `alias-after.txt` zawierają pierwszą odpowiedź. `www.zmianakrs.pl`: produkcja 301 → `https://zmianakrs.pl/`; lokalna konfiguracja Next 308 do tej samej domeny (różnica wynika z warstwy platformy). Dowody `www-before.txt`, `www-after.txt`.

## Robots, sitemap i indeksowanie

Produkcja przed zmianami: robots HTTP 200, `User-Agent: *`, `Allow: /`, sitemap `https://zmianakrs.pl/sitemap.xml`. Sitemap HTTP 200, XML zapisany w JSON. Skontrolowane publiczne strony nie mają noindex w metadanych ani X-Robots-Tag. `/admin` zwraca 401. Build produkcyjny po zmianach: te same reguły robots, sitemap HTTP 200, brak X-Robots-Tag/noindex na publicznych stronach i nadal 401 na adminie.

Faktyczny podgląd Vercel: nie zweryfikowano. Status GitHub dla bazowego SHA wskazuje panel wdrożenia https://vercel.com/krystian-s-projects-897b4852/moja-strona-nextjs/BS5BQwEMuUdK1ZeXsDHsERuaCpv3 — jest to URL panelu, nie adres serwowanej aplikacji. Publiczny odczyt panelu nie udostępnił adresu aplikacji ani domen podglądowych; brak dostępu do API Vercel. Nie zgadujemy domen ani nie traktujemy lokalnego sprawdzenia jako dowodu ochrony istniejących wdrożeń.

Lokalny build `VERCEL_ENV=preview npm run build`: PASS (0). Serwer http://localhost:3002: główna, landing PKD i artykuł prokury zwracają HTTP 200 oraz `X-Robots-Tag: noindex, nofollow`; robots HTTP 200 z `Allow: /`; admin nadal 401. Pełny odczyt w `local-after-preview.json`. To sprawdzenie dotyczy lokalnego buildu, nie faktycznego Vercela.

## GSC — wymagane przed publikacją

Brak połączonego narzędzia Google Search Console; nie pobrano żadnego eksportu. Nie korzystano z historycznego audytu listopadowego ani nie przypisano mu aktualnych wyników. Surowych danych GSC nie ma w repozytorium.

Właściciel powinien dostarczyć eksport z właściwej usługi ZmianaKRS.pl (preferowana usługa domenowa `sc-domain:zmianakrs.pl`; ewentualnie właściwy prefiks `https://zmianakrs.pl/`). Typ wyszukiwania: Sieć. Zakres: 28 ostatnich pełnych dni z danymi zakończony ostatnim dostępnym pełnym dniem, bez danych wstępnych. Zapisz dokładne daty od–do i komplet aktywnych filtrów; daty nie są tu ustalone, bo ostatni kompletny dzień danych nie jest dostępny. Nie przyjmować automatycznie dnia wczorajszego.

Potrzebne: sumy kliknięć, wyświetleń, CTR i średniej pozycji oraz osobne widoki Strony i Zapytania z tymi metrykami, bez filtrów kraju/urządzenia/zapytania/strony (albo z jawnym opisem wyjątków). Dodatkowo Zapytania dla dokładnego URL każdej ważnej strony: główna, cennik, sześć landingów i kluczowe artykuły z próby. Każdy taki plik powinien wskazywać pełny URL i filtr „dokładny URL”, ten sam zakres dat oraz metryki, aby porównywać frazę dla tego samego adresu. Surowe eksporty przechowywać poza repozytorium.

## Polecenia i wyniki

Node 20.20.2 (zgodnie z linią Node 20 w CI), Next 13.5.11, zależności z package-lock.json. Pierwsze npm ci pod domyślnym Node 24 nie powiodło się z powodu niedostępnego cache w katalogu domowym. Powtórzenie `npm ci --cache /workspace/work/npm-cache` zakończyło się kodem 0; lockfile bez zmian. Wszystkie buildy i lint uruchomiono pod Node 20.

- Bazowy `VERCEL_ENV=production npm run build`: PASS (0).
- Po zmianach `VERCEL_ENV=production npm run build`: PASS (0).
- `npm run lint`: PASS (0), istniejące ostrzeżenie `app/admin/upload/page.tsx:81`, jsx-a11y/alt-text; poza zakresem etapu.
- Kontrola wyrenderowanych odpowiedzi HTTP/HTML, canonical, href i zachowania ID: PASS, `verification.txt`.
- `npm test` pominięto zgodnie z poleceniem: to atrapa.
- Ostrzeżenia builda o starym Browserslist, dynamicznych importach Contentlayer i edge runtime są zapisane w logach; nie aktualizowano zależności.

Odtworzenie odczytu (Python 3, standardowa biblioteka):
```sh
python3 docs/seo-etap-0/audit.py http://localhost:3001 /tmp/seo-audit.json
```

## Kontrole do wykonania przed publikacją

1. Dostarczyć powyższy eksport GSC i zapisać jego dokładne daty/filtry poza repozytorium.
2. Ustalić faktyczny adres wdrożenia podglądowego tej gałęzi i jego commit SHA oraz wszystkie domeny własne podglądu. Dla `/`, `/uslugi/zmiana-kodow-pkd`, `/artykul/prokurent-krs-ustanowienie-prokury-wpis` sprawdzić ochronę dostępu albo HTTP 200 z `X-Robots-Tag: noindex, nofollow`, odczytywalnym robots i brakiem blokady crawl na warstwie platformy. Sprawdzić również admin 401 i zachowanie istniejących zabezpieczeń Vercel.
3. Na faktycznym podglądzie powtórzyć pełną próbę z JSON, przekierowanie aliasu oraz href/canonical trzech zmienionych linków. Zweryfikować niestandardowe nagłówki lub robots ustawiane przez Vercel/proxy.
4. Po osobno zatwierdzonej publikacji powtórzyć HTTP/HTML na produkcji, sprawdzić brak noindex, Allow w robots, sitemap i przekierowanie www. Merge i publikacja produkcyjna nie są częścią tego zadania.

## Zmienione pliki aplikacji

- `app/(site)/cennik/page.tsx`
- `app/(site)/ksiegowi/page.tsx`
- `app/(site)/o-nas/page.tsx`
- `app/(site)/page.tsx`
- `app/(site)/uslugi/page.tsx`
- `app/(site)/uslugi/prokurent-krs/page.tsx`
- `app/(site)/uslugi/zmiana-adresu-spolki-zoo/page.tsx`
- `app/(site)/uslugi/zmiana-umowy-spolki-zoo/page.tsx`
- `app/(site)/uslugi/zmiana-wspolnika-spolki-zoo/page.tsx`
- `app/(site)/uslugi/zmiana-zarzadu-spolki-zoo/page.tsx`
- `app/blog/page.tsx`
- `app/robots.ts`
- `content/posts/prokurent-krs-ustanowienie-prokury-wpis.mdx`
- `content/posts/zmiana-adresu-i-siedziby-spolki-w-krs.mdx`
- `content/posts/zmiana-przedmiotu-dzialalnosci-spolka-zoo.mdx`
- `content/posts/zmiana-zarzadu-spolka-zoo-krok-po-kroku-najwazniejsze-formalnosci.mdx`
- `content/posts/zmiany-spolka-jawna-zgloszenie-krs.mdx`
- `next.config.mjs`

Dodatkowo `docs/seo-etap-0/`: ten raport, pomiary JSON, nagłówki przekierowań, skrypt audytu i logi walidacji. Wygenerowaną automatycznie zmianę next-env.d.ts wyłączono z commita.
