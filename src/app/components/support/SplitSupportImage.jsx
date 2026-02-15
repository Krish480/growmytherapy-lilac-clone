import Image from "next/image";

const SplitSupportImage = ({ variant }) => {

    if (variant === "mobile") {
        return (
            <div className="relative w-full h-[380px] lg:hidden">
                <Image
                    src="/office2.jpeg"
                    alt="Office image"
                    fill
                    className="object-cover"
                />
            </div>
        );
    }

    return (
        <div className="hidden lg:block relative w-1/2 support-image-desktop">
            <div className="absolute inset-0">
                <Image
                    src="/office2.jpeg"
                    alt="Office image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
};

export default SplitSupportImage;
