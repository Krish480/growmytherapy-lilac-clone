"use client";

import { useState } from "react";

const BackgroundItem = ({ title, content }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[var(--border-dark)] py-6">

            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-[1.3rem] font-medium text-[var(--text-primary)]">
                    {title}
                </span>

                <span className="text-5xl font-extralight text-[var(--text-primary)]">
                    {open ? "−" : "+"}
                </span>
            </button>

            {/* Content */}
            <div
                className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-[1.1rem] px-28 leading-relaxed text-[var(--text-primary)]">
                    {content}
                </p>
            </div>

        </div>
    );
};

export default BackgroundItem;
