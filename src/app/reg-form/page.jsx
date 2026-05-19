"use client";

import Image from "next/image";
import RegFormPanel from "./components/RegFormPanel";

const FEATURES = [
  {
    title: "Secure & Trusted",
    description: "Your funds and data are protected with top-tier security.",
    icon: (
      <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Advanced Tools",
    description: "Powerful trading tools and real-time market insights.",
    icon: (
      <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Global Markets",
    description: "Trade forex, stocks, commodities and more from one account.",
    icon: (
      <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function RegFormPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white lg:bg-[#14246e]">
      <div className="relative hidden lg:flex flex-1 min-h-screen flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/form-bg.webp')",
          }}
        />
  
        <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8 lg:p-8">
          <div>
            <Image
              src="/trade-gold/Logo.svg"
              alt="GTC"
              width={140}
              height={70}
              className="w-[120px] md:w-[220px] h-auto"
              priority
            />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[620px] mx-auto">
              <img
                src="/form-mobile.png"
                alt="GTC mobile app"
                className={`w-full max-h-[340px] lg:max-h-[520px] object-contain drop-shadow-2xl`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-auto">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm p-4 flex gap-3"
              >
                <div className="text-white/90">{feature.icon}</div>
                <div>
                  <h3 className="text-white text-sm font-semibold">{feature.title}</h3>
                  <p className="text-white/70 text-xs mt-1 leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%] xl:w-[36%] shrink-0 bg-white lg:rounded-l-[2rem] lg:shadow-2xl flex justify-center px-5 py-8 sm:px-6 md:p-10 lg:p-10 xl:p-12 ">
        <RegFormPanel />
      </div>
    </div>
  );
}
