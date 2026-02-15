import Image from "next/image";

const AboutImages = () => {
    return (
        <div className="w-full lg:w-1/2 flex justify-center">
            <div className="about-arch relative">

                {/* Arch Image */}
                <div className=" relative w-[11.25rem]  sm:w-[15rem] lg:w-[28rem] aspect-[4/6]  rounded-t-full  overflow-hidden">
                    <Image
                        src="/Dr. Maya Reynolds.png"
                        alt="Dr. Maya Reynolds"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default AboutImages;
