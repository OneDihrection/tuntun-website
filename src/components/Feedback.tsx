"use client";

import { MotionConfig } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { CONTACT_EMAIL, FEEDBACK_EMBED_URL, FEEDBACK_FORM_URL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { floatPieces, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { ArrowRight, Mail } from "./Icons";
import { Shape } from "./Shapes";
import { Reveal, SectionHeader } from "./ui";

/** Placeholder rows roughly the shape of the Airtable form, so the card doesn't sit empty while it loads. */
const rows = ["w-1/3", "h-14", "w-1/4", "h-32", "w-1/3", "h-14", "w-1/4", "h-14"];

export function Feedback() {
  const { t } = useLanguage();
  const copy = t.feedback;
  const scope = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        floatPieces(gsap.utils.toArray<HTMLElement>("[data-float]"), { strength: 0.8 });
      });
    },
    { scope },
  );

  return (
    <MotionConfig reducedMotion="user">
      <section ref={scope} id="masukan" className="py-40 sm:py-56">
        <div className="mx-auto grid max-w-6xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="relative lg:sticky lg:top-28">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} sub={copy.sub} />
            <Reveal delay={0.05} className="mt-10 grid gap-5 border-t border-ink/15 pt-8">
              <div>
                <p className="text-[0.9375rem] text-ink/60">{copy.direct}</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="group mt-2 inline-flex items-center gap-2.5 text-lg font-medium tracking-[-0.015em]">
                  <Mail className="size-5" />
                  <span className="underline decoration-ink/25 underline-offset-4 transition-[text-decoration-color] duration-150 group-hover:decoration-ink">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </div>
              <p className="max-w-sm text-sm text-ink/55">
                {copy.note}{" "}
                <Link href="/privasi" className="underline underline-offset-3 hover:text-ink">
                  {copy.noteLink}
                </Link>
              </p>
            </Reveal>
            <div aria-hidden className="pointer-events-none absolute -bottom-40 right-4 hidden size-28 text-yellow lg:block">
              <div data-float className="size-full">
                <Shape kind="circle" />
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-surface">
              <iframe
                src={FEEDBACK_EMBED_URL}
                title={copy.frameTitle}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className="block h-[46rem] w-full border-0"
              />
              <div
                aria-hidden={loaded}
                className={`pointer-events-none absolute inset-0 grid content-start gap-4 bg-surface p-6 transition-opacity duration-200 ease-out sm:p-10 ${loaded ? "opacity-0" : ""}`}
              >
                <span role="status" className="sr-only">
                  {!loaded && copy.loading}
                </span>
                {rows.map((size, i) => (
                  <span
                    key={i}
                    className={`block rounded-2xl bg-bg motion-safe:animate-pulse ${size.startsWith("w") ? `h-3 ${size} mt-3` : `${size} w-full`}`}
                  />
                ))}
              </div>
            </div>
            <a
              href={FEEDBACK_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 ml-2 inline-flex items-center gap-2 text-sm text-ink/55 hover:text-ink"
            >
              {copy.open}
              <ArrowRight className="size-3.5 -rotate-45 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
            </a>
          </Reveal>
        </div>
      </section>
    </MotionConfig>
  );
}
