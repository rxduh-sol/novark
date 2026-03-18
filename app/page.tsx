"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import MobileNavbar from './Mobile/MobileNavbar'; // Imported from requested directory
import Hero from './Hero'; 
import Background from './Background';
import Showcase from './Showcase'; 
import TechLogoSection from './TechLogoSection'; 
import Services from './Services'; 
import ReviewsBento from './ReviewsBento';
import ContactTerminal from './ContactTerminal';
import LoadingScreen from './LoadingScreen';
import ProFooter from './ProFooter'; 

export default function BalatroBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // USER AGENT DETECTION: Targets actual hardware strings
    const checkDevice = () => {
      const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobileDevice(mobileRegex.test(userAgent));
    };

    checkDevice();
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-transparent overflow-x-hidden scroll-smooth">
      <LoadingScreen />

      <div className={isMounted ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        
        {/* CONDITIONAL NAVBAR RENDERING */}
        {isMobileDevice ? <MobileNavbar /> : <Navbar />}
        
        <Background />

        {/* SECTION 1: HERO */}
        <section id="home" className="relative z-10 w-full h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* SECTION 2: SHOWCASE */}
        <Showcase />

        {/* SECTION 3: TECH STACK */}
        <section className="relative z-30 -mt-[194px]">
          <TechLogoSection />
        </section>

        {/* SECTION 4: SERVICES */}
        <section id="services" className="relative z-30 w-full -mt-[2vh]">
          <Services />
        </section>

        {/* SECTION 5: REVIEWS BENTO */}
        <section id="reviews" className="relative z-30 w-full py-16 -mt-[10vh]">
          <ReviewsBento />
        </section>

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="relative z-40 w-full -mt-[20vh] pb-32 pt-10 flex flex-col items-center bg-gradient-to-t from-black via-black/95 to-transparent">
          <ContactTerminal />
        </section>

        {/* SECTION 7: PRO FOOTER */}
        <ProFooter />
      </div>
    </main>
  );
}