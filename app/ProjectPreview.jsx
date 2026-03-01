"use client";
import { motion } from "framer-motion";

export default function ProjectPreview({ url }) {
  return (
    <div className="md:col-span-7 h-full w-full perspective-[2000px]">
      <motion.div
        initial={{ 
          rotateX: 25, 
          scale: 0.8, 
          skewX: -10, 
          opacity: 0, 
          filter: "blur(15px)" 
        }}
        whileInView={{ 
          rotateX: 0, 
          scale: 1, 
          skewX: 0, 
          opacity: 1, 
          filter: "blur(0px)" 
        }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ 
          type: "spring", 
          stiffness: 40, 
          damping: 20, 
          mass: 1.5,
          delay: 0.1
        }}
        className="h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] bg-black/40 relative group will-change-transform"
      >
        {/* UPDATED: Animated Reflective Glare Overlay [cite: 2026-03-01] */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] z-20 pointer-events-none"
        />

        <iframe 
          src={url} 
          title="Live Preview" 
          className="w-full h-full border-none scrollbar-hide grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 ease-out" 
        />
        
        {/* Guard for iframe interaction */}
        <div className="absolute inset-0 bg-transparent z-10 pointer-events-auto group-hover:pointer-events-none" />
      </motion.div>
    </div>
  );
}