"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ProFooter() {
  const [hiddenLinks, setHiddenLinks] = useState({});
  const [oopsLinks, setOopsLinks] = useState({});

  const handleLinkClick = (e, linkName) => {
    e.preventDefault();
    setOopsLinks(prev => ({ ...prev, [linkName]: true }));
    setTimeout(() => {
      setHiddenLinks(prev => ({ ...prev, [linkName]: true }));
    }, 800); 
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61588369931581' },
    { icon: FaGithub, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTiktok, href: '#' },
  ];

  const isHidden = (linkName) => hiddenLinks[linkName];
  const isOops = (linkName) => oopsLinks[linkName];

  return (
    <footer className="w-full py-10 px-12 border-t border-white/5 bg-black relative z-50">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white/50">
        
        {/* COLUMN 1: BRANDING & SOCIALS */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-white text-4xl font-bold tracking-tighter uppercase" 
              style={{ fontFamily: 'var(--font-horizon), sans-serif' }}>
            NOVARK
          </h2>
          <p className="text-xs uppercase tracking-widest text-white/30">
            SYSTEM ARCHITECTURE & DESIGN
          </p>
          <div className="flex gap-6 pt-6">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                // UPDATED: Added target and rel for security and UX [cite: 2026-03-01]
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#fff' }}
                className="text-white/30 text-4xl cursor-target" 
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* COLUMN 2 & 3: SITEMAP */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white font-black mb-8">Navigation</h3>
            <ul className="space-y-5 text-xl font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white font-black mb-8">Company</h3>
            <ul className="space-y-5 text-xl font-medium">
              {['About', 'Careers', 'Press'].map(link => (
                <li key={link}>
                  <a 
                    href="#" 
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`transition-all duration-300 ${isHidden(link) ? 'opacity-0 pointer-events-none' : 'text-white/50 hover:text-white'}`}
                  >
                    {isOops(link) ? 'Oops!' : link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COLUMN 4: LEGAL */}
        <div className="md:col-span-1">
          <h3 className="text-sm uppercase tracking-[0.3em] text-white font-black mb-8">Legal</h3>
          <ul className="space-y-5 text-xl font-medium">
            {['Privacy', 'Terms'].map(link => (
                <li key={link}>
                  <a 
                    href="#" 
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`transition-all duration-300 ${isHidden(link) ? 'opacity-0 pointer-events-none' : 'text-white/50 hover:text-white'}`}
                  >
                    {isOops(link) ? 'Oops!' : link}
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto mt-10 pt-5 border-t border-white/5 text-xs text-white/20 uppercase tracking-[0.5em] font-black text-center">
        © 2026 NOVARK TECHNOLOGIES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}