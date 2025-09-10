"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
    <header className="w-full">
      <div className="bg-background text-foreground h-16 flex items-center">
        <div className="w-4/5 max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex gap-4">
            <a
              href="tel:572234779"
              className="text-muted transition-colors hover:text-foreground"
            >
              {"572\u202f234\u202f779"}
            </a>
            <a
              href="mailto:kontakt@zmianakrs.pl"
              className="text-muted transition-colors hover:text-foreground"
            >
              kontakt@zmianakrs.pl
            </a>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-block px-3 py-4 transition-colors ${
                      isActive(item.href)
                        ? "bg-foreground text-background font-semibold rounded"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
