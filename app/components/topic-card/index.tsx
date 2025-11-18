
type props = {
    icon: React.ReactNode
    title: string;
    description: string;
}

const TopicCard = ({icon, title, description} : props) => {
    return (
        <div
            className="
                w-full md:w-25/100 flex flex-col items-center py-20 px-10 gap-y-5 rounded-xl bg-neutral-50
                drop-shadow-sm drop-shadow-neutral-800/50 hover:drop-shadow-xl hover:drop-shadow-red-700/50
                transition duration-500 delay- z-1
            "
        >
            {icon}
            <h1 className="text-neutral-950 text-lg text-center font-semibold">{title}</h1>
            <p className="text-neutral-700 text-center">{description}</p>
        </div>
    );
}

export default TopicCard;
