"use client";
import { motion } from 'framer-motion';

export default function StrategyBlock({ title, text, variants }) {
  return (
    <motion.div 
      variants={variants}
      whileHover="hover"
      className="group/block relative pl-6 cursor-default"
    >
      <motion.div 
        variants={{
          hover: { backgroundColor: "#10b981", boxShadow: "0px 0px 15px #10b981", scaleY: 1.1 }
        }}
        className="absolute left-0 top-0 w-[2px] h-full bg-white/10 transition-all duration-300"
      />
      <div className="relative inline-block">
        <p className="text-white text-2xl font-bold tracking-tight mb-2 uppercase selection:bg-emerald-500">
          {title}
        </p>
        <motion.div 
          variants={{ hover: { scaleX: 1 } }}
          initial={{ scaleX: 0 }}
          className="absolute bottom-[2px] left-0 w-full h-[2px] bg-emerald-500 origin-left transition-transform duration-500 ease-out"
        />
      </div>
      <p className="text-gray-400 text-lg leading-relaxed font-light group-hover/block:text-gray-200 transition-colors duration-500">
        {text}
      </p>
    </motion.div>
  );
}