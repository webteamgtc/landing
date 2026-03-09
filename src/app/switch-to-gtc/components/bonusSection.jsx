"use client";
import React from "react";

const HEADING = "Switch & Get a Bonus That Boosts Your Margin, Not Your Hopes";
const DESCRIPTION_1 = "Forget losable or tricky bonuses. When you switch to GTC and deposit $500 or more, we'll match your deposit with a Margin Bonus. You get extra trading margin with real cashback rewards.";
const DESCRIPTION_2 = "Trade FX, gold, metals or oil. Hit the cashback target.";
const DESCRIPTION_3 = "Withdraw your reward.";
const BUTTON_TEXT = "Switch To GTC";

const benefits = [
  {
    icon: (<svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="30.5" r="30" stroke="#CCCCD6" />
      <path d="M36.625 15.5V11.75M36.625 38V34.25M23.5 24.875H27.25M46 24.875H49.75M41.875 30.125L44.125 32.375M36.625 24.875H36.6438M41.875 19.625L44.125 17.375M14.125 47.375L31 30.5M31.375 19.625L29.125 17.375" stroke="#CCCCD6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>),
    text: "No Tricks",
  },
  {
    icon: (<svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.1089 0.5C47.6774 0.5 61.1089 13.9315 61.1089 30.5C61.1089 47.0685 47.6774 60.5 31.1089 60.5C14.5403 60.5 1.10889 47.0685 1.10889 30.5C1.10889 13.9315 14.5403 0.5 31.1089 0.5Z" stroke="#CCCCD6" />
      <path d="M32.1422 24.5V16.5H17.6756V44.5H32.1422V46.5H15.6089V14.5H33.6115L42.4756 23.0781V28.3438C42.1419 28.2396 41.8028 28.1562 41.4584 28.0938C41.1139 28.0312 40.7641 28 40.4089 28V24.5H32.1422ZM34.2089 22.5H38.9396L34.2089 17.9219V22.5ZM46.6089 36.5V46.5H34.2089V36.5H36.2756V34.5C36.2756 33.9479 36.3832 33.4323 36.5985 32.9531C36.8137 32.474 37.1098 32.0469 37.4865 31.6719C37.8632 31.2969 38.2992 31.0104 38.7943 30.8125C39.2894 30.6146 39.8276 30.5104 40.4089 30.5C40.9794 30.5 41.5122 30.6042 42.0073 30.8125C42.5025 31.0208 42.9438 31.3073 43.3313 31.6719C43.7188 32.0365 44.0148 32.4583 44.2193 32.9375C44.4238 33.4167 44.5315 33.9375 44.5422 34.5V36.5H46.6089ZM38.3422 36.5H42.4756V34.5C42.4756 34.2188 42.4217 33.9583 42.3141 33.7188C42.2065 33.4792 42.0611 33.2708 41.8782 33.0938C41.6952 32.9167 41.4745 32.7708 41.2162 32.6562C40.9578 32.5417 40.6887 32.4896 40.4089 32.5C40.1183 32.5 39.8492 32.5521 39.6016 32.6562C39.354 32.7604 39.1387 32.901 38.9558 33.0781C38.7728 33.2552 38.6221 33.4688 38.5037 33.7188C38.3853 33.9688 38.3315 34.2292 38.3422 34.5V36.5ZM44.5422 38.5H36.2756V44.5H44.5422V38.5Z" fill="#CCCCD6" />
    </svg>),
    text: "No Hidden Terms",
  },
  {
    icon: (<svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30.718" cy="30.5" r="30" stroke="#CCCCD6" />
      <path fillRule="evenodd" clipRule="evenodd" d="M48.343 24.6667C48.5922 25.7603 48.718 26.8784 48.718 28H33.718V13C37.117 13 40.4151 14.1543 43.0722 16.2739C45.7293 18.3935 47.5877 21.3527 48.343 24.6667ZM44.898 24.6667C44.3444 22.8101 43.3372 21.1206 41.9673 19.7507C40.5974 18.3808 38.9079 17.3736 37.0514 16.82V24.6667H44.898Z" fill="#CCCCD6" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.718 34.5002C12.718 32.3222 13.2086 30.1722 14.1535 28.2098C15.0983 26.2474 16.4731 24.5231 18.1757 23.1649C19.8783 21.8066 21.8649 20.8494 23.9882 20.3643C26.1115 19.8792 28.3167 19.8786 30.4402 20.3626V31.2779H41.3555C41.809 33.2678 41.8373 35.3311 41.4386 37.3327C41.0399 39.3344 40.2231 41.2293 39.0416 42.8935C37.8602 44.5578 36.3408 45.9538 34.5827 46.9905C32.8246 48.0271 30.8674 48.6809 28.8393 48.9091C26.8111 49.1373 24.7577 48.9348 22.8132 48.3147C20.8687 47.6947 19.077 46.6712 17.5553 45.3111C16.0335 43.951 14.8161 42.285 13.9825 40.422C13.1489 38.5591 12.7181 36.5411 12.718 34.5002ZM38.18 34.5002H27.218V23.5381C25.0499 23.5381 22.9305 24.181 21.1279 25.3855C19.3252 26.5901 17.9201 28.3021 17.0905 30.3052C16.2608 32.3082 16.0437 34.5123 16.4666 36.6387C16.8896 38.7652 17.9337 40.7184 19.4667 42.2515C20.9998 43.7846 22.953 44.8286 25.0794 45.2516C27.2059 45.6746 29.41 45.4575 31.413 44.6278C33.416 43.7981 35.1281 42.3931 36.3326 40.5904C37.5371 38.7877 38.18 36.6682 38.18 34.5002Z" fill="#CCCCD6" />
    </svg>),
    text: "No Equity Confusion",
  },
  {
    icon: (<svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.718 0.5C47.2866 0.5 60.718 13.9315 60.718 30.5C60.718 47.0685 47.2866 60.5 30.718 60.5C14.1495 60.5 0.718018 47.0685 0.718018 30.5C0.718018 13.9315 14.1495 0.5 30.718 0.5Z" stroke="#B2B2C1" />
      <path d="M45.218 16V24.7879L42.5817 22.1515L19.7332 45L16.218 41.4848L39.0665 18.6364L36.4301 16H45.218ZM39.9453 44.1212C38.5469 44.1212 37.2057 43.5657 36.2169 42.5769C35.2281 41.588 34.6726 40.2469 34.6726 38.8485V35.3333C34.6726 33.9349 35.2281 32.5938 36.2169 31.605C37.2057 30.6161 38.5469 30.0606 39.9453 30.0606C41.3437 30.0606 42.6848 30.6161 43.6737 31.605C44.6625 32.5938 45.218 33.9349 45.218 35.3333V38.8485C45.218 40.2469 44.6625 41.588 43.6737 42.5769C42.6848 43.5657 41.3437 44.1212 39.9453 44.1212ZM39.9453 33.5758C39.4792 33.5758 39.0321 33.7609 38.7025 34.0905C38.3729 34.4201 38.1877 34.8672 38.1877 35.3333V38.8485C38.1877 39.3146 38.3729 39.7617 38.7025 40.0913C39.0321 40.4209 39.4792 40.6061 39.9453 40.6061C40.4114 40.6061 40.8585 40.4209 41.1881 40.0913C41.5177 39.7617 41.7029 39.3146 41.7029 38.8485V35.3333C41.7029 34.8672 41.5177 34.4201 41.1881 34.0905C40.8585 33.7609 40.4114 33.5758 39.9453 33.5758ZM22.3695 30.0606C20.9711 30.0606 19.63 29.5051 18.6412 28.5163C17.6523 27.5274 17.0968 26.1863 17.0968 24.7879V21.2727C17.0968 19.8743 17.6523 18.5332 18.6412 17.5443C19.63 16.5555 20.9711 16 22.3695 16C23.7679 16 25.1091 16.5555 26.0979 17.5443C27.0867 18.5332 27.6423 19.8743 27.6423 21.2727V24.7879C27.6423 26.1863 27.0867 27.5274 26.0979 28.5163C25.1091 29.5051 23.7679 30.0606 22.3695 30.0606ZM22.3695 19.5152C21.9034 19.5152 21.4563 19.7003 21.1267 20.0299C20.7971 20.3595 20.612 20.8066 20.612 21.2727V24.7879C20.612 25.254 20.7971 25.7011 21.1267 26.0307C21.4563 26.3603 21.9034 26.5455 22.3695 26.5455C22.8357 26.5455 23.2827 26.3603 23.6123 26.0307C23.9419 25.7011 24.1271 25.254 24.1271 24.7879V21.2727C24.1271 20.8066 23.9419 20.3595 23.6123 20.0299C23.2827 19.7003 22.8357 19.5152 22.3695 19.5152Z" fill="#CCCCD6" />
    </svg>),
    text: "Get Your Margin Bonus",
  },
];

const BonusSection = ({ setIsOpen }) => {
  return (
    <section className="bg-[#000032] text-white py-20  relative overflow-hidden">
      <div className=" container mx-auto">
        {/* Optional background graphic layer */}
        <div className="absolute inset-0 opacity-10 z-0">
          <img
            src="/Group.png" // replace with your faint chart graphic
            alt="Background chart"
            className=" h-full object-contain"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-[21px] md:text-3xl lg:text-[48px] font-semibold text-[#D9C3AA] leading-tight">
            {HEADING}
          </h2>

          <p className="text-base md:text-lg xl:text-[22px] xl:leading-8 text-[#FFFFFF] mt-6 leading-relaxed">
            {DESCRIPTION_1}
          </p>

          <p className="text-base md:text-lg xl:text-[22px] xl:leading-8 text-[#FFFFFF] mt-6 mb-10 leading-relaxed">
            {DESCRIPTION_2}
          </p>

          <p className="text-lg md:text-xl xl:text-[32px] font-semibold text-[#C39F77] mt-3">
            {DESCRIPTION_3}
          </p>

          {/* Benefit items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-10 text-center">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="text-[#E7C494]">{item.icon}</div>
                <span className="text-xs sm:text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="button">
            <div className='flex flex-row items-center justify-center mt-2'>
              <button className="bg-gradient-to-r  from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-semibold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(true)}>
                {BUTTON_TEXT}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
