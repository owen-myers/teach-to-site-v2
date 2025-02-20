
interface SectionProps {
    title: string;
    subtitle: string;
    paragraph: string;
};

const Section: React.FC<SectionProps> = ({ title, subtitle, paragraph }) => {
    return (
        <section className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="font-viga text-sm inline-block rounded-lg pl-2 pr-2 pb-1 pt-1 bg-black text-white mb-6">{title}</h2>
                <h3 className="font-castoro text-xl mb-6">{subtitle}</h3>
                <p className="font-chivo text-md mb-8 leading-6">{paragraph}</p>
            </div>
        </section>
    );
};

export default Section;