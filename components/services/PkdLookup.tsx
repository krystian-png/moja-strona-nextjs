"use client"

import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type PkdMatch = { p: "s" | "d" | "g" | "k" | "p"; n: string; t: string[]; i: string | null; m: 0 | 1 }
type PkdData = {
  d: Record<string, PkdMatch>
  n: Record<string, string>
}
type LoadState = "idle" | "loading" | "ready" | "error"

const normalizeText = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pl").replace(/ł/g, "l")

const normalizeCode = (value: string) => {
  const compact = value.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 5)
  return [compact.slice(0, 2), compact.slice(2, 4), compact.slice(4, 5)].filter(Boolean).join(".")
}

const EXPLANATION_CODES = new Set<string>(["A","01","01.1","01.11.Z","01.12.Z","01.13.Z","01.14.Z","01.15.Z","01.16.Z","01.19.Z","01.2","01.21.Z","01.22.Z","01.23.Z","01.24.Z","01.25.Z","01.26.Z","01.27.Z","01.28.Z","01.29.Z","01.30.Z","01.4","01.41.Z","01.42.Z","01.43.Z","01.44.Z","01.45.Z","01.46.Z","01.47.Z","01.48.Z","01.50.Z","01.6","01.61.Z","01.62.Z","01.63.Z","01.70.Z","02","02.10.Z","02.20.Z","02.30.Z","02.40.Z","03","03.1","03.11.Z","03.12.Z","03.2","03.21.Z","03.22.Z","03.30.Z","B","05","05.10.Z","05.20.Z","06","06.10.Z","06.20.Z","07","07.10.Z","07.2","07.21.Z","07.29.Z","08","08.11.Z","08.12.Z","08.91.Z","08.92.Z","08.93.Z","08.99.Z","09","09.10.Z","09.90.Z","C","10","10.11.Z","10.12.Z","10.13.Z","10.20.Z","10.31.Z","10.32.Z","10.39.Z","10.4","10.41.Z","10.42.Z","10.5","10.51.Z","10.52.Z","10.6","10.61.Z","10.62.Z","10.7","10.71.Z","10.72.Z","10.73.Z","10.8","10.81.Z","10.82.Z","10.83.Z","10.84.Z","10.85.Z","10.86.Z","10.89.A","10.89.B","10.89.C","10.89.D","10.91.Z","10.92.Z","11","11.01.Z","11.02.Z","11.03.Z","11.04.Z","11.05.Z","11.06.Z","11.07.Z","12","12.00.Z","13","13.10.Z","13.20.Z","13.30.Z","13.9","13.91.Z","13.92.Z","13.93.Z","13.94.Z","13.95.Z","13.96.Z","13.99.Z","14","14.10.Z","14.2","14.21.Z","14.22.Z","14.23.Z","14.24.Z","14.29.Z","15","15.1","15.11.Z","15.12.Z","15.20.Z","16","16.11.Z","16.12.Z","16.2","16.21.Z","16.22.Z","16.23.Z","16.24.Z","16.25.Z","16.26.Z","16.27.Z","16.28.Z","17","17.11.Z","17.12.Z","17.21.Z","17.22.Z","17.23.Z","17.24.Z","17.25.Z","18","18.1","18.11.Z","18.12.Z","18.13.Z","18.14.Z","18.20.Z","19","19.10.Z","19.20.Z","20","20.1","20.11.Z","20.12.Z","20.13.Z","20.14.Z","20.15.Z","20.16.Z","20.17.Z","20.2","20.20.A","20.20.B","20.20.C","20.30.Z","20.41.Z","20.42.Z","20.5","20.51.Z","20.59.Z","20.60.Z","21","21.10.Z","21.20.Z","22","22.1","22.11.Z","22.12.Z","22.2","22.21.Z","22.22.Z","22.23.Z","22.24.Z","22.25.Z","22.26.Z","23","23.1","23.11.Z","23.12.Z","23.13.Z","23.14.Z","23.15.Z","23.20.Z","23.31.Z","23.32.Z","23.4","23.41.Z","23.42.Z","23.43.Z","23.44.Z","23.45.Z","23.51.Z","23.52.Z","23.61.Z","23.62.Z","23.63.Z","23.64.Z","23.65.Z","23.66.Z","23.7","23.70.A","23.70.B","23.91.Z","23.99.Z","24","24.1","24.10.Z","24.20.Z","24.3","24.31.Z","24.32.Z","24.33.Z","24.34.Z","24.41.Z","24.42.A","24.42.B","24.43.Z","24.44.Z","24.45.Z","24.46.Z","24.5","24.51.Z","24.52.Z","24.53.Z","24.54.B","25","25.1","25.11.Z","25.12.Z","25.2","25.21.Z","25.22.Z","25.30.Z","25.40.Z","25.5","25.51.Z","25.52.Z","25.53.Z","25.6","25.61.Z","25.62.Z","25.63.Z","25.9","25.91.Z","25.92.Z","25.93.Z","25.94.Z","25.99.Z","26","26.11.Z","26.12.Z","26.20.Z","26.30.Z","26.40.Z","26.5","26.51.Z","26.52.Z","26.60.Z","26.70.Z","27","27.1","27.11.Z","27.12.Z","27.20.Z","27.3","27.31.Z","27.32.Z","27.33.Z","27.40.Z","27.5","27.51.Z","27.52.Z","27.90.Z","28","28.11.Z","28.12.Z","28.13.Z","28.14.Z","28.15.Z","28.21.Z","28.22.Z","28.23.Z","28.24.Z","28.25.Z","28.29.Z","28.30.Z","28.4","28.41.Z","28.42.Z","28.9","28.91.Z","28.92.Z","28.93.Z","28.94.Z","28.95.Z","28.96.Z","28.97.Z","28.99.Z","29","29.10.A","29.10.B","29.10.C","29.10.D","29.10.E","29.20.Z","29.3","29.31.Z","29.32.Z","30","30.1","30.11.Z","30.12.Z","30.13.Z","30.20.Z","30.31.Z","30.32.Z","30.40.Z","30.9","30.91.Z","30.92.Z","30.99.Z","31","31.00.Z","32","32.1","32.11.Z","32.12.Z","32.13.Z","32.20.Z","32.30.Z","32.40.Z","32.50.A","32.50.B","32.91.Z","32.99.Z","33","33.1","33.11.Z","33.12.Z","33.13.Z","33.14.Z","33.15.Z","33.16.Z","33.17.Z","33.18.Z","33.19.Z","33.20.Z","D","35.1","35.11.Z","35.12.A","35.12.B","35.12.C","35.12.D","35.12.E","35.12.F","35.13.Z","35.14.Z","35.15.Z","35.16.Z","35.2","35.21.Z","35.22.Z","35.23.Z","35.24.Z","35.30.Z","35.40.Z","E","36","36.00.Z","37","37.00.Z","38","38.1","38.11.Z","38.12.Z","38.2","38.21.Z","38.22.Z","38.23.Z","38.3","38.31.Z","38.32.Z","38.33.Z","39","39.00.Z","F","41","41.00.A","41.00.B","42","42.11.Z","42.12.Z","42.13.Z","42.21.Z","42.22.Z","42.91.Z","42.99.Z","43","43.1","43.11.Z","43.12.Z","43.13.Z","43.2","43.21.Z","43.22.Z","43.23.Z","43.24.Z","43.31.Z","43.32.Z","43.33.Z","43.34.Z","43.35.Z","43.41.Z","43.42.Z","43.50.Z","43.60.Z","43.91.Z","43.99.Z","G","46","46.1","46.11.A","46.11.B","46.12.Z","46.13.Z","46.14.Z","46.15.Z","46.16.Z","46.17.Z","46.18.Z","46.19.Z","46.2","46.21.A","46.21.B","46.22.Z","46.23.Z","46.24.Z","46.3","46.31.Z","46.32.Z","46.33.Z","46.34.A","46.34.B","46.35.Z","46.36.Z","46.37.Z","46.38.Z","46.39.Z","46.4","46.41.Z","46.42.Z","46.43.Z","46.44.Z","46.45.Z","46.46.Z","46.47.Z","46.48.Z","46.49.Z","46.5","46.50.Z","46.6","46.61.Z","46.62.Z","46.63.Z","46.64.Z","46.7","46.71.Z","46.72.Z","46.73.Z","46.8","46.81.Z","46.82.Z","46.83.Z","46.84.Z","46.85.A","46.85.B","46.86.Z","46.87.Z","46.89.Z","46.9","46.90.Z","47","47.1","47.11.Z","47.12.Z","47.2","47.21.Z","47.22.Z","47.23.Z","47.24.Z","47.25.Z","47.26.Z","47.27.Z","47.30.Z","47.4","47.40.Z","47.5","47.51.Z","47.52.Z","47.53.Z","47.54.Z","47.55.Z","47.6","47.61.Z","47.62.Z","47.63.Z","47.64.Z","47.69.A","47.69.B","47.69.C","47.7","47.71.Z","47.72.Z","47.73.Z","47.74.Z","47.75.Z","47.76.A","47.76.B","47.77.Z","47.78.Z","47.79.A","47.79.B","47.79.C","47.8","47.81.Z","47.82.Z","47.83.Z","47.9","47.91.Z","47.92.Z","H","49","49.11.Z","49.12.Z","49.20.Z","49.3","49.31.Z","49.32.Z","49.33.Z","49.34.Z","49.39.Z","49.4","49.41.Z","49.42.Z","49.50.A","49.50.B","50","50.1","50.10.Z","50.2","50.20.Z","50.30.Z","50.40.Z","51","51.10.Z","51.21.Z","51.22.Z","52","52.10.A","52.10.B","52.2","52.21.A","52.21.B","52.22.A","52.22.B","52.23.Z","52.24.A","52.24.B","52.24.C","52.25.Z","52.26.Z","52.3","52.31.Z","52.32.Z","53","53.10.Z","53.20.Z","53.30.Z","I","55","55.10.Z","55.20.Z","55.30.Z","55.40.Z","55.90.Z","56","56.11.Z","56.12.Z","56.2","56.21.Z","56.22.Z","56.30.Z","56.40.Z","J","58","58.1","58.11.Z","58.12.Z","58.13.Z","58.19.Z","58.2","58.21.Z","58.29.Z","59","59.1","59.11.Z","59.12.Z","59.13.Z","59.14.Z","59.20.Z","60","60.10.Z","60.20.Z","60.3","60.31.Z","60.39.Z","K","61","61.10.A","61.10.B","61.20.Z","61.90.A","61.90.B","62","62.10.A","62.10.B","62.20.A","62.20.B","62.90.Z","63","63.10.A","63.10.B","63.10.C","63.10.D","63.9","63.91.Z","63.92.Z","L","64","64.1","64.11.Z","64.19.Z","64.2","64.21.Z","64.22.Z","64.3","64.31.Z","64.32.Z","64.9","64.91.Z","64.92.A","64.92.B","64.99.Z","65","65.1","65.11.Z","65.12.Z","65.20.Z","65.30.Z","66","66.1","66.11.Z","66.12.Z","66.19.Z","66.2","66.21.Z","66.22.Z","66.29.Z","66.30.Z","M","68.1","68.11.Z","68.12.A","68.12.B","68.12.C","68.20.Z","68.31.Z","68.32.A","68.32.B","68.32.C","N","69","69.10.Z","69.20.A","69.20.B","69.20.C","70","70.10.A","70.10.B","70.20.Z","71","71.1","71.11.Z","71.12.A","71.12.B","71.20.A","71.20.B","71.20.C","72","72.10.Z","72.20.Z","73","73.1","73.11.Z","73.12.Z","73.20.Z","73.30.A","73.30.B","74","74.11.Z","74.12.Z","74.13.Z","74.14.Z","74.20.Z","74.30.Z","74.91.Z","74.99.Z","75","75.00.Z","O","77","77.11.Z","77.12.Z","77.2","77.21.Z","77.22.Z","77.31.Z","77.32.Z","77.33.Z","77.34.Z","77.35.Z","77.39.Z","77.40.A","77.40.B","77.51.Z","77.52.Z","78","78.10.Z","78.20.Z","79","79.1","79.11.Z","79.12.Z","79.90.Z","80","80.0","80.01.Z","80.09.Z","81","81.10.Z","81.2","81.21.Z","81.22.A","81.22.B","81.23.A","81.23.B","81.30.Z","82","82.10.Z","82.20.Z","82.30.Z","82.40.Z","82.9","82.91.Z","82.92.Z","82.99.A","82.99.B","P","84.1","84.11.Z","84.12.Z","84.13.Z","84.2","84.21.Z","84.22.Z","84.23.Z","84.24.Z","84.25.Z","84.30.Z","Q","85.10.Z","85.20.Z","85.3","85.31.Z","85.32.A","85.32.B","85.32.C","85.32.D","85.33.A","85.33.B","85.40.Z","85.5","85.51.Z","85.52.Z","85.53.Z","85.59.A","85.59.B","85.59.C","85.59.D","85.61.Z","85.69.Z","R","86","86.10.Z","86.2","86.21.Z","86.22.Z","86.23.Z","86.9","86.91.A","86.91.B","86.92.Z","86.93.Z","86.94.Z","86.95.Z","86.96.Z","86.97.Z","86.99.A","86.99.B","86.99.C","86.99.D","87","87.10.Z","87.20.Z","87.30.Z","87.91.Z","87.99.Z","88","88.10.Z","88.91.Z","88.99.Z","S","90","90.1","90.11.Z","90.12.Z","90.13.Z","90.20.A","90.20.B","90.20.C","90.3","90.31.A","90.31.B","90.39.Z","91","91.1","91.11.Z","91.12.Z","91.2","91.21.A","91.21.B","91.21.C","91.22.Z","91.30.Z","91.41.A","91.41.B","91.42.Z","92","92.00.Z","93","93.1","93.11.Z","93.12.Z","93.13.Z","93.19.Z","93.2","93.21.Z","93.29.A","93.29.B","T","94","94.1","94.11.Z","94.12.Z","94.20.Z","94.9","94.91.Z","94.92.Z","94.99.Z","95","95.10.Z","95.2","95.21.Z","95.22.Z","95.23.Z","95.24.Z","95.25.Z","95.29.Z","95.3","95.31.A","95.31.B","95.31.C","95.32.Z","95.40.Z","96","96.10.Z","96.21.Z","96.22.Z","96.23.Z","96.30.Z","96.40.Z","96.91.Z","96.99.Z","U","97","97.00.Z","98","98.10.Z","98.20.Z","V","99.00.Z"])

const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-400 px-4 py-2.5 font-semibold transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"

const BRANZE: { etykieta: string; fraza: string }[] = [
  { etykieta: "Spedycja i logistyka", fraza: "agencji transportowych" },
  { etykieta: "Oprogramowanie i gamedev", fraza: "oprogramowaniem" },
  { etykieta: "Cyberbezpieczeństwo i IT", fraza: "doradztwem w zakresie informatyki" },
  { etykieta: "Hosting i centra danych", fraza: "przetwarzanie danych" },
  { etykieta: "Pożyczki i lombardy", fraza: "udzielania kredytów" },
  { etykieta: "Telekomunikacja i ISP", fraza: "telekomunikacji" },
  { etykieta: "Suplementy i żywność", fraza: "artykułów spożywczych" },
  { etykieta: "Sprzedaż przez internet", fraza: "domy sprzedaży wysyłkowej" },
  { etykieta: "Roboty budowlane", fraza: "roboty budowlane" },
  { etykieta: "Nieruchomości", fraza: "nieruchomości" },
  { etykieta: "Projektowanie i wzornictwo", fraza: "specjalistycznego projektowania" },
  { etykieta: "Sprzątanie i DDD", fraza: "sprzątanie" },
  { etykieta: "Budowa budynków", fraza: "wznoszeniem budynków" },
  { etykieta: "Handel samochodami", fraza: "samochodów osobowych i furgonetek" },
  { etykieta: "Transport drogowy", fraza: "transport drogowy" },
  { etykieta: "Magazynowanie", fraza: "magazynowanie" },
  { etykieta: "Wynajem i leasing flot", fraza: "wynajem i dzierżawa" },
  { etykieta: "Usługi medyczne", fraza: "opieki zdrowotnej" },
  { etykieta: "Wyroby medyczne", fraza: "wyrobów medycznych" },
  { etykieta: "Kluby fitness", fraza: "edukacji sportowej" },
  { etykieta: "Biuro rachunkowe", fraza: "rachunkowo" },
  { etykieta: "Recykling i odzysk", fraza: "odzysk surowców" },
  { etykieta: "Public relations", fraza: "public relations" },
  { etykieta: "Fundusze inwestycyjne", fraza: "wspomagająca usługi finansowe" },
  { etykieta: "Agrochemia i pestycydy", fraza: "pestycydów" },
  { etykieta: "Domeny internetowe", fraza: "własności intelektualnej" },
  { etykieta: "Maszyny specjalistyczne", fraza: "maszyn specjalnego" },
]

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
  const [explanations, setExplanations] = useState<Record<string, string> | null>(null)
  const [explanationsUnavailable, setExplanationsUnavailable] = useState<Set<string>>(() => new Set())
  const [expandedExplanation, setExpandedExplanation] = useState<string | null>(null)
  const [notFoundReady, setNotFoundReady] = useState(false)
  const [value, setValue] = useState("")
  const [selectedCode, setSelectedCode] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [suggestionsOpen, setSuggestionsOpen] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const [showMoreBranze, setShowMoreBranze] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const loadData = useCallback(async () => {
    if (loadState !== "idle") return
    setLoadState("loading")
    try {
      const response = await fetch("/pkd-klucze-all.json")
      if (!response.ok) throw new Error("Unable to load PKD data")
      setData((await response.json()) as PkdData)
      setLoadState("ready")
    } catch {
      setLoadState("error")
    }
  }, [loadState])

  const compactValue = value.toUpperCase().replace(/[^0-9A-Z]/g, "")
  const suggestions = useMemo(() => {
    if (!data || selectedCode) return []

    const codes = Object.keys(data.d)
    if (/^\d/.test(value)) {
      if (compactValue.length < 2) return []
      return codes
        .filter((code) => code.replace(/\./g, "").startsWith(compactValue))
        .sort((a, b) => a.replace(/\./g, "").length - b.replace(/\./g, "").length || a.localeCompare(b, "pl"))
        .slice(0, 8)
    }

    const query = normalizeText(value.trim())
    if (query.length < 3) return []
    return codes.filter((code) => normalizeText(data.d[code].n).includes(query)).slice(0, 8)
  }, [compactValue, data, selectedCode, value])

  useEffect(() => {
    if (data && compactValue.length >= 2 && data.d[value]) {
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

  const chooseExample = (fraza: string) => {
    setValue(fraza)
    setSelectedCode(null)
    setSuggestionsOpen(true)
    setActiveIndex(-1)
    setShowAll(false)
    void loadData()
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const reset = () => {
    setValue("")
    setSelectedCode(null)
    setSuggestionsOpen(true)
    setActiveIndex(-1)
    setShowAll(false)
    setShowMoreBranze(false)
    setExpandedExplanation(null)
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
  const isMarker = match?.m === 1

  useEffect(() => {
    setNotFoundReady(false)
    if (loadState !== "ready" || !/^\d/.test(value) || compactValue.length < 2 || match) return
    const timer = window.setTimeout(() => setNotFoundReady(true), 450)
    return () => window.clearTimeout(timer)
  }, [compactValue, loadState, match, value])

  const notFound = loadState === "ready" && /^\d/.test(value) && compactValue.length >= 2 && !match && notFoundReady

  const toggleExplanation = async (code: string) => {
    if (expandedExplanation === code) {
      setExpandedExplanation(null)
      return
    }
    if (explanations) {
      if (explanations[code]) setExpandedExplanation(code)
      else setExplanationsUnavailable((current) => new Set(current).add(code))
      return
    }
    try {
      const response = await fetch("/pkd-2025-wyjasnienia.json")
      if (!response.ok) throw new Error("Unable to load explanations")
      const loaded = (await response.json()) as Record<string, string>
      setExplanations(loaded)
      if (loaded[code]) setExpandedExplanation(code)
      else setExplanationsUnavailable((current) => new Set(current).add(code))
    } catch {
      setExplanationsUnavailable((current) => new Set(current).add(code))
    }
  }

  const branze = (
    <div>
      <p className="text-sm text-slate-600">
        <strong>Branże, w których kody zmieniają się najmocniej</strong> — kliknij, żeby sprawdzić
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {BRANZE.slice(0, showMoreBranze ? undefined : 12).map(({ etykieta, fraza }) => (
          <button
            key={etykieta}
            type="button"
            onClick={() => chooseExample(fraza)}
            className="cursor-pointer rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-sm text-amber-900 transition-colors hover:border-amber-400 hover:bg-amber-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1"
          >
            {etykieta}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setShowMoreBranze((current) => !current)}
        className="mt-2 text-sm text-slate-600 underline hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1"
      >
        {showMoreBranze ? "Pokaż mniej" : `Pokaż więcej branż (${BRANZE.length - 12})`}
      </button>
    </div>
  )

  return (
    <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg sm:p-8">
      <label htmlFor="pkd-code" className="mb-2 block font-semibold">
        Kod PKD 2007 lub nazwa działalności
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
            const nextValue = event.target.value
            setValue(/^\d/.test(nextValue) ? normalizeCode(nextValue) : nextValue)
            setSelectedCode(null)
            setSuggestionsOpen(true)
            setActiveIndex(-1)
            setShowAll(false)
          }}
          onKeyDown={handleKeyDown}
          placeholder="np. 45.11.Z albo: sprzedaż samochodów"
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-controls="pkd-suggestions"
          aria-expanded={suggestionsOpen && suggestions.length > 0}
          aria-activedescendant={activeIndex >= 0 ? `pkd-option-${activeIndex}` : undefined}
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 font-mono text-lg font-normal tracking-wide outline-none transition placeholder:text-slate-400 focus-visible:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500/30"
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
                  className={`flex w-full min-w-0 items-baseline gap-2 rounded-lg px-4 py-2.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 ${activeIndex === index ? "bg-amber-100" : "hover:bg-slate-100"}`}
                >
                  <span className="shrink-0 font-mono">{code}</span>
                  <span className="min-w-0 truncate text-sm text-slate-600">— {data?.d[code].n}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {!value && !match && (
        <div className="mt-3">{branze}</div>
      )}

      <div aria-live="polite" className="mt-6">
        {value && (loadState === "idle" || loadState === "loading") && <p>Wczytywanie danych…</p>}
        {loadState === "error" && <p>Nie udało się wczytać danych. Odśwież stronę albo napisz do nas.</p>}

        {match && selectedCode && (
          <div className="mb-4 border-t border-slate-200 pt-4">
            <div className="flex min-w-0 items-baseline gap-2">
              <span className="w-[5.5rem] shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-600">PKD 2007</span>
              <span className="shrink-0 whitespace-nowrap font-mono font-bold">{selectedCode}</span>
              <span className="min-w-0 flex-1 break-words text-slate-700">{match.n}</span>
            </div>
          </div>
        )}

        {match && <p className="mb-3 text-center text-sm text-slate-500">↓ co się z nim stanie</p>}

        {match?.t.length === 1 && data && (
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-emerald-900 sm:text-2xl">Ten kod przejdzie jednoznacznie</h2>
            <div className="mt-4 flex min-w-0 items-baseline gap-2">
              <span className="w-[5.5rem] shrink-0 whitespace-nowrap rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-center text-xs font-semibold uppercase tracking-wide text-amber-800">PKD 2025</span>
              <span className="shrink-0 whitespace-nowrap font-mono font-bold">{match.t[0]}</span>
              <span className="min-w-0 flex-1 break-words">{data.n[match.t[0]]}</span>
            </div>
            <p className="mt-4 leading-relaxed">Temu kodowi odpowiada dokładnie jeden kod PKD 2025. System wykreśli dotychczasowy wpis i w jego miejsce wpisze ten kod.</p>
            {(match.p === "g" || match.p === "d") && <p className="mt-4 leading-relaxed">Stanie się tak również wtedy, gdy numer i nazwa są takie same w obu klasyfikacjach — stary wpis zostaje wykreślony, nowy wpisany.</p>}
            {isMarker && <p className="mt-4 border-t border-emerald-300 pt-4">Ten kod nie ma swojego numeru w klasyfikacji PKD 2025. Jego obecność w dziale 3 oznacza, że <strong>przedmiot działalności ujawniony w rejestrze nie był aktualizowany</strong> od wejścia w życie nowej klasyfikacji. Nie mówi to nic o pozostałych danych spółki w KRS.</p>}
            <button type="button" onClick={reset} className={`${secondaryButton} mt-5`}>Sprawdź kolejny kod</button>
            <p className="mt-2 text-sm text-slate-600"><a href="#oferta" className="underline underline-offset-2 hover:text-slate-900">Co obejmuje usługa za 799 zł</a></p>
          </div>
        )}

        {match && match.t.length > 1 && match.i !== null && data && (
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-amber-950 sm:text-2xl">PKD 2025 przewiduje {match.t.length} {odmianaOdpowiednik(match.t.length)} tego kodu</h2>
            <ul className="mt-4 max-h-80 space-y-2 overflow-y-auto pr-1">
              {match.t.slice(0, showAll ? undefined : 5).map((code) => (
                <li key={code} className={`min-w-0 rounded-lg bg-white p-3 ${code === match.i ? "border-l-4 border-amber-500 bg-amber-100" : ""}`}>
                  <div className="flex min-w-0 items-baseline gap-2">
                    <span className="w-[5.5rem] shrink-0 whitespace-nowrap rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-center text-xs font-semibold uppercase tracking-wide text-amber-800">PKD 2025</span>
                    <span className="shrink-0 whitespace-nowrap font-mono font-bold">{code}</span>
                    <span className="min-w-0 flex-1 break-words">{data.n[code]}</span>
                    {code === match.i && <span className="hidden shrink-0 text-sm font-semibold text-amber-900 sm:inline">system wpisze automatycznie</span>}
                  </div>
                  {code === match.i && <span className="ml-[6rem] mt-1 block text-sm font-semibold text-amber-900 sm:hidden">system wpisze</span>}
                </li>
              ))}
            </ul>
            {!showAll && match.t.length > 5 && <button type="button" onClick={() => setShowAll(true)} className={`${secondaryButton} mt-3`}>Pokaż wszystkie ({match.t.length})</button>}
            <p className="mt-4 rounded-lg border border-amber-300 bg-amber-100 p-4 leading-relaxed">Jeżeli nie złożysz wniosku do 31 grudnia 2026 r., system wpisze <span className="font-mono font-bold">{match.i}</span> – {data.n[match.i]}.</p>
            <p className="mt-4 leading-relaxed">Klucze przejścia wskazują ten jeden kod na potrzeby automatycznej wymiany. Wybór jest techniczny — wynika z tabeli, a nie z tego, czym spółka się zajmuje.</p>
            <p className="mt-4 leading-relaxed">Na podstawie odpisu z KRS i informacji o działalności Twojej spółki sprawdzimy wszystkie kody ujawnione w dziale 3, zaproponujemy odpowiadające im kody PKD 2025, sprawdzimy pokrycie w umowie spółki i złożymy wniosek do sądu rejestrowego.</p>
            {isMarker && <p className="mt-4 border-t border-amber-300 pt-4">Ten kod nie ma swojego numeru w klasyfikacji PKD 2025. Jego obecność w dziale 3 oznacza, że <strong>przedmiot działalności ujawniony w rejestrze nie był aktualizowany</strong> od wejścia w życie nowej klasyfikacji. Nie mówi to nic o pozostałych danych spółki w KRS.</p>}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#wycena" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-amber-500 px-4 py-2.5 text-center font-bold text-slate-950 transition hover:bg-amber-400">Zleć zmianę kodów PKD w KRS — 799 zł netto</a>
              <button type="button" onClick={reset} className={secondaryButton}>Sprawdź kolejny kod</button>
            </div>
            <p className="mt-2 text-sm text-slate-600"><a href="#oferta" className="underline underline-offset-2 hover:text-slate-900">Co obejmuje usługa za 799 zł</a></p>
          </div>
        )}

        {match && match.t.length > 1 && match.i === null && data && (
          <div className="rounded-xl border border-orange-400 bg-orange-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-orange-950 sm:text-2xl">Nie wiadomo, co system zrobi z tym kodem</h2>
            <p className="mt-4 leading-relaxed">Klucze przejścia przypisują temu kodowi {match.t.length} {odmianaOdpowiednik(match.t.length)} w PKD 2025:</p>
            <ul className="mt-4 max-h-96 space-y-2 overflow-y-auto pr-1">
              {match.t.slice(0, showAll ? undefined : 5).map((code) => (
                <li key={code} className="min-w-0 rounded-lg bg-white p-3">
                  <div className="flex min-w-0 items-baseline gap-2">
                    <span className="w-[5.5rem] shrink-0 whitespace-nowrap rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-center text-xs font-semibold uppercase tracking-wide text-amber-800">PKD 2025</span>
                    <span className="shrink-0 whitespace-nowrap font-mono font-bold">{code}</span>
                    <span className="min-w-0 flex-1 break-words">{data.n[code]}</span>
                  </div>
                  {EXPLANATION_CODES.has(code) && !explanationsUnavailable.has(code) && (
                    <button type="button" onClick={() => void toggleExplanation(code)} className="ml-[6rem] mt-2 text-left text-sm font-semibold text-orange-800 underline underline-offset-2">
                      {expandedExplanation === code ? "Zwiń opis" : "Co obejmuje ten kod"}
                    </button>
                  )}
                  {expandedExplanation === code && explanations?.[code] && <p className="ml-[6rem] mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{explanations[code]}</p>}
                </li>
              ))}
            </ul>
            {!showAll && match.t.length > 5 && <button type="button" onClick={() => setShowAll(true)} className={`${secondaryButton} mt-3`}>Pokaż wszystkie ({match.t.length})</button>}
            <p className="mt-4 rounded-lg border border-orange-400 bg-orange-100 p-4 font-semibold">Klucze nie wskazują, który z nich ma zostać wpisany.</p>
            <p className="mt-4 leading-relaxed">Przy kodach zapisanych pełnym numerem, takich jak 10.81.Z, klucze zawierają takie wskazanie. Przy kodach na poziomie grupy i działu nie ma go w żadnym ze 124 przypadków.</p>
            <p className="mt-4 leading-relaxed">Art. 20e ust. 1 ustawy o KRS przewiduje trzy warianty: podmianę według powiązania jednoznacznego, podmianę według wskazania przy powiązaniu wieloznacznym albo — w pozostałych przypadkach — wykreślenie bez wpisania nowego kodu. Który z nich zadziała w tym przypadku, nie wynika ani z przepisów, ani z dokumentów GUS.</p>
            {isMarker && <p className="mt-4 border-t border-orange-300 pt-4">Ten kod nie ma swojego numeru w klasyfikacji PKD 2025. Jego obecność w dziale 3 oznacza, że <strong>przedmiot działalności ujawniony w rejestrze nie był aktualizowany</strong> od wejścia w życie nowej klasyfikacji. Nie mówi to nic o pozostałych danych spółki w KRS.</p>}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#wycena" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-orange-600 px-4 py-2.5 text-center font-bold text-white transition hover:bg-orange-500">Zleć zmianę kodów PKD w KRS — 799 zł netto</a>
              <button type="button" onClick={reset} className={secondaryButton}>Sprawdź kolejny kod</button>
            </div>
            <p className="mt-2 text-sm text-slate-600"><a href="#oferta" className="underline underline-offset-2 hover:text-slate-900">Co obejmuje usługa za 799 zł</a></p>
          </div>
        )}

        {notFound && (
          <div className="rounded-xl border border-slate-300 bg-slate-50 p-5 sm:p-6">
            <h2 className="text-xl font-bold sm:text-2xl">Nie znaleziono kodu</h2>
            <p className="mt-4 leading-relaxed">Sprawdź zapis kodu w odpisie z KRS. W dziale 3 kody bywają zapisane na różnym poziomie: jako sam dział (np. 43), grupa (43.1), klasa (43.11) albo pełny kod (43.11.Z). Wyszukiwarka obsługuje wszystkie te warianty. Jeżeli kod jest zapisany prawidłowo, a mimo to go tu nie ma — napisz do nas.</p>
            <Link href="/kontakt" className={`${secondaryButton} mt-5`}>Napisz do nas</Link>
          </div>
        )}
      </div>
    </div>
  )
}
