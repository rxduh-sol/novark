"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectPreview from './ProjectPreview.jsx';
import StrategySection from './StrategySection.jsx';
import { ContainerScroll } from './scroll.tsx';

const projects = [
  {
    id: "suger",
    title: "SourcedBySuger",
    url: "https://scrdbysuger.vercel.app", 
    tag: "High-Ticket Inventory System"
  },
  {
    id: "tinyhouse",
    title: "Tiny House",
    url: "https://tinyhousev1.vercel.app/",
    tag: "Architectural Visualization"
  }
];

export default function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="about" className="relative z-20 -mt-[37vh]"> 
      {/* 1. Widened to 95vw and increased height to ensure nothing is cut off */}
      <ContainerScroll containerClassName="max-w-[95vw] h-[55rem] md:h-[65rem]" titleComponent={<div className="h-10" />}>
        
        {/* 2. Grid balance: 7 cols for preview, 5 cols for text + wider gap-12 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full w-full p-10 pb-24 bg-transparent overflow-visible">
          
          {/* CAROUSEL COLUMN */}
          <div className="md:col-span-7 relative h-[95%] rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full"
              >
                <ProjectPreview url={projects[currentIndex].url} />
                
                <div className="absolute top-6 left-6 z-50 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/80 tracking-[0.2em] uppercase font-mono">
                  LIVE_BUILD // {projects[currentIndex].tag}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-10 left-6 z-50 flex gap-3">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    currentIndex === idx ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STRATEGY COLUMN - min-w and flex ensures text doesn't squish */}
          <div className="md:col-span-5 flex flex-col justify-center min-w-[340px] h-full overflow-visible">
            {/* Removed sidebarJump prop as it was causing issues */}
            <StrategySection />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}