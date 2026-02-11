import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <section className="bg-[var(--bg-main)]">
            <div className="max-w-[1450px] mx-auto px-6 py-16 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                <HeroImage />
                <HeroContent />

            </div>
        </section>
    );
};

export default Hero;
