const AboutContent = () => {
    return (
        <div className="about-content w-full lg:w-1/2 lg:px-16 px-5">
            <h2 className="about-text text-[2.2rem] sm:text-[2.2rem] lg:text-[3.6rem] font-semibold leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                Meet Dr. Maya Reynolds, PsyD
            </h2>

            <p className="mt-8 text-[1rem] font-medium sm:text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-[var(--text-primary)] lg:mx-0">
                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults navigating anxiety, trauma, and burnout.
            </p>
            <p className="mt-8 text-[1rem] font-medium sm:text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-[var(--text-primary)] lg:mx-0">
                My work integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques. Sessions are collaborative, structured enough to feel supportive, and paced carefully to prioritize safety and stabilization.
            </p>
            <p className="mt-8 text-[1rem] font-medium sm:text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-[var(--text-primary)] lg:mx-0">
                My goal is not only symptom relief—but helping you build insight, resilience, and a stronger relationship with yourself over time.
            </p>

            <button className="about-btn mt-10 block mx-auto font-medium border border-[var(--border-dark)] px-8 py-3 text-sm tracking-wide uppercase text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white transition-all duration-750">
                Read My Full Bio →
            </button>

        </div>
    );
};

export default AboutContent;
