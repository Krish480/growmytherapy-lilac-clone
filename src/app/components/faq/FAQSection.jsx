"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FAQItem from "./FAQItem";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Image animation
            gsap.from(".faq-image", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Heading animation
            gsap.from(".faq-heading", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // FAQ items stagger
            gsap.from(".faq-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 25%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[var(--bg-main)] py-16 lg:py-28"
        >
            <div className="max-w-[1450px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="faq-image relative w-[8.3rem] sm:w-[10rem] lg:w-[28rem] aspect-[4/6] rounded-t-full overflow-hidden">
                        <Image
                            src="/FaqImg.png"
                            alt="FAQ"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right FAQ */}
                <div className="w-full lg:w-1/2">
                    <h2 className="faq-heading text-[2.4rem] font-semibold lg:text-[3rem] font-[var(--font-heading)] text-[var(--text-primary)] mb-8">
                        FAQs
                    </h2>

                    <div className="border-t">
                        <div className="faq-item">
                            <FAQItem
                                question="Do you offer in-person therapy in Santa Monica?"
                                answer="Yes, I offer in-person therapy sessions in my Santa Monica office."
                            />
                        </div>

                        <div className="faq-item">
                            <FAQItem
                                question="Do you offer telehealth sessions in California?"
                                answer="Yes, I offer telehealth sessions for clients in California."
                            />
                        </div>

                        <div className="faq-item">
                            <FAQItem
                                question="What therapy approaches do you use?"
                                answer="I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques."
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
