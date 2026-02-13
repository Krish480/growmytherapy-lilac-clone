import React from 'react'

const TOPFooter = () => {
    return (
        <div className="max-w-[1450px] mx-auto px-8 lg:px-12 py-[5rem] flex flex-col lg:flex-row gap-16 text-center lg:text-left">

            {/* Left Column*/}
            <div className="lg:flex-[1.4]">

                <h3 className="lg:text-[2.3rem] text-[1.7rem] font-semibold font-[var(--font-heading)] mb-5">
                    Lilac Template
                </h3>

                <p className="leading-relaxed mb-10 text-[1.15rem]">
                    123 Example Road<br />
                    Minneapolis, MN
                </p>

                <p className="underline mb-4 cursor-pointer text-[1.15rem]">
                    email@example.com
                </p>

                <p className="underline cursor-pointer text-[1.15rem]">
                    (555) 555-5555
                </p>
            </div>

            {/* Right Side */}
            <div className=" lg:flex-1 flex flex-col lg:flex-row lg:justify-end items-center lg:items-start gap-10 lg:gap-58">


                {/* Hours */}
                <div>
                    <h4 className="lg:text-[2rem] text-[1.5rem] font-semibold font-[var(--font-heading)] mb-5">
                        Hours
                    </h4>

                    <p className="text-[1.10rem] leading-relaxed">
                        Monday – Friday<br />
                        10am – 6pm
                    </p>
                </div>

                {/* Find */}
                <div>
                    <h4 className="lg:text-[2rem] text-[1.5rem] font-semibold font-[var(--font-heading)] mb-5">
                        Find
                    </h4>

                    <div className=" text-[1.15rem]">
                        <p className="underline cursor-pointer">Home</p>
                        <p className="underline cursor-pointer">Contact</p>
                        <p className="underline cursor-pointer">Blog</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TOPFooter