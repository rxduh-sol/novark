"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero'; 
import { ContainerScroll } from './scroll'; 
import Background from './Background';
import ProjectPreview from './ProjectPreview.jsx';
import StrategySection from './StrategySection'; 
import TechLogoSection from './TechLogoSection'; 
import XRayProject from './XRayProject';
import GlobalOperations from './GlobalOperations'; 
import ContactTerminal from './ContactTerminal';
import LoadingScreen from './LoadingScreen'; // Import the new loader

const sidebarJump = {
  hidden: { opacity: 0, x: 60, scale: 0.8, skewX: 10, filter: "blur(12px)" },
  show: { 
    opacity: 1, x: 0, scale: 1, skewX: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 14, mass: 0.8 }
  }
};

export default function BalatroBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This triggers after the first render, 
    // ensuring Client-side logic is ready.
    setIsMounted(true);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-transparent overflow-x-hidden scroll-smooth">
      {/* 1. The Preloader - Always visible first */}
      <LoadingScreen />

      {/* 2. Page Content - Hidden from screen readers/interaction until mounted */}
      <div className={isMounted ? "opacity-100" : "opacity-0"}>
        <Navbar />
        <Background />

        {/* SECTION 1: HERO -> #home */}
        <section id="home" className="relative z-10 w-full h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* SECTION 2: SHOWCASE -> #about */}
        <section id="about" className="relative z-20 -mt-[37vh]"> 
          <ContainerScroll containerClassName="max-w-[90vw] h-[45rem] md:h-[60rem]" titleComponent={<div className="h-10" />}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full w-full p-6 bg-transparent">
              <ProjectPreview url="https://tinyhousev1.vercel.app/" />
              <StrategySection variants={sidebarJump} />
            </div>
          </ContainerScroll>
        </section>

        {/* SECTION 3: TECH STACK */}
        <section className="relative z-30 -mt-[194px]">
          <TechLogoSection />
        </section>

        {/* SECTION 4: X-RAY -> #systems */}
        <section id="systems" className="relative z-30 w-full py-40 -mt-[24vh] pointer-events-none">
          <XRayProject />
        </section>

        {/* SECTION 5: GLOBAL OPERATIONS -> #support */}
        <section id="support" className="relative z-30 w-full py-20 -mt-[35vh]">
          <GlobalOperations />
        </section>

        {/* SECTION 6: CONTACT -> #contact */}
        <section id="contact" className="relative z-40 w-full py-32 flex justify-center px-12 bg-gradient-to-t from-black via-black/80 to-transparent">
          <ContactTerminal />
        </section>
      </div>
    </main>
  );
}