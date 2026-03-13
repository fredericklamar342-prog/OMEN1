"use client";

import { motion } from "framer-motion";
import { GitBranch01, UserPlus01, ShieldTick } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";

export function AgentLineageSection() {
  return (
    <section className="py-32 md:py-64 relative z-10 bg-white shadow-inner border-y border-black/[0.03]" aria-labelledby="lineage-title">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Visual Side */}
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="glass-card p-10 md:p-12 rounded-[40px] border-white shadow-2xl relative overflow-hidden bg-white/90">
                <div className="flex items-center gap-5 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center">
                    <GitBranch01 className="w-7 h-7 text-[#49A5BD]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-[#49A5BD] text-lg tracking-tight">Lineage Graph</h4>
                    <p className="text-[10px] text-[#49A5BD] uppercase tracking-[0.25em] font-black">Parent-Child Identity</p>
                  </div>
                </div>
                
                <div className="space-y-6 relative">
                  {/* Connection line */}
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#49A5BD]/20" />
                  
                  {/* Parent */}
                  <div className="flex items-center gap-6 relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center text-[#49A5BD] font-black text-lg">
                       LB
                     </div>
                     <div className="bg-[#FFFFFF] p-5 rounded-2xl border-2 border-[#49A5BD] flex-1">
                        <p className="text-sm font-black text-[#49A5BD] tracking-tight">Lamar Builder (OmenBadge)</p>
                        <p className="text-[10px] text-[#49A5BD] font-black uppercase tracking-widest mt-0.5 flex items-center gap-1.5 opacity-70">Creator / Parent <SuiIcon className="w-3 h-3 text-[#49A5BD]" /></p>
                     </div>
                  </div>

                  {/* Child Agent */}
                  <div className="flex items-center gap-6 relative z-10 ml-6">
                     <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center text-[#49A5BD] font-black text-lg">
                       A1
                     </div>
                     <div className="bg-[#FFFFFF] p-5 rounded-2xl border-2 border-[#49A5BD]/20 flex-1">
                        <p className="text-sm font-black text-[#49A5BD] tracking-tight">TradeBot_v2 (Agent)</p>
                        <p className="text-[10px] text-[#49A5BD] font-black uppercase tracking-widest mt-0.5 opacity-70">Autonomous Child</p>
                     </div>
                  </div>

                  {/* Event */}
                  <div className="flex items-center gap-6 relative z-10 ml-12">
                     <div className="w-10 h-10 rounded-2xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center text-[#49A5BD] font-black">
                       !
                     </div>
                     <div className="bg-[#FFFFFF] p-5 rounded-2xl border-2 border-[#49A5BD] flex-1">
                        <p className="text-[11px] font-black text-[#49A5BD] uppercase tracking-widest">Malicious Behavior Detected</p>
                        <p className="text-[10px] text-[#49A5BD] font-semibold mt-0.5 italic opacity-70">Auto-Slashing Parent Reputation...</p>
                     </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
             <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-full mb-2">
                <UserPlus01 className="w-4 h-4 text-[#49A5BD]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#49A5BD]">Agent Accountability</span>
             </div>
             
             <h2 id="lineage-title" className="text-4xl md:text-6xl font-black text-[#49A5BD] uppercase leading-[1.1] tracking-tight font-outfit">
               Agents inherit the <br /> <span className="text-[#49A5BD]">Reputation</span> <br className="hidden md:block" /> of their creators.
             </h2>
             
             <p className="text-lg md:text-xl text-[#49A5BD] leading-relaxed font-bold max-w-xl">
               Omen introduces the <strong>Agentic Lineage Graph</strong>. AI agents are cryptographically linked to their creators through soulbound identities. If an agent behaves maliciously, the penalty ripples up the graph, affecting the original builder's trust score.
             </p>

              <div className="p-8 md:p-10 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-[32px] transition-all duration-500 hover:scale-[1.02]">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center text-[#49A5BD] group-hover:bg-[#49A5BD] group-hover:text-[#FFFFFF] transition-all">
                      <ShieldTick className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#49A5BD]">Protocol Guarantee</span>
                  </div>
                  <p className="text-[15px] md:text-[17px] font-bold text-[#49A5BD] leading-relaxed tracking-tight pl-0.5">
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
