"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        // Signal to Hero that it's safe to start
        window.dispatchEvent(new Event('novark_ready'));
      }, 2000); 
    };

    if (document.readyState === 'complete') handleLoad();
    else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
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
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1, 0.95] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;