import React from 'react';

export default function TitleSection({ title }) {
    return (
        <div className="absolute flex flex-col items-center justify-center">
            <h2 className="relative bottom-[2.2rem] leading-6 text-outline text-lg font-roboto font-extrabold">
                {title}
            </h2>
        </div>
    );
}
