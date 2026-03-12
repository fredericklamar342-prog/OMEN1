"use client";

import { motion } from "framer-motion";
import { Server, Database, BadgeCheck, FileSearch } from "lucide-react";

export function WalrusStorageSection() {
  return (
    <section className="py-32 md:py-64 relative z-10 bg-transparent" aria-labelledby="walrus-title">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div className="space-y-8 animate-fade-up">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#43B6D5]/10 rounded-full">
                <Server className="w-4 h-4 text-[#43B6D5]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#43B6D5]">Decentralized Storage</span>
             </div>
             
             <h2 id="walrus-title" className="text-3xl md:text-5xl font-black text-[#0B1220] uppercase leading-tight">
               Built on <br /> <span className="text-gradient">Walrus Protocol.</span>
             </h2>
             
             <p className="text-lg text-[#4A5568] leading-relaxed max-w-lg font-bold tracking-tight">
               Large audit reports and AI security data are stored on Walrus, while cryptographic proofs remain on the Sui blockchain. This hybrid-state storage allows O(1) trust verification with near-zero gas costs.
             </p>

             <div className="space-y-4">
               {[
                 { title: "Audit Persistence", desc: "Security data outlives projects.", icon: FileSearch },
                 { title: "Sui Pinning", desc: "Proof-of-availability anchors IDs.", icon: BadgeCheck },
                 { title: "O(1) Access", desc: "Instant retrieval via Blob IDs.", icon: Database },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center p-4 glass-panel border border-black/5 hover:border-[#43B6D5]/20 group transition-all">
                    <item.icon className="w-5 h-5 text-[#43B6D5] group-hover:scale-110 transition-transform" />
                    <div className="space-y-1">
                       <h5 className="text-sm font-bold text-[#0B1220] group-hover:text-[#43B6D5] transition-colors">{item.title}</h5>
                       <p className="text-xs text-[#5B6B82] font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
             <div className="glass-card p-10 rounded-[40px] border border-white/50 bg-[#43B6D5]/5 overflow-hidden animate-pulse-slow">
                <div className="flex items-center justify-center h-64 relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#AAC0E1]/30 via-[#43B6D5]/20 to-transparent blur-3xl rounded-full" />
                   <div className="relative z-10 w-32 h-32 rounded-3xl border-2 border-[#43B6D5] flex items-center justify-center p-4 bg-white/50 backdrop-blur-xl animate-float">
                      <Database className="w-16 h-16 text-[#43B6D5]" />
                   </div>
                </div>
                <div className="mt-8 text-center space-y-4">
                   <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#43B6D5]">Walrus Storage Engine</p>
                   <p className="text-xl font-black text-[#0B1220] uppercase tracking-tighter">TB+ Scalable Security Data</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
