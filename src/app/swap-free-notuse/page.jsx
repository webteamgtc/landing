"use client";
import { useState } from "react";
import HeroSection from './components/banner'
import PayCommission from "./components/payCommison";
import IBTestimonials from "./components/testmonial";
import TradeSwitchSection from "./components/CtaSection";
import Footer from "../components/Footer";

const SwapFreePage = () => {

    return (
        <>
            <div className="bg-[#000032]">
                <HeroSection />
                <PayCommission
                    topTitle="A Forex Partnership Programme That"
                    bottomText="From real trader bonuses to marketing support and instant payouts, this is the FX Partner programme serious partners are switching to."
                    buttonText="Partner with GTC"
                />
            </div>
            <IBTestimonials />
            <TradeSwitchSection />
            <Footer />
        </>
    )
}
 
export default SwapFreePage