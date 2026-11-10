import Image from "next/image";

/** Curved band edge, Headspace-style. `fill` is the colour of the next section. */
export function Wave({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""}`}
      style={{ color: fill }}
    >
      <path fill="currentColor" d="M0 80V40C240 0 480 0 720 30s480 50 720 10v40Z" />
    </svg>
  );
}

export function Blob({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} style={{ color }}>
      <path
        fill="currentColor"
        d="M47.1-58.5C59.9-46.4 68.1-29.9 71.4-12.5 74.7 4.9 73.2 23.2 64.2 37.2 55.2 51.2 38.7 60.9 20.9 66.5 3.1 72.1-16 73.6-32.5 67.1-49 60.6-62.9 46.1-69.8 29-76.6 11.9-76.4-7.8-69.4-24.2-62.5-40.6-48.8-53.7-33.6-65.4-18.4-77.1-1.8-87.3 13.2-84.9 28.2-82.5 34.3-70.6 47.1-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/logo.png" alt="" width={40} height={40} className="size-10 rounded-xl shadow-sm" />
      <span className="text-xl font-extrabold tracking-tight text-primary">TeMan</span>
    </span>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm font-bold uppercase tracking-[0.18em] text-rust ${className}`}>{children}</p>
  );
}
