'use client';

const TRADE_BROKER = {
  heading: "Trade Gold with a Broker You Can Actually Trust",
  desc: "When it comes to trading gold, you're going to want a broker that understands you, is licensed and regulated in multiple respected jurisdictions, and has a track record for excellence. Here's how we give you confidence to trade.",
  item1: "Licensed by the UAE's SCA, Mauritius' FSC, and South Africa's FSCA.",
  item2: "Headquartered in Dubai with nearly 1 million serviced traders.",
  item3: "World-class support with a real human touch.",
  item4: "Customer-first culture where service is strategy.",
  subTitle: "Switch to a broker that allows you to trade gold your way!",
  btnText: "Trade Gold",
};

export default function HeroTrust({ setIsOpen, page = "UAE" }) {
    return (
        <section className="relative bg-gradient-to-r from-[#293794] to-[#000021]">
            <div className="mx-auto container py-10 md:py-16">
                {/* Top row */}
                <div className="grid gap-10 items-center md:gap-12 md:grid-cols-2">
                    {/* Left: heading + intro */}
                    <div className="max-w-[560px]">
                        <h2
                            className="font-extrabold tracking-tight
                         text-[#C39F77] 
                         text-[24px] leading-[30px]
                         md:text-[34px] md:leading-[42px]
                         xl:text-[36px] xl:leading-[44px]"
                        >
                            {TRADE_BROKER.heading}
                        </h2>

                        <p className="mt-5 max-w-[520px] text-[16px] leading-[22px] text-[#fff]">
                            {TRADE_BROKER.desc}
                        </p>
                    </div>

                    {/* Right: bullets */}
                    <div className="md:pl-2">
                        <ul className="list-disc pl-[32px] md:pl-0 marker:text-[#E1CFBB] text-[18px] leading-[22px] text-[#fff] space-y-2">
                            <li> {TRADE_BROKER.item1}</li>
                            <li>{TRADE_BROKER.item2}</li>
                            <li>{TRADE_BROKER.item3}</li>
                            <li>{TRADE_BROKER.item4}</li>
                        </ul>
                    </div>
                </div>

                {/* Centered tagline + CTA */}
                <div className="pt-8 md:pt-16 text-center">
                    <p className="font-extrabold text-[22px]  text-left md:text-center leading-[28px] md:text-[30px] md:leading-[34px] text-[#fff]">
                        {TRADE_BROKER.subTitle}
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 inline-flex w-full sm:w-fit items-center justify-center
                         h-[42px] px-5 rounded-[10px]
                         text-white text-[16px] font-semibold
                         bg-gradient-to-b from-[#E1CFBB] to-[#956D42]
                         shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:opacity-95 transition"
                    >
                        {TRADE_BROKER.btnText}
                    </button>
                </div>
            </div>
        </section>
    );
}
