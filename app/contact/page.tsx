import Image from "next/image";
import Envelope from "../../public/envelope.png";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Iuka - Contact",
  description: `Reach out to us here.`
};

export default function Contact() {
    return (
        <div className ="flex justify-center items-center mt-40 mb-14">
            <div className="mr-8 flex-shrink-0">
                <Image src={ Envelope } alt="An envelope." width={18} height={18}/>
            </div>
            <p className="text-center font-rethink text-md">owen@iukaimpact.com</p>
        </div>

    );
};