import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Iuka - Philosophy",
  description: `We believe in connecting non-profits with their stakeholders to
                nurture equitable relationships, improve services, and incrementally
                take on wicked problems.`
};

const headerStyle = "font-castoro text-2xl mb-6";
const bodyStyle = "font-chivo text-md"

export default function Philosophy() {
    return (
        <div>
            <div className="flex flex-col justify-between w-2/5 pr-8 mb-8 mx-auto mt-20">
                <div className="mx-auto text-left mb-8">
                    <h1 className={headerStyle}>Methodical tinkerers, not revolutionaries</h1>
                    <p className={bodyStyle}>Non-profits solve wicked problems. And unlike startups, 
                    moving fast and breaking things is often not an option. We approach wicked problems with 
                    a subtle curiosity, while equipping you to test assumptions. Dream big, but take incremental 
                    and adaptive action.
                    </p>
                </div>
                <div className="mx-auto text-left mb-8">
                    <h1 className={headerStyle}>Tech as a surgical tool</h1>
                    <p className={bodyStyle}>Non-profits can forward a more just and equitable society. But it's a long road.
                    Iuka believes in leveraging technology with specificity. How can we improve one facet of one corner of one problem 
                    and build from there?
                    </p>
                </div>
                <div className="mx-auto text-left">
                    <h1 className={headerStyle}>Human-centered design as a tool for equity</h1>
                    <p className={bodyStyle}>Non-profits often solve problems on behalf of those 
                    experiencing the problem itself. We embed community members into non-profit strategy as 
                    co-creators of solutions, a core tenet of design thinking. Bring the community along — 
                    build a boat for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
};