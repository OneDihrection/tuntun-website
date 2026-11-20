/**
 * Shape vocabulary taken from the Tuntun mark: heads are circles, arms are capsules,
 * the guiding figure is a T. Each shape fills its box, so callers size it with width and height.
 */
export type ShapeKind = "circle" | "capsule" | "squircle" | "tee" | "pill";

/** The yellow figure's body from BrandMark, re-origined to a 904 × 622 box. */
export const TEE_VIEWBOX = { w: 904, h: 622 };
const TEE_PATH = "M168.5 0h567a168.5 168.5 0 0 1 0 337h-114v115a170 170 0 0 1-340 0V337h-114a168.5 168.5 0 0 1 0-337Z";

export function Shape({ kind, className = "", style }: { kind: ShapeKind; className?: string; style?: React.CSSProperties }) {
  if (kind === "tee") {
    return (
      <svg viewBox={`0 0 ${TEE_VIEWBOX.w} ${TEE_VIEWBOX.h}`} preserveAspectRatio="none" aria-hidden className={`block size-full ${className}`} style={style}>
        <path d={TEE_PATH} fill="currentColor" />
      </svg>
    );
  }
  const radius = kind === "squircle" ? "28%" : "9999px";
  return <div aria-hidden className={`size-full ${className}`} style={{ borderRadius: radius, background: "currentColor", ...style }} />;
}
