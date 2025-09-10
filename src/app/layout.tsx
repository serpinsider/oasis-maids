import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oasismaids.com'),
  title: {
    default: "Oasis Maids | Professional House Cleaning Services - Central Florida",
    template: "%s | Oasis Maids - Professional Cleaning"
  },
  description: "Professional house cleaning in Orlando, Gainesville & Ocala. Licensed & insured maids, 100% satisfaction guarantee. Book your trusted cleaning service in Central Florida today!",
  keywords: [
    "house cleaning", 
    "maid service", 
    "residential cleaning", 
    "home cleaning", 
    "cleaning company",
    "Orlando cleaning", 
    "Central Florida cleaning", 
    "Gainesville cleaning", 
    "Ocala cleaning", 
    "Florida cleaning",
    "Orlando house cleaning", 
    "Orlando maid service", 
    "Central Florida maid service", 
    "Florida maid service", 
    "residential cleaning Orlando", 
    "home cleaning Orlando"
  ],
  authors: [{ name: "Oasis Maids" }],
  creator: "Oasis Maids",
  publisher: "Oasis Maids",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oasismaids.com",
    title: "Oasis Maids - Professional House Cleaning Service | Central Florida",
    description: "Professional house cleaning service in Orlando, Gainesville & Ocala, Florida. Reliable, insured, and trusted residential cleaning with free quotes.",
    siteName: "Oasis Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oasis Maids - Professional House Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasis Maids - Professional House Cleaning Service | Central Florida",
    description: "Professional house cleaning service in Orlando, Gainesville & Ocala, Florida. Reliable, insured, trusted residential cleaning. Get your free quote today!",
    creator: "@oasismaids",
    images: ["/ogs-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://oasismaids.com",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Modern browsers - ICO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Fallback - ICO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* iOS/macOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Android/Chrome */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        {/* Fathom - beautiful, simple website analytics */}
        <script src="https://cdn.usefathom.com/script.js" data-site="ELAPZTGP" defer></script>
        {/* / Fathom */}

      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData type="local-business" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>

      </body>
    </html>
  );
}