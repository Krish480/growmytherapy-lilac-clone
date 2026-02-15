"use client";

const BottomFooter = () => {
    return (
        <div className="bg-[var(--bg-muted)] py-[3.5rem]">

            <div className="max-w-[980px] mx-auto text-center px-6">

                {/* Policy Links */}
                <div className="footer-bottom-links flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.9rem] underline mb-8">
                    <span className="cursor-pointer text-black transition">
                        Privacy & Cookies Policy
                    </span>
                    <span className="cursor-pointer text-black transition">
                        Good Faith Estimate
                    </span>
                    <span className="cursor-pointer text-black transition">
                        Website Terms & Conditions
                    </span>
                    <span className="cursor-pointer text-black transition">
                        Disclaimer
                    </span>
                </div>

                {/* Credits */}
                <div className="footer-bottom-text">
                    <p className="text-[0.95rem] mb-6">
                        Website Template Credits:{" "}
                        <span className="underline cursor-pointer text-black transition">
                            Go Bloom Creative
                        </span>
                    </p>

                    {/* Copyright */}
                    <p className="text-[0.9rem] tracking-wide">
                        All Rights Reserved © 2024 Your Business Name Here, LLC.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BottomFooter;
