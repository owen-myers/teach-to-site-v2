interface SectionProps {
    title: string;
    subtitle: string;
    paragraph: string;
};

const Section: React.FC<SectionProps> = ({ title, subtitle, paragraph }) => {
    return (
        <section className="py-8">
            <div>
                <h2 className="font-rethink font-bold text-sm tracking-widest uppercase text-gray-500 mb-2">{title}</h2>
                <h3 className="font-manrope font-bold text-lg mb-8">{subtitle}</h3>
                <p className="font-libre text-sm mb-8 leading-loose">{paragraph}</p>
            </div>
        </section>
    );
};

export default Section;