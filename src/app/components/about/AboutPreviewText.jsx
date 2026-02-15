import AboutPreviewCTA from "./AboutPreviewCTA.jsx";

const AboutPreviewText = () => {
    return (
        <div className="fulfill-text w-full lg:w-1/2 flex flex-col justify-between">

            <div className="px-6 py-16 lg:px-16">
                <h2 className="text-[2.4rem] lg:text-[3.2rem] font-bold leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                    You Don’t Have to Stay in Survival Mode
                </h2>

                <p className="mt-8 text-[1rem] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
                     If your mind feels constantly “on,” racing with worry or overthinking, you’re not alone.
                </p>

                <p className="mt-4 text-[1rem] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
                    Many of the adults I work with appear functional on the outside but feel internally exhausted—managing anxiety, tension, disrupted sleep, or the lingering effects of earlier life experiences.
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
                    Therapy can help you feel more grounded, connected, and steady in your daily life.
                </p>
            </div>

            <AboutPreviewCTA />

        </div>
    );
};

export default AboutPreviewText; 
