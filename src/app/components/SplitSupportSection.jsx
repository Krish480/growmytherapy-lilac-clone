"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitSupportImage from "./SplitSupportImage";
import SplitSupportContent from "./SplitSupportContent";

gsap.registerPlugin(ScrollTrigger);

const SplitSupportSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Image animation
            gsap.from(".support-image-desktop", {
                y: 120,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // Content animation
            gsap.from(".support-content > *", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            // CTA animation
            gsap.from(".support-cta", {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[var(--bg-accent2)] overflow-hidden">
            <SplitSupportImage variant="mobile" />

            <div className="flex flex-col lg:flex-row min-h-[750px]">

                <SplitSupportImage variant="desktop" />

                <SplitSupportContent />

            </div>
        </section>
    );
};

export default SplitSupportSection;
