"use client";

import { motion } from "framer-motion";
import { Server, Database, BadgeCheck, FileSearch } from "lucide-react";
import WalrusIcon from "@/components/icons/WalrusIcon";
import SuiIcon from "@/components/icons/SuiIcon";

export function WalrusStorageSection() {
  return (
    <section className="py-32 md:py-64 relative z-10 bg-transparent" aria-labelledby="walrus-title">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div className="space-y-8 animate-fade-up">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-full">
                <Server className="w-4 h-4 text-[#49A5BD]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#49A5BD]">Decentralized Storage</span>
             </div>
             
              <h2 id="walrus-title" className="text-3xl md:text-5xl font-black text-[#49A5BD] uppercase leading-tight flex items-center gap-3">
               Built on <br /> <WalrusIcon className="w-10 h-10 md:w-14 md:h-14 text-[#49A5BD]" /> <span className="text-[#49A5BD]">Walrus Protocol.</span>
             </h2>
             
             <p className="text-lg text-[#49A5BD] leading-relaxed max-w-lg font-bold tracking-tight">
               Large audit reports and AI security data are stored on Walrus, while cryptographic proofs remain on the Sui blockchain. This hybrid-state storage allows O(1) trust verification with near-zero gas costs.
             </p>

             <div className="space-y-4">
               {[
                 { title: "Audit Persistence", desc: "Security data outlives projects.", icon: FileSearch },
                 { title: "Sui Pinning", desc: <>Proof-of-availability anchors IDs on <SuiIcon className="inline-block w-4 h-4 ml-1" /> Sui.</>, icon: BadgeCheck },
                 { title: "O(1) Access", desc: "Instant retrieval via Blob IDs.", icon: Database },
               ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 border-2 border-[#49A5BD]/20 hover:border-[#49A5BD] group transition-all bg-[#FFFFFF] rounded-2xl">
                     <item.icon className="w-5 h-5 text-[#49A5BD] transition-transform" />
                     <div className="space-y-1">
                        <h5 className="text-sm font-bold text-[#49A5BD] transition-colors">{item.title}</h5>
                        <p className="text-xs text-[#49A5BD] opacity-70 font-medium">{item.desc}</p>
                     </div>
                  </div>
               ))}
             </div>
          </div>

           {/* Visual Side */}
          <div className="relative">
             <div className="glass-card p-10 rounded-[40px] border-2 border-[#49A5BD] bg-[#FFFFFF] overflow-hidden">
                <div className="flex items-center justify-center h-64 relative">
                   <div className="relative z-10 w-32 h-32 rounded-3xl border-2 border-[#49A5BD] flex items-center justify-center p-4 bg-[#FFFFFF]">
                      <Database className="w-16 h-16 text-[#49A5BD]" />
                   </div>
                </div>
                <div className="mt-8 text-center space-y-4">
                   <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#49A5BD] flex items-center justify-center gap-2">
                      <WalrusIcon className="w-4 h-4 text-[#49A5BD]" /> Walrus Storage Engine
                   </p>
                   <p className="text-xl font-black text-[#49A5BD] uppercase tracking-tighter">TB+ Scalable Security Data</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
