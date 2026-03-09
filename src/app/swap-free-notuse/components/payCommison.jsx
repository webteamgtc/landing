'use client';
import { useState } from 'react';
import Image from 'next/image';

const WHY_PAY = {
  heading: "Why Pay for Swaps?",
  title: "Switch to GTC & Never Pay Swap Fees Again!",
  para1: "You're not just skipping overnight fees, you're unlocking a smarter way to trade. Here's why traders all over the world are switching to GTC's Swap Free accounts for life:",
  card1: { title: "Hold Trades Longer", desc: "No pressure to close positions, stay in as long as you like." },
  card2: { title: "Trade Global Markets", desc: "From gold to forex, it all stays Swap Free." },
  card3: { title: "Keep More Profit", desc: "Less fees = more in your pocket." },
  card4: { title: "Stress-Free Strategy", desc: "No fees creeping in overnight. Sleep easy." },
  card5: { title: "Instant Activation", desc: "No extra steps. No forms. Just open and go." },
  card6: { title: "Built for Everyone", desc: "New to trading or a pro, it works for you." },
  btnText: "Switch to GTC",
  tcApply: "Terms & Conditions apply",
};

const PayCommission = ({ topTitle, bottomText, buttonText, setIsOpen }) => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M28.3333 18.4167V11.3334H21.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28.3334 11.3334L21.2501 18.4167C19.9992 19.6676 19.3744 20.2924 18.608 20.3618C18.4805 20.3731 18.353 20.3731 18.2255 20.3618C17.4591 20.291 16.8343 19.6676 15.5834 18.4167C14.3325 17.1658 13.7077 16.541 12.9413 16.4716C12.8141 16.4601 12.6861 16.4601 12.5588 16.4716C11.7924 16.5425 11.1677 17.1658 9.91675 18.4167L5.66675 22.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            title: WHY_PAY.card1.title,
            description: WHY_PAY.card1.desc,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.206 3.182C7.45485 3.73676 5.90852 4.80034 4.76409 6.2372C3.61966 7.67406 2.92896 9.41913 2.78 11.25H7.26C7.293 10.154 7.395 9.074 7.565 8.05C7.772 6.796 8.08 5.64 8.475 4.65C8.67496 4.1401 8.91958 3.64885 9.206 3.182ZM12 1.25C10.5883 1.25 9.1904 1.52806 7.88615 2.0683C6.5819 2.60853 5.39683 3.40037 4.3986 4.3986C3.40037 5.39683 2.60853 6.5819 2.06829 7.88615C1.52806 9.1904 1.25 10.5883 1.25 12C1.25 13.4117 1.52806 14.8096 2.06829 16.1138C2.60853 17.4181 3.40037 18.6032 4.3986 19.6014C5.39683 20.5996 6.5819 21.3915 7.88615 21.9317C9.1904 22.4719 10.5883 22.75 12 22.75C14.8511 22.75 17.5854 21.6174 19.6014 19.6014C21.6174 17.5854 22.75 14.8511 22.75 12C22.75 9.14892 21.6174 6.41462 19.6014 4.3986C17.5854 2.38259 14.8511 1.25 12 1.25ZM12 2.75C11.739 2.75 11.401 2.876 11.009 3.282C10.613 3.692 10.218 4.333 9.868 5.207C9.521 6.076 9.238 7.124 9.044 8.296C8.889 9.236 8.794 10.233 8.762 11.25H15.238C15.2091 10.2602 15.1149 9.27339 14.956 8.296C14.762 7.124 14.479 6.076 14.132 5.207C13.782 4.333 13.387 3.692 12.992 3.282C12.599 2.876 12.262 2.75 12 2.75ZM16.74 11.25C16.71 10.1777 16.6081 9.10865 16.435 8.05C16.228 6.796 15.92 5.64 15.525 4.65C15.3247 4.14006 15.0798 3.64882 14.793 3.182C16.207 3.62923 17.4925 4.41022 18.541 5.459C20.0922 7.01064 21.0414 9.06315 21.219 11.25H16.74ZM15.238 12.75H8.762C8.793 13.767 8.889 14.764 9.044 15.704C9.238 16.876 9.521 17.924 9.868 18.793C10.218 19.667 10.613 20.308 11.008 20.718C11.401 21.124 11.738 21.25 12 21.25C12.261 21.25 12.599 21.124 12.991 20.718C13.387 20.308 13.782 19.667 14.132 18.793C14.479 17.924 14.762 16.876 14.956 15.704C15.111 14.764 15.206 13.767 15.238 12.75ZM14.794 20.818C15.064 20.384 15.309 19.889 15.524 19.35C15.92 18.36 16.228 17.204 16.435 15.95C16.6077 14.8913 16.7093 13.8223 16.739 12.75H21.219C21.07 14.5809 20.3793 16.3259 19.2349 17.7628C18.0905 19.1997 16.5452 20.2632 14.794 20.818ZM9.205 20.818C8.91892 20.3511 8.67464 19.8599 8.475 19.35C8.079 18.36 7.771 17.204 7.564 15.95C7.39127 14.8913 7.28971 13.8223 7.26 12.75H2.78C2.92888 14.5808 3.61944 16.3257 4.76368 17.7626C5.90792 19.1994 7.45404 20.2631 9.205 20.818Z" fill="white" />
                </svg>
            ),
            title: WHY_PAY.card2.title,
            description: WHY_PAY.card2.desc,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M12.999 3C12.999 2.80109 12.92 2.61032 12.7793 2.46967C12.6387 2.32902 12.4479 2.25 12.249 2.25C12.0501 2.25 11.8593 2.32902 11.7187 2.46967C11.578 2.61032 11.499 2.80109 11.499 3V4.573H9.703C9.10627 4.573 8.53397 4.81005 8.11201 5.23201C7.69006 5.65397 7.453 6.22626 7.453 6.823V9.839C7.453 10.815 8.081 11.679 9.009 11.979L15.029 13.931C15.1797 13.98 15.311 14.0755 15.4041 14.2038C15.4971 14.3321 15.5472 14.4865 15.547 14.645V17.661C15.547 17.8599 15.468 18.0507 15.3273 18.1913C15.1867 18.332 14.9959 18.411 14.797 18.411H9.703C9.50409 18.411 9.31333 18.332 9.17267 18.1913C9.03202 18.0507 8.953 17.8599 8.953 17.661V16.537C8.953 16.3381 8.87398 16.1473 8.73333 16.0067C8.59268 15.866 8.40192 15.787 8.203 15.787C8.00409 15.787 7.81333 15.866 7.67267 16.0067C7.53202 16.1473 7.453 16.3381 7.453 16.537V17.661C7.453 18.2577 7.69006 18.83 8.11201 19.252C8.53397 19.6739 9.10627 19.911 9.703 19.911H11.499V21.5C11.499 21.6989 11.578 21.8897 11.7187 22.0303C11.8593 22.171 12.0501 22.25 12.249 22.25C12.4479 22.25 12.6387 22.171 12.7793 22.0303C12.92 21.8897 12.999 21.6989 12.999 21.5V19.912H14.797C15.3937 19.912 15.966 19.6749 16.388 19.253C16.81 18.831 17.047 18.2587 17.047 17.662V14.646C17.0469 14.1707 16.8963 13.7076 16.6168 13.3231C16.3373 12.9387 15.9432 12.6526 15.491 12.506L9.471 10.554C9.3203 10.505 9.189 10.4095 9.09594 10.2812C9.00287 10.1529 8.95284 9.99848 8.953 9.84V6.823C8.953 6.62409 9.03202 6.43332 9.17267 6.29267C9.31333 6.15202 9.50409 6.073 9.703 6.073H14.797C14.9959 6.073 15.1867 6.15202 15.3273 6.29267C15.468 6.43332 15.547 6.62409 15.547 6.823V7.947C15.547 8.14591 15.626 8.33668 15.7667 8.47733C15.9073 8.61798 16.0981 8.697 16.297 8.697C16.4959 8.697 16.6867 8.61798 16.8273 8.47733C16.968 8.33668 17.047 8.14591 17.047 7.947V6.823C17.047 6.22626 16.81 5.65397 16.388 5.23201C15.966 4.81005 15.3937 4.573 14.797 4.573H12.999V3Z" fill="white" />
                </svg>
            ),
            title: WHY_PAY.card3.title,
            description: WHY_PAY.card3.desc,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M24.008 29.6667C25.3076 29.6667 26.7116 29.4516 28.22 29.0213C29.7284 28.592 31.7929 27.8053 34.4133 26.6613C34.5084 26.2969 34.5747 25.9342 34.612 25.5733C34.6484 25.2116 34.6667 24.8316 34.6667 24.4333C34.6667 24.1889 34.572 23.9889 34.3827 23.8333C34.1933 23.6778 33.9769 23.6333 33.7333 23.7C33.4222 23.8111 33.0778 23.928 32.7 24.0507C32.3222 24.1733 31.8444 24.3564 31.2667 24.6C29.7333 25.2444 28.4222 25.6947 27.3333 25.9507C26.2444 26.2067 25.1333 26.3342 24 26.3333C22.8444 26.3333 21.7111 26.2 20.6 25.9333C19.4889 25.6667 18.1333 25.2111 16.5333 24.5667C15.9556 24.3222 15.5111 24.1444 15.2 24.0333L14.2667 23.7C14.0222 23.6111 13.8053 23.6498 13.616 23.816C13.4267 23.9822 13.3324 24.188 13.3333 24.4333C13.3333 24.8316 13.3516 25.216 13.388 25.5867C13.4253 25.9564 13.492 26.3236 13.588 26.688C15.7809 27.7031 17.7409 28.4533 19.468 28.9387C21.1951 29.424 22.7084 29.6667 24.008 29.6667ZM23.9893 34.3333C26.2738 34.3333 28.2827 33.788 30.016 32.6973C31.7493 31.6067 33.0204 30.1667 33.8293 28.3773C31.736 29.284 29.9156 29.948 28.368 30.3693C26.8196 30.7898 25.3636 31 24 31C22.6596 31 21.1662 30.784 19.52 30.352C17.8738 29.9209 16.0884 29.2738 14.164 28.4107C14.9507 30.2169 16.2076 31.6556 17.9347 32.7267C19.6618 33.7978 21.6809 34.3333 23.9893 34.3333ZM24 22.3333C22.704 22.3333 21.6022 21.8796 20.6947 20.972C19.7871 20.0644 19.3333 18.9627 19.3333 17.6667C19.3333 16.3707 19.7871 15.2689 20.6947 14.3613C21.6022 13.4538 22.704 13 24 13C25.296 13 26.3978 13.4538 27.3053 14.3613C28.2129 15.2689 28.6667 16.3707 28.6667 17.6667C28.6667 18.9627 28.2129 20.0644 27.3053 20.972C26.3978 21.8796 25.296 22.3333 24 22.3333ZM24.0053 21C24.9236 21 25.7076 20.6733 26.3573 20.02C27.0071 19.3667 27.3324 18.5804 27.3333 17.6613C27.3342 16.7422 27.0076 15.9582 26.3533 15.3093C25.6991 14.6604 24.9129 14.3351 23.9947 14.3333C23.0764 14.3316 22.2924 14.6587 21.6427 15.3147C20.9929 15.9707 20.6676 16.7564 20.6667 17.672C20.6658 18.5876 20.9929 19.3716 21.648 20.024C22.3031 20.6764 23.0889 21.0018 24.0053 21ZM23.9973 35.6667C20.4933 35.6667 17.6178 34.6284 15.3707 32.552C13.1236 30.4747 12 27.768 12 24.432C12 23.7209 12.2773 23.1533 12.832 22.7293C13.3867 22.3053 13.9947 22.2031 14.656 22.4227C14.9973 22.5293 15.3547 22.6533 15.728 22.7947C16.1004 22.9351 16.5427 23.1133 17.0547 23.3293C18.596 23.9587 19.8698 24.3942 20.876 24.636C21.8804 24.8787 22.9218 25 24 25C25.0409 25 26.0582 24.8844 27.052 24.6533C28.0449 24.4222 29.2791 24.0009 30.7547 23.3893C31.3644 23.1449 31.864 22.9493 32.2533 22.8027C32.6418 22.656 33.0076 22.5271 33.3507 22.416C34.0129 22.2071 34.62 22.3191 35.172 22.752C35.724 23.184 36 23.7444 36 24.4333C36 26.0182 35.6853 27.4907 35.056 28.8507C34.4267 30.2107 33.572 31.3973 32.492 32.4107C31.412 33.424 30.1422 34.22 28.6827 34.7987C27.2231 35.3773 25.6613 35.6667 23.9973 35.6667Z" fill="white" />
                </svg>
            ),
            title: WHY_PAY.card4.title,
            description: WHY_PAY.card4.desc,
        },

        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="25" viewBox="0 0 17 25" fill="none">
                    <path d="M6.48604 22.3038L14.7723 12.2147H8.36745L9.52832 2.97993L2.12277 13.842H7.68694L6.48604 22.3038ZM5.85196 15.4692H1.07238C0.637922 15.4692 0.323019 15.2767 0.127673 14.8916C-0.0676735 14.5064 -0.0388521 14.137 0.214138 13.7834L9.22729 0.512992C9.39062 0.27975 9.59344 0.125159 9.83575 0.04922C10.0781 -0.0267193 10.3343 -0.0147862 10.6043 0.0850197C10.8744 0.184826 11.0692 0.349722 11.1888 0.57971C11.3083 0.809697 11.3521 1.06084 11.3201 1.33314L10.1944 10.5874H15.9363C16.3847 10.5874 16.7022 10.7952 16.889 11.2107C17.0769 11.6262 17.0262 12.0113 16.7369 12.366L6.70701 24.5754C6.53621 24.7816 6.33019 24.9134 6.08894 24.9709C5.84663 25.0273 5.60751 25.0018 5.3716 24.8944C5.13569 24.7881 4.95529 24.627 4.8304 24.4111C4.70657 24.1952 4.6612 23.9511 4.6943 23.6788L5.85196 15.4692Z" fill="white" />
                </svg>
            ),
            title: WHY_PAY.card5.title,
            description: WHY_PAY.card5.desc,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M5.58598 8.53125C5.73476 10.5965 7.26684 12.1875 8.93754 12.1875C10.6082 12.1875 12.1429 10.597 12.2891 8.53125C12.4414 6.3827 10.95 4.875 8.93754 4.875C6.92508 4.875 5.43363 6.4218 5.58598 8.53125Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.93746 15.4375C12.2469 15.4375 15.4293 17.0813 16.2266 20.2825C16.3322 20.7061 16.0666 21.125 15.6314 21.125L2.24297 21.125C1.80777 21.125 1.54371 20.7061 1.64781 20.2825C2.44508 17.03 5.62754 15.4375 8.93746 15.4375Z" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" />
                    <path d="M15.8438 9.44227C15.9626 11.0916 17.2006 12.3906 18.5352 12.3906C19.8697 12.3906 21.1098 11.0921 21.2266 9.44227C21.3479 7.72637 20.1429 6.5 18.5352 6.5C16.9274 6.5 15.7224 7.75785 15.8438 9.44227Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5391 15.5391C16.4557 15.1191 17.4652 14.9576 18.5351 14.9576C21.1758 14.9576 23.7199 16.2703 24.3572 18.8272C24.441 19.1654 24.2287 19.5 23.8814 19.5L18.1797 19.5" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
            ),
            title: WHY_PAY.card6.title,
            description: WHY_PAY.card6.desc,
        }
    ];

    const [flippedIndex, setFlippedIndex] = useState(null);

    const toggleFlip = (index) => {
        setFlippedIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] pt-40 py-8 md:pb-20 relative overflow-hidden text-center"
            style={{ clipPath: "polygon(0% 10%, 100% 0, 100% 20%, 100% 100%, 0% 100%)" }}
        >

            <div className="absolute top-0 h-full w-full opacity-50 pointer-events-none">
                <Image
                    src="/ib/overlNew.webp"
                    alt="Decorative background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="relative max-w-6xl mx-auto ainer flex flex-col gap-5 md:gap-8 px-4 z-50">
                {/* Section Title */}

                <h4 className="text-lg md:text-2xl font-[200]">{WHY_PAY.heading}</h4>
                <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#D9C3AA] px-5 md:px-0">
                    {WHY_PAY.title}
                </h2>
                <p className="text-sm md:text-base xl:text-[22px] text-white max-w-5xl mx-auto leading-relaxed">
                    {WHY_PAY.para1}   </p>
                {/* Flip Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-5 justify-center">
                    {features.map((feat, idx) => {
                        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
                        const isFlipped = isMobile && flippedIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative w-full h-60 [perspective:1000px] bg-white rounded-2xl text-[#1F2937] flex flex-col items-center"
                                onClick={() => {
                                    if (isMobile) {
                                        toggleFlip(idx);
                                    }
                                }}
                            >
                                <div
                                    className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                                        } group-hover:[transform:rotateY(180deg)]`}
                                >
                                    {/* Front Face */}
                                    <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center [backface-visibility:hidden] px-10">
                                        <p className="text-4xl w-11 flex justify-center items-center h-11 rounded-full p-2 bg-[#4D4D70]">{feat.icon}</p>
                                        <h3 className="text-lg font-medium">{feat.title}</h3>
                                    </div>

                                    {/* Back Face */}
                                    <div className="absolute bg-secondary text-white inset-0 flex items-center justify-center p-6 rounded-xl text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                        <p className="text-sm md:text-base max-w-60 mx-auto">{feat.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>


                <div className="relative text-center flex flex-col gap-1">
                    <button className="bg-gradient-to-r  mx-auto  flex items-center gap-2 from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
                        onClick={() => setIsOpen(true)}>
                        {WHY_PAY.btnText}
                        <svg width="9" height="14" color="#fff" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#fff" strokeWidth="3" />
                        </svg>
                    </button>
                    <a  href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Cheatsheet/Swap+Free+for+Life+T%26Cs.pdf" target="_blank" className="text-sm md:text-base mt-3 text-center  font-medium  leading-relaxed">
                        {WHY_PAY.tcApply}
                    </a>
                </div>


            </div>
        </section>
    );
};

export default PayCommission