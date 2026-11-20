"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Plus } from "./Icons";
import { SectionHeader } from "./ui";

export function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" className="py-40 sm:py-56">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader center eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <ul className="mt-20 border-t border-ink/15">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            const panel = `${base}-${i}`;
            return (
              <li key={item.q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panel}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-[-0.015em] sm:text-xl"
                  >
                    {item.q}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid size-8 shrink-0 place-items-center rounded-full bg-chip">
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                </h3>
                {/* Height springs from its current value, so rapid toggles reverse mid-flight. */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panel}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 pr-12 text-[0.9375rem] leading-relaxed text-ink/65">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
