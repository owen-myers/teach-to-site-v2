import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8">
      <div className="flex justify-center">
        <div className="w-[95%] flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-lora text-lg hover:text-gray-600 transition-colors duration-300">
              Iuka
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="/work" className="font-figtree text-sm text-gray-600 hover:text-black transition-colors duration-300">
              Work
            </Link>
            <Link href="/contact" className="font-figtree text-sm text-gray-600 hover:text-black transition-colors duration-300">
              Contact
            </Link>
            <a href="mailto:owen@iukaimpact.com" className="font-figtree text-sm text-gray-600 hover:text-black transition-colors duration-300">
              owen@iukaimpact.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 