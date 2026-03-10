import Image from "next/image";
import Link from "next/link";
import CopyRight from "./CopyRight";

export default function Footer() {
  const socialLinks = [
    { href: "https://www.facebook.com/GTCFXGlobalTradeCapital", label: "Facebook", icon: "facebook" },
    { href: "https://www.instagram.com/gtcfxofficial/", label: "Instagram", icon: "instagram" },
    { href: "https://x.com/GTC_fx", label: "X", icon: "x" },
    { href: "https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA", label: "YouTube", icon: "youtube" },
    { href: "https://linkedin.com/company/gtcfx-official", label: "LinkedIn", icon: "linkedin" },
    { href: "https://www.tiktok.com/@gtcgroup_official", label: "TikTok", icon: "tiktok" },
    { href: "https://t.me/gtc_vip_signal", label: "Telegram", icon: "telegram" },
  ];

  return (
    <>
    <footer className="bg-gradient-to-r from-[#1F2F89] to-[#071145] text-white">
      <div className="mx-auto max-w-7xl py-8 md:py-10 px-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <h2 className="text-[20px] leading-none sm:text-[25px] md:text-[30px] font-extrabold tracking-tight uppercase text-center md:text-left">
              Trade, Invest &amp; Partner
            </h2>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between xl:gap-10">
            

              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-b from-[#C38A45] to-[#9D682F] text-white shadow-[0_6px_14px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <SocialIcon type={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/20" />

          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between xl:flex-1">
              <div className="flex justify-center md:justify-start">
                <Link href="/" aria-label="GTCFX">
                  <Image
                    src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                    width={170}
                    height={62}
                    alt="GTCFX official logo"
                    className="h-auto w-[150px] sm:w-[170px]"
                    priority
                  />
                </Link>
              </div>

       
            </div>

           <div className="flex gap-3 flex-row sm:items-center sm:justify-center xl:justify-end flex-wrap">

  {/* App Store */}
  <a
    href="https://apps.apple.com/ae/app/gtc-go/id6753007277"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download on the App Store"
    className="transition duration-300 hover:opacity-90"
  >
    <img
      src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email/app-stoe.webp"
      alt="Download on the App Store"
      className="h-[32px] md:h-[42px] w-auto"
      draggable={false}
    />
  </a>

  {/* Google Play */}
  <a
    href="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get it on Google Play"
    className="transition duration-300 hover:opacity-90"
  >
    <img
      src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email/google-play.webp"
      alt="Get it on Google Play"
      className="h-[32px] md:h-[42px] w-auto"
      draggable={false}
    />
  </a>

  {/* APK */}
  <a
    href="https://file.mygtc.app/app/app-release-go-2.9.1.apk"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download APK"
    className="transition duration-300 hover:opacity-90"
  >
    <img
      src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email/apk-file.webp"
      alt="Download APK"
      className="h-[32px] md:h-[42px] w-auto"
      draggable={false}
    />
  </a>

</div>
          </div>

          <div className="h-px w-full bg-white/20" />

          <div className="space-y-4 pt-2 text-[11px] leading-[1.8] text-white/90 md:text-[12px]">
            <p>
              This website is owned and operated by GTC Global SA (Pty) Ltd, a private limited company
              incorporated in South Africa (Company Number: 2020/810937/07) and licensed by the Financial
              Sector Conduct Authority of South Africa (FSP No. 51545) to operate as an Intermediary.
              Registered Address: 18 Cavendish Road, Claremont, Cape Town, Western Cape, 7708, South
              Africa. The financial services and products promoted on this website are offered by GTC
              Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services
              Commission of the Republic of Vanuatu (Company License Number: 40354). Registered Address:
              1/Floor, B&amp;P House, Kumul Highway, Port Vila, Vanuatu.
            </p>

            <p>
              <span  className="text-[#D79A57] pr-1">
                GTC Global SA (Pty) Ltd and GTC Global Trade Capital Co. Limited 
              </span>
              are part of the GTC
              Financial Group which comprises a network of entities across the globe.
            </p>

            <p>
              Investing in derivative products carries significant risks and may not be suitable for all
              investors. The use of leverage in these instruments can increase both the level of risk and
              potential for losses. Before making any decision to engage in foreign exchange trading or
              Contracts for Difference (CFDs), it is essential to carefully consider your investment
              objectives, level of experience, and risk tolerance. You should only invest funds that you
              can afford to lose. We strongly encourage you to educate yourself thoroughly on the
              associated risks and, if you have any questions, seek advice from an independent financial
              or tax advisor.
            </p>

            <p>
                <span  className="text-[#D79A57] pr-1">GTC Global SA (Pty) Ltd and GTC Global Trade Capital Co. Limited</span>do not provide services to
              individuals residing in specific jurisdictions and/or jurisdictions where distribution of
              such services would be contrary to local law or regulations.
            </p>

            <p>
              Each entity within the GTC Financial Group operates independently. The financial products
              and services offered on this website are provided solely by GTC Global Trade Capital Co.
              Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <CopyRight />
    </>
  );
}

function SocialIcon({ type }) {
  switch (type) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.3v3H10v8h3.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 1.8A2.4 2.4 0 1 0 14.4 12 2.4 2.4 0 0 0 12 9.6Z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M18.9 3H21l-6.5 7.4L22 21h-5.9l-4.6-6-5.2 6H4.2l7-8L2 3h6l4.2 5.5L18.9 3Zm-1 16.3h1.2L7.3 4.6H6.1l11.8 14.7Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M23 12s0-3.1-.4-4.6a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.5.3A3 3 0 0 0 1.4 7.4C1 8.9 1 12 1 12s0 3.1.4 4.6a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.5-.3a3 3 0 0 0 2.1-2.1c.4-1.5.4-4.6.4-4.6ZM10 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7.04 2.02 2.02 0 0 0 5.25 3ZM20.44 12.5c0-3.17-1.7-4.65-3.96-4.65-1.83 0-2.65 1-3.1 1.7V8.5H10V20h3.38v-6.17c0-1.62.31-3.18 2.32-3.18 1.98 0 2 1.85 2 3.29V20H21V12.5h-.56Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M15.7 3c.3 2 1.4 3.4 3.3 4v2.6c-1.3 0-2.5-.4-3.5-1V15a6 6 0 1 1-6-6c.3 0 .5 0 .8.1v2.7a3.4 3.4 0 1 0 2.8 3.3V3h2.6Z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M21.4 4.6 18.2 19c-.2 1-.8 1.2-1.7.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 9-8.1c.4-.4-.1-.6-.6-.3l-11 6.9-4.7-1.5c-1-.3-1-1 .2-1.5L19.5 3c.9-.3 1.7.2 1.9 1.6Z" />
        </svg>
      );
    default:
      return null;
  }
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
      <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85A1.5 1.5 0 0 1 3 20.5Zm13.81-5.38-10.76 6.22 8.49-8.49 2.27 2.27Zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31ZM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49Z" />
    </svg>
  );
}

