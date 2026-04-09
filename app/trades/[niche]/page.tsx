import React from 'react';
import { notFound } from 'next/navigation';
import localTrades from '../../data/localTrades.json';
import Navbar from '../../Navbar'; 
import Hero from '../../Hero'; 
import Background from '../../Background';
import Services from '../../Services'; 
import WorkCarousel from '../../WorkCarousel';
import ContactTerminal from '../../ContactTerminal';
import LoadingScreen from '../../LoadingScreen';
import ProFooter from '../../ProFooter'; 
import JsonLd from '../../../components/JsonLd';

export const revalidate = 86400; // 24 hours ISR

export async function generateStaticParams() {
  return localTrades.map((trade) => ({
    niche: trade.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params;
  const tradeData = localTrades.find((t) => t.slug === niche);
  
  if (!tradeData) {
    return { title: 'Not Found' };
  }

  return {
    title: tradeData.title,
    description: tradeData.description,
    alternates: {
      canonical: `https://novark-agency.co.uk/trades/${tradeData.slug}`
    },
    openGraph: {
      title: tradeData.title,
      description: tradeData.description,
      url: `https://novark-agency.co.uk/trades/${tradeData.slug}`,
      type: 'website',
    }
  };
}

export default async function TradeNichePage({ params }: { params: Promise<{ niche: string }> }) {
  const { niche } = await params;
  const tradeData = localTrades.find((t) => t.slug === niche);

  if (!tradeData) {
    notFound();
  }

  return (
    <main className="relative w-full min-h-screen bg-transparent overflow-x-hidden scroll-smooth">
      <LoadingScreen />
      
      {/* Inject targeted Schema for this specific trade niche */}
      <JsonLd 
        trade={tradeData.trade} 
        customDescription={tradeData.description}
        customUrl={`https://novark-agency.co.uk/trades/${tradeData.slug}`}
      />

      <div className="opacity-100">
        
        <Navbar />
        
        <Background />

        {/* SECTION 1: HERO */}
        <section id="home" className="relative z-10 w-full min-h-[100dvh] flex items-center justify-center">
          {/* Visual content remains generic as requested, but metadata and schema are hyper-optimized */}
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
