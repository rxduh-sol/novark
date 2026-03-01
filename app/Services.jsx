"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TargetCursor from './TargetCursor';

const services = [
  {
    title: "Local Reputation",
    description: "We make you the #1 choice in your area. We build high-end websites that show customers you're a pro before they even call for a quote.",
    icon: "01",
    start: { x: -150, rotate: -25, rotateY: -45 }
  },
  {
    title: "More Enquiries",
    description: "Built to turn visitors into leads. We use clear layouts and fast booking buttons so your phone stays ringing with the right customers.",
    icon: "02",
    start: { x: 0, rotate: 0, rotateY: 0 }
  },
  {
    title: "The Full Package",
    description: "From your domain name to professional emails—we handle the tech side entirely so you can stay focused on the job. No stress, just results.",
    icon: "03",
    start: { x: 150, rotate: 25, rotateY: 45 }
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    // Lowered min-height and padding to keep cards visible without scrolling too much
    <section ref={containerRef} id="services" className="relative z-30 min-h-[100vh] py-16 bg-transparent overflow-hidden">
      <TargetCursor targetSelector=".cursor-target" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Significantly reduced margin-bottom to pull cards up */}
        <div className="mb-8 text-center relative">
          <motion.h2 
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.5], [0, 1]),
              fontFamily: 'var(--font-horizon)' 
            }}
            className="text-white text-7xl md:text-9xl font-bold mb-2 tracking-tighter"
          >
            SERVICES
          </motion.h2>
          
          <p className="text-white/40 uppercase tracking-[0.6em] text-sm font-medium">Quality Design // Local Business Growth</p>
        </div>

        {/* Tightened container height to keep cards centered and high */}
        <div className="relative flex justify-center items-center h-[500px] perspective-1000">
          {services.map((service, i) => {
            const x = useTransform(smoothProgress, [0, 1], [service.start.x, 0]);
            // Cards now start only 20px below their home instead of 100px
            const y = useTransform(smoothProgress, [0, 1], [20, 0]); 
            const rotate = useTransform(smoothProgress, [0, 1], [service.start.rotate, 0]);
            const rotateY = useTransform(smoothProgress, [0, 1], [service.start.rotateY, 0]);
            const scale = useTransform(smoothProgress, [0, 1], [0.95, 1]);

            return (
              <motion.div
                key={i}
                style={{ x, y, rotate, rotateY, scale, zIndex: i === 1 ? 40 : 30 }}
                animate={{ scale: 1, y: 0 }} 
                whileHover={{ 
                  scale: 1.05, 
                  y: -15, // Light jiggle upward
                  transition: { type: "spring", stiffness: 400, damping: 10 } 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="cursor-target absolute w-full max-w-[400px] md:relative md:mx-6"
              >
                <div className="group relative p-10 h-[500px] rounded-3xl bg-zinc-900/90 border border-white/10 backdrop-blur-3xl transition-all duration-500 hover:border-white/40 shadow-2xl shadow-black/90">
                  
                  <div className="text-white/20 text-2xl mb-10 group-hover:text-white/80 transition-colors" style={{ fontFamily: 'var(--font-horizon)' }}>
                    {service.icon}
                  </div>

                  <h3 className="text-white text-4xl mb-6 font-bold tracking-tight leading-none" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 text-lg leading-relaxed group-hover:text-white/80 transition-colors">
                    {service.description}
                  </p>

                  <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-white/5 group-hover:border-white/60 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}