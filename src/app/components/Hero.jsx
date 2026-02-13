"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Image animation
            gsap.from(".hero-image", {
                y: -80,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // Text animation
            gsap.from(".hero-content > *", {
                y: 40,
                opacity: 0,
                duration: 1.3,
                stagger: 0.2,
                delay: 0.3,
                ease: "power3.out"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="bg-[var(--bg-main)]"
        >
            <div className="max-w-[1450px] mx-auto px-6 py-16 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                <div className="hero-image">
                    <HeroImage />
                </div>

                <div className="hero-content">
                    <HeroContent />
                </div>

            </div>
        </section>
    );
};

export default Hero;
