
import React from "react";
import Button from "../../profilt-on-every-trade/components/Button";

const HEADING = "What Our Arabic Traders Are Saying";
const DESCRIPTION = "With thousands of happy traders from the UAE, Oman, Qatar, Kuwait, Iraq, Jordan & Lebanon, isn't it time you switched to GTC?";
const BUTTON_TEXT = "Switch To GTC";
const BUTTON_TEXT_2 = "Trade Gold";

const testimonials = [
  {
    text: "\"I switched to GTC because the withdrawal speed blew my old broker out of the water. Instant payout in USDT? Love it.\"",
    name: "Mohammed A.",
    stars: 5,
    country: "UAE"
  },
  {
    text: "\"I scalp gold all day, and GTC is the only broker I've found that actually lets me do that without weird time limits.\"",
    name: "Omar S.",
    stars: 5,
    country: "Qatar"
  },
  {
    text: "\"My previous broker slipped my orders like crazy during news. GTC's execution is solid. I finally trust the platform.\"",
    name: "Hussein B.",
    stars: 5,
    country: "Iraq"
  },
  {
    text: "Customer support at GTC actually speaks to you like a human, not just a ticket number. That alone is worth switching.",
    name: "Abdullah K.",
    stars: 5,
    country: "Lebanon"
  },
];

const TestimonialCard = ({ text, name, stars, country, odd }) => (
  <div className={`bg-white rounded-[16px] p-4 text-sm space-y-1 flex flex-col gap-2 `}
    style={{
      boxShadow: "1px 6px 16px 0px #0000001A"
    }}
  >
    <div className="w-full text-2xl bg-gradient-to-b from-[#E1CFBB] to-[#956D42] bg-clip-text text-transparent">
      {"★".repeat(stars)}
    </div>

    <p className={`text-base text-[#4D4D70] mb-0`}>{text}</p>
    <div>
      <p className="text-sm w-full text-[#000032] mb-0 mt-2">{name}</p>
      <p className="text-sm w-full text-[#808098] mb-0">{country}</p>
    </div>


  </div>
);

const IBTestimonials = ({ setIsOpen }) => {
  return (
    <section className="bg-[#fff] india-bg-switch py-8 md:py-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-1 gap-8 md:gap-16 ">
          {/* Left Section */}
          <div className="flex flex-col ltr:text-left rtl:text-right justify-center space-y-5 md:space-y-2">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#000032] leading-snug capitalize w-64 md:w-full">
              {HEADING}
            </h2>
            <p className="text-sm md:text-base xl:text-[18px] text-[#4D4D70] max-w-2xl">
              {DESCRIPTION}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-6">
            {testimonials.map((item, idx) => {
              const odd = idx % 2 == 0 ? true : false
              return (
                <TestimonialCard key={idx} {...item} odd={odd} />
              )
            })}
          </div>
          <div className="flex justify-center md:mt-2">

            <button className="bg-gradient-to-r mt-2  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
            >
              {BUTTON_TEXT_2}
              <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBTestimonials;
