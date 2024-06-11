import React from 'react';

export default function Experience({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 sm:h-full h-64 bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row ">
                <div className="sm:w-fit w-full pl-20 pr-20 pt-4 flex h-full items-center sm:items-start flex-col gap-4">
                    <div className="absolute flex flex-col content-center items-center justify-center">
                        <h2
                            className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                        >
                            EXPERIENCE
                        </h2>
                    </div>

                    <h2 className="text-xl sm:text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                        21e8
                    </h2>
                </div>

                <div className="sm:flex hidden flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-extrabold"
                            >
                                LOCATION
                            </h2>
                        </div>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            Auckland, New Zealand
                        </h2>
                    </div>
                </div>

                <div className="hidden sm:flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2 className="relative bottom-[2.2rem] leading-6 text-outline text-lg font-roboto font-extrabold">
                                DATE
                            </h2>
                        </div>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            Jun. 21 - Dec. 23
                        </h2>
                    </div>
                </div>
            </div>

            <div className="flex sm:overflow-hidden overflow-scroll sm:mb-0 mb-8 flex-col gap-4 h-full sm:px-20 px-4 ">
                <div className="w-fit flex h-full justify-start flex-col gap-4">
                    <p className="sm:text-left text-clamp text-center font-roboto text-lg sm:text-xl text-shadow">
                        Utilised Typescript, HTML5, CSS, and the
                        Svelte/SvelteKit framework, along with Postman for API
                        testing, to create multiple front-end web applications
                        for exploring and interacting with the 21e8 blockchain.
                        Created and maintained RESTful APIs using Go, C++,
                        LevelDB and MongoDB enabling contributions to the 21e8
                        blockchain through proof-of-work cryptographic mining,
                        and facilitating data storing and retrieval from the
                        blockchain.
                    </p>
                </div>
            </div>
        </div>
    );
}
