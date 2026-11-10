"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Eyebrow } from "./Decor";
import { Flame, Mic } from "./Icons";

// Illustrative weekly repetitions for the progress mock-up.
const weekReps = [30, 45, 38, 60, 52, 70, 24];

function CameraVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] bg-brand-darker p-4 shadow-2xl">
      <div className="relative h-full overflow-hidden rounded-3xl bg-brand-light-hover">
        <Image
          src="/hands/opposition.png"
          alt=""
          fill
          sizes="(min-width: 768px) 26rem, 85vw"
          className="object-contain"
        />
        <svg viewBox="0 0 100 75" aria-hidden className="absolute inset-0 size-full">
          {[
            [50, 62],
            [38, 40],
            [44, 25],
            [52, 22],
            [60, 26],
            [66, 34],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.8" fill="white" stroke="#e34a16" strokeWidth="0.8" />
          ))}
        </svg>
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-3 backdrop-blur">
          <div className="h-2.5 overflow-hidden rounded-full bg-brand-light-active">
            <div className="h-full w-[72%] rounded-full bg-brand" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceVisual({ chips }: { chips: string[] }) {
  return (
    <div className="relative mx-auto flex aspect-[4/3] w-full max-w-md flex-col items-center justify-center gap-6 rounded-[2rem] bg-butter p-8">
      <span className="grid size-24 place-items-center rounded-full bg-brand text-white shadow-xl shadow-brand/30">
        <Mic className="size-11" />
      </span>
      <ul className="flex flex-wrap justify-center gap-3">
        {chips.map((c, i) => (
          <li
            key={c}
            className={`rounded-full bg-white px-5 py-2.5 text-lg font-bold text-ink shadow-md ${i % 2 ? "rotate-2" : "-rotate-2"}`}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgressVisual({ days, streak }: { days: string[]; streak: string }) {
  const max = Math.max(...weekReps);
  return (
    <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-[2rem] bg-sky p-7">
      <div className="flex h-full flex-col rounded-3xl bg-white p-5 shadow-lg">
        <div className="flex items-center gap-2 font-extrabold text-ink">
          <Flame className="size-6 text-brand-dark" /> 12 <span className="font-semibold text-ink/60">{streak}</span>
        </div>
        <div className="mt-4 flex flex-1 items-end gap-2">
          {weekReps.map((v, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div
                className={`w-full rounded-t-lg ${i === 5 ? "bg-brand" : "bg-brand-light-active"}`}
                style={{ height: `${(v / max) * 100}%` }}
              />
              <span className="text-xs font-semibold text-ink/55">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CareVisual({ chips }: { chips: string[] }) {
  const colors = ["bg-brand text-white", "bg-ink text-white", "bg-sun text-ink", "bg-white text-brand-dark"];
  return (
    <div className="mx-auto grid aspect-[4/3] w-full max-w-md grid-cols-2 gap-4 rounded-[2rem] bg-brand-light-active p-7">
      {chips.map((c, i) => (
        <div key={c} className={`grid place-items-center rounded-3xl p-3 text-center text-lg font-extrabold shadow-md ${colors[i]}`}>
          {c}
        </div>
      ))}
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  const [camera, voice, progress, care] = t.features.items;

  const rows = [
    { item: camera, visual: <CameraVisual /> },
    { item: voice, visual: <VoiceVisual chips={voice.chips ?? []} /> },
    { item: progress, visual: <ProgressVisual days={progress.days ?? []} streak={progress.streak ?? ""} /> },
    { item: care, visual: <CareVisual chips={care.chips ?? []} /> },
  ];

  return (
    <section id="fitur" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Eyebrow className="text-center">{t.features.eyebrow}</Eyebrow>
        <div className="mt-10 flex flex-col gap-16 sm:gap-24">
          {rows.map(({ item, visual }, i) => (
            <div key={item.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={i % 2 ? "md:order-2" : ""}>{visual}</div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{item.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
