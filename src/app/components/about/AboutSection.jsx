"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutContent from "./AboutContent";
import AboutImages from "./AboutImages";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ARCH IMAGE
            gsap.from(".about-arch", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    once: true
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // CIRCLE IMAGE
            gsap.from(".about-circle", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    once: true
                },
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "back.out(1.7)"
            });

            // HEADING + TEXT
            gsap.from(".about-text", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // BUTTON
            gsap.from(".about-btn", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.3
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            className="bg-[var(--bg-muted)] py-10 lg:py-28 overflow-hidden"
        >
            <div className="max-w-[1450px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">

                <AboutContent />
                <AboutImages />

            </div>
        </section>
    );
};

export default AboutSection;
