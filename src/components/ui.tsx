"use client";

import { motion } from "motion/react";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink";

/** Ink pill: the one primary action per view. */
export const buttonPrimary = `press inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-medium text-bg hover:opacity-85 ${focus}`;

/** Beige pill, Labs' secondary action. */
export const buttonChip = `press inline-flex items-center justify-center gap-2 rounded-full bg-chip px-7 py-4 text-base font-medium hover:brightness-95 ${focus}`;

/** Outlined circle for carousel arrows. */
export const buttonCircle = `press grid size-14 place-items-center rounded-full border border-ink/20 hover:border-ink/50 disabled:pointer-events-none disabled:opacity-30 ${focus}`;

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mono-label font-medium text-ink/70 ${className}`}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"} ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="title mt-5">{title}</h2>
      {sub && <p className={`lede mt-6 max-w-2xl text-ink/65 ${center ? "mx-auto" : ""}`}>{sub}</p>}
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
