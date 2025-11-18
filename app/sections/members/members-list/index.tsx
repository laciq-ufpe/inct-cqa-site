import MemberCard from "../../../components/member-card";
import membersByGroup from "../../../data/members";

const MembersListSection = () => {
    const firstToUpper = (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1)

    return (
        <div className="px-10 md:px-30 py-20 bg-neutral-200">
            {Object.entries(membersByGroup).map(([group, members]) => 
            <div key={group}>
                <h1 className="text-2xl text-neutral-800 font-semibold mb-5">{firstToUpper(group)}:</h1>
                <div className="flex flex-row flex-wrap gap-5">
                    {members.map((m, i) => 
                        <MemberCard key={i} member={m} />
                    )}
                </div>
            </div>
            )}
        </div>
    );
}

export default MembersListSection;
