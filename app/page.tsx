'use client';

import Link from 'next/link';
import Image from 'next/image';
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ASRLogo from "../public/ASR_Logo_Sized.svg";
import Card from './card-comp';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <div className="md:max-w-[900px] border border-gray-200 rounded-2xl shadow-xl ml-4 mr-4 mb-12 mt-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-[95%] md:w-[60%]">
              <div data-aos="fade-up">
                <h1 className="font-manrope text-5xl mb-4 leading-[1.4] relative pt-20">
                  Understand your customers as humans
                  <div className="hidden md:block absolute -right-9 w-2 h-2 bg-green-800 rounded-full"></div>
                  <div className="hidden md:block absolute -right-8 pointer-events-none">
                    <div className="relative" style={{ transform: 'rotate(8deg)' }}>
                      {[...Array(12)].map((_, i) => {
                        const angle = i * 2;
                        const totalAngle = angle + 8;
                        const height = 966 / Math.cos(totalAngle * Math.PI / 180);
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
                <p className="font-rethink font-light text-lg mb-12 leading-relaxed text-gray-600">
                  A product partner for teams who want to learn 
                  from their customers and embrace experimentation as a growth lever
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
          <div className="p-8">
            <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center md:justify-start">
              <h2 className="font-manrope font-bold text-lg mb-4 md:pl-1">Selected work</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <div className="flex flex-col md:flex-row justify-center items-center mb-14 md:space-x-4 mb-64">
                <Link href="/work/givebackkids">
                  <Card
                    title="GiveBackKids"
                    subtitle="Teaching design thinking to five-year-olds"
                    showArrow={false}
                  />
                </Link>
                <br />
                <Link href="https://www.teach-to.com" target="_blank" rel="noopener noreferrer">
                  <Card
                    title="TeachTo"
                    subtitle="IEP goal-writing prototype for SPED teachers"
                    showArrow={true}
                  />
                </Link>
                <br />
                <Link href="/work/map">
                  <Card
                    title="MAP"
                    subtitle="Find accessible transit options to any event"
                    showArrow={false}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto border-b border-gray-200 mt-14"></div>
            <div className="pb-2 pt-2">
              <h2 className="font-manrope font-bold text-sm pl-2">Iuka</h2>
              <p className="font-rethink text-[10px] text-gray-600 mb-12 pl-2">New York, NY</p>
              <div className="flex justify-between items-center pl-2">
                <div>
                  <Link className="font-rethink text-xs text-gray-600 underline" href="mailto:owen@iukaimpact.com">Get in touch</Link>
                </div>
                <div className="flex items-center">
                  <div className="flex space-x-1 pr-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200 shadow-inner"></div>
                    <div className="w-5 h-5 rounded-full bg-gray-200 shadow-inner"></div>
                    <div className="w-5 h-5 rounded-full bg-gray-200 shadow-inner"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
