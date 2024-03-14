import Link from "next/link";

export default function Nav() {
    return (
        <div>
            <nav className="font-averia text-black p-8 flex justify-between items-center">
                <div className="ml-8">
                <Link href="/">TeachTo</Link>
                </div>
                <div>
                    <Link href="/philosophy" className="mr-8">Philosophy</Link>
                    <Link href="/work" className="mr-8">Work</Link>
                    <Link href="/contact" className="mr-8">Contact</Link>
                </div>
            </nav>
        </div>
    );
};