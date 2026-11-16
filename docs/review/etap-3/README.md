# Etap 3 — raport kontroli

Baza: `origin/main`, `c0ca8bf53e0d5207532fef300dd1556760b54b67`.

## Zakres

Istniejący slug, plik MDX, cover i data publikacji zachowane. Nowa treść, metadane i wspólny wariant szablonu; domyślne propsy komponentów zachowują artykuł o rezygnacji. Dodatkowe style dotyczą wyłącznie poradnika PRS/S24. Navbar zachowuje domyślną akcję, ponieważ wariant rezygnacji nie przekazywał `contactAction`.

Bez zmian treści landingu, rezygnacji, raportu PKD i pozostałych wpisów, komponentów formularza, endpointu, Navbar, Footer, globalnego CSS, routingu, zależności i cennika. Sitemap zachowuje dotychczasowy mechanizm dla pozostałych wpisów.

## Weryfikacja lokalna

- `VERCEL_ENV=preview npm run build`: kompilacja produkcyjna, 17 dokumentów MDX, 72 strony.
- `npm run lint`: bez błędów; istniejące ostrzeżenie `jsx-a11y/alt-text` w `app/admin/upload/page.tsx:81`.
- `tsc --noEmit`: bez błędów.
- `node tests/contact-route.cjs`: 8/8, w tym sukces/odrzucenie SMTP, walidacja i honeypot; bez rzeczywistej wysyłki.
- Playwright + systemowy Chromium: 1440, 1280, 1024, 768, 390, 360, 320 px; HTTP 200, jeden H1, jeden formularz i brak poziomego przewijania.
- Wszystkie kotwice spisu treści, obsługa FAQ przez Enter, widoczny focus linku spisu, ukrywanie karty przy widocznym panelu formularza. Na obu poradnikach przy 1440 px: dół nagłówka 72 px, góra przyklejonego spisu i karty 96 px.
- Walidacja formularza blokuje niepoprawne dane; sukces i błąd sprawdzone z przechwyconym `/api/contact`. Ukryty honeypot poza tabulatorem.
- Porównanie 119 fragmentów treści dostarczonej w punkcie 7 z `textContent` artykułu, również zamknięte odpowiedzi FAQ: brak pominięć. Lead jeden raz; „od 499 zł netto” jeden raz; brak „999” w HTML, metadanych i JSON-LD.
- Title z jedną marką, nowy opis, produkcyjny canonical, OG/Twitter z zachowanym cover, jeden Article JSON-LD, autor `personSchema`, wydawca organizacja, daty 2025-07-16 / 2026-11-16.
- Link do poradnika istnieje na landingu oraz w rozdziale 7 artykułu o rezygnacji. Sprawdzone także po renderowaniu obu stron.
- Lokalny build z `VERCEL_ENV=preview` zwraca nagłówek aplikacji `X-Robots-Tag: noindex, nofollow`.
- Znana usterka etykiety „Telefon”: `htmlFor` wygenerowany przez FormLabel nie odpowiada jawnemu `id="phone"`. Pozostawiona zgodnie z zakresem.

## Zrzuty

Pełne strony, Chromium, wysokość okna 1000 px, cookies opcjonalne odrzucone. Rezygnacja: przed z osobnego checkoutu bazy, po z wersji zmienionej; identyczne obrazy piksel po pikselu przy obu szerokościach.

| Strona | 1440 px | 390 px |
| --- | --- | --- |
| Poradnik | [zrzut](guide-1440.png) | [zrzut](guide-390.png) |
| Rezygnacja przed | [zrzut](resignation-before-1440.png) | [zrzut](resignation-before-390.png) |
| Rezygnacja po | [zrzut](resignation-after-1440.png) | [zrzut](resignation-after-390.png) |

Weryfikacja Vercel Preview i końcowego commita jest opisana w PR. Nie scalono zmian ani nie wdrożono ich na produkcję.
