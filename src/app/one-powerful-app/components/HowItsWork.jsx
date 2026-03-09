"use client";

import React from "react";
import Container from "../../profilt-on-every-trade/components/Container";
import Heading from "../../profilt-on-every-trade/components/Heading";
import Button from "../../profilt-on-every-trade/components/Button";
import Image from "next/image";

export default function HowItsWork({ data }) {
    return (
        <section className="bg-white pt-6 md:pt-14">
            <Container>
                {/* Header */}
                <div className="text-center max-w-full mx-auto mb-6 md:mb-16">
                    <Heading variant="sectionLight" className="mb-4">
                        {data?.title}
                    </Heading>
                    <p className="text-gray-600 text-sm md:text-lg md:mb-6 mb-4">
                        {data?.desc}
                    </p>
                    <Button variant={data?.variant} size="lg" as="a" href="#download">
                        {data?.btnText}
                    </Button>
                </div>

                {/* Two columns: steps + illustration */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    {/* Left: Step cards */}
                    <div className="space-y-4">
                        {data?.steps?.map((step, i) => (
                            <div
                                key={i}
                                className="bg-white border  border-gray-200 rounded-lg p-4 gap-4"
                            >
                                <div className="text-[#1A1A1A] h-6 md:h-10 mb-3">{step?.icon}</div>
                                <div>
                                    <h3 className="md:text-lg text-base font-semibold text-black mb-0">{step?.title}</h3>
                                    <p className="text-gray-600 text-sm md:text-base">{step?.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Chart illustration */}
                    <div className="relative flex items-center justify-center h-[250px] md:h-[450px] bg-white">
                        <Image src={data?.img || "/hows-work.svg"} alt="How It Works" width={500} height={250} className="h-full w-full object-contain" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
