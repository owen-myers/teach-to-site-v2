import Card from "../card-comp";
import Link from "next/link";

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