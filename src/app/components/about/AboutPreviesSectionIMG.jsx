import Image from "next/image";

const AboutPreviesSectionIMG = ({ variant }) => {

    if (variant === "mobile") {
        return (
            <div className="relative w-full sm:h-[650px] h-[450px] lg:hidden">
                <Image
                    src="/office1.jpeg"
                    alt="Office Image"
                    fill
                    priority
                    className="object-cover object-top"
                />
            </div>
        );
    }

    return (
        <div className="hidden lg:block w-1/2 relative">
            <div className="relative w-full min-h-[650px]">
                <Image
                    src="/office1.jpeg"
                    alt="Office Image"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
};

export default AboutPreviesSectionIMG;
