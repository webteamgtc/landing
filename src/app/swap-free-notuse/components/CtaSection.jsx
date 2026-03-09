"use client";
import React from "react";
import Image from "next/image";

const READY_TO_SWAP = {
  heading: "Ready To Trade Swap Free?",
  desc: "Switch to GTC today & trade swap free for life! There's nothing surer about that! Plus you get all the benefits of a GTC trading account, which means you receive super-competitive spreads, ultra-fast execution & customer care that actually cares about you!",
  btnText: "Switch to GTC",
  tcApply: "Terms & Conditions apply",
};

const TradeSwitchSection = ({ setIsOpen }) => {
    return (
        <div className="relative">
            <section className=" container flex items-center py-20 mx-auto text-white overflow-hidden min-h-[400px] md:min-h-[440px]">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/swap-free/then.webp" // Replace with your image path
                        alt="Trader background"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0B1035] opacity-70" />
                </div>


                {/* Content */}
                <div className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center ltr:md:text-left rtl:md-text-right h-full">
                    {/* Left Title */}
                    <div>
                        <h2 className="text-[28px] md:text-[48px] xl:text-[60px] max-w-sm font-semibold leading-tight text-white ltr:md:w-96 px-5 md:px-0 ">
                            {READY_TO_SWAP.heading}
                        </h2>
                    </div>

                    {/* Right Description */}
                    <div className="text-sm md:text-base text-[#E5E5EA] leading-relaxed flex flex-col gap-4 items-center ltr:md:items-start">
                        <p>
                            {READY_TO_SWAP.desc}
                        </p>

                        <div className="relative flex flex-col gap-1">
   <button className="bg-gradient-to-r mt-2  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
                            onClick={() => setIsOpen(true)}>
                            {READY_TO_SWAP.btnText}

                            <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                            </svg>
                        </button>
                        <a href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Cheatsheet/Swap+Free+for+Life+T%26Cs.pdf" target="_blank" className="text-sm md:text-base mt-3 text-center text-[#CCCCD6]  font-medium  leading-relaxed">
                            {READY_TO_SWAP.tcApply}
                        </a>
                        </div>
                     
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TradeSwitchSection;
