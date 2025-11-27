import membersByGroup from "../../../data/members";

const NumbersSection = () => {
    const allMembers = Object.values(membersByGroup).flat();

    const getInstitutionsAmount = () => {
        const uniqueInstitutions = new Set(allMembers.map(m => m.institution));
        return uniqueInstitutions.size;
    }

    const getStatesAmount = () => {
        const uniqueStates = new Set(allMembers.map(m => m.uf));
        return uniqueStates.size;
    }

    const getAreasAmount = () => {
        const allAreas: string[] = [];
        allMembers.forEach((m) => {
            m.area.split("\/").forEach((a) => allAreas.push(a));
        });
        const uniqueAreas = new Set(allAreas);
        return uniqueAreas.size;
    }

    return (
        <div className="px-10 md:px-30 py-20 bg-neutral-200 gap-y-5 flex flex-col lg:flex-row justify-between">
            <div className="w-full md:w-auto px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50">
                <h1 className="text-red-800 text-4xl text-center font-semibold mb-2">{getInstitutionsAmount()}</h1>
                <p className="text-md text-neutral-600 text-center">Instituições Parceiras</p>
            </div>
            <div className="w-full md:w-auto px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50">
                <h1 className="text-red-800 text-4xl text-center font-semibold mb-2">{getAreasAmount()}+</h1>
                <p className="text-md text-neutral-600 text-center">Áreas de Pesquisa</p>
            </div>
            <div className="w-full md:w-auto px-20 py-10 rounded-xl drop-shadow-sm drop-shadow-neutral-800/50 bg-neutral-50">
                <h1 className="text-red-800 text-4xl text-center font-semibold mb-2">{getStatesAmount()}</h1>
                <p className="text-md text-neutral-600 text-center">Estados Representados</p>
            </div>
        </div>
    );
}

export default NumbersSection;
