"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STACK_DATA = [
  {
    id: 'database',
    title: 'Data Bedrock',
    subtitle: 'PostgreSQL / Prisma',
    tag: "DB-v14.2",
    latency: "12ms",
    description: 'The persistent core. We architect schemas that scale from day one, ensuring data integrity.',
    color: '#a855f7', 
    content: (
      <div className="p-5 font-mono text-[10px] text-purple-400/80 bg-[#050505] h-full border border-purple-500/20 rounded-2xl relative overflow-hidden">
        <p className="text-purple-300 mb-2 border-b border-purple-500/20 pb-1 uppercase text-[8px] flex justify-between">
          <span>Storage Engine</span>
          <span className="animate-pulse">● LIVE</span>
        </p>
        <p>model <span className="text-white">User</span> {"{"}</p>
        <p className="pl-4">id String @id</p>
        <p>{"}"}</p>
      </div>
    )
  },
  {
    id: 'vscode',
    title: 'Source Logic',
    subtitle: 'TypeScript / React',
    tag: "TS-v5.3",
    latency: "0.4ms",
    description: 'Clean, type-safe codebases. We build components that are modular and performant.',
    color: '#3b82f6', 
    content: (
      <div className="h-full bg-[#0a0a0a] p-5 font-mono text-[10px] text-blue-300/90 border border-blue-500/20 rounded-2xl relative">
        <p className="text-blue-500 mb-2 border-b border-blue-500/20 pb-1 uppercase text-[8px]">Compiled Source</p>
        <p className="text-pink-400">export <span className="text-white">const</span> App = () ={">"} (</p>
        <p className="pl-4 text-emerald-400">{"<Novark.Core />"}</p>
        <p className="">);</p>
      </div>
    )
  },
  {
    id: 'terminal',
    title: 'Runtime',
    subtitle: 'Vercel / Node.js',
    tag: "EDGE-01",
    latency: "45ms",
    description: 'Automated CI/CD pipelines. Every commit is instantly tested and deployed.',
    color: '#10b981', 
    content: (
      <div className="p-5 font-mono text-[9px] bg-black h-full text-emerald-500/90 border border-emerald-500/20 rounded-2xl">
        <div className="absolute inset-5">
          <p className="mb-2 border-b border-emerald-500/20 pb-1 uppercase text-[8px]">Terminal Output</p>
          <p>$ next build</p>
          <p className="text-emerald-400 font-bold mt-1">✓ Deployment Live</p>
        </div>
      </div>
    )
  },
  {
    id: 'interface',
    title: 'The Product',
    subtitle: 'Live Interface',
    tag: "UI-v2",
    latency: "FPS: 120",
    description: 'A high-fidelity, interactive experience that converts users and defines the brand.',
    color: '#ffffff',
    content: (
      <div className="h-full w-full bg-[#0d0d0d] flex flex-col border border-white/20 rounded-2xl overflow-hidden relative">
        <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)]">
          <h2 className="text-white font-black italic text-4xl tracking-tighter uppercase">Novark</h2>
        </div>
      </div>
    )
  }
];

export default function XRayProject() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(diff / 3600).toString().padStart(2, '0');
      const m = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
      const s = (diff % 60).toString().padStart(2, '0');
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeData = STACK_DATA.find(l => l.id === activeLayer);

  return (
    <div className="w-full max-w-7xl mx-auto py-32 px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT SIDE: THE STACK (Added pointer-events-auto) */}
      <div 
        className="relative h-[500px] w-full perspective-[2000px] pointer-events-auto"
        onMouseEnter={() => setIsHoveringContainer(true)}
        onMouseLeave={() => {
          setIsHoveringContainer(false);
          setActiveLayer(null);
        }}
      >
        {STACK_DATA.map((layer, index) => {
          const isSelected = activeLayer === layer.id;
          const multiplier = index - 1.5; 
          const xOffset = isHoveringContainer ? multiplier * -45 : 0; 
          const yOffset = isHoveringContainer ? multiplier * -65 : 0;

          return (
            <motion.div
              key={layer.id}
              onMouseEnter={() => setActiveLayer(layer.id)}
              animate={{ 
                x: isSelected ? xOffset - 40 : xOffset, 
                y: yOffset,
                z: isSelected ? 350 : (index * 25),
                rotateX: isHoveringContainer ? 45 : 15,
                rotateZ: isHoveringContainer ? -15 : -5,
                opacity: isHoveringContainer 
                  ? (activeLayer ? (isSelected ? 1 : 0.5) : 1) 
                  : (index === 3 ? 1 : 0),
              }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              style={{ zIndex: isSelected ? 100 : index, position: 'absolute', inset: 0 }}
              className="cursor-pointer group"
            >
              <div className="w-full h-full bg-[#080808] rounded-2xl shadow-2xl border border-white/5 overflow-hidden">
                 {layer.content}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* RIGHT SIDE: TEXT CONTENT (Added pointer-events-auto) */}
      <div className="h-[500px] flex flex-col justify-center relative perspective-[1000px] pointer-events-auto">
        <AnimatePresence mode="wait">
          {activeLayer ? (
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, x: 40, rotateY: 20, scale: 0.9, z: -100 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1, z: 0 }}
              exit={{ opacity: 0, x: -40, rotateY: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative"
            >
              <div 
                className="absolute -inset-24 blur-[120px] opacity-20 rounded-full transition-colors duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${activeData.color} 0%, transparent 70%)` }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                   <motion.div 
                     initial={{ scale: 0 }} animate={{ scale: 1 }}
                     className="px-3 py-1 rounded text-[10px] font-bold tracking-tighter text-black uppercase shadow-lg" 
                     style={{ backgroundColor: activeData.color }}
                   >
                     {activeData.tag}
                   </motion.div>
                   <p className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/40">
                    {activeData.subtitle}
                   </p>
                </div>
                
                <h2 className="text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">
                  {activeData.title}
                </h2>
                
                <p className="text-white/60 text-xl leading-relaxed max-w-md mb-10">
                  {activeData.description}
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                   <div className="space-y-1">
                      <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Latency_Ms</p>
                      <p className="text-lg font-mono text-white/80">{activeData.latency}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Protocol_State</p>
                      <p className="text-lg font-mono text-emerald-500/80">Active</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse" />
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Uptime:</span>
                  <span className="text-[11px] font-mono text-white/60">{uptime}</span>
                </div>
              </div>

              <h2 className="text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-4">
                System <br/> <span className="text-white/20">Infrastructure</span>
              </h2>

              <div className="inline-flex items-center gap-4 border border-white/10 rounded-lg px-5 py-2.5 bg-white/[0.03] backdrop-blur-xl">
                 <div className="flex gap-1.5">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="w-1 h-1 bg-white/30 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                   ))}
                 </div>
                 <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.5em]">System_Standby</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}