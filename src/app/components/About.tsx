import React from 'react';
import TitleSection from './Title';
import ContentSection from './Content';
import ProgressBar from './ProgressBar';

export default function About({ show }: { show: boolean }) {
    if (!show) return null;
    return (
        <div className="scale-in flex w-full rounded-xl justify-start items-center md:items-start flex-col gap-4 md:h-full h-64 bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row">
                <div className="w-full md:px-20 px-8 pt-4 flex items-center md:items-start h-full flex-col gap-4">
                    <TitleSection title="TITLE" />
                    <h2 className="text-3xl font-roboto font-semibold text-shadow">
                        Software Engineer
                    </h2>
                </div>

                <div className="flex-col gap-4 items-center lg:flex hidden justify-center h-full">
                    <div className="w-full pl-8 lg:pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <TitleSection title="COUNTRY" />
                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            NZ
                        </h2>
                    </div>
                </div>

                <div className="hidden flex-col gap-4 items-center xl:flex justify-center h-full">
                    <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <TitleSection title="SKILLS" />
                        <ProgressBar style={'skill-bar-bg'} />
                    </div>
                </div>

                <div className="hidden lg:flex flex-col gap-4 items-center justify-center h-full">
                    <div className="w-full xl:pl-8 pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                        <TitleSection title="YRS EXPERIENCE" />
                        <ProgressBar style={'exp-bar-bg'} />
                    </div>
                </div>
            </div>

            <ContentSection>
                <p>
                    Software engineer with two and a half years experience,
                    specializing in blockchain and front-end development, with
                    extensive experience in Typescript, HTML5 and CSS3 as well
                    as proficiency in frameworks like Svelte, React and NextJS.
                    I am passionate about creating intuitive and responsive web
                    applications that provide seamless user experiences across
                    all devices. I thrive on continuous learning and innovation,
                    consistently seeking out new challenges, while also keeping
                    up with changes within the ever evolving tech industry.
                </p>
            </ContentSection>
        </div>
    );
}
