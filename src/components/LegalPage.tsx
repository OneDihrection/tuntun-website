"use client";

import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { legal, type LegalKind } from "@/i18n/legal";
import { floatPieces, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { ArrowRight, Check } from "./Icons";
import { Shape, type ShapeKind } from "./Shapes";
import { buttonPrimary, Eyebrow, Reveal } from "./ui";

/** Decorative pieces of the mark around the title, as on the home hero. They float; they can't be grabbed. */
const pieces: { kind: ShapeKind; color: string; box: string; rotate: number }[] = [
  { kind: "circle", color: "text-blue", box: "left-[-8%] top-10 size-[clamp(90px,14vw,220px)] sm:left-[-3%] sm:top-20", rotate: 0 },
  { kind: "squircle", color: "text-chip", box: "right-[-6%] top-8 size-[clamp(70px,11vw,170px)] sm:right-[2%] sm:top-24", rotate: 12 },
  { kind: "circle", color: "text-yellow", box: "right-[10%] bottom-6 size-[clamp(40px,6vw,96px)] sm:right-[16%] sm:bottom-10", rotate: 0 },
];

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { locale } = useLanguage();
  const { ui, [kind]: doc } = legal[locale];
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: "expo.out", duration: 1.1 } })
          .set(".gsap-in", { visibility: "visible" })
          .from("[data-piece]", { scale: 0.6, autoAlpha: 0, stagger: 0.08, duration: 1.4 }, 0)
          .from("[data-legal-in]", { y: 20, autoAlpha: 0, stagger: 0.08 }, 0.1);
        floatPieces(gsap.utils.toArray<HTMLElement>("[data-float]"), { delay: 1 });
      });
    },
    { scope },
  );

  return (
    <main className="flex-1">
      <section ref={scope} className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {pieces.map((p, i) => (
            <div key={i} data-piece className={`gsap-in absolute ${p.box}`}>
              <div data-float className="size-full">
                <div className="size-full" style={{ transform: `rotate(${p.rotate}deg)` }}>
                  <Shape kind={p.kind} className={p.color} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-5xl px-5 pb-24 pt-32 text-center sm:px-8 sm:pt-44">
          <div data-legal-in className="gsap-in">
            <Eyebrow>{doc.eyebrow}</Eyebrow>
          </div>
          <h1 data-legal-in className="gsap-in display mx-auto mt-6 max-w-[12ch]">
            {doc.title}
          </h1>
          <p data-legal-in className="gsap-in mono-label mt-8 text-ink/50">
            {ui.updated}: {ui.date}
          </p>
          <p data-legal-in className="gsap-in lede mx-auto mt-10 max-w-2xl text-ink/70">
            {doc.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-40 sm:px-8">
        {doc.summary && (
          <section aria-labelledby="legal-summary">
            <h2 id="legal-summary" className="mono-label text-center text-ink/55">
              {doc.summary.title}
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {doc.summary.points.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 0.06} className="flex gap-6 rounded-[2rem] bg-surface px-8 py-12 sm:px-10">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-yellow text-night">
                    <Check className="size-6" />
                  </span>
                  <span className="text-xl leading-snug tracking-[-0.01em]">{point}</span>
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        <nav aria-label={ui.contents} className="mt-28 text-center">
          <p className="mono-label text-ink/55">{ui.contents}</p>
          <ol className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {doc.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s-${i + 1}`} className="press inline-flex items-center gap-2 rounded-full bg-chip px-5 py-3 text-[0.9375rem] font-medium hover:brightness-95">
                  <span className="font-mono text-xs text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mx-auto mt-32 flex max-w-2xl flex-col gap-24">
          {doc.sections.map((s, i) => (
            <section key={s.heading} id={`s-${i + 1}`} className="border-t border-ink/15 pt-12">
              <p className="mono-label text-ink/45">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-6 text-lg leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-6 grid gap-4">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-4 text-lg leading-relaxed text-ink/75">
                      <span aria-hidden className="mt-3 size-2 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="mt-6 text-lg leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <div className="mt-32 text-center">
          <Link href="/" className={buttonPrimary}>
            <ArrowRight className="size-4 rotate-180" />
            {ui.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
