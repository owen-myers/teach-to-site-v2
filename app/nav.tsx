import Link from "next/link";

export default function Nav() {
    return (
        <div>
            <nav className="font-lora text-black py-8 flex justify-between items-center">
                <div className="ml-12 mr-3 sm:mr-8">
                <Link href="/">Iuka
                <p className="font-rethink text-gray-500 text-xs">(eye-you-kuh)</p>
                </Link>
                </div>
                <div>
                    <Link href="/philosophy" className="mr-3 sm:mr-8 transition-colors duration-300 ease-in-out hover:text-gray-500 focus:text-gray-500 active:text-gray-500">Philosophy</Link>
                    <Link href="/work" className="mr-3 sm:mr-8 transition-colors duration-300 ease-in-out hover:text-gray-500 focus:text-gray-500 active:text-gray-500">Work</Link>
                    <Link href="/contact" className="mr-12 transition-colors duration-300 ease-in-out hover:text-gray-500 focus:text-gray-500 active:text-gray-500">Contact</Link>
                </div>
            </nav>
        </div>
    );
};