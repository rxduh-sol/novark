import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// UPDATED: Imported SmoothScroll component [cite: 2026-03-01]
import SmoothScroll from "./SmoothScroll"; 

const horizon = localFont({
  src: "./horizon.otf", 
  variable: "--font-horizon",
});

const horizon2 = localFont({
  src: "./horizon2.otf", 
  variable: "--font-horizon2",
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
  title: "Novark | Colchester Websites That Get More Bookings & Calls",
  description: "High-performance systems for the local web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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