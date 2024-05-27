import { NamePlate } from './components/NamePlate';

export default function Home() {
    return (
        <main className="flex flex-col h-screen items-center justify-between">
            <NamePlate />
            <div className="h-[500px] w-[500px] "></div>
            <div className="min-h-0 w-3/4 bg-[#2B417B] flex-1 border-8 rounded-xl"></div>
        </main>
    );
}
