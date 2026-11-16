"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navItems = [
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/ksiegowi", label: "Dla księgowych" },
  { href: "/cennik", label: "Cennik" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFFFFF]";
const cta = `inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-[#E7A944] px-[18px] text-[15px] font-bold text-[#111E41] hover:shadow-[inset_0_0_0_2px_#FFFFFF] ${focus}`;
type NavbarProps = { contactAction?: { href: string; label: string } };

export default function Navbar({ contactAction = { href: "/kontakt", label: "Opisz sprawę" } }: NavbarProps = {}) {
  const pathname = usePathname() ?? "";
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const menuButton = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => { setIsMenuOpen(false); }, [pathname]);
  React.useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsMenuOpen(false); };
    const onScroll = () => setScrolled(window.scrollY > 8);
    closeOnDesktop();
    onScroll();
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  React.useEffect(() => {
    if (!isMenuOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [isMenuOpen]);

  const isActive = (href: string) => href === "/blog"
    ? pathname === "/blog" || pathname.startsWith("/blog/") || pathname.startsWith("/artykul")
    : pathname.startsWith(href);
  const close = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 h-[var(--site-header-height)] border-b border-[#20376F] bg-[#111E41] text-[#FFFFFF] ${scrolled ? "shadow-[0_4px_12px_#111E4140]" : ""}`}>
      <nav aria-label="Główna nawigacja" className="mx-auto flex h-full max-w-[1280px] items-center px-4 lg:px-6">
        <BrandLogo />
        <ul className="ml-6 hidden items-center gap-5 whitespace-nowrap lg:flex xl:ml-10 xl:gap-7">
          {navItems.map(({ href, label }) => <li key={href}>
            <Link href={href} aria-current={isActive(href) ? "page" : undefined} className={`relative rounded-sm text-[15px] hover:text-[#FFFFFF] ${focus} ${isActive(href) ? "font-semibold text-[#FFFFFF] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-[#E7A944]" : "font-medium text-[#DCE6F6]"}`}>{label}</Link>
          </li>)}
        </ul>
        <div className="ml-auto hidden items-center gap-4 pl-4 lg:flex">
          <a href="tel:+48572234779" aria-label="Zadzwoń: 572 234 779" className={`flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-lg text-[15px] font-semibold xl:w-auto ${focus}`}><Phone size={16} aria-hidden="true" /><span className="hidden whitespace-nowrap xl:inline">572 234 779</span></a>
          <LanguageSwitcher current="pl" tone="dark" />
          <a href={contactAction.href} className={cta}>{contactAction.label}</a>
        </div>
        <div className="ml-auto flex lg:hidden">
          <a href="tel:+48572234779" aria-label="Zadzwoń: 572 234 779" className={`flex h-11 w-11 items-center justify-center rounded-lg ${focus}`}><Phone size={20} aria-hidden="true" /></a>
          <button ref={menuButton} type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"} className={`flex h-11 w-11 items-center justify-center rounded-lg ${focus}`}>{isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
        <div id="mobile-navigation" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) close(); }} hidden={!isMenuOpen} className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--site-header-height))] overflow-y-auto border-t border-[#20376F] bg-[#111E41] px-4 pb-6 lg:hidden">
          <ul className="mb-5">
            {navItems.map(({ href, label }) => <li key={href} className="border-b border-[#20376F]"><Link href={href} onClick={close} aria-current={isActive(href) ? "page" : undefined} className={`flex min-h-[48px] items-center border-l-[3px] px-4 text-[17px] hover:bg-[#20376F] focus-visible:outline-offset-[-2px] ${focus} ${isActive(href) ? "border-[#E7A944] font-semibold text-[#FFFFFF]" : "border-transparent font-medium text-[#DCE6F6]"}`}>{label}</Link></li>)}
          </ul>
          <a href={contactAction.href} onClick={close} className={`${cta} w-full`}>{contactAction.label}</a>
          <a href="tel:+48572234779" onClick={close} className={`my-4 flex min-h-[44px] items-center gap-3 rounded-sm ${focus}`}><Phone size={18} aria-hidden="true" />572 234 779</a>
          <a href="mailto:biuro@zmianakrs.pl" onClick={close} className={`mb-4 flex min-h-[44px] items-center gap-3 rounded-sm ${focus}`}><Mail size={18} aria-hidden="true" />biuro@zmianakrs.pl</a>
          <LanguageSwitcher current="pl" tone="dark" mobile />
        </div>
      </nav>
    </header>
  );
}
