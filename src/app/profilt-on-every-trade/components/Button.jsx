"use client";

import React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-[#B48755] text-white hover:bg-[#bb8843]",
  secondary:
    "bg-[#EDF0F2] text-black hover:bg-[#dde2e7]",
  blue:
    "bg-[#293B93] text-white hover:bg-[#293B93]/80",
  outline:
    "border-2 border-white/30 bg-white/5 text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2 md:text-[16px] text-[14px]",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={clsx(
        "inline-flex items-center justify-center rounded-[3px] font-semibold transition",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

Button.variants = variants;
Button.sizes = sizes;
