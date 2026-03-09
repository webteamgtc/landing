'use client';

import Image from 'next/image';

const TRADE_GOLD_SECTION = {
  heading: "Trade Gold with GTC & Get a Bonus That Boosts Your Margin, Not Your Hopes",
  desc: "Forget losable or tricky bonuses when trading gold. When you switch to GTC, deposit $500 or more, and trade gold, we'll match your deposit with a Margin Bonus. You get extra trading margin with real cashback rewards.",
  title1: "Trade gold & hit the cashback target. Withdraw your reward.",
  card1: { title: "Great <br/> Bonus" },
  card2: { title: "No Hidden <br/> Terms" },
  card3: { title: "No Equity <br/> Confusion" },
  card4: { title: "Get Cashback <br/> Too" },
  btnText: "Trade Gold",
};

export default function GoldBonus({ setIsOpen }) {
    return (
        <section className="relative bg-white">
            <div className="mx-auto container">
                <div className="grid items-end gap-10 md:gap-14 md:grid-cols-2 pt-10 md:pt-16">
                    {/* LEFT: Artwork */}
                    <div className="order-1 md:order-none flex justify-center md:justify-start">
                        <div className="relative w-[330px] sm:w-[400px] md:w-[430px] lg:w-[470px]">
                            {/* Replace src with your asset path */}
                            <Image
                                src="/trade-gold/section3.svg"
                                alt="Gold coins"
                                width={940}
                                height={940}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT: Copy */}
                    <div className="max-w-[560px] pb-10 md:ml-auto">
                        <h1 className="text-[#000032] font-extrabold tracking-tight
                           text-[24px] leading-[30px]
                           md:text-[38px] md:leading-[36px]
                           xl:text-[32px] xl:leading-[40px] ">
                            {TRADE_GOLD_SECTION.heading}

                        </h1>

                        <p className="mt-3 text-[16px] leading-[24px] text-[#4D4D70]">
                            {TRADE_GOLD_SECTION.desc}
                        </p>

                        <p className="mt-6 md:text-[22px] text-[16px] leading-[20px] md:leading-[28px] font-bold text-[#4D4D70]">
                            {TRADE_GOLD_SECTION.title1}
                        </p>

                        {/* 2×2 Feature list */}
                        <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-8 text-[#0E1443] text-[14px] leading-[20px]">
                            <Feature icon={"/trade-gold/icon1.svg"} label={TRADE_GOLD_SECTION.card1.title} />
                            <Feature icon={"/trade-gold/icon2.svg"} label={TRADE_GOLD_SECTION.card2.title} />
                            <Feature icon={"/trade-gold/icon3.svg"} label={TRADE_GOLD_SECTION.card3.title} />
                            <Feature icon={"/trade-gold/icon4.svg"} label={TRADE_GOLD_SECTION.card4.title} />
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-6 inline-flex w-full sm:w-fit items-center justify-center
                         h-[42px] px-5 rounded-[10px]
                         text-white text-[16px] font-semibold
                         bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                         shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                        >
                            {TRADE_GOLD_SECTION.btnText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- small feature item ---------- */
function Feature({ icon, label }) {
    return (
        <div className="flex flex-col gap-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6B5AE0]">
                <img src={icon} alt="" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: label }}
                className=' text-[#101828] md:text-[20px] text-[18px] leading-[26px] font-bold' />
        </div>
    );
}

