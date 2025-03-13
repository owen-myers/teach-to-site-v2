import Section from "../../section-comp";
import Stopwatch from "../../../public/stopwatch.png";
import Package from "../../../public/wrapped-package.png";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Iuka - MAP",
  description: `Our research work for the Mobility Autonomy Program (MAP) founded by
                Autistic Self-Reliance Support Network (ASR). ASR is building multi-modal 
                systems to help autistic adults live independent lives.`
};

const MAPLinkStyle = "font-figtree text-md text-blue-600 underline hover:text-blue-800 transition duration-200 ease-in-out";

export default function MobilityAutonomyProgram() {
    return (
        <div>
            <div className="max-w-3xl px-4 mx-auto mt-8 mb-6">
                <a href="/work" className="font-figtree text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out">&larr; Back</a>
            </div>
            <div className="max-w-3xl mx-auto px-4">
                <div>
                    <h1 className="font-lora text-3xl mb-2">Mobility Autonomy Program</h1>
                    <h2 className="font-figtree font-light text-md mb-8">GPT-assisted aggregation of accessible transit resources</h2>
                </div>
                <div className="mb-12">
                    <div className ="flex justify-left items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                        <Image src={ Stopwatch } alt="A stopwatch." width={16} height={16}/>
                        </div>
                    <p className="font-lora text-med">10 weeks</p>
                    </div>
                    <div className ="flex justify-left items-center mb-4">
                        <div className="mr-4 flex-shrink-0">
                        <Image src={ Package } alt="A wrapped package." width={16} height={16}/>
                        </div>
                    <p className="font-lora text-med">Prototype</p>
                    </div>
                </div>
                <div>
                    <Section
                        title = "OVERVIEW"
                        subtitle="Rethinking how adults with IDDs find accessible transit resources"
                        paragraph = {`In partnership with Autistic Self-Reliance Support Network (ASR), 
                            Iuka is developing a GPT-assisted resource aggregator for transit users with 
                            intellectual and developmental disabilities (IDDs) nicknamed Caravan. As of 
                            December 2024, it’s currently being tested with a cohort of adults with IDDs 
                            as a part of ASR’s Mobility Autonomy Program (MAP).`}
                    />
                    <div className="flex justify-center pb-8">
                        <a className={MAPLinkStyle} href="https://autisticselfreliance.org/map-project/">Check out MAP &#8599;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};