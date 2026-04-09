"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [startAnim, setStartAnim] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const horizonStyle = { fontFamily: 'var(--font-horizon), sans-serif' };
  const geistSansStyle = { fontFamily: 'var(--font-geist-sans), sans-serif' };

  useEffect(() => {
    const trigger = () => setStartAnim(true);
    window.addEventListener('novark_ready', trigger);

    // Fallback if event already fired
    if (typeof window !== 'undefined' && window.novark_ready_fired) {
      setStartAnim(true);
    }

    return () => window.removeEventListener('novark_ready', trigger);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navBarVariants = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0, y: -20 },
    show: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 600, 
        damping: 25,
        mass: 0.8
      } 
    }
  };

  const navItems = [
    { name: 'Home', id: '#home' },
    { name: 'Services', id: '#services' },
    { name: 'Work', id: '#work' },
    { name: 'Contact', id: '#contact' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        variants={navBarVariants}
        initial="hidden"
        animate={startAnim ? "show" : "hidden"}
        className="fixed top-0 left-0 w-full z-[100] md:px-12 lg:px-16 md:pt-4 lg:pt-8 bypass-opacity"
      >
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="w-full flex items-center justify-between px-4 md:px-4 py-3 lg:py-4 lg:px-6 
                          bg-black/80 md:bg-white/[0.05] backdrop-blur-2xl 
                          border-b md:border border-white/[0.08] md:rounded-full shadow-2xl relative">

            {/* LOGO */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 lg:gap-3 pl-1 lg:pl-3 group cursor-pointer shrink-0">
              <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full transition-transform duration-700 group-hover:rotate-[360deg] overflow-hidden">
                <img src="/images/GRU-removebg-preview(1).webp" alt="GRU Logo" className="w-[32px] h-[32px] lg:w-[52px] lg:h-[52px] object-contain" />
              </div>
              <span style={horizonStyle} className="text-white text-[15px] lg:text-[22px] pr-4 lg:pr-6 border-r border-white/10 mt-0.5">
                NOVARK
              </span>
            </motion.div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <a
                    href={item.id}
                    onClick={(e) => handleScroll(e, item.id)}
                    style={geistSansStyle}
                    className="inline-block px-5 lg:px-8 py-2.5 text-[clamp(12px,1.1vw,16px)] font-black text-gray-400 
                               hover:text-white hover:bg-white/10 rounded-full
                               tracking-[0.2em] uppercase transition-all duration-300 cursor-target"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* CTA & BURGER */}
            <div className="flex items-center gap-2 lg:gap-6 pr-1 lg:pr-4">
              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={(e) => handleScroll(e, '#contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 lg:px-12 py-2.5 lg:py-3.5 rounded-full text-[10px] lg:text-[16px] bg-white text-black 
                             hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all uppercase shadow-lg font-black cursor-target"
                  style={{ ...horizonStyle, letterSpacing: '0.05em' }}
                >
                  GET A QUOTE
                </motion.button>
              </motion.div>

              {/* Burger Button */}
              <motion.button
                variants={itemVariants}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white z-[110]"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <motion.span 
                    animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-white rounded-full origin-center"
                  />
                  <motion.span 
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-full h-0.5 bg-white rounded-full"
                  />
                  <motion.span 
                    animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-white rounded-full origin-center"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-[80%] max-w-[400px] bg-zinc-950 border-l border-white/10 p-10 flex flex-col justify-center gap-10">
              <div className="flex flex-col gap-6">
                <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.3em] mb-4">Navigations</p>
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.id}
                    onClick={(e) => handleScroll(e, item.id)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    style={horizonStyle}
                    className="text-white text-[1.8rem] lg:text-[2.2rem] uppercase hover:text-white/60 transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/5 flex flex-col gap-4">
                <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.3em]">Direct Contact</p>
                <a href="tel:+447588383683" className="text-white/80 font-geist-sans text-lg">+44 7588 383 683</a>
                <a href="mailto:novarktech@protonmail.com" className="text-white/80 font-geist-sans text-lg truncate">novarktech@protonmail.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;