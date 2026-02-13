"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BottomFooter from "./BottomFooter";
import TOPFooter from "./TOPFooter";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // TOP FOOTER
            gsap.fromTo(
                ".footer-top > *",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // BOTTOM LINKS
            gsap.fromTo(
                ".footer-bottom-links > *",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".footer-bottom-links",
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // BOTTOM TEXT
            gsap.fromTo(
                ".footer-bottom-text",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".footer-bottom-text",
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                }
            );

        }, footerRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);



    return (
        <footer
            ref={footerRef}
            className="bg-[var(--bg-main)] text-[var(--text-primary)]"
        >
            <div className="footer-top">
                <TOPFooter />
            </div>

            <div className="footer-bottom">
                <BottomFooter />
            </div>
        </footer>
    );
};

export default FooterSection;
