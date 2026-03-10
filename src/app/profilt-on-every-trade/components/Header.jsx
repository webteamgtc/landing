export default function Landing2Header({className}) {
    return (
        <div className={`flex relative items-start py-3 justify-between ${className}`}>
            {/* logo */}
            <div className="leading-none">
                <img
                    src="/logo-white.svg"
                    alt="GTC"
                    className="h-[34px] md:h-[50px] w-auto object-contain"
                    draggable={false}
                />
            </div>

            {/* trustpilot */}
            <div className="flex items-center gap-3 pt-[3px]">
                <span className="text-[12px] font-medium text-white">Trustpilot</span>

                <div className="flex items-center gap-[2px]">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span
                            key={i}
                            className="flex h-[14px] w-[14px] items-center justify-center bg-[#C79A55]"
                        >
                            <StarIcon />
                        </span>
                    ))}
                </div>

                <span className="text-[12px] font-medium tracking-[0.2px] text-white">
                    4.0 / 5
                </span>
            </div>
        </div>
    )
}

/* icons */

function StarIcon() {
    return (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="m12 2.8 2.83 5.73 6.32.92-4.57 4.45 1.08 6.29L12 17.2l-5.66 2.98 1.08-6.29L2.85 9.45l6.32-.92L12 2.8Z" />
        </svg>
    );
}