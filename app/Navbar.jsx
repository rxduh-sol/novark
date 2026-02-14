"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [startAnim, setStartAnim] = useState(false);

  // Font Objects (No-Fail Method)
  const horizonStyle = { fontFamily: 'var(--font-horizon), sans-serif' };
  const geistSansStyle = { fontFamily: 'var(--font-geist-sans), sans-serif' };

  useEffect(() => {
    // Listen for the signal from LoadingScreen
    const trigger = () => setStartAnim(true);
    window.addEventListener('novark_ready', trigger);
    return () => window.removeEventListener('novark_ready', trigger);
  }, []);

  const navBarVariants = {
    hidden: { y: -100, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 18, 
        staggerChildren: 0.08,
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 12 } }
  };

  const navItems = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Systems', id: '#systems' },
    { name: 'Support', id: '#support' },
    { name: 'Contact', id: '#contact' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      variants={navBarVariants}
      initial="hidden"
      animate={startAnim ? "show" : "hidden"}
      className="fixed top-0 left-0 w-full z-[100] px-6 py-8"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 py-3 
                      bg-white/[0.05] backdrop-blur-2xl 
                      border border-white/[0.08] rounded-full shadow-2xl">
        
        {/* LOGO - Reverted to your original URL */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 pl-3 group cursor-pointer">
          <div className="w-11 h-11 flex items-center justify-center rounded-full transition-transform duration-700 group-hover:rotate-[360deg] overflow-hidden">
            <img src="https://i.postimg.cc/L8xkzHW6/GRU-removebg-preview.png" alt="GRU Logo" className="w-10 h-10 object-contain" />
          </div>
          <span style={horizonStyle} className="text-white text-sm pr-4 border-r border-white/10 mt-0.5">
            NOVARK
          </span>
        </motion.div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <a 
                href={item.id}
                onClick={(e) => handleScroll(e, item.id)}
                style={geistSansStyle}
                className="inline-block px-4 py-2 text-[10px] font-black text-gray-400 
                           hover:text-white hover:bg-white/10 rounded-full
                           tracking-[0.2em] uppercase transition-all duration-300"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="pr-2">
          <motion.button 
            onClick={(e) => handleScroll(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2.5 rounded-full text-[10px] bg-white text-black 
                       hover:bg-gray-200 transition-all uppercase shadow-lg font-black"
            style={{ ...horizonStyle, letterSpacing: '0.05em' }}
          >
            Connect
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;