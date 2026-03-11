"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Zap, Globe, Database, Shield } from "lucide-react";

const items = [
  {
    title:       "Seek (Read)",
    description: "The OmenRegistry operates as a Shared Object. Integrators query verification status and Risk Scores in a single transaction block with O(1) complexity.",
    icon:        Zap,
  },
  {
    title:       "Remit (Write)",
    description: "Security tools push audit results to Omen. These results permanently alter the developer's dynamic Risk Score, turning tools into ecosystem anchors.",
    icon:        Database,
  },
  {
    title:       "Walrus Anchoring",
    description: "Heavy AI audit data is stored on Walrus. Only the 256-bit hash and Blob ID live on-chain, keeping Sui gas fees near absolute zero.",
    icon:        Server,
  },
  {
    title:       "AI Oracle (MCP)",
    description: "An MCP Server exposes our data to the Agentic Web. Autonomous bots run machine-to-machine risk assessments before executing trades.",
    icon:        Globe,
  },
];

export function ArchitectureSection() {
  return (
    <section
      className="py-24 md:py-32 relative z-10 bg-transparent"
      aria-labelledby="arch-title"
    >
      <div className="max-container">
        {/* Header */}
        <div className="flex flex-col mb-16 items-center text-center animate-fade-up">
          <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4">
            System Architecture
          </span>
          <h2
            id="arch-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B1220] mb-6"
          >
            The "Seek and Remit" <br />Trust Primitive.
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#2A8FA8] to-[#43B6D5] rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative glass-card p-10 hover:shadow-lg transition-all duration-300 rounded-[22px] overflow-hidden bg-white/50 backdrop-blur-sm border border-black/5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col gap-5 relative z-10 animate-fade-up">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-[#43B6D5]/20 bg-gradient-to-tr from-[#43B6D5]/5 to-[#B3CDE0]/5 transition-colors duration-300 rounded-xl group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-[#43B6D5] transition-colors duration-200" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#4A5568] leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
