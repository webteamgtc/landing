"use client"
import React from "react";
import Image from "next/image";

const BANNER = {
  heading: "Trade Swap Free for Life with GTC!",
  desc: "No Rollover Fees. No Interest Charges. Just Pure Trading Freedom, Forever.",
  para1: "For a limited time, you can get your GTC trading account with a Swap Free option for life! No forms, no special requests, just open a GTC trading account and it's done. Whether you're holding trades overnight or are planning long-term moves, you won't pay a single cent in swaps. It's our way of giving you full control to trade your strategy, your way, with no hidden fees & no strings attached.",
  column1: { title: "Swaps?", desc: "Not anymore" },
  column2: { title: "Forever", desc: "Auto Enabled" },
  column3: { title: "Unlock", desc: "Full Control" },
  column4: { title: "Unlimited", desc: "Trade Freedom" },
  btnText: "Trade Swap Free",
  tcApply: "Terms & Conditions apply",
};

const HeroSection = ({ setIsOpen }) => {
  return (
    <section className="bg-gradient-to-r from-[#000032] to-[#000032] text-[#E5E5EA] py-8 md:py-28 relative overflow-hidden">

      {/* Desktop Background Image Only */}
      <div className="hidden ltr:md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
        <Image
          src="/swap-free/banner-img.webp"
          alt="Hero BG"
          fill
          className="object-cover object-right 3xl:object-contain"
          priority
        />
      </div>

      {/* Desktop Background Image Only */}
      <div className="hidden rtl:md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
        <Image
          src="/swap-free/arabicHero.webp"
          alt="Hero BG"
          fill
          className="object-cover object-right 3xl:object-contain"
          priority
        />
      </div>




      <div className="container">
        <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative">
          {/* Left Column */}
          <div className="text-center ltr:md:text-left rtl:md:text-right">
            <h1 className="text-[35px] leading-tight md:text-[40px] xl:text-[45px] font-bold 2xl:text-[50px] 2xl:leading-tight bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text px-5 md:px-0">
              {BANNER.heading}
            </h1>
            <h3 className="text-[22px] md:text-[32px] mb-6 font-light leadging-non px-2 md:px-0">
              {BANNER.desc}
            </h3>
            <div className="flex flex-col sm:hidden relative w-full h-[200px]">
              <Image src='/swap-free/banner.png' fill alt="" className="object-contain" />
            </div>
            <p className="text-base md:text-base mb-6 leading-nomral max-w-xl  px-2 md:px-0">
              {BANNER.para1}
            </p>
            <div className="my-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center rounded-xl max-w-6xl mx-auto">
              {/* Swaps */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon1.svg" alt="" />
                </div>
                <p className="font-semibold text-sm">{BANNER.column1.title}</p>
                <p className="text-xs text-white/80">{BANNER.column1.desc}</p>
              </div>

              {/* Forever */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon2.svg" alt="" />

                </div>
                <p className="font-semibold text-sm">{BANNER.column2.title}</p>
                <p className="text-xs text-white/80">{BANNER.column2.desc}</p>
              </div>

              {/* Unlock */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon3.svg" alt="" />

                </div>
                <p className="font-semibold text-sm">{BANNER.column3.title}</p>
                <p className="text-xs text-white/80">{BANNER.column3.desc}</p>
              </div>

              {/* Unlimited */}
              <div className="flex flex-col items-center space-y-1">
                <div className="border border-[#fff] rounded-full p-2 mb-2">
                  <img className=" w-5 h-5" src="/swap-free/banner-icon4.svg" alt="" />

                </div>
                <p className="font-semibold text-sm">{BANNER.column4.title}</p>
                <p className="text-xs text-white/80">{BANNER.column4.desc}</p>
              </div>
            </div>

            <div className="relative pt-1 flex flex-col gap-1 md:items-start items-center justify-center">
              <button className="bg-gradient-to-r mt-2  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(true)}>
                {BANNER.btnText}
                <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                </svg>
              </button>
              <a href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Cheatsheet/Swap+Free+for+Life+T%26Cs.pdf" target="_blank" className="text-sm md:text-base mt-4  font-medium  leading-relaxed max-w-xl">
                {BANNER.tcApply}
              </a>
            </div>
    
            <div className="relative pt-1 flex flex-col md:items-start items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;