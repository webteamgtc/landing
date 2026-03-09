"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Landing2Header from "../../profilt-on-every-trade/components/Header";

const BANNER = {
  subTitle: "Your Brokerage Profits from Your Trading Pain.",
  title1: "You Deserve Better Than 3 Pip Spreads.",
  title2: "Trade Without the Tricks.",
  title3: "Every Trade Should Count. Not Just Theirs.",
  title4: "Your Broker's Holding You Back.",
  para1: "Make the move to a brokerage that actually puts you first. Faster withdrawals, tighter spreads, fairer conditions. You trade & we'll take care of the rest.",
  cta: "Switch Now",
  list: {
    item1: "2 Pip Spread Instead of 3",
    item2: "Instant & Same Day Withdrawals",
    item3: "Scalping Allowed After 60 Seconds",
    item4: "No Slippage During News Events",
    item5: "Real Margin Bonus with Real Cashback",
    item6: "Multi-Regulated Brokerage SCA & FSC",
  },
  tableHeading: "Comparison Snapshot Your Broker vs GTC",
};

const HeroSection = ({ setIsOpen }) => {
  const data = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_8006_38535)">
            <circle cx="20" cy="19" r="15.75" stroke="white" strokeWidth="0.5" shape-rendering="crispEdges" />
          </g>
          <path d="M17.3695 20.5783H14.2133C13.6326 20.5783 13.1614 21.0495 13.1614 21.6302V26.8906C13.1614 27.4713 13.6326 27.9429 14.2133 27.9429H17.3695C17.9502 27.9429 18.4218 27.4713 18.4218 26.8906V21.6302C18.4218 21.0495 17.9502 20.5783 17.3695 20.5783ZM14.2133 26.8906V21.6302H17.3695V26.8906H14.2133ZM25.7865 20.5783H22.6299C22.0496 20.5783 21.578 21.0495 21.578 21.6302V26.8906C21.578 27.4713 22.0496 27.9429 22.6299 27.9429H25.7865C26.3667 27.9429 26.8384 27.4713 26.8384 26.8906V21.6302C26.8384 21.0495 26.3667 20.5783 25.7865 20.5783ZM22.6299 26.8906V21.6302H25.7865V26.8906H22.6299ZM20.526 27.4166C20.526 27.7071 20.2902 27.9429 19.9997 27.9429C19.7091 27.9429 19.4737 27.7071 19.4737 27.4166C19.4737 27.126 19.7091 26.8906 19.9997 26.8906C20.2902 26.8906 20.526 27.126 20.526 27.4166ZM17.3695 10.057H14.2133C13.6326 10.057 13.1614 10.5286 13.1614 11.1093V16.3698C13.1614 16.95 13.6326 17.4217 14.2133 17.4217H17.3695C17.9502 17.4217 18.4218 16.95 18.4218 16.3698V11.1093C18.4218 10.5286 17.9502 10.057 17.3695 10.057ZM17.3695 16.3698H14.2133V11.1093H17.3695V16.3698ZM26.6836 14.112L24.5802 16.2154C24.3746 16.4211 24.0418 16.4211 23.8361 16.2154C23.6309 16.0102 23.6309 15.677 23.8361 15.4718L25.0424 14.2655H19.9997C19.7091 14.2655 19.4737 14.0301 19.4737 13.7396C19.4737 13.449 19.7091 13.2136 19.9997 13.2136H25.0424L23.8361 12.0074C23.6309 11.8017 23.6309 11.4689 23.8361 11.2633C24.0418 11.058 24.3746 11.058 24.5802 11.2633L26.6836 13.3671C26.8897 13.5723 26.8884 13.9081 26.6836 14.112Z" fill="white" />
          <defs>
            <filter id="filter0_d_8006_38535" x="-2.08616e-07" y="0.333333" width="40.5333" height="40.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="0.266667" dy="1.6" />
              <feGaussianBlur stdDeviation="2.13333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8006_38535" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8006_38535" result="shape" />
            </filter>
          </defs>
        </svg>
      ),
      title: BANNER.list.item1,
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_8006_38541)">
            <circle cx="20.2" cy="19" r="15.75" stroke="white" strokeWidth="0.5" shape-rendering="crispEdges" />
          </g>
          <path d="M17.5556 20.3232L17.4358 20.3123C15.908 20.1735 15.1441 20.104 14.9015 19.5814C14.6588 19.0588 15.0987 18.4304 15.9785 17.1736L19.5612 12.0554C20.1424 11.2252 20.433 10.81 20.6836 10.8983C20.9342 10.9866 20.9005 11.4922 20.8331 12.5034L20.6299 15.5519C20.5685 16.4721 20.5379 16.9322 20.8023 17.2419C21.0667 17.5515 21.5259 17.5933 22.4444 17.6768L22.5642 17.6877C24.092 17.8265 24.8559 17.896 25.0985 18.4186C25.3412 18.9412 24.9013 19.5696 24.0215 20.8264L20.4388 25.9446C19.8576 26.7748 19.567 27.19 19.3164 27.1017C19.0658 27.0134 19.0995 26.5078 19.1669 25.4966L19.3701 22.4481C19.4315 21.5279 19.4621 21.0678 19.1977 20.7581C18.9333 20.4485 18.4741 20.4067 17.5556 20.3232Z" stroke="white" strokeWidth="1.25" />
          <defs>
            <filter id="filter0_d_8006_38541" x="0.199951" y="0.333333" width="40.5333" height="40.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="0.266667" dy="1.6" />
              <feGaussianBlur stdDeviation="2.13333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8006_38541" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8006_38541" result="shape" />
            </filter>
          </defs>
        </svg>

      ),
      title: BANNER.list.item2,
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_8006_38547)">
            <circle cx="20.3999" cy="19" r="15.75" stroke="white" strokeWidth="0.5" shape-rendering="crispEdges" />
          </g>
          <path d="M13.594 12.1941C12.0194 13.7687 11.0395 15.8405 10.8212 18.0566C10.603 20.2727 11.1599 22.4958 12.397 24.3474C13.6341 26.1989 15.475 27.5641 17.6059 28.2106C19.7368 28.857 22.0259 28.7445 24.0832 27.8923C26.1405 27.0402 27.8387 25.5011 28.8884 23.5372C29.9381 21.5733 30.2744 19.3063 29.84 17.1223C29.4055 14.9382 28.2273 12.9724 26.5059 11.5598C24.7846 10.1471 22.6267 9.375 20.3999 9.375" stroke="white" strokeWidth="1.25" stroke-linecap="round" />
          <path d="M20.3999 19L15.3999 14" stroke="white" strokeWidth="1.25" stroke-linecap="round" />
          <path d="M20.3999 9.5V12" stroke="white" strokeWidth="1.25" stroke-linecap="round" />
          <path d="M29.3999 19L27.3999 19" stroke="white" strokeWidth="1.25" stroke-linecap="round" />
          <path d="M20.3999 26V28" stroke="white" strokeWidth="1.25" stroke-linecap="round" />
          <path d="M13.3999 19L11.3999 19" stroke="white" strokeWidth="1.25" stroke-linecap="round" />
          <defs>
            <filter id="filter0_d_8006_38547" x="0.399902" y="0.333333" width="40.5333" height="40.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="0.266667" dy="1.6" />
              <feGaussianBlur stdDeviation="2.13333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8006_38547" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8006_38547" result="shape" />
            </filter>
          </defs>
        </svg>

      ),
      title: BANNER.list.item3,
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_8006_38552)">
            <circle cx="20.6" cy="19" r="15.75" stroke="white" strokeWidth="0.5" shape-rendering="crispEdges" />
          </g>
          <g clip-path="url(#clip0_8006_38552)">
            <path d="M20.6 28.116C19.5067 28.116 18.468 27.9487 17.484 27.614C16.5 27.2793 15.6393 26.821 14.902 26.239C14.1633 25.657 13.5757 24.9697 13.139 24.177C12.7023 23.3843 12.484 22.5307 12.484 21.616V19.808L15.215 21.866L13.819 23.262C14.3023 24.3813 15.101 25.278 16.215 25.952C17.329 26.6267 18.624 27.0087 20.1 27.098V18.077H17.1V17.077H20.1V14.825C19.5293 14.685 19.0533 14.393 18.672 13.949C18.2907 13.505 18.1 12.9837 18.1 12.385C18.1 11.6923 18.3433 11.1023 18.83 10.615C19.318 10.1283 19.908 9.88501 20.6 9.88501C21.292 9.88501 21.882 10.1283 22.37 10.615C22.8567 11.1023 23.1 11.6923 23.1 12.385C23.1 12.9837 22.9093 13.505 22.528 13.949C22.1467 14.3937 21.6707 14.6857 21.1 14.825V17.077H24.1V18.077H21.1V27.098C22.576 27.0087 23.874 26.63 24.994 25.962C26.114 25.294 26.9097 24.4003 27.381 23.281L25.984 21.865L28.715 19.808V21.615C28.715 22.5303 28.4967 23.3843 28.06 24.177C27.624 24.969 27.0367 25.656 26.298 26.238C25.5593 26.82 24.6983 27.2783 23.715 27.613C22.7317 27.9477 21.6933 28.1153 20.6 28.116ZM20.6 13.885C21.0113 13.885 21.3643 13.7377 21.659 13.443C21.953 13.149 22.1 12.7963 22.1 12.385C22.1 11.973 21.953 11.62 21.659 11.326C21.3643 11.032 21.0113 10.885 20.6 10.885C20.1887 10.885 19.8357 11.032 19.541 11.326C19.2463 11.62 19.0993 11.973 19.1 12.385C19.1007 12.797 19.2477 13.1497 19.541 13.443C19.8343 13.7363 20.1873 13.8837 20.6 13.885Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_d_8006_38552" x="0.599975" y="0.333333" width="40.5333" height="40.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="0.266667" dy="1.6" />
              <feGaussianBlur stdDeviation="2.13333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8006_38552" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8006_38552" result="shape" />
            </filter>
            <clipPath id="clip0_8006_38552">
              <rect width="24" height="24" fill="white" transform="translate(8.59998 7)" />
            </clipPath>
          </defs>
        </svg>

      ),
      title: BANNER.list.item4,
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_8008_33695)">
            <circle cx="20.8" cy="19" r="15.75" stroke="white" strokeWidth="0.5" shape-rendering="crispEdges" />
          </g>
          <g clip-path="url(#clip0_8008_33695)">
            <path d="M21.2384 12.8688L22.8659 15.8178C22.9373 15.9473 23.0571 16.0398 23.1954 16.0721L26.3415 16.8032C26.7204 16.8914 26.8702 17.3796 26.6121 17.6876L24.4714 20.2414C24.3771 20.3538 24.3316 20.5027 24.3456 20.6527L24.6626 24.0538C24.7011 24.4635 24.3092 24.7656 23.9537 24.6L21.0032 23.229C20.8734 23.1688 20.7257 23.1688 20.5959 23.229L17.6454 24.6C17.29 24.7651 16.8981 24.4635 16.9365 24.0538L17.2535 20.6527C17.2675 20.5032 17.2221 20.3538 17.1277 20.2414L14.987 17.6876C14.7289 17.3801 14.8787 16.8914 15.2576 16.8032L18.4037 16.0721C18.542 16.0398 18.6618 15.9479 18.7332 15.8178L20.3607 12.8688C20.5569 12.5135 21.0407 12.5135 21.2369 12.8688H21.2384Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.8002 7.70972V9.96778" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.8002 28.0323V30.2904" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.0422 9.22205L24.9938 11.178" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6066 26.8221L15.5582 28.778" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29.8793 13.3549L28.0631 14.4839" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.5365 23.5161L11.7203 24.6451" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29.8793 24.6451L28.0631 23.5161" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.5367 14.4839L11.7205 13.3549" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.0422 28.778L24.9938 26.8221" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6066 11.178L15.5582 9.22205" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M31.2838 19H29.187" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.4129 19H10.3162" stroke="white" strokeWidth="0.6" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <filter id="filter0_d_8008_33695" x="0.800049" y="0.333333" width="40.5333" height="40.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="0.266667" dy="1.6" />
              <feGaussianBlur stdDeviation="2.13333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8008_33695" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8008_33695" result="shape" />
            </filter>
            <clipPath id="clip0_8008_33695">
              <rect width="21.6667" height="23.3333" fill="white" transform="translate(9.96667 7.33337)" />
            </clipPath>
          </defs>
        </svg>

      ),
      title: BANNER.list.item5,
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_8006_38570)">
            <circle cx="20" cy="19" r="15.75" stroke="white" strokeWidth="0.5" shape-rendering="crispEdges" />
          </g>
          <path d="M18.75 19.3688L17.1312 17.75L16.25 18.6312L18.75 21.1312L23.75 16.1312L22.8688 15.25L18.75 19.3688Z" fill="white" />
          <path d="M20 27.75L16.14 25.6919C15.0395 25.1066 14.1192 24.2325 13.4779 23.1637C12.8366 22.0948 12.4985 20.8715 12.5 19.625V11.5C12.5 11.1685 12.6317 10.8505 12.8661 10.6161C13.1005 10.3817 13.4185 10.25 13.75 10.25H26.25C26.5815 10.25 26.8995 10.3817 27.1339 10.6161C27.3683 10.8505 27.5 11.1685 27.5 11.5V19.625C27.5015 20.8715 27.1634 22.0948 26.5221 23.1637C25.8808 24.2325 24.9605 25.1066 23.86 25.6919L20 27.75ZM13.75 11.5V19.625C13.7493 20.6448 14.0262 21.6456 14.5509 22.52C15.0757 23.3945 15.8285 24.1096 16.7288 24.5887L20 26.3331L23.2713 24.5894C24.1716 24.1102 24.9245 23.3949 25.4492 22.5204C25.974 21.6458 26.2508 20.6449 26.25 19.625V11.5H13.75Z" fill="white" />
          <defs>
            <filter id="filter0_d_8006_38570" x="-2.08616e-07" y="0.333333" width="40.5333" height="40.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="0.266667" dy="1.6" />
              <feGaussianBlur stdDeviation="2.13333" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8006_38570" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8006_38570" result="shape" />
            </filter>
          </defs>
        </svg>

      ),
      title: BANNER.list.item6,
    }
  ]

  const headlines = [
    { heading: BANNER.title1 },
    { heading: BANNER.title2 },
    { heading: BANNER.title3 },
    { heading: BANNER.title4 },
  ];

   const [index, setIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('gtc_user_headline');
    if (stored !== null) {
      setIndex(Number(stored));
    } else {
      const randomIndex = Math.floor(Math.random() * headlines.length);
      localStorage.setItem('gtc_user_headline', randomIndex.toString());
      setIndex(randomIndex);
    }
  }, []);

  if (index === null) return null;

 

  return (
    <div className=" ">
      <section className="bg-[#010005] text-[#E5E5EA]  relative overflow-hidden">
      <Landing2Header className="container mx-auto z-10" />

        {/* Desktop Background Image Only */}
  <div className="hidden ltr:md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
    <Image
      src="/switch/banner-switch.webp"
      alt="Hero BG"
      fill
      className="object-cover object-right 3xl:object-contain"
      priority
    />
  </div>

   {/* Desktop Background Image Only */}
                <div className="hidden rtl:md:block absolute inset-0 z-0 rtl:scale-[1.0] origin-bottom-right hero-bg">
                  <Image
                    src="/switch/arabic.webp"
                    alt="Hero BG"
                    fill
                    className="object-cover object-left 3xl:object-contain"
                    priority
                  />
                </div>

        <div className="container py-16 md:py-28">
          <div className=" grid md:grid-cols-2 items-center gap-10 z-10 relative">
            {/* Left Column */}
            <div className="text-center ltr:md:text-left rtl:md:text-right flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-xl md:text-3xl xl:text-[32px] xl:leading-10 font-light w-60 ltr:md:w-sm rtl:md:w-md">
                {BANNER.subTitle}
              </h3>
              <h1 className="text-[35px] leading-tight md:text-[56px] xl:text-[76px] font-bold 2xl:text-[70px] 2xl:leading-tight bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text px-5 md:px-0">
                {headlines[index].heading}
              </h1>
              <div className="md:hidden relative w-full h-[300px]">
                <Image
                  src="/switch/passas.webp"
                  alt="Hero Image"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <p className="text-sm md:text-base xl:text-[22px]
               leading-relaxed max-w-xl py-5 md:py-0">
                {BANNER.para1}
              </p>
            </div>

          </div>

        {/* Bottom Feature Bar */}
          <div
            className="relative z-50 md:my-12 md:bg-gradient-to-r from-[#f0e7dd5c] to-[#d9c3aa82] py-5 px-4 md:px-10 rounded-[16px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-sm text-center text-white/90 gap-6 md:gap-0"
            style={{
              boxShadow: "1px 6px 16px 0px #00000080",
              backdropFilter: "blur(8px)"
            }}
          >
            {data?.map((item, idx) => (
              <div key={idx} className="px-2 flex flex-col text-white gap-2 items-center justify-center">
                <p>{item?.icon}</p>
                <span
                  className={`block text-xs xl:text-sm w-40 sm:w-40 xl:w-[140px] mx-auto line-clamp-2 ${
                    idx === data.length - 1 ? 'xl:min-w-[190px]' : ''
                  }`}
                >
                  {item?.title}
                </span>
              </div>
            ))}
          </div>

          <div className="relative pt-1 flex flex-col md:items-start items-center justify-center">
            <button className="bg-gradient-to-r  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-semibold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(true)}>
              {BANNER.cta}
              <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
              </svg>
            </button>
          </div>
        </div>

      </section >
    </div>
  );
};

export default HeroSection;