"use client";

import React from "react";
import Heading from "./Heading";
import Button from "./Button";

export default function GoldOpportunitySection({ data }) {
  const cards = [
    {
      badge: "Less Slippage",
      image: "trading-img1.png",
      title: "Analyze trends with intuitive, gold-focused features.",
      bgText: "GOLD",
      imagePosition: "object-center",
    },
    {
      badge: "No hidden costs",
      image: "trading-img2.png",
      title: "Trade what matters, filter out the rest.",
      bgText: "",
      imagePosition: "object-cover",
    },
    {
      badge: "No Commissions",
      image: "trading-img3.png",
      title: "Get insights that work in real-time.",
      bgText: "0%",
      imagePosition: "object-cover",
    },
  ];

  return (
    <section className="w-full bg-[#fff] md:py-14 py-8">
      <div className="mx-auto max-w-5xl px-4">
        {/* heading */}
        <div className="text-center">
          <Heading variant="sectionLight" as="h2">
            {data.title}
          </Heading>

          {/* buttons */}
          <div className="md:mt-10 mt-6 flex items-center justify-center gap-4">
            <Button size="md" variant={data.btn1Varient}>
              {data.btn1Text}
            </Button>
            <Button size="md" variant={data.btn2Varient}>
              {data.btn2Text}
            </Button>

          </div>
        </div>

        {/* cards */}
        <div className="mx-auto md:mt-14 mt-8 grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-3">
          {data?.cards?.map((card, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[14px] border border-[#E2E2E2] bg-white"
            >
              {/* image area */}
              <div className="relative h-[255px] overflow-hidden bg-[#243A98]">
                {card.bgText ? (
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-[26px] z-0 text-center font-semibold leading-none text-white/28 ${index === 0 ? "text-[86px]" : "text-[118px]"
                      }`}
                  >
                    {card.bgText}
                  </div>
                ) : null}

                {/* badge */}
                {card.badge && (
                  <div className="absolute left-[16px] top-[14px] z-20 inline-flex items-center gap-[5px] rounded-full bg-white px-2 py-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1E2F86] text-white">
                      <CheckIcon />
                    </span>

                    <span className="md:text-[14px] text-[10px] font-semibold leading-none text-[#111111]">
                      {card.badge}
                    </span>
                  </div>
                )}

                {/* image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className={`absolute inset-0 z-10 h-full w-full object-cover ${card.imagePosition}`}
                  draggable={false}
                />
              </div>

              {/* content */}
              <div className=" md:px-5 text-center md:text-left md:py-7 px-4 py-5">
                <Heading variant="card" as="h3">
                  {card.title}
                </Heading>
                {card.desc && (
                  <p className="mt-2 md:text-base text-sm text-[#666666]">
                    {card.desc}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
        {data?.footerText && (
          <p className="md:mt-14 mt-6 text-center md:text-base text-sm leading-relaxed font-normal text-[#A5A5A5]">{data?.footerText}</p>
        )}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}