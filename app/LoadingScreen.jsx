"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Hide default cursor and our custom target cursor during loading [cite: 2026-03-01]
    document.body.style.cursor = 'none';
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) customCursor.style.display = 'none';

    // 2. Functional check: ensures page is actually ready [cite: 2026-03-01]
    const handleLoad = () => {
      // 3. 1.5-second timeout to match the animation duration for one revolution [cite: 2026-03-01]
      setTimeout(() => {
        setLoading(false);
        // 4. Show cursors again [cite: 2026-03-01]
        document.body.style.cursor = 'default';
        if (customCursor) customCursor.style.display = 'block';
        // 5. Signal to Hero that it's safe to start [cite: 2026-03-01]
        window.dispatchEvent(new Event('novark_ready'));
      }, 1500); 
    };

    if (document.readyState === 'complete') {
        handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        document.body.style.cursor = 'default'; // Cleanup [cite: 2026-03-01]
        if (customCursor) customCursor.style.display = 'block';
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(20px)" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.img 
            src="https://i.postimg.cc/W3KmRKpM/GRU.png"
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              scale: [0.95, 1, 0.95],
              // Spin 360 degrees [cite: 2026-03-01]
              rotate: 360 
            }}
            transition={{ 
              // 1.5 seconds for one revolution [cite: 2026-03-01]
              duration: 1.5, 
              // Loop animation [cite: 2026-03-01]
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-32 h-32 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;