"use client"

import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type PkdMatch = { t: string[]; p: string }
type PkdData = {
  d: Record<string, PkdMatch>
  n: Record<string, string>
  m: string[]
}
type LoadState = "idle" | "loading" | "ready" | "error"

const normalizeCode = (value: string) => {
  const compact = value.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 5)
  return [compact.slice(0, 2), compact.slice(2, 4), compact.slice(4, 5)].filter(Boolean).join(".")
}

const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-400 px-4 py-2.5 font-semibold transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"

function odmianaOdpowiednik(n: number): string {
  if (n === 1) return "odpowiednik"
  const ost = n % 10
  const dwie = n % 100
  if (ost >= 2 && ost <= 4 && !(dwie >= 12 && dwie <= 14)) return "odpowiedniki"
  return "odpowiedników"
}

export default function PkdLookup() {
  const [loadState, setLoadState] = useState<LoadState>("idle")
  const [data, setData] = useState<PkdData | null>(null)
  const [value, setValue] = useState("")
  const [selectedCode, setSelectedCode] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [suggestionsOpen, setSuggestionsOpen] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const loadData = useCallback(async () => {
    if (loadState !== "idle") return
    setLoadState("loading")
    try {
      const response = await fetch("/pkd-klucze-2007-2025.json")
      if (!response.ok) throw new Error("Unable to load PKD data")
      setData((await response.json()) as PkdData)
      setLoadState("ready")
    } catch {
      setLoadState("error")
    }
  }, [loadState])

  const compactValue = value.replace(/[^0-9A-Z]/g, "")
  const suggestions = useMemo(() => {
    if (!data || compactValue.length < 2 || selectedCode) return []
    return Object.keys(data.d)
      .filter((code) => code.replace(/\./g, "").startsWith(compactValue))
      .slice(0, 8)
  }, [compactValue, data, selectedCode])

  useEffect(() => {
    if (data && compactValue.length === 5 && data.d[value]) {
      setSelectedCode(value)
      setSuggestionsOpen(false)
    }
  }, [compactValue.length, data, value])

  const chooseCode = (code: string) => {
    setValue(code)
    setSelectedCode(code)
    setSuggestionsOpen(false)
    setActiveIndex(-1)
    setShowAll(false)
  }

  const reset = () => {
    setValue("")
    setSelectedCode(null)
    setSuggestionsOpen(true)
    setActiveIndex(-1)
    setShowAll(false)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setSuggestionsOpen(false)
      setActiveIndex(-1)
      return
    }
    if (!suggestions.length) return
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      setSuggestionsOpen(true)
      setActiveIndex((current) => {
        if (event.key === "ArrowDown") return current >= suggestions.length - 1 ? 0 : current + 1
        return current <= 0 ? suggestions.length - 1 : current - 1
      })
    } else if (event.key === "Enter") {
      event.preventDefault()
      chooseCode(suggestions[activeIndex >= 0 ? activeIndex : 0])
    }
  }

  const match = selectedCode && data ? data.d[selectedCode] : null
  const isMarker = Boolean(selectedCode && data?.m.includes(selectedCode))
  const notFound = loadState === "ready" && compactValue.length === 5 && !match

  return (
    <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg sm:p-8">
      <label htmlFor="pkd-code" className="mb-2 block font-semibold">
        Kod PKD 2007
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id="pkd-code"
          value={value}
          onFocus={() => {
            void loadData()
            setSuggestionsOpen(true)
          }}
          onChange={(event) => {
            setValue(normalizeCode(event.target.value))
            setSelectedCode(null)
            setSuggestionsOpen(true)
            setActiveIndex(-1)
            setShowAll(false)
          }}
          onKeyDown={handleKeyDown}
          placeholder="np. 62.01.Z"
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-controls="pkd-suggestions"
          aria-expanded={suggestionsOpen && suggestions.length > 0}
          aria-activedescendant={activeIndex >= 0 ? `pkd-option-${activeIndex}` : undefined}
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 font-mono text-xl tracking-wide outline-none transition placeholder:text-slate-400 focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500/30"
        />
        {suggestionsOpen && suggestions.length > 0 && (
          <ul
            id="pkd-suggestions"
            role="listbox"
            className="absolute z-10 mt-2 max-h-72 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-xl"
          >
            {suggestions.map((code, index) => (
              <li
                key={code}
                id={`pkd-option-${index}`}
                role="option"
                aria-selected={activeIndex === index}
              >
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => chooseCode(code)}
                  className={`w-full rounded-lg px-4 py-2.5 text-left font-mono focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 ${activeIndex === index ? "bg-amber-100" : "hover:bg-slate-100"}`}
                >
                  {code}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div aria-live="polite" className="mt-6">
        {value && (loadState === "idle" || loadState === "loading") && <p>Wczytywanie danych…</p>}
        {loadState === "error" && <p>Nie udało się wczytać danych. Odśwież stronę albo napisz do nas.</p>}

        {match?.t.length === 1 && data && (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-emerald-900 sm:text-2xl">Ten kod przejdzie jednoznacznie</h2>
            <p className="mt-4 font-mono text-3xl font-bold">{match.t[0]}</p>
            <p className="mt-1">{data.n[match.t[0]]}</p>
            <p className="mt-4 leading-relaxed">Temu kodowi odpowiada dokładnie jedna podklasa PKD 2025. System wpisze ją automatycznie i wybór będzie prawidłowy.</p>
            <p className="mt-4 leading-relaxed">W dziale 3 Twojej spółki może być do dziesięciu kodów. Wystarczy jeden wieloznaczny, żeby po automatycznej wymianie część wpisu przestała odpowiadać rzeczywistości.</p>
            <p className="mt-4 text-sm">Nie chcesz sprawdzać wszystkich ręcznie? <a href="#oferta" className="font-semibold underline">Sprawdzimy cały dział 3 — 599 zł netto</a></p>
            {isMarker && <p className="mt-4 border-t border-emerald-300 pt-4">Ten kod nie ma swojego numeru w klasyfikacji PKD 2025. Jego obecność w dziale 3 oznacza, że <strong>przedmiot działalności ujawniony w rejestrze nie był aktualizowany</strong> od wejścia w życie nowej klasyfikacji. Nie mówi to nic o pozostałych danych spółki w KRS.</p>}
            <button type="button" onClick={reset} className={`${secondaryButton} mt-5`}>Sprawdź kolejny kod</button>
          </div>
        )}

        {match && match.t.length > 1 && data && (
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-amber-950 sm:text-2xl">PKD 2025 przewiduje {match.t.length} {odmianaOdpowiednik(match.t.length)} tego kodu</h2>
            <ul className="mt-4 max-h-80 space-y-2 overflow-y-auto pr-1">
              {match.t.slice(0, showAll ? undefined : 5).map((code) => (
                <li key={code} className={`flex min-w-0 flex-col gap-1 rounded-lg bg-white p-3 sm:flex-row sm:gap-3 ${code === match.p ? "border-l-4 border-amber-500 bg-amber-100" : ""}`}>
                  <span className="shrink-0 font-mono font-bold">{code}</span>
                  <span className="break-words">{data.n[code]}</span>
                  {code === match.p && <span className="text-sm font-semibold text-amber-900 sm:ml-auto">wybór systemu</span>}
                </li>
              ))}
            </ul>
            {!showAll && match.t.length > 5 && <button type="button" onClick={() => setShowAll(true)} className={`${secondaryButton} mt-3`}>Pokaż wszystkie ({match.t.length})</button>}
            <p className="mt-4 rounded-lg border border-amber-300 bg-amber-100 p-4 leading-relaxed">Jeżeli nie złożysz wniosku do 31 grudnia 2026 r., system wpisze <span className="font-mono font-bold">{match.p}</span> – {data.n[match.p]}.</p>
            <p className="mt-4 leading-relaxed">Z samego starego kodu nie da się ustalić, która z tych podklas jest właściwa dla Twojej spółki. Klucz interpretacyjny wybiera jedną z nich technicznie, żeby konwersja mogła się odbyć bez udziału człowieka — nie po to, żeby ocenić, czym spółka faktycznie się zajmuje.</p>
            <p className="mt-4 leading-relaxed">Na podstawie odpisu z KRS i informacji o działalności Twojej spółki sprawdzimy wszystkie kody ujawnione w dziale 3, zaproponujemy odpowiadające im kody PKD 2025, sprawdzimy pokrycie w umowie spółki i złożymy wniosek do sądu rejestrowego.</p>
            {isMarker && <p className="mt-4 border-t border-amber-300 pt-4">Ten kod nie ma swojego numeru w klasyfikacji PKD 2025. Jego obecność w dziale 3 oznacza, że <strong>przedmiot działalności ujawniony w rejestrze nie był aktualizowany</strong> od wejścia w życie nowej klasyfikacji. Nie mówi to nic o pozostałych danych spółki w KRS.</p>}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#oferta" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-amber-500 px-4 py-2.5 text-center font-bold text-slate-950 transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">Zleć zmianę kodów PKD w KRS — 599 zł netto</a>
              <button type="button" onClick={reset} className={secondaryButton}>Sprawdź kolejny kod</button>
            </div>
          </div>
        )}

        {notFound && (
          <div className="rounded-xl border border-slate-300 bg-slate-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold sm:text-2xl">Nie znaleziono kodu</h2>
            <p className="mt-4 leading-relaxed">Sprawdź zapis – kod PKD 2007 to dwie cyfry, kropka, dwie cyfry, kropka i litera, na przykład 62.01.Z. Jeżeli kod jest zapisany prawidłowo, a mimo to go tu nie ma, oznacza to, że nie występuje w kluczach przejścia. Napisz do nas – sprawdzimy, co się z nim stanie.</p>
            <Link href="/kontakt" className={`${secondaryButton} mt-5`}>Napisz do nas</Link>
          </div>
        )}
      </div>
    </div>
  )
}
