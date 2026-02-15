"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OfficeContent from "./OfficeContent";
import OfficeImages from "./OfficeImages";

gsap.registerPlugin(ScrollTrigger);

const OfficeSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading Animation
            gsap.from(".office-heading", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".office-heading",
                    start: "top 80%",
                },
            });

            // Images Animation
            gsap.from(".office-images", {
                y: 60,
                opacity: 0,
                scale: 0.98,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".office-images",
                    start: "top 85%",
                },
            });

            // Content Animation
            gsap.from(".office-content", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".office-content",
                    start: "top 85%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-[var(--bg-muted)] overflow-hidden"
        >
            <div className="max-w-[1450px] mx-auto px-6 lg:px-16 w-full">

                <div className="max-w-3xl mb-12 office-heading">
                    <h2 className="text-[2.6rem] lg:text-[3.2rem] leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                        A Calm Space for Healing in Santa Monica
                    </h2>
                    <p className="mt-4 text-[1.05rem] text-[var(--text-secondary)] leading-relaxed">
                        Designed to feel steady, private, and grounding from the moment you arrive.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="office-images lg:col-span-7">
                        <OfficeImages />
                    </div>

                    <div className="office-content lg:col-span-5">
                        <OfficeContent />
                    </div>
                </div>

            </div>
        </section>

    );
};

export default OfficeSection;
