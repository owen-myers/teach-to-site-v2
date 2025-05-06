import Footer from "./footer";
import "./globals.css";
import Nav from "./nav";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "Punch Card | Product Partner",
    template: "%s — Punch Card",
  },
  description: `An all-in-one partner for building from scratch.
  Early-stage teams need more than just a monthly check-in.
  Punch Card fills in the gaps in fundraising, product, and operations 
  to help builders maintain early momentum.`,
  keywords: [
    "product development",
    "startup consulting",
    "early-stage teams",
    "fundraising",
    "product strategy",
    "operations",
    "builder support",
    "startup partner",
    "product partner",
    "early momentum"
  ],
  authors: [{ name: "Owen Myers" }],
  creator: "Owen Myers",
  publisher: "Punch Card",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.punchcardproduct.com"),
  alternates: {
    canonical: "https://www.punchcardproduct.com",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.punchcardproduct.com",
    siteName: "Punch Card",
    title: "Punch Card | Product Partner",
    description: "An all-in-one partner for building from scratch. Early-stage teams need more than just a monthly check-in.",
    images: [
      {
        url: "https://www.punchcardproduct.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Punch Card - Product Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punch Card | Product Partner",
    description: "An all-in-one partner for building from scratch. Early-stage teams need more than just a monthly check-in.",
    images: ["https://www.punchcardproduct.com/og-image.jpg"],
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
        <main className="flex-grow">
          <Nav />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
