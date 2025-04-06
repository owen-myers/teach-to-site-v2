"use client";

import Link from "next/link";
import TeachToScribble from "../public/TeachTo_Scribble_Transparent.svg";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="flex justify-center w-full pt-6 pb-2">
            <nav className="font-manrope font-bold flex items-center justify-center w-full">
                <Link href="/" className="flex items-center">
                    <Image src={TeachToScribble} alt="Logo with lots of lines." width={60} height={60} />
                    <div>
                        <div className="text-xl">Punch Card</div>
                        <p className="text-[10px] text-gray-500 font-light">Product</p>
                    </div>
                </Link>
            </nav>
        </div>
    );
};