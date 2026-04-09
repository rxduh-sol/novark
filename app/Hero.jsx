"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["BOOKINGS", "CALLS", "SALES", "CLIENTS"];

export default function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const trigger = () => setIsReady(true);
    window.addEventListener('novark_ready', trigger);

    // Fallback if event already fired
    if (typeof window !== 'undefined' && window.novark_ready_fired) {
      setIsReady(true);
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => {
      window.removeEventListener('novark_ready', trigger);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="relative z-10 w-full flex justify-center min-h-[100dvh] pt-[clamp(80px,12vh,120px)] lg:pt-[clamp(100px,16vh,180px)] pb-[clamp(100px,20vh,280px)] overflow-visible"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 h-full mt-2 lg:mt-6">
        
        {/* ==========================================
            DESKTOP HERO (lg and up)
            ========================================== */}
        <motion.div
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 }
            }
          }}
          className="hidden lg:grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start will-change-transform transform-gpu bypass-opacity"
        >
          {/* Left Text Column */}
          <div className="flex flex-col justify-center items-start text-left max-w-[1000px] z-10 pr-8">
            <div className="flex flex-col gap-[clamp(1rem,3vh,2.5rem)] pt-[10px] items-start">
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-horizon uppercase text-white font-black leading-[0.85] tracking-[-0.02em] text-[clamp(2.5rem,4.2vw,6.5rem)] whitespace-nowrap"
              >
                WEBSITES THAT GET
                <span className="block mt-4 text-left">
                  MORE{' '}
                  <span className="relative inline-block ml-1">
                    <motion.div
                      layout
                      initial={{ scaleX: 0 }}
                      animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
                      style={{ originX: 0 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute -bottom-[clamp(4px,1vw,10px)] left-0 right-0 h-[clamp(3px,0.5vw,5px)] bg-white/80 rounded-full"
                    />
                    <span className="font-horizon2 uppercase tracking-[-0.04em] opacity-0 pointer-events-none">
                      {words[index]}
                    </span>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={index}
                        initial={{ y: 25, opacity: 0, filter: "blur(8px)", rotateX: 90 }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)", rotateX: 0 }}
                        exit={{ y: -25, opacity: 0, filter: "blur(8px)", rotateX: -90 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-horizon2 uppercase tracking-[-0.04em] absolute top-0 left-0 w-full text-center origin-bottom"
                        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.7)', color: 'transparent' }}
                      >
                        {words[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </motion.h1>

              <div className="flex flex-col gap-10">
                <motion.div
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  className="flex items-stretch gap-6 max-w-[800px] pr-10"
                >
                  <div className="w-[1px] h-auto bg-white/15 rounded-full shrink-0 my-1" />
                  <p className="font-sans text-white/60 leading-relaxed text-[clamp(1.1rem,1.4vw,1.4rem)] tracking-wide">
                    We build fast, simple, and high performing websites that turn visitors into paying customers without the tech headaches. No complex jargon, no high monthly fees, just a professional site built to grow your business and get your phone ringing.
                  </p>
                </motion.div>

                <motion.div
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500, damping: 20, delay: 0.8 } } }}
                  className="inline-flex items-center self-start gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 md:backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] ml-8 mt-2"
                >
                  <span className="text-[clamp(10px,1.1vw,13px)] font-sans text-white/50 tracking-[0.16em] uppercase font-semibold whitespace-nowrap">
                    Trusted By Local Businesses In Colchester
                  </span>
                </motion.div>
              </div>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-row items-center gap-6 mt-[1vh]"
              >
                <motion.button 
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, y: -6 }} whileTap={{ scale: 0.95 }}
                  className="font-horizon inline-flex min-h-[clamp(65px,8vh,84px)] items-center justify-center rounded-full bg-white px-[clamp(2rem,3.5vw,4rem)] py-2 text-[clamp(1.2rem,1.5vw,1.7rem)] uppercase text-black shadow-xl shadow-white/10"
                >
                  GET MORE CALLS
                </motion.button>
                <motion.button 
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#work');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.05, y: -6 }} whileTap={{ scale: 0.95 }}
                  className="font-horizon inline-flex min-h-[clamp(65px,8vh,84px)] items-center justify-center rounded-full bg-[#0a0a0a] border border-white/5 px-[clamp(2rem,3.5vw,4rem)] py-2 text-[clamp(1.2rem,1.5vw,1.7rem)] uppercase text-white transition-colors duration-300 hover:bg-[#1a1a1a] shadow-xl"
                >
                  VIEW WORK
                </motion.button>
              </motion.div>

              {/* PC Roll-out Ticks (Restored) */}
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-4 lg:mt-8">
                <div className="flex flex-col gap-4 lg:gap-[clamp(16px,2vh,24px)] font-sans">
                  {[
                    "Custom-built for local trades",
                    "Mobile-ready design for customers",
                    "Lightning-fast turnaround",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -50, rotateX: -90, filter: "blur(10px)" },
                        visible: {
                          opacity: 1,
                          x: 0,
                          rotateX: 0,
                          filter: "blur(0px)",
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            delay: 1.2 + (i * 0.15)
                          }
                        }
                      }}
                      className="flex items-center gap-4 lg:gap-5 group cursor-default origin-left"
                    >
                      <div className="flex items-center justify-center w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.03)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <span className="text-white text-[11px] lg:text-[16px] font-bold mt-[1px]">✓</span>
                      </div>
                      <span className="text-[1.1rem] lg:text-[clamp(1.2rem,1.5vw,1.5rem)] text-white/50 group-hover:text-white transition-colors duration-300 tracking-wide font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup Column (Desktop Only) */}
          <motion.div
            variants={{ hidden: { rotateY: -15, scale: 0.9, opacity: 0, x: 20 }, visible: { rotateY: 0, scale: 1, opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } } }}
            className="flex w-full justify-end perspective-[1000px] z-10 items-center"
          >
            <div className="relative rounded-[clamp(2.3rem,3.3vw,3.6rem)] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.8)] shrink-0 p-[clamp(2px,0.4vw,6px)]">
              <div className="absolute -left-[clamp(3px,0.5vw,6px)] top-[15%] w-[clamp(3px,0.5vw,5px)] h-[5%] bg-white rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.2)]" />
              <div className="absolute -right-[clamp(3px,0.5vw,6px)] top-[28%] w-[clamp(3px,0.5vw,5px)] h-[10%] bg-white rounded-r-md shadow-[2px_0_4px_rgba(0,0,0,0.2)]" />
              <div className="relative w-[clamp(260px,22vw,360px)] h-[clamp(560px,calc(84vh-3rem),940px)] bg-black rounded-[clamp(2rem,3vw,3.2rem)] border-[clamp(6px,0.8vw,12px)] border-black">
                <div className="relative w-full h-full rounded-[clamp(1.5rem,2.5vw,2.5rem)] overflow-hidden bg-zinc-950">
                   <img src="/newphoneimage.webp" className="w-full h-full object-cover absolute inset-0" alt="Mobile App Preview" fetchPriority="high" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* ==========================================
            MOBILE HERO (under lg)
            ========================================== */}
        <motion.div
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.15 }
            }
          }}
          className="lg:hidden flex flex-col items-start text-left w-full gap-8 transform-gpu bypass-opacity"
        >
          {/* [1] Headline - 4 Distinct Lines */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-horizon uppercase text-white font-black leading-[0.95] tracking-[-0.02em] text-[clamp(1.8rem,11.5vw,3.5rem)] px-1"
          >
            <span className="block">WEBSITES</span>
            <span className="block mt-2">THAT GET</span>
            <span className="block mt-2">MORE</span>
            <span className="block mt-1 relative inline-block">
              <motion.span 
                className="relative inline-block"
                style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.7)' }}
              >
                <motion.div
                  layout
                  initial={{ scaleX: 0 }}
                  animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
                  style={{ originX: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute -bottom-2 left-0 right-0 h-[4px] bg-white/80 rounded-full"
                />
                
                {/* Hidden text for width */}
                <span className="font-horizon2 uppercase tracking-[-0.04em] opacity-0 pointer-events-none">
                  {words[index]}
                </span>

                {/* Actual rotating text */}
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-horizon2 uppercase tracking-[-0.04em] absolute top-0 left-0 w-full text-left"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </span>
          </motion.h1>

          {/* [2] Trusted By Pill */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 500, damping: 25, delay: 0.8 } } }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-zinc-900/90 md:bg-white/5 md:backdrop-blur-md mx-2 sm:mx-4"
          >
            <span className="text-[10px] sm:text-[11px] font-sans text-white/60 tracking-[0.1em] uppercase font-bold whitespace-nowrap">
              📍 TRUSTED BY LOCAL BUSINESSES IN COLCHESTER
            </span>
          </motion.div>

          {/* [3] CTA Buttons */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-4 w-full px-4 sm:px-6"
          >
            <motion.button 
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileTap={{ scale: 0.95 }}
              className="font-horizon h-[64px] flex items-center justify-center rounded-full bg-white text-[1.2rem] uppercase text-black shadow-lg shadow-white/10"
            >
              GET MORE CALLS
            </motion.button>
            <motion.button 
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileTap={{ scale: 0.95 }}
              className="font-horizon h-[64px] flex items-center justify-center rounded-full bg-[#0a0a0a] border border-white/5 text-[1.2rem] uppercase text-white"
            >
              VIEW WORK
            </motion.button>
          </motion.div>

          {/* [4] Subtext - Suggestive & Centered */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="w-full px-4 mt-2"
          >
            <p className="font-sans text-white/55 leading-relaxed text-[1rem] text-left">
              Turning local traffic into high-value clients with conversion-first design that works while you sleep. No jargon, just results.
            </p>
          </motion.div>

          {/* [5] Mobile Phone Showcase (iPhone Fidelity) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 1 } } }}
            className="w-full flex justify-center mt-4 px-4 pb-12"
          >
            {/* White Phone Case with hardware buttons */}
            <div className="relative rounded-[3.2rem] bg-white p-[5px] shadow-2xl shrink-0">
              {/* Hardware Buttons */}
              <div className="absolute -left-[4px] top-[15%] w-[4px] h-[5%] bg-white rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.2)]" />
              <div className="absolute -left-[4px] top-[23%] w-[4px] h-[8%] bg-white rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.2)]" />
              <div className="absolute -left-[4px] top-[33%] w-[4px] h-[8%] bg-white rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.2)]" />
              <div className="absolute -right-[4px] top-[28%] w-[4px] h-[10%] bg-white rounded-r-md shadow-[2px_0_4px_rgba(0,0,0,0.2)]" />

              {/* Inner Black Frame */}
              <div className="relative w-[240px] aspect-[9/18.5] bg-black rounded-[2.8rem] border-[10px] border-black overflow-hidden select-none">
                {/* Image Content */}
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-zinc-950">
                  <img src="/newphoneimage.webp" className="w-full h-full object-cover" alt="Phone Showcase" fetchPriority="high" />
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 inset-x-0 h-[18px] bg-black w-[35%] mx-auto rounded-b-[0.8rem] z-20 flex justify-center items-center gap-1.5 shadow-xl">
                    <div className="w-[10%] aspect-square bg-zinc-900 rounded-full" />
                    <div className="w-[25%] h-[15%] bg-zinc-900 rounded-full" />
                  </div>

                  {/* Glass Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
