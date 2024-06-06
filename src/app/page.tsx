import { NamePlate } from './components/NamePlate';

export default function Home() {
    return (
        <main className="flex flex-col h-screen items-center justify-between">
            <NamePlate />
            <div className="h-[500px] w-[500px] "></div>
            <div className="min-h-0 w-2/3 bg-[#2B417B] flex-1 outline outline-[#CFD3DE] outline-8 rounded-xl my-2">
                <div className="flex flex-col pb-6 gap-4 content-center items-center outline-[#CFD3DE] justify-center  w-1/3 outline outline-8 rounded-xl h-full ">
                    <div className="w-full  pl-24 flex justify-start flex-col gap-4">
                        <div className="absolute flex flex-col gap-4 content-center items-center justify-center">
                            <h2
                                className="relative bottom-[2.5rem] leading-6 text-stroke text-[24px] 
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
                <div></div>
            </div>
        </main>
    );
}
