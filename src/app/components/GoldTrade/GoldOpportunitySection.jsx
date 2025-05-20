'use client';
import React from 'react';
import Image from 'next/image';

const goldCards = [
  {
    icon: '/goldlp/icon1.webp',
    alt: 'Analyze trends',
    text: 'Analyze trends with intuitive, gold-focused features.',
  },
  {
    icon: '/goldlp/icon2.webp',
    alt: 'Trade what matters',
    text: 'Trade what matters, filter out the rest.',
  },
  {
    icon: '/goldlp/icon3.webp',
    alt: 'Real-time insights',
    text: 'Get insights that work in real-time.',
  },
];

const GoldOpportunitySection = () => {
  return (
    <section className="bg-white pb-6 md:py-16 text-center">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center text-primary max-w-4xl mx-auto ">
          <h2 className="text-xl md:text-4xl font-bold mb-4 ">
            See Gold Opportunities Others Miss
          </h2>
          <p className="mb-12 leading-normal">
            Smart tools and clear signals give you an edge in a noisy market.
            Cut through the noise and focus on what truly matters. Trade gold
            with confidence, backed by real-time insights designed to help you
            act fast and smart.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-28 md:grid-cols-3 gap-24 md:gap-12">
          {goldCards.map((card, index) => (
            <div
              key={index}
              className="bg-primary min-h-[200px] relative rounded-xl shadow-2xl p-6 flex flex-col items-center text-white"
            >
              <div className="w-52 h-52 absolute -top-20">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={208}
                  height={208}
                  className="rounded-full object-cover"
                  priority={index === 0}
                />
              </div>
              <p className="mt-24 text-base max-w-md px-4 pt-10 md:pt-4">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldOpportunitySection;
