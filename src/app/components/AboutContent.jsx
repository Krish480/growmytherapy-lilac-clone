const AboutContent = () => {
    return (
        <div className="about-content w-full lg:w-1/2 lg:px-16 px-5">
            <h2 className="about-text text-[2.2rem] sm:text-[2.2rem] lg:text-[3.6rem] font-semibold leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                Hi, I’m Lilac.
            </h2>

            <p className="mt-8 text-[1rem] font-medium sm:text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-[var(--text-primary)] lg:mx-0">
                I’m committed to providing a safe and supportive environment where you
                can explore your thoughts and feelings. Together, we’ll navigate the
                challenges you’re facing and work toward meaningful growth.
            </p>

            <button className="about-btn mt-10 block mx-auto font-medium border border-[var(--border-dark)] px-8 py-3 text-sm tracking-wide uppercase text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white transition-all duration-50">
                Let’s Chat →
            </button>

        </div>
    );
};

export default AboutContent;
