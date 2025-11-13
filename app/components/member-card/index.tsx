import { Mail } from "lucide-react";
import type { Member } from "../../data/members";

type prop = {
    member: Member
}

const MemberCard = ({member}: prop) => {
    const areaMap: {[area: string]: string} = {
        'COM': 'Computação',
        'MAT': 'Matemática',
        'FIS': 'Física',
        'TELECOM': 'Telecomunicações',
        'HISTORIA': 'História'
    }

    const getInitials = (name: string) =>
        name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0);

    const formatFields = (area: string) => {
        const areas = area.split('/');
        return (
            <p className="text-md text-neutral-800 mt-5">
                <strong className="font-semibold">Área{areas.length > 1 ? 's' : ''}:</strong>
                {' ' + areas.map((a) => areaMap[a]).toString().replaceAll(',', ', ')}
            </p>
        );
    }

    return (
        <div className="
                flex-1 basis-0 min-w-100 py-10 px-7 rounded-xl bg-neutral-50 transition duration-500 z-1
                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-md hover:drop-shadow-red-700/50 
            "
        >
            <div className="flex flex-row gap-x-4 items-center border-b border-neutral-400/50 pb-7">
                <div className="bg-red-800 rounded-[50%] w-20 min-w-20 h-20 flex items-center justify-center overflow-hidden">
                    {member.image != null ?
                        <img src={member.image} className="w-full h-full object-cover" /> :
                        <p className="text-xl">{getInitials(member.name)}</p>
                    }
                </div>
                <div>
                    <h1 className="text-xl text-neutral-800 font-semibold">{member.title != null ? member.title : ''} {member.name}</h1>
                    <p className="text-md text-red-800">{member.locality}</p>
                    <p className="text-md text-neutral-600">{member.institution.replaceAll('/', ', ')}</p>
                </div>
            </div>
            {formatFields(member.area)}
            <div className="flex flex-row gap-x-3 mt-2">
                <a
                    className="flex items-center px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-md transition-color duration-200"
                    href={`mailto:${member.email}`}
                    target="_blank"
                >
                    <Mail className="text-neutral-600 h-5" />
                </a>
                <a
                    className="flex items-center w-10 px-3 py-1 cursor-pointer hover:bg-neutral-200 rounded-md transition-color duration-200"
                    href={member.lattes}
                    target="_blank"
                >
                    <img src="/icons/lattes.png" className="text-neutral-600 h-5 object-cover" />
                </a>
            </div>
        </div>
    );
}

export default MemberCard;
