"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { CONTACT_EMAIL } from "@/config";
import { locales } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Logo } from "./Brand";
import { Close, Menu } from "./Icons";
import { buttonPrimary } from "./ui";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const pill = useId();
  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-full bg-ink/6 p-0.5 text-xs font-semibold">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`relative rounded-full px-3 py-1.5 uppercase transition-colors ${locale === l ? "text-ink" : "text-ink/50 hover:text-ink"}`}
        >
          {locale === l && <motion.span layoutId={pill} className="absolute inset-0 rounded-full bg-surface shadow-sm ring-1 ring-ink/5" />}
          <span className="relative">{l}</span>
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { href: "/#latihan", label: t.nav.exercises },
    { href: "/#cara-kerja", label: t.nav.how },
    { href: "/#fitur", label: t.nav.features },
    { href: "/#privasi", label: t.nav.privacy },
    { href: "/#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* The edge only appears once content scrolls underneath the bar. */}
      <div className={`glass absolute inset-0 transition-[border-color] duration-200 border-b ${scrolled || open ? "border-ink/10" : "border-transparent"}`} />
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="Tuntun" onClick={() => setOpen(false)} className="press">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-ink/65 transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${buttonPrimary} px-4! py-2! text-sm! max-sm:hidden`}>
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="press grid size-10 place-items-center rounded-full hover:bg-ink/5 lg:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              className="fixed inset-0 top-16 bg-night/30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="sheet"
              id="mobile-menu"
              className="absolute right-3 top-[calc(100%+0.5rem)] w-[min(20rem,calc(100vw-1.5rem))] origin-top-right rounded-3xl bg-surface p-3 shadow-2xl ring-1 ring-ink/10 lg:hidden"
              initial={{ opacity: 0, scale: 0.92, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8 }}
            >
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="press block rounded-2xl px-4 py-3 text-base font-medium hover:bg-ink/5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center justify-between gap-3 border-t border-ink/10 px-2 pt-4 pb-1">
                <LanguageToggle />
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${buttonPrimary} px-4! py-2! text-sm!`}>
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
