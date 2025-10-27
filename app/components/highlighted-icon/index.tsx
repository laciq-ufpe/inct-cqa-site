type props = {
    icon: React.ReactNode;
}

const HighlightedIcon = ({icon} : props) => {
    return (
        <div className="p-3 bg-red-200/50 rounded-md">
            {icon}
        </div>
    );
}

export default HighlightedIcon;
