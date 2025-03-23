import Link from 'next/link';
import Image from 'next/image';
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ASRLogo from "../public/ASR_Logo_Sized.svg";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <div className="w-[80%] md:max-w-[550px]">
          <div className="mt-20 flex flex-col items-center text-center">
            <div>
              <h1 className="font-lora text-5xl mb-6">Understand your customers as humans</h1>
              <p className="font-figtree font-light text-lg mb-8 leading-relaxed">
                A product partner for teams who want to learn 
                from their customers and embrace experimentation as a growth lever
              </p>
              <div className="mb-20">
                <Link href="https://calendly.com/owen-iukaimpact/30min">
                  <button className="group relative inline-flex items-center justify-center px-6 py-3 font-figtree text-md
                    overflow-hidden border-2 border-black rounded-xl bg-transparent
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
      </div>
      <div className="flex justify-center items-center">
        <div className="border border-black py-12 m-4 rounded-xl max-w-[1000px] pl-12 pr-12">
          <div className="w-full">
            <div className="flex flex-col items-center text-center md:max-w-[765px]">
              <div>
                <h2 className="font-lora text-3xl mb-6">Philosophy</h2>
                <p className="font-figtree font-light text-md mb-6 leading-relaxed text-left">
                  We believe in the power of human-centered design to create meaningful impact. 
                  Our approach combines deep user research with iterative experimentation to build 
                  products that truly serve their users.
                </p>
                <p className="font-figtree font-light text-md leading-relaxed text-left">
                  Every project starts with understanding the human behind the user, 
                  and every solution is tested with real people to ensure it meets their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-12 mt-20">
        <div className="w-full md:w-[90%]">
          <p className="text-3xl text-black font-lora mb-8 text-center">Partners</p>
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-20 mb-12">
            <div className="p-6">
              <Image
                src={GBHLogo}
                alt="Logo for GiveBackHack"
                width={225}
                height={225}
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <Image
                src={SEACLogo}
                alt="Logo for SEA Change"
                width={225}
                height={225}
                className="object-contain"
              />
            </div>
            <div className="p-6">
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
