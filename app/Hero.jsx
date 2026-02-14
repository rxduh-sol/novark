"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = ["Websites", "Interfaces", "Experiences", "Systems"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [startAnim, setStartAnim] = useState(false); // Armed but not fired

  useEffect(() => {
    // Listen for the signal from LoadingScreen
    const trigger = () => setStartAnim(true);
    window.addEventListener('novark_ready', trigger);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      window.removeEventListener('novark_ready', trigger);
      clearInterval(timer);
    };
  }, []);

  const titleLetters = "NOVARK".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 } 
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)", scale: 0.8 },
    show: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1,
      transition: { type: "spring", stiffness: 250, damping: 12 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={startAnim ? "show" : "hidden"} // Starts ONLY after loading
      className="relative z-10 text-center flex flex-col items-center justify-center px-4 h-screen"
    >
      
      {/* MAIN TITLE - Staggered Letter Jump */}
      <div className="flex mb-4">
        {titleLetters.map((letter, i) => (
          <motion.h1 
            key={i}
            variants={letterVariants}
            className="text-white text-8xl md:text-9xl font-normal tracking-tighter leading-none" 
            style={{ fontFamily: 'var(--font-horizon)' }}
          >
            {letter}
          </motion.h1>
        ))}
      </div>

      {/* FLOWY DYNAMIC SUBTITLE */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, x: -10 },
          show: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-white flex items-center gap-4">
          <span 
            className="opacity-40 uppercase tracking-[0.3em] text-lg md:text-2xl font-light"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            We build
          </span>
          
          <motion.span layout className="relative inline-block text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={services[index]}
                initial={{ opacity: 0, x: 15, skewX: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, skewX: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -15, skewX: -20, filter: "blur(8px)" }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="block font-bold text-white italic text-xl md:text-3xl"
                style={{ fontFamily: 'var(--font-horizon2)' }}
              >
                {services[index]}
              </motion.span>
            </AnimatePresence>

            <span className="invisible block font-bold italic h-0 overflow-hidden text-xl md:text-3xl" style={{ fontFamily: 'var(--font-horizon2)' }}>
              {services[index]}
            </span>
            
            <motion.div 
              layout
              className="absolute -bottom-1 left-0 w-full"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="absolute top-0 left-0 h-[1px] w-full bg-white blur-[2px] opacity-40" />
            </motion.div>
          </motion.span>
        </h2>
      </motion.div>

      {/* REFINED DESCRIPTION FOOTER */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.8 }}
        className="mt-8 flex flex-col items-center max-w-[550px]"
      >
        <p className="text-white font-sans font-medium tracking-[0.05em] text-[11px] md:text-xs opacity-40 leading-relaxed uppercase">
          Beautifully designed digital products built with <span className="text-white opacity-100">cutting-edge tech</span>. 
          Bridging the gap between engineering and aesthetics.
        </p>
        
        <div className="flex items-center gap-2 mt-3 opacity-20">
          <motion.div 
            variants={{ hidden: { width: 0 }, show: { width: 12 } }}
            className="h-[1px] bg-white" 
          />
          <p className="text-white font-sans font-bold uppercase tracking-[0.4em] text-[8px]">
            Based in Colchester, UK
          </p>
          <motion.div 
            variants={{ hidden: { width: 0 }, show: { width: 12 } }}
            className="h-[1px] bg-white" 
          />
        </div>
      </motion.div>
    </motion.div>
  );
}