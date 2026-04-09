import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// UPDATED: Imported SmoothScroll component [cite: 2026-03-01]
import SmoothScroll from "./SmoothScroll";

const horizon = localFont({
  src: "./horizon.otf",
  variable: "--font-horizon",
  display: "swap",
  adjustFontFallback: "Arial",
});

const horizon2 = localFont({
  src: "./horizon2.otf",
  variable: "--font-horizon2",
  display: "swap",
  adjustFontFallback: "Arial",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novark | Colchester Web Design That Get More Bookings & Calls",
  description: "Carefully Designed Cheap Web Design for Local Businesses, Bakeries, Trades,",
  icons: {
    icon: "/images/GRU(1).webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/GRU(1).webp" as="image" />
        <script dangerouslySetInnerHTML={{
          __html: `
          try {
            if(sessionStorage.getItem('novark_visited')) {
              document.write('<style>#loading-screen-wrap { display: none !important; } .bypass-opacity, .bypass-opacity * { opacity: 1 !important; }</style>');
            }
          } catch(e) {}
        `}} />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${horizon.variable} 
          ${horizon2.variable} 
          antialiased
        `}
      >
        {/* UPDATED: Wrapped children with SmoothScroll [cite: 2026-03-01] */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}