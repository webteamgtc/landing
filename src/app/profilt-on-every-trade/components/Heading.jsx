"use client";

import React from "react";
import clsx from "clsx";

const variants = {
  /** Main hero title (white on dark) */
  hero: "text-[30px] md:text-[56px] text-center md:text-left font-semibold leading-[1.09] tracking-[-0.03em] bg-gradient-to-r from-[#dcc8b2] via-secondary  from-10% to-[#dcc8b2] to-90% inline-block text-transparent bg-clip-text font-medium",
  /** Section title on dark background, centered */
  sectionDark:
    "text-center text-[26px] font-extrabold leading-[1.19] tracking-[-0.02em] text-[#fff] md:text-[35px] bg-gradient-to-r from-[#dcc8b2] via-secondary  from-10% to-[#dcc8b2] to-90% inline-block text-transparent bg-clip-text",
  /** Section title on light background, centered */
  sectionLight:
    "text-center text-[26px] font-extrabold leading-[1.19] tracking-[-0.02em] md:text-[35px] max-w-lg mx-auto md:text-primary",
  /** Small uppercase label (e.g. GTCFX IN THE NEWS) */
  media:
    "text-center text-base font-extrabold uppercase tracking-[0.2em] text-[#1a1a1a] md:text-xl",
  /** Card title inside feature cards */
  card:
    "text-[16px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#000] md:text-[20px] text-center",
  /** Subsection title (e.g. Instant Access), left-aligned */
  subsection:
    "text-2xl font-bold text-[#1a1a1a] md:text-3xl",
  /** Logo text (XGTC) */
  logo: "text-xl font-bold tracking-tight md:text-2xl",
  /** Logo text on dark (e.g. footer) */
  logoDark: "text-xl font-bold tracking-tight text-[#1A234E] md:text-2xl",
};

export default function Heading({
  as: Tag = "h2",
  variant = "sectionLight",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={clsx(variants[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Predefined heading presets for consistent reuse */
Heading.variants = variants;
