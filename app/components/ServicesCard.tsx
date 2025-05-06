export default function ServiceCard({title, description, number}: {title: string, description: string, number?: number}) {
    return (
        <div className="flex border border-navy bg-white rounded-md pt-8 pb-8 px-8 relative">
            {number !== undefined && (
                <span className="absolute top-2 right-3 text-xs select-none text-navy">
                    {number}
                </span>
            )}
            <div className="flex flex-col">
                <h3 className="font-lora font-light text-[clamp(1.2rem,2vw,1.9rem)] pb-4 text-navy">
                    {title}
                </h3>
                <p className="font-libre text-[clamp(0.9rem,1.5vw,1.2rem)] text-navy">
                    {description}
                </p>
            </div>
        </div>
    )
}