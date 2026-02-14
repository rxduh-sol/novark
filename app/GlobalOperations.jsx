"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe3D } from "./Globe3D";

// Font Objects
const horizonStyle = { fontFamily: 'var(--font-horizon), sans-serif' };
const horizon2Style = { fontFamily: 'var(--font-horizon2), sans-serif' };
const geistSansStyle = { fontFamily: 'var(--font-geist-sans), sans-serif' };
const geistMonoStyle = { fontFamily: 'var(--font-geist-mono), monospace' };

// Animation Variants
const slideUpSkew = {
  hidden: { y: 100, opacity: 0, skewY: 7, filter: "blur(10px)" },
  show: { 
    y: 0, opacity: 1, skewY: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 15, mass: 1 }
  }
};

const glitchIn = {
  hidden: { opacity: 0, scaleX: 0, originX: 0 },
  show: { 
    opacity: 1, scaleX: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const SUPPORT_FEED = [
  { id: "T-882", action: "EDGE_LATENCY_RECOVERY", region: "EU-WEST", status: "RESOLVED" },
  { id: "T-901", action: "ENCRYPTION_HANDSHAKE", region: "US-EAST", status: "ACTIVE" },
  { id: "T-442", action: "DB_SHARD_REBALANCING", region: "ASIA-SE", status: "OPTIMIZED" },
];

export default function GlobalOperations() {
  const [activeLog, setActiveLog] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLog((prev) => (prev + 1) % SUPPORT_FEED.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden flex items-center">
      
      {/* 1. ANIMATED SIDEBAR METADATA */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        style={horizon2Style}
        className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 pointer-events-none"
      >
        <motion.div 
          initial={{ height: 0 }} 
          whileInView={{ height: 64 }} 
          className="w-px bg-white" 
        />
        <div className="rotate-180 [writing-mode:vertical-lr] text-[7px] uppercase tracking-[1em]">
          STEALTH_INFRA_V4
        </div>
      </motion.div>

      {/* 2. THE GLOBE (with subtle scaling entrance) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-[1%] w-[35vw] h-full pointer-events-none overflow-visible"
      >
        <Globe3D 
          config={{
            radius: 1.1,
            autoRotateSpeed: 0.7,
            showAtmosphere: true,
            atmosphereColor: "#3b82f6",
            atmosphereIntensity: 0.4,
            showWireframe: true,
            wireframeColor: "#ffffff",
          }}
          className="h-full w-full !bg-transparent" 
        />
      </motion.div>

      {/* 3. MAIN CONTENT */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="relative z-20 w-full pl-40 pr-12"
      >
        <div className="space-y-14">
          <div className="space-y-6">
            <motion.div variants={glitchIn} className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] animate-pulse" />
               <span style={horizon2Style} className="text-blue-500 text-[9px] tracking-[0.6em] uppercase font-bold italic">
                 Architecture_Scale: Global
               </span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 variants={slideUpSkew} className="text-[10vw] font-black text-white tracking-tighter uppercase italic leading-[0.75]">
                <span style={horizonStyle}>Global</span> <br/> 
                <span style={horizon2Style} className="opacity-40">Reach</span>
              </motion.h2>
            </div>
            
            <motion.p 
              variants={slideUpSkew}
              style={geistSansStyle} 
              className="max-w-xs text-[11px] text-white/40 leading-relaxed tracking-wide"
            >
              Decentralized support clusters operating at the edge. <br/> 
              Real-time human response verified globally.
            </motion.p>
          </div>

          {/* KPIs with Spring Counters */}
          <div className="flex gap-24">
            {[
              { label: "Node_Coverage", val: "100", unit: "%" },
              { label: "Support_Response", val: "<4", unit: "m" }
            ].map((kpi, i) => (
              <motion.div key={i} variants={slideUpSkew} className="group">
                <p style={horizon2Style} className="text-white/20 text-[8px] uppercase tracking-[0.4em] mb-3 italic transition-colors group-hover:text-blue-500">
                  {kpi.label}
                </p>
                <div className="flex items-baseline gap-1">
                  <span style={horizonStyle} className="text-8xl font-black text-white italic tracking-tighter leading-none">
                    {kpi.val}
                  </span>
                  <span style={horizon2Style} className="text-blue-500 text-3xl font-black uppercase">
                    {kpi.unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 4. SCANNING LOG STREAM */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={geistMonoStyle}
        className="absolute bottom-12 left-24 text-[7px] text-white/10 uppercase leading-loose pointer-events-none"
      >
        <div className="absolute -top-2 left-0 w-full h-[1px] bg-blue-500/50 animate-scan shadow-[0_0_10px_#3b82f6]" />
        <p className="text-blue-500/20 underline underline-offset-4 mb-2 font-bold tracking-[0.2em]">Support_Relay_Active</p>
        <p>&gt; routing_table_update... {SUPPORT_FEED[activeLog].region}</p>
        <p>&gt; task_id: #{SUPPORT_FEED[activeLog].id}</p>
        <p>&gt; status: <span className="text-white/40">{SUPPORT_FEED[activeLog].status}</span></p>
      </motion.div>

      {/* CUSTOM SCANNING ANIMATION CSS */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: -10px; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          position: absolute;
          animation: scan 3s linear infinite;
        }
      `}</style>

    </section>
  );
}