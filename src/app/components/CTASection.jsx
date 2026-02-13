"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading
            gsap.from(".cta-heading", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Paragraph
            gsap.from(".cta-text", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });

            // Button
            gsap.from(".cta-btn", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            className="bg-[var(--bg-accent)] py-24 lg:py-24 text-center overflow-hidden"
        >
            <div className="cta-content max-w-[900px] mx-auto px-6">

                {/* Heading */}
                <h2 className="cta-heading text-[2.2rem] sm:text-[2.2rem] lg:text-[3.5rem] font-[var(--font-heading)] text-white mb-6">
                    Get started today.
                </h2>

                {/* Paragraph */}
                <p className="cta-text text-white/90 text-[1rem] sm:text-[1.1rem] lg:text-[1.25rem] leading-relaxed max-w-[700px] mx-auto mb-12">
                    Ready to take the first step towards a happier, healthier you?
                    Contact me to book your first session. I look forward to
                    starting this therapeutic journey with you.
                </p>

                {/* Button */}
                <button className="cta-btn border border-[var(--bg-main)] text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-[var(--bg-main)] hover:text-[var(--text-accent)]">
                    Get in touch →
                </button>

            </div>
        </section>
    );
};

export default CTASection;
