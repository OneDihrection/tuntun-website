"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowRight, CloudOff, Mic, VideoOff } from "./Icons";
import { Reveal } from "./ui";

const icons = [VideoOff, Mic, CloudOff];

/** Always dark, in both appearances: a deliberate pause in the page for the trust message. */
export function Privacy() {
  const { t } = useLanguage();
  return (
    <section id="privasi" className="bg-night py-24 text-white sm:py-32 dark:bg-[#111113] dark:ring-1 dark:ring-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-yellow">{t.privacy.eyebrow}</p>
          <h2 className="title mt-3">{t.privacy.title}</h2>
          <p className="lede mt-5 text-white/65">{t.privacy.sub}</p>
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {t.privacy.points.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="rounded-3xl bg-white/6 p-7 ring-1 ring-white/10 sm:p-8">
                <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-yellow">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-[-0.015em]">{p.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/60">{p.desc}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-white/55">{t.privacy.disclaimer}</p>
          <Link href="/privasi" className="press inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white hover:text-yellow">
            {t.privacy.readMore}
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
