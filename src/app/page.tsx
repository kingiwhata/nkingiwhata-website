'use client';
import React from 'react';
import About from './components/About';
import Center from './components/Center';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { NamePlate } from './components/NamePlate';
import Pointer from '../../public/Pointer';
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [enterPress, setIsEnter] = useState(false);
    const commands = ['About', 'Experience', 'Contact', 'Projects'];

    const handleMouseEnter = (index: number) => {
        setFocusedIndex(index);
    };
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            event.preventDefault();
            setIsEnter(false);
            switch (event.key) {
                case 'k':
                case 'w':
                case 'ArrowUp':
                    setFocusedIndex((prevIndex) =>
                        prevIndex > 0 ? prevIndex - 1 : commands.length - 1,
                    );
                    break;
                case 'j':
                case 's':
                case 'ArrowDown':
                    setFocusedIndex((prevIndex) =>
                        prevIndex < commands.length - 1 ? prevIndex + 1 : 0,
                    );
                    break;
                case 'Enter':
                    setIsEnter(true);
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
        <main
            className="flex flex-col h-full items-center"
            style={{
                animation:
                    commands[focusedIndex] == 'Projects' && enterPress
                        ? 'warpEffect 3s forwards linear'
                        : '',
            }}
        >
            <section className="w-full  h-fit md:h-40 flex items-start md:items-center justify-center">
                <NamePlate />
            </section>
            <section className="flex-1 overflow-hidden w-full relative  flex items-center justify-center">
                <Center
                    isWarp={commands[focusedIndex] == 'Projects' && enterPress}
                />
            </section>
            <section className="md:h-[17rem] flex-none h-fit w-full 2xl:w-3/4 px-2 flex flex-col-reverse md:flex-row  my-2 gap-[1.05rem]">
                <div className="flex flex-col bg-[#2B417B]  h-auto md:h-full gap-4  items-center outline-[#CFD3DE] justify-center  w-full md:w-1/3 outline outline-8 rounded-xl">
                    <div className="w-full md:px-24 pt-4 md:pb-0 pb-4 flex justify-center h-full md:justify-start flex-row md:flex-col gap-4 z-10">
                        <div className="absolute flex flex-col items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                            >
                                COMMAND
                            </h2>
                        </div>
                        {commands.map((command, index) => (
                            <div className="flex flex-row relative" key={index}>
                                <div className="md:flex hidden">
                                    <div
                                        className="absolute -left-16 md:flex hidden"
                                        style={{
                                            display:
                                                index === focusedIndex
                                                    ? 'flex'
                                                    : 'none',
                                        }}
                                    >
                                        <Pointer filterID={index} key={index} />
                                    </div>
                                </div>
                                <h2
                                    className="md:text-3xl text-lg h-fit font-roboto font-semibold text-shadow"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    {command}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <About show={commands[focusedIndex] == 'About'} />
                <Experience show={commands[focusedIndex] == 'Experience'} />
                <Contact show={commands[focusedIndex] == 'Contact'} />
                <Projects show={commands[focusedIndex] == 'Projects'} />
            </section>
        </main>
    );
}
