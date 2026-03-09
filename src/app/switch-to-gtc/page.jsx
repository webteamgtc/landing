"use client"
// app/landing/page.tsx

import HeroSection from './components/hero';
import ComparisonSection from './components/table';
import BonusSection from './components/bonusSection';
import TrustSection from './components/trustSection';
import TestimonialsSection from './components/testomonialSection';
import CTASection from './components/ctaSection';
import { useState } from 'react';
import Footer from '../components/Footer';
export const dynamic = 'force-static';


export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <>
      <HeroSection setIsOpen={setIsOpen} />
      <ComparisonSection data={null} title={"Comparison Snapshot Your Broker vs GTC"} setIsOpen={setIsOpen} butText={"Switch to GTC"} />
      <BonusSection setIsOpen={setIsOpen} />
      <TrustSection setIsOpen={setIsOpen} butText={"Start Earning"} />
      <TestimonialsSection setIsOpen={setIsOpen} />
      <CTASection setIsOpen={setIsOpen} />
      <Footer />
    </>
  );
}
