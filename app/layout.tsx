import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Configure Horizon 1
const horizon = localFont({
  src: "./horizon.otf", 
  variable: "--font-horizon",
});

// ADD THIS: Configure Horizon 2
const horizon2 = localFont({
  src: "./horizon2.otf", // Double check if it's .otf, .ttf, or .woff
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
  title: "NOVARK | Phase 2",
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
        {children}
      </body>
    </html>
  );
}