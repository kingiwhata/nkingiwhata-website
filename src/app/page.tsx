'use client';
import About from './components/About';
import Center from './components/Center';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { NamePlate } from './components/NamePlate';
import Pointer from './Pointer';
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
            className="flex flex-col h-screen items-center justify-between"
            style={{
                animation:
                    commands[focusedIndex] == 'Projects' && enterPress
                        ? 'warpEffect 3s forwards linear'
                        : '',
            }}
        >
            <NamePlate />
            <div className="overflow-hidden h-[520px] w-full relative  flex items-center justify-center">
                <Center
                    isWarp={commands[focusedIndex] == 'Projects' && enterPress}
                />
            </div>
            <div className="sm:h-32 h-fit w-full lg:w-9/12 px-2 sm:flex-1 flex-[0] flex flex-col-reverse sm:flex-row  my-2 gap-[1.05rem]">
                <div className="flex flex-col bg-[#2B417B]  h-auto sm:h-full gap-4  items-center outline-[#CFD3DE] justify-center  w-full sm:w-1/3 outline outline-8 rounded-xl">
                    <div className="w-full sm:px-24 pt-4 sm:pb-0 pb-4 flex justify-center h-full sm:justify-start flex-row sm:flex-col gap-4 z-10">
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
                                <div className="sm:flex hidden">
                                    <div
                                        className="absolute -left-16 sm:flex hidden"
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
                                    className="sm:text-3xl text-lg h-fit font-roboto font-semibold text-shadow"
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
            </div>
        </main>
    );
}
