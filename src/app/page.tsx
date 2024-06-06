import { NamePlate } from './components/NamePlate';

export default function Home() {
    return (
        <main className="flex flex-col h-screen items-center justify-between">
            <NamePlate />
            <div className="h-[500px] w-[500px] "></div>
            <div className="min-h-0 w-2/3 bg-[#2B417B] flex-1 flex flex-row outline outline-[#CFD3DE] outline-8 rounded-xl my-2">
                <div className="flex flex-col pb-6 gap-4 content-center items-center outline-[#CFD3DE] justify-center  w-1/4 outline outline-8 rounded-xl h-full ">
                    <div className="w-full  pl-24 h-full pt-4 flex justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.2rem] leading-6 text-stroke text-[24px] 
                                font-roboto font-extrabold"
                            >
                                Command
                            </h2>
                        </div>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            About
                        </h2>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            Experience
                        </h2>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            Contact
                        </h2>

                        <h2 className="text-3xl font-roboto font-semibold text-shadow">
                            Projects
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col pb-6  h-full ">
                    <div className="flex flex-row ">
                        <div className="w-fit pl-20 pt-4 flex h-full justify-start flex-col gap-4">
                            <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                <h2
                                    className="relative bottom-[2.2rem] leading-6 text-stroke text-[24px] 
                                font-roboto font-extrabold"
                                >
                                    Title
                                </h2>
                            </div>

                            <h2 className="text-3xl whitespace-nowrap font-roboto font-semibold text-shadow">
                                Software Engineer
                            </h2>
                        </div>

                        <div className="flex flex-col pb-6 gap-4 content-center items-center justify-center h-full ">
                            <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                                <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                    <h2
                                        className="relative bottom-[2.2rem] leading-6 text-stroke text-[24px] 
                                font-roboto font-extrabold"
                                    >
                                        Country
                                    </h2>
                                </div>

                                <h2 className="text-3xl font-roboto font-semibold text-shadow">
                                    NZ
                                </h2>
                            </div>
                        </div>

                        <div className="flex flex-col pb-6 gap-4 content-center items-center justify-center h-full ">
                            <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                                <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                    <h2
                                        className="relative bottom-[2.2rem] leading-6 text-stroke text-[24px] 
                                font-roboto font-extrabold"
                                    >
                                        Experience
                                    </h2>
                                </div>
                                <div className="flex h-full justify-center items-center">
                                    <div className="h-4 bg-[#CD229D]  w-40 outline-8 rounded-sm outline outline-[#CFD3DE] text-3xl font-roboto font-semibold text-shadow"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col pb-6 gap-4 content-center items-center justify-center h-full ">
                            <div className="w-full pl-24 pt-4 flex h-full justify-start flex-col gap-4">
                                <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                                    <h2
                                        className="relative bottom-[2.2rem] leading-6 text-stroke text-[24px] 
                                font-roboto font-extrabold"
                                    >
                                        Skills
                                    </h2>
                                </div>
                                <div className="flex h-full justify-center items-center">
                                    <div className="h-4 bg-[#CD229D]  w-40 outline-8 rounded-sm outline outline-[#CFD3DE] text-3xl font-roboto font-semibold text-shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pb-6 gap-4 h-full pl-20 pr-20">
                        <div className="w-fit flex h-full justify-start flex-col gap-4">
                            <p
                                className="
                                font-roboto"
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
