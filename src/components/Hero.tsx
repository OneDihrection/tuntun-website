"use client";

import Image from "next/image";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Blob, Eyebrow, Wave } from "./Decor";
import { AppleIcon, ArrowRight, Check, Flame } from "./Icons";

export function StoreBadge({ dark = true }: { dark?: boolean }) {
  const { t } = useLanguage();
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-2xl px-5 py-2.5 ${
        dark ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-ink/10"
      }`}
    >
      <AppleIcon className="size-7" />
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] font-medium opacity-80">{t.hero.soon}</span>
        <span className="text-lg font-bold">{t.hero.store}</span>
      </span>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-mint">
      <Blob color="var(--color-peach)" className="pointer-events-none absolute -left-24 top-24 size-72 opacity-70 sm:size-96" />
      <Blob color="var(--color-butter)" className="pointer-events-none absolute -right-20 -top-16 size-80 rotate-45" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.1fr_1fr] md:pb-24 md:pt-16">
        <div className="animate-rise">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t.hero.title}{" "}
            <span className="relative whitespace-nowrap text-primary">
              TeMan.
              <svg viewBox="0 0 200 20" aria-hidden className="absolute -bottom-2 left-0 h-3 w-full text-sun">
                <path d="M3 14C50 4 120 2 197 10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">{t.hero.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              {t.hero.cta}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <StoreBadge />
          </div>
          <p className="mt-5 text-sm font-semibold text-ink/55">{t.hero.note}</p>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:150ms]">
          <div className="relative aspect-square">
            <div className="absolute inset-[6%] rounded-full bg-sage" />
            <div className="absolute inset-[16%] rounded-full bg-primary-light/50" />
            <Image
              src="/hands/hero.png"
              alt=""
              width={640}
              height={640}
              preload
              sizes="(min-width: 768px) 28rem, 90vw"
              className="relative animate-float drop-shadow-xl"
            />
          </div>

          <div className="absolute -left-2 top-[18%] flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10 sm:-left-8">
            <span className="grid size-8 place-items-center rounded-full bg-primary text-white">
              <Check className="size-4" />
            </span>
            <span className="text-sm font-bold text-ink">{t.hero.bubble}</span>
          </div>

          <div className="absolute -right-1 bottom-[14%] flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10 sm:-right-6">
            <Flame className="size-6 text-rust" />
            <span className="text-sm font-bold text-ink">
              5 <span className="font-semibold text-ink/60">{t.features.items[2].streak}</span>
            </span>
          </div>
        </div>
      </div>

      <Wave fill="var(--color-cream)" />
    </section>
  );
}
