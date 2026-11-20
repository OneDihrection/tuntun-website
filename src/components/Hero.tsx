"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BrandMark } from "./Brand";
import { AppleIcon, ArrowRight, Check } from "./Icons";
import { buttonPrimary, buttonSecondary } from "./ui";

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, bounce: 0, duration: 0.7, delay },
});

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Static colour fields from the icon; nothing here moves. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 size-[36rem] rounded-full bg-blue/15 blur-3xl" />
        <div className="absolute -right-32 top-24 size-[32rem] rounded-full bg-yellow/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pb-28">
        <div>
          <BrandMark animated className="h-14 w-auto sm:h-16" />
          <motion.p {...enter(0.25)} className="mt-8 text-sm font-semibold text-blue-ink">
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1 {...enter(0.3)} className="display mt-3 max-w-[16ch]">
            {t.hero.title}
          </motion.h1>
          <motion.p {...enter(0.38)} className="lede mt-6 max-w-[34rem] text-ink/65">
            {t.hero.sub}
          </motion.p>
          <motion.div {...enter(0.46)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className={buttonPrimary}>
              {t.hero.cta}
              <ArrowRight className="size-4" />
            </a>
            <a href="#latihan" className={buttonSecondary}>
              {t.hero.secondary}
            </a>
          </motion.div>
          <motion.div {...enter(0.54)} className="mt-8 flex items-center gap-3 text-sm text-ink/55">
            <AppleIcon className="size-5 text-ink" />
            <span>
              {t.hero.soon} <span className="font-semibold text-ink">{t.hero.store}</span>
              <span className="mx-2 text-ink/25">·</span>
              {t.hero.note}
            </span>
          </motion.div>
        </div>

        <IpadMock />
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
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="rounded-[2.25rem] bg-night p-3 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.45)] ring-1 ring-white/10 sm:p-3.5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-[#fffaec] to-[#ffefc2]">
          <Image
            src="/hands/hero.png"
            alt=""
            fill
            preload
            sizes="(min-width: 1024px) 34rem, 90vw"
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
