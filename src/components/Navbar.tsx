"use client";

import { useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { locales } from "@/i18n/dictionary";
import { Logo } from "./Decor";
import { Close, Menu } from "./Icons";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-full bg-sage p-1 text-sm font-bold">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-3 py-1.5 uppercase transition-colors ${
            locale === l ? "bg-primary text-white shadow-sm" : "text-primary hover:bg-white/60"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#latihan", label: t.nav.exercises },
    { href: "#cara-kerja", label: t.nav.how },
    { href: "#fitur", label: t.nav.features },
    { href: "#privasi", label: t.nav.privacy },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-cream/90 shadow-[0_1px_0_rgba(26,41,46,0.08)] backdrop-blur-md" : "bg-mint"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" aria-label="TeMan" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 font-semibold text-ink/80 transition-colors hover:bg-sage hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hidden rounded-full bg-primary px-5 py-2.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark sm:inline-block"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="grid size-11 place-items-center rounded-full bg-sage text-primary lg:hidden"
          >
            {open ? <Close className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/5 px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg font-bold text-ink hover:bg-sage"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-3 px-1">
            <LanguageToggle />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-primary px-5 py-3 font-bold text-white"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
