import Image from "next/image";
import TeachToScribble from "./TeachTo_Scribble_Transparent.png";
import Nav from "./nav";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iuka",
  description: `Iuka brings innovation frameworks to impact organizations.
  Embedded partnerships to meet users, identify opportunites, and minimize 
  long-term costs.`
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Nav />
        <main>{children}</main>
        <div className="h-16 w-16 mx-auto mt-8 mb-6">
            <Image src={ TeachToScribble } alt="Logo with lots of lines." />
        </div>
      </body>
    </html>
  );
}
