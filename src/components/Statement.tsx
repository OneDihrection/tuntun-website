"use client";

import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { floatPieces, gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";
import { Camera, Cube, Speaker } from "./Icons";
import { Shape, TEE_VIEWBOX } from "./Shapes";
import { Eyebrow, Reveal } from "./ui";

const icons = [Cube, Speaker, Camera];

export function Statement() {
  const { t, locale } = useLanguage();
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Words light up as the paragraph scrolls through, so it reads at the pace you scroll.
        const split = SplitText.create("[data-statement]", { type: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: "none",
            scrollTrigger: { trigger: "[data-statement]", start: "top 80%", end: "bottom 45%", scrub: true },
          },
        );

        // Scroll drift on the outer wrapper, floating on the inner one, so the two compose.
        floatPieces(gsap.utils.toArray<HTMLElement>("[data-float]"), { strength: 1.2 });

        gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.drift),
            ease: "none",
            scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      });
    },
    { scope, dependencies: [locale], revertOnUpdate: true },
  );

  return (
    <section ref={scope} className="relative isolate overflow-hidden py-40 sm:py-56">
      {/* Pieces of the mark peeking in from the edges, drifting at different rates for depth. */}
      <div aria-hidden data-drift="-35" className="absolute -right-[12vw] top-[30%] -z-10 w-[min(46vw,560px)]" style={{ aspectRatio: `${TEE_VIEWBOX.w} / ${TEE_VIEWBOX.h}` }}>
        <div data-float className="size-full">
          <div className="size-full rotate-[-18deg] text-yellow opacity-90">
            <Shape kind="tee" />
          </div>
        </div>
      </div>
      <div aria-hidden data-drift="-80" className="absolute -left-[8vw] bottom-10 -z-10 size-[min(22vw,260px)] text-blue">
        <div data-float className="size-full">
          <Shape kind="circle" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Eyebrow>{t.statement.eyebrow}</Eyebrow>
        {/* Keyed by locale: SplitText rewrites this node, so a language switch gets a fresh one. */}
        <p key={locale} data-statement className="statement mx-auto mt-10 max-w-[18ch]">
          {t.statement.text}
        </p>

        <ul className="mx-auto mt-28 grid max-w-6xl gap-4 sm:grid-cols-3">
          {t.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="flex flex-col items-center rounded-[2rem] bg-surface px-8 py-16 text-center">
                <span className={`grid size-20 place-items-center rounded-full ${i === 1 ? "bg-yellow text-night" : "bg-blue-soft text-blue-ink"}`}>
                  <Icon className="size-8" />
                </span>
                <h2 className="mt-8 text-2xl font-medium tracking-[-0.025em] sm:text-[1.75rem]">{p.title}</h2>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
