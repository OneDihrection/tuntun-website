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
    <section id="faq" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <ul className="border-t border-ink/10">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            const panel = `${base}-${i}`;
            return (
              <li key={item.q} className="border-b border-ink/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panel}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[1.0625rem] font-semibold tracking-[-0.01em]"
                  >
                    {item.q}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid size-8 shrink-0 place-items-center rounded-full bg-ink/5">
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
