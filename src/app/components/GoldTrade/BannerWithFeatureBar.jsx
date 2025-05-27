'use client';
import React from 'react';

const features = [
  {
    front: 'Tight & Stable Spreads',
    back: 'Lock in profits with consistent spreads.',
  },
  {
    front: 'Fast Execution',
    back: 'Place trades instantly without delay.',
  },
  {
    front: 'Seamless Withdrawals',
    back: 'Quick, easy access to your funds anytime.',
  },
  {
    front: 'Zero Commission',
    back: 'Trade gold without extra fees or costs.',
  },
];

const BannerWithFeatureBar = () => {
  return (
    <section className="relative mb-10 md:mb-14">
      <div className="md:absolute left-1/2 transform md:-translate-x-1/2 md:bottom-[-60px] z-10 w-full max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#f5f5f5] rounded-md md:rounded-full shadow-md overflow-hidden">
          {features.map((feature, index) => {
            const isNotLastInRow = (index % 2 === 0 && index + 1 < features.length) || (index < 3 && index % 2 !== 0);

            return (
              <div
                key={index}
                className={`group relative h-[100px] flex items-center justify-center text-center hover:cursor-pointer p-4 bg-[#f5f5f5] text-primary text-sm md:text-base transition duration-300 hover:bg-primary hover:text-white 
                ${isNotLastInRow ? 'border-r border-white' : ''} 
                md:border-r md:border-white ${index === 3 ? 'md:border-r-0' : ''}`}
                role="button"
                aria-label={feature.front}
              >
                <span className="absolute inset-0 flex items-center text-sm md:text-base font-medium justify-center transition-opacity duration-300 group-hover:opacity-0">
                  {feature.front}
                </span>
                <span className="absolute w-52 mx-auto inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-3 text-base md:px-5">
                  {feature.back}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BannerWithFeatureBar;
