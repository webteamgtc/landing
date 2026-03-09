"use client";

import React from "react";
import Container from "../../landing-2/components/Container";
import Heading from "../../landing-2/components/Heading";
import Button from "../../landing-2/components/Button";

const panels = [
  {
    badgeText: "GOLD",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
      <path d="M15.8954 12.5957C15.4062 11.5745 14.917 9.19149 14.387 8.17021C14.224 7.82979 13.9794 7.65957 13.6125 7.65957H11.0443C10.6774 7.65957 10.4328 7.82979 10.2697 8.12766C9.78054 9.14894 9.25059 11.5319 8.7614 12.5532C8.43528 13.1915 8.80217 14 9.57671 14C10.5551 13.9574 11.2073 14 12.1857 14H15.0801C15.2024 14 15.3654 14 15.4877 13.9574C15.9361 13.7447 16.14 13.1489 15.8954 12.5957ZM11.3296 6.29787C11.8188 6.08511 11.9819 5.48936 11.7373 4.93617C11.2481 3.91489 10.7589 1.53191 10.229 0.510638C10.0659 0.170213 9.82131 0 9.45442 0H6.56007C6.19318 0 5.94859 0.170213 5.78552 0.468085C5.29634 1.48936 4.76639 3.87234 4.2772 4.89362C3.95108 5.53191 4.31797 6.34043 5.09251 6.34043C6.07088 6.29787 7.04925 6.34043 8.02762 6.34043H10.922C11.0443 6.34043 11.1666 6.34043 11.3296 6.29787ZM5.74476 8.17021C5.5817 7.82979 5.3371 7.65957 4.97021 7.65957H2.40199C2.0351 7.65957 1.7905 7.82979 1.62744 8.12766C1.13826 9.14894 0.608305 11.5319 0.119119 12.5532C-0.207004 13.1915 0.159885 14 0.934429 14C1.9128 13.9574 2.89117 14 3.86954 14H6.43777C6.56007 14 6.72313 14 6.84543 13.9574C7.33461 13.7447 7.49767 13.1489 7.25308 12.5957C6.7639 11.5745 6.27471 9.19149 5.74476 8.17021Z" fill="#946325"/>
    </svg>
    ),
    chartImage: "/landing5-chart.svg",
    title: "Gold Trading",
    badgeColor: "bg-[#E1C78C]",
    description: "Built for performance-driven traders.",
  },
  {
    badgeText: "Forex",
    badgeIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    chartImage: "/landing5-chart.svg",
    title: "Forex Trading",
    badgeColor: "#BABABA",
    description: "Designed for consistent execution quality.",
  },
];

export default function TradingConditions() {
  return (
    <section className="bg-[#293b93] pt-10 md:pt-16">
      <Container>
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-10 md:mb-14">
          <Heading variant="sectionDark" className="mb-4">
            What Could Better Trading Conditions Do for You?
          </Heading>
          <p className="text-[#D1D1D1] text-base md:text-lg mb-8">
            The right trading conditions can change your results faster than you think.
          </p>
          <Button variant="primary" size="lg" as="a" href="#start-trading">
            Start Trading Now
          </Button>
        </div>

        {/* Two panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-16">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="bg-[#172C4F] p-6 md:p-8 flex flex-col"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border bg-[#0E1D32] px-4 py-2 w-fit mb-6">
                <span className={`text-[#D1A75B] ${panel.badgeColor}`}>{panel.badgeIcon}</span>
                <span className="text-white text-sm font-semibold uppercase tracking-wide">
                  {panel.badgeText}
                </span>
              </div>

              {/* Chart placeholder – replace src with your final image */}
              <div className="relative w-full aspect-[16/10] min-h-[200px]  rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                <img
                  src={panel.chartImage}
                  alt={`${panel.title} comparison chart`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    const fallback = e.target.parentElement?.querySelector(".chart-fallback");
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="chart-fallback absolute inset-0 flex items-center justify-center text-[#BDBDBD] text-sm p-4 text-center"
                  style={{ display: "none" }}
                >
                  Chart placeholder – replace with original image
                </div>
              </div>

              <h3 className="text-[#8DA5CD] text-lg md:text-xl font-bold text-center mb-0">
                {panel.title}
              </h3>
              <p className="text-[#8DA5CD] text-sm md:text-base text-center">
                {panel.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#A3A3A3] text-sm md:text-base">
          Trading conditions vary based on account type and market conditions.
        </p>
      </Container>
    </section>
  );
}
