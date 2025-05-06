'use client';

import Link from 'next/link'; 
import GBKHeader from "../public/GBH_Header_Portfolio.svg";
import Card from './components/card-comp';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeachToMockup from "../public/TeachTo_MockUp_Header.png";
import GBHKidsMockup from "../public/GBH_Kids_MockUp_Header.png";
import ASRLogo from "../public/ASR_Logo_Sized.svg";
import GBHLogo from "../public/GBH_Logo_Sized.svg";
import SEACLogo from "../public/SEAC_Logo_Sized.svg";
import ArrayLogo from "../public/Array_Logo_Sized.svg";
import OneOneNineLogo from "../public/119_Logo_Sized.svg"
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
                        Research, experimentation, and right-sized deployments that create exceptional value in complex problem spaces.
                      </p>
                    </div>
                  </div>
                {/* Logo Section */}
                <div className="flex flex-col w-full mb-[clamp(1.2rem,20vh,12rem)]">
                  <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                    <Image src={GBHLogo} alt="GiveBackHack" width={220} height={80} className={logoStyle}/>
                    <Image src={ASRLogo} alt="ASR" width={220} height={80} className={logoStyle} />
                    <Image src={SEACLogo} alt="SEAC" width={220} height={80} className={logoStyle} />
                    <Image src={ArrayLogo} alt="Array" width={200} height={70} className={logoStyle} />
                    <Image src={OneOneNineLogo} alt="119" width={200} height={70} className={logoStyle} />
                  </div>
                </div>
                {/* Services Section */}
                <div className="flex flex-col gap-8 mb-[clamp(1.2rem,20vh,12rem)]">
                <ServiceCard number={1} title="Discover" description="Build a rich repository of qualitative data from customers or beneficiaries. Experiments de-risk our working hypotheses, documentation allows for repeatability, and functional prototypes help scope future work. Index for learning as quickly as possible." />
                  <ServiceCard number={2} title="Architect" description="Decisions are made here. As a rule, we always strike a balance between minimizing technical debt and moving quickly with conviction. Thinking is demonstrated—while we’ll call on some valuable product methods, this is not a plug-and-play process." />
                  <ServiceCard number={3} title="Ship" description="We build quickly, but always show our work. Clear communication and documentation allow for mantainance at scale. Right-sized, cost-effective, and clear demonstrative value. Systems are equally approachable and functional for internal and external stakeholders." />
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
