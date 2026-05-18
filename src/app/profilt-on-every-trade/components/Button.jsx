"use client";

import React, { Suspense } from "react";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

const GTC_USER_URL = "https://web.mygtc.app/user";

const variants = {
  primary:
    "bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] mt-2 w-full sm:w-fit justify-center flex items-center gap-2   cursor-pointer      text-sm font-bold md:text-base xl:text-lg text-white   px-8 py-3 rounded-sm transition-all duration-300",
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

function buildGtcUserUrl(ref, code, searchParams) {
  const url = new URL(GTC_USER_URL);
  url.searchParams.set("redirect", "%252Fdashboard");
  url.searchParams.set("lang", "en");
  if (code) url.searchParams.set("code", code);
  if (ref) url.searchParams.set("ref", ref);
  const originUrl = searchParams.get("origin_url");
  if (originUrl) url.searchParams.set("origin_url", originUrl);
  return url.toString();
}

export default function Button(props) {
  return (
    <Suspense fallback={<ButtonFallback {...props} />}>
      <ButtonWithParams {...props} />
    </Suspense>
  );
}

function ButtonFallback({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Tag = "button",
  onClick,
  ...props
}) {
  return (
    <Tag
      className={clsx(
        "inline-flex items-center gap-4 justify-center rounded-[3px] font-semibold transition",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      type={Tag === "button" ? "button" : undefined}
      {...props}
    >
      {children}
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
      </svg>
    </Tag>
  );
}

function ButtonWithParams({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Tag = "button",
  onClick,
  openGtcOnClick = true,
  ...props
}) {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const code = searchParams.get("code");

  const handleClick = (e) => {
    if (ref || code) {
      const id = ref || code;
      const gtcUrl = buildGtcUserUrl(ref, code, searchParams);

      console.log("[GTC] ref:", ref);
      console.log("[GTC] code:", code);
      console.log("[GTC] id:", id);
      console.log("[GTC] URL:", gtcUrl);

      if (openGtcOnClick) {
        window.open(gtcUrl, "_blank", "noopener,noreferrer");
      }
    }

    onClick?.(e);
  };

  return (
    <Tag
      className={clsx(
        "inline-flex items-center gap-4 justify-center rounded-[3px] font-semibold transition",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={handleClick}
      type={Tag === "button" ? "button" : undefined}
      {...props}
    >
      {children}
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
      </svg>
    </Tag>
  );
}

Button.variants = variants;
Button.sizes = sizes;
