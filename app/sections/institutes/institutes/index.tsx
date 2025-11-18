import InstituteCard from "../../../components/institute-card";

const InstitutesSection = () => {
    return (
        <div className="px-10 md:px-30 bg-neutral-200 pb-20">
            <div className="flex gap-y-10 flex-col md:flex-row gap-x-10 mb-10">
                <InstituteCard />
                <InstituteCard />
            </div>
            <div className="flex gap-y-10 flex-col md:flex-row gap-x-10 mb-10">
                <InstituteCard />
                <InstituteCard />
            </div>
            <div className="flex gap-y-10 flex-col md:flex-row gap-x-10">
                <InstituteCard />
                <InstituteCard />
            </div>
        </div>
    );
}

export default InstitutesSection;
