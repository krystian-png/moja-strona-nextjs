"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Strona główna" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/cennik", label: "Cennik" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/blog"
      ? pathname === "/blog" || pathname.startsWith("/blog/")
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-gray-800 bg-gray-900 text-gray-100">
        <div className="mx-auto flex w-11/12 max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="tel:572234779"
              className="font-medium tracking-wide text-gray-100 transition-colors hover:text-amber-400"
            >
              {"572\u202f234\u202f779"}
            </a>
            <a
              href="mailto:kontakt@zmianakrs.pl"
              className="text-gray-200 transition-colors hover:text-amber-400"
            >
              kontakt@zmianakrs.pl
            </a>
            <p className="hidden text-gray-300 md:block">
              Kompleksowe wsparcie przy zmianach wpisów do KRS
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="hidden text-gray-300 sm:inline">
              Potrzebujesz szybkiej pomocy?
            </span>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-300"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-semibold text-gray-900">
              ZK
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold uppercase tracking-wide text-gray-900">
                ZmianaKRS.pl
              </span>
              <span className="text-sm text-gray-500">
                Specjaliści ds. zmian w rejestrze
              </span>
            </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 lg:gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Otwórz menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen ? (
          <div className="border-t border-gray-200 bg-white md:hidden" id="mobile-navigation">
            <nav className="mx-auto w-11/12 max-w-6xl px-4 py-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
