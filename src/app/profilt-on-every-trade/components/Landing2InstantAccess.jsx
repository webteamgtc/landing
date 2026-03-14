"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Button from "./Button";

export default function Landing2InstantAccess({ data }) {
  return (
    <div className=" relative">
      <section className=" max-w-6xl px-4 py-8  mx-auto flex items-center min-h-[270px] w-full overflow-hidden md:min-h-[500px] md:py-24">
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
        <div
          className="absolute md:hidden block inset-0 z-0 bg-black/50"
          aria-hidden
        />
        {/* Content overlaid on the left */}
        <div className="relative z-10">
          <div className="max-w-6xl  mx-auto">
            <div className="max-w-xl">
              <Heading variant="sectionLight" as="h2" className="md:text-primary text-[#fff]  text-left !max-lg !mx-auto">
                {data?.title}
              </Heading>
              <p className="mt-4 text-lg font-normal leading-relaxed md:text-[#000000] text-[#fff]">
                {data?.desc}
              </p>
              <div className="md:mt-6 mt-4">
                <Button size="md" variant={data?.variant}>
                  {data?.btnText}
                </Button>
              </div>
              {data?.footerText && (
                <p className="md:mt-8 mt-6 text-sm font-normal leading-relaxed md:text-[#868686] text-[#fff]">
                  {data?.footerText}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
