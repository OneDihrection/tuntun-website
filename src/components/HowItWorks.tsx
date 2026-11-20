"use client";

import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { SectionHeader } from "./ui";

export function HowItWorks() {
  const { t } = useLanguage();
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Each row draws its rule across, then its number rises out of the line and the text follows.
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((row) => {
          gsap
            .timeline({ scrollTrigger: { trigger: row, start: "top 85%", toggleActions: "play none none none" } })
            .set(row, { visibility: "visible" })
            .from(row.querySelector("[data-line]"), { scaleX: 0, duration: 1.1, ease: "expo.inOut" })
            .from(row.querySelector("[data-num]"), { yPercent: 100, duration: 0.9, ease: "expo.out" }, 0.35)
            .from(row.querySelectorAll("[data-text]"), { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "expo.out" }, 0.45);
        });
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="cara-kerja" className="py-40 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader center eyebrow={t.how.eyebrow} title={t.how.title} />
        <ol className="mt-24 border-t border-ink/15">
          {t.how.steps.map((step, i) => (
            <li
              key={step.title}
              data-step
              className="gsap-in relative grid gap-4 py-12 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:items-center sm:gap-12 sm:py-16"
            >
              <span aria-hidden data-line className="absolute inset-x-0 bottom-0 h-px origin-left bg-ink/15" />
              <span className="block overflow-hidden">
                <span data-num className={`display block tabular-nums ${i === 2 ? "text-yellow-pressed" : "text-ink/25"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <div>
                <h3 data-text className="text-3xl font-medium tracking-[-0.03em] sm:text-5xl">
                  {step.title}
                </h3>
                <p data-text className="mt-3 text-lg text-ink/55 sm:text-xl">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
