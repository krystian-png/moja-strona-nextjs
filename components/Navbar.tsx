import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="bg-slate-900 text-gray-100 text-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex gap-4">
            <a href="tel:572234779" className="hover:text-amber-400">572 234 779</a>
            <a href="mailto:kontakt@zmianakrs.pl" className="hover:text-amber-400">
              kontakt@zmianakrs.pl
            </a>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/">
                  <span className="hover:text-amber-400">Strona główna</span>
                </Link>
              </li>
              <li>
                <Link href="/uslugi">
                  <span className="hover:text-amber-400">Usługi</span>
                </Link>
              </li>
              <li>
                <Link href="/cennik">
                  <span className="hover:text-amber-400">Cennik</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-amber-400">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <span className="hover:text-amber-400">Kontakt</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
