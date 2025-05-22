'use client';
import Image from 'next/image';
import React from 'react';

const GoldTrustSection = () => {
  return (
    <section className="bg-white py-6 md:py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT (Content will appear second on mobile) */}
        <div className="max-w-lg">
          <p className="text-secondary text-xl md:text-3xl font-medium">0 Noise.</p>

          <h2 className="text-xl md:text-4xl font-bold text-[#0b1244] mt-2 mb-4 leading-tight">
            <span className="text-primary font-bold text-3xl md:text-6xl block">100%</span>
            <span className="text-secondary font-normal text-xl md:text-3xl mt-1 block">Gold Focus.</span>
          </h2>

          <p className="text text-sm md:text-base mt-6 leading-normal text-left">
            No distractions. Just pure trading power, built for gold traders. Every tool, feature, and signal is designed with one goal — helping you maximize every gold opportunity. Stay sharp, stay focused, and trade gold with absolute clarity.
          </p>

          <div className="space-y-6 text-sm md:text-base text-[#0b1244] border-gray-100 mt-5">
            {/* Row 1: Arrow Down */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3 max-w-sm">
              <svg
                className="w-7 h-7 text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v12m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Precision pricing. No fluff.</span>
            </div>

            {/* Row 2: Lightning Bolt */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
              <svg
                className="w-7 h-7 text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>Built for serious gold moves.</span>
            </div>

            {/* Row 3: Credit Card */}
            <div className="flex items-center gap-3">
              <svg
                className="w-7 h-7 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              <span>Every millisecond counts. We make them matter.</span>
            </div>
          </div>
        </div>

        {/* RIGHT (Image will appear first on mobile) */}
       <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shrink-0">
  <Image
    src="/goldlp/imagez.webp"
    alt="Gold Trading Visual"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw" // ✅ helps calculate layout
    className="object-contain"
  />
</div>
      </div>
    </section>
  );
};

export default GoldTrustSection;
