import React from 'react';

export default function Projects({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 h-64 sm:h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row">
                <div className="sm:w-fit w-full pl-20 pr-20 pt-4 flex sm:h-auto h-full items-center sm:items-start justify-start flex-col gap-4">
                    <div className="absolute flex flex-col  items-center justify-center">
                        <h2
                            className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                        >
                            PROJECTS
                        </h2>
                    </div>

                    <h2 className="text-xl sm:text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                        Coming Soon!
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-4 h-full sm:px-20 px-4"></div>
            <div className="flex flex-row w-full sm:px-20 sm:pb-4 pb-0 px-4 sm:mb-0 mb-4 gap-4  sm:content-end justify-center sm:justify-end"></div>
        </div>
    );
}
