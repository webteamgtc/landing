'use client';

import Image from 'next/image';

const TRADE_TODAY = {
  heading: "Trade Gold the Better Way Today.",
  desc1: "It only takes a few minutes to open your GTC account and access everything we've talked about above.",
  desc2: "Say goodbye to the frustrations you're facing when trading gold with your current broker. Say hello to faster trades, bigger rewards, and real transparency.",
  btnText: "Trade Gold",
};

export default function HeroBetterWay({ setIsOpen, page = "UAE" }) {
    return (
        <section className="relative overflow-hidden md:bg-[#e8eaec] bg-gradient-to-r from-[#e8eaec]  to-[#edeff6]">
            {/* BG image on desktop/tablet (left side), fully visible */}
            <div className="hidden md:block absolute  inset-y-0 left-0 w-full z-0">
                <div className={page == "South Africa" ? "relative h-full max-w-1/2" : "relative h-full w-full"}>
                    <Image
                        src={page == "South Africa" ? "/trade-gold/za-footer.png" : "/trade-gold/footerbg.webp"}         // ensure this exists in /public/trade-gold/last.png
                        alt="Smiling trader holding gold bars"
                        fill
                        priority
                        sizes="(min-width: 1024px) 52vw, 100vw"
                        className="object-contain object-center" // show full image without cropping
                    />
                </div>
            </div>

            {/* Gentle fade on the right so text is always readable */}
            <div className="hidden md:block absolute inset-y-0 left-[52%] right-0 z-0 bg-gradient-to-r from-[#f1f5f9] via-red/70 to-[#fff]" />

            {/* Content; on md+ we pad-left so it doesn't overlap the image area */}
            <div className="relative z-10 container flex justify-end  flex-col md:flex-row mx-auto pt-8 md:py-16 md:pl-[56%] md:min-h-[420px]">
                <div className="max-w-[560px] text-center md:text-left">
                    <h1 className="text-[#0E1443] font-extrabold text-center md:text-left tracking-tight
                         text-[28px] leading-[34px]
                         md:text-[34px] md:leading-[42px]
                         xl:text-[36px] xl:leading-[44px]">
                        {TRADE_TODAY.heading}
                    </h1>

                    <p className="mt-3 text-[14px] leading-[22px] text-[#6E6E7A]">
                        {TRADE_TODAY.desc1}
                    </p>

                    <p className="mt-3 text-[14px] leading-[22px] text-[#6E6E7A]">
                        {TRADE_TODAY.desc2}
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 inline-flex h-[42px] w-full md:w-fit items-center justify-center
                       rounded-[10px] px-5 text-[16px] font-semibold text-white
                       bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                       shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                    >
                        {TRADE_TODAY.btnText}
                    </button>
                </div>

                {/* Mobile image: AFTER text */}
                <div className="mt-6 md:hidden">
                    <Image
                        src={page == "South Africa" ? "/trade-gold/za-footer.png" : "/trade-gold/footerbg.webp"}         // ensure this exists in /public/trade-gold/last.png
                        alt="Smiling trader holding gold bars"
                        width={900}
                        height={900}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
