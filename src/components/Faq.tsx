"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Eyebrow } from "./Decor";
import { Plus } from "./Icons";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{t.faq.title}</h2>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group rounded-3xl bg-white p-1 ring-1 ring-ink/5 open:bg-brand-light">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-light text-brand-dark transition-transform group-open:rotate-45">
                  <Plus className="size-5" />
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-ink/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
