"use client";

import { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[var(--border-dark)]">

            {/* Question*/}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between cursor-pointer py-6 text-left"
            >
                <div className="flex items-center gap-6">

                    
                    <span className="text-5xl font-extralight text-[var(--text-primary)]">
                        {open ? "−" : "+"}
                    </span>

                    {/* Question */}
                    <span className="text-[1.5rem] lg:text-[1.8rem] font-[var(--font-heading)] text-[var(--text-primary)]">
                        {question}
                    </span>

                </div>
            </button>

            {/* Answer */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-40 pb-6" : "max-h-0"
                    }`}
            >
                <p className="pl-[4.2rem] text-[1rem] text-[var(--text-primary)]">
                    {answer}
                </p>
            </div>

        </div>
    );
};

export default FAQItem;
