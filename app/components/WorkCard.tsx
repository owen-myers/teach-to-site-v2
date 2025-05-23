import Image, { StaticImageData } from "next/image";

interface CardProps {
    title: string;
    subtitle: string;
    showArrow: boolean;
    image?: string | StaticImageData;
    altText?: string;
};

const Card: React.FC<CardProps & { showArrow?: boolean }> = ({ title, subtitle, showArrow, image, altText }) => {
    return (
        <div className="group relative max-w-72 max-h-120 rounded-md border border-cream bg-gray-700 overflow-hidden 
        transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            {image && (
                <Image 
                    src={image} 
                    alt={altText || title} 
                    width={288} 
                    height={162} 
                    className="w-full h-[162px] object-cover "
                />
            )}
            {showArrow && (
                <div className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center
                    transform transition-transform duration-300 ease-out
                    group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg 
                        className="w-5 h-5 transition-opacity duration-300"
                        fill="none" 
                        stroke="#FFFDE0" 
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
                <div className="font-lora text-[clamp(1.1rem,3vw,2.4rem)] text-cream mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {title}
                </div>
                <p className="font-libre font-light text-[clamp(0.8rem,2vw,1rem)] text-cream transition-all duration-300 ease-out group-hover:text-cream">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Card;