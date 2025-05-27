'use client';
import React from 'react';
import CommonMainForm from '../MainForm';
import Image from 'next/image';

const GoldBanner = () => {
  return (
    <section className="py-10 lg:py-[70px] bg-[url('/goldlp/bg-1.svg')] bg-cover bg-center text-center md:h-[850px]">
       <div className="flex justify-center items-center pb-5 ">
                              <Image
                                  src="/logo-2024.webp"
                                  width={150}
                                  height={54}
                                  alt="GTCFX"
                                  priority
                                  className="lg:w-[150px] lg:h-[54px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                                  onClick={() => {
                                      router.push("/");
                                  }}
                              />
      
      
                          </div>
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="bg-black md:bg-[url('/goldlp/bggold.webp')] bg-cover bg-bottom md:bg-center bg-no-repeat md:h-[650px]">
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-center h-full">

            {/* Left Content */}
            <div className="col-span-3 md:col-span-2 text-left text-white flex items-center">
              
              <div className="max-w-3xl px-3 pt-6 md:p-14">
                <h1 className="text-xl md:text-3xl lg:text-5xl leading-nomral md:leading-[40px] lg:leading-[55px] capitalize">
                  Maximize your profits with tight spreads and fast execution on every
                  <span className="text-secondary font-bold uppercase block mt-2">
                    gold trade.
                  </span>
                </h1>
                <p className="text-sm md:text-base text-white leading-normal md:leading-6 max-w-lg md:py-5 mt-3">
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
