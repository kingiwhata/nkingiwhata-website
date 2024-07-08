import React from 'react';

export default function ContentSection({ children }) {
    return (
        <section className="flex flex-col gap-4 h-full md:mb-0 mb-8 md:overflow-hidden overflow-scroll md:px-20 px-4">
            <div className="w-fit flex h-full justify-start flex-col gap-4">
                <div className="font-roboto text-clamp text-lg md:text-xl text-shadow md:text-left text-center">
                    {children}
                </div>
            </div>
        </section>
    );
}
