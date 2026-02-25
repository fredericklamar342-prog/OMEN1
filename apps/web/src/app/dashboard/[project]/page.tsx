"use client";

import * as React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Code,
  Fingerprint,
  Cpu,
  Shield
} from "lucide-react";

const MOCK_PROJECTS_DETAIL: any = {
  "astra-finance": {
    name: "Astra Finance",
    score: 98,
    status: "verified",
    auditSummary: "Passed 3/3 critical audits with zero unresolved issues.",
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
    auditSummary: "1 Critical issue identified in governance module (unresolved).",
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
    auditSummary: "Audits expired. Critical treasury compromise signal detected.",
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
      <div className="max-w-6xl mx-auto py-12">
        <Link 
          href="/dashboard" 
          className="flex items-center gap-2 text-sm text-subtext hover:text-foreground mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Dashboard
        </Link>

        {/* Overview Section */}
        <div className="border border-border p-8 mb-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant={projectData.status as any} className="uppercase px-3 py-1">
                  {projectData.status}
                </Badge>
                <span className="text-xs text-subtext font-mono">ID: {params.project}</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tighter m-0">{projectData.name}</h1>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-subtext uppercase tracking-widest mb-1">Trust Score</div>
              <div className={`text-6xl font-black font-mono tracking-tighter ${
                projectData.score > 80 ? "text-green-600" : 
                projectData.score > 50 ? "text-orange-600" : "text-accent"
              }`}>
                {projectData.score}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold text-subtext uppercase tracking-widest mb-2">Identity Verification</div>
                <p className="text-xl font-bold">{projectData.identityVerification}</p>
              </div>
              <div>
                <div className="text-xs font-bold text-subtext uppercase tracking-widest mb-2">Audit Summary</div>
                <p className="text-subtext leading-relaxed">{projectData.auditSummary}</p>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-2">
              <Button asChild className="w-full">
                <a href="#">Download Full Report</a>
              </Button>
              <Button variant="secondary" className="w-full">View on SuiScan</Button>
            </div>
          </div>
        </div>

        {/* Risk Breakdown Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 border border-border bg-gray-50/20">
            <div className="flex items-center gap-2 mb-4">
              <Fingerprint className="w-5 h-5 text-accent" />
              <h3 className="text-xs font-bold text-subtext uppercase tracking-widest">Identity Score</h3>
            </div>
            <div className="text-4xl font-bold font-mono">{projectData.breakdown.identity}%</div>
            <div className="mt-4 w-full h-1 bg-gray-100">
              <div className="h-full bg-accent" style={{ width: `${projectData.breakdown.identity}%` }} />
            </div>
          </div>
          <div className="p-8 border border-border bg-gray-50/20">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <h3 className="text-xs font-bold text-subtext uppercase tracking-widest">Audit Score</h3>
            </div>
            <div className="text-4xl font-bold font-mono">{projectData.breakdown.audit}%</div>
            <div className="mt-4 w-full h-1 bg-gray-100">
              <div className="h-full bg-accent" style={{ width: `${projectData.breakdown.audit}%` }} />
            </div>
          </div>
          <div className="p-8 border border-border bg-gray-50/20">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-accent" />
              <h3 className="text-xs font-bold text-subtext uppercase tracking-widest">Behavior Score</h3>
            </div>
            <div className="text-4xl font-bold font-mono">{projectData.breakdown.behavior}%</div>
            <div className="mt-4 w-full h-1 bg-gray-100">
              <div className="h-full bg-accent" style={{ width: `${projectData.breakdown.behavior}%` }} />
            </div>
          </div>
        </div>

        {/* Integration Panel */}
        <div className="border border-foreground bg-foreground p-8 text-background">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-widest">Quick Integration</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-tighter text-gray-400">Terminal</div>
              <code className="block bg-white/5 p-4 text-sm font-mono">
                npm install @omen-labs/sdk
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-tighter text-gray-400">JavaScript</div>
              <code className="block bg-white/5 p-4 text-sm font-mono whitespace-pre">
{`import { OmenSDK } from '@omen-labs/sdk';

const omen = new OmenSDK({ network: 'mainnet' });
const score = await omen.getTrustScore('${params.project}');`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
