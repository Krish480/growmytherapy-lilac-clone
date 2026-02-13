"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackgroundItem from "./BackgroundItem";

gsap.registerPlugin(ScrollTrigger);

const BackgroundSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading animation
            gsap.from(".bg-heading", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Accordion items stagger animation
            gsap.from(".bg-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 55%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[var(--bg-muted)] py-20 lg:py-26"
        >
            <div className="max-w-[900px] mx-auto px-6">

                {/* Heading */}
                <h2 className="bg-heading text-center text-[2rem] lg:text-[3.1rem] 
                    font-[var(--font-heading)] 
                    text-[var(--text-primary)] mb-16">
                    My Professional Background
                </h2>

                <div className="border-t">
                    <div className="bg-item">
                        <BackgroundItem
                            title="Education"
                            content="Euphoria dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
                        />
                    </div>

                    <div className="bg-item">
                        <BackgroundItem
                            title="Licensure"
                            content="Licensed Clinical Therapist (LCT), State Certified, 10+ years experience."
                        />
                    </div>

                    <div className="bg-item">
                        <BackgroundItem
                            title="Certifications"
                            content="CBT Certified, Trauma-Informed Care Specialist, Relationship Therapy Expert."
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BackgroundSection;
