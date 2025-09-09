'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = ({ mobile = false }) => (
    <div className={mobile ? "flex flex-col space-y-4" : "flex items-center space-x-6"}>
      <Link href="/">
        <span
          className={`${
            pathname === '/'
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          Strona główna
        </span>
      </Link>
      <Link href="/o-nas">
        <span
          className={`${
            pathname === '/o-nas'
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          O nas
        </span>
      </Link>
      <Link href="/uslugi">
        <span
          className={`${
            pathname === '/uslugi'
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          Usługi
        </span>
      </Link>
      <Link href="/cennik">
        <span
          className={`${
            pathname === '/cennik'
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          Cennik
        </span>
      </Link>
      <Link href="/blog">
        <span
          className={`${
            pathname === '/blog' || pathname.startsWith('/blog/')
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          Blog
        </span>
      </Link>
      <Link href="/ksiegowi">
        <span
          className={`${
            pathname === '/ksiegowi'
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          Dla Księgowych
        </span>
      </Link>
      <Link href="/kontakt">
        <span
          className={`${
            pathname === '/kontakt'
              ? 'bg-amber-800 text-white px-3 py-1 rounded'
              : 'text-muted-foreground hover:text-amber-800'
          } transition-colors font-medium cursor-pointer`}
        >
          Kontakt
        </span>
      </Link>
    </div>
  );

  return (
    <header className="bg-background shadow-sm border-b border-border sticky top-0 z-50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Nawigacja główna"
      >
        <div className="flex justify-between items-center h-16">
          {/* Contact info - left side desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-base font-bold text-amber-800">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <a
                href="tel:+48572234779"
                className="hover:text-amber-600 transition-colors"
              >
                572 234 779
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:biuro@zmianakrs.pl"
                className="hover:text-amber-600 transition-colors"
              >
                biuro@zmianakrs.pl
              </a>
            </div>
          </div>

          {/* Contact info - mobile */}
          <div className="flex md:hidden items-center space-x-4 text-amber-800">
            <a
              href="tel:+48572234779"
              className="hover:text-amber-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:biuro@zmianakrs.pl"
              className="hover:text-amber-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="mt-8">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

