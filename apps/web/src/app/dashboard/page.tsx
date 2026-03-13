"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldTick, 
  LayoutGrid02, 
  CheckCircle, 
  File02, 
  Settings01, 
  UploadCloud01, 
  Activity,
  Menu01,
  XClose,
  LogOut01,
  Bell01,
  ChevronRight,
  GitBranch01,
  Database01,
  SearchLg,
  AlertCircle,
  HelpCircle
} from "@untitled-ui/icons-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const SIDEBAR_LINKS = [
  { name: "Overview",       icon: LayoutGrid02,      href: "#", active: true },
  { name: "OmenBadge",      icon: ShieldTick,      href: "#" },
  { name: "Agent Lineage",  icon: GitBranch01,     href: "#" },
  { name: "Walrus Storage", icon: Database01,      href: "#" },
  { name: "My Protocols",   icon: Activity,        href: "#" },
  { name: "Developer Settings", icon: Settings01,  href: "#" },
];

const RECENT_ALERTS = [
  { id: 1, action: "Trust score updated via AI Audit", date: "2 hours ago",  status: "success" },
  { id: 2, action: "New child agent 'Bot_Alpha' linked", date: "1 day ago",    status: "info" },
  { id: 3, action: "Walrus blob '0x44a...' pinned",      date: "2 days ago",   status: "success" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#49A5BD] flex font-sans selection:bg-[#49A5BD]/20">
      
      {/* ── Sidebar overlay (mobile) ─────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#49A5BD]/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ──────────────────────────────────────── */}
      <aside
        className={[
          "fixed top-0 left-0 h-full w-[280px] bg-[#FFFFFF] border-r-2 border-[#49A5BD] flex flex-col z-40 transition-all duration-500 ease-in-out shadow-2xl lg:shadow-none",
          "lg:relative lg:translate-x-0 lg:flex lg:shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-8 py-10">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/omen-logo.png" alt="Omen" width={32} height={32} className="h-8 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter uppercase leading-none text-[#49A5BD]">Omen</span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#49A5BD]">Private Alpha V1.0</span>
            </div>
          </Link>
          <button
            className="ml-auto lg:hidden p-2 text-[#49A5BD] hover:bg-[#49A5BD]/5 rounded-xl transition-colors"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <XClose className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
          <div className="px-4 py-3 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD]/60 italic font-mono">Main Menu</p>
          </div>
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 group",
                link.active
                  ? "bg-[#49A5BD] text-[#FFFFFF]"
                  : "text-[#49A5BD] hover:opacity-70",
              ].join(" ")}
            >
              <link.icon className={["w-5 h-5 shrink-0 transition-transform duration-300", !link.active && "group-hover:scale-110"].join(" ")} />
              <span>{link.name}</span>
              {link.active && <div className="ml-auto w-1 h-1 rounded-full bg-[#FFFFFF]" />}
            </Link>
          ))}
        </nav>

        {/* User Card */}
        <div className="mx-4 mb-8 p-6 glass-card bg-[#FFFFFF] border-2 border-[#49A5BD] space-y-4 rounded-2xl">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#49A5BD] flex items-center justify-center text-[#FFFFFF] font-black text-sm">
               OM
             </div>
             <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-tight text-[#49A5BD]">lamar.sui</span>
                <span className="text-[9px] font-bold text-[#49A5BD] opacity-70 uppercase tracking-widest">Premium Entity</span>
             </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2.5 pt-4 border-t-2 border-[#49A5BD]/10 text-[10px] font-black uppercase tracking-widest text-[#49A5BD] hover:opacity-70 transition-colors"
          >
            <LogOut01 className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

        <header className="sticky top-0 z-20 flex items-center justify-between gap-6 px-10 py-6 bg-[#FFFFFF] border-b-2 border-[#49A5BD]">
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-[#49A5BD]/5 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu01 className="w-6 h-6 text-[#49A5BD]" />
          </button>
          
          <div className="hidden lg:flex items-center gap-4 bg-[#FFFFFF] px-5 py-3 rounded-2xl border-2 border-[#49A5BD] w-full max-w-lg transition-all focus-within:ring-2 focus-within:ring-[#49A5BD]/20 group">
            <SearchLg className="w-4 h-4 text-[#49A5BD] group-focus-within:text-[#49A5BD] transition-colors" />
            <input 
              type="text" 
              placeholder="Query protocol registry..." 
              className="bg-transparent border-none text-[11px] font-bold uppercase tracking-widest focus:ring-0 w-full placeholder:text-[#49A5BD]/40 text-[#49A5BD]" 
            />
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-lg shadow-sm">
               <span className="text-[8px] font-black text-[#49A5BD]">⌘</span>
               <span className="text-[8px] font-black text-[#49A5BD]">K</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-8">
             <div className="flex items-center gap-6 pr-6 border-r-2 border-[#49A5BD]/10">
                <button className="relative group" aria-label="Notifications">
                   <Bell01 className="w-5 h-5 text-[#49A5BD] hover:opacity-70 transition-colors" />
                   <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#49A5BD] border-2 border-[#FFFFFF] rounded-full" />
                </button>
             </div>
             <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#49A5BD]" />
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#49A5BD]">Sui Testnet Online</span>
                </div>
                <span className="text-[10px] font-bold text-[#49A5BD] opacity-70 uppercase">Sync Latency: 42ms</span>
             </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[#FFFFFF] selection:bg-[#49A5BD]/10">
          <div className="max-w-7xl mx-auto p-10 space-y-12 pb-24">

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 animate-fade-up">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="h-px w-10 bg-[#49A5BD]" />
                   <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#49A5BD]">Protocol Overview</span>
                 </div>
                 <h1 className="text-5xl md:text-7xl font-black text-[#49A5BD] tracking-tighter uppercase leading-[0.9] font-outfit">Identity Console</h1>
                 <p className="text-xl text-[#49A5BD] font-bold max-w-xl leading-relaxed">Master view of your soulbound reputational primitives and deep-graph agent lineage.</p>
              </div>
              <div className="flex gap-5">
                 <Link href="/dashboard/history">
                    <Button variant="secondary" className="bg-[#FFFFFF] border-2 border-[#49A5BD] text-[#49A5BD] text-[11px] font-black uppercase tracking-widest px-8 h-14 hover:scale-105 transition-all">Audit History</Button>
                 </Link>
                 <Link href="/alpha">
                    <Button className="bg-[#49A5BD] hover:bg-[#49A5BD]/90 text-[#FFFFFF] border-none px-10 h-14 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all group hover:scale-105">
                      Manage Badge <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </Link>
              </div>
            </div>


            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up delay-100">
              {[
                { label: "Omen Trust Score", value: "92 / 100", sub: "Institutional Prime", icon: ShieldTick, color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]" },
                { label: "Active Lineage", value: "08", sub: "Verified Entities", icon: GitBranch01, color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]" },
                { label: "Storage Pinned", value: "24.8 GB", sub: "Walrus Network", icon: Database01, color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]" },
                { label: "Security Health", value: "Optimal", sub: "No active risk", icon: Activity, color: "text-[#49A5BD]", bg: "bg-[#FFFFFF]" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#FFFFFF] p-8 rounded-[32px] border-2 border-[#49A5BD] transition-all duration-500 group relative overflow-hidden text-[#49A5BD]">
                   <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-2xl border-2 border-[#49A5BD] flex items-center justify-center ${stat.color} group-hover:bg-[#49A5BD] group-hover:text-[#FFFFFF] transition-all duration-500`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[10px] font-black uppercase text-[#49A5BD] opacity-50 tracking-widest">Alpha V1.0</span>
                         <span className="text-[8px] font-bold text-[#49A5BD] uppercase tracking-tighter">Live</span>
                      </div>
                   </div>
                   <p className="text-[10px] font-black uppercase text-[#49A5BD] opacity-70 tracking-widest mb-2">{stat.label}</p>
                   <div className="flex items-baseline gap-2">
                     <p className="text-3xl font-black text-[#49A5BD] tracking-tighter">{stat.value}</p>
                   </div>
                   <p className="text-[10px] font-bold text-[#49A5BD] opacity-70 uppercase tracking-wider mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 animate-fade-up delay-200">
               
               {/* Left Column: Lineage & Storage */}
               <div className="space-y-10">
                  
                  {/* Walrus Area */}
                  <div className="glass-card bg-[#FFFFFF] border-2 border-[#49A5BD] overflow-hidden rounded-[40px]">
                     <div className="px-10 py-8 border-b-2 border-[#49A5BD]/10 flex items-center justify-between bg-[#FFFFFF]">
                        <div className="space-y-1">
                           <h3 className="text-2xl font-black uppercase tracking-tighter text-[#49A5BD]">Walrus Storage Blobs</h3>
                           <p className="text-[10px] font-bold text-[#49A5BD] opacity-70 uppercase tracking-widest italic">Immutable encryption layer</p>
                        </div>
                        <Button size="sm" className="bg-[#49A5BD] hover:bg-[#49A5BD]/90 text-[#FFFFFF] border-none text-[10px] font-black uppercase tracking-widest px-6 h-10 rounded-xl">Upload Data</Button>
                     </div>
                     <div className="p-10 space-y-4">
                        {[
                          { name: "protocol_audit_v4.pdf", size: "12.2 MB", hash: "walrus://0x882...91a", status: "Active", time: "2h ago" },
                          { name: "agent_behavior_spec.json", size: "2.4 MB", hash: "walrus://0xf2a...c02", status: "Active", time: "1d ago" },
                          { name: "lineage_graph_root.bin",   size: "844 KB", hash: "walrus://0xbe3...001", status: "Syncing", time: "Just now" },
                        ].map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-6 bg-[#FFFFFF] rounded-2xl border-2 border-[#49A5BD]/10 group hover:border-[#49A5BD] transition-all duration-300">
                             <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center group-hover:bg-[#49A5BD] transition-all">
                                   <File02 className="w-5 h-5 text-[#49A5BD] group-hover:text-[#FFFFFF] transition-colors" />
                                </div>
                                <div>
                                   <p className="text-[13px] font-black text-[#49A5BD] mb-0.5">{file.name}</p>
                                   <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-bold text-[#49A5BD] opacity-70 uppercase tracking-widest">{file.size}</span>
                                      <div className="w-1 h-1 rounded-full bg-[#49A5BD]/10" />
                                      <span className="text-[10px] font-mono font-bold text-[#49A5BD] tracking-tighter">{file.hash}</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex flex-col items-end gap-1">
                                <span className={["text-[9px] font-black uppercase px-3 py-1 rounded-full border-2 border-[#49A5BD]", file.status === "Syncing" ? "opacity-50" : ""].join(" ")}>
                                  {file.status}
                                </span>
                                <span className="text-[8px] font-bold text-[#49A5BD] opacity-70 uppercase">{file.time}</span>
                             </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Agent Lineage Graph */}
                   <div className="glass-card bg-[#FFFFFF] border-2 border-[#49A5BD] p-10 rounded-[40px]">
                      <div className="flex items-center justify-between mb-10">
                         <div className="space-y-1">
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-[#49A5BD]">Deep-Graph Lineage</h3>
                            <p className="text-[11px] font-black text-[#49A5BD] opacity-70 uppercase tracking-[0.25em] italic">Encrypted entity relationships</p>
                         </div>
                         <GitBranch01 className="w-6 h-6 text-[#49A5BD]" />
                      </div>
                     <div className="relative p-10 border-2 border-[#49A5BD]/10 rounded-[32px] bg-[#FFFFFF] overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFFFF]/40 rotate-12 -mr-32 -mt-32 rounded-[64px]" />
                        <div className="flex items-center gap-8 relative z-10">
                           <div className="w-20 h-20 rounded-[28px] bg-[#49A5BD] flex items-center justify-center text-[#FFFFFF] font-black text-2xl relative">
                              OM
                                 <ShieldTick className="w-3.5 h-3.5 text-white" />
                              </div>
                           <div className="flex-1 space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD]">Root Principal Badge</p>
                              <h4 className="text-2xl font-black uppercase tracking-tighter text-[#49A5BD]">Omen_Legacy_001</h4>
                              <div className="flex items-center gap-3">
                                 <span className="text-[9px] font-bold text-[#49A5BD] uppercase tracking-[0.2em]">Institutional ID</span>
                                 <div className="w-1 h-3 bg-[#49A5BD]/10 rotate-12" />
                                 <span className="text-[9px] font-bold text-[#49A5BD] uppercase tracking-[0.2em] font-mono">Rank: Apex</span>
                              </div>
                           </div>
                        </div>
                        <div className="mt-10 ml-24 space-y-4 border-l-2 border-[#49A5BD]/10 pl-10 relative">
                           <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-b-2 border-[#49A5BD]/10 -ml-[2px] rounded-bl-3xl" />
                           {[
                             { name: "TradeBot_Alpha_v2", trust: 98, status: "Active" },
                             { name: "Liquidity_Master_Proxy", trust: 94, status: "Active" },
                             { name: "Risk_Mitigation_Agent", trust: 91, status: "Resting" }
                           ].map((agent, i) => (
                             <div key={i} className="p-5 bg-[#FFFFFF] rounded-2xl border-2 border-[#49A5BD]/10 flex items-center justify-between hover:translate-x-2 transition-all duration-300 text-[#49A5BD]">
                                <div className="flex items-center gap-3">
                                   <div className={`w-2 h-2 rounded-full bg-[#49A5BD] ${agent.status !== "Active" ? "opacity-30" : ""}`} />
                                   <span className="text-[11px] font-black uppercase tracking-widest">{agent.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                   <span className="text-[10px] font-black uppercase opacity-70 tracking-widest">Trust</span>
                                   <span className="text-sm font-black">{agent.trust}%</span>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>

                {/* Right Column: Physical Badge & Activity */}
                <div className="space-y-10">
                   
                   {/* Badge Physical Representation */}
                  <div className="bg-[#49A5BD] rounded-[48px] p-10 text-[#FFFFFF] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-700">
                     <div className="relative z-10 space-y-12">
                        <div className="flex justify-between items-start">
                           <div className="w-14 h-14 bg-[#FFFFFF]/10 rounded-2xl border-2 border-[#FFFFFF] flex items-center justify-center text-[#FFFFFF]">
                              <ShieldTick className="w-8 h-8" />
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="text-[9px] font-black tracking-[0.4em] text-[#FFFFFF]/70 uppercase">Sui Network</span>
                              <span className="text-[10px] font-black text-[#FFFFFF] uppercase tracking-widest">Authenticated</span>
                           </div>
                        </div>
                        
                        <div className="space-y-3">
                           <h4 className="text-3xl font-black uppercase tracking-tighter leading-[0.9] text-balance">Omen Verified <br /> Institutional</h4>
                           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFFFFF] opacity-80 italic">Programmatic Identity primitive</p>
                        </div>

                        <div className="pt-10 space-y-8 border-t-2 border-[#FFFFFF]/20">
                           <div className="grid grid-cols-2 gap-6">
                              <div>
                                 <p className="text-[8px] font-black uppercase tracking-widest text-[#FFFFFF]/50 mb-1.5">Entity Handle</p>
                                 <p className="text-[11px] font-black tracking-tight text-[#FFFFFF] uppercase">lamar_ventures.sui</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-[8px] font-black uppercase tracking-widest text-[#FFFFFF]/50 mb-1.5">Registry ID</p>
                                 <p className="text-[11px] font-mono font-bold text-[#FFFFFF]">OMN-01-44B1</p>
                              </div>
                           </div>
                           <div className="w-full h-8 bg-[#FFFFFF]/10 rounded-lg border-2 border-[#FFFFFF]/20 overflow-hidden relative">
                              <div className="flex items-center justify-between px-3 h-full">
                                 <div className="flex gap-1">
                                    {[...Array(24)].map((_, i) => (
                                       <div key={i} className={`w-0.5 h-3 ${i % 3 === 0 ? 'bg-[#FFFFFF]/40' : 'bg-[#FFFFFF]/10'}`} />
                                    ))}
                                 </div>
                                 <span className="text-[8px] font-black uppercase tracking-widest text-[#FFFFFF]/60">Secured</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                   {/* Security Activity */}
                  <div className="glass-card bg-[#FFFFFF] border-2 border-[#49A5BD] p-10 rounded-[40px]">
                     <div className="flex items-center justify-between mb-8">
                        <h3 className="text-sm font-black uppercase tracking-widest text-[#49A5BD]">Security Ledger</h3>
                        <Bell01 className="w-4 h-4 text-[#49A5BD]" />
                     </div>
                     <div className="space-y-8">
                        {RECENT_ALERTS.map((alert, i) => (
                          <div key={i} className="flex gap-5 relative group text-[#49A5BD]">
                             <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 border-2 border-[#49A5BD] ${alert.status === 'success' ? 'bg-[#49A5BD]' : 'bg-[#FFFFFF]'}`} />
                             <div className="flex-1 space-y-1">
                                <p className="text-[12px] font-bold leading-snug hover:opacity-70 transition-colors">{alert.action}</p>
                                <p className="text-[9px] font-bold opacity-70 uppercase tracking-widest">{alert.date}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                     <Button variant="secondary" className="w-full mt-10 border-2 border-[#49A5BD] text-[#49A5BD] text-[9px] font-black uppercase tracking-[0.2em] h-10 rounded-xl bg-[#FFFFFF] hover:opacity-70 transition-all">Expand Security Logs</Button>
                  </div>

                   {/* Contextual CTA */}
                  <div className="p-10 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-[40px] text-[#49A5BD] relative group overflow-hidden">
                     <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                           <Activity className="w-5 h-5 text-[#49A5BD]" />
                           <h4 className="text-xl font-black uppercase tracking-tighter">System Status</h4>
                        </div>
                        <p className="text-sm font-bold leading-relaxed opacity-80 text-[#49A5BD]">Registry Alpha V1.0 is fully synced with Sui Testnet. DeepBook V3 integration is active for all gated liquidity pools.</p>
                        <Button className="w-full bg-[#49A5BD] text-[#FFFFFF] border-none text-[10px] font-black uppercase tracking-widest h-12 rounded-2xl transition-all">Protocol Terminal</Button>
                     </div>
                  </div>

               </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
