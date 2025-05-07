'use client';

import Link from 'next/link'; 
import GBKHeader from "../public/GBH_Header_Portfolio.svg";
import Card from './components/WorkCard';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeachToMockup from "../public/TeachTo_MockUp_Header.png";
import GBHKidsMockup from "../public/GBH_Kids_MockUp_Header.png";
import ASRLogo from "../public/ASR_Logo_Sized.svg";
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ArrayLogo from "../public/Array_Logo_Sized.svg";
import OneOneNineLogo from "../public/119_Logo_Sized.svg";
import GPLogo from "../public/GrowthPartnership_Logo_Sized.svg";
import JumpStartLogo from "../public/Jumpstart_Logo_Sized.svg";
import Image from 'next/image';
import BackgroundPattern from './components/BackgroundPattern';
import ServiceCard from './components/ServicesCard';
const logoStyle = "w-[40vw] max-w-[200px] min-w-[100px] md:w-[180px] lg:w-[220px] h-auto"

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
      <div className="flex w-full justify-center relative">
          <div className="flex flex-col max-w-[1200px] w-full">
            <BackgroundPattern/>
              <div className="flex flex-col pl-[clamp(2rem,4vw,4rem)] pr-6 items-center">
                  <div className="w-[98%] relative h-screen">
                    <div data-aos="fade-up" className="lg:w-[900px]">
                      <h2 className="font-manrope font-bold text-[clamp(1rem,2vw,1.4rem)] mb-[clamp(1.2rem,4vh,3rem)] mt-[clamp(5rem,12vh,12rem)] text-cream">Punch Card</h2>
                      <h1 className="font-lora text-[clamp(2.3rem,6vw,3.8rem)] mb-[clamp(1.2rem,4vh,3rem)] mt-[clamp(5rem,12vh,12rem)] leading-[1.2] text-cream">
                          We build useful AI-native tools for a variety of industries.
                      </h1>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="md:w-[600px]">
                      <p className="font-libre text-gray-300 text-[clamp(0.9rem,2vw,1.3rem)] mb-8 leading-relaxed">
                        Research, experimentation, and right-sized deployments that create exceptional value for everyone.
                      </p>
                      {/* Animated Down Arrow */}
                      <div className="flex w-full">
                        <span className="animate-bounce-slow mt-2">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                {/* Logo Section */}
                <div className="w-full mb-[clamp(1.2rem,20vh,12rem)] overflow-hidden">
                  <div className="hidden md:flex items-center ticker-row whitespace-nowrap will-change-transform animate-ticker">
                    <div className="flex items-center space-x-8">
                      <Image src={GBHLogo} alt="GiveBackHack" width={220} height={80} className={logoStyle}/>
                      <Image src={ASRLogo} alt="ASR" width={220} height={80} className={logoStyle} />
                      <Image src={SEACLogo} alt="SEAC" width={220} height={80} className={logoStyle} />
                      <Image src={ArrayLogo} alt="Array" width={200} height={70} className={logoStyle} />
                      <Image src={OneOneNineLogo} alt="119" width={200} height={70} className={logoStyle} />
                      <Image src={JumpStartLogo} alt="JumpStart" width={200} height={70} className={logoStyle} />
                      <Image src={GPLogo} alt="GrowthPartnership" width={200} height={70} className={logoStyle} />
                    </div>
                    <div className="flex items-center space-x-8 ml-8">
                      <Image src={GBHLogo} alt="GiveBackHack" width={220} height={80} className={logoStyle}/>
                      <Image src={ASRLogo} alt="ASR" width={220} height={80} className={logoStyle} />
                      <Image src={SEACLogo} alt="SEAC" width={220} height={80} className={logoStyle} />
                      <Image src={ArrayLogo} alt="Array" width={200} height={70} className={logoStyle} />
                      <Image src={OneOneNineLogo} alt="119" width={200} height={70} className={logoStyle} />
                      <Image src={JumpStartLogo} alt="JumpStart" width={200} height={70} className={logoStyle} />
                      <Image src={GPLogo} alt="GrowthPartnership" width={200} height={70} className={logoStyle} />
                    </div>
                  </div>
                  {/* Fallback for small screens: stack logos vertically */}
                  <div className="flex flex-col items-center justify-center space-y-4 md:hidden">
                    <Image src={GBHLogo} alt="GiveBackHack" width={220} height={80} className={logoStyle}/>
                    <Image src={ASRLogo} alt="ASR" width={220} height={80} className={logoStyle} />
                    <Image src={SEACLogo} alt="SEAC" width={220} height={80} className={logoStyle} />
                    <Image src={ArrayLogo} alt="Array" width={200} height={70} className={logoStyle} />
                    <Image src={OneOneNineLogo} alt="119" width={200} height={70} className={logoStyle} />
                  </div>
                </div>
                {/* Services Section */}
                <div className="flex flex-col gap-8 w-full min-h-screen md:h-screen pb-12 md:pb-0">
                  {/* Heading for small screens */}
                  <h2 className="font-lora text-navy text-[clamp(1.2rem,10vw,7rem)] block md:hidden mb-2">M.O.</h2>
                  
                  {/* First card row with heading for large screens */}
                  <div className="flex items-center justify-center">
                    <h2 className="font-lora text-navy text-[clamp(1.2rem,10vw,7rem)] hidden md:block mr-4">M.O.</h2>
                    <div
                      className="flex md:justify-start md:pl-[clamp(1.2rem,14.5vw,12rem)] justify-center"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <ServiceCard number={1} title="Discover" description="Quickly build a repository of actionable research data. Test your working hypotheses." />
                    </div>
                  </div>
                  <div
                    className="flex justify-end md:pr-64 justify-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <ServiceCard number={2} title="Architect" description="Design human-centered, AI-native systems. We handle legacy integrations and security." />
                  </div>
                  <div
                    className="flex justify-start md:pl-48 justify-center md:-rotate-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <ServiceCard number={3} title="Ship" description="Deploy right-sized, loveable, and demonstratively valuable software for any type of user." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Work Section */}
          <div className="flex flex-col min-h-screen md:h-screen bg-navy items-center justify-center py-12 md:py-0">
            <div className="flex flex-col max-w-[1400px] w-full items-center">
              <div>
                <h2 className="font-lora text-cream text-[clamp(2.2rem,6vw,6rem)] mb-8">Work</h2>
              </div>
                <div className ="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
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
                      subtitle="An IEP goal-writing prototype for SPED professionals"
                      showArrow={true}
                      />
                  </Link>
                  <br />
                  <Link href="/work/map">
                      <Card
                      title="MAP"
                      subtitle="GPT-assisted aggregation of accessible transit resources"
                      showArrow={false}
                      />
                  </Link>
                </div>
            </div>
          </div>
    </div>
  );
}
