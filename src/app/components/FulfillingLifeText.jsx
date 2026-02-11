import FulfillingLifeCTA from "./FulfillingLifeCTA";

const FulfillingLifeText = () => {
    return (
        <div className="fulfill-text w-full lg:w-1/2 flex flex-col justify-between">

            <div className="px-6 py-16 lg:px-16 lg:py-48">
                <h2 className="text-[2.4rem] lg:text-[3.2rem] font-bold leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                    Live a fulfilling life.
                </h2>

                <p className="mt-8 text-[1rem] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
                    Life can be challenging—especially when you're trying to balance
                    your personal and professional life.
                </p>

                <p className="mt-4 text-[1rem] leading-relaxed text-[var(--text-secondary)] max-w-[520px]">
                    It's easy to feel like you're alone in facing these challenges,
                    but I want you to know that I'm here to help.
                </p>
            </div>

            <FulfillingLifeCTA />

        </div>
    );
};

export default FulfillingLifeText;
