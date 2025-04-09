'use client';

import Link from 'next/link'; 
import GBKHeader from "../public/GBH_Header_Portfolio.svg";
import Card from './components/card-comp';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NotebookGrid from './components/NotebookGrid';
import TeachToMockup from "../public/TeachTo_MockUp_Header.png";
import GBHKidsMockup from "../public/GBH_Kids_MockUp_Header.png";
import ASRLogo from "../public/ASR_Logo_Sized.svg";
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  }, []);

  return (
    <div className="w-full relative">
      <div className="flex justify-center w-full">
        <div className="md:max-w-[1100px] border border-black rounded-md ml-4 mr-4 mb-12 mt-4 relative sub-bg">
          <NotebookGrid className="inset-0" />
          <div className="flex flex-col pl-8 items-center">
            <div className="w-[95%] md:w-[60%] text-center">
              <div data-aos="fade-up">
                <h1 className="font-manrope text-[3rem] mb-8 leading-[1.4] relative pt-20 font-light">
                  An all-in-one partner for building from scratch
                </h1>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="font-rethink text-lg mb-8 leading-relaxed mx-auto max-w-lg text-center">
                Early-stage teams need more than just a monthly check-in.
                Punch Card fills in the gaps in product, fundraising, and operations 
                to help builders spin the flywheel.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="mb-24">
                  <Link href="https://calendly.com/owen-iukaimpact/30min">
                    <button className="group relative inline-flex items-center justify-center px-6 py-3 font-rethink text-md
                      overflow-hidden border border-black rounded-md bg-black text-white
                      transition-all duration-400 ease-in-out
                      hover:bg-transparent hover:text-black
                      focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                      <span className="relative flex items-center">
                        Let's talk
                        <svg 
                          className="ml-2 Hands-on fractional operator for teams validating,  early-stage ideasw-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </span>
                    </button>
                  </Link>
                  
                  {/* Partners Section */}
                  <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
                    <p className="font-rethink text-xs mb-3">Trusted by</p>
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                      <div className="h-6">
                        <Image src={GBHLogo} alt="GiveBackHack" width={140} height={60} />
                      </div>
                      <div className="h-6">
                        <Image src={ASRLogo} alt="ASR" width={140} height={60} />
                      </div>
                      <div className="h-6">
                        <Image src={SEACLogo} alt="SEAC" width={140} height={60} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="p-8 mb-24 mt-8">
            <div data-aos="fade-up" data-aos-delay="400">
              <h2 className="font-manrope font-bold text-lg mb-4 text-start">Where we help</h2>
              <div className="bg-white rounded-md p-8 border border-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg mb-2">All things product</h3>
                    <p className="font-rethink text-sm text-gray-600">UXR research, piloting, prototyping, strategy, and roadmapping.</p>
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg mb-2">Scrappy fundraising</h3>
                    <p className="font-rethink text-sm text-gray-600">Outreach, pitch support, relationship-building, and branding.</p>
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h3 className="font-manrope font-bold text-lg mb-2">Operations</h3>
                    <p className="font-rethink text-sm text-gray-600">Build startup infrastructure from the beginning and scale as you grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center md:justify-start">
              <h2 className="font-manrope font-bold text-lg mb-4 md:pl-1">Selected work</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <div className="flex flex-col md:flex-row justify-center items-center mb-14 md:space-x-[5.2rem]">
                <Link href="/work/givebackkids">
                  <Card
                    title="GiveBackHack Kids"
                    subtitle="Teaching entrepreneurship to five-year-olds"
                    showArrow={false}
                    image={GBHKidsMockup}
                    altText="Picture of a GiveBackHack Kids lesson"
                  />
                </Link>
                <br />
                <Link href="https://www.teach-to.com" target="_blank" rel="noopener noreferrer">
                  <Card
                    title="TeachTo"
                    subtitle="IEP goal-writing prototype for SPED teachers"
                    showArrow={true}
                    image={TeachToMockup}
                    altText="Picture of the TeachTo product screen"
                  />
                </Link>
                <br />
                <Link href="/work/map">
                  <Card
                    title="MAP"
                    subtitle="Find accessible transit options to any event"
                    showArrow={false}
                    image={ASRLogo}
                    altText="Picture of the ASR logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
