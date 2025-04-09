import Card from "../components/card-comp";
import Link from "next/link";
import { Metadata } from 'next';
import GBKHeader from "../../public/GBH_Header_Portfolio.svg";


export const metadata: Metadata = {
  title: "Punch Card - Work",
  description: `Check out our previous consulting, design, and research projects.`
};

export default function Work() {
 return (
        <div className ="flex flex-col md:flex-row justify-center items-center mt-40 mb-14 md:space-x-4">
            <Link href="/work/givebackkids">
                <Card
                 title="GiveBackKids"
                 subtitle="Teaching design thinking to five-year-olds"
                 showArrow={false}
                 image={GBKHeader}
                 altText="GiveBackKids"
                />
            </Link>
            <br />
            <Link href="https://www.teach-to.com" target="_blank" rel="noopener noreferrer">
                <Card
                 title="TeachTo"
                 subtitle="An IEP goal-writing prototype for SPED professionals"
                 showArrow={true}
                 image={GBKHeader}
                 altText="GiveBackKids"
                />
            </Link>
            <br />
            <Link href="/work/map">
                <Card
                 title="MAP"
                 subtitle="GPT-assisted aggregation of accessible transit resources"
                 showArrow={false}
                 image={GBKHeader}
                 altText="GiveBackKids"
                />
            </Link>
        </div>
    );
};