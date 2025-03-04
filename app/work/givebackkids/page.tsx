import Section from "../../section-comp";
import Stopwatch from "../../stopwatch.png";
import Package from "../../wrapped-package.png";
import Image from "next/image";
import GBH_Banner from "../../../public/GBH_Header_Portfolio.svg";
import GBH_Snapshots from "../../../public/GBH_Snapshots_Portfolio.svg";
import GBH_Curriculum_Map from "../../../public/GBH_Curriculum_Map.svg";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Iuka — GiveBackKids",
  description: `Our partnership with GiveBackHack. GiveBackKids empowers teachers to
                lead design thinking lessons in elementary schools in Columbus, Ohio.`
};

const GBKLinkStyle = "font-chivo text-md text-blue-600 underline hover:text-blue-800 transition duration-200 ease-in-out";
const captionStyle = "font-chivo text-sm text-gray-500 flex justify-center"

export default function GiveBackKids() {
    return (
        <div>
            <div className="max-w-3xl px-4 mx-auto mt-8 mb-6">
                <a href="/work" className="font-chivo text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out">&larr; Back</a>
            </div>
            <div className="max-w-3xl mx-auto px-4">
                <div>
                    <h1 className="font-castoro text-3xl mb-2">GiveBackKids</h1>
                    <h2 className="font-chivo text-med mb-8">Teaching design thinking to five-year-olds</h2>
                </div>
                <div className="mb-12">
                    <div className="mb-8">
                        <Image src={ GBH_Banner } alt="Three examples of design thinking curriculum." width={1200} height={600} className="mb-2"/>
                        <p className={captionStyle}>First lesson of GiveBackKids for Pre-K and Kindergarten</p>
                    </div>
                    <div className ="flex justify-left items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                        <Image src={ Stopwatch } alt="A stopwatch." width={16} height={16}/>
                        </div>
                    <p className="font-castoro text-med">3 months</p>
                    </div>
                    <div className ="flex justify-left items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                        <Image src={ Package } alt="A wrapped package." width={16} height={16}/>
                        </div>
                    <p className="font-castoro text-med">4-module curriculum</p>
                    </div>
                </div>
                <div>
                    <Section
                        title = "PROBLEM"
                        subtitle = "Design thinking for 5-year-olds: how do we teach it?"
                        paragraph = {`Our partners at GiveBackHack teach design thinking skills to hundreds 
                        of adults each year. But when they were tapped to build those skills with K-4 students, 
                        a bunch of questions arose: How exactly do we speak “5-year-old"? 
                        And how might educators teach this stuff after we leave the classroom? After an initial 
                        prototype for their first year, GiveBackHack talked with us to arrange a sprint ahead of 
                        year two: 3 months to test, validate, and deliver a 4-module K-4 design thinking curriculum.`}
                    />
                    <Section
                        title = "DISCOVERY"
                        subtitle = "Learning from facilitators, teachers, and curriculum writers"
                        paragraph = {`Iuka scheduled interviews for the duration of the sprint. 
                        We targeted facilitators, teachers, and curriculum writers. An interview or two a 
                        week allowed for continuous feedback on the materials as they were written. Teachers 
                        helped us simplify our concepts to meet grade-level SEL goals, curriculum writers 
                        informed our decision to include pre-block lesson maps for teachers, and facilitators 
                        told us what ideas the kids resonated with the most.`}
                    />
                    <div className="mb-8">
                        <Image src={ GBH_Snapshots } alt="Original flow of curriculum." width={1200} height={600} className="mb-2"/>
                        <p className={captionStyle}>Interview snapshots from conversations with K-5 teachers</p>
                    </div>
                    <Section
                        title = "SOLUTION"
                        subtitle = "Flexibile curriculum that centers play"
                        paragraph = {`We co-defined “success” with GiveBackHack: a curriculum that’s 
                        flexible for teachers, integrative with core academic concepts, and keeps the students 
                        playing—all within budget. We delivered 23 unique lessons available 
                        for purchase through GiveBackHack.`}
                    />
                    <div className="mb-8">
                        <Image src={ GBH_Curriculum_Map } alt="Original flow of curriculum." width={1200} height={600} className="mb-2"/>
                        <p className={captionStyle}>Original outline of curriculum with grade-adjusted lessons in color</p>
                    </div>
                    <Section
                        title = "OUTCOMES"
                        subtitle = "Beyond the product: 400+ students"
                        paragraph = {`Over 400 elementary students from Columbus City Schools have learned design thinking skills with 
                        GiveBackKids since 2022. And after it's first year in classrooms, GiveBackHack won additional 
                        funding from The Columbus Foundation to pay facilitators, recruit volunteers, and train teachers on design principles. 
                        Learn more about our partnership below.`}
                    />
                    <div className="flex justify-center">
                        <a className={GBKLinkStyle} href="https://givebackhack.notion.site/GiveBackKids-d00a04322613461eafa81c0db7b771c1">Check out GBK &#8599;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};