import React from 'react';
import GithubIcon from '../GithubIcon';
import LinkedInIcon from '../LinkedInIcon';
import PSIcon from '../PSIcon';

export default function Contact({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row">
                <div className="w-fit pl-20 pr-20 pt-4 flex h-full justify-start flex-col gap-4">
                    <div className="absolute flex flex-col content-center items-center justify-center">
                        <h2
                            className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                        >
                            DETAILS
                        </h2>
                    </div>

                    <h2 className="text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                        Let&apos;s Connect!
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-4 h-full sm:px-20 px-4">
                <div className="w-fit flex h-full justify-start flex-col gap-4">
                    <p
                        className="
                                font-roboto text-lg sm:text-xl text-shadow"
                    >
                        If you want to get in touch, talk to me about a project,
                        game together or just want to say hi, message me through
                        my socials/email below.
                    </p>
                </div>
            </div>
            <div className="flex flex-row w-full pl-20 pr-20 gap-4  content-end justify-end">
                <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="h-14 w-14">
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="h-14 w-14">
                            <GithubIcon />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="h-14 w-14">
                            <PSIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
