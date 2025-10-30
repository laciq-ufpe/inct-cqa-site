import { Linkedin, Mail } from "lucide-react";

const MemberCard = () => {
    return (
        <div className="
                w-1/2 py-10 px-7 rounded-xl bg-neutral-50 transition duration-500 z-1
                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-md hover:drop-shadow-red-700/50 
            "
        >
            <div className="flex flex-row gap-x-4 items-center border-b border-neutral-400/50 pb-7">
                <div className="p-7 bg-red-800 rounded-[50%] flex items-center justify-center">
                    <p className="text-xl">FS</p>
                </div>
                <div>
                    <h1 className="text-xl text-neutral-800 font-semibold">Prof. Fulano da Silva</h1>
                    <p className="text-md text-red-800">Coordenador Geral</p>
                    <p className="text-md text-neutral-600">UFPE</p>
                </div>
            </div>
            <p className="text-md text-neutral-800 mt-5"><strong className="font-semibold">Área:</strong> Computação Quântica</p>
            <div className="flex flex-row gap-x-3 mt-2">
                <div className="flex items-center w-10 px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-md transition-color duration-200">
                    <Mail className="text-neutral-600 w-full" />
                </div>
                <div className="flex items-center w-10 px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-md transition-color duration-200">
                    <Linkedin className="text-neutral-600 w-full" />
                </div>
            </div>
        </div>
    );
}

export default MemberCard;
