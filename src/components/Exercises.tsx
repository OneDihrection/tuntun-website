"use client";

import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { exerciseGroups, type ExerciseGroupKey } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ChevronLeft, ChevronRight } from "./Icons";
import { buttonCircle, SectionHeader } from "./ui";

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

/** Apple's momentum projection: where a flick would come to rest under scroll-like deceleration. */
const project = (velocity: number, rate = 0.998) => ((velocity / 1000) * rate) / (1 - rate);

/** Progressive resistance past the first and last card, in card units. */
const rubberband = (overshoot: number, c = 0.55) => (overshoot * c) / (1 + c * Math.abs(overshoot));

export function Exercises() {
  const { t } = useLanguage();
  const [active, setActive] = useState<ExerciseGroupKey>("hand");
  const group = exerciseGroups.find((g) => g.key === active)!;

  return (
    <section id="latihan" className="overflow-hidden py-40 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader center eyebrow={t.exercises.eyebrow} title={t.exercises.title} />
      </div>

      <Fan key={active} groupKey={active} items={group.items} art={group.art} />

      {/* Group picker: one evenly spaced row of pills, the selected one in ink. */}
      <div className="mx-auto mt-24 max-w-4xl px-5 sm:px-8">
        <p id="exercise-groups" className="mono-label text-center text-ink/55">
          {t.exercises.groupsLabel}
        </p>
        <div role="group" aria-labelledby="exercise-groups" className="mt-8 flex flex-wrap justify-center gap-3">
          {exerciseGroups.map((g) => (
            <button
              key={g.key}
              type="button"
              aria-pressed={active === g.key}
              onClick={() => setActive(g.key)}
              className={`press rounded-full px-7 py-4 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-lg ${
                active === g.key ? "bg-ink text-bg" : "bg-chip text-ink hover:brightness-95"
              }`}
            >
              {t.exercises.groups[g.key].name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fan({ groupKey, items, art }: { groupKey: ExerciseGroupKey; items: readonly string[]; art: "hands" | "plans" }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  // Open on the middle card so the fan spreads to both sides.
  const middle = Math.floor((items.length - 1) / 2);
  const pos = useMotionValue(middle);
  const [index, setIndex] = useState(middle);
  const [cardW, setCardW] = useState(300);
  const stage = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number; from: number; dragging: boolean; samples: { x: number; t: number }[] } | null>(null);
  const dragged = useRef(false);
  const last = items.length - 1;
  const spacing = cardW * 0.8;

  useMotionValueEvent(pos, "change", (v) => setIndex(clamp(Math.round(v), 0, last)));

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setCardW(e.contentRect.width < 640 ? 260 : 380));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const settle = (target: number, velocity = 0) => {
    const to = clamp(target, 0, last);
    if (reduce) return pos.set(to);
    // A flick carries its velocity into a slightly bouncy settle; a tap or arrow press stays critically damped.
    animate(pos, to, { type: "spring", velocity, bounce: velocity ? 0.2 : 0, duration: 0.6 });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pos.stop(); // Interrupt mid-flight: the next motion starts from where the fan is now.
    dragged.current = false;
    gesture.current = { x: e.clientX, y: e.clientY, from: pos.get(), dragging: false, samples: [{ x: e.clientX, t: e.timeStamp }] };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const g = gesture.current;
    if (!g) return;
    const dx = e.clientX - g.x;
    if (!g.dragging) {
      // Commit to a horizontal drag only after 10px, and only if it's more sideways than vertical.
      if (Math.abs(dx) < 10 || Math.abs(dx) < Math.abs(e.clientY - g.y)) return;
      g.dragging = true;
      dragged.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    let p = g.from - dx / spacing;
    if (p < 0) p = -rubberband(-p);
    if (p > last) p = last + rubberband(p - last);
    pos.set(p);
    g.samples.push({ x: e.clientX, t: e.timeStamp });
    if (g.samples.length > 6) g.samples.shift();
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const g = gesture.current;
    gesture.current = null;
    if (!g?.dragging) return;
    const first = g.samples[0];
    const dt = Math.max(e.timeStamp - first.t, 1);
    const velocity = (-(e.clientX - first.x) / dt) * 1000 / spacing; // cards per second
    settle(Math.round(pos.get() + project(velocity)), velocity);
  };

  return (
    <div className="mt-24">
      <div
        ref={stage}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.exercises.groups[groupKey].name}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") settle(index + 1);
          if (e.key === "ArrowLeft") settle(index - 1);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative isolate h-[30rem] cursor-grab touch-pan-y select-none focus-visible:outline-none active:cursor-grabbing sm:h-[38rem]"
      >
        {items.map((key, i) => {
          const item = t.exercises.items[key as keyof typeof t.exercises.items];
          return (
            <FanCard
              key={key}
              i={i}
              pos={pos}
              spacing={spacing}
              width={cardW}
              active={i === index}
              name={item.name}
              src={art === "hands" ? `/hands/${key}.png` : `/plans/${key}.svg`}
              hand={art === "hands"}
              onSelect={() => !dragged.current && settle(i)}
            />
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button type="button" aria-label={t.exercises.prev} disabled={index === 0} onClick={() => settle(index - 1)} className={buttonCircle}>
          <ChevronLeft className="size-5" />
        </button>
        <span className="mono-label w-16 text-center tabular-nums text-ink/55" aria-live="polite">
          {index + 1} / {items.length}
        </span>
        <button type="button" aria-label={t.exercises.next} disabled={index === last} onClick={() => settle(index + 1)} className={buttonCircle}>
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

function FanCard({
  i,
  pos,
  spacing,
  width,
  active,
  name,
  src,
  hand,
  onSelect,
}: {
  i: number;
  pos: MotionValue<number>;
  spacing: number;
  width: number;
  active: boolean;
  name: string;
  src: string;
  hand: boolean;
  onSelect: () => void;
}) {
  // Every visual property derives from one continuous value, so drags, flicks and arrows stay in sync.
  const offset = useTransform(pos, (p) => i - p);
  const x = useTransform(offset, (o) => o * spacing - width / 2);
  const y = useTransform(offset, (o) => Math.abs(o) * 22 + o * o * 3);
  const rotate = useTransform(offset, (o) => clamp(o * 6, -18, 18));
  const scale = useTransform(offset, (o) => 1 - Math.min(Math.abs(o), 3) * 0.05);
  const opacity = useTransform(offset, (o) => (Math.abs(o) > 3.2 ? 0 : 1));
  const zIndex = useTransform(offset, (o) => 100 - Math.round(Math.abs(o) * 10));

  return (
    <motion.article
      onClick={onSelect}
      aria-hidden={!active}
      style={{ x, y, rotate, scale, opacity, zIndex, width, transformOrigin: "50% 120%" }}
      className="absolute left-1/2 top-0 rounded-[2rem] bg-surface p-3.5 shadow-[0_24px_48px_-28px_rgb(0_0_0/0.35)]"
    >
      <div className={`relative aspect-square overflow-hidden rounded-[1.5rem] ${hand ? "bg-yellow-soft" : "bg-blue-soft"}`}>
        <Image src={src} alt="" fill draggable={false} sizes="24rem" className={hand ? "object-contain p-6" : "object-contain p-8"} />
      </div>
      <h3 className="px-3 pb-5 pt-6 text-[1.75rem] font-medium leading-tight tracking-[-0.025em]">{name}</h3>
    </motion.article>
  );
}
