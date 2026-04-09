"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ProFooter() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61588369931581' },
    { icon: FaGithub, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTiktok, href: '#' },
  ];

  return (
    <footer className="w-full py-20 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-black relative z-50">

      {/* ==========================================
          DESKTOP FOOTER (lg and up)
          ========================================== */}
      <div className="hidden lg:flex w-full mx-auto flex-row items-center justify-between gap-20">
        {/* LEFT: BRANDING & TAGLINE */}
        <div className="flex flex-row items-center gap-12 max-w-5xl">
          <div className="flex flex-col items-start gap-8 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-white/5 border border-white/10 shadow-2xl shrink-0">
                <img src="/images/GRU-removebg-preview(1).webp" alt="Logo" className="w-full h-full object-contain scale-90" />
              </div>
              <h2 className="text-white text-5xl font-bold tracking-tighter uppercase shrink-0"
                style={{ fontFamily: 'var(--font-horizon), sans-serif' }}>
                NOVARK
              </h2>
            </div>

            {/* SOCIALS */}
            <div className="flex justify-between w-full max-w-[280px] mt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#fff', scale: 1.1 }}
                  className="text-white/20 text-4xl transition-all duration-300"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="h-20 w-[1px] bg-white/10" />

          <p className="text-white/40 text-xl font-medium leading-tight max-w-md" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            WE BUILD WEBSITES THAT GET YOU MORE CALLS AND CUSTOMERS. NO JARGON, JUST RESULTS FOR PLUMBERS, ROOFERS, AND LOCAL TRADES.
          </p>
        </div>

        {/* RIGHT: INLINE LINKS */}
        <div className="flex-1 flex justify-end">
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/30 hover:text-white text-2xl font-black uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ==========================================
          MOBILE FOOTER (under lg)
          ========================================== */}
      <div className="lg:hidden flex flex-col items-start w-full gap-12">
        {/* TOP: Logo & Branding */}
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-white/5 border border-white/10 shadow-xl shrink-0">
              <img src="/images/GRU-removebg-preview(1).webp" alt="Logo" className="w-full h-full object-contain scale-90" />
            </div>
            <h2 className="text-white text-[clamp(2.5rem,10vw,3.5rem)] font-bold tracking-tighter uppercase"
              style={{ fontFamily: 'var(--font-horizon), sans-serif' }}>
              NOVARK
            </h2>
          </div>

          {/* ENLARGED SOCIALS SLAB - Full width of the branding block */}
          <div className="flex justify-between w-full px-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="text-white/25 text-5xl transition-all duration-300"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* DIRECTORY CHOOSING OPTIONS (NOW ABOVE SUBTEXT) */}
        <div className="w-full py-4 border-y border-white/5 flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/30 active:text-white text-xl font-black uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SUBTEXT (BELOW DIRECTORY) */}
        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-geist-sans)' }}>
          We design affordable but great websites that gets you more calls and customers.No Jargon. Just the best for Plumbers, Roofers, Bakeries and Local Trades.
        </p>
      </div>

      {/* BOTTOM SECTION: DISCLAIMER & COPYRIGHT */}
      <div className="w-full mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col items-center justify-center gap-6">
        <div className="text-[10px] md:text-[12px] text-white/20 uppercase tracking-[0.2em] font-medium text-center max-w-2xl px-4 italic leading-loose">
          Based in Abbeyfields, Colchester, Essex. All services provided by Novark Agency.
        </div>
        <div className="text-[14px] text-white/30 uppercase tracking-[0.5em] font-black text-center">
          © {new Date().getFullYear()} NOVARK. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}