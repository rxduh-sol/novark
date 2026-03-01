"use client";
import { motion } from 'framer-motion';
import StrategyBlock from './StrategyBlock';
import TechStack from './TechStack';
import JourneyButton from './JourneyButton';

// REVAMPED DATA: Local & Trade Focus [cite: 2026-03-01]
const STRATEGY_DATA = [
  { title: "Local Market Domination", text: "We don't just build websites; we build digital storefronts that rank top for 'plumber near me' or 'electrician in Essex'. We bring local customers right to your doorstep." },
  { title: "Trust-Based Conversion", text: "Showcasing your work, reviews, and professional credentials to turn hesitant visitors into high-intent calls. We make you the obvious choice in your area." },
  { title: "Tools-Friendly Management", text: "Lightning-fast sites that work perfectly on mobile while you're on the job site. Built for reliability, so you can focus on the work, not the tech." }
];

export default function StrategySection({ variants }) {
  return (
    <div className="md:col-span-5 flex flex-col justify-between p-12 rounded-3xl bg-white/[0.01] backdrop-blur-3xl border border-white/5 shadow-2xl text-left overflow-hidden relative">
      
      {/* GOLD LUXURY AMBIENCE */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-600/10 blur-[120px] pointer-events-none" />

      <div className="space-y-12 relative z-10">
        {/* HEADER SECTION */}
        <motion.div 
          variants={variants} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: 48 }} 
              transition={{ duration: 0.8, ease: "circOut" }} 
              className="h-[1px] bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]" 
            />
            <span className="text-[10px] text-amber-500/90 uppercase tracking-[0.6em] font-black italic">
              What We Offer
            </span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.8] mb-2"
          >
            Let's get
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: -50, letterSpacing: "-0.05em" }} 
            whileInView={{ opacity: 0.9, x: 0, letterSpacing: "0.05em" }} 
            whileHover={{ opacity: 1, color: "#fbbf24", scale: 1.05, x: 10 }} 
            transition={{ 
                delay: 0.2, 
                type: "spring", 
                stiffness: 80, 
                letterSpacing: { duration: 1.5, ease: "easeOut" } 
            }} 
            className="cursor-default inline-block origin-left"
          >
            <span className="italic text-white font-light text-5xl md:text-7xl tracking-tighter" style={{ fontFamily: 'var(--font-horizon2)' }}>
                started.
            </span>
          </motion.div>
        </motion.div>

        {/* STRATEGY BLOCKS */}
        <motion.div 
          className="space-y-8 relative" 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={{ 
            show: { transition: { staggerChildren: 0.15 } } 
          }}
        >
          {STRATEGY_DATA.map((item, i) => (
            <div key={i} className="group/item relative">
              {/* GOLD VERTICAL LINES REMOVED [cite: 2026-03-01] */}
              
              <motion.div
                variants={variants}
                whileHover={{ x: 8 }} 
                transition={{ type: "spring", stiffness: 400 }}
              >
                <StrategyBlock 
                  title={item.title} 
                  text={item.text} 
                  variants={variants} 
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER SECTION */}
      <motion.div 
        variants={variants} 
        initial="hidden" 
        whileInView="show" 
        className="space-y-6 pt-10 border-t border-amber-500/10"
      >
        <TechStack />
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shadow-[0_0_20px_rgba(245,158,11,0.08)] hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-shadow duration-500 rounded-xl"
          >
            <JourneyButton />
          </motion.div>
          
          <motion.p 
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.01, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[9px] text-amber-500/50 text-center tracking-[0.2em] uppercase font-black"
          >
            Priority: Growth Oriented
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}