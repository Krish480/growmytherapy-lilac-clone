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
                            src="/faq-image.webp"
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
                                question="Do you take insurance?"
                                answer="Yes, I accept select insurance providers. Please contact me to confirm your coverage."
                            />
                        </div>

                        <div className="faq-item">
                            <FAQItem
                                question="What are your rates?"
                                answer="My standard rate is $150 per session. Sliding scale options may be available."
                            />
                        </div>

                        <div className="faq-item">
                            <FAQItem
                                question="Do you have any openings?"
                                answer="Availability changes weekly. Reach out to check current openings."
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
