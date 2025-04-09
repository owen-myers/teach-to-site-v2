"use client";

import Link from "next/link";
import PunchCardLogo from "../public/Trans_PunchCard_Logo.png";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="flex justify-center w-full pt-6 pb-2">
            <nav className="font-manrope font-bold flex items-center justify-center w-full">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={PunchCardLogo} alt="Logo of a card with holes in it like a punch card." width={50} height={50} />
                    </Link>
                    <Link href="/">
                        <div className="text-xl">Punch Card</div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};