"use client";

import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[var(--bg-main)] relative border-b border-[var(--bg-muted)]">

            {/* DESKTOP NAV */}
            <div className="hidden md:flex max-w-[1450px] mx-auto px-12 py-6 items-center justify-between">

                {/* Logo / Brand */}
                <div className="font-[var(--font-heading)] text-[var(--text-primary)]">
                    <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide">
                        Dr. Maya Reynolds
                    </h1>
                </div>

                {/* Nav Links */}
                <nav className="flex items-center gap-12 text-[1.05rem] font-[var(--font-body)] text-[var(--text-primary)]">
                    <a href="#about" className="hover:opacity-70 transition">
                        About
                    </a>
                    <a href="#services" className="hover:opacity-70 transition">
                        Services
                    </a>
                    <a href="#faq" className="hover:opacity-70 transition">
                        FAQs
                    </a>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="ml-4 bg-[var(--bg-accent)] text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-[var(--bg-accent-soft)] transition"
                    >
                        Book a Consultation
                    </a>
                </nav>
            </div>

            {/* MOBILE TOP BAR */}
            <div className="md:hidden px-6 py-6 flex items-center justify-between">
                <button
                    onClick={() => setOpen(true)}
                    className="text-2xl text-[var(--text-primary)]"
                    aria-label="Open menu"
                >
                    ☰
                </button>

                <div className="text-lg font-[var(--font-heading)] text-[var(--text-primary)]">
                    Dr. Maya Reynolds
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)]
                transition-all duration-500 ease-in-out
                ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >

                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 left-6 text-3xl text-[var(--text-primary)]"
                    aria-label="Close menu"
                >
                    ✕
                </button>

                {/* Mobile Links */}
                <nav className="flex flex-col items-center gap-10 font-[var(--font-body)] text-[var(--text-primary)]">
                    <a onClick={() => setOpen(false)} href="#about" className="text-3xl">
                        About
                    </a>
                    <a onClick={() => setOpen(false)} href="#services" className="text-3xl">
                        Services
                    </a>
                    <a onClick={() => setOpen(false)} href="#faq" className="text-3xl">
                        FAQs
                    </a>
                    <a
                        onClick={() => setOpen(false)}
                        href="#contact"
                        className="mt-6 bg-[var(--bg-accent)] text-white px-8 py-3 uppercase tracking-wide text-sm"
                    >
                        Book a Consultation
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
