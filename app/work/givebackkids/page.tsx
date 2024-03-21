import Section from "../../section-comp";
import Stopwatch from "../../stopwatch.png";
import Package from "../../wrapped-package.png";
import Image from "next/image";
import GBH_Banner from "../../GiveBackKids_Banner_Portfolio_V2.png";
import GBH_Snapshots from "../../GBK_Snapshots.png";


export default function GiveBackKids() {
    return (
        <div>
            <div className="max-w-4xl px-4 mx-auto mt-8 mb-6">
                <a href="/work" className="font-chivo text-gray-500">&lt; Back</a>
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <div>
                    <h1 className="font-averia text-2xl mb-4">GiveBackKids</h1>
                    <h2 className="font-chivo text-med mb-6">Teaching design thinking to five-year-olds</h2>
                </div>
                <div className="mb-12">
                    <Image src={ GBH_Banner } alt="Three examples of design thinking curriculum." width={1200} height={600} className="mb-4"/>
                    <div className ="flex justify-left items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                        <Image src={ Stopwatch } alt="A stopwatch." width={16} height={16}/>
                        </div>
                    <p className="font-averia text-med">3 months</p>
                    </div>
                    <div className ="flex justify-left items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                        <Image src={ Package } alt="A wrapped package." width={16} height={16}/>
                        </div>
                    <p className="font-averia text-med">4-module curriculum</p>
                    </div>
                </div>
                <div>
                    <Section
                        title = "PROBLEM"
                        subtitle = "Design thinking for 5-year-olds: how do we teach it?"
                        paragraph = {`Our partners at GiveBackHack teach design thinking skills to hundreds 
                        of adults each year. But when they were tapped to build those skills with K-4 students, 
                        a wall of how's stood in front of their nose: How to speak “5-year-old,” exactly? 
                        And how might educators teach this stuff after we leave the classroom? After an initial 
                        prototype for their first year, GiveBackHack talked with us to arrange a sprint ahead of 
                        year two: 3 months to test, validate, and deliver a 4-module K-4 design thinking curriculum.`}
                    />
                    <Section
                        title = "INTERVIEWS"
                        subtitle = "Learning from facilitators, teachers, and curriculum writers"
                        paragraph = {`First, our team scheduled interviews for the duration of the sprint. 
                        We targeted facilitators, teachers, and curriculum writers. An interview or two a 
                        week allowed for continuous feedback on the materials as they were written. Teachers 
                        helped us simplify our concepts to meet grade-level SEL goals. Curriculum writers 
                        informed our decision to include pre-block lesson maps for teachers. And facilitators 
                        told us what ideas the kids resonated with the most.`}
                    />
                    <Image src={ GBH_Snapshots } alt="Two examples of interview snapshots." width={1200} height={600} className="mb-4"/>
                    <Section
                        title = "SOLUTION"
                        subtitle = "Flexibile curriculum that centers play"
                        paragraph = {`We co-defined “success” with GiveBackHack: a curriculum that’s 
                        flexible for teachers, integrative with core academic concepts, and keeps the students 
                        playing—all within budget. We delivered a high-quality written product that has been used
                        by nearly 200 students and is available for purchase through GiveBackHack.`}
                    />
                </div>
            </div>
        </div>
    );
};