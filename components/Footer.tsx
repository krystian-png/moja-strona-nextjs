import React from 'react'
import Link from 'next/link'

type FooterProps = {
  className?: string
}

const columns = [
  {
    title: 'Usługi',
    links: [
      { href: '/uslugi', label: 'Obsługa wniosków do KRS' },
      { href: '/cennik', label: 'Cennik usług' },
      { href: '/ksiegowi', label: 'Wsparcie dla księgowych' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { href: '/o-nas', label: 'O nas' },
      { href: '/contact', label: 'Kontakt' },
      { href: '/regulamin', label: 'Regulamin współpracy' },
    ],
  },
  {
    title: 'Pomoc',
    links: [
      { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
      { href: '/rodo', label: 'RODO' },
      { href: '/contact', label: 'Wsparcie klienta' },
    ],
  },
]

export default function Footer({ className }: FooterProps = {}) {
  const year = new Date().getFullYear()

  const footerClassName = [
    'bg-slate-900 text-slate-300',
    className ?? 'mt-12',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <footer className={footerClassName}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <Link href="/" className="text-lg font-semibold text-white">
                ZmianaKRS
              </Link>
              <p className="text-sm text-slate-400">
                Kompleksowe wsparcie w przygotowaniu i składaniu wniosków do KRS oraz
                doradztwo przy zmianach w spółce.
              </p>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white">Telefon</p>
                <a
                  className="mt-1 block text-slate-300 transition hover:text-white"
                  href="tel:+48572234779"
                >
                  +48 572 234 779
                </a>
              </div>
              <div>
                <p className="font-medium text-white">E-mail</p>
                <a
                  className="mt-1 block text-slate-300 transition hover:text-white"
                  href="mailto:kontakt@zmianakrs.pl"
                >
                  kontakt@zmianakrs.pl
                </a>
              </div>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="space-y-3 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="transition hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-700 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} ZmianaKRS. Wszelkie prawa zastrzeżone.</p>
          <p className="space-x-3">
            <Link className="transition hover:text-white" href="/polityka-prywatnosci">
              Polityka prywatności
            </Link>
            <span aria-hidden="true">•</span>
            <Link className="transition hover:text-white" href="/regulamin">
              Regulamin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
