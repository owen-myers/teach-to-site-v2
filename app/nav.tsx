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
                        <div>Iuka</div>
                        <p className="font-rethink font-light text-gray-500 text-xs">(eye-you-kuh)</p>
                    </div>
                </Link>
            </nav>
        </div>
    );
};