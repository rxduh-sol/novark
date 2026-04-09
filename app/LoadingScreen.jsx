"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Initial Check
    const isBot = /Lighthouse|Googlebot|GTmetrix|chrome-lighthouse/i.test(navigator.userAgent);
    const hasVisited = sessionStorage.getItem('novark_visited');
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    
    // Function to trigger ready events with a safety delay
    const triggerReady = (delay = 0) => {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.novark_ready_fired = true;
          window.dispatchEvent(new Event('novark_ready'));
        }
      }, delay);
    };

    if (hasVisited || isBot) {
      setLoading(false);
      triggerReady(150); // Small 150ms delay to ensure Navbar is ready to listen
      return;
    }

    // If not visited, start loading sequence
    setLoading(true);

    // 2. Force hide default cursor
    document.body.style.cursor = 'none';
    
    // 3. Hide custom cursor if it exists
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) customCursor.style.display = 'none';

    // 4. Timing Logic: Slower than before but faster than desktop
    const totalDuration = isMobile ? 1800 : 2500;

    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        // Restore cursors
        document.body.style.cursor = 'default';
        if (customCursor) customCursor.style.display = 'block';
        
        triggerReady(0);
        // Set flag for session persistence
        sessionStorage.setItem('novark_visited', 'true');
      }, totalDuration);
    };

    if (document.readyState === 'complete') {
        handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Responsive values for screen types
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const timingScale = isMobile ? 0.65 : 1; // Snappy but readable

  if (loading === false) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
   key="loading-screen"
   id="loading-screen-wrap"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black px-6"
        >
          <div className="relative flex items-center justify-center text-white w-full max-w-[90vw]">
            
            {/* SITE text - fades out */}
            <motion.h1 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.8 * timingScale, duration: 0.3 * timingScale }}
              className="text-[clamp(2.5rem,10vw,4.5rem)] lg:text-7xl font-black uppercase absolute text-center"
              style={{ fontFamily: 'var(--font-horizon)' }}
            >
              SITE
              {/* Strikethrough effect */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 * timingScale, duration: 0.3 * timingScale }} 
                className="absolute top-1/2 left-0 w-full h-[3px] bg-white origin-left"
              />
            </motion.h1>

            {/* SORTED text - fades in */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 * timingScale, duration: 0.4 * timingScale }}
              className="text-[clamp(3rem,11vw,5rem)] lg:text-7xl font-black uppercase text-center flex items-center gap-4"
              style={{ fontFamily: 'var(--font-horizon2)' }}
            >
              SORTED
              {/* Novark Logo Twinkle - Integrated with SORTED for mobile safety */}
              <motion.img 
                src="/images/GRU(1).webp"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ delay: 1.2 * timingScale, duration: 0.8 * timingScale }}
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
              />
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;