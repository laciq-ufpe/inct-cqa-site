import { Building2, MapPin } from "lucide-react";
import HighlightedIcon from "../highlighted-icon";

const InstituteCard = () => {
    return (
        <div className="
                w-full md:w-1/2 py-10 px-10 rounded-xl bg-neutral-50 transition duration-500 z-1
                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-md hover:drop-shadow-red-700/50 
            "
        >
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-xl text-neutral-800 font-semibold">Universidade Federal de Pernambuco</h1>
                    <div className="flex flex-row items-center gap-x-2">
                        <MapPin className="text-neutral-700 w-5" />
                        <p className="text-md text-neutral-600">Recife, PE</p>
                    </div>
                </div>
                <HighlightedIcon icon={<Building2 className="text-red-800" />} />
            </div>
            <p className="text-neutral-600 text-md mt-7 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="text-neutral-800 text-md font-semibold">Áreas de Destaque:</p>
            <div className="flex flex-row flex-wrap pt-4 gap-x-2">
                <span className="text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl">Computação quântica</span>
                <span className="text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl">Machine Learning</span>
                <span className="text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl">IA</span>
            </div>
        </div>
    );
}

export default InstituteCard;
