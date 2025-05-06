export default function ServiceCard({title, description, number}: {title: string, description: string, number?: number}) {
    return (
        <div
            className="flex border border-navy bg-navy bg-opacity-10 rounded-md pt-8 pb-8 px-8 relative max-w-[475px]
                transition-all duration-300 ease-in-out hover:-rotate-3"
        >
            {number !== undefined && (
                <span className="absolute top-2 right-3 text-xs select-none text-navy">
                    {number}
                </span>
            )}
            <div className="flex flex-col">
                <h3 className="font-lora font-light text-[clamp(1.2rem,2.3vw,1.9rem)] pb-4 text-navy">
                    {title}
                </h3>
                <p className="font-libre text-[clamp(0.9rem,1.5vw,1.1rem)] text-navy">
                    {description}
                </p>
            </div>
        </div>
    )
}