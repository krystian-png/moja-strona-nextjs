'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'Strona główna' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/blog', label: 'Blog' },
  { href: '/ksiegowi', label: 'Dla Księgowych' },
  { href: '/contact', label: 'Kontakt' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4 overflow-x-auto">
        <div className="font-semibold">ZmianaKRS</div>
        <ul className="flex items-center gap-4 text-sm">
          {nav.map(item => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={active ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
