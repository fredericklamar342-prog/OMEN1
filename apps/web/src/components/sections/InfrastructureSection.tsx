"use client";

import { motion } from "framer-motion";
import { UserCheck, Zap, Database, Droplets } from "lucide-react";

const pillars = [
  {
    title: "Identity Layer",
    description: "zkLogin verifies builder identities without compromising privacy.",
    icon: UserCheck,
    tag: "zkLogin",
  },
  {
    title: "Execution Layer",
    description: "Move PTBs enforce trust checks before any transaction executes.",
    icon: Zap,
    tag: "Move PTB",
  },
  {
    title: "Storage Layer",
    description: "Walrus Protocol stores heavy security audit data off-chain.",
    icon: Database,
    tag: "Walrus",
  },
  {
    title: "Liquidity Layer",
    description: "DeepBook V3 integrations protect traders through score gating.",
    icon: Droplets,
    tag: "DeepBook",
  },
];

export function InfrastructureSection() {
  return (
    <section className="py-24 md:py-32 border-y border-black/[0.05] bg-transparent relative z-10 overflow-hidden">
      <div className="max-container flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
           <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4 inline-block">Integrations</span>
           <h2 className="text-3xl md:text-5xl font-bold text-[#0B1220] uppercase tracking-tighter">Built on the Sui Stack.</h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 border border-white/50 group hover:bg-white/40 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border border-[#43B6D5]/10 flex items-center justify-center rounded-xl bg-[#43B6D5]/5">
                  <pillar.icon className="w-5 h-5 text-[#43B6D5]" />
                </div>
                <div className="bg-[#43B6D5]/10 px-2 py-0.5 rounded text-[10px] font-bold text-[#43B6D5] uppercase">
                  {pillar.tag}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">{pillar.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
