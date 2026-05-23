"use client";

import Image from "next/image";
import React from "react";


const features = [
  {
    title: "Download the App",
    description: "Install GTC Go and log in securely.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Start Exploring Features",
    description: "Trade, track rewards, and follow signals.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Set Up Your Profile",
    description: "Link accounts and personalize your preferences.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A11.955 11.955 0 0112 15c2.485 0 4.785.776 6.879 2.104M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            How It Works?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Access trading, rewards, and powerful tools in one seamless complete
            ecosystem.
          </p>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-md mt-4">
            Download App Now
          </button>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col gap-3"
              >
                <div className="flex items-center justify-start gap-3">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <div className="relative w-full h-[500px]">
          <Image
            src="/ing1.webp"
            alt="How It Works Illustration"
            className="object-contain"
            fill
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;