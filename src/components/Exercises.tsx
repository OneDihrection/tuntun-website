"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { exerciseGroups, type ExerciseGroupKey } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ChevronLeft, ChevronRight } from "./Icons";
import { Reveal, SectionHeader } from "./ui";

export function Exercises() {
  const { t } = useLanguage();
  const [active, setActive] = useState<ExerciseGroupKey>("hand");
  const group = exerciseGroups.find((g) => g.key === active)!;
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, measure]);

  // Native scroll-snap supplies the momentum; the buttons just page by one card.
  const page = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.clientWidth + 16), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="latihan" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={t.exercises.eyebrow} title={t.exercises.title} sub={t.exercises.sub} />

        <Reveal className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div role="tablist" aria-label={t.exercises.eyebrow} className="no-scrollbar -mx-1 flex max-w-full overflow-x-auto rounded-full bg-ink/6 p-1">
            {exerciseGroups.map((g) => (
              <button
                key={g.key}
                role="tab"
                type="button"
                aria-selected={active === g.key}
                aria-controls="exercise-track"
                onClick={() => setActive(g.key)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${active === g.key ? "text-ink" : "text-ink/55 hover:text-ink"}`}
              >
                {active === g.key && <motion.span layoutId="exercise-tab" className="absolute inset-0 rounded-full bg-surface shadow-sm ring-1 ring-ink/5" />}
                <span className="relative">{t.exercises.groups[g.key].name}</span>
              </button>
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <PagerButton label={t.exercises.prev} disabled={edges.start} onClick={() => page(-1)}>
              <ChevronLeft className="size-5" />
            </PagerButton>
            <PagerButton label={t.exercises.next} disabled={edges.end} onClick={() => page(1)}>
              <ChevronRight className="size-5" />
            </PagerButton>
          </div>
        </Reveal>

        <motion.p key={`${active}-desc`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-[0.9375rem] text-ink/60">
          {t.exercises.groups[active].desc}
        </motion.p>
      </div>

      {/* Full-bleed track whose inset matches the page column, so cards scroll off the screen edge, not the column. */}
      <ul
        id="exercise-track"
        ref={track}
        role="tabpanel"
        tabIndex={0}
        onScroll={measure}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") page(1);
          if (e.key === "ArrowLeft") page(-1);
        }}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 focus-visible:outline-none sm:scroll-px-(--gutter) sm:px-(--gutter) [--gutter:max(2rem,calc((100%-72rem)/2+2rem))]"
      >
        {group.items.map((key, i) => {
          const item = t.exercises.items[key];
          const hand = group.art === "hands";
          return (
            <motion.li
              key={key}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5, delay: Math.min(i, 4) * 0.04 }}
              className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              <article className="h-full overflow-hidden rounded-3xl bg-surface ring-1 ring-ink/8">
                <div className={`relative aspect-[4/3] ${hand ? "bg-yellow-soft dark:bg-white/5" : "bg-blue-soft"}`}>
                  <Image
                    src={hand ? `/hands/${key}.png` : `/plans/${key}.svg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 78vw"
                    className={hand ? "object-contain p-4" : "object-contain p-6"}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tabular-nums text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-lg font-bold tracking-[-0.015em]">{item.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.desc}</p>
                </div>
              </article>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

function PagerButton({ label, disabled, onClick, children }: { label: string; disabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-controls="exercise-track"
      disabled={disabled}
      onClick={onClick}
      className="press grid size-11 place-items-center rounded-full bg-surface ring-1 ring-ink/10 hover:ring-ink/25 disabled:pointer-events-none disabled:opacity-35"
    >
      {children}
    </button>
  );
}
