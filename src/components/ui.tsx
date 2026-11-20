"use client";

import { motion } from "motion/react";

export const buttonPrimary =
  "press inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 py-3.5 text-[0.9375rem] font-semibold text-night hover:bg-[#ffc533] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink";

export const buttonSecondary =
  "press inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3.5 text-[0.9375rem] font-semibold ring-1 ring-ink/10 hover:ring-ink/25 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm font-semibold tracking-[0.01em] text-blue-ink ${className}`}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  className = "",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="title mt-3">{title}</h2>
      {sub && <p className="lede mt-5 max-w-2xl text-ink/65">{sub}</p>}
    </Reveal>
  );
}

/** Fades content up once as it enters the viewport. Reduced motion keeps only the fade. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.6, delay }}
    >
      {children}
    </Component>
  );
}
