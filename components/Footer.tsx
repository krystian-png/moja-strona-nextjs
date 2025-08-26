import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-8 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} ZmianaKRS</p>
        <p>
          <Link className="hover:underline" href="/polityka-prywatnosci">
            <span>Polityka prywatności</span>
          </Link>
          {' '}•{' '}
          <Link className="hover:underline" href="/regulamin">
            <span>Regulamin</span>
          </Link>
        </p>
      </div>
    </footer>
  )
}
