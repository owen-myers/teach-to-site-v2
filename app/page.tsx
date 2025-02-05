import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    template: "%s | Iuka Innovation",
    default:"Iuka - Innovation Partners in NYC",
  },
  description: `Iuka brings innovation frameworks to impact organizations.
  Embedded partnerships to meet users, identify opportunites, and maximize
  philanthropic impact.`,
  metadataBase: new URL ("https://iukaimpact.com")
};

export default function Home() {
  return (
    <div className="container mx-auto w-3/4 text-left mt-40 max-w-sm">
      <h1 className="font-averia text-2xl mb-6">Build products and programs that truly improve the common welfare</h1>
      <p className="font-chivo text-sm mb-8">
        Research and prototyping services for teams innovating in the care economy. 
        Now accepting clients for 2025. 
      </p>
      <div className="flex justify-center">
        <Link href="/work">
        <button className='rounded border border-black font-chivo text-md
        transition duration-300 ease-in-out transform hover:bg-gray-100 
        hover:scale-105 p-2'>Work &rarr;</button>
        </Link>
      </div>
    </div>
  );
};
