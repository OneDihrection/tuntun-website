"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/** Motion that only runs when the viewer hasn't asked for reduced motion; otherwise content stays in its final state. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/** Deterministic 0–1 value per index, so each piece gets its own rhythm without changing between renders. */
const seeded = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const between = (min: number, max: number, t: number) => min + (max - min) * t;

/**
 * Floats decorative shapes on a slow loop: vertical and horizontal yoyos with different periods,
 * so each piece traces a drifting orbit rather than a straight bob, and no two move in step.
 * Call inside a MOTION_OK matchMedia block so reduced motion leaves the shapes still.
 */
export function floatPieces(elements: HTMLElement[], { strength = 1, delay = 0 } = {}) {
  return elements.flatMap((el, i) => {
    const y = between(22, 36, seeded(i, 1)) * strength;
    const x = between(10, 18, seeded(i, 2)) * strength;
    const r = between(6, 12, seeded(i, 3)) * (i % 2 ? -1 : 1);
    const start = delay + i * 0.12;
    return [
      gsap.fromTo(el, { y: y / 2 }, { y: -y / 2, duration: between(2.2, 3.4, seeded(i, 4)), ease: "sine.inOut", repeat: -1, yoyo: true, delay: start }),
      gsap.fromTo(
        el,
        { x: -x / 2, rotation: -r / 2 },
        { x: x / 2, rotation: r / 2, duration: between(2.8, 4.2, seeded(i, 5)), ease: "sine.inOut", repeat: -1, yoyo: true, delay: start },
      ),
    ];
  });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
