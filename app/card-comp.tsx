import Image from "next/image";

interface CardProps {
    title: string;
    subtitle: string;
    showArrow: boolean;
};

const Card: React.FC<CardProps & { showArrow?: boolean }> = ({ title, subtitle, showArrow }) => {
    return (
        <div className="relative max-w-72 max-h-100 rounded border border-black overflow-hidden 
        transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105">
            {showArrow && (
                <button className="absolute top-1 right-2 text-xl">{"\u2197"}</button>
            )}
            <div className="px-6 py-4">
                <div className="font-castoro text-2xl mb-4">{title}</div>
                <p className="font-chivo text-md">{subtitle}</p>
            </div>
        </div>
    );
};


export default Card;