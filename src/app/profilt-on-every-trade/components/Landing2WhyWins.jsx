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
                <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
      <Heading variant="sectionDark" as="h2" className="!max-w-xl">
                    {data?.title}
                </Heading>

                 <p className="text-[16px] font-normal md:text-[17px] leading-[1.6] text-[#E2E2E2]">From advanced trading features to exclusive VIP benefits, enjoy a complete ecosystem built to support your trading goals.</p>
   <div className=" flex flex-wrap items-center justify-center gap-2 sm:gap-[14px]">
                    <div className="flex flex-row gap-4">
              <a
                href="https://apps.apple.com/ae/app/gtc-go/id6753007277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] border border-white/50 rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
                aria-label="Download on the App Store"
              >
                <svg
                  className="w-8 h-8 mr-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left text-white">
                  <div className="text-[10px] leading-tight">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold leading-tight">
                    App Store
                  </div>     
                </div>
              </a>
              <a
                href="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] border border-white/50 border-opacity-10 hover:from-[#263788] hover:via-[#101638] hover:to-[#263788]  rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
                aria-label="Get it on Google Play"
              >
                <svg
                  className="w-8 h-8 mr-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left text-white">
                  <div className="text-[10px] leading-tight">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
                    
                </div>
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
                         <div className="h-[50px]" />
                        <Feature
                            title={data?.columnsLeft?.[2]?.title}
                            desc={data?.columnsLeft?.[2]?.desc}
                            align="center"
                        />
                    </div>

                    <div className="relative flex-shrink-0 w-full max-w-[330px] mx-auto">
                        <div className="relative">
                            <img
                                src="/copy-trading.svg"
                                alt="GTC copy trading app"
                                className="mx-auto max-w-[330px] h-[230px] md:h-auto w-full md:max-w-[410px]"
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
                         <div className="h-[50px]" />
                        <Feature
                                title={data?.columnRight?.[2]?.title}
                            desc={data?.columnRight?.[2]?.desc}
                            align="center"
                        />
                        
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-0 text-center md:hidden">
                    <div className="border-b border-white/20 py-4 first:pt-0">
                        <Feature
                            title={data?.columnsLeft?.[0]?.title}
                            desc={data?.columnsLeft?.[0]?.desc}
                            align="center"
                        />
                    </div>
                    <div className="border-b border-white/20 py-4">
                        <Feature
                            title={data?.columnsLeft?.[1]?.title}
                            desc={data?.columnsLeft?.[1]?.desc}
                            align="center"
                        />
                    </div>
                    <div className="border-b border-white/20 py-4">
                        <Feature
                            title={data?.columnRight?.[0]?.title}
                            desc={data?.columnRight?.[0]?.desc}
                            align="center"
                        />
                    </div>
                    <div className="py-4">
                        <Feature
                            title={data?.columnRight?.[1]?.title}
                            desc={data?.columnRight?.[1]?.desc}
                            align="center"
                        />
                         <Feature
                            title={data?.columnRight?.[2]?.title}
                            desc={data?.columnRight?.[2]?.desc}
                            align="center"
                        />
                    </div>
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
            <div className="md:text-[18px] text-[16px] font-semibold text-secondary">{title}</div>
            <div className="md:mt-3 mt-1 font-normal md:text-[15px] text-[14px] leading-[1.55] text-white">
                {desc}
            </div>
        </div>
    );
}

function StoreBadge({ type }) {
  const base =
    "inline-flex items-center justify-center transition hover:opacity-90";

  if (type === "appstore") {
    return (
      <a
        href="https://apps.apple.com/ae/app/gtc-go/id6753007277"
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        <img
          src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email/app-stoe.webp"
          alt="Download on App Store"
          className="h-[45px] w-auto"
          draggable={false}
        />
      </a>
    );
  }

  if (type === "googleplay") {
    return (
      <a
        href="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        <img
          src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email/google-play.webp"
          alt="Get it on Google Play"
          className="h-[45px] w-auto"
          draggable={false}
        />
      </a>
    );
  }

  return (
    <a
      href="https://file.mygtc.app/app/app-release-go-2.9.1.apk"
      target="_blank"
      rel="noopener noreferrer"
      className={base}
    >
      <img
        src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email/apk-file.webp"
        alt="Download APK"
        className="h-[45px] w-auto"
        draggable={false}
      />
    </a>
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