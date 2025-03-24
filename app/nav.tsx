"use client";

import Link from "next/link";
import TeachToScribble from "../public/TeachTo_Scribble_Transparent.svg";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = "relative mr-8 transition-colors duration-300 ease-in-out group hover:text-gray-600 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:rounded-full after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-left";

    return (
        <div className="flex justify-center w-full pt-6">
            <nav className="font-lora text-black flex items-center justify-between pl-4 w-full max-w-[66%]">
                <div>
                    <Link href="/" className="flex items-center group">
                        <Image src={ TeachToScribble } alt="Logo with lots of lines." width={60} height={60} className="transition-transform duration-300 ease-out group-hover:scale-105" />
                        <div>
                            <div>Iuka</div>
                            <p className="font-figtree text-gray-500 text-xs">(eye-you-kuh)</p>
                        </div>
                    </Link>
                </div>
                
                {/* Hamburger menu button */}
                <div className="flex items-center">
                    <button 
                        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 mr-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex items-center">
                        <Link href="/work" className={navLinkClass}>
                            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Work</span>
                        </Link>
                        <Link href="/contact" className={navLinkClass}>
                            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Contact</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`sm:hidden fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Close button */}
                    <button 
                        className="absolute top-6 right-6 p-2 transition-transform duration-300 hover:rotate-90"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col pt-20 px-6 space-y-6">
                        <Link 
                            href="/work" 
                            className="relative overflow-hidden group transition-colors duration-300 ease-in-out hover:text-gray-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Work</span>
                        </Link>
                        <Link 
                            href="/contact" 
                            className="relative overflow-hidden group transition-colors duration-300 ease-in-out hover:text-gray-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Contact</span>
                        </Link>
                        <Link 
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-6 py-3 font-figtree text-md
                            overflow-hidden border-2 border-black rounded-full bg-transparent
                            transition-all duration-400 ease-in-out
                            hover:bg-black hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="relative flex items-center">
                                Let's talk
                                <svg 
                                    className="ml-2 w-4 h-4 transition-transform duration-300 ease-out transform group-hover:translate-x-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};