"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Eyebrow } from "./Decor";

const cardColors = ["bg-sage", "bg-peach", "bg-butter", "bg-sky", "bg-sage"];
const armFigures = ["shoulderFlexion", "elbowBend", "directionalReach", "crossMidline"];

export function Exercises() {
  const { t } = useLanguage();

  return (
    <section id="latihan" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t.exercises.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{t.exercises.title}</h2>
          <p className="mt-4 text-lg text-ink/70">{t.exercises.sub}</p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.exercises.items.map((item, i) => (
            <li
              key={item.key}
              className={`group flex flex-col overflow-hidden rounded-[2rem] ${cardColors[i]} transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10`}
            >
              <div className="relative aspect-square">
                <Image
                  src={`/hands/${item.key}.png`}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 14rem, (min-width: 640px) 45vw, 90vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-6 pb-7">
                <h3 className="text-xl font-extrabold text-ink">{item.name}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-6 rounded-[2rem] bg-white p-8 ring-1 ring-ink/5 sm:flex-row sm:p-10">
          <div className="flex shrink-0 items-end gap-2">
            {armFigures.map((f) => (
              <Image key={f} src={`/plans/${f}.svg`} alt="" width={48} height={120} className="h-28 w-auto" />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-extrabold">{t.exercises.armTitle}</h3>
            <p className="mt-2 text-lg text-ink/70">{t.exercises.armSub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
