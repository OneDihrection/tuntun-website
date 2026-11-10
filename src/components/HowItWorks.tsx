"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Eyebrow, Wave } from "./Decor";

const badgeColors = ["bg-brand text-white", "bg-sun text-ink", "bg-brand-dark text-white", "bg-ink text-white"];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="cara-kerja" className="bg-cream">
      <Wave fill="var(--color-brand-light)" />
      <div className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <Eyebrow>{t.how.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{t.how.title}</h2>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.how.steps.map((step, i) => (
              <li key={step.title} className="relative rounded-[2rem] bg-white/80 p-7 shadow-sm">
                <span className={`grid size-12 place-items-center rounded-2xl text-xl font-extrabold ${badgeColors[i]}`}>
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Wave fill="var(--color-brand-light)" flip />
    </section>
  );
}
