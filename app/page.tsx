import Link from 'next/link';
import Image from 'next/image';
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ASRLogo from "../public/ASR_Logo_Sized.svg";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <div className="w-full p-4 md:max-w-[66%]">
          <div className="md:w-[70%] mt-20">
            <h1 className="font-lora text-5xl mb-6">Understand your customers as humans</h1>
            <p className="font-figtree font-light text-lg mb-8 leading-relaxed">
              A product partner for teams who want to learn 
              from their customers and embrace experimentation as a growth lever.
            </p>
            <div className="mb-20">
              <Link href="https://calendly.com/owen-iukaimpact/30min">
                <button className="group relative inline-flex items-center justify-center px-6 py-3 font-figtree text-md
                  overflow-hidden border-2 border-black rounded-full bg-transparent
                  transition-all duration-400 ease-in-out
                  hover:bg-black hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                  <span className="relative flex items-center">
                    Let's talk
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
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
