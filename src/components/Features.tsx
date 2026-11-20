"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Check, Mic } from "./Icons";
import { Reveal, SectionHeader } from "./ui";

const weekReps = [10, 8, 0, 10, 6, 10, 4];

function Card({ className = "", delay = 0, title, desc, children }: { className?: string; delay?: number; title: string; desc: string; children?: React.ReactNode }) {
  return (
    <Reveal delay={delay} className={`flex flex-col overflow-hidden rounded-3xl bg-surface ring-1 ring-ink/8 ${className}`}>
      <div className="p-7 sm:p-8">
        <h3 className="text-xl font-bold tracking-[-0.02em]">{title}</h3>
        <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ink/60">{desc}</p>
      </div>
      {children && <div className="mt-auto px-7 pb-7 sm:px-8 sm:pb-8">{children}</div>}
    </Reveal>
  );
}

export function Features() {
  const { t } = useLanguage();
  const f = t.features;
  const max = Math.max(...weekReps);

  return (
    <section id="fitur" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow={f.eyebrow} title={f.title} />

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          <Card className="lg:col-span-4" title={f.camera.title} desc={f.camera.desc}>
            <div className="relative h-56 overflow-hidden rounded-2xl bg-blue-soft sm:h-64">
              <Image src="/plans/armRaise.svg" alt="" width={120} height={300} className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2" />
              <GuideRing label={f.camera.start} className="bottom-[14%] left-[calc(50%-6.5rem)]" />
              <GuideRing label={f.camera.target} className="left-[calc(50%+3rem)] top-[12%]" filled />
            </div>
          </Card>

          <Card className="lg:col-span-2" delay={0.06} title={f.voice.title} desc={f.voice.desc}>
            <ul className="grid gap-2">
              {f.voice.chips.map((c) => (
                <li key={c.word} className="flex items-center justify-between rounded-2xl bg-ink/4 px-4 py-3">
                  <span className="flex items-center gap-2.5 font-semibold">
                    <Mic className="size-4 text-blue-ink" />
                    {c.word}
                  </span>
                  <span className="text-sm text-ink/55">{c.label}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-2" title={f.progress.title} desc={f.progress.desc}>
            <p className="text-xs font-semibold text-ink/45">{f.progress.label}</p>
            <div className="mt-3 flex h-28 items-end gap-2">
              {weekReps.map((reps, i) => (
                <div key={f.progress.days[i]} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <motion.div
                    className={`w-full origin-bottom rounded-md ${reps === max ? "bg-yellow" : reps ? "bg-blue" : "bg-ink/10"}`}
                    style={{ height: `${Math.max(reps / max, 0.06) * 100}%` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0, duration: 0.7, delay: i * 0.04 }}
                  />
                  <span className="text-[0.7rem] font-medium text-ink/45">{f.progress.days[i]}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-2" delay={0.06} title={f.replay.title} desc={f.replay.desc}>
            <ul className="divide-y divide-ink/8 rounded-2xl bg-ink/4">
              {f.replay.modes.map((mode, i) => (
                <li key={mode} className="flex items-center justify-between px-4 py-3 text-sm font-medium">
                  {mode}
                  {i === 0 && <Check className="size-4 text-blue-ink" />}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="lg:col-span-2" delay={0.12} title={f.rest.title} desc={f.rest.desc}>
            <div className="relative grid h-32 place-items-center overflow-hidden rounded-2xl bg-yellow-soft">
              {[1, 0.72, 0.46].map((s, i) => (
                <motion.span
                  key={s}
                  aria-hidden
                  className="absolute size-40 rounded-full bg-yellow"
                  style={{ opacity: 0.18 + i * 0.22 }}
                  initial={{ scale: s * 0.6 }}
                  whileInView={{ scale: s }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0, duration: 1.6, delay: i * 0.12 }}
                />
              ))}
              <span className="relative text-sm font-semibold text-night">{f.rest.cue}</span>
            </div>
          </Card>

          <Reveal className="flex flex-col gap-6 rounded-3xl bg-surface p-7 ring-1 ring-ink/8 sm:p-8 lg:col-span-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em]">{f.access.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/60">{f.access.desc}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {f.access.chips.map((chip) => (
                <li key={chip} className="rounded-full bg-ink/5 px-4 py-2 text-sm font-semibold">
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GuideRing({ label, className, filled = false }: { label: string; className: string; filled?: boolean }) {
  return (
    <div className={`absolute flex flex-col items-center gap-1.5 ${className}`}>
      <span className={`size-14 rounded-full border-[3px] border-blue ${filled ? "bg-blue/25" : "bg-white/40"}`} />
      <span className="rounded-full bg-night/80 px-2.5 py-1 text-[0.7rem] font-semibold text-white">{label}</span>
    </div>
  );
}
