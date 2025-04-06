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
        <div className="md:max-w-[900px] border border-gray-200 rounded-2xl ml-4 mr-4 mb-12 mt-4 relative">
          <NotebookGrid className="inset-0" />
          <div className="flex flex-col pl-8">
            <div className="w-[95%] md:w-[60%]">
              <div data-aos="fade-up">
                <h1 className="font-manrope text-[2.8rem] mb-6 leading-[1.4] relative pt-20 font-light">
                  An all-in-one partner for building from scratch
                  <div className="hidden md:block absolute -right-[230px] top-[102px] w-28 h-28 border border-green-800 rounded-full"></div>
                  <div className="hidden md:block absolute -right-[220px] top-[117px] w-24 h-24 border border-green-800 rounded-full"></div>
                  <div className="hidden md:block absolute -right-[198px] top-[148px] w-16 h-16 border border-green-800 rounded-full"></div>
                  <div className="hidden md:block absolute -right-[161px] top-[203px] w-2 h-2 bg-green-800 rounded-full"></div>
                  <div className="hidden md:block absolute -right-[157px] pointer-events-none">
                    <div className="relative" style={{ transform: 'rotate(8deg)' }}>
                      {[...Array(12)].map((_, i) => {
                        const angle = i * 2;
                        const totalAngle = angle + 8;
                        const height = 1085 / Math.cos(totalAngle * Math.PI / 180);
                        return (
                          <div
                            key={i}
                            className="absolute w-[1px] origin-top bg-green-800 opacity-40"
                            style={{ 
                              transform: `rotate(${angle}deg)`,
                              height: `${height}px`
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </h1>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="font-rethink text-lg leading-relaxed text-gray-600 font-bold">
                Early-stage teams need more than just a monthly check-in.
                </p>
                <p className="font-rethink text-lg mb-8 leading-relaxed text-gray-600">
                Punch Card fills in the gaps in fundraising, product, and operations 
                to help builders maintain early momentum.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="mb-64">
                  <Link href="https://calendly.com/owen-iukaimpact/30min">
                    <button className="group relative inline-flex items-center justify-center px-6 py-3 font-rethink text-md
                      overflow-hidden border border-black rounded-xl bg-black text-white
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
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center md:justify-start">
              <h2 className="font-manrope font-bold text-lg mb-4 md:pl-1">Selected work</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <div className="flex flex-col md:flex-row justify-center items-center mb-14 md:space-x-4 mb-64">
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
