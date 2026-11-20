"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Mic } from "./Icons";
import { Reveal, SectionHeader } from "./ui";

const weekReps = [10, 8, 0, 10, 6, 10, 4];

/** One feature per row: a large visual and a short title beside it, alternating sides. */
function Row({ title, desc, flip = false, children }: { title: string; desc: string; flip?: boolean; children: React.ReactNode }) {
  return (
    <Reveal className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[2.5rem] sm:aspect-[16/11] ${flip ? "lg:order-2" : ""}`}>{children}</div>
      <div className={flip ? "lg:order-1" : ""}>
        <h3 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-6xl">{title}</h3>
        <p className="lede mt-5 max-w-sm text-ink/60">{desc}</p>
      </div>
    </Reveal>
  );
}

export function Features() {
  const { t } = useLanguage();
  const f = t.features;
  const max = Math.max(...weekReps);

  return (
    <section id="fitur" className="py-40 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader center eyebrow={f.eyebrow} title={f.title} />

        <div className="mt-28 grid gap-28 sm:gap-40">
          <Row title={f.camera.title} desc={f.camera.desc}>
            <div className="absolute inset-0 bg-blue-soft">
              <Image src="/plans/armRaise.svg" alt="" width={120} height={300} className="absolute bottom-0 left-1/2 h-[90%] w-auto -translate-x-1/2" />
              <GuideRing label={f.camera.start} className="bottom-[16%] left-[24%]" />
              <GuideRing label={f.camera.target} className="right-[26%] top-[10%]" filled />
            </div>
          </Row>

          <Row title={f.voice.title} desc={f.voice.desc} flip>
            <div className="absolute inset-0 grid place-content-center gap-4 bg-yellow-soft p-8">
              {f.voice.chips.map((c, i) => (
                <div
                  key={c.word}
                  className={`flex items-center gap-4 rounded-full bg-surface px-8 py-5 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.3)] ${i ? "translate-x-10 rotate-2" : "-translate-x-6 -rotate-3"}`}
                >
                  <span className="grid size-12 place-items-center rounded-full bg-yellow text-night">
                    <Mic className="size-5" />
                  </span>
                  <span className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{c.word}</span>
                  <span className="ml-2 text-lg text-ink/50">{c.label}</span>
                </div>
              ))}
            </div>
          </Row>

          <Row title={f.progress.title} desc={f.progress.desc}>
            <div className="absolute inset-0 flex flex-col bg-surface p-8 sm:p-12">
              <p className="mono-label text-ink/50">{f.progress.label}</p>
              <div className="mt-6 flex flex-1 items-end gap-3 sm:gap-4">
                {weekReps.map((reps, i) => (
                  <div key={f.progress.days[i]} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                    <motion.div
                      className={`w-full origin-bottom rounded-2xl ${reps === max ? "bg-yellow" : reps ? "bg-blue" : "bg-ink/10"}`}
                      style={{ height: `${Math.max(reps / max, 0.06) * 100}%` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0, duration: 0.8, delay: i * 0.05 }}
                    />
                    <span className="text-sm font-medium text-ink/45">{f.progress.days[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Row>
        </div>
      </div>
    </section>
  );
}

function GuideRing({ label, className, filled = false }: { label: string; className: string; filled?: boolean }) {
  return (
    <div className={`absolute flex flex-col items-center gap-2 ${className}`}>
      <span className={`size-20 rounded-full border-4 border-blue sm:size-24 ${filled ? "bg-blue/25" : "bg-white/50"}`} />
      <span className="rounded-full bg-night/80 px-3 py-1.5 text-sm font-semibold text-white">{label}</span>
    </div>
  );
}
