"use client";

import * as React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Code,
  Fingerprint,
  Cpu,
  Shield,
  FileText,
  Activity,
  AlertCircle,
  Database,
  Terminal
} from "lucide-react";

const MOCK_PROJECTS_DETAIL: any = {
  "astra-finance": {
    name: "Astra Finance",
    score: 98,
    status: "verified",
    auditSummary: "Passed 3/3 critical audits with zero unresolved issues. Fully compliant with Omen Protocol V2.",
    identityVerification: "Full KYB (Level 3)",
    breakdown: {
      identity: 100,
      audit: 96,
      behavior: 98
    }
  },
  "nebula-loop": {
    name: "Nebula Loop",
    score: 65,
    status: "watchlist",
    auditSummary: "1 Critical issue identified in governance module (unresolved). Audit recency 45 days.",
    identityVerification: "Partial KYC (Level 1)",
    breakdown: {
      identity: 45,
      audit: 72,
      behavior: 78
    }
  },
  "void-swap": {
    name: "Void Swap",
    score: 12,
    status: "revoked",
    auditSummary: "Audits expired. Critical treasury compromise signal detected. Entity placed on global blacklist.",
    identityVerification: "Anonymous / Not Verified",
    breakdown: {
      identity: 0,
      audit: 15,
      behavior: 21
    }
  }
};

export default function ProjectPage({ params }: { params: { project: string } }) {
  const projectData = MOCK_PROJECTS_DETAIL[params.project] || {
    name: params.project.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
    score: 0,
    status: "unknown",
    auditSummary: "No audit data found.",
    identityVerification: "Not Verified",
    breakdown: { identity: 0, audit: 0, behavior: 0 }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-6">
        <motion.div
           initial={{ opacity: 0, x: -10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-subtext/40 hover:text-accent mb-12 transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            Return to Registry Cluster
          </Link>
        </motion.div>

        {/* Overview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card ring-premium p-8 md:p-16 mb-8 border border-white/5 relative overflow-hidden rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-40" />
          
          <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
            <div className="space-y-8 flex-1">
              <div className="flex items-center gap-4">
                <Badge variant={projectData.status as any}>
                  {projectData.status === "verified" ? "AUTHORIZED_ENTITY" : projectData.status.toUpperCase()}
                </Badge>
                <div className="w-[1px] h-3 bg-white/10" />
                <span className="text-[10px] text-white/20 font-mono font-bold uppercase tracking-[0.2em]">SEQ: {params.project.toUpperCase()}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight m-0 text-white italic">
                {projectData.name}
              </h1>
              <p className="text-lg text-subtext max-w-2xl leading-relaxed uppercase tracking-widest text-[11px] font-bold opacity-60">
                Comprehensive security profile and cryptographic risk evaluation for {projectData.name}.
              </p>
            </div>
            
            <div className="lg:text-right flex flex-col items-center lg:items-end justify-center">
              <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] mb-4">Protocol Trust Index</div>
              <div className="relative">
                 <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-20 animate-pulse" />
                 <div className={`text-8xl md:text-9xl font-bold font-mono tracking-tighter leading-none relative italic ${
                  projectData.score > 80 ? "text-green-500" : 
                  projectData.score > 50 ? "text-blue-400" : "text-accent"
                }`}>
                  {projectData.score.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 pt-16 mt-16 border-t border-white/5">
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] flex items-center gap-2">
                <Fingerprint className="w-3 h-3 text-accent" /> Identity Status
              </div>
              <p className="text-xl font-bold tracking-tight text-white">{projectData.identityVerification}</p>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-accent" /> Security Assessment
              </div>
              <p className="text-xs text-subtext leading-relaxed font-bold uppercase tracking-widest opacity-80">{projectData.auditSummary}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Button className="w-full h-14 uppercase tracking-widest text-[11px] font-black italic border-none shadow-[0_10px_30px_rgba(177,18,38,0.2)]">
                <FileText className="w-4 h-4 mr-2" /> Security Report
              </Button>
              <Button variant="secondary" className="w-full h-14 uppercase tracking-widest text-[11px] font-bold border-white/5 bg-white/[0.02]">
                <ExternalLink className="w-4 h-4 mr-2" /> SuiScan Artifacts
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Risk Breakdown Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Identity Integrity", value: projectData.breakdown.identity, icon: Fingerprint, delay: 0 },
            { label: "Audit Assertions", value: projectData.breakdown.audit, icon: ShieldCheck, delay: 0.1 },
            { label: "Behavioral Telemetry", value: projectData.breakdown.behavior, icon: Cpu, delay: 0.2 }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + item.delay, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 glass-card ring-premium border border-white/5 flex flex-col gap-6 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-white/5 bg-black/40 flex items-center justify-center rounded-lg group-hover:border-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">{item.label}</h3>
                </div>
                <span className="font-mono text-[9px] text-white/10 font-black">0{i+1}</span>
              </div>
              <div className="text-5xl font-bold font-mono tracking-tighter tabular-nums text-white italic">{item.value}%</div>
              <div className="w-full h-1 bg-white/5 relative rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute h-full bg-accent shadow-[0_0_15px_rgba(177,18,38,0.4)]" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Architecture */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card ring-premium p-10 md:p-16 relative overflow-hidden rounded-[32px] border border-white/5 bg-black/40 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Database className="w-32 h-32 text-white" />
          </div>
          
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="w-12 h-12 border border-accent/20 bg-accent/5 flex items-center justify-center rounded-xl">
              <Terminal className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Integration_Cluster</p>
              <h3 className="text-2xl font-bold tracking-tight uppercase italic text-white">Registry Node Implementation</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 mb-2">
                <span>CLI / Handshake</span>
                <span className="text-green-500/40 font-mono">STABLE_VECTOR</span>
              </div>
              <div className="bg-black/60 p-6 font-mono text-xs border border-white/5 rounded-xl group cursor-pointer hover:border-accent/30 transition-all relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[2px] bg-accent opacity-30" />
                <code className="text-white/80 whitespace-nowrap">
                  <span className="text-white/20">$</span> npm install <span className="text-accent">@omen-labs/registry-node</span>
                </code>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 mb-2">
                <span>TypeScript / Verified_Eval</span>
                <span className="text-accent/40 font-mono">E2E_HARDENED</span>
              </div>
              <div className="bg-black/60 p-8 font-mono text-xs border border-white/5 rounded-xl overflow-x-auto relative">
                <div className="absolute inset-y-0 left-0 w-[2px] bg-accent opacity-30" />
                <code className="text-white/40 block whitespace-pre leading-relaxed">
{`<span className="text-accent">const</span> profile = <span className="text-accent">await</span> omen.query({
  id: <span className="text-white">'${params.project}'</span>,
  force_fresh: <span className="text-white">true</span>
});

console.log(profile.is_authorized);`}
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
