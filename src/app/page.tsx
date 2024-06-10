'use client';
import About from './components/About';
import Center from './components/Center';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { NamePlate } from './components/NamePlate';
import Pointer from './Pointer';
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [enterPress, setIsEnter] = useState(false);
    const commands = ['About', 'Experience', 'Contact', 'Projects'];

    const handleMouseEnter = (index: any) => {
        setFocusedIndex(index);
    };
    const handleKeyDown = useCallback(
        (event: any) => {
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
            <div className="h-[50%] w-full relative  flex items-center justify-center">
                <Center
                    isWarp={commands[focusedIndex] == 'Projects' && enterPress}
                />
            </div>
            <div className="h-32 w-full sm:w-9/12 flex-1 flex flex-row  my-2 gap-[1.05rem]">
                <div className="flex flex-col bg-[#2B417B]  gap-4 content-center items-center outline-[#CFD3DE] justify-center  w-full sm:w-1/3 outline outline-8 rounded-xl h-full cursor-none">
                    <div className="w-full pl-24 pr-24 sm:px-24 h-full pt-4 flex justify-start flex-row sm:flex-col gap-4">
                        <div className="absolute flex flex-col content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-outline text-lg 
                                font-roboto font-bold"
                            >
                                COMMAND
                            </h2>
                        </div>
                        {commands.map((command, index) => (
                            <div className="flex flex-row relative" key={index}>
                                <div
                                    className="absolute -left-16"
                                    style={{
                                        display:
                                            index === focusedIndex
                                                ? 'block'
                                                : 'none',
                                    }}
                                >
                                    <Pointer filterID={index} key={index} />
                                </div>
                                <h2
                                    className="text-3xl h-fit font-roboto font-semibold text-shadow"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                >
                                    {command}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full hidden sm:flex">
                    <About show={commands[focusedIndex] == 'About'} />
                    <Experience show={commands[focusedIndex] == 'Experience'} />
                    <Contact show={commands[focusedIndex] == 'Contact'} />
                </div>
            </div>
        </main>
    );
}
