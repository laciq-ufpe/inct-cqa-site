import InstituteCard from "../../../components/institute-card";
import membersByGroup from "../../../data/members";

const InstitutesSection = () => {
    const allMembers = Object.values(membersByGroup).flat();
    const institutions = new Set(allMembers.map(m => m.institution));

    return (
        <div className="px-10 md:px-30 bg-neutral-200 pb-20">
            <div>
                <div className="flex flex-row flex-wrap gap-5">
                    {[...institutions].map((inst, i) => 
                        <InstituteCard key={i} institution={inst} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default InstitutesSection;
