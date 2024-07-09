import React from 'react';
import Pointer from '../../../public/Pointer';
import TitleSection from './Title';

export default function CommandPanel({
    commands,
    focusedIndex,
    handleMouseEnter,
}) {
    return (
        <div className="flex flex-col bg-[#2B417B] h-auto md:h-full gap-4 items-center outline-[#CFD3DE] justify-center w-full md:w-1/3 outline outline-8 rounded-xl">
            <div className="w-full md:px-24 pt-4 md:pb-0 pb-4 flex justify-center h-full md:justify-start flex-row md:flex-col gap-4 z-10">
                <TitleSection title="COMMAND" />
                {commands.map((command: string, index: number) => (
                    <CommandItem
                        key={index}
                        index={index}
                        command={command}
                        focusedIndex={focusedIndex}
                        handleMouseEnter={handleMouseEnter}
                    />
                ))}
            </div>
        </div>
    );
}

function CommandItem({ index, command, focusedIndex, handleMouseEnter }) {
    return (
        <div className="flex flex-row relative">
            <div className="md:flex hidden">
                <div
                    className="absolute -left-16"
                    style={{
                        display: index === focusedIndex ? 'flex' : 'none',
                    }}
                >
                    <Pointer filterID={index} />
                </div>
            </div>
            <h2
                className="md:text-3xl text-lg h-fit font-roboto font-semibold text-shadow"
                onMouseEnter={() => handleMouseEnter(index)}
            >
                {command}
            </h2>
        </div>
    );
}
