
interface SectionProps {
    title: string;
    subtitle: string;
    paragraph: string;
};

const Section: React.FC<SectionProps> = ({ title, subtitle, paragraph }) => {
    return (
        <section className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="font-viga text-sm inline-block rounded-lg p-2 bg-black text-white font-bold mb-2">{title}</h2>
                <h3 className="font-averia text-lg mb-6">{subtitle}</h3>
                <p className="font-chivo text-sm mb-8 leading-6">{paragraph}</p>
            </div>
        </section>
    );
};

export default Section;