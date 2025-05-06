import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full border-t border-navy">
      <div className="flex justify-center">
        <div className="w-[99%]">
          <div className="pb-2 pt-2">
            <h2 className="font-manrope font-bold text-sm pl-2 text-navy">Punch Card</h2>
            <p className="font-libre text-[10px] mb-[clamp(1.2rem,20vh,8rem)] pl-2 text-navy">New York, NY</p>
            <div className="flex justify-between items-center pl-2">
              <div>
                <Link className="font-libre text-xs underline text-gray-700" href="mailto:owen@punchcardproduct.com">Get in touch</Link>
              </div>
              <div className="pr-2">
                <p className="font-libre text-[10px] text-gray-700">© {new Date().getFullYear()} Let Teachers Teach LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 