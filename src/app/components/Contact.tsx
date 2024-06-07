import React from 'react';

export default function Contact({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <section className="flex flex-col gap-4">
                <div className="flex flex-row">
                    <div className="w-fit pl-20 pr-20 pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="absolute flex flex-col content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                            >
                                EMAIL
                            </h2>
                        </div>

                        <h2 className="text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                            kingiwhata@gmail.com
                        </h2>
                    </div>

                    <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                        <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                            <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                <h2
                                    className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-extrabold"
                                >
                                    LINKEDIN
                                </h2>
                            </div>

                            <h2 className="text-3xl font-roboto font-semibold text-shadow">
                                Nevada
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                        <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                            <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                <h2 className="relative bottom-[2.2rem] leading-6 text-outline text-lg font-roboto font-extrabold">
                                    GITHUB
                                </h2>
                            </div>

                            <h2 className="text-3xl font-roboto font-semibold text-shadow">
                                Vadaku
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
