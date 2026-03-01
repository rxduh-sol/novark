"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactTerminal() {
  const formRef = useRef();
  const [status, setStatus] = useState("IDLE");

  // --- EMAILJS INTEGRATION ---
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING");

    emailjs.sendForm(
      'service_jqtvi9n', // Your Service ID [cite: 2026-03-01]
      'template_irl7asf', // Your Template ID [cite: 2026-03-01]
      formRef.current, 
      'iWYItPGP_x5BDw_Bc' // Your Public Key [cite: 2026-03-01]
    )
    .then((result) => {
        setStatus("SUCCESS");
        formRef.current.reset(); // Clear form after success [cite: 2026-03-01]
        setTimeout(() => setStatus("IDLE"), 5000);
    }, (error) => {
        console.log(error.text);
        setStatus("ERROR");
    });
  };

  return (
    <section className="w-full min-h-fit flex items-center justify-center px-12 bg-transparent relative overflow-hidden py-20">
      
      {/* 1. LAYER ONE: THE MESH GLOW (Floating) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.05, 0.02] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white rounded-full blur-[160px] pointer-events-none" 
      />

      <div className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT: THE TYPOGRAPHY (Staggered Reveal) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-white text-[7vw] lg:text-[7rem] font-bold tracking-tighter leading-[0.7] uppercase"
              style={{ fontFamily: 'var(--font-horizon), sans-serif' }}
            >
              DROP A
            </motion.h2>
            <motion.h2 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 0.15, x: 0 } }}
              className="text-white text-[6vw] lg:text-[6rem] font-bold tracking-tighter leading-[0.7] uppercase -mt-2"
              style={{ fontFamily: 'var(--font-horizon2), sans-serif' }}
            >
              MESSAGE
            </motion.h2>

            <motion.div 
              variants={{ hidden: { opacity: 0, width: 0 }, visible: { opacity: 1, width: "100px" } }}
              className="h-1 bg-white mt-8 mb-12"
            />

            <div className="space-y-10">
              <ContactLink label="EMAIL" value="NOVARKTECH@PROTONMAIL.COM" href="mailto:novarktech@protonmail.com" delay={0.4} />
              <ContactLink label="PHONE" value="+44 7588 383 683" href="tel:+447588383683" delay={0.5} />
            </div>
          </motion.div>
        </div>

        {/* RIGHT: THE FORM (Magnetic / Float) */}
        <div className="lg:col-span-6 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full max-w-xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[3.5rem] p-12 md:p-16 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-10 relative z-10">
              <div className="space-y-8">
                <NovarkInput label="NAME" name="name" placeholder="John Doe" index={0} />
                <NovarkInput label="EMAIL" name="email" placeholder="hello@gmail.com" type="email" index={1} />
                <NovarkInput label="PROJECT" name="project" placeholder="What do you need?" index={2} />
                <NovarkInput label="MESSAGE" name="message" placeholder="Details..." index={3} />
              </div>

              <div className="relative pt-6">
                <MagneticButton status={status} />
                
                <AnimatePresence>
                  {status === "SUCCESS" && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -bottom-12 left-0 right-0 text-center"
                    >
                      <span className="text-white text-[10px] uppercase tracking-[0.5em] font-black animate-pulse">
                        Message Sent!
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function MagneticButton({ status }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      // UPDATED CLASSES: Added 'cursor-target' [cite: 2026-03-01]
      className="w-full py-6 bg-transparent border-2 border-white text-white font-black uppercase tracking-[0.6em] text-[10px] rounded-full transition-colors hover:bg-white hover:text-black relative group overflow-hidden cursor-target"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {status === "SENDING" ? "SENDING..." : "SEND MESSAGE"}
      </span>
      <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}

function ContactLink({ label, value, href, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="group"
    >
      <p className="text-[9px] text-white/20 uppercase tracking-[0.8em] font-black mb-2">{label}</p>
      
      {/* UPDATED: Added hover animation with text-shift [cite: 2026-03-01] */}
      <motion.a 
        href={href}
        whileHover={{
            x: 5,
            skewX: -5,
            transition: { duration: 0.2, yoyo: 2 } // "Shake" animation [cite: 2026-03-01]
        }}
        className="text-white text-3xl md:text-5xl font-bold tracking-tighter hover:italic transition-all duration-300 block"
      >
        {value}
      </motion.a>
    </motion.div>
  );
}

function NovarkInput({ label, name, placeholder, type = "text", index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + (index * 0.1) }}
      className="flex flex-col space-y-2 group"
    >
      <label className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black group-focus-within:text-white transition-colors">
        {label}
      </label>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent border-b-2 border-white/5 py-4 text-white text-2xl font-bold tracking-tighter placeholder:text-white/5 focus:outline-none focus:border-white transition-all duration-500"
        required
      />
    </motion.div>
  );
}