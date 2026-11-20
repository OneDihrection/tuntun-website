"use client";

import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";
import { BrandMark } from "./Brand";

const noopSubscribe = () => () => {};

export function Footer() {
  const { t } = useLanguage();
  const year = useSyncExternalStore(noopSubscribe, () => new Date().getFullYear(), () => null);
  const scope = useRef<HTMLElement>(null);

  // The wordmark's letters rise out of the baseline one after another when the footer arrives.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create("[data-wordmark]", { type: "chars", mask: "chars" });
        gsap
          .timeline({ scrollTrigger: { trigger: "[data-wordmark]", start: "top 92%", toggleActions: "play none none none" } })
          .set("[data-wordmark-row]", { visibility: "visible" })
          .from("[data-wordmark-mark]", { scale: 0.6, rotation: -20, autoAlpha: 0, duration: 1, ease: "expo.out" })
          .from(split.chars, { yPercent: 105, stagger: 0.06, duration: 1, ease: "expo.out" }, 0.05);
      });
    },
    { scope },
  );

  return (
    <footer ref={scope} className="mt-auto px-3 pb-8 sm:px-6">
      <div className="mx-auto max-w-[90rem] border-t border-ink/80">
        <div className="flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <p className="max-w-sm text-[0.9375rem] text-ink/70">{t.footer.tagline}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[0.9375rem] text-ink/70 hover:text-ink">
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Giant wordmark, edge to edge, as Labs closes its page. */}
        {/* Sized in container units so the row fills the column exactly at any width. */}
        <div className="@container">
          <div data-wordmark-row className="gsap-in flex items-center justify-between gap-[2cqw] py-4" role="img" aria-label="Tuntun: Teman Terapi">
            <span data-wordmark-mark className="shrink-0">
              <BrandMark className="h-[16cqw] w-auto" />
            </span>
            <span aria-hidden data-wordmark className="whitespace-nowrap text-[26.5cqw] font-medium leading-[0.8] tracking-[-0.06em]">
              Tuntun
            </span>
          </div>
        </div>

        <nav className="mono-label mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ink/80 pt-6 text-ink/70">
          <span>© {year} Tuntun</span>
          <Link href="/privasi" className="hover:text-ink">
            {t.footer.privacy}
          </Link>
          <Link href="/ketentuan" className="hover:text-ink">
            {t.footer.terms}
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink">
            {t.footer.contact}
          </a>
        </nav>
      </div>
    </footer>
  );
}
