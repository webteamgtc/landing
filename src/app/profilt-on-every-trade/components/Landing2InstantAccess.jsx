"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Button from "./Button";

export default function Landing2InstantAccess({ data }) {
  return (
    <div className=" relative">
      <section className=" max-w-6xl px-4  mx-auto flex items-center min-h-[420px] w-full overflow-hidden py-16 md:min-h-[520px] md:py-24">
        {/* Full background image */}
        <div className="absolute inset-0">
          <Image
            src="/landing-2-footer.svg"
            alt=""
            fill
            className="object-cover object-right"
            sizes="100vw"
            priority
          />
        </div>
        {/* Content overlaid on the left */}
        <div className="relative z-10">
          <Container>
            <div className="max-w-xl">
              <Heading variant="sectionLight" as="h2" className="text-[#333333] text-left !font-normal">
                {data?.title}
              </Heading>
              <p className="mt-4 text-lg font-normal leading-relaxed text-[#000000]">
                {data?.desc}
              </p>
              <div className="mt-6">
                <Button size="md" variant={data?.variant}>
                  {data?.btnText}
                </Button>
              </div>
              {data?.footerText && (
                <p className="mt-8 md:mt-12 text-sm font-normal leading-relaxed text-[#868686]">
                  {data?.footerText}
                </p>
              )}
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
