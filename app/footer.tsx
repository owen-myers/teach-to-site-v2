import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="flex justify-center">
        <div className="w-[99%]">
          <div className="pb-2 pt-2">
            <h2 className="font-manrope font-bold text-sm pl-2">Punch Card</h2>
            <p className="font-rethink text-[10px] text-gray-600 mb-12 pl-2">New York, NY</p>
            <div className="flex justify-between items-center pl-2">
              <div>
                <Link className="font-rethink text-xs text-gray-600 underline" href="mailto:owen@iukaimpact.com">Get in touch</Link>
              </div>
              <div className="pr-2">
                <p className="font-rethink text-[10px] text-gray-600">© {new Date().getFullYear()} Let Teachers Teach LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 