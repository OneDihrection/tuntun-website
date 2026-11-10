"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { legal, type LegalKind } from "@/i18n/legal";
import { Eyebrow, Wave } from "./Decor";
import { ArrowRight, Check } from "./Icons";

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { locale } = useLanguage();
  const { ui, [kind]: doc } = legal[locale];

  return (
    <main className="flex-1 bg-cream">
      <section className="bg-mint">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
          <Eyebrow>{doc.eyebrow}</Eyebrow>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{doc.title}</h1>
          <p className="mt-3 text-sm font-semibold text-ink/55">
            {ui.updated}: {ui.date}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">{doc.intro}</p>
        </div>
        <Wave fill="var(--color-cream)" />
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        {doc.summary && (
          <div className="rounded-[2rem] bg-sage p-6 sm:p-8">
            <h2 className="text-xl font-extrabold">{doc.summary.title}</h2>
            <ul className="mt-4 grid gap-3">
              {doc.summary.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="leading-relaxed text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav aria-label={ui.contents} className="mt-8 rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/55">{ui.contents}</p>
          <ol className="mt-3 grid gap-1 sm:grid-cols-2 sm:gap-x-6">
            {doc.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s-${i + 1}`} className="block rounded-lg py-1 font-semibold text-primary hover:underline">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-12 flex flex-col gap-10">
          {doc.sections.map((s, i) => (
            <section key={s.heading} id={`s-${i + 1}`}>
              <h2 className="text-2xl font-extrabold tracking-tight">
                <span className="text-rust">{i + 1}.</span> {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 grid gap-2 pl-1">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <Link
          href="/"
          className="group mt-14 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          <ArrowRight className="size-5 rotate-180 transition-transform group-hover:-translate-x-1" />
          {ui.back}
        </Link>
      </div>
    </main>
  );
}
