import Image from "next/image";

const AboutImages = () => {
    return (
        <div className="w-full lg:w-1/2 flex justify-center">
            <div className="about-arch relative">

                {/* Arch Image */}
                <div className=" relative w-[11.25rem]  sm:w-[15rem] lg:w-[28rem] aspect-[4/6]  rounded-t-full  overflow-hidden">
                    <Image
                        src="/about-main.webp"
                        alt="Lilac flowers"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Circle Image */}
                <div className="about-circle absolute bottom-0  right-0 translate-x-1/4 translate-y-1/4 w-[6.5rem] sm:w-[10rem] lg:w-[18rem] aspect-square rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/about-circle.webp"
                        alt="White flowers"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default AboutImages;
