import Image from "next/image";
import Envelope from "../envelope.png";

export default function Contact() {
    return (
        <div className ="flex justify-center items-center mt-40 mb-14">
            <div className="mr-8 flex-shrink-0">
                <Image src={ Envelope } alt="An envelope." width={16} height={16}/>
            </div>
            <p className="text-center font-chivo text-sm">owen@iukaimpact.com</p>
        </div>

    );
};