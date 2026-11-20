"use client";

import Image from "next/image";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowRight } from "./Icons";
import { buttonPrimary, Reveal } from "./ui";

export function Closing() {
  const { t } = useLanguage();
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-yellow-soft px-6 py-16 text-center ring-1 ring-yellow/30 sm:px-12 sm:py-20">
        <div aria-hidden className="absolute -left-24 -top-24 size-72 rounded-full bg-blue/15 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-24 size-72 rounded-full bg-yellow/25 blur-3xl" />
        <div className="relative">
          <Image src="/brand/icon-light.png" alt="" width={88} height={88} className="mx-auto size-20 drop-shadow-xl dark:hidden sm:size-22" />
          <Image src="/brand/icon-dark.png" alt="" width={88} height={88} className="mx-auto hidden size-20 drop-shadow-xl dark:block sm:size-22" />
          <h2 className="title mx-auto mt-8 max-w-[18ch]">{t.closing.title}</h2>
          <p className="lede mx-auto mt-5 max-w-xl text-ink/65">{t.closing.sub}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${buttonPrimary} mt-9`}>
            {t.closing.cta}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
