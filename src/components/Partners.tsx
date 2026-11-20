"use client";

import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowRight } from "./Icons";
import { buttonSecondary, Reveal, SectionHeader } from "./ui";

export function Partners() {
  const { t } = useLanguage();
  return (
    <section id="kolaborasi" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeader eyebrow={t.partners.eyebrow} title={t.partners.title} sub={t.partners.sub} />
          <Reveal className="mt-8">
            <a href={`mailto:${CONTACT_EMAIL}`} className={buttonSecondary}>
              {t.partners.cta}
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
        <ul className="grid gap-3">
          {t.partners.groups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 0.06} className="flex gap-5 rounded-3xl bg-surface p-6 ring-1 ring-ink/8">
              <span className={`mt-0.5 size-3 shrink-0 rounded-full ${i === 1 ? "bg-yellow" : "bg-blue"}`} />
              <div>
                <h3 className="font-bold tracking-[-0.01em]">{g.title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink/60">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
