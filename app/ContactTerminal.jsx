"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactTerminal() {
  const formRef = useRef();
  const sectionRef = useRef();
  const [status, setStatus] = useState("IDLE");

  // Time-based variants for automatic collapsing [cite: 2026-03-01]
  const buttonVariants = {
    pill: {
      width: "clamp(240px, 18vw, 340px)",
      backgroundColor: "rgba(255,255,255,0)",
      color: "#ffffff",
      borderRadius: "9999px"
    },
    circle: {
      width: "clamp(64px, 5.5vw, 88px)",
      backgroundColor: "rgba(255,255,255,1)",
      color: "#000000",
      borderRadius: "100%",
      transition: {
        delay: 1.8,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    }
  };

  const textVariants = {
    pill: { opacity: 1, display: "block" },
    circle: {
      opacity: 0,
      transition: { delay: 1.8, duration: 0.2 },
      transitionEnd: { display: "none" }
    }
  };

  const iconVariants = {
    pill: { opacity: 0, scale: 0.5 },
    circle: {
      opacity: 1,
      scale: 1,
      transition: { delay: 2.2, duration: 0.5, type: "spring" }
    }
  };

  // --- EMAILJS INTEGRATION ---
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING");

    emailjs.sendForm(
      'service_jqtvi9n',
      'template_irl7asf',
      formRef.current,
      'iWYItPGP_x5BDw_Bc'
    )
      .then((result) => {
        setStatus("SUCCESS");
        formRef.current.reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus("ERROR");
      });
  };

  return (
    <section ref={sectionRef} id="contact" className="w-full min-h-[100dvh] flex items-center justify-center px-[2.5vw] bg-transparent relative overflow-hidden pt-[15vh] lg:pt-[30vh] pb-[10vh] lg:pb-[15vh]">

      {/* 1. LAYER ONE: THE MESH GLOW (Floating) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white rounded-full blur-[10vw] pointer-events-none"
      />

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:w-[95vw] lg:max-w-none lg:grid-cols-12 grid grid-cols-1 gap-10 lg:gap-[5vw] items-start relative z-10 will-change-transform">

        {/* LEFT: THE TYPOGRAPHY INFORMATION */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start text-left">
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
            {/* Main Headline */}
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h2 className="text-white text-[clamp(2.5rem,8vw,5.5rem)] lg:text-[clamp(2rem,5vw,7.5rem)] font-bold tracking-tighter leading-[0.85] lg:leading-[0.75] uppercase font-horizon relative -mt-[1.8vh] text-left">
                GET YOUR<br />
                <span className="block lg:whitespace-nowrap">WEBSITE <span className="relative inline-block">BUILT
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-[0.5vh] left-0 h-[2px] bg-white rounded-full"
                  />
                </span></span>
              </h2>
              <p className="text-white/40 text-[1rem] lg:text-[clamp(0.85rem,1.1vw,1.3rem)] font-medium mt-4 lg:mt-[2vh] tracking-wide text-left" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                No pressure. Just a quick chat about your business.
              </p>
            </motion.div>

            {/* Phone/Email Blocks */}
            <div className="mt-[6vh] space-y-[4vh] lg:space-y-[6vh]">

              {/* PHONE BLOCK */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="w-full flex flex-col items-center border border-white/15 lg:items-start lg:border-none rounded-[2.5rem] lg:rounded-none p-8 lg:p-0 bg-zinc-950/95 lg:bg-transparent md:backdrop-blur-sm lg:backdrop-blur-none"
              >
                <div className="flex flex-col items-center lg:items-center lg:flex-row w-full gap-6 lg:gap-8 justify-center lg:justify-start">
                  <p className="hidden lg:block text-white/10 text-[clamp(1.5rem,4vw,5rem)] font-bold tracking-tighter uppercase leading-none" style={{ fontFamily: 'var(--font-horizon2)' }}>PHONE</p>

                  <motion.a
                    href="tel:+447588383683"
                    initial="pill"
                    whileInView="circle"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                      pill: buttonVariants.pill,
                      circle: typeof window !== 'undefined' && window.innerWidth < 1024 ? buttonVariants.pill : buttonVariants.circle
                    }}
                    style={{ height: "clamp(64px, 5.5vw, 88px)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 font-bold uppercase tracking-widest flex items-center justify-center relative overflow-hidden flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 px-8 lg:px-0">
                      <motion.span
                        variants={textVariants}
                        className="whitespace-nowrap text-[clamp(0.9rem,1.2vw,1.4rem)] font-black font-geist-sans"
                      >
                        PRESS TO CALL
                      </motion.span>
                      <motion.div
                        variants={iconVariants}
                        className="lg:absolute lg:inset-0 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-7 lg:h-7 opacity-70 lg:opacity-100"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
                <a href="tel:+447588383683" className="text-white text-[1.5rem] lg:text-[clamp(1.2rem,2.8vw,3.8rem)] font-horizon block mt-8 lg:mt-[0.5vh] hover:text-white/80 transition-colors tracking-tight text-center lg:text-left leading-none">
                  07588 383 683
                </a>
                <p className="text-white/30 text-[0.9rem] lg:text-[clamp(0.8rem,1vw,1.1rem)] italic mt-2 lg:mt-[0.5vh] font-medium text-center lg:text-left" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  Best for a quick chat
                </p>
              </motion.div>

              {/* EMAIL BLOCK */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="w-full flex flex-col items-center border border-white/15 lg:items-start lg:border-none rounded-[2.5rem] lg:rounded-none p-8 lg:p-0 bg-zinc-950/95 lg:bg-transparent md:backdrop-blur-sm lg:backdrop-blur-none"
              >
                <div className="flex flex-col items-center lg:items-center lg:flex-row w-full gap-6 lg:gap-8 justify-center lg:justify-start">
                  <p className="hidden lg:block text-white/10 text-[clamp(1.5rem,4vw,5rem)] font-bold tracking-tighter uppercase leading-none" style={{ fontFamily: 'var(--font-horizon2)' }}>EMAIL</p>

                  <motion.a
                    href="mailto:novarktech@protonmail.com"
                    initial="pill"
                    whileInView="circle"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                      pill: buttonVariants.pill,
                      circle: typeof window !== 'undefined' && window.innerWidth < 1024 ? buttonVariants.pill : buttonVariants.circle
                    }}
                    style={{ height: "clamp(64px, 5.5vw, 88px)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white/20 font-bold uppercase tracking-widest flex items-center justify-center relative overflow-hidden flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 px-8 lg:px-0">
                      <motion.span
                        variants={textVariants}
                        className="whitespace-nowrap text-[clamp(0.9rem,1.2vw,1.4rem)] font-black font-geist-sans"
                      >
                        PRESS TO EMAIL
                      </motion.span>
                      <motion.div
                        variants={iconVariants}
                        className="lg:absolute lg:inset-0 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-7 lg:h-7 opacity-70 lg:opacity-100"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
                <a href="mailto:novarktech@protonmail.com" className="text-white text-[1.3rem] lg:text-[1.1rem] lg:text-[clamp(1.1rem,2.1vw,2.5rem)] font-horizon block mt-8 lg:mt-4 hover:text-white/80 transition-colors break-all lg:whitespace-nowrap px-4 lg:px-0 text-center lg:text-left leading-[1.2]">
                  NOVARKTECH@PROTONMAIL.COM
                </a>
                <p className="text-white/30 text-[0.9rem] lg:text-[clamp(0.8rem,1vw,1.1rem)] italic mt-2 lg:mt-[0.5vh] font-medium text-center lg:text-left" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  Better for longer enquiries
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex lg:justify-end items-start pt-8 lg:pt-[1vh]">
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[450px] lg:max-w-[35vw] bg-zinc-950/95 md:bg-zinc-950/40 border border-white/10 md:backdrop-blur-2xl rounded-[3rem] p-8 lg:p-[2.5vw] shadow-[0_4vw_8vw_rgba(0,0,0,0.6)]"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-[4vh] relative z-10">

              <div className="space-y-[4vh]">
                <NovarkInput label="NAME" name="name" placeholder="Linus Torvalds" index={0} />
                <NovarkInput label="BUSINESS" name="business" placeholder="Plumbing" index={1} />
                <NovarkInput label="TELL US ABOUT YOUR PROJECT" name="message" placeholder="I need a website that gets more..." index={2} />
                <NovarkInput label="CONTACT" name="email" placeholder="hello@gmail.com" type="email" index={3} />
              </div>

              <div className="pt-[2vh] flex flex-col items-center">
                <MagneticButton status={status} />
                <p className="text-white/30 text-[clamp(9px,0.8vw,12px)] uppercase tracking-[0.3em] mt-[3vh] font-bold" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                  We usually reply within an hour
                </p>

                <AnimatePresence>
                  {status === "SUCCESS" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 text-emerald-400"
                    >
                      <span className="text-[10px] uppercase tracking-[0.5em] font-black animate-pulse">
                        Message Sent Successfully!
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
      type="submit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full py-5 bg-white text-black font-horizon font-bold uppercase tracking-wider text-xl rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-shadow duration-300 relative group overflow-hidden cursor-pointer"
    >
      <span className="relative z-10 transition-colors duration-300">
        {status === "SENDING" ? "SENDING..." : "GET STARTED"}
      </span>
    </motion.button>
  );
}

function NovarkInput({ label, name, placeholder, type = "text", index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + (index * 0.1) }}
      className="flex flex-col space-y-4 group"
    >
      <label className="text-[clamp(11px,1vw,12px)] text-white font-bold uppercase tracking-[0.2em] group-focus-within:text-white transition-colors" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/20 py-4 text-white text-[1.2rem] font-medium tracking-tight placeholder:text-white/10 focus:outline-none focus:border-white transition-all duration-500"
        required
        style={{ fontFamily: 'var(--font-geist-sans)' }}
      />
    </motion.div>
  );
}