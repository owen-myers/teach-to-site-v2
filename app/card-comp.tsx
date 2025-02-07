
interface CardProps {
    title: string;
    subtitle: string;
};

const Card: React.FC<CardProps> =({title, subtitle }) => {
    return (
        <div className="max-w-72 max-h-80 rounded border border-black overflow-hidden 
        transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105">
            <div className="px-6 py-4">
                <div className="font-castoro text-xl mb-4">{title}</div>
                <p className="font-chivo text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;