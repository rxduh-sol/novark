"use client";
import { motion } from 'framer-motion';
import StrategyBlock from './StrategyBlock';
import TechStack from './TechStack';
import JourneyButton from './JourneyButton';

const STRATEGY_DATA = [
  { title: "Architectural Dominance", text: "We don't just build websites; we engineer high-performance digital assets. We eliminate the friction between your brand and your revenue." },
  { title: "Revenue-First Design", text: "Merging psychological triggers with elite tech. We turn passive traffic into loyal, high-intent customers through cinematic conversion paths." },
  { title: "Scalable Infrastructure", text: "Future-proof deployment built on global edge networks. Faster load times mean higher retention and total market authority." }
];

export default function StrategySection({ variants }) {
  return (
    <div className="md:col-span-5 flex flex-col justify-between p-12 rounded-3xl bg-white/[0.01] backdrop-blur-3xl border border-white/5 shadow-2xl text-left overflow-hidden">
      <div className="space-y-12">
        {/* HEADER */}
        <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <div className="flex items-center gap-4 mb-4">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 0.8 }} className="h-[1px] bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-[10px] text-emerald-500 uppercase tracking-[0.6em] font-black">Strategic_Overview_2026</span>
          </div>
          <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.8] mb-2">Let's get</h2>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 0.8, x: 0 }} whileHover={{ opacity: 1, color: "#34d399" }} transition={{ delay: 0.4, type: "spring" }} className="cursor-default">
            <span className="italic text-white font-light text-5xl md:text-7xl tracking-tighter" style={{ fontFamily: 'var(--font-horizon2)' }}>started.</span>
          </motion.div>
        </motion.div>

        {/* BLOCKS */}
        <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          {STRATEGY_DATA.map((item, i) => (
            <StrategyBlock key={i} title={item.title} text={item.text} variants={variants} />
          ))}
        </motion.div>
      </div>

      {/* FOOTER */}
      <motion.div variants={variants} initial="hidden" whileInView="show" className="space-y-6 pt-6">
        <TechStack />
        <div className="space-y-4">
          <JourneyButton />
          <p className="text-[9px] text-gray-400 text-center tracking-[0.2em] uppercase opacity-40">Priority: Growth Oriented</p>
        </div>
      </motion.div>
    </div>
  );
}