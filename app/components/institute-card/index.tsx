import { Building2, MapPin } from "lucide-react";
import HighlightedIcon from "../highlighted-icon";
import membersByGroup from "../../data/members";

type props = {
    institution: string;
}

const areaMap: {[area: string]: string} = {
    'COM': 'Computação',
    'MAT': 'Matemática',
    'FIS': 'Física',
    'TELECOM': 'Telecomunicações',
    'HISTORIA': 'História'
}

const InstituteCard = ({institution}: props) => {
    const allMembers = Object.values(membersByGroup).flat();
    const multiple = institution.split('/');
    const members = allMembers.filter((m) => multiple.includes(m.institution));

    const formatName = () => multiple.length > 1 ? multiple[1] : institution;

    const findCity = () => members[0].locality;

    const findState = () => members[0].uf ? ', ' + members[0].uf : '';

    const getFields = () => {
        const allFields: string[] = [];
        members.forEach((m) => {
            m.area.split('\/').forEach((a) => allFields.push(a) );
        });
        return [...new Set(allFields)];
    }

    return (
        <div className="
                flex-1 basis-0 min-w-100 py-10 px-10 rounded-xl bg-neutral-50 transition duration-500 z-1
                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-md hover:drop-shadow-red-700/50 
            "
        >
            <div className="flex flex-row justify-between mb-10">
                <div>
                    <h1 className="text-2xl text-neutral-800 font-semibold">{formatName()}</h1>
                    <div className="flex flex-row items-center gap-x-2">
                        <MapPin className="text-neutral-700 w-5" />
                        <p className="text-md text-neutral-600">{findCity()}{findState()}</p>
                    </div>
                </div>
                <HighlightedIcon icon={<Building2 className="text-red-800" />} />
            </div>
            {/* <p className="text-neutral-600 text-md mt-7 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            <p className="text-neutral-800 text-md font-semibold">Áreas de Destaque:</p>
            <div className="flex flex-row flex-wrap pt-4 gap-x-2">
                {getFields().map((a, i) => 
                    <span key={i} className="text-neutral-800 text-sm bg-neutral-200 px-5 py-1 rounded-2xl">{areaMap[a]}</span>
                )}
            </div>
        </div>
    );
}

export default InstituteCard;
