import React from 'react';

export default function About({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl justify-start items-center flex-col gap-4 sm:h-full h-64 bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row ">
                <div className="w-fit pl-20 pr-20 pt-4 flex h-full items-center justify-start flex-col gap-4">
                    <div className="absolute flex flex-col content-center items-center justify-center">
                        <h2
                            className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                        >
                            TITLE
                        </h2>
                    </div>

                    <h2 className="text-xl sm:text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                        Software Engineer
                    </h2>
                </div>

                <div className="flex-col gap-4 content-center items-center sm:flex hidden justify-center h-full ">
                    <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-extrabold"
                            >
                                COUNTRY
                            </h2>
                        </div>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            NZ
                        </h2>
                    </div>
                </div>

                <div className="hidden flex-col  gap-4 content-center items-center sm:flex  justify-center  h-full ">
                    <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2 className="relative bottom-[2.2rem] leading-6 text-outline text-lg font-roboto font-extrabold">
                                SKILLS
                            </h2>
                        </div>
                        <div className="flex h-full justify-center items-center">
                            <div className="h-4 w-40 outline-8 rounded-sm outline outline-[#CFD3DE] ">
                                <div className="h-4 skill-bar-bg text-3xl font-roboto font-semibold text-shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pl-8 pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-extrabold"
                            >
                                YRS EXPERIENCE
                            </h2>
                        </div>
                        <div className="flex h-full justify-center items-center">
                            <div className="h-4 w-40 outline-8 rounded-sm outline outline-[#CFD3DE] ">
                                <div className="h-4 exp-bar-bg  w-1/3 text-3xl font-roboto font-semibold text-shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 h-full overflow-scroll pl-20 pr-20">
                <div className="w-fit flex h-full justify-start flex-col gap-4">
                    <p
                        className="
                                font-roboto text-lg sm:text-xl text-shadow text-center"
                    >
                        Welcome to my portfolio, Software engineer with a
                        passion for developing innovative solutions to complex
                        problems. With expertise in full-stack development,
                        cloud technologies, and agile methodologies, I create
                        efficient, scalable, and user-friendly applications. My
                        experience spans across various projects, from building
                        robust e-commerce platforms to designing real-time chat
                        applications and developing machine learning pipelines.
                    </p>
                </div>
            </div>
        </div>
    );
}
