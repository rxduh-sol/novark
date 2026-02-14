"use client";

import React from 'react';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiThreedotjs } from 'react-icons/si';

const TECH_LOGOS = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer />, title: "Framer", href: "https://framer.com" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
];

export default function TechLogoSection() {
  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center py-4">
      <div 
        className="w-full h-[160px] relative transition-all duration-700"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <LogoLoop
          logos={TECH_LOGOS}
          speed={30} // Slower speed makes larger icons feel more "massive"
          direction="right"
          logoHeight={85}   // High-impact size
          gap={180}         // Plenty of room for the big boys
          hoverSpeed={5}
          scaleOnHover
          fadeOut={false} 
          ariaLabel="Technology partners"
          className="text-white brightness-200 contrast-200 grayscale opacity-30 hover:opacity-100 transition-all duration-500"
        />
      </div>
    </div>
  );
}