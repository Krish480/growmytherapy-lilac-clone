import Image from "next/image";

const FulfillingLifeImage = ({ variant }) => {
    if (variant === "mobile") {
        return (
            <div className="fulfill-image-mobile relative w-full h-[320px] lg:hidden">
                <Image
                    src="/fulfillLife.webp"
                    alt="Calm lifestyle"
                    fill
                    className="object-cover"
                />
            </div>
        );
    }

    return (
        <div className="fulfill-image-desktop hidden lg:block relative w-1/2">
            <div className="absolute top-0 right-0 w-[50vw] h-full">
                <Image
                    src="/fulfillLife.webp"
                    alt="Calm lifestyle"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default FulfillingLifeImage;
