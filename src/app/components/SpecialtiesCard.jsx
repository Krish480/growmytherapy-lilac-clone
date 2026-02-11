import Image from "next/image";

const SpecialtiesCard = ({ title, description, image }) => {
    return (
        <div className="border border-[var(--text-primary)] bg-[var(--bg-muted)] px-4 py-4 flex flex-col justify-between min-h-[520px]">

            {/* TEXT AREA */}
            <div>
                <h3 className="text-lg font-medium font-[var(--font-heading)] text-[var(--text-primary)]">
                    {title}
                </h3>

                <p className="mt-6 font-medium text-[var(--text-secondary)] leading-relaxed text-sm">
                    {description}
                </p>
            </div>

            {/* IMAGE AREA */}
            <div className="mt-10 flex justify-center">
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

        </div>
    );
};

export default SpecialtiesCard;
