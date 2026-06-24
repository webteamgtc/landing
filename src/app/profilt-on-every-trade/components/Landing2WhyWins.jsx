"use client";

import React from "react";
import Heading from "./Heading";
import OneLinkButton from "../../components/OneLinkButton";

export default function CopyTradingFlexibleSection({ data }) {
    return (
        <section className="relative w-full overflow-hidden bg-[#0B1B5A]"
            style={{
                background: "linear-gradient(180deg, #293B93 5.22%, #0D153A 99.18%)",
            }}
        >

            <div className="relative mx-auto max-w-6xl px-4 pt-8 sm:pt-16 pb-10 md:pb-0">
                <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
      <Heading variant="sectionDark" as="h2" className="!max-w-lg"> 
                    {data?.title}
                </Heading>

                 <p className="text-[16px] font-normal md:text-[17px] leading-[1.6] text-[#E2E2E2]">From advanced trading features to exclusive VIP benefits, enjoy a complete ecosystem built to support your trading goals.</p>
   <div className=" flex flex-wrap items-center justify-center gap-2 sm:gap-[14px]">
                    <OneLinkButton className="bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] border border-white/50" />
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

                    <div className="relative flex-shrink-0 w-full max-w-[350px] mx-auto">
                        <div className="relative">
                            <img
                                src="/mobile.png"
                                alt="GTC copy trading app"
                                className="mx-auto max-w-[330px] h-[230px] md:h-auto w-full md:max-w-[420px]"
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

/* ------------------------- Icons ------------------------- */

function AppleIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M16.6 13.3c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.2 2.8 2.2 1.1 0 1.6-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-.9 2.7-1.9.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.6-1-2.8-3.9ZM14.6 6.9c.6-.7 1-1.6.9-2.6-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 0 2-.5 2.7-1.2Z" />
        </svg>
    );
}



