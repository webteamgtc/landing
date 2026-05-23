"use client";

import React from "react";
import Container from "../../profilt-on-every-trade/components/Container";
import Heading from "../../profilt-on-every-trade/components/Heading";
import Button from "../../profilt-on-every-trade/components/Button";
import Image from "next/image";

const features = [
    {
        title: "Download the App",
        description: "Install GTC Go and log in securely.",
        icon: "/icon1.svg",
        height: "h-40",
    },
    {
        title: "Set Up Your Profile",
        description: "Link accounts and personalize your preferences.",
        icon: "/icon2.svg",
        height: "h-48",
    },
    {
        title: "Start Exploring Features",
        description: "Trade, track rewards, and follow signals.",
        icon: "/icon3.svg",
        height: "h-96",
    },
];

export default function HowItsWork({ data }) {
    return (
        <section className="bg-[#F9FAFF] py-12 md:py-20">
            <Container>
                {/* Header */}
                <div className="text-center max-w-full mx-auto mb-10 md:mb-16">
                    <Heading variant="sectionLight" className="mb-4">{data?.title}</Heading>
                    <p className="text-gray-500 text-sm md:text-lg mb-6">{data?.desc}</p>
                    <Button variant={data?.variant} size="lg" as="a" href="#download">{data?.btnText}</Button>
                </div>

                {/* Grid: mobile: image on top, desktop: cards left / image right */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 items-start">
                    
                    {/* Illustration column */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
                        <div className="relative w-full h-[250px] md:h-[500px]">
                            <Image
                                src="/ing1.webp"
                                alt="How It Works Illustration"
                                className="object-contain"
                                fill
                            />
                        </div>
                    </div>

                    {/* Cards column */}
                    <div className="order-2 lg:order-1 grid md:grid-cols-2 gap-6">
                        {/* Left column: two stacked cards */}
                        <div className="flex flex-col gap-6">
                            <div
                                className="bg-gradient-to-br from-[#293B93] to-[#0D153A] text-white p-4 rounded-[10px] border border-white/20 flex flex-col justify-center items-start w-full md:w-[240px] h-[180px] md:h-[220px]"
                            >
                                <Image src="/icon1.svg" width={32} height={32} alt="Download Icon" className="mb-4" />
                                <h3 className="text-lg font-bold mb-2">Download the App</h3>
                                <p className="text-sm text-white/90">Install GTC Go and log in securely.</p>
                            </div>

                            <div
                                className="bg-gradient-to-br from-[#293B93] to-[#0D153A] text-white p-4 rounded-[10px] border border-white/20 flex flex-col justify-center items-start w-full md:w-[240px] h-[180px] md:h-[220px]"
                            >
                                <Image src="/icon2.svg" width={32} height={32} alt="Profile Icon" className="mb-4" />
                                <h3 className="text-lg font-bold mb-2">Set Up Your Profile</h3>
                                <p className="text-sm text-white/90">Link accounts and personalize your preferences.</p>
                            </div>
                        </div>

                        {/* Right column: single tall card, vertically centered */}
                        <div className="flex flex-col justify-center items-start">
                            <div
                                className="bg-gradient-to-br from-[#293B93] to-[#0D153A] text-white p-4 rounded-[10px] border border-white/20 flex flex-col justify-center items-start w-full md:w-[260px] h-[180px] md:h-[300px]"
                            >
                                <Image src="/icon3.svg" width={32} height={32} alt="Features Icon" className="mb-4" />
                                <h3 className="text-lg font-bold mb-2">Start Exploring Features</h3>
                                <p className="text-sm text-white/90">Trade, track rewards, and follow signals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}