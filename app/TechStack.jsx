"use client";
import { motion } from 'framer-motion';

export default function TechStack() {
  const tags = ['Next.js', 'Tailwind', 'Three.js', 'Spline', 'Framer Motion'];
  
  const tagVariants = {
    hidden: { scale: 0, opacity: 0, x: -20 },
    show: { 
      scale: 1, 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-wrap gap-2"
    >
      {tags.map((tag) => (
        <motion.span 
          key={tag} 
          variants={tagVariants}
          // UPDATED COLOR: gold hover border [cite: 2026-03-01]
          whileHover={{ y: -5, borderColor: "rgba(212,175,55,0.5)", color: "#fff" }}
          className="text-[9px] px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-500 font-mono flex items-center gap-2 cursor-default transition-colors"
        >
          {/* UPDATED COLOR: gold dot [cite: 2026-03-01] */}
          <div className="w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_5px_#D4AF37]" />
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}
