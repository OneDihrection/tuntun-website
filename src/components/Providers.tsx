"use client";

import { MotionConfig } from "motion/react";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <LanguageProvider>{children}</LanguageProvider>
    </MotionConfig>
  );
}
