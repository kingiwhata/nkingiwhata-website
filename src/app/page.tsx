'use client';
import React from 'react';
import NamePlate from './components/NamePlate';
import About from './components/About';
import Center from './components/Center';
import CommandPanel from './components/Command';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
                <CommandPanel
                    commands={commands}
                    focusedIndex={focusedIndex}
                    handleMouseEnter={handleMouseEnter}
                />
                <Content focusedCommand={commands[focusedIndex]} />
            </section>
        </main>
    );
}

function Content({ focusedCommand }: { focusedCommand: string }) {
    return (
        <>
            <About show={focusedCommand === 'About'} />
            <Experience show={focusedCommand === 'Experience'} />
            <Contact show={focusedCommand === 'Contact'} />
            <Projects show={focusedCommand === 'Projects'} />
        </>
    );
}
