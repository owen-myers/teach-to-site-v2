import Card from "../card-comp";
import Link from "next/link";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Iuka - Work",
  description: `Check out our previous consulting, design, and research projects.`
};

export default function Work() {
 return (
        <div className ="flex justify-center items-center mt-40 mb-14 space-x-4">
            <Link href="/work/givebackkids">
                <Card
                 title="GiveBackKids"
                 subtitle="Teaching design thinking to five-year-olds"
                 showArrow={false}
                />
            </Link>
            <Link href="https://www.teach-to.com" target="_blank" rel="noopener noreferrer">
                <Card
                 title="TeachTo"
                 subtitle="An IEP goal-writing prototype for SPED professionals"
                 showArrow={true}
                />
            </Link>
        </div>
    );
};