"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal, SectionHeader } from "./ui";

export function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="cara-kerja" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.how.eyebrow} title={t.how.title} />
        {/* On wide screens one line runs through the step numbers. */}
        <ol className="relative mt-14 grid gap-10 before:absolute before:inset-x-5 before:top-5 before:hidden before:h-px before:bg-ink/10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:before:block">
          {t.how.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
              <span
                className={`relative grid size-10 place-items-center rounded-full text-sm font-bold tabular-nums ring-4 ring-surface ${i === 2 ? "bg-yellow text-night" : "bg-blue-soft text-blue-ink"}`}
              >
                {i + 1}
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-[-0.015em]">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/60">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
