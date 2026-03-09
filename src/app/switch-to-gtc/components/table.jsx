'use client';
import Button from "../../profilt-on-every-trade/components/Button";

const ComparisonTable = ({ setIsOpen, data, title, butText }) => {
    return (
        <section className="relative text-white py-8 md:py-20 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-white z-0" />

            {/* Faded Background Image at Bottom Center */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-20">
                <img
                    src="/ib/layer5.webp" // ✅ change this path if needed
                    alt="Decorative background"
                    className="w-full h-auto object-contain object-bottom"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 justify-center text-center px-4 md:px-0">
                <h2 className="text-[22px] md:text-3xl xl:text-[40px] font-bold text-[#000032] ltr:max-w-4xl rtl:max-w-4xl mx-auto leading-normal md:leading-tight px-5 md:px-0">
                    {title || ""}
                </h2>

                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e0e4f6]">
                    <table className="w-full text-sm md:text-base text-[#1e2c54]">
                        <thead>
                            <tr className="bg-[#f1f4fb] font-semibold text-[#1e2c54]">
                                <th className="py-4 px-5 ltr:text-left rtl:text-right">Feature</th>
                                <th className="py-4 px-5 bg-gray-50 text-center">Your Broker</th>
                                <th className="py-4 px-5 bg-gray-50 text-center">
                                    <img src="/logo-blue.svg" alt="GTC Logo" className="h-8 inline-block" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Average EURUSD Spread", "3 pips", "0 pips"],
                                ["Leverage", "1:500", "1:2000"],
                                ["Withdrawal Time", "24 hours", "Instant - 10 hours max"],
                                ["Scalping Rule", "3 minutes", "1 minute"],
                                ["Slippage During News", "Increased", "Unchanged"],
                                ["Support Quality", "Scripted replies", "Real human care"],
                                [
                                    "Loyalty Rewards",
                                    <span key="broker-x" className="text-red-500 flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>,
                                    <span key="gtc-check" className="text-green-600 flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        GTC VIP + Margin Bonus
                                    </span>,
                                ],
                            ].map(([feature, broker, gtc], idx) => (
                                <tr key={idx} className="border-t border-[#e0e4f6]">
                                    <td className="py-4 ltr:text-left rtl:text-right font-medium bg-gray-100 px-5">{feature}</td>
                                    <td className="py-4 text-center px-5">{broker}</td>
                                    <td className="py-4 text-center px-5">{gtc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center md:mt-2">

                    <button className="bg-gradient-to-r mt-2  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
                    >
                        {butText}
                        <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default ComparisonTable;
