import Image from "next/image";
import TeachToScribble from "../public/TeachTo_Scribble_Transparent.png";
import Nav from "./nav";
import Footer from "./footer";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Iuka | Human-Centered Product Partner",
    template: "%s — Iuka",
  },
  description: `Iuka brings innovation frameworks to all organizations.
  Embedded partnerships to meet users, identify opportunities, and manage risk burden
  of new internal ventures.`,
  keywords: [
    "product development",
    "user research",
    "human-centered design",
    "innovation consulting",
    "design thinking",
    "user experience",
    "UX research",
    "product strategy",
    "experimentation",
    "customer insights"
  ],
  authors: [{ name: "Owen Myers" }],
  creator: "Owen Myers",
  publisher: "Iuka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://iukaimpact.com"),
  alternates: {
    canonical: "https://iukaimpact.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iukaimpact.com",
    siteName: "Iuka",
    title: "Iuka | Human-Centered Product Partner",
    description: "A product partner for teams who want to learn from their customers and embrace experimentation as a growth lever.",
    images: [
      {
        url: "https://iukaimpact.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iuka - Human-Centered Product Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iuka | Human-Centered Product Partner",
    description: "A product partner for teams who want to learn from their customers and embrace experimentation as a growth lever.",
    images: ["https://iukaimpact.com/og-image.jpg"],
    creator: "@owenmyers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
