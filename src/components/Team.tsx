"use client";

import Image from "next/image";
import { TEAM } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowRight, LinkedIn } from "./Icons";
import { buttonChip, Reveal, SectionHeader } from "./ui";

/** Without a photo, the portrait falls back to initials on one of the brand's soft fields. */
const fields = ["bg-yellow-soft", "bg-blue-soft", "bg-chip"];

const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const easeOut = "ease-[cubic-bezier(0.23,1,0.32,1)]";

export function Team() {
  const { t } = useLanguage();
  return (
    <section id="tim" className="py-40 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader center eyebrow={t.team.eyebrow} title={t.team.title} />
        <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={m.key} delay={i * 0.05} className="group rounded-[2.5rem] bg-surface p-4">
              <div className={`relative aspect-square overflow-hidden rounded-[2rem] ${fields[i % fields.length]}`}>
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-300 ${easeOut} group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                  />
                ) : (
                  <span aria-hidden className="absolute inset-0 grid place-items-center text-7xl font-medium tracking-[-0.04em] text-ink/80">
                    {initials(m.name)}
                  </span>
                )}
              </div>
              <div className="flex items-end justify-between gap-4 px-3 pt-5 pb-2">
                <div className="min-w-0">
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] text-balance">{m.name}</h3>
                  <p className="mt-1 text-ink/60">{t.team.roles[m.role]}</p>
                </div>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.team.ctaLabel.replace("{name}", m.name)}
                  className={`${buttonChip} group/cta shrink-0 px-4! py-2.5! text-sm!`}
                >
                  <LinkedIn className="size-4" />
                  {t.team.cta}
                  <ArrowRight
                    className={`size-4 -rotate-45 transition-transform duration-200 ${easeOut} group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-0`}
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
