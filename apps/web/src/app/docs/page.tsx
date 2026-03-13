"use client";

import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import React from "react";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import { 
  Terminal, 
  BookOpen01, 
  ShieldTick, 
  Activity, 
  CheckCircle, 
  ChevronRight,
  Code01,
  File02,
  Users01,
  Database01,
  Lock01,
  CpuChip01,
  Zap,
  AlertCircle,
  LayersThree01
} from "@untitled-ui/icons-react";

export default function DocsPage() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: <BookOpen01 className="w-5 h-5" />,
      tag: "CORE_CONCEPT",
      content: (
        <div className="space-y-8">
          <p className="text-[#49A5BD] leading-relaxed text-xl font-bold">
            Omen is a decentralized reputation protocol and trust infrastructure built natively for the <span className="inline-flex items-center gap-1.5"><SuiIcon className="w-6 h-6" /> Sui</span> ecosystem. It bridges the gap between verified code and verifiable identity.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 my-12">
            <div className="p-8 glass-card border-2 border-[#49A5BD]/10 bg-[#FFFFFF] space-y-4 shadow-sm shadow-[#49A5BD]/5">
               <h4 className="text-[#49A5BD] font-black flex items-center gap-3 uppercase tracking-widest text-xs">
                 <ShieldTick className="w-4 h-4 text-[#49A5BD]" /> THE TRUST GAP
               </h4>
               <p className="text-sm text-[#49A5BD] leading-relaxed font-bold">Web3 lacks a non-transferable reputation layer. Omen fills this by linking real-world credibility to soulbound on-chain identities.</p>
            </div>
            <div className="p-8 glass-card border-2 border-[#49A5BD]/10 bg-[#FFFFFF] space-y-4 shadow-sm shadow-[#49A5BD]/5">
               <h4 className="text-[#49A5BD] font-black flex items-center gap-3 uppercase tracking-widest text-xs">
                 <CpuChip01 className="w-4 h-4 text-[#49A5BD]" /> AGENTIC WEB
               </h4>
               <p className="text-sm text-[#49A5BD] leading-relaxed font-bold">As AI agents take over trading and governance, Omen provides the "Proof of Creator" layer needed for autonomous safety.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "installation",
      title: "Installation",
      icon: <Terminal className="w-5 h-5" />,
      tag: "SETUP_PRIVATE_ALPHA",
      content: (
        <div className="space-y-8">
          <p className="text-[#49A5BD] leading-relaxed font-bold">Install the Omen SDK and MCP server tools to begin integrating trust checks into your application.</p>
          <div className="glass-card p-0 border-2 border-[#49A5BD]/20 overflow-hidden shadow-2xl shadow-[#49A5BD]/5 bg-[#FFFFFF]">
            <div className="flex items-center gap-3 px-6 py-4 bg-[#FFFFFF] border-b-2 border-[#49A5BD]/10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#49A5BD]" />
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#49A5BD]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#49A5BD]" />
              </div>
              <span className="text-[10px] text-[#49A5BD] font-black uppercase tracking-widest ml-2">Terminal</span>
            </div>
            <div className="p-8 bg-[#FFFFFF] font-mono text-sm">
              <code className="text-[#49A5BD] block space-y-2">
                <div className="opacity-60 italic">// Install Omen SDK</div>
                <div><span className="text-[#49A5BD] font-black">$</span> npm install @omen-protocol/sdk</div>
                <div className="pt-4 opacity-60 italic">// Install MCP AI Oracle</div>
                <div><span className="text-[#49A5BD] font-black">$</span> npm install -g @omen-protocol/mcp-server</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "sdk-setup",
      title: "SDK Setup",
      icon: <Code01 className="w-5 h-5" />,
      tag: "CONFIG_PRIVATE_ALPHA",
      content: (
        <div className="space-y-8">
          <p className="text-[#49A5BD] leading-relaxed font-bold">Initialize the Omen provider with your Sui RPC and registry package IDs.</p>
          <div className="glass-card p-0 border-2 border-[#49A5BD]/20 overflow-hidden shadow-2xl shadow-[#49A5BD]/5 bg-[#FFFFFF]">
            <div className="flex items-center gap-3 px-6 py-4 bg-[#FFFFFF] border-b-2 border-[#49A5BD]/10">
              <span className="text-[10px] text-[#49A5BD] font-black uppercase tracking-widest">omen_config.ts</span>
            </div>
            <div className="p-8 bg-[#FFFFFF] font-mono text-sm overflow-x-auto">
              <code className="text-[#49A5BD] block whitespace-pre">
{`import { OmenProvider } from "@omen-protocol/sdk";

const omen = new OmenProvider({
  rpcUrl: "https://fullnode.testnet.sui.io:443",
  packageId: OMEN_PACKAGE_ID,
  registryId: REGISTRY_OBJECT_ID
});`}
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "verify-trust",
      title: "Verify Trust Score",
      icon: <Zap className="w-5 h-5" />,
      tag: "TRUST_LOOKUP",
      content: (
        <div className="space-y-8">
          <p className="text-[#49A5BD] leading-relaxed font-bold">Query the builder reputation score for any target protocol or address in a single async call.</p>
          <div className="glass-card p-0 border-2 border-[#49A5BD]/20 overflow-hidden shadow-2xl shadow-[#49A5BD]/5 bg-[#FFFFFF]">
            <div className="p-8 bg-[#FFFFFF] font-mono text-sm overflow-x-auto">
              <code className="text-[#49A5BD] block whitespace-pre">
{`const trustScore = await omen.getTrustScore(protocolAddress);

console.log(\`Reputation Score: \${trustScore}/100\`);

if (trustScore < 85) {
  throw new Error("Protocol failed reputation threshold.");
}`}
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "security-thresholds",
      title: "Security Thresholds",
      icon: <CheckCircle className="w-5 h-5" />,
      tag: "GOVERNANCE",
      content: (
        <div className="space-y-10">
           <p className="text-[#49A5BD] leading-relaxed font-bold">Establish institutional assertions based on the Omen risk score distribution.</p>
           <ul className="grid sm:grid-cols-4 gap-6">
              {[
                { score: "85+", label: "INSTITUTIONAL", color: "text-[#FFFFFF]", bg: "bg-[#49A5BD]", border: "border-[#49A5BD]" },
                { score: "60-84", label: "VERIFIED", color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]", border: "border-[#49A5BD]" },
                { score: "30-59", label: "WARNING", color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]", border: "border-[#49A5BD]/40" },
                { score: "0-29", label: "HIGH RISK", color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]", border: "border-[#49A5BD]/20" },
              ].map((th, i) => (
                <li key={i} className={`p-6 border-2 ${th.border} ${th.bg} rounded-2xl flex flex-col items-center gap-3 shadow-sm shadow-[#49A5BD]/5`}>
                   <span className={`text-3xl font-black ${th.color}`}>{th.score}</span>
                   <span className={`text-[10px] uppercase font-black tracking-widest ${th.color === "text-[#FFFFFF]" ? "text-[#FFFFFF]" : "text-[#49A5BD]"}`}>{th.label}</span>
                </li>
              ))}
           </ul>
        </div>
      )
    },
    {
      id: "integration-examples",
      title: "Integration Examples",
      icon: <Activity className="w-5 h-5" />,
      tag: "USE_CASES",
      content: (
        <div className="grid sm:grid-cols-2 gap-8">
           {[
             { title: "DEEPBOOK FIREWALL", desc: "Gate trading pool access based on Omen badges to protect liquidity from anonymous predators.", icon: <Database01 className="w-4 h-4" /> },
             { title: "WALLET WARNING", desc: "Inject a 'Verified Builder' badge into the transaction approval screen in your wallet extension.", icon: <ShieldTick className="w-4 h-4" /> },
             { title: "AI AGENT SAFETY", desc: "Force autonomous bots to check creator reputation before engaging with new pools.", icon: <LayersThree01 className="w-4 h-4" /> },
             { title: "SOULBOUND INDEX", desc: <>Index move-native identities to create a leaderboard of the most trusted <SuiIcon className="inline-block w-4 h-4 ml-1" /> Sui developers.</>, icon: <Users01 className="w-4 h-4" /> }
           ].map((ex, i) => (
             <div key={i} className="p-8 glass-card border-2 border-[#49A5BD]/10 bg-[#FFFFFF] space-y-4 group hover:border-[#49A5BD] transition-all duration-300 shadow-sm shadow-[#49A5BD]/5">
                <div className="w-10 h-10 rounded-xl bg-[#49A5BD]/10 flex items-center justify-center text-[#49A5BD] group-hover:bg-[#49A5BD] group-hover:text-[#FFFFFF] transition-all">
                  {ex.icon}
                </div>
                <h5 className="text-[#49A5BD] font-black uppercase text-sm tracking-tight">{ex.title}</h5>
                <p className="text-sm text-[#49A5BD] leading-relaxed font-bold">{ex.desc}</p>
             </div>
           ))}
        </div>
      )
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Database01 className="w-5 h-5" />,
      tag: "SDK_ALPHA_SPEC",
      content: (
        <div className="space-y-8">
           <div className="glass-card p-0 border-2 border-[#49A5BD]/20 overflow-hidden shadow-xl shadow-[#49A5BD]/5 bg-[#FFFFFF]">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#49A5BD]/5 border-b-2 border-[#49A5BD]/10">
                       <th className="py-5 px-8 text-[10px] font-black uppercase text-[#49A5BD] tracking-widest">Method</th>
                       <th className="py-5 px-8 text-[10px] font-black uppercase text-[#49A5BD] tracking-widest">Returns</th>
                       <th className="py-5 px-8 text-[10px] font-black uppercase text-[#49A5BD] tracking-widest">Description</th>
                    </tr>
                 </thead>
                 <tbody className="text-xs">
                    <tr className="border-b-2 border-[#49A5BD]/5 hover:bg-[#49A5BD]/5 transition-colors">
                       <td className="py-6 px-8 font-mono text-[#49A5BD] font-black">getTrustScore(addr)</td>
                       <td className="py-6 px-8 font-mono text-[#49A5BD] font-black">Promise&lt;num&gt;</td>
                       <td className="py-6 px-8 text-[#49A5BD] font-bold leading-relaxed">Fetches the current 0-100 reputation score for an OmenBadge.</td>
                    </tr>
                    <tr className="border-b-2 border-[#49A5BD]/5 hover:bg-[#49A5BD]/5 transition-colors">
                       <td className="py-6 px-8 font-mono text-[#49A5BD] font-black">getLineage(addr)</td>
                       <td className="py-6 px-8 font-mono text-[#49A5BD] font-black">Promise&lt;Graph&gt;</td>
                       <td className="py-6 px-8 text-[#49A5BD] font-bold leading-relaxed">Retrieves the parent creator for a given child AI agent identity.</td>
                    </tr>
                    <tr className="hover:bg-[#49A5BD]/5 transition-colors">
                       <td className="py-6 px-8 font-mono text-[#49A5BD] font-black">getAudit(id)</td>
                       <td className="py-6 px-8 font-mono text-[#49A5BD] font-black">Promise&lt;Blob&gt;</td>
                       <td className="py-6 px-8 text-[#49A5BD] font-bold leading-relaxed flex items-center gap-2">Fetches a full security report from the <WalrusIcon className="w-4 h-4" /> Walrus storage network.</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-24 sm:py-32 px-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-24 animate-fade-up">
           <span className="text-[10px] font-black tracking-[0.4em] text-[#49A5BD] uppercase mb-6">Developer Documentation</span>
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#49A5BD] mb-8 uppercase font-outfit">Specifications & SDK</h1>
           <p className="text-xl md:text-2xl text-[#49A5BD] max-w-3xl leading-relaxed font-bold">Build the trust layer for the agentic economy using Omen's Move-native reputation primitives.</p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-20 py-12">
          {/* Desktop Sidebar Nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-40 space-y-2">
              <div className="px-5 py-3 mb-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] opacity-50">PROTOCOL GUIDE</p>
              </div>
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="flex items-center justify-between group px-5 py-4 text-[11px] font-black uppercase tracking-widest text-[#49A5BD] hover:text-[#49A5BD] hover:bg-[#FFFFFF] border-l-2 border-transparent hover:border-[#49A5BD] rounded-r-xl transition-all shadow-sm shadow-[#49A5BD]/5 hover:shadow-md"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#49A5BD]" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="space-y-48">
            {sections.map((s, i) => (
              <section 
                key={s.id} 
                id={s.id} 
                className="scroll-mt-40 space-y-16 animate-fade-up"
              >
                <div className="flex flex-col gap-8 pb-12 border-b-2 border-[#49A5BD]/10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#49A5BD] flex items-center justify-center text-[#FFFFFF] shadow-xl shadow-[#49A5BD]/10">
                      {s.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#49A5BD]">{s.tag}</span>
                        <div className="w-px h-3 bg-[#49A5BD]/20" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#49A5BD] opacity-50 font-mono italic">MODULE_0{i+1}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#49A5BD] uppercase font-outfit">{s.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-20">
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
