"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Logo, Wave } from "./Decor";
import { StoreBadge } from "./Hero";

const noopSubscribe = () => () => {};

export function Footer() {
  const { t } = useLanguage();
  // Read the year on the client only; Cache Components forbids `new Date()` during prerender.
  const year = useSyncExternalStore(noopSubscribe, () => new Date().getFullYear(), () => null);

  return (
    <footer className="mt-auto bg-cream">
      <Wave fill="var(--color-brand-darker)" />
      <div className="bg-brand-darker pb-10 pt-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="inline-block rounded-2xl bg-white px-3 py-2">
              <Logo />
            </span>
            <p className="mt-4 max-w-xs text-lg font-semibold text-white/80">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-bold text-brand-light-active hover:text-white hover:underline">
              {CONTACT_EMAIL}
            </a>
            <StoreBadge dark={false} />
            <nav className="flex gap-5 font-semibold text-white/80">
              <Link href="/privasi" className="hover:text-white hover:underline">
                {t.footer.privacy}
              </Link>
              <Link href="/ketentuan" className="hover:text-white hover:underline">
                {t.footer.terms}
              </Link>
            </nav>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {year} TeMan: Terapi Mandiri. {t.footer.rights}
          </p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
