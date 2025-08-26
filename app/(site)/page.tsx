import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZmianaKRS - Strona główna",
  description:
    "Profesjonalna obsługa zmian w KRS. Skorzystaj z naszej pomocy przy aktualizacji danych spółki.",
  openGraph: {
    title: "ZmianaKRS - Strona główna",
    description:
      "Profesjonalna obsługa zmian w KRS. Skorzystaj z naszej pomocy przy aktualizacji danych spółki.",
    url: "/",
    siteName: "ZmianaKRS",
    images: [
      {
        url: "/images/krs-logo.png",
        width: 1200,
        height: 630,
        alt: "ZmianaKRS",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

const nav = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/cennik", label: "Cennik" },
  { href: "/blog", label: "Blog" },
  { href: "/ksiegowi", label: "Dla księgowych" },
  { href: "/contact", label: "Kontakt" },
];

export default function HomePage() {
  return (
    <>
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4 overflow-x-auto">
          <div className="font-semibold">ZmianaKRS</div>
          <ul className="flex items-center gap-4 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="p-8">
        <h1 className="text-2xl font-semibold">Strona główna (placeholder)</h1>
        <p className="mt-2 text-sm text-gray-600">App Router działa.</p>
      </main>
      <footer className="border-t mt-12 py-8 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} ZmianaKRS</p>
          <p>
            <a className="hover:underline" href="/polityka-prywatnosci">
              Polityka prywatności
            </a>{" "}•{" "}
            <a className="hover:underline" href="/regulamin">
              Regulamin
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
