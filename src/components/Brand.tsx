"use client";

import { motion } from "motion/react";
import { useId } from "react";

/**
 * The Tuntun mark, redrawn from the app icon: the yellow figure guides the blue one.
 * The gap between them is a mask, so it stays transparent on any surface.
 */
export function BrandMark({ className = "", animated = false }: { className?: string; animated?: boolean }) {
  const id = useId();
  const blue = `${id}-blue`;
  const yellow = `${id}-yellow`;
  const gap = `${id}-gap`;
  const yellowBody = "M546 378h568a168.5 168.5 0 0 1 0 337h-114v115a170 170 0 0 1-340 0V715h-114a168.5 168.5 0 0 1 0-337Z";

  return (
    <svg viewBox="0 0 1282 1000" aria-hidden className={`overflow-visible ${className}`}>
      <defs>
        <linearGradient id={blue} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f9ef5" />
          <stop offset="1" stopColor="#7cb9f9" />
        </linearGradient>
        <linearGradient id={yellow} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb700" />
          <stop offset="1" stopColor="#fcc532" />
        </linearGradient>
        <mask id={gap} maskUnits="userSpaceOnUse" x="-200" y="-200" width="1700" height="1400">
          <rect x="-200" y="-200" width="1700" height="1400" fill="white" />
          <path d={yellowBody} fill="black" stroke="black" strokeWidth="76" />
        </mask>
      </defs>
      <motion.g
        mask={`url(#${gap})`}
        fill={`url(#${blue})`}
        initial={animated ? { opacity: 0, x: -60 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.7 }}
      >
        <circle cx="452" cy="170" r="170" />
        <path d="M168.5 378H620v337H168.5a168.5 168.5 0 0 1 0-337Z" />
        <path d="M283 546h339v284a169.5 169.5 0 0 1-339 0Z" />
      </motion.g>
      <motion.g
        fill={`url(#${yellow})`}
        initial={animated ? { opacity: 0, x: 140 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.8, delay: animated ? 0.15 : 0 }}
      >
        <circle cx="830" cy="170" r="170" />
        <path d={yellowBody} />
      </motion.g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <BrandMark className="h-6 w-auto" />
      <span className="text-lg font-bold tracking-[-0.02em]">Tuntun</span>
    </span>
  );
}
