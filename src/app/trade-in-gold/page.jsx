"use client";
import { useState } from "react";
import HeroSection from './components/banner'
import PayCommission from "./components/payCommison";
import GoldBonus from "./components/goldBonus";
import HeroTrust from "./components/TrustSection";
import ArabicTestimonials from "./components/newTestomonial";
import HeroBetterWay from "./components/lastSection";
import Footer from "../components/Footer";

const TradeGoldPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-[#fff]">
                <HeroSection setIsOpen={setIsOpen} />
                <PayCommission
                    setIsOpen={setIsOpen}
                />
                <GoldBonus setIsOpen={setIsOpen} />
                <HeroTrust setIsOpen={setIsOpen} />
                <ArabicTestimonials setIsOpen={setIsOpen} />
                <HeroBetterWay setIsOpen={setIsOpen} />
                <Footer />
            </div>
      
      
        </>
    )
}

export default TradeGoldPage