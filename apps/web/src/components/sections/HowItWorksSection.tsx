"use client";

import { motion } from "framer-motion";
import { UserCheck, Activity, Shield } from "lucide-react";

const steps = [
  {
    title: "Identity Layer",
    description: "Developers mint a soulbound OmenBadge linked to their Web2 reputation via zkLogin verification.",
    icon: UserCheck,
    color: "#43B6D5",
  },
  {
    title: "Reputation Engine",
    description: "Security tools, AI auditors, and ecosystem signals update builder trust scores in real-time.",
    icon: Activity,
    color: "#AAC0E1",
  },
  {
    title: "Transaction Protection",
    description: "Wallets and apps block interactions with risky protocols using these cryptographic scores.",
    icon: Shield,
    color: "#2A8FA8",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-transparent" aria-labelledby="how-title">
      <div className="max-container flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
           <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4 inline-block">Architecture</span>
           <h2 id="how-title" className="text-3xl md:text-5xl font-bold text-[#0B1220] uppercase">How Omen Works.</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center relative group shadow-sm hover:shadow-md transition-shadow"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-white/10 to-transparent border border-black/5 group-hover:scale-110 transition-transform"
                style={{ color: step.color }}
              >
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#0B1220] mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-[#4A5568] text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
