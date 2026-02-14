"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Font Objects
const horizonStyle = { fontFamily: 'var(--font-horizon), sans-serif' };
const horizon2Style = { fontFamily: 'var(--font-horizon2), sans-serif' };
const geistSansStyle = { fontFamily: 'var(--font-geist-sans), sans-serif' };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const jumpVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95, skewX: 5, filter: "blur(10px)" },
  show: { 
    opacity: 1, y: 0, scale: 1, skewX: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 14 }
  }
};

export default function ContactInfo() {
  return (
    <section className="relative w-full py-32 flex items-center overflow-hidden">
      
      {/* 1. SIDEBAR METADATA */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 0.2, height: "48px" }}
        style={horizon2Style}
        className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 pointer-events-none"
      >
        <div className="w-px bg-white h-full" />
        <div className="rotate-180 [writing-mode:vertical-lr] text-[7px] uppercase tracking-[1em]">
          DATA_UPLINK_V4
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-20 w-full pl-40 pr-12"
      >
        <div className="space-y-16"> {/* Reduced from space-y-24 */}
          
          {/* THE HEADER */}
          <motion.div variants={jumpVariant} className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
               {/* Fixed Small Text: Larger, Bold, Geist */}
               <span style={geistSansStyle} className="text-blue-500 text-[11px] tracking-[0.3em] uppercase font-bold italic">
                 Availability: 2026_Global
               </span>
            </div>
            
            <h2 className="text-[8vw] font-black text-white tracking-tighter uppercase italic leading-[0.8] select-none">
              <span style={horizonStyle} className="block">Drop Us A</span> 
              <span style={horizon2Style} className="opacity-20 block -mt-1">Message</span>
            </h2>
          </motion.div>

          {/* THE DATA NODES */}
          <div className="space-y-12"> {/* Reduced from space-y-16 */}
            {/* EMAIL ROW */}
            <motion.div variants={jumpVariant} className="group cursor-pointer">
              {/* Fixed Label: Geist Sans, Bold, Readable */}
              <p style={geistSansStyle} className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-3 transition-colors group-hover:text-blue-500">
                01 / Primary_Relay
              </p>
              <a 
                href="mailto:Manhiru21@gmail.com"
                style={horizonStyle}
                className="text-3xl md:text-6xl text-white italic tracking-tighter leading-none hover:text-blue-500 transition-colors duration-300"
              >
                Manhiru21@gmail.com
              </a>
            </motion.div>

            {/* PHONE ROW */}
            <motion.div variants={jumpVariant} className="group cursor-pointer">
              {/* Fixed Label: Geist Sans, Bold, Readable */}
              <p style={geistSansStyle} className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-3 transition-colors group-hover:text-blue-500">
                02 / Direct_Secure
              </p>
              <a 
                href="tel:+447588383683"
                style={horizon2Style}
                className="text-2xl md:text-5xl text-white italic tracking-tighter leading-none opacity-60 hover:opacity-100 transition-opacity"
              >
                +44 7588 383 683
              </a>
            </motion.div>
          </div>

          {/* THE FOOTER */}
          <motion.div variants={jumpVariant} className="flex flex-col gap-4 pt-8">
            <div className="h-[2px] w-12 bg-blue-500" />
            {/* Fixed Footer: Geist Sans, Bold, High Opacity */}
            <p style={geistSansStyle} className="max-w-[280px] text-[12px] text-white/60 uppercase font-bold tracking-tight leading-snug">
              Ready for immediate collaboration. <br/> 
              <span className="text-blue-500/80 tracking-widest italic">Secure line verified.</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}