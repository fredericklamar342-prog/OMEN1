"use client";

import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import React from "react";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  Code,
  Globe,
  Users,
  Database,
  Lock,
  Cpu,
  Zap,
  ShieldAlert
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "CORE_CONCEPT",
      content: (
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed text-lg">
            Omen Labs is a decentralized reputation protocol and trust infrastructure for the Sui ecosystem. It solves the problem that in Web3 you can verify code but cannot verify who built it.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <div className="p-6 glass-panel border border-white/5 bg-white/5 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-widest text-xs">
                 <ShieldCheck className="w-4 h-4 text-[#43B6D5]" /> The Trust Gap
               </h4>
               <p className="text-xs text-subtext leading-relaxed">Web3 lacks a non-transferable reputation layer. Omen fills this by linking real-world credibility to soulbound on-chain identities.</p>
            </div>
            <div className="p-6 glass-panel border border-white/5 bg-white/5 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-widest text-xs">
                 <Cpu className="w-4 h-4 text-[#43B6D5]" /> Agentic Web
               </h4>
               <p className="text-xs text-subtext leading-relaxed">As AI agents take over trading and governance, Omen provides the "Proof of Creator" layer needed for autonomous safety.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "installation",
      title: "Installation",
      icon: <Terminal className="w-5 h-5" />,
      tag: "SETUP_v2.0",
      content: (
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed">Install the Omen SDK and MCP server tools to begin integrating trust checks into your application.</p>
          <div className="bg-background/80 p-6 font-mono text-sm border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-4 text-[10px] text-subtext/40 font-bold uppercase tracking-[0.2em] border-b border-border/50 pb-3">
              <Terminal className="w-3 h-3" /> shell
            </div>
            <code className="text-foreground block">
              <span className="text-subtext/40"># Install SDK</span><br />
              <span className="text-subtext/40">$</span> npm install <span className="text-accent">@omen-labs/sdk</span><br /><br />
              <span className="text-subtext/40"># Install MCP AI Oracle</span><br />
              <span className="text-subtext/40">$</span> npm install -g <span className="text-accent">@omen-labs/mcp-server</span>
            </code>
          </div>
        </div>
      )
    },
    {
      id: "sdk-setup",
      title: "SDK Setup",
      icon: <Code className="w-5 h-5" />,
      tag: "CONFIG_v2.0",
      content: (
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed">Initialize the Omen provider with your Sui RPC and registry package IDs.</p>
          <div className="bg-background/80 p-6 font-mono text-xs sm:text-sm border border-border rounded-xl overflow-x-auto">
            <code className="text-subtext/80 block whitespace-pre">
{`import { OmenProvider } from "@omen-labs/sdk";

const omen = new OmenProvider({
  rpcUrl: "https://fullnode.mainnet.sui.io:443",
  packageId: OMEN_PACKAGE_ID,
  registryId: REGISTRY_OBJECT_ID
});`}
            </code>
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
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed">Query the builder reputation score for any target protocol or address in a single async call.</p>
          <div className="bg-background/80 p-6 font-mono text-xs sm:text-sm border border-border rounded-xl overflow-x-auto">
            <code className="text-subtext/80 block whitespace-pre">
{`const trustScore = await omen.getTrustScore(protocolAddress);

console.log(\`Reputation: \${trustScore}/100\`);

if (trustScore < 85) {
  throw new Error("Target protocol failed reputation check.");
}`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "security-thresholds",
      title: "Security Thresholds",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "GOVERNANCE",
      content: (
        <div className="space-y-8">
           <p className="text-subtext leading-relaxed">Establish institutional assertions based on the Omen risk score distribution.</p>
           <ul className="grid sm:grid-cols-3 gap-4">
              {[
                { score: "85+", label: "Safe / Institutional", color: "text-green-500", bg: "bg-green-500/5" },
                { score: "60-84", label: "Retail / Verified", color: "text-blue-400", bg: "bg-blue-400/5" },
                { score: "30-59", label: "Caution / Warning", color: "text-amber-500", bg: "bg-amber-500/5" },
                { score: "< 30", label: "High Risk / Gated", color: "text-red-500", bg: "bg-red-500/5" },
              ].map((th, i) => (
                <li key={i} className={`p-4 border border-white/5 ${th.bg} rounded-lg flex flex-col items-center gap-2`}>
                   <span className={`text-2xl font-black ${th.color}`}>{th.score}</span>
                   <span className="text-[10px] uppercase font-bold text-white tracking-widest">{th.label}</span>
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
           <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs">DeepBook Firewall</h5>
              <p className="text-xs text-subtext leading-relaxed">Gate trading pool access based on Omen badges to protect liquidity from anonymous predators.</p>
           </div>
           <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs">Wallet Warning</h5>
              <p className="text-xs text-subtext leading-relaxed">Inject a "Verified Builder" badge into the transaction approval screen in your wallet extension.</p>
           </div>
           <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs">AI Agent Safety</h5>
              <p className="text-xs text-subtext leading-relaxed">Force autonomous bots to check creator reputation before engaging with new pools.</p>
           </div>
           <div className="space-y-4">
              <h5 className="text-white font-bold uppercase text-xs">Soulbound Index</h5>
              <p className="text-xs text-subtext leading-relaxed">Index move-native identities to create a leaderboard of the most trusted Sui developers.</p>
           </div>
        </div>
      )
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Database className="w-5 h-5" />,
      tag: "SDK_v2.0_SPEC",
      content: (
        <div className="space-y-6">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-border">
                       <th className="py-4 text-xs font-black uppercase text-accent">Method</th>
                       <th className="py-4 text-xs font-black uppercase text-accent">Returns</th>
                       <th className="py-2 px-4 text-xs font-black uppercase text-accent">Description</th>
                    </tr>
                 </thead>
                 <tbody className="text-xs">
                    <tr className="border-b border-white/5">
                       <td className="py-4 font-mono text-white">getTrustScore(addr: string)</td>
                       <td className="py-4 font-mono text-subtext">Promise&lt;number&gt;</td>
                       <td className="py-4 px-4 text-subtext leading-relaxed">Fetches the current 0-100 reputation score for an OmenBadge.</td>
                    </tr>
                    <tr className="border-b border-white/5">
                       <td className="py-4 font-mono text-white">getLineage(addr: string)</td>
                       <td className="py-4 font-mono text-subtext">Promise&lt;Graph&gt;</td>
                       <td className="py-4 px-4 text-subtext leading-relaxed">Retrieves the parent creator for a given child AI agent identity.</td>
                    </tr>
                    <tr className="border-b border-white/5">
                       <td className="py-4 font-mono text-white">getAuditBlob(id: string)</td>
                       <td className="py-4 font-mono text-subtext">Promise&lt;Blob&gt;</td>
                       <td className="py-4 px-4 text-subtext leading-relaxed">Fetches a full security report from the Walrus storage network.</td>
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
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <PageHeader 
          title="Specifications & SDK" 
          description="Build the trust layer for the agentic economy using Omen's Move-native primitives."
        />

        <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-24 py-4 lg:py-12">
          {/* Desktop Sidebar Nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-40 space-y-1">
              <div className="px-4 py-2 mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-subtext/40">Developer Hub</p>
              </div>
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="flex items-center justify-between group px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-[#8892B0] hover:text-[#43B6D5] hover:bg-white/5 border-l-2 border-transparent hover:border-[#43B6D5] transition-all"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-48">
            {sections.map((s, i) => (
              <section 
                key={s.id} 
                id={s.id} 
                className="scroll-mt-32 space-y-8 sm:space-y-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-white/5 pb-6 sm:pb-8">
                  <div className="flex items-center gap-4 sm:gap-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden shrink-0">
                      <div className="text-[#43B6D5]">{s.icon}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#43B6D5]">{s.tag}</span>
                        <div className="w-1 h-3 bg-white/10 rotate-12 hidden sm:block" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-subtext/40 font-mono italic">Module_{i+1}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">{s.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-24">
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
