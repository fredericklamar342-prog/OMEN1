"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Users, ShieldAlert, BadgeCheck, Network } from "lucide-react";

const benefits = [
  {
    title: "Know Who Built a Protocol",
    subtitle: "Transparency",
    description: "Omen links developer reputation to on-chain identities so users can verify the builders behind any protocol.",
    icon: Users,
  },
  {
    title: "Stop Risky Transactions",
    subtitle: "Security",
    description: "Wallets and apps can check a protocol’s trust score before executing transactions, preventing interaction with malicious code.",
    icon: ShieldAlert,
  },
  {
    title: "Build Verifiable Reputation",
    subtitle: "Identity",
    description: "Developers receive a permanent soulbound identity badge proving their credibility across the entire Sui ecosystem.",
    icon: BadgeCheck,
  },
  {
    title: "Accountable AI Agents",
    subtitle: "Agentic Economy",
    description: "Autonomous agents inherit the reputation of their creators to prevent anonymous algorithmic attacks.",
    icon: Network,
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent" aria-labelledby="benefits-title">
      <div className="max-container">
        <div className="flex flex-col items-center text-center mb-20 animate-fade-up">
          <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4">
            Why Omen Exists
          </span>
          <h2 id="benefits-title" className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B1220] mb-6">
            The Trust Layer for <br className="hidden md:block" /> a Decentralized World.
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#2A8FA8] to-[#43B6D5] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <FeatureCard 
                title={benefit.title}
                subtitle={benefit.subtitle}
                description={benefit.description}
                icon={benefit.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
