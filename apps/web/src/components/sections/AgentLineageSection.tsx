"use client";

import { motion } from "framer-motion";
import { GitBranch, UserPlus, AlertOctagon } from "lucide-react";

export function AgentLineageSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-white shadow-inner" aria-labelledby="lineage-title">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Side */}
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="glass-card p-8 rounded-3xl border-black/[0.03] shadow-lg relative overflow-hidden bg-white/80">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#43B6D5]/10 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-[#43B6D5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1220]">Lineage Graph</h4>
                    <p className="text-xs text-[#5B6B82] uppercase tracking-widest font-black">Parent-Child Identity</p>
                  </div>
                </div>
                
                <div className="space-y-6 relative">
                  {/* Connection line */}
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#43B6D5] to-[#f87171]/20" />
                  
                  {/* Parent */}
                  <div className="flex items-center gap-6 relative z-10">
                     <div className="w-12 h-12 rounded-full bg-white border-2 border-[#43B6D5] flex items-center justify-center text-[#43B6D5] font-bold shadow-sm">
                       LB
                     </div>
                     <div className="bg-white/50 p-4 rounded-xl border border-black/5 flex-1">
                        <p className="text-xs font-bold text-[#0B1220]">Lamar Builder (OmenBadge)</p>
                        <p className="text-[10px] text-[#43B6D5] font-black uppercase">Creator / Parent</p>
                     </div>
                  </div>

                  {/* Child Agent */}
                  <div className="flex items-center gap-6 relative z-10 ml-4">
                     <div className="w-10 h-10 rounded-full bg-white border-2 border-[#AAC0E1] flex items-center justify-center text-[#AAC0E1] font-bold shadow-sm">
                       A1
                     </div>
                     <div className="bg-white/50 p-4 rounded-xl border border-black/5 flex-1">
                        <p className="text-xs font-bold text-[#0B1220]">TradeBot_v2 (Agent)</p>
                        <p className="text-[10px] text-[#5B6B82] font-black uppercase">Autonomous Child</p>
                     </div>
                  </div>

                  {/* Event */}
                  <div className="flex items-center gap-6 relative z-10 ml-8">
                     <div className="w-8 h-8 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-500 font-bold shadow-sm">
                       !
                     </div>
                     <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 flex-1">
                        <p className="text-[10px] font-bold text-red-600 uppercase">Malicious Behavior Detected</p>
                        <p className="text-[9px] text-red-500 font-medium">Auto-Slashing Parent Reputation...</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#43B6D5]/10 rounded-full">
                <UserPlus className="w-4 h-4 text-[#43B6D5]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#43B6D5]">Agent Accountability</span>
             </div>
             
             <h2 id="lineage-title" className="text-3xl md:text-5xl font-black text-[#0B1220] uppercase leading-tight">
               Agents inherit the <br /> <span className="text-gradient">Reputation</span> of their creators.
             </h2>
             
             <p className="text-lg text-[#4A5568] leading-relaxed">
               Omen introduces the <strong>Agentic Lineage Graph</strong>. AI agents are cryptographically linked to their creators through soulbound identities. If an agent behaves maliciously, the penalty ripples up the graph, affecting the original builder's trust score.
             </p>

             <div className="p-6 border-l-4 border-red-400 bg-red-50/30 rounded-r-xl">
               <div className="flex gap-4">
                 <AlertOctagon className="w-6 h-6 text-red-500 shrink-0" />
                 <p className="text-sm font-medium text-red-700">
                   Eliminate "Anonymous Algorithmic Attacks" by making creators programmatically accountable for their bots.
                 </p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
