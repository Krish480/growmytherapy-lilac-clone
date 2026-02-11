import Image from "next/image";

const HeroImage = () => {
    return (
        <div className="flex justify-center lg:justify-start">
            <div className="relative w-[180px] sm:w-[240px] lg:w-[520px] aspect-[4/6] overflow-hidden rounded-t-full">
                <Image
                    src="/Hero.webp"
                    alt="Lilac flowers"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default HeroImage;
