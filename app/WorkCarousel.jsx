"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const works = [
  {
    title: "PTAP - FAST MOBILE PAYMENTS",
    tag: "[FINTECH]",
    description: "Turn your phone into a card reader instantly. No extra hardware, no monthly fees.",
    image: "/images/ptap_work.png",
    bullets: [
      "Get paid instantly on your phone",
      "No expensive card machines required",
      "Simple setup for local businesses"
    ]
  },
  {
    title: "PREMIUM RETAIL STORE",
    tag: "[E-COMMERCE]",
    description: "A professional online shop built to sell clothing and accessories with ease.",
    image: "/images/store_work.png",
    bullets: [
      "Clean, professional design",
      "Mobile-ready for customers on the go",
      "Easy-to-use checkout system"
    ]
  },
  {
    title: "CUSTOM BUSINESS DASHBOARD",
    tag: "[SOFTWARE]",
    description: "Everything your business needs to stay organized, from sales tracking to team tasks.",
    image: "/images/dashboard_work.png",
    bullets: [
      "Track your sales and revenue",
      "Keep your projects on schedule",
      "Manage your team effectively"
    ]
  }
];

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % works.length), []);
  const prev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + works.length) % works.length), []);

  const handleManualNav = (direction) => {
    setIsPaused(true);
    if (direction === 'next') next();
    else prev();
  };

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      next();
    }, 3500); // Wait 3.5s then slide
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const getOffset = (idx) => {
    if (idx === currentIndex) return 0;
    if (idx === (currentIndex + 1) % works.length) return 1;
    if (idx === (currentIndex - 1 + works.length) % works.length) return -1;
    return 2; 
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
      }}
      className="w-full relative overflow-hidden py-10 lg:py-16 flex flex-col items-center z-20"
    >

      {/* Title Section */}
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="text-center mb-6 lg:mb-8 px-4 z-30"
      >
        <h2 className="text-white text-[clamp(3.5rem,5.5vw,6rem)] font-horizon uppercase font-bold tracking-tight mb-2 text-shadow-xl leading-none">
          OUR WORK
        </h2>
        <p className="text-white/80 text-[clamp(1.1rem,1.4vw,1.3rem)] font-medium mb-4">
          A few examples of how we build websites that bring in more enquiries
        </p>
      </motion.div>

      {/* Carousel Container */}
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 30, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }}
        className="relative w-full h-[450px] lg:h-[clamp(450px,55vh,520px)] flex items-center justify-center max-w-[1900px] mx-auto z-30 perspective-1000"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {works.map((work, idx) => {
          const offset = getOffset(idx);
          const isCenter = offset === 0;

          // Computations for smooth 3-card sliding
          let x = "0%";
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;

          if (offset === -1) {
            x = "-105%";
            scale = 0.85;
            zIndex = 5;
            opacity = 0.35;
          } else if (offset === 1) {
            x = "105%";
            scale = 0.85;
            zIndex = 5;
            opacity = 0.35;
          } else if (Math.abs(offset) > 1) {
             // Hidden state for larger arrays
            x = offset > 1 ? "200%" : "-200%";
            scale = 0;
            opacity = 0;
          }

          return (
            <motion.div
              key={idx}
              initial={false}
              animate={{ x, scale, zIndex, opacity }}
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleManualNav('prev');
                else if (info.offset.x < -100) handleManualNav('next');
              }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className={`absolute w-[95%] sm:w-[85%] md:w-[600px] lg:w-[700px] h-full transform-gpu will-change-transform ${!isCenter ? "pointer-events-none" : ""}`}
            >
              {/* Card Body */}
              <div className={`w-full h-full rounded-[1.5rem] lg:rounded-[2rem] bg-zinc-900/98 md:bg-zinc-900/60 border border-white/20 md:backdrop-blur-md overflow-hidden flex flex-col shadow-2xl relative ${isCenter ? "shadow-[0_40px_100px_rgba(0,0,0,0.8)]" : ""}`}>
                
                {/* Mockup Frame Top Half - Increased Height on Mobile */}
                <div className="w-full h-[48%] lg:h-[50%] bg-zinc-800 border-b border-white/10 relative object-cover overflow-hidden bg-gradient-to-b from-zinc-800 to-black">
                   <div className="absolute top-0 left-0 w-full h-8 bg-black/60 border-b border-white/10 flex items-center px-4 gap-2 z-10 backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                   </div>
                   <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover object-top opacity-90 mt-8"
                   />
                </div>

                {/* Content Bottom Half */}
                <div className="p-4 lg:p-8 flex flex-col flex-grow relative overflow-hidden">
                  <span className="text-white/40 text-[9px] lg:text-xs tracking-[0.2em] uppercase font-bold mb-1">
                    {work.tag}
                  </span>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-white text-[1.1rem] lg:text-[clamp(1.1rem,1.4vw,1.4rem)] font-horizon uppercase font-bold tracking-tight leading-none truncate">
                      {work.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-[0.8rem] lg:text-[clamp(0.85rem,1vw,1rem)] leading-tight lg:leading-relaxed mb-3 lg:mb-4 max-w-[98%]">
                    {work.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 lg:gap-4 mt-auto pb-1">
                    {work.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 lg:gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        <span 
                          style={{ fontFamily: 'var(--font-geist-sans)' }}
                          className="text-white/90 font-medium text-[0.95rem] lg:text-[clamp(1rem,1.2vw,1.2rem)]"
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inactive Overlay Dimming */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none rounded-[2rem]" />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Desktop Arrows */}
        <button 
          onClick={() => handleManualNav('prev')}
          className="hidden md:flex absolute left-0 md:left-[2%] xl:left-[5%] z-40 w-16 h-[300px] items-center justify-center opacity-50 hover:opacity-100 transition-opacity group cursor-pointer"
        >
           <span className="text-white/80 text-4xl lg:text-5xl group-hover:-translate-x-2 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">←</span>
        </button>

        <button 
          onClick={() => handleManualNav('next')}
          className="hidden md:flex absolute right-0 md:right-[2%] xl:right-[5%] z-40 w-16 h-[300px] items-center justify-center opacity-50 hover:opacity-100 transition-opacity group cursor-pointer"
        >
           <span className="text-white/80 text-4xl lg:text-5xl group-hover:translate-x-2 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">→</span>
        </button>
      </motion.div>

      {/* Mobile Arrows Control Bar */}
      <div className="md:hidden flex items-center gap-10 mt-8 z-50">
        <button 
          onClick={() => handleManualNav('prev')}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white text-2xl"
        >
          ←
        </button>
        <div className="flex gap-2">
          {works.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-white" : "bg-white/20"}`}
            />
          ))}
        </div>
        <button 
          onClick={() => handleManualNav('next')}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white text-2xl"
        >
          →
        </button>
      </div>

      {/* Replaced CTA Space Padding */}
      <div className="pb-10 lg:pb-16" />

    </motion.div>
  );
}
