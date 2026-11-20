"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Logo } from "./Brand";

const noopSubscribe = () => () => {};

export function Footer() {
  const { t } = useLanguage();
  const year = useSyncExternalStore(noopSubscribe, () => new Date().getFullYear(), () => null);
  return (
    <footer className="mt-auto border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm sm:items-end">
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-blue-ink hover:underline">
              {CONTACT_EMAIL}
            </a>
            <nav className="flex gap-5 text-ink/55">
              <Link href="/privasi" className="hover:text-ink">
                {t.footer.privacy}
              </Link>
              <Link href="/ketentuan" className="hover:text-ink">
                {t.footer.terms}
              </Link>
            </nav>
          </div>
        </div>
        <p className="mt-14 text-xs text-ink/40">
          © {year} Tuntun: Teman Terapi. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
