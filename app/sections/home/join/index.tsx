import { ArrowRightIcon } from "lucide-react";

const JoinSection = () => {
    return (
        <div className="px-30 py-20 bg-neutral-200 text-center flex flex-col items-center">
            <h1 className="text-4xl text-neutral-950 font-bold">Faça Parte Desta Iniciativa</h1>
            <p className="text-xl text-neutral-700 mt-7 mb-9">Conheça nossos membros e descubra como sua instituição pode participar desta rede de colaboração acadêmica.</p>
            <button className="flex flex-row items-center gap-x-3 bg-red-900 text-lg py-3 px-8 rounded-lg hover:bg-red-950 transition-color duration-200 cursor-pointer">
                Conheça os membros <ArrowRightIcon className="w-5" />
            </button>
        </div>
    );
}

export default JoinSection;
