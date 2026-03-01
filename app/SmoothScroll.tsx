"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Initialize Lenis [cite: 2026-03-01]
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // REMOVED: direction: 'vertical' [cite: 2026-03-01]
      // REMOVED: smooth: true [cite: 2026-03-01]
    });

    // 2. Set up RAF loop [cite: 2026-03-01]
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- REFRESH FIX --- [cite: 2026-03-01]
    window.history.scrollRestoration = 'manual';
    lenis.scrollTo(0, { immediate: true });

    // 3. Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}