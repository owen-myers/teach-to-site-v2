import Card from "../card-comp";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Iuka - Work",
  description: `Check out our previous consulting, design, and research projects.`
};

export default function Work() {
 return (
        <div className ="flex justify-center items-center mt-40 mb-14">
            <Link href="/work/givebackkids">
                <Card
                    title="GiveBackKids"
                    subtitle="Teaching design thinking to five-year-olds"
                />
            </Link>
        </div>
    );
};