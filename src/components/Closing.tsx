"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/config";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowRight } from "./Icons";
import { Playground, type PlaygroundItem } from "./physics/Playground";
import { Shape, TEE_VIEWBOX } from "./Shapes";
import { buttonChip, buttonPrimary, Reveal } from "./ui";

const TEE_RATIO = TEE_VIEWBOX.h / TEE_VIEWBOX.w;

/** Pieces of the mark at unit scale: kind, colour, width, height. */
const PIECES: [PlaygroundItem["kind"], string, number, number][] = [
  ["tee", "text-yellow", 420, 420 * TEE_RATIO],
  ["circle", "text-blue", 300, 300],
  ["squircle", "text-chip", 260, 260],
  ["capsule", "text-blue", 380, 150],
  ["circle", "text-yellow", 210, 210],
  ["tee", "text-blue", 330, 330 * TEE_RATIO],
  ["squircle", "text-yellow", 190, 190],
  ["circle", "text-chip", 160, 160],
];

/**
 * Pieces are sized from the resting zone below the text, not the whole section,
 * so the settled pile (about 40% of that zone) never reaches up behind the copy.
 */
function pile(w: number, h: number): PlaygroundItem[] {
  const area = PIECES.reduce((sum, [, , pw, ph]) => sum + pw * ph, 0);
  const k = Math.min(Math.sqrt((0.4 * w * h) / area), 1.15);
  const perRow = w < 640 ? 3 : 4;
  return PIECES.map(([kind, color, pw, ph], i) => {
    const row = Math.floor(i / perRow);
    const col = i % perRow;
    const sw = pw * k;
    const sh = ph * k;
    // Spread across the width; each piece starts at the top of the box and drops in turn.
    const x = ((col + 0.5 + (row % 2 ? 0.25 : -0.15)) / perRow) * w;
    return {
      id: `piece-${i}`,
      kind,
      w: sw,
      h: sh,
      x: Math.min(Math.max(x, sw / 2 + 4), w - sw / 2 - 4),
      // Clear of the lid at any starting angle.
      y: Math.max(sw, sh) / 2 + 8,
      angle: [0.3, -0.5, 0.2, 0.8, -0.3, 2.9, -0.15, 0.4][i],
      content: <Shape kind={kind} className={color} />,
    };
  });
}

export function Closing() {
  const { t } = useLanguage();
  const zone = useRef<HTMLDivElement>(null);
  const [zoneH, setZoneH] = useState(0);

  useEffect(() => {
    const el = zone.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setZoneH(Math.round(e.contentRect.height)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    // The shapes live on a full-bleed layer behind the text: they fall past the copy and can be thrown
    // anywhere in the section, but the text always stays on top and the pile settles in the space below it.
    <section className="relative isolate pt-40 sm:pt-56">
      {zoneH > 0 && (
        <div className="absolute inset-0 z-0">
          <Playground items={(w) => pile(w, zoneH)} stagger={140} fallback="flow" layoutKey={String(zoneH)} className="size-full" />
        </div>
      )}

      <Reveal className="pointer-events-none relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="title">{t.closing.title}</h2>
        <div className="pointer-events-auto mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${CONTACT_EMAIL}`} className={buttonPrimary}>
            {t.closing.cta}
            <ArrowRight className="size-4" />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={buttonChip}>
            {t.closing.secondary}
          </a>
        </div>
        <p className="mono-label mt-14 text-ink/45">{t.closing.play}</p>
      </Reveal>

      {/* Reserves the resting zone the pile settles into. */}
      <div ref={zone} aria-hidden className="mt-8 h-[clamp(24rem,36vw,34rem)]" />
    </section>
  );
}
