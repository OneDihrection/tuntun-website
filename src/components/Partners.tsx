"use client";

import Image from "next/image";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Eyebrow } from "./Decor";
import { Mail } from "./Icons";

export function Partners() {
  const { t } = useLanguage();

  return (
    <section id="kontak" className="bg-cream px-4 py-8 sm:px-6">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2.5rem] bg-brand-light-active px-6 py-14 sm:px-12 sm:py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow className="!text-brand-darker">{t.partners.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{t.partners.title}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/75">{t.partners.sub}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {t.partners.groups.map((g) => (
              <li key={g} className="rounded-full bg-white/70 px-4 py-2 font-semibold text-brand-darker">
                {g}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-hover active:bg-brand-active"
          >
            <Mail className="size-5" />
            {t.partners.cta}
          </a>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-xs">
          <div className="absolute inset-0 rounded-full bg-white/50" />
          <Image
            src="/hands/spreading.png"
            alt=""
            fill
            sizes="20rem"
            className="animate-float object-contain [animation-delay:-3s]"
          />
        </div>
      </div>
    </section>
  );
}
