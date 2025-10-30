import MemberCard from "~/components/member-card";

const MembersListSection = () => {
    return (
        <div className="px-30 py-20 bg-neutral-200">
            <h1 className="text-2xl text-neutral-800 font-semibold mb-5">Coordenação:</h1>
            <div className="flex flex-row gap-x-10 mb-10">
                <MemberCard />
                <MemberCard />
            </div>
            <div className="flex flex-row gap-x-10 mb-10">
                <MemberCard />
                <MemberCard />
            </div>
            <div className="flex flex-row gap-x-10 mb-10">
                <MemberCard />
                <MemberCard />
            </div>
            <h1 className="text-2xl text-neutral-800 font-semibold mb-5">Pesquisadores:</h1>
            <div className="flex flex-row gap-x-10 mb-10">
                <MemberCard />
                <MemberCard />
            </div>
            <div className="flex flex-row gap-x-10 mb-10">
                <MemberCard />
                <MemberCard />
            </div>
            <div className="flex flex-row gap-x-10 mb-10">
                <MemberCard />
                <div className="w-1/2"></div>
            </div>
        </div>
    );
}

export default MembersListSection;
