"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal, SectionHeader } from "./ui";

export function Partners() {
  const { t } = useLanguage();
  return (
    <section id="kolaborasi" className="py-40 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader center eyebrow={t.partners.eyebrow} title={t.partners.title} />
        <ul className="mt-20 flex flex-wrap justify-center gap-4">
          {t.partners.groups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 0.06}>
              <span className="inline-block rounded-full bg-chip px-8 py-5 text-lg font-medium sm:text-xl">{g.title}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
