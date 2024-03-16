import Section from "../../section-comp";
import Stopwatch from "../../stopwatch.png";
import Package from "../../wrapped-package.png";
import Image from "next/image";


export default function GiveBackKids() {
    return (
        <div>
            <div className="mx-40 mt-8 mb-6">
                <a href="/work" className="font-averia text-gray-400">&lt; Back</a>
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <div>
                    <h1 className="font-averia text-2xl mb-4">GiveBackKids</h1>
                    <h2 className="font-chivo text-med mb-10">Teaching design thinking to five-year-olds</h2>
                </div>
                <div>
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