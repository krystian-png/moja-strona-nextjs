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
    { href: "/o-nas", label: "O nas" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/ksiegowi", label: "Dla księgowych" },
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
    <header className="w-full bg-[#4a2816] text-amber-50 shadow-md">
      <div className="mx-auto flex w-11/12 max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-sm">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="tel:572234779"
            className="font-semibold tracking-wide text-amber-50 transition-colors hover:text-amber-300"
          >
            {"572\u202f234\u202f779"}
          </a>
          <a
            href="mailto:kontakt@zmianakrs.pl"
            className="text-amber-100 transition-colors hover:text-amber-300"
          >
            kontakt@zmianakrs.pl
          </a>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 text-amber-50 transition-colors hover:border-amber-300 hover:text-amber-200 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className="sr-only">Przełącz menu</span>
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
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-amber-400 text-[#4a2816]"
                        : "text-amber-100 hover:bg-amber-300 hover:text-[#4a2816]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-amber-300/40 bg-[#3b1e10] md:hidden" id="mobile-navigation">
          <nav className="mx-auto w-11/12 max-w-7xl px-4 py-4">
            <ul className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                        active
                          ? "bg-amber-400 text-[#4a2816]"
                          : "text-amber-100 hover:bg-amber-300 hover:text-[#4a2816]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
