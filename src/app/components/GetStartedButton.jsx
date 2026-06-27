"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { buildOneLinkUrl } from "./OneLinkButton";

export default function GetStartedButton({ text = "Get Started", isApp = false }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const trackingKeys = [
    "partner_id",
    "ib",
    "ref",
    "code",
    "partner_code",
    "deep_link_value",
    "af_xp",
    "pid",
    "c",
    "af_sub1",
    "deep_link_sub1",
    "af_dp",
  ];

  const handleClick = () => {
    if (isApp) {
      const oneLinkUrl = buildOneLinkUrl(searchParams);
      window.open(oneLinkUrl, "_blank", "noopener,noreferrer");
      return;
    }

    // Build registration URL preserving all tracking params
    const params = new URLSearchParams();
    for (const key of trackingKeys) {
      const value = searchParams.get(key);
      if (value) params.set(key, value);
    }
    const qs = params.toString();
    const registerUrl = qs ? `/create-account?${qs}` : "/create-account";
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