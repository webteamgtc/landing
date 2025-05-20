import React from 'react'
import GoldBanner from '../components/GoldTrade/GoldBanner';
import BannerWithFeatureBar from '../components/GoldTrade/BannerWithFeatureBar';
import GoldOpportunitySection from '../components/GoldTrade/GoldOpportunitySection';

export const metadata = {
  title: "Trade Gold with Tight Spreads & Fast Execution | GTC",
  description: "Join over 985,000 traders choosing GTC for reliable, low-spread gold trading. Sign up in minutes and start trading today!",
};

const page = () => {
  return (
    <>
    <GoldBanner />
    <BannerWithFeatureBar />
    <GoldOpportunitySection />
    </>
  )
}

export default page