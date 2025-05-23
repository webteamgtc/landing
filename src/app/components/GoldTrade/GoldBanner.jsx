'use client';
import React from 'react';
import CommonMainForm from '../MainForm';

const GoldBanner = () => {
  return (
    <section className="py-10 lg:py-[70px] bg-[url('/goldlp/bg-1.svg')] bg-cover bg-center text-center md:h-[850px]">
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="bg-black md:bg-[url('/goldlp/bggold.webp')] bg-cover bg-bottom md:bg-center bg-no-repeat md:h-[650px]">
          <div className="grid grid-cols-3 gap-8 items-center h-full">

            {/* Left Content */}
            <div className="col-span-3 md:col-span-2 text-left text-white flex items-center">
              <div className="max-w-3xl px-6 pt-6 md:p-14">
                <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-[60px] lg:leading-[62px] capitalize">
                  Maximize your profits with tight spreads and fast execution on every
                  <span className="text-secondary font-bold uppercase block mt-2">
                    gold trade.
                  </span>
                </h1>
                <p className="text-base text-white leading-6 max-w-lg mx-auto">
                  Trade gold with tight spreads, fast execution, and top-tier
                  conditions built for serious traders. Take advantage of powerful
                  platforms and pro-level tools. Stay ahead with reliable insights
                  designed for gold trading success.
                </p>

                {/* CTA Button */}

              </div>
            </div>

            {/* Right Form Placeholder */}
            <div className="col-span-3 md:col-span-1 p-2 md:p-5">
              <CommonMainForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldBanner;
