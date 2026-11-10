type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.65.8-3.33.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.4 6.62 1.1 8.79.74 1.06 1.61 2.25 2.76 2.21 1.11-.05 1.53-.72 2.87-.72 1.34 0 1.72.72 2.89.69 1.2-.02 1.95-1.08 2.68-2.15.85-1.23 1.2-2.43 1.21-2.49-.03-.01-2.32-.89-2.39-3.52ZM14.2 6.13c.6-.74 1.02-1.75.9-2.77-.88.04-1.94.59-2.56 1.32-.56.64-1.05 1.68-.92 2.67.98.08 1.98-.5 2.58-1.22Z" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={3} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Menu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Plus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Flame({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2c.6 3.1-1.2 4.9-2.6 6.5C8 10.1 7 11.6 7 14a5 5 0 0 0 10 0c0-2-1-3.5-2-4.6.2 1.5-.4 2.6-1.4 3 .6-3.4-.4-7.4-1.6-10.4Z" />
    </svg>
  );
}

export function Mic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  );
}

export function Shield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function VideoOff({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M3 3l18 18M10.5 6H14a2 2 0 0 1 2 2v3.5l5-3.5v8M16 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function CloudOff({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <path d="M3 3l18 18M8.5 7.6A6 6 0 0 1 17.7 10H18a4 4 0 0 1 2.5 7.1M17 19H7a5 5 0 0 1-2.4-9.4" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
