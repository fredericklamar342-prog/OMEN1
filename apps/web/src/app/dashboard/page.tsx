"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  CheckCircle, 
  FileText, 
  Settings, 
  UploadCloud, 
  Activity,
  Menu,
  X,
  LogOut,
  Bell,
  ChevronRight,
  GitBranch,
  Database,
  Search,
  AlertTriangle,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const SIDEBAR_LINKS = [
  { name: "Overview",       icon: LayoutDashboard, href: "#", active: true },
  { name: "OmenBadge",      icon: ShieldCheck,     href: "#" },
  { name: "Agent Lineage",  icon: GitBranch,       href: "#" },
  { name: "Walrus Storage", icon: Database,        href: "#" },
  { name: "My Protocols",   icon: Activity,        href: "#" },
  { name: "Developer Settings", icon: Settings,    href: "#" },
];

const RECENT_ALERTS = [
  { id: 1, action: "Trust score updated via AI Audit", date: "2 hours ago",  status: "success" },
  { id: 2, action: "New child agent 'Bot_Alpha' linked", date: "1 day ago",    status: "info" },
  { id: 3, action: "Walrus blob '0x44a...' pinned",      date: "2 days ago",   status: "success" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F4F8FB] text-[#0B1220] flex font-sans">
      
      {/* ── Sidebar overlay (mobile) ─────────────────────── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ──────────────────────────────────────── */}
      <aside
        className={[
          "fixed top-0 left-0 h-full w-[260px] bg-white border-r border-black/[0.05] flex flex-col z-40 transition-transform duration-250 ease-out",
          "lg:relative lg:translate-x-0 lg:flex lg:shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-6 py-8">
          <Image src="/omen-logo.png" alt="Omen" width={40} height={32} className="h-8 w-auto object-contain" />
          <span className="font-black text-xl tracking-tighter uppercase">Omen <span className="text-[#43B6D5]">V2.0</span></span>
          <button
            className="ml-auto lg:hidden p-1 text-[#5B6B82]"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all",
                link.active
                  ? "bg-[#43B6D5] text-white shadow-[0_10px_15px_-5px_rgba(67,182,213,0.3)]"
                  : "text-[#5B6B82] hover:text-[#43B6D5] hover:bg-[#43B6D5]/5",
              ].join(" ")}
            >
              <link.icon className="w-5 h-5 shrink-0" />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-6 border-t border-black/[0.05]">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-[#5B6B82] hover:text-[#43B6D5] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Protocol</span>
          </Link>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-black/[0.05]">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-black/5"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-[#0B1220]" />
          </button>
          
          <div className="hidden lg:flex items-center gap-4 bg-black/[0.03] px-4 py-2 rounded-full border border-black/[0.05] w-96">
            <Search className="w-4 h-4 text-[#5B6B82]" />
            <input type="text" placeholder="Search the Registry..." className="bg-transparent border-none text-xs font-bold focus:ring-0 w-full" />
          </div>

          <div className="ml-auto flex items-center gap-4">
             <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#43B6D5]">Registry Mainnet</span>
                <span className="text-xs font-bold text-[#0B1220]">Sync: 0.1s</span>
             </div>
             <div className="w-10 h-10 rounded-xl bg-[#43B6D5] flex items-center justify-center text-white font-black shadow-lg">
               92
             </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-gradient-to-br from-[#F4F8FB] to-white">
          <div className="max-w-6xl mx-auto space-y-8 pb-16">

            {/* Preview Banner */}
            <div className="bg-[#43B6D5] text-white p-4 rounded-2xl flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(67,182,213,0.5)]">
               <div className="flex items-center gap-3">
                  <Info className="w-5 h-5" />
                  <p className="text-sm font-bold uppercase tracking-wider">Protocol Dashboard Preview — V2.0 Testing Active</p>
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Alpha Branch</span>
            </div>

            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                 <h1 className="text-4xl font-black text-[#0B1220] uppercase tracking-tighter">Identity Overview</h1>
                 <p className="text-[#5B6B82] font-medium">Manage your soulbound OmenBadge and linked agent lineage.</p>
              </div>
              <div className="flex gap-3">
                 <Button variant="secondary" className="glass-panel border-black/5">Export Audit Trail</Button>
                 <Button className="bg-[#43B6D5] text-white border-none shadow-lg">Edit Badge Metadata</Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Omen Trust Score", value: "92 / 100", sub: "Institutional Grade", icon: ShieldCheck, color: "text-[#43B6D5]" },
                { label: "Linked Agents", value: "04", sub: "Active lineage", icon: GitBranch, color: "text-[#0B1220]" },
                { label: "Walrus Blobs", value: "12.4 GB", sub: "On-chain proof sync", icon: Database, color: "text-[#0B1220]" },
                { label: "Protocol Health", value: "OPTIMAL", sub: "No active slashing", icon: Activity, color: "text-green-500" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-black/[0.05] shadow-sm hover:shadow-md transition-shadow group">
                   <div className="flex items-center justify-between mb-4">
                      <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-[10px] font-black uppercase text-[#5B6B82]/40 tracking-widest">v2.0</span>
                   </div>
                   <p className="text-[10px] font-black uppercase text-[#5B6B82] tracking-widest mb-1">{stat.label}</p>
                   <p className="text-2xl font-black text-[#0B1220] tracking-tighter mb-1">{stat.value}</p>
                   <p className="text-xs font-bold text-[#5B6B82]/60 uppercase tracking-wider">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Left Column: Lineage & Storage */}
               <div className="lg:col-span-2 space-y-8">
                  
                  {/* Walrus Area */}
                  <div className="bg-white rounded-[40px] border border-black/[0.05] overflow-hidden shadow-sm">
                     <div className="p-8 border-b border-black/[0.03] flex items-center justify-between">
                        <h3 className="text-xl font-black uppercase tracking-tight">Walrus Storage Blobs</h3>
                        <Button size="sm" variant="secondary" className="text-[10px] uppercase font-black tracking-widest px-4">Upload New Audit</Button>
                     </div>
                     <div className="p-8 space-y-4">
                        {[
                          { name: "main_bridge_audit_v4.pdf", size: "8.2 MB", hash: "walrus://0x882...91a", status: "Pinned" },
                          { name: "trading_engine_spec.json", size: "1.4 MB", hash: "walrus://0xf2a...c02", status: "Pinned" },
                          { name: "agent_risk_profile.mcp",   size: "244 KB", hash: "walrus://0xbe3...001", status: "Syncing" },
                        ].map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-black/[0.02] rounded-2xl border border-black/[0.03] group hover:bg-white hover:shadow-lg transition-all">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.05] flex items-center justify-center">
                                   <FileText className="w-5 h-5 text-[#5B6B82]" />
                                </div>
                                <div>
                                   <p className="text-xs font-black text-[#0B1220]">{file.name}</p>
                                   <p className="text-[10px] font-bold text-[#5B6B82] uppercase tracking-widest">{file.size} • {file.hash}</p>
                                </div>
                             </div>
                             <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-white border border-black/[0.05]">{file.status}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Agent Lineage Preview */}
                  <div className="bg-white rounded-[40px] border border-black/[0.05] p-8 shadow-sm">
                     <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black uppercase tracking-tight">Agent Lineage Graph</h3>
                        <GitBranch className="w-5 h-5 text-[#43B6D5]" />
                     </div>
                     <div className="relative p-8 border border-black/[0.03] rounded-3xl bg-black/[0.01]">
                        <div className="flex items-center gap-8 relative z-10">
                           <div className="w-16 h-16 rounded-3xl bg-[#43B6D5] flex items-center justify-center text-white font-black text-xl shadow-xl">OM</div>
                           <div className="flex-1">
                              <p className="text-xs font-black uppercase tracking-widest text-[#5B6B82] mb-1">Root Parent Badge</p>
                              <h4 className="text-xl font-black uppercase tracking-tighter">Omen Founder Badge #001</h4>
                              <p className="text-[10px] font-bold text-[#43B6D5] uppercase tracking-[0.3em]">Institutional ID • LVL 100</p>
                           </div>
                        </div>
                        <div className="mt-8 ml-20 space-y-4 border-l-2 border-[#43B6D5]/20 pl-8">
                           <div className="p-4 bg-white rounded-2xl border border-black/[0.05] flex items-center justify-between">
                              <span className="text-xs font-black uppercase tracking-widest">A1 • TradeBot_v2</span>
                              <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase">Trust: 98</span>
                           </div>
                           <div className="p-4 bg-white rounded-2xl border border-black/[0.05] flex items-center justify-between">
                              <span className="text-xs font-black uppercase tracking-widest">A2 • Liquidity_Manager</span>
                              <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full uppercase">Trust: 94</span>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

               {/* Right Column: Identity Card & Activity */}
               <div className="space-y-8">
                  
                  {/* Badge Physical Representation */}
                  <div className="bg-[#0B1220] rounded-[40px] p-8 text-white relative overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#43B6D5]/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                     <div className="relative z-10 space-y-8">
                        <div className="flex justify-between items-start">
                           <ShieldCheck className="w-10 h-10 text-[#43B6D5]" />
                           <span className="text-[10px] font-black tracking-[0.5em] opacity-40 uppercase">Sui Soulbound Identity</span>
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Omen Verified Pro</h4>
                           <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#43B6D5]">Programmatic Reputation Object</p>
                        </div>
                        <div className="pt-8 grid grid-cols-2 gap-4 border-t border-white/10">
                           <div>
                              <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-1">Object ID</p>
                              <p className="text-[10px] font-mono font-bold">0xamen...44b1</p>
                           </div>
                           <div>
                              <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-1">Issued Date</p>
                              <p className="text-[10px] font-mono font-bold">MAR 11 2026</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Activity Log */}
                  <div className="bg-white rounded-[40px] border border-black/[0.05] p-8 shadow-sm">
                     <h3 className="text-sm font-black uppercase tracking-widest mb-6">Security Events</h3>
                     <div className="space-y-6">
                        {RECENT_ALERTS.map((alert, i) => (
                          <div key={i} className="flex gap-4">
                             <div className={`w-2 h-2 rounded-full mt-1.5 ${alert.status === 'success' ? 'bg-[#43B6D5]' : 'bg-[#AAC0E1]'}`} />
                             <div className="flex-1 space-y-1">
                                <p className="text-xs font-bold text-[#0B1220] leading-tight">{alert.action}</p>
                                <p className="text-[10px] font-bold text-[#5B6B82]/60 uppercase tracking-widest">{alert.date}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Action Card */}
                  <div className="p-8 bg-gradient-to-tr from-[#2A8FA8] to-[#43B6D5] rounded-[40px] text-white shadow-xl">
                     <h4 className="text-lg font-black uppercase italic mb-4">Gated Pools Active</h4>
                     <p className="text-sm font-bold leading-relaxed mb-6 opacity-80">Your OmenBadge currently meets the DeepBook institutional gateway (85+). Liquidity routing is active.</p>
                     <Button variant="secondary" className="w-full bg-white/20 border-white/40 text-white shadow-none hover:bg-white/30 text-xs font-black uppercase tracking-widest">Protocol Monitor</Button>
                  </div>

               </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
