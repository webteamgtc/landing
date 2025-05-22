'use client';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#0b0a33] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-1">
          {/* Left: Logo and Social Icons */}
        

          {/* Center: Legal Text */}
          <div className="md:col-span-2 space-y-3 text-[#cccccc] text-xs leading-relaxed">
            <p>
              <span className="text-secondary font-medium">Important Notice:</span> Engaging in trading activities involves substantial risks and may not be appropriate for every individual. Using leverage can heighten both potential gains and losses. Before participating in trading, it is crucial to evaluate your financial goals, experience level, and comfort with risk. Only invest money that you can afford to lose. We highly recommend that you seek to understand the potential risks involved and consult with a qualified financial or tax advisor if you have any inquiries.
            </p>
            <p><span className="text-secondary">GTC Global Ltd</span> is incorporated in Mauritius and licensed to operate as an investment dealer.</p>
            <p><span className="text-secondary">GTC Global Pty Ltd</span> is an Australian company regulated by the Australian Securities & Investments Commission (ASIC).</p>
            <p><span className="text-secondary">GTC Global Trade Capital Co., Limited</span> is a finance brokerage registered in Vanuatu.</p>
            <p><span className="text-secondary font-medium">Disclaimer:</span> These entities do not provide services in certain jurisdictions where such services would be contrary to local laws.</p>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
