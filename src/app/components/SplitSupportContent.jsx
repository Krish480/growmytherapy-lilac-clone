const SplitSupportContent = () => {
    return (
        <div className="relative w-full lg:w-1/2 flex flex-col justify-between">

            {/* TEXT */}
            <div className="support-content px-6 py-16 lg:px-20 lg:py-32">

                <h2 className="text-[2.8rem] font-semibold lg:text-[3.2rem] leading-tight font-[var(--font-heading)] text-[var(--text-primary)]">
                    You don’t have to do this <br /> all alone.
                </h2>

                <p className="mt-8 text-[1.1rem] font-medium text-[var(--text-secondary)]">
                    If you are facing any of these, there’s hope:
                </p>

                <ul className="mt-6 space-y-4 font-medium text-[var(--text-secondary)] text-[1.1rem] list-disc pl-6">
                    <li>Persistent feelings of sadness or hopelessness</li>
                    <li>Trouble focusing or making decisions</li>
                    <li>Difficulty maintaining relationships</li>
                    <li>Feeling constantly exhausted or unmotivated</li>
                    <li>A pervasive sense of being overwhelmed</li>
                </ul>

                <p className="mt-10 text-[1.1rem] font-medium text-[var(--text-secondary)]">
                    With empathy and guidance, we'll work together to navigate
                    the challenges life throws your way.
                </p>
            </div>

            {/* CTA STRIP */}
            <div className="support-cta text-[var(--text-primary)] border-t hover:bg-[var(--text-primary)] hover:text-white transition-colors duration-750 text-center py-6">
                <a
                    href="#"
                    className="text-medium tracking-wide font-semibold"
                >
                    WORK WITH ME →
                </a>
            </div>

        </div>
    );
};

export default SplitSupportContent;
