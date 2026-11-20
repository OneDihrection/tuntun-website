"use client";

import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { floatPieces, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { ArrowRight, CloudOff, Mic, VideoOff } from "./Icons";
import { Shape } from "./Shapes";
import { Reveal } from "./ui";

const icons = [VideoOff, Mic, CloudOff];

/** An inset dark block in both appearances: a deliberate pause in the page for the trust message. */
export function Privacy() {
  const { t } = useLanguage();
  const scope = useRef<HTMLElement>(null);

  // The block rises into place as it scrolls in: it grows to full width while its corners tighten.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-block]",
          { scale: 0.92, borderRadius: "4.5rem" },
          { scale: 1, borderRadius: "2.5rem", ease: "none", scrollTrigger: { trigger: scope.current, start: "top bottom", end: "top 35%", scrub: true } },
        );
        floatPieces(gsap.utils.toArray<HTMLElement>("[data-float]"), { strength: 1.4 });
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="privasi" className="px-3 sm:px-6">
      <div data-block className="relative isolate mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-night px-5 py-32 text-white sm:px-8 sm:py-48">
        <div aria-hidden className="absolute -right-24 -top-24 -z-10 size-80 text-blue/25">
          <div data-float className="size-full">
            <Shape kind="circle" />
          </div>
        </div>
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mono-label font-medium text-yellow">{t.privacy.eyebrow}</p>
            <h2 className="title mt-5">{t.privacy.title}</h2>
          </Reveal>

          <ul className="mt-20 grid gap-4 md:grid-cols-3">
            {t.privacy.points.map((p, i) => {
              const Icon = icons[i];
              return (
                <Reveal as="li" key={p.title} delay={i * 0.06} className="flex flex-col items-center rounded-[2rem] bg-white/7 px-8 py-16 text-center">
                  <span className="grid size-20 place-items-center rounded-full bg-white/10 text-yellow">
                    <Icon className="size-8" />
                  </span>
                  <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em] sm:text-[1.75rem]">{p.title}</h3>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-20 flex flex-col items-center gap-8 text-center">
            <p className="max-w-2xl text-lg text-white/60">{t.privacy.disclaimer}</p>
            <Link href="/privasi" className="press inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium hover:border-white/60">
              {t.privacy.readMore}
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
