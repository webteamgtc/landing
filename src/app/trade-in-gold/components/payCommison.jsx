'use client';

import Image from 'next/image';

const TRUSTED = {
  getHeading: (page) => `Trade Gold with a Broker that's Trusted in the ${page}`,
  para1: "Gold is serious business. So is trust.",
  getPara2: (page) => `GTC is licensed and regulated by multiple global authorities such as the UAE's SCA, Mauritius' FSC, South Africa's FSCA, and Vanuatu's VFSC. This gives traders complete peace of mind in ${page}, and the confidence they need when the Gold markets heat up.`,
  getPara2ZA: (page) => `GTC is licensed and regulated by multiple global authorities such as the UAE's SCA, Mauritius' FSC, South Africa's FSCA and Vanuatu's VFSC. This gives traders complete peace of mind in ${page}, and the confidence they need when the Gold markets heat up.`,
  getPara3: (page) => `Thousands of traders across ${page} trust GTC for raw pricing, fast withdrawals, and regulated peace of mind when it comes to trading gold.`,
  btnText: "Trade Gold",
};

export default function HeroTrusted({ country = 'COUNTRY', onCtaClick, setIsOpen, page = "UAE" }) {
    return (
        <section className="relative bg-white">
            <div className="mx-auto container ">
                <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] py-10 md:py-16">
                    {/* LEFT: Copy */}
                    <div className="max-w-[620px]">
                        <h1 className="text-[#000032] font-extrabold tracking-tight
                           text-[24px] leading-[34px]
                           md:text-[36px] md:leading-[44px]
                           xl:text-[40px] xl:leading-[48px]">

                            {TRUSTED.getHeading(page)}
                        </h1>

                        <p className="mt-3 text-[16px] leading-[22px] text-[#4D4D70]">
                            {TRUSTED.para1}

                        </p>
                        {page === "South Africa" ?
                            <p className="mt-4 text-[16px] leading-[22px] text-[#4D4D70] max-w-[560px]">
                                {TRUSTED.getPara2ZA(page)}
                            </p>
                            :
                            <p className="mt-4 text-[16px] leading-[22px] text-[#4D4D70] max-w-[560px]">
                                {TRUSTED.getPara2(page)}
                            </p>}

                        <p className="mt-3 text-[16px] leading-[22px] text-[#4D4D70] max-w-[560px]">
                            {TRUSTED.getPara3(page)}

                        </p>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-6 inline-flex w-full md:w-fit  items-center justify-center
                         h-[42px] px-5 rounded-[10px]
                         text-white text-[16px] font-semibold
                         bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                         shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                        >
                            {TRUSTED.btnText}

                        </button>
                    </div>

                    {/* RIGHT: Art (bars + nuggets) */}
                    <div className="relative w-full">

                        {/* Gold nuggets image */}
                        <div className="relative mx-auto w-full md:w-full">
                            <Image
                                src="/trade-gold/section2.svg"   // ⬅️ replace with your asset path
                                alt="Gold nuggets"
                                width={820}
                                height={560}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional top-right gold sliver (if you want the screenshot’s hint of gold) */}
            {/* <div className="pointer-events-none absolute -top-2 right-0 h-[36px] w-[220px] bg-gradient-to-r from-[#F5D485] to-[#A16B2E] opacity-90 clip-path-[polygon(20%_0,100%_0,100%_100%,0_100%)]" /> */}
        </section>
    );
}
