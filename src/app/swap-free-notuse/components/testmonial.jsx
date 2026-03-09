import React, { use } from "react";

const SWAP_FREE = {
  heading: "Swap Free for Life?",
  desc: "Only with a GTC Trading Account. Let's Make it Happen for you.",
  para1: "This might be the simplest upgrade you'll ever make. No forms, no waiting, no hidden catches. Just follow these quick steps to switch to GTC and trade swap free for life.",
  card1: { title: "Open Your Account", desc: "Just pop in your name and email. It takes less than a minute, literally." },
  card2: { title: "Instant Activation", desc: "The moment your account is set, your Swap Free benefit is live. No request needed." },
  card3: { title: "Start Trading Anything", desc: "Pick your market, FX, gold, indices etc, you're good to go, Swap Free." },
  card4: { title: "Hold. Trade. Repeat.", desc: "Whether you're in for the long haul or short bursts, your strategy stays fee-free." },
  btnText: "Trade Swap Free",
  tcApply: "Terms & Conditions apply",
};


const TestimonialCard = ({ text, name, index}) => (
  <div className={`bg-white rounded-[16px] p-9 md:p-4 text-sm space-y-1 flex flex-col gap-2 `}
    style={{
      boxShadow: "1px 6px 16px 0px #0000001A"
    }}
  >
    <div className="w-full text-lg text-[#4D4D70]">
      0{index + 1}
    </div>

    <p className={`md:text-[24px] max-w-[180px] text-lg font-bold text-transparent bg-gradient-to-r  bg-clip-text from-[#293794] to-[#000021] mb-0`}>{text}</p>
    <div>
      <p className="text-base w-full text-[#4D4D70] mb-0 mt-2">{name}</p>
    </div>


  </div>
);

const IBTestimonials = ({ setIsOpen }) => {
  const testimonials = [
    { text: SWAP_FREE.card1.title, name: SWAP_FREE.card1.desc },
    { text: SWAP_FREE.card2.title, name: SWAP_FREE.card2.desc },
    { text: SWAP_FREE.card3.title, name: SWAP_FREE.card3.desc },
    { text: SWAP_FREE.card4.title, name: SWAP_FREE.card4.desc },
  ];

  return (
    <section className="bg-[#fff] india-bg-switch py-12 md:py-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-1 gap-8 md:gap-16 ">
          {/* Left Section */}
          <div className="flex flex-col ltr:text-left rtl:text-right justify-center space-y-5 md:space-y-2">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#000032] leading-snug capitalize w-64 md:w-full">
              {SWAP_FREE.heading}
            </h2>
            <p className="text-base md:text-lg font-semibold xl:text-[22px] text-[#4D4D70] max-w-2xl">
              {SWAP_FREE.desc}
            </p>
            <p className="text-sm md:text-base xl:text-[18px] text-[#4D4D70] max-w-2xl">
              {SWAP_FREE.para1}
            </p>

          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-6">
            {testimonials.map((item, idx) => {
              const odd = idx % 2 == 0 ? true : false
              return (
                <TestimonialCard key={idx} {...item} index={idx} odd={odd} />
              )
            })}
          </div> 
          <div className="relative text-center flex flex-col gap-1">
            <button className="bg-gradient-to-r  mx-auto  flex items-center gap-2 from-[#293794] cursor-pointer to-[#000021] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(true)}>
              {SWAP_FREE.btnText}
              <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
              </svg>
            </button>
            <a  href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Cheatsheet/Swap+Free+for+Life+T%26Cs.pdf" target="_blank" className="text-sm md:text-base mt-3 text-center text-[#4D4D70]  font-medium  leading-relaxed">
              {SWAP_FREE.tcApply}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBTestimonials;
