"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function GetStartedButton({ text = "Get Started" }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const partnerId =
    searchParams.get("partner_id") ||
    searchParams.get("ib") ||
    searchParams.get("ref");

  const handleClick = () => {
    const registerUrl = partnerId
      ? `/register?partner_id=${partnerId}`
      : `/register`;

    router.push(registerUrl);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] w-full sm:w-fit justify-center flex items-center gap-2
      cursor-pointer
      
      text-sm font-bold md:text-base xl:text-lg text-white
      px-8 py-3 rounded-xl transition-all duration-300 mt-8"
    >
      {text}

      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
      </svg>
    </button>
  );
}