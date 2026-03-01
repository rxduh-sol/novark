"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Force hide default cursor [cite: 2026-03-01]
    document.body.style.cursor = 'none';
    
    // 2. Hide custom cursor if it exists [cite: 2026-03-01]
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) customCursor.style.display = 'none';

    const handleLoad = () => {
      // 3. Total duration adjusted to 2.5s for the pause [cite: 2026-03-01]
      setTimeout(() => {
        setLoading(false);
        // 4. Restore cursors [cite: 2026-03-01]
        document.body.style.cursor = 'default';
        if (customCursor) customCursor.style.display = 'block';
        window.dispatchEvent(new Event('novark_ready'));
      }, 2500); 
    };

    if (document.readyState === 'complete') {
        handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          // 5. Higher z-index to ensure it covers the cursor [cite: 2026-03-01]
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
        >
          <div className="relative flex items-center justify-center text-white">
            
            {/* SITE text - fades out [cite: 2026-03-01] */}
            <motion.h1 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }} // Snappier fade [cite: 2026-03-01]
              className="text-7xl font-black uppercase absolute"
              style={{ fontFamily: 'var(--font-horizon)' }}
            >
              SITE
              {/* Strikethrough effect - Faster [cite: 2026-03-01] */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }} 
                className="absolute top-1/2 left-0 w-full h-1 bg-white origin-left"
              />
            </motion.h1>

            {/* SORTED text - fades in [cite: 2026-03-01] */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="text-7xl font-black uppercase"
              style={{ fontFamily: 'var(--font-horizon2)' }}
            >
              SORTED
            </motion.h1>

            {/* Novark Logo Twinkle - Slower [cite: 2026-03-01] */}
            <motion.img 
              src="https://i.postimg.cc/W3KmRKpM/GRU.png"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ delay: 1.2, duration: 0.8 }} // Slower animation [cite: 2026-03-01]
              className="w-16 h-16 object-contain absolute -right-24"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;