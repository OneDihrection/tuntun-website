"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Blob, Eyebrow } from "./Decor";
import { ArrowRight, CloudOff, Mic, Shield, VideoOff } from "./Icons";

const icons = [VideoOff, CloudOff, Mic];

export function Privacy() {
  const { t } = useLanguage();

  return (
    <section id="privasi" className="bg-cream px-4 py-8 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-white sm:px-12 sm:py-20">
        <Blob color="rgba(255,255,255,0.06)" className="pointer-events-none absolute -right-24 -top-24 size-96" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <span className="grid size-16 place-items-center rounded-3xl bg-white/10 text-primary-light">
              <Shield className="size-9" />
            </span>
            <Eyebrow className="mt-6 !text-primary-light">{t.privacy.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{t.privacy.title}</h2>
          </div>
          <ul className="grid gap-4">
            {t.privacy.points.map((p, i) => {
              const Icon = icons[i];
              return (
                <li key={p.title} className="flex gap-4 rounded-3xl bg-white/[0.08] p-5 ring-1 ring-white/10">
                  <Icon className="size-7 shrink-0 text-sun" />
                  <div>
                    <h3 className="text-lg font-extrabold">{p.title}</h3>
                    <p className="mt-1 text-white/75">{p.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="relative mt-10 rounded-2xl bg-white/10 px-5 py-4 text-sm leading-relaxed text-white/85">
          {t.privacy.disclaimer}
        </p>
        <Link
          href="/privasi"
          className="group relative mt-6 inline-flex items-center gap-2 font-bold text-primary-light hover:underline"
        >
          {t.privacy.readMore}
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
