"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCard from "./ServicesCard";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".special-card", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",  
                    toggleActions: "play none none none"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[var(--bg-main)] py-28"
        >
            <div className="max-w-[1450px] mx-auto px-6">

                {/* Heading Animation */}
                <h2 className="text-center text-[3rem] font-[var(--font-heading)] text-[var(--text-primary)] mb-20">
                    How I Can Support You
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="special-card">
                        <ServicesCard
                            title="Anxiety Therapy in Santa Monica"
                            description="I help adults experiencing generalized anxiety, high-functioning anxiety, and chronic stress patterns develop practical tools and nervous system regulation skills."
                            image="/Person1.png"
                        />
                    </div>

                    <div className="special-card">
                        <ServicesCard
                            title="Trauma & EMDR Therapy"
                            description="Using EMDR and depth-oriented therapy, we carefully process past experiences that continue to affect your confidence, relationships, or sense of safety."
                            image="/Person2.png"
                        />
                    </div>

                    <div className="special-card">
                        <ServicesCard
                            title="Burnout & Professional Pressure"
                            description="For professionals, entrepreneurs, and creatives feeling exhausted or perfectionistic, therapy becomes a space to slow down and reconnect with yourself."
                            image="/Person3.png"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
