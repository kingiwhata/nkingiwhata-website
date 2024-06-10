import React from 'react';
import GithubIcon from '../GithubIcon';
import LinkedInIcon from '../LinkedInIcon';
import PSIcon from '../PSIcon';

export default function Contact({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 h-64 sm:h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row">
                <div className="sm:w-fit w-full pl-20 pr-20 pt-4 flex sm:h-auto h-full items-center sm:items-start justify-start flex-col gap-4">
                    <div className="absolute flex flex-col content-center items-center justify-center">
                        <h2
                            className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                        >
                            DETAILS
                        </h2>
                    </div>

                    <h2 className="text-xl sm:text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                        Let&apos;s Connect!
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-4 h-full sm:px-20 px-4">
                <div className="w-fit flex h-full justify-start flex-col gap-4">
                    <p
                        className="
                                font-roboto text-lg sm:text-left text-center sm:text-xl text-shadow"
                    >
                        If you want to get in touch, talk to me about a project,
                        game together or just want to say hi, message me through
                        my socials/email below.
                    </p>
                </div>
            </div>
            <div className="flex flex-row w-full sm:px-20 sm:pb-4 pb-0 px-4 sm:mb-0 mb-4 gap-4 content-center sm:content-end justify-center sm:justify-end">
                <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pt-0 sm:pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="sm:h-14  h-fit w-fit sm:w-14">
                            <a href="https://www.linkedin.com/in/nevada-kingi-whata-065572216">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pt-0 sm:pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="sm:h-14  h-fit w-fit sm:w-14">
                            <a href="https://github.com/Vadaku">
                                <GithubIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                    <div className="w-full pt-0 sm:pt-4 flex h-full justify-start flex-col gap-4">
                        <div className="sm:h-14  h-fit w-fit sm:w-14">
                            <a href="https://psnprofiles.com/VADAKU1">
                                <PSIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
