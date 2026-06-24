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
/*  StoreBadge – individual App Store / Google Play badge (OneLink)    */
/* ------------------------------------------------------------------ */

const storeConfig = {
  appstore: {
    label: "App Store",
    sublabel: "Download on the",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 384 512">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    ),
  },
  googleplay: {
    label: "Google Play",
    sublabel: "Get it on",
    icon: (
      <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 512 512">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
      </svg>
    ),
  },
};

function StoreBadgeInner({ type = "appstore", className = "" }) {
  const searchParams = useSearchParams();
  const href = buildOneLinkUrl(searchParams);
  const config = storeConfig[type];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-white transition hover:opacity-90 ${className}`}
    >
      {config.icon}
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase opacity-80">{config.sublabel}</div>
        <div className="text-sm font-semibold">{config.label}</div>
      </div>
    </a>
  );
}

function StoreBadgeFallback({ type = "appstore", className = "" }) {
  const config = storeConfig[type];
  return (
    <a
      href={ONE_LINK_BASE}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-white transition hover:opacity-90 ${className}`}
    >
      {config.icon}
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase opacity-80">{config.sublabel}</div>
        <div className="text-sm font-semibold">{config.label}</div>
      </div>
    </a>
  );
}

export function StoreBadge({ type = "appstore", className = "" }) {
  return (
    <Suspense fallback={<StoreBadgeFallback type={type} className={className} />}>
      <StoreBadgeInner type={type} className={className} />
    </Suspense>
  );
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
