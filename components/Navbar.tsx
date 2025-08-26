import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-b text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <ul className="flex flex-col sm:flex-row items-center gap-4 text-gray-600">
          <li>
            <a href="tel:+48111222333" className="hover:text-gray-900">
              +48 111 222 333
            </a>
          </li>
          <li>
            <a href="mailto:biuro@zmianakrs.pl" className="hover:text-gray-900">
              biuro@zmianakrs.pl
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link className="hover:text-gray-900" href="/uslugi">
              Usługi
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900" href="/cennik">
              Cennik
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900" href="/o-nas">
              O nas
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900" href="/contact">
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              href="/"
            >
              Strona główna
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

