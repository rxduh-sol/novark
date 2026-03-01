"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.cursor = 'none';
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) customCursor.style.display = 'none';

    const handleLoad = () => {
      // Snappy duration for the effect [cite: 2026-03-01]
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = 'default';
        if (customCursor) customCursor.style.display = 'block';
        window.dispatchEvent(new Event('novark_ready'));
      }, 2000); // 2 seconds total for the sequence [cite: 2026-03-01]
    };

    if (document.readyState === 'complete') {
        handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Framer Motion Variants for sequence [cite: 2026-03-01]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.div 
            className="flex items-center gap-4 text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* SITE text [cite: 2026-03-01] */}
            <motion.h1 
              variants={textVariants}
              className="text-6xl font-black uppercase relative"
              style={{ fontFamily: 'var(--font-horizon)' }}
            >
              SITE
              {/* Strikethrough effect [cite: 2026-03-01] */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute top-1/2 left-0 w-full h-1 bg-white origin-left"
              />
            </motion.h1>

            {/* SORTED text [cite: 2026-03-01] */}
            <motion.h1 
              variants={textVariants}
              className="text-6xl font-black uppercase"
              style={{ fontFamily: 'var(--font-horizon2)' }}
            >
              SORTED
            </motion.h1>

            {/* Novark Logo Twinkle [cite: 2026-03-01] */}
            <motion.img 
              src="https://i.postimg.cc/W3KmRKpM/GRU.png"
              variants={textVariants}
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-12 h-12 object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;