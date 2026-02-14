"use client";
import { motion } from 'framer-motion';

export default function JourneyButton() {
  
  // The scroll handler
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button 
      onClick={scrollToContact} // Trigger the scroll on click
      whileHover={{ scale: 1.005, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white/[0.03] h-20 w-full border border-white/10 text-left p-5 text-white rounded-xl overflow-hidden 
                 hover:border-emerald-500/50 duration-500 
                 before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:z-10 before:bg-emerald-500/20 before:rounded-full before:blur-lg 
                 hover:before:[box-shadow:_20px_20px_20px_30px_#10b98120]"
    >
      <span 
        className="relative z-20 text-[1.4rem] tracking-tighter transition-all duration-300 group-hover:tracking-widest group-hover:text-emerald-400" 
        style={{ fontFamily: 'var(--font-horizon)' }}
      >
        Start Your Journey
      </span>
    </motion.button>
  );
}