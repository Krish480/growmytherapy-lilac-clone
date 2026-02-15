"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutPreviewSectionText from "./AboutPreviewText";
import AboutPreviesSectionIMG from "./AboutPreviesSectionIMG";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutPreviewText from "./AboutPreviewText";
gsap.registerPlugin(ScrollTrigger);

const AboutPreviewSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".fulfill-image-desktop", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            gsap.from(".fulfill-image-mobile", {
                opacity: 0,
                scale: 1.05,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });

            gsap.from(".fulfill-text > *", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            className="bg-[var(--bg-muted)] relative overflow-hidden">
            <AboutPreviesSectionIMG variant="mobile" />

            <div className="flex flex-col lg:flex-row ">

                <AboutPreviewText />

                <AboutPreviesSectionIMG variant="desktop" />

            </div>
        </section>
    );
};

export default AboutPreviewSection;
