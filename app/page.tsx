import Link from 'next/link';
import Image from 'next/image';
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ASRLogo from "../public/ASR_Logo_Sized.svg";
import ManImage from "../public/Image_of_Man.png";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <div className="w-full pl-7 md:max-w-[90%]">
          <div className="mt-20 flex flex-col md:flex-row md:items-start md:gap-12">
            <div className="md:w-[60%]">
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
            <div className="md:w-[40%] md:-mt-20">
              <Image
                src={ManImage}
                alt="A half-drawn portrait of a man"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-12 mt-16">
        <div className="w-full md:w-[90%]">
          <p className="text-xl text-black font-lora mb-8 text-center">Partners</p>
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-20 mb-12">
            <div className="p-6 rounded-xl border border-gray-300 bg-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <Image
                src={GBHLogo}
                alt="Logo for GiveBackHack"
                width={225}
                height={225}
                className="object-contain"
              />
            </div>
            <div className="p-6 rounded-xl border border-gray-300 bg-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <Image
                src={SEACLogo}
                alt="Logo for SEA Change"
                width={225}
                height={225}
                className="object-contain"
              />
            </div>
            <div className="p-6 rounded-xl border border-gray-300 bg-purple-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <Image
                src={ASRLogo}
                alt="Logo for Autistic Self Reliance Support Network"
                width={225}
                height={225}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
