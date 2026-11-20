"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Camera, Cube, Speaker } from "./Icons";
import { Reveal } from "./ui";

const icons = [
  { Icon: Cube, tint: "bg-blue-soft text-blue-ink" },
  { Icon: Speaker, tint: "bg-yellow-soft text-ink" },
  { Icon: Camera, tint: "bg-blue-soft text-blue-ink" },
];

export function Pillars() {
  const { t } = useLanguage();
  return (
    <section aria-label="Tuntun" className="mx-auto max-w-6xl px-5 sm:px-8">
      <ul className="grid gap-px overflow-hidden rounded-3xl bg-ink/8 ring-1 ring-ink/8 md:grid-cols-3">
        {t.pillars.map((p, i) => {
          const { Icon, tint } = icons[i];
          return (
            <Reveal as="li" key={p.title} delay={i * 0.06} className="bg-surface p-7 sm:p-8">
              <span className={`grid size-11 place-items-center rounded-2xl ${tint}`}>
                <Icon className="size-5" />
              </span>
              <h2 className="mt-5 text-lg font-bold tracking-[-0.015em]">{p.title}</h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/60">{p.desc}</p>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
