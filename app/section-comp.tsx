
interface SectionProps {
    title: string;
    subtitle: string;
    paragraph: string;
};

const Section: React.FC<SectionProps> = ({ title, subtitle, paragraph }) => {
    return (
        <section className="py-8">
            <div>
                <h2 className="font-viga text-xs inline-block rounded-lg pl-2 pr-2 pb-1 pt-1 border border-2 border-double border-black mb-6">{title}</h2>
                <h3 className="font-lora text-2xl mb-8">{subtitle}</h3>
                <p className="font-rethink text-md mb-8 leading-loose">{paragraph}</p>
            </div>
        </section>
    );
};

export default Section;