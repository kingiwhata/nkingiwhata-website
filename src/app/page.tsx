'use client';
import { NamePlate } from './components/NamePlate';
import Pointer from './Pointer';
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const commands = ['About', 'Experience', 'Contact', 'Projects'];

    const handleKeyDown = useCallback(
        (event: any) => {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                    setFocusedIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : commands.length - 1,
                    );
                    break;
                case 'ArrowDown':
                    setFocusedIndex((prevIndex) =>
                        prevIndex < commands.length - 1 ? prevIndex + 1 : 0,
                    );
                    break;
                default:
                    break;
            }
        },
        [commands.length],
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <main className="flex flex-col h-screen items-center justify-between">
            <NamePlate />
            <div className="h-[500px] w-[500px] "></div>
            <div className="min-h-0 w-9/12 flex-1 flex flex-row my-2 gap-[1.05rem]">
                <div className="flex flex-col bg-[#2B417B]  gap-4 content-center items-center outline-[#CFD3DE] justify-center  w-1/3 outline outline-8 rounded-xl h-full ">
                    <div className="w-full  pl-24 pr-24 h-full pt-4 flex justify-start flex-col gap-4">
                        {commands.map((command, index) => (
                            <div className="flex flex-row relative">
                                <div
                                    className="absolute -left-16"
                                    style={{
                                        display:
                                            index === focusedIndex
                                                ? ''
                                                : 'none',
                                    }}
                                >
                                    <Pointer />
                                </div>
                                <h2 className="text-3xl h-fit font-roboto font-semibold text-shadow">
                                    {command}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex rounded-xl flex-col gap-4 h-full bg-[#2B417B] outline outline-8 outline-[#CFD3DE]">
                    <div className="flex flex-row ">
                        <div className="w-fit pl-20 pr-20 pt-4 flex h-full justify-start flex-col gap-4">
                            <div className="absolute flex flex-col content-center items-center justify-center">
                                <h2
                                    className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                                >
                                    TITLE
                                </h2>
                            </div>

                            <h2 className="text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                                Software Engineer
                            </h2>
                        </div>

                        <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                            <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                                <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                    <h2
                                        className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-extrabold"
                                    >
                                        COUNTRY
                                    </h2>
                                </div>

                                <h2 className="text-3xl font-roboto font-semibold text-shadow">
                                    NZ
                                </h2>
                            </div>
                        </div>

                        <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                            <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                                <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                    <h2 className="relative bottom-[2.2rem] leading-6 text-outline text-lg font-roboto font-extrabold">
                                        SKILLS
                                    </h2>
                                </div>
                                <div className="flex h-full justify-center items-center">
                                    <div className="h-4 w-40 outline-8 rounded-sm outline outline-[#CFD3DE] ">
                                        <div className="h-4 skill-bar-bg text-3xl font-roboto font-semibold text-shadow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col  gap-4 content-center items-center justify-center h-full ">
                            <div className="w-full pl-8 pt-4 flex h-full justify-start flex-col gap-4">
                                <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                    <h2
                                        className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-extrabold"
                                    >
                                        YRS EXPERIENCE
                                    </h2>
                                </div>
                                <div className="flex h-full justify-center items-center">
                                    <div className="h-4 w-40 outline-8 rounded-sm outline outline-[#CFD3DE] ">
                                        <div className="h-4 exp-bar-bg  w-1/3 text-3xl font-roboto font-semibold text-shadow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-full pl-20 pr-20">
                        <div className="w-fit flex h-full justify-start flex-col gap-4">
                            <p
                                className="
                                font-roboto text-xl text-shadow"
                            >
                                Welcome to my portfolio, Software engineer with
                                a passion for developing innovative solutions to
                                complex problems. With expertise in full-stack
                                development, cloud technologies, and agile
                                methodologies, I create efficient, scalable, and
                                user-friendly applications. My experience spans
                                across various projects, from building robust
                                e-commerce platforms to designing real-time chat
                                applications and developing machine learning
                                pipelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
