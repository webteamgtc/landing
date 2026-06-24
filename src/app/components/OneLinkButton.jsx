"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ONE_LINK_BASE = "https://mygtc.onelink.me/pZtr/zq7lbmtv";

/**
 * Builds the OneLink URL, appending all relevant tracking
 * parameters from the current page URL.
 *
 * Supported source params: partner_id, ib, ref, code, partner_code, deep_link_value
 * They are forwarded as-is so AppsFlyer / the app can read them.
 */
export function buildOneLinkUrl(searchParams) {
  if (!searchParams) return ONE_LINK_BASE;

  const trackingKeys = [
    "partner_id",
    "ib",
    "ref",
    "code",
    "partner_code",
    "deep_link_value",
  ];

  const params = new URLSearchParams();

  for (const key of trackingKeys) {
    const value = searchParams.get(key);
    if (value) {
      params.set(key, value);
    }
  }

  const qs = params.toString();
  return qs ? `${ONE_LINK_BASE}?${qs}` : ONE_LINK_BASE;
}

/* ------------------------------------------------------------------ */
/*  OneLinkButton – single "Download App" button with tracking        */
/* ------------------------------------------------------------------ */

export default function OneLinkButton({ className = "" }) {
  return (
    <Suspense fallback={<OneLinkFallback className={className} />}>
      <OneLinkInner className={className} />
    </Suspense>
  );
}

function OneLinkInner({ className }) {
  const searchParams = useSearchParams();
  const href = buildOneLinkUrl(searchParams);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 hover:opacity-90 transition-opacity bg-[#111e62] ${className}`}
      aria-label="Download GTC Go App"
    >
      <svg
        className="w-7 h-7 mr-2 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
      <div className="text-left text-white">
        <div className="text-[10px] leading-tight">Download the</div>
        <div className="text-sm font-semibold leading-tight">GTC Go App</div>
      </div>
    </a>
  );
}

function OneLinkFallback({ className }) {
  return (
    <a
      href={ONE_LINK_BASE}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 hover:opacity-90 transition-opacity bg-[#111e62] ${className}`}
      aria-label="Download GTC Go App"
    >
      <svg
        className="w-7 h-7 mr-2 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
      <div className="text-left text-white">
        <div className="text-[10px] leading-tight">Download the</div>
        <div className="text-sm font-semibold leading-tight">GTC Go App</div>
      </div>
    </a>
  );
}
