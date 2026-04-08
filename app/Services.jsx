"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: "01",
    title: "A WEBSITE THAT GETS YOU MORE CALLS",
    description: "A clean, mobile-friendly website designed to turn visitors into real enquiries.",
    bullets: [
      "One-tap calling for mobile users",
      "Fast loading on all devices",
      "Built to guide customers to contact you"
    ]
  },
  {
    icon: "02",
    title: "HELP CUSTOMERS FIND YOU LOCALLY",
    description: "Make sure people in your area can easily find your business when they search.",
    bullets: [
      "Shows up for local searches",
      "Google Maps setup on site",
      "Pages focused on your service and area"
    ]
  },
  {
    icon: "03",
    title: "WE HANDLE EVERYTHING FOR YOU",
    description: "No tech stress. We take care of everything so you can focus on your work.",
    bullets: [
      "Domain and hosting included",
      "Setup and launch handled",
      "Ongoing updates if needed"
    ]
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 18,
        mass: 1.2
      }
    }
  };

  return (
    <section ref={containerRef} id="services" className="relative z-30 min-h-[100vh] py-24 bg-transparent flex flex-col justify-center mt-8 lg:mt-12">
      
      {/* Background Map snippet - Optimized Performance Reveal */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform scale-[1.6] lg:scale-100 top-[-5%] lg:top-0 blur-[2px] lg:blur-none" 
        style={{
          backgroundImage: "url('/images/colchester_map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)"
        }} 
      />

      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Title */}
        <div className="mb-14 md:mb-10 text-center flex flex-col items-center pt-8 xl:pt-[4vh]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="px-6 lg:px-0 text-white text-[clamp(2.5rem,5.5vw,7.5rem)] font-horizon uppercase font-bold tracking-tight mb-10 lg:mb-[60px] text-shadow-xl"
          >
            SERVICES
          </motion.h2>

          {/* Social Proof Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-row items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl mx-1"
          >
            <span className="text-emerald-400 text-base sm:text-xl shrink-0">📍</span>
            <span className="text-white/80 font-sans text-[10px] sm:text-[13px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold pt-[2px] text-left">
              Helping businesses in Stanway, Lexden & The High Street
            </span>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 15 } 
              }}
              className="relative p-6 md:p-8 lg:p-[clamp(2rem,3vw,3rem)] h-auto lg:h-[clamp(420px,55vh,520px)] rounded-[2rem] bg-zinc-900/60 border border-white/10 backdrop-blur-md group shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all hover:bg-zinc-900/90 hover:border-white/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col"
            >
              {/* Floating Stat Badges Attached directly to Card Edges */}
              {i === 0 && (
                <div className="absolute -top-8 -left-4 md:-left-8 lg:-left-12 flex items-center gap-4 bg-zinc-800/90 backdrop-blur-xl border border-white/10 p-4 lg:p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg lg:text-xl">↑</div>
                  <div className="flex flex-col">
                    <span className="text-white text-xl lg:text-2xl font-bold font-sans leading-none">70%</span>
                    <span className="text-white/50 text-[9px] lg:text-[10px] uppercase font-sans tracking-wider mt-1">Avg. Call Increase</span>
                  </div>
                </div>
              )}

              {i === 2 && (
                <div className="absolute -top-8 -right-4 md:-right-8 lg:-right-12 flex items-center gap-4 bg-zinc-800/90 backdrop-blur-xl border border-white/10 p-4 lg:p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-lg lg:text-xl">⚡</div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-xl lg:text-2xl font-bold font-sans leading-none">HIGH</span>
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] shadow-[0_0_8px_rgba(52,211,153,0.4)]">✓</div>
                    </div>
                    <span className="text-white/50 text-[9px] lg:text-[10px] uppercase font-sans tracking-wider mt-1">Perfect for Mobile</span>
                  </div>
                </div>
              )}

              {/* Number Icon */}
              <div className="text-white/40 text-[clamp(2.5rem,4vw,3.5rem)] font-horizon font-bold mb-[clamp(1rem,2vh,2rem)] transition-colors group-hover:text-white/60">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-[clamp(1.1rem,1.4vw,1.4rem)] lg:text-[1.3rem] xl:text-[1.4rem] font-horizon uppercase leading-[1.2] tracking-tight mb-[clamp(0.5rem,1.5vh,1rem)] pr-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/60 font-sans text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.65] mb-[clamp(1.5rem,4vh,3rem)] pr-2">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-[clamp(1rem,2.2vh,1.5rem)] font-sans mt-auto mb-8 lg:mb-12 pr-4 lg:pr-10">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-[12px] rounded-full bg-white/90 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <span className="text-white text-[clamp(1.15rem,1.4vw,1.35rem)] font-bold leading-[1.4] tracking-wide">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Corner Accent */}
              <div className="absolute bottom-6 right-6 w-10 h-10 lg:w-12 lg:h-12 border-r-[3px] border-b-[3px] border-white/10 transition-colors duration-300 group-hover:border-white/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}