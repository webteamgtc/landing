"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";
import Heading from "./Heading";

const logos = [
  { name: "Bloomberg", src: "bloom.svg" },
  { name: "Forbes", src: "forbes.svg" },
  { name: "Investing.com", src: "investing.svg" },
  { name: "Yahoo! Finance", src: "yahoo.svg" },
];

export default function Landing2Media() {
  return (
    <section className="bg-[#F5F5F5] py-8 md:py-16">
      <Container>
        <Heading variant="media" as="h2">
          GTCFX IN THE NEWS.
        </Heading>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 md:mt-10 md:gap-14 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 hover:drop-shadow-md"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={48}
                className="h-10 w-auto max-w-[140px] object-contain opacity-90 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-12 md:max-w-[190px]"
                unoptimized
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
