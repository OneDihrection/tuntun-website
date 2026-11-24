"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { TESTFLIGHT_URL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { floatPieces, gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";
import { AppleIcon, ArrowRight, Check } from "./Icons";
import { Shape, type ShapeKind } from "./Shapes";
import { buttonChip, buttonPrimary } from "./ui";

type HeroShape = {
  kind: ShapeKind;
  color: string;
  /** Position and size; phones use the unprefixed values, larger screens the `sm:` ones. */
  box: string;
  rotate: number;
  /** How far the piece drifts up while the hero scrolls away, for depth. */
  depth: number;
};

/** Pieces of the Tuntun mark around the headline. Decorative only: they float, they can't be grabbed. */
const shapes: HeroShape[] = [
  {
    kind: "circle",
    color: "text-blue",
    box: "left-[-6%] top-16 size-[clamp(110px,17vw,260px)] sm:left-[-2%] sm:top-24",
    rotate: 0,
    depth: -30,
  },
  {
    kind: "squircle",
    color: "text-chip",
    box: "right-[-4%] top-14 size-[clamp(80px,13vw,200px)] sm:right-[2%] sm:top-28",
    rotate: 12,
    depth: -18,
  },
  {
    kind: "capsule",
    color: "text-blue",
    box: "left-[-8%] top-[51rem] aspect-[380/140] w-[clamp(150px,24vw,360px)] sm:left-[1%] sm:top-[38rem]",
    rotate: -22,
    depth: -40,
  },
  {
    kind: "tee",
    color: "text-yellow",
    box: "right-[-10%] top-[52rem] aspect-[904/622] w-[clamp(170px,30vw,440px)] sm:right-[-2%] sm:top-[36rem]",
    rotate: -7,
    depth: -26,
  },
  {
    kind: "circle",
    color: "text-yellow",
    box: "right-[18%] top-[48rem] size-[clamp(50px,8vw,120px)] sm:right-[19%] sm:top-[23rem]",
    rotate: 0,
    depth: -12,
  },
];

export function Hero() {
  const { t, locale } = useLanguage();
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const pieces = gsap.utils.toArray<HTMLElement>("[data-piece]");
        const floats = gsap.utils.toArray<HTMLElement>("[data-float]");
        const title = SplitText.create("[data-hero-title]", { type: "words" });

        const intro = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.1 } });
        intro
          .set(".gsap-in", { visibility: "visible" })
          .from(pieces, { scale: 0.6, autoAlpha: 0, stagger: 0.08, duration: 1.4 }, 0)
          .from("[data-hero-eyebrow]", { y: 16, autoAlpha: 0 }, 0.1)
          .from(title.words, { yPercent: 60, autoAlpha: 0, stagger: 0.05 }, 0.15)
          .from("[data-hero-rest]", { y: 24, autoAlpha: 0, stagger: 0.08 }, 0.5);

        // Each piece drifts on its own loop once it has landed.
        const bobbing = floatPieces(floats, { delay: 1 });

        // Parallax on the outer wrapper, floating on the inner one, so the two compose instead of fighting.
        pieces.forEach((el, i) => {
          gsap.to(el, {
            yPercent: shapes[i].depth,
            ease: "none",
            scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
          });
        });

        // Nothing floats while the hero is off screen.
        gsap.timeline({
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "bottom top",
            onToggle: ({ isActive }) => bobbing.forEach((tween) => (isActive ? tween.resume() : tween.pause())),
          },
        });
      });
    },
    { scope, dependencies: [locale], revertOnUpdate: true },
  );

  return (
    <section ref={scope} className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {shapes.map((s, i) => (
          <div key={i} data-piece className={`gsap-in absolute ${s.box}`}>
            <div data-float className="size-full">
              <div className="size-full" style={{ transform: `rotate(${s.rotate}deg)` }}>
                <Shape kind={s.kind} className={s.color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-32 pt-24 text-center sm:px-8 sm:pt-36">
        <p data-hero-eyebrow className="gsap-in mono-label font-medium text-ink/70">
          {t.hero.eyebrow}
        </p>
        {/* Keyed by locale: SplitText rewrites this node, so a language switch gets a fresh one. */}
        <h1 key={locale} data-hero-title className="gsap-in display mx-auto mt-6 max-w-[13ch]">
          {t.hero.title}
        </h1>
        <p data-hero-rest className="gsap-in lede mx-auto mt-8 max-w-[38rem] text-ink/65">
          {t.hero.sub}
        </p>
        <div data-hero-rest className="gsap-in mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
            {t.hero.cta}
            <ArrowRight className="size-4" />
          </a>
          <a href="#latihan" className={buttonChip}>
            {t.hero.secondary}
          </a>
        </div>
        <p data-hero-rest className="gsap-in mt-8 flex items-center justify-center gap-2.5 text-sm text-ink/55">
          <AppleIcon className="size-4 text-ink" />
          <span>
            {t.hero.soon} <span className="font-semibold text-ink">{t.hero.store}</span>
          </span>
        </p>

        <div data-hero-rest className="gsap-in mt-28">
          <IpadMock />
        </div>
      </div>
    </section>
  );
}

/** A still from a session: hand demo, start/target guide and the live rep counter, in the app's own palette. */
function IpadMock() {
  const { t } = useLanguage();
  const reps = 6;
  const total = 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", bounce: 0, duration: 0.9, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[960px]"
    >
      <div className="rounded-[2.25rem] bg-night p-3 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.45)] ring-1 ring-white/10 sm:p-3.5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-[#fffaec] to-[#ffefc2]">
          <Image
            src="/hands/hero.png"
            alt=""
            fill
            preload
            sizes="(min-width: 1024px) 60rem, 90vw"
            className="object-contain p-[12%] pb-[16%]"
          />

          {/* Top bar */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2 sm:inset-x-4 sm:top-4">
            <div className="rounded-full bg-white/85 px-3 py-1.5 text-[0.7rem] font-semibold text-night shadow-sm backdrop-blur sm:text-xs">
              {t.hero.mock.exercise}
            </div>
            <div className="rounded-full bg-night/80 px-3 py-1.5 text-[0.7rem] font-semibold text-white backdrop-blur sm:text-xs">
              {t.hero.mock.set}
            </div>
          </div>

          {/* The app's whole-hand guide circle */}
          <motion.div
            aria-hidden
            className="absolute left-[31%] top-[13%] aspect-square w-[42%] rounded-full border-[3px] border-blue bg-blue/10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.6, delay: 0.9 }}
          />

          {/* Counter */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 sm:bottom-4 sm:left-4 sm:right-4">
            <div className="rounded-2xl bg-white/90 px-4 py-3 text-night shadow-sm backdrop-blur">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.06em] text-night/55">{t.hero.mock.reps}</p>
              <p className="mt-0.5 text-2xl font-bold tabular-nums tracking-[-0.02em] sm:text-3xl">
                {reps}
                <span className="text-night/35">/{total}</span>
              </p>
              <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-night/10 sm:w-32">
                <motion.div
                  className="h-full origin-left rounded-full bg-yellow"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: reps / total }}
                  transition={{ type: "spring", bounce: 0, duration: 1.2, delay: 0.8 }}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 1.3 }}
              className="hidden max-w-[13rem] rounded-2xl bg-night/85 px-4 py-3 text-xs font-medium leading-snug text-white backdrop-blur sm:block"
            >
              {t.hero.mock.cue}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating confirmation, the moment a rep lands */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 1.6 }}
        className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-ink/10 sm:left-auto sm:right-6 sm:translate-x-0"
      >
        <span className="grid size-5 place-items-center rounded-full bg-success text-white">
          <Check className="size-3" />
        </span>
        {t.hero.mock.done}
      </motion.div>
    </motion.div>
  );
}
