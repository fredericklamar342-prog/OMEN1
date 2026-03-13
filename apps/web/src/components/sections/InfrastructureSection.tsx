"use client";

import { motion } from "framer-motion";
import { UserCheck01, Zap, Database01, Activity } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

const pillars = [
  {
    title: "Identity",
    subtitle: "zkLogin connects real developer reputation",
    description: "Verified builder identities are linked securely to on-chain reputation objects.",
    icon: UserCheck01,
    tag: "zkLogin",
    techIcon: GoogleIcon,
  },
  {
    title: "Execution",
    subtitle: "Move PTBs enforce trust checks",
    description: "Programmable Transaction Blocks ensure no code execution happens without a reputation audit.",
    icon: Zap,
    tag: "Move PTB",
  },
  {
    title: "Storage",
    subtitle: "Walrus stores audit data",
    description: "High-integrity security audits are stored with cryptographic proofs of existence.",
    icon: Database01,
    tag: "Walrus",
    techIcon: WalrusIcon,
  },
  {
    title: "Liquidity",
    subtitle: "DeepBook integrations protect traders",
    description: "DEX protocols utilize reputation scores to protect capital from malicious actors.",
    icon: Activity,
    tag: "DeepBook",
  },
];

export function InfrastructureSection() {
  return (
    <section className="py-32 md:py-64 bg-[#FFFFFF] relative z-10 overflow-hidden border-2 border-[#49A5BD]/10" aria-labelledby="infra-title">
      <div className="max-container flex flex-col items-center">
        
        <div className="text-center mb-24 animate-fade-up">
          <span className="text-[10px] font-black tracking-[0.2em] text-[#49A5BD] uppercase mb-6 inline-block">
            Ecosystem Integration
          </span>
          <h2 id="infra-title" className="text-4xl md:text-6xl font-black tracking-tighter text-[#49A5BD] uppercase font-outfit flex items-center justify-center gap-4">
            Built on the <SuiIcon className="w-10 h-10 md:w-14 md:h-14 text-[#49A5BD]" /> Sui Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 group hover:bg-[#FFFFFF] transition-all duration-500 border-2 border-[#49A5BD]"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center group-hover:bg-[#49A5BD] transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-[#49A5BD] group-hover:text-[#FFFFFF] transition-colors" />
                </div>
                <div className="px-3 py-1 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-full text-[10px] font-mono font-bold text-[#49A5BD] transition-colors flex items-center gap-1.5">
                  {pillar.techIcon && <pillar.techIcon className="w-3.5 h-3.5" />}
                  {pillar.tag}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-[#49A5BD] mb-2 uppercase tracking-tighter font-outfit">{pillar.title}</h3>
              <div className="text-xs font-bold text-[#49A5BD] uppercase tracking-wide mb-6">{pillar.subtitle}</div>
              <p className="text-sm text-[#49A5BD] leading-relaxed font-bold tracking-tight">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
