import React from 'react';

export default function ProgressBar({ style }) {
    const progStyle = style == 'exp-bar-bg' ? 'w-1/3' : 'w-full';
    return (
        <div className="flex h-full justify-center items-center">
            <div className="h-4 w-40 outline-8 rounded-sm outline outline-[#CFD3DE]">
                <div
                    className={`${style} ${progStyle} h-4 text-3xl font-roboto font-semibold text-shadow`}
                ></div>
            </div>
        </div>
    );
}
