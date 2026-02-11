"use client";

import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[var(--bg-main)] relative">
            {/*  DESKTOP NAV  */}
            <div className="hidden md:flex max-w-8xl mx-auto px-14 py-4 items-center justify-between">
                <div className="font-[var(--font-heading)] text-[var(--text-primary)]">
                    <h1 className="text-3xl font-bold">Lilac Template</h1>
                </div>

                <nav className="flex gap-12 text-lg font-[var(--font-body)] text-[var(--text-primary)]">
                    <a href="#" className="hover:opacity-70 transition">Blog</a>
                    <a href="#" className="hover:opacity-70 transition">Contact</a>
                </nav>
            </div>

            {/*  MOBILE TOP BAR  */}
            <div className="md:hidden px-6 py-6 flex items-center justify-between">
                <button
                    onClick={() => setOpen(true)}
                    className="text-2xl text-[var(--text-primary)]"
                    aria-label="Open menu"
                >
                    <i className="fa-solid fa-bars" />
                </button>

                <div className="text-xl  font-[var(--font-heading)] text-[var(--text-primary)]">
                    Lilac Template
                </div>
            </div>

            {/*  MOBILE MENU (CENTER)  */}
            <div
                className={`md:hidden fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)]
                            transition-all duration-500 ease-in-out
                            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 left-6 text-3xl text-[var(--text-primary)]"
                    aria-label="Close menu"
                >
                    <i className="fa-solid fa-xmark" />
                </button>

                {/* Menu Links */}
                <nav className="flex flex-col items-center gap-10 font-[var(--font-body)] text-[var(--text-primary)]">
                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="text-5xl hover:opacity-70 transition"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="text-5xl hover:opacity-70 transition"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
