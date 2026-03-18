"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = () => {
  const [startAnim, setStartAnim] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const horizonStyle = { fontFamily: 'var(--font-horizon), sans-serif' };
  const horizon2Style = { fontFamily: 'var(--font-horizon2), sans-serif' };
  const geistSansStyle = { fontFamily: 'var(--font-geist-sans), sans-serif' };

  useEffect(() => {
    const trigger = () => setStartAnim(true);
    window.addEventListener('novark_ready', trigger);

    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = navItems.find(item => item.id === `#${entry.target.id}`);
          if (match) setActiveSection(match.name);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener('novark_ready', trigger);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Services', id: '#services' },
    { name: 'Reviews', id: '#reviews' },
    { name: 'Contacts', id: '#contact' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={startAnim ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        /* FIX: top-0 and pt-4 removes the deadspace above the bar */
        className="fixed top-0 left-0 w-full z-[10000] flex justify-center pointer-events-none pt-4"
      >
        {/* ENHANCED CONTAINER:
            - max-w-[94vw]: Prevents overlap on edges by capping width relative to the screen.
            - px-5: Adjusted for the screen-safe width.
        */}
        <div className="w-auto max-w-[94vw] flex items-center justify-center bg-white/[0.08] backdrop-blur-3xl pointer-events-auto
                        border border-white/[0.15] rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-5 py-3.5">
          
          {/* LOGO & BRAND */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden bg-white/5">
              <img src="https://i.postimg.cc/L8xkzHW6/GRU-removebg-preview.png" alt="Logo" className="w-full h-full object-contain scale-95" />
            </div>
            
            <span style={horizonStyle} className="text-white text-[12px] tracking-wider whitespace-nowrap leading-none pr-3 border-r border-white/20 mt-0.5">
              NOVARK
            </span>
          </div>

          {/* CENTERED STABLE HUD */}
          <div className="flex items-center h-5 overflow-hidden w-[100px] justify-center mx-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSection}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={geistSansStyle}
                className="text-[10px] text-white/60 uppercase tracking-[0.25em] font-black whitespace-nowrap text-center"
              >
                {activeSection}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* DIVIDER */}
          <div className="h-5 w-[1px] bg-white/20" />

          {/* BURGER */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-1.5 outline-none ml-2"
          >
            <motion.div animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-white rounded-full" />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-white rounded-full" />
            <motion.div animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-white rounded-full" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 50% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[9000] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}>
                  <a href={item.id} onClick={(e) => handleScroll(e, item.id)} className="text-white text-4xl font-black italic uppercase tracking-tight" style={horizon2Style}>
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;