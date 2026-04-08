"use client";
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const reviewsSet1 = [
  { name: "James Pinner", initial: "J", color: "bg-blue-600", company: "Essex Electrics", text: "Novark built us a site that actually works. We get more calls now than we ever did with our old page. Highly recommend for any local trade.", size: "md:col-span-7" },
  { name: "Sarah Lewis", initial: "S", color: "bg-purple-600", company: "Abbey Road Plumbing", text: "Super clean design and very professional to deal with.", size: "md:col-span-5" },
  { name: "Mark Broadbent", initial: "M", color: "bg-emerald-600", company: "Island Areals LTD", text: "The inventory system they set up for our parts tracking is brilliant. It's saved us so much time on administration.", size: "md:col-span-5" },
  { name: "Daniel Westall", initial: "D", color: "bg-orange-600", company: "Green Solar Installations", text: "The best investment we've made for our business this year. Our customers always comment on how pro the website looks.", size: "md:col-span-7" }
];

const reviewsSet2 = [
  { name: "Liam O'Connor", initial: "L", color: "bg-red-600", company: "Colchester Carpentry", text: "Absolute game changer. They took our vision and made it better. The lead generation side is where the real value is.", size: "md:col-span-5" },
  { name: "George Bennett", initial: "G", color: "bg-teal-600", company: "Stanway Landscaping", text: "Professional, fast, and local. No corporate fluff, just results that speak for themselves.", size: "md:col-span-7" },
  { name: "Thomas Wright", initial: "T", color: "bg-zinc-600", company: "Chelmsford Heat & Gas", text: "Highly impressed with the attention to detail. They understand exactly what a trade business needs to stand out.", size: "md:col-span-7" },
  { name: "Harvey Jenkins", initial: "H", color: "bg-indigo-600", company: "Lexden Roofing Ltd", text: "The best experience I've had with a web agency. They handled the tech while I stayed on the tools.", size: "md:col-span-5" }
];

export default function ReviewsBento() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={containerRef} className="w-full py-32 overflow-hidden relative bg-transparent z-10">
      {/* HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 mb-20 relative z-30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="relative">
            {/* DRIFT & SPREAD ENTRANCE */}
            <motion.h2 
              initial={{ opacity: 0, x: 100, letterSpacing: "-0.05em" }}
              whileInView={{ opacity: 1, x: 0, letterSpacing: "-0.02em" }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.8 } 
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-white text-7xl md:text-9xl font-bold tracking-tighter leading-none uppercase select-none" 
              style={{ fontFamily: 'var(--font-horizon), sans-serif' }}
            >
              CLIENTS
            </motion.h2>
            
            <div className="flex items-center gap-4 mt-6">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-[2px] bg-white/40"
                />
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/30 uppercase tracking-[0.8em] text-[10px] md:text-xs font-mono font-black"
                >
                  PROVEN_OUTPUT // 0%_FLUFF
                </motion.p>
            </div>
          </div>
          
          <motion.div 
            className="text-right hidden md:block border-r-4 border-white/20 pr-8"
            /* PLAYFUL NUDGE ANIMATION */
            animate={{ 
                y: [0, -12, 0],
                rotate: [0, -2, 2, 0],
                scale: [1, 1.05, 1]
            }}
            transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatDelay: 1,
                ease: "anticipate"
            }}
          >
            <p className="text-white/40 text-2xl max-w-sm leading-tight font-black italic uppercase tracking-tighter">
              "WE DON'T DO PRETTY. <br/>
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">WE DO REVENUE."</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* MARQUEE WRAPPER */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex relative w-full overflow-visible"
      >
        <motion.div 
          className="flex flex-nowrap gap-10 px-4"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: isHovered ? 400 : 40,
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Loop Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-24 gap-6 w-[170vw] shrink-0">
             <div className="grid grid-cols-12 md:col-span-12 gap-6">
                {reviewsSet1.map((r, i) => <ReviewCard key={`s1-${i}`} review={r} index={i} />)}
             </div>
             <div className="grid grid-cols-12 md:col-span-12 gap-6">
                {reviewsSet2.map((r, i) => <ReviewCard key={`s2-${i}`} review={r} index={i} />)}
             </div>
          </div>

          {/* Loop Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-24 gap-6 w-[170vw] shrink-0">
             <div className="grid grid-cols-12 md:col-span-12 gap-6">
                {reviewsSet1.map((r, i) => <ReviewCard key={`l1-${i}`} review={r} index={i} />)}
             </div>
             <div className="grid grid-cols-12 md:col-span-12 gap-6">
                {reviewsSet2.map((r, i) => <ReviewCard key={`l2-${i}`} review={r} index={i} />)}
             </div>
          </div>
        </motion.div>

        {/* EDGE FADES */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  );
}

function ReviewCard({ review, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.8, y: 40 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
      // FIX: Ensure animation only triggers once so they don't re-blur [cite: 2026-03-01]
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 20, 
        delay: (index % 4) * 0.1 
      }}
      whileHover={{ 
        scale: 1.05, 
        borderColor: "rgba(255,255,255,0.6)",
        backgroundColor: "rgba(24, 24, 27, 0.8)",
        boxShadow: "0 0 40px rgba(255,255,255,0.05)"
      }}
      className={`${review.size} p-8 rounded-[32px] bg-zinc-900/40 border border-white/5 backdrop-blur-md flex flex-col justify-between min-h-[310px] group transition-all duration-300 relative z-10 hover:z-50 cursor-target`}
    >
      <div>
        <div className="flex gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-yellow-500/80 group-hover:fill-yellow-500 transition-colors" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-white/95 text-[1.35rem] leading-tight font-bold tracking-tight italic transition-all group-hover:text-white">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <div className={`w-14 h-14 rounded-2xl ${review.color} flex items-center justify-center text-white font-black text-xl shadow-lg rotate-2 group-hover:rotate-0 transition-transform`}>
          {review.initial}
        </div>
        <div>
          <p className="text-white font-black text-lg leading-none mb-1.5 uppercase tracking-tighter">{review.name}</p>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono leading-none group-hover:text-white/60">{review.company}</p>
        </div>
      </div>
    </motion.div>
  );
}