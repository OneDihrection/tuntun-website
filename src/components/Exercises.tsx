"use client";

import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { exerciseGroups } from "@/i18n/dictionary";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ChevronLeft, ChevronRight } from "./Icons";
import { buttonCircle, SectionHeader } from "./ui";

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

/** Apple's momentum projection: where a flick would come to rest under scroll-like deceleration. */
const project = (velocity: number, rate = 0.998) => ((velocity / 1000) * rate) / (1 - rate);

/** Progressive resistance past the first and last card, in card units. */
const rubberband = (overshoot: number, c = 0.55) => (overshoot * c) / (1 + c * Math.abs(overshoot));

/** Every exercise in one row, in catalog order, each keeping its group's artwork style. */
const exercises = exerciseGroups.flatMap((g) => g.items.map((key) => ({ key, art: g.art })));

export function Exercises() {
  const { t } = useLanguage();

  return (
    <section id="latihan" className="overflow-hidden py-40 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader center eyebrow={t.exercises.eyebrow} title={t.exercises.title} />
      </div>

      <Carousel />
    </section>
  );
}

function Carousel() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  // Open on the middle card so the row spreads to both sides.
  const middle = Math.floor((exercises.length - 1) / 2);
  const pos = useMotionValue(middle);
  const [index, setIndex] = useState(middle);
  const [cardW, setCardW] = useState(300);
  const stage = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number; from: number; dragging: boolean; samples: { x: number; t: number }[] } | null>(null);
  const last = exercises.length - 1;
  const spacing = cardW + 24;

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
    // A flick carries its velocity into a slightly bouncy settle; an arrow press stays critically damped.
    animate(pos, to, { type: "spring", velocity, bounce: velocity ? 0.2 : 0, duration: 0.6 });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pos.stop(); // Interrupt mid-flight: the next motion starts from where the row is now.
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
        aria-label={t.exercises.title}
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
        {exercises.map(({ key, art }, i) => (
          <ExerciseCard
            key={key}
            i={i}
            pos={pos}
            spacing={spacing}
            width={cardW}
            active={i === index}
            name={t.exercises.items[key].name}
            src={art === "hands" ? `/hands/${key}.png` : `/plans/${key}.svg`}
            hand={art === "hands"}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button type="button" aria-label={t.exercises.prev} disabled={index === 0} onClick={() => settle(index - 1)} className={buttonCircle}>
          <ChevronLeft className="size-5" />
        </button>
        <span className="mono-label w-16 text-center tabular-nums text-ink/55" aria-live="polite">
          {index + 1} / {exercises.length}
        </span>
        <button type="button" aria-label={t.exercises.next} disabled={index === last} onClick={() => settle(index + 1)} className={buttonCircle}>
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

function ExerciseCard({
  i,
  pos,
  spacing,
  width,
  active,
  name,
  src,
  hand,
}: {
  i: number;
  pos: MotionValue<number>;
  spacing: number;
  width: number;
  active: boolean;
  name: string;
  src: string;
  hand: boolean;
}) {
  // Every visual property derives from one continuous value, so drags, flicks and arrows stay in sync.
  const offset = useTransform(pos, (p) => i - p);
  const x = useTransform(offset, (o) => o * spacing - width / 2);
  const y = useTransform(offset, (o) => Math.abs(o) * 22 + o * o * 3);
  const rotate = useTransform(offset, (o) => clamp(o * 6, -18, 18));
  const opacity = useTransform(offset, (o) => (Math.abs(o) > 3.2 ? 0 : 1));
  const zIndex = useTransform(offset, (o) => 100 - Math.round(Math.abs(o) * 10));

  return (
    <motion.article
      aria-hidden={!active}
      style={{ x, y, rotate, opacity, zIndex, width, transformOrigin: "50% 120%" }}
      className="absolute left-1/2 top-0 rounded-[2rem] bg-surface p-3.5 shadow-[0_24px_48px_-28px_rgb(0_0_0/0.35)]"
    >
      <div className={`relative aspect-square overflow-hidden rounded-[1.5rem] ${hand ? "bg-yellow-soft" : "bg-blue-soft"}`}>
        <Image src={src} alt="" fill draggable={false} sizes="24rem" className={hand ? "object-contain p-6" : "object-contain p-8"} />
      </div>
      <h3 className="px-3 pb-5 pt-6 text-[1.75rem] font-medium leading-tight tracking-[-0.025em]">{name}</h3>
    </motion.article>
  );
}
