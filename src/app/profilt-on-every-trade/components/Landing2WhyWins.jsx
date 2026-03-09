"use client";

import React from "react";
import Heading from "./Heading";

export default function CopyTradingFlexibleSection({ data }) {
    return (
        <section className="relative w-full overflow-hidden bg-[#0B1B5A]"
            style={{
                background: "linear-gradient(180deg, #293B93 5.22%, #0D153A 99.18%)",
            }}
        >

            <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:pt-16 pb-10 md:pb-0">
                <Heading variant="sectionDark" as="h2">
                    {data?.title}
                </Heading>

                <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-[14px]">
                    <StoreBadge type="appstore" />
                    <StoreBadge type="googleplay" />
                    <StoreBadge type="apk" />
                </div>

                <div className="relative mt-8 sm:mt-12 grid grid-cols-1 items-center md:grid-cols-3 md:gap-6">
                    <div className="hidden max-w-xs flex-shrink-0 md:block md:pb-2">
                        <Feature
                            title={data?.columnsLeft?.[0]?.title}
                            desc={data?.columnsLeft?.[0]?.desc}
                            align="center"
                        />
                        <div className="h-[50px]" />
                        <Feature
                            title={data?.columnsLeft?.[1]?.title}
                            desc={data?.columnsLeft?.[1]?.desc}
                            align="center"
                        />
                    </div>

                    <div className="relative flex-shrink-0 w-full max-w-[330px]">
                        <div className="relative">
                            <img
                                src="/copy-trading.svg"
                                alt="GTC copy trading app"
                                className="mx-auto max-w-[330px] w-full md:max-w-[410px]"
                                draggable={false}
                            />
                        </div>
                    </div>
                    <div className="hidden max-w-xs flex-shrink-0 md:block text-right md:pb-2">
                        <Feature
                            title={data?.columnRight?.[0]?.title}
                            desc={data?.columnRight?.[0]?.desc}
                            align="center"
                        />
                        <div className="h-[50px]" />
                        <Feature
                                title={data?.columnRight?.[1]?.title}
                            desc={data?.columnRight?.[1]?.desc}
                            align="center"
                        />
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-6 text-center md:hidden">
                    <Feature
                        title={data?.columnsLeft?.[0]?.title}
                        desc={data?.columnsLeft?.[0]?.desc}
                        align="center"
                    />
                    <Feature
                        title={data?.columnsLeft?.[1]?.title}
                        desc={data?.columnsLeft?.[1]?.desc}
                        align="center"
                    />
                    <Feature
                        title={data?.columnRight?.[0]?.title}
                        desc={data?.columnRight?.[0]?.desc}
                        align="center"
                    />
                    <Feature
                        title={data?.columnRight?.[1]?.title}
                        desc={data?.columnRight?.[1]?.desc}
                        align="center"
                    />
                </div>
            </div>
        </section>
    );
}

function Feature({ title, desc, align = "left" }) {
    const isRight = align === "right";
    const isCenter = align === "center";

    return (
        <div className={isCenter ? "text-center" : isRight ? "text-right" : "text-left"}>
            <div className="md:text-[22px] text-[18px] font-semibold text-white">{title}</div>
            <div className="md:mt-3 mt-1 font-normal md:text-[16px] text-[14px] leading-[1.55] text-white">
                {desc}
            </div>
        </div>
    );
}

function StoreBadge({ type }) {
    // shared pill style (matches screenshot)
    const base =
        "inline-flex items-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-3 sm:px-4";

    if (type === "appstore") {
        return (
            <div className={base}
                style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    background: "rgba(255, 255, 255, 0.10)",
                }}
            >
                <AppleIcon />
                <div className="leading-none">
                    <div className="text-[10px] sm:text-[12px] font-normal text-white">Download on the</div>
                    <div className="text-[13px] sm:text-[16px] font-semibold text-white">App Store</div>
                </div>
            </div>
        );
    }

    if (type === "googleplay") {
        return (
            <div className={base}
                style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    background: "rgba(255, 255, 255, 0.10)",
                }}
            >
                <PlayIcon />
                <div className="leading-none">
                    <div className="text-[7px] font-semibold text-white/80">GET IT ON</div>
                    <div className="text-[11px] font-bold text-white">Google Play</div>
                </div>
            </div>
        );
    }

    return (
        <div className={base}
            style={{
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.30)",
                background: "rgba(255, 255, 255, 0.10)",
            }}
        >
            <AndroidIcon />
            <div className="text-[11px] font-extrabold tracking-[0.6px] text-white">APK</div>
            <DownloadIcon />
        </div>
    );
}

/* ------------------------- Icons ------------------------- */

function AppleIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M16.6 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.2 2.8 2.2 1.1 0 1.6-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-.9 2.7-1.9.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.6-1-2.8-3.9ZM14.6 6.9c.6-.7 1-1.6.9-2.6-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 0 2-.5 2.7-1.2Z" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg
            className="w-8 h-8 mr-2 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
    );
}

function AndroidIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#5CFFB0]">
            <path d="M7 9h10l1.3-2.2c.2-.3.1-.7-.2-.9-.3-.2-.7-.1-.9.2L15.9 8H8.1L6.8 6.1c-.2-.3-.6-.4-.9-.2-.3.2-.4.6-.2.9L7 9Zm-1 1v8c0 .6.4 1 1 1h1v-6h1v6h6v-6h1v6h1c.6 0 1-.4 1-1v-8H6Zm-1 1H4c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-7Zm16 0h-1v7h1c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1Z" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/80">
            <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="m8 11 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}