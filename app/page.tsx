
import Link from 'next/link';
import Image from 'next/image';
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ASRLogo from "../public/ASR_Logo_Sized.svg";

export default function Home() {
  return (
    <div className="container mx-auto w-3/4 text-left md:mt-10 max-w-md">
      <h1 className="font-lora text-3xl mb-6">Let's get real about innovation.</h1>
      <p className="font-rethink text-md mb-8 leading-relaxed">
        Strategy, research, prototyping, and V1.0 development in a single partnership. 
        Over $50K in development-related cost savings last year. 
        Now accepting clients for 2025. 
      </p>
      <div className="flex justify-center mb-12">
        <Link href="https://calendly.com/owen-iukaimpact/30min">
        <button className='rounded border border-black font-rethink text-md
        transition duration-300 ease-in-out transform hover:bg-gray-100 
        hover:scale-105 p-2'>Let's talk &rarr;</button>
        </Link>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <Image
          src={GBHLogo}
          alt="Logo for GiveBackHack"
          width={225}
          height={225}
          className="object-contain"
        />
        <Image
        src={SEACLogo}
        alt="Logo for SEA Change"
        width={225}
        height={225}
        className="object-contain"
        />
        <Image
          src={ASRLogo}
          alt="Logo for Autistic Self Reliance Support Network"
          width={225}
          height={225}
          className="object-contain"
        />
      </div>
    </div>
  );
};
