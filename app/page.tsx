import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | Iuka Innovation",
    default:"Iuka - Innovation Partners in Columbus, OH",
  },
  description: `Iuka brings innovation frameworks to impact organizations.
  Embedded partnerships to meet users, identify opportunites, and maximize
  philanthropic impact.`,
  metadataBase: new URL ("https://iukaimpact.com")
};

export default function Home() {
  return (
    <div className="container mx-auto w-3/4 text-left mt-40 max-w-sm">
      <h1 className="font-averia text-xl mb-6">Iuka builds products and programs for impact organizations</h1>
      <p className="font-chivo text-sm mb-6">We work with you to refine your idea, design with end users,
        and maximize the effectiveness of philanthropic dollars.
      </p>
    </div>
  );
};
