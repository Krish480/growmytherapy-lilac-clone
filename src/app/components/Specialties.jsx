"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpecialtiesCard from "./SpecialtiesCard";

gsap.registerPlugin(ScrollTrigger);

const Specialties = () => {
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
                    My Specialties
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="special-card">
                        <SpecialtiesCard
                            title="Self-Esteem"
                            description="Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem."
                            image="/speacial1.webp"
                        />
                    </div>

                    <div className="special-card">
                        <SpecialtiesCard
                            title="Relationships"
                            description="Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections."
                            image="/speacial2.webp"
                        />
                    </div>

                    <div className="special-card">
                        <SpecialtiesCard
                            title="Burnout"
                            description="Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout."
                            image="/speacial3.webp"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Specialties;
