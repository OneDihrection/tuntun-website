"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { legal, type LegalKind } from "@/i18n/legal";
import { ArrowRight, Check } from "./Icons";
import { buttonSecondary, Eyebrow } from "./ui";

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { locale } = useLanguage();
  const { ui, [kind]: doc } = legal[locale];

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 -z-10 size-[30rem] rounded-full bg-blue/12 blur-3xl" />
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-14 sm:px-8 sm:pt-20">
          <Eyebrow>{doc.eyebrow}</Eyebrow>
          <h1 className="title mt-3">{doc.title}</h1>
          <p className="mt-3 text-sm font-medium text-ink/50">
            {ui.updated}: {ui.date}
          </p>
          <p className="lede mt-6 text-ink/70">{doc.intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        {doc.summary && (
          <div className="rounded-3xl bg-yellow-soft p-6 ring-1 ring-yellow/30 sm:p-8">
            <h2 className="text-lg font-bold tracking-[-0.015em]">{doc.summary.title}</h2>
            <ul className="mt-4 grid gap-3">
              {doc.summary.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-yellow text-night">
                    <Check className="size-3.5" />
                  </span>
                  <span className="leading-relaxed text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav aria-label={ui.contents} className="mt-6 rounded-3xl bg-surface p-6 ring-1 ring-ink/8 sm:p-8">
          <p className="text-sm font-semibold text-ink/50">{ui.contents}</p>
          <ol className="mt-3 grid gap-1 sm:grid-cols-2 sm:gap-x-6">
            {doc.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s-${i + 1}`} className="block rounded-lg py-1 font-medium text-blue-ink hover:underline">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-14 flex flex-col gap-10">
          {doc.sections.map((s, i) => (
            <section key={s.heading} id={`s-${i + 1}`}>
              <h2 className="text-2xl font-bold tracking-[-0.02em]">
                <span className="text-ink/35">{i + 1}.</span> {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 grid gap-2 pl-1">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink/75">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <Link href="/" className={`${buttonSecondary} group mt-16`}>
          <ArrowRight className="size-4 rotate-180" />
          {ui.back}
        </Link>
      </div>
    </main>
  );
}
