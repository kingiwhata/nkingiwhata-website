import React from 'react';

export default function Experience({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <section className="flex flex-row">
            <div className="w-fit pl-20 pr-20 pt-4 flex h-full justify-start flex-col gap-4">
                <div className="absolute flex flex-col content-center items-center justify-center">
                    <h2
                        className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                    >
                        COMPANY
                    </h2>
                </div>

                <h2 className="text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                    21e8
                </h2>
            </div>

            <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
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

            <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
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

            <div></div>
        </section>
    );
}
