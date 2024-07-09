import React from 'react';
import TitleSection from './Title';

export default function Projects({ show }: { show: boolean }) {
    if (!show) return;
    return (
        <div className="scale-in flex w-full rounded-xl flex-col gap-4 h-64 sm:h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
            <div className="flex flex-row">
                <div className="sm:w-fit w-full pl-20 pr-20 pt-4 flex sm:h-auto h-full items-center sm:items-start justify-start flex-col gap-4">
                    <TitleSection title="PROJECTS" />
                    <h2 className="text-xl sm:text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                        Coming Soon!
                    </h2>
                </div>
            </div>
        </div>
    );
}
