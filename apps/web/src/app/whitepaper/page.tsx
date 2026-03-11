"use client";

import { Layout } from "@/components/layout/Layout";
import { Download, Share2, Globe, Shield, Zap, Server, Cpu, Users, Activity, FileText, ChevronRight, Bookmark, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";

const sections = [
  { id: "abstract", title: "1. Abstract" },
  { id: "identity", title: "2. Identity Primitive" },
  { id: "seek-remit", title: "3. Seek / Remit Architecture" },
  { id: "storage", title: "4. Storage Layer" },
  { id: "execution", title: "5. Execution Layer" },
  { id: "ai-oracle", title: "6. AI Oracle Interface" },
  { id: "agent-lineage", title: "7. Agent Lineage Graph" },
  { id: "resilience", title: "8. Resilience Infrastructure" },
  { id: "conclusion", title: "9. Conclusion" },
];

export default function WhitepaperPage() {
  return (
    <Layout>
      <div className="max-container py-16 lg:py-24">
        
        {/* Header */}
        <div className="mb-20 animate-fade-up">
           <div className="inline-flex items-center gap-3 px-4 py-2 glass-panel rounded-full mb-8 border border-[#43B6D5]/20">
             <FileText className="w-4 h-4 text-[#43B6D5]" />
             <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#43B6D5]">Technical Specification V2.0</span>
           </div>
           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[#0B1220] mb-8 uppercase leading-[0.9]">
             The Trust Primitive <br />
             <span className="text-gradient">for the Sui Stack.</span>
           </h1>
           <p className="text-xl sm:text-2xl text-[#5B6B82] leading-relaxed max-w-3xl font-bold italic border-l-4 border-black/5 pl-8">
             Solving the accountability crisis in on-chain finance and the agentic economy through Move-native reputation infrastructure.
           </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr_300px] gap-12 lg:gap-20">
          
          {/* Navigation */}
          <aside className="order-2 lg:order-1">
             <div className="sticky top-32 glass-panel p-6 border-black/5">
                <nav className="flex flex-col gap-1">
                   {sections.map(section => (
                      <a key={section.id} href={`#${section.id}`} className="flex items-center justify-between group py-3 border-b border-black/[0.03] text-[11px] font-bold uppercase tracking-widest text-[#5B6B82] hover:text-[#43B6D5] transition-colors">
                         <span>{section.title}</span>
                         <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                   ))}
                </nav>
             </div>
          </aside>

          {/* Core Content */}
          <article className="order-1 lg:order-2 space-y-32">
             
             {/* 1 Abstract */}
             <section id="abstract" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Globe className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">1. Abstract</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed font-medium">
                  The Omen Labs protocol provides a decentralized reputation layer for the Sui ecosystem. By linking human founders to their autonomous agents via zkLogin verified OmenBadges, we establish a permanent accountability layer. The system utilizes Walrus for secure storage of large audit metadata and Move PTBs for on-chain enforcement.
                </p>
             </section>

             {/* 2 Identity Primitive */}
             <section id="identity" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Shield className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">2. Identity Primitive</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  The foundation of the protocol is the <strong>OmenBadge</strong>, a soulbound identity object that cannot be transferred or sold.
                </p>
                <div className="bg-white/50 p-6 border border-black/5 rounded-2xl italic text-sm text-[#0B1220]">
                  "Reputation is not a commodity. By making the identity object immobile at the Move bytecode level, we ensure trust belongs to the builder, not the highest bidder."
                </div>
             </section>

             {/* 3 Seek / Remit Architecture */}
             <section id="seek-remit" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Zap className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">3. Seek / Remit Architecture</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  The system operates as a read/write primitive. <strong>Seek</strong> refers to wallets and apps querying the OmenRegistry in real-time. <strong>Remit</strong> refers to security tools pushing audit results back into the builder's score.
                </p>
             </section>

             {/* 4 Storage Layer */}
             <section id="storage" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Server className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">4. Storage Layer</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  Heavy metadata—such as raw JSON outputs from AI code audits—is stored on the <strong>Walrus Protocol</strong>. OmenBadges store a 256-bit hash and a Blob ID using Sui Dynamic Fields.
                </p>
             </section>

             {/* 5 Execution Layer */}
             <section id="execution" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Droplets className="w-5 h-5" style={{ color: '#43B6D5' }}/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">5. Execution Layer</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  Omen integrates with <strong>DeepBook V3</strong> to gate trading pools. Protocols can enforce a minimum trust score before allowing a builder to create or manage a liquidity pool.
                </p>
             </section>

             {/* 6 AI Oracle Interface */}
             <section id="ai-oracle" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Cpu className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">6. AI Oracle Interface</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  The <strong>MCP Server</strong> acts as an Oracle, translating complex on-chain reputation data into machine-readable scores for LLM-based agents and trading bots.
                </p>
             </section>

             {/* 7 Agent Lineage Graph */}
             <section id="agent-lineage" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Users className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">7. Agent Lineage Graph</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  AI child agents are cryptographically linked to their creators. Malicious behavior at the agent level results in automatic <strong>reputation slashing</strong> for the parent founder badge.
                </p>
             </section>

             {/* 8 Resilience Infrastructure */}
             <section id="resilience" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Activity className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">8. Resilience Infrastructure</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  The OmenRegistry uses a hybrid indexing model with a custom PostgreSQL stack and failover RPC polling to ensure 100% data availability for B2B partners.
                </p>
             </section>

             {/* 9 Conclusion */}
             <section id="conclusion" className="scroll-mt-32 space-y-6">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-10 h-10 bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] rounded-xl"><Bookmark className="w-5 h-5"/></div>
                   <h2 className="text-3xl font-black text-[#0B1220] uppercase m-0">9. Conclusion</h2>
                </div>
                <p className="text-lg text-subtext leading-relaxed">
                  Omen Labs is the trust infrastructure standard for the sui-native agentic economy. By making reputation programmatic and non-transferable, we ensure that as the ecosystem grows, accountability remains central to every transaction.
                </p>
             </section>

          </article>

          {/* Resources & Download */}
          <aside className="order-3 block">
             <div className="sticky top-32 space-y-6">
                <div className="glass-panel p-6 border-black/5 space-y-4">
                   <h4 className="text-xs font-black uppercase text-[#0B1220] tracking-widest">Resources</h4>
                   <p className="text-xs text-subtext leading-relaxed">Get the full cryptographic proof and implementation details as a PDF.</p>
                   <Button className="w-full bg-[#43B6D5] text-white border-none text-[11px] h-10 flex gap-2">
                      <Download className="w-4 h-4" /> Download PDF
                   </Button>
                </div>
                <div className="glass-panel p-6 border-black/5 space-y-4">
                   <h4 className="text-xs font-black uppercase text-[#0B1220] tracking-widest">Share Spec</h4>
                   <Button variant="secondary" className="w-full text-[11px] h-10 flex gap-2 glass-panel border-black/5 bg-transparent shadow-none hover:bg-black/5">
                      <Share2 className="w-4 h-4" /> Copy Link
                   </Button>
                </div>
             </div>
          </aside>

        </div>
      </div>
    </Layout>
  );
}
