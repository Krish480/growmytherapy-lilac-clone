import React from 'react'
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-[var(--bg-main)]">
            <div className="max-w-[1450px] mx-auto px-6 justify-center py-16 lg:py-12 grid grid-cols-1  lg:grid-cols-2 gap-14 items-center">

                {/* Image */}
                <div className="flex justify-center lg:justify-start">
                    <div className="relative w-[180px] sm:w-[240px] lg:h-full lg:w-[520px] aspect-[4/6] overflow-hidden rounded-t-full">
                        <Image
                            src="/Hero.webp"
                            alt="Lilac flowers"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] font-semibold leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                        Live your life <br /> in full bloom
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-body)]">
                        Therapy for Adults in Minneapolis, MN.
                    </p>

                    <div className="mt-10">
                        <button className="border border-[var(--border-dark)] px-8 py-3 text-sm tracking-wide uppercase text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white transition-all duration-750">
                            Connect with me →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero