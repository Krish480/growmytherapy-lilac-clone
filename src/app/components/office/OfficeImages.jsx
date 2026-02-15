import Image from "next/image";

const OfficeImages = () => {
    return (
        <div className="lg:col-span-7 relative mb-15">

            {/* Main Image */}
            <div className="relative w-full h-[40vh] lg:h-[65vh] overflow-hidden rounded-tr-[120px]">
                <Image
                    src="/office1.jpeg"
                    alt="Therapy office in Santa Monica"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Floating Secondary Image */}
            <div className="lg:block absolute -bottom-12 right-10 w-60 h-40 sm:h-50 sm:w-70 lg:w-72 lg:h-52 shadow-2xl border-5 border-[var(--bg-main)] overflow-hidden">
                <Image
                    src="/office2.jpeg"
                    alt="Private counseling space"
                    fill
                    className="object-cover"
                />
            </div>

        </div>
    );
};

export default OfficeImages;
