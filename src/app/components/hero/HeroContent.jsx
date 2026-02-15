const HeroContent = () => {
    return (
        <div className="text-center lg:text-left">

            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.6rem] font-semibold leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                Anxiety & Trauma Therapy in Santa Monica, CA
            </h1>

            <p className="mt-6 text-base sm:text-lg text-center lg:text-left text-[var(--text-secondary)] font-[var(--font-body)] max-w-[520px]">
                For high-achieving adults feeling overwhelmed by stress, burnout, or past experiences.
            </p>
            
            <p className="mt-6 text-base sm:text-lg text-center lg:text-left text-[var(--text-secondary)] font-[var(--font-body)] max-w-[520px]">
                Work with a licensed clinical psychologist offering in-person therapy in Santa Monica and secure telehealth across California.
            </p>

            <div className="mt-10">
                <button className="bg-[var(--bg-main)] px-8 py-3 text-sm tracking-wide uppercase text-[var(--text-primary)] hover:text-white
                                   hover:bg-[var(--bg-accent-soft)] border transition-all duration-500">
                    Schedule a Consultation →
                </button>
            </div>

        </div>
    );
};

export default HeroContent;
