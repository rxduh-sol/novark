import React from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero'; 
import Background from './Background';
import Services from './Services'; 
import WorkCarousel from './WorkCarousel';
import ContactTerminal from './ContactTerminal';
import LoadingScreen from './LoadingScreen';
import ProFooter from './ProFooter'; 
import JsonLd from '../components/JsonLd';

export const revalidate = 86400; // 24 hours to trigger freshness loophole

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-transparent overflow-x-hidden scroll-smooth">
      <LoadingScreen />
      <JsonLd />

      <div className="opacity-100">
        
        <Navbar />
        
        <Background />

        {/* SECTION 1: HERO */}
        <section id="home" className="relative z-10 w-full min-h-[100dvh] flex items-center justify-center">
          <Hero />
        </section>

        {/* SECTION 2: SERVICES */}
        <section id="services" className="relative z-30 w-full -mt-[5vh] lg:-mt-[15vh]">
          <Services />
        </section>

        {/* SECTION 3: WORK CAROUSEL */}
        <section id="work" className="relative z-30 w-full py-2 -mt-[5vh]">
          <WorkCarousel />
        </section>

        {/* SECTION 4: CONTACT */}
        <section id="contact" className="relative z-40 w-full -mt-[10vh] pb-16 pt-10 flex flex-col items-center bg-gradient-to-t from-black via-black/95 to-transparent">
          <ContactTerminal />
        </section>

        {/* SECTION 5: PRO FOOTER */}
        <ProFooter />
      </div>
    </main>
  );
}