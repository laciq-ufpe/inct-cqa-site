type props = {
    title: string;
    description: string;
}

const ValueCard = ({title, description}: props) => {
    return (
        <div className="px-5 py-10 rounded-xl bg-neutral-50 drop-shadow-sm drop-shadow-neutral-800/50">
            <h2 className="text-neutral-800 text-xl font-semibold">{title}</h2>
            <p className="text-neutral-600 text-md">{description}</p>
        </div>
    );
}

export default ValueCard;
