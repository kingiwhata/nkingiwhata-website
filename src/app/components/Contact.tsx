import React from 'react';
import GithubIcon from '../../../public/GithubIcon';
import LinkedInIcon from '../../../public/LinkedInIcon';
import PSIcon from '../../../public/PSIcon';
import Title from './Title';
import Content from './Content';

export default function Contact({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 h-64 sm:h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row sm:w-fit w-full pl-20 pr-20 pt-4 items-center sm:items-start justify-center  sm:justify-start gap-4">
                <Title title="DETAILS" />
                <h2 className="text-xl sm:text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                    Let&apos;s Connect!
                </h2>
            </div>

            <Content>
                <p className="font-roboto text-lg sm:text-left text-center sm:text-xl text-shadow">
                    If you want to get in touch, talk to me about a project,
                    game together or just want to say hi, message me through my
                    socials/email below.
                </p>
            </Content>
            <div className="flex flex-row w-full sm:px-20 sm:pb-4 px-4 sm:mb-0 mb-4 gap-4 justify-center sm:justify-end">
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <a href="https://www.linkedin.com/in/nevada-kingi-whata-065572216">
                        <LinkedInIcon className="sm:h-14 h-fit w-fit sm:w-14" />
                    </a>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <a href="https://github.com/Vadaku">
                        <GithubIcon className="sm:h-14 h-fit w-fit sm:w-14" />
                    </a>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <a href="https://psnprofiles.com/VADAKU1">
                        <PSIcon className="sm:h-14 h-fit w-fit sm:w-14" />
                    </a>
                </div>
            </div>
        </div>
    );
}
