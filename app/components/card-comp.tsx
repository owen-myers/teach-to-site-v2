import Image, { StaticImageData } from "next/image";

interface CardProps {
    title: string;
    subtitle: string;
    showArrow: boolean;
    image: string | StaticImageData;
    altText: string;
};

const Card: React.FC<CardProps & { showArrow?: boolean }> = ({ title, subtitle, showArrow, image, altText }) => {
    return (
        <div className="group relative max-w-72 max-h-100 rounded-md border border-black bg-white overflow-hidden 
        transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <Image 
                src={image} 
                alt={altText} 
                width={288} 
                height={162} 
                className="w-full h-[162px] object-cover "
            />
            {showArrow && (
                <div className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center
                    transform transition-transform duration-300 ease-out
                    group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg 
                        className="w-5 h-5 transition-opacity duration-300"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M7 17L17 7M17 7H7M17 7V17"
                        />
                    </svg>
                </div>
            )}
            <div className="px-6 py-4 relative">
                <div className="font-manrope text-lg mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {title}
                </div>
                <p className="font-rethink font-light text-sm text-gray-600 transition-all duration-300 ease-out group-hover:text-black">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Card;