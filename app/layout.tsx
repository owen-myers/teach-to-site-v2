import Image from "next/image";
import TeachToScribble from "../public/TeachTo_Scribble_Transparent.png";
import Nav from "./nav";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:"Iuka",
    template: "%s — Iuka",
  },
  description: `Iuka brings innovation frameworks to all organizations.
  Embedded partnerships to meet users, identify opportunites, and manage risk burden
  of new internal ventures.`,
  metadataBase: new URL ("https://iukaimpact.com")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
  return (
    <html lang="en">
      <body >
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
