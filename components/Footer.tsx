import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-8 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} ZmianaKRS</p>
        <p><a className="hover:underline" href="/polityka-prywatnosci">Polityka prywatności</a> • <a className="hover:underline" href="/regulamin">Regulamin</a></p>
      </div>
    </footer>
  )
}
