"use client";
import { motion } from "framer-motion";

export default function ProjectPreview({ url }) {
  return (
    <div className="md:col-span-7 h-full w-full perspective-[2000px]">
      <motion.div
        /* INITIAL: The "hidden" state (Tilted, small, blurred)
           WHILE IN VIEW: The "final" state (Flat, full scale, sharp)
        */
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
        /* viewport: { once: true } is the magic fix. It disables the scroll-back animation. */
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ 
          type: "spring", 
          stiffness: 40, // Low stiffness for that heavy, mechanical feel
          damping: 20, 
          mass: 1.5,
          delay: 0.1
        }}
        className="h-full w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] bg-black/40 relative group will-change-transform"
      >
        {/* Animated Scanline Overlay */}
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[20%] bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent z-20 pointer-events-none"
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