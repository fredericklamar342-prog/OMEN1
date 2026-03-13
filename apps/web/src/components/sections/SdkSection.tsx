"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal, ArrowRight } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";

export function SdkSection() {
  return (
    <section id="developer" className="py-32 md:py-64 relative z-10 bg-[#FFFFFF] border-t-2 border-[#49A5BD]/10 text-[#49A5BD]" aria-labelledby="sdk-title">
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-full">
              <Terminal className="w-3.5 h-3.5 text-[#49A5BD]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#49A5BD]">
                Developer Experience
              </span>
            </div>
            
             <div className="space-y-8">
              <h2 id="sdk-title" className="text-4xl md:text-6xl font-black tracking-tighter text-[#49A5BD] uppercase font-outfit">
                Simple to <span className="text-[#49A5BD]">Integrate.</span>
              </h2>
              <p className="text-xl text-[#49A5BD] leading-relaxed font-bold tracking-tight">
                Wallets, dApps, and autonomous AI agents integrate the Omen SDK to verify protocol safety before any transaction executes. A single check prevents interaction with malicious or unverified code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Performance", val: "O(1) Lookup" },
                { label: "Storage", val: <>Walrus Native <WalrusIcon className="inline-block w-4 h-4 ml-1" /></> },
                { label: "Verification", val: <>zkLogin <GoogleIcon className="inline-block w-4 h-4 ml-1" /></> },
                { label: "Execution", val: <>Sui PTBs <SuiIcon className="inline-block w-4 h-4 ml-1" /></> }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#49A5BD] opacity-70">{stat.label}</div>
                  <div className="text-lg font-bold text-[#49A5BD]">{stat.val}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#49A5BD] hover:bg-[#49A5BD]/90 text-[#FFFFFF] rounded-xl transition-all group border-none" asChild>
                <Link href="/docs" className="flex items-center">
                  Explore SDK Docs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* High-Fidelity Terminal */}
          <div className="relative animate-fade-up">
            <div className="glass-card rounded-2xl border-2 border-[#49A5BD] p-0 font-mono text-sm relative overflow-hidden bg-[#FFFFFF]">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#49A5BD] bg-[#FFFFFF]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full border-2 border-[#49A5BD] bg-[#FFFFFF]" />
                  <div className="w-3 h-3 rounded-full border-2 border-[#49A5BD] bg-[#FFFFFF]" />
                  <div className="w-3 h-3 rounded-full border-2 border-[#49A5BD] bg-[#FFFFFF]" />
                </div>
                <div className="text-[10px] text-[#49A5BD] font-bold tracking-widest uppercase font-sans">omen-sdk-integration.ts</div>
              </div>
              
              <div className="p-8 bg-[#FFFFFF]">
                <div className="text-[14px] leading-relaxed font-mono text-[#49A5BD] overflow-x-auto whitespace-pre">
{`// Sui Testnet Environment
const trustScore = await omen.getTrustScore(protocol)

if (trustScore < 85) {
  abortTransaction()
}`}
                </div>
                
                <div className="mt-12 pt-6 border-t-2 border-[#49A5BD]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#49A5BD]" />
                    <span className="text-[10px] font-mono font-bold uppercase text-[#49A5BD] tracking-widest">Omen Security Firewall Active</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#49A5BD] space-y-1 opacity-70">
                    <div className="flex items-center gap-2">&gt; Checking protocol reputation on <WalrusIcon className="w-3.5 h-3.5" /> Walrus...</div>
                    <div className="text-[#49A5BD] font-black opacity-100">&gt; Verification: [92/100] INSTITUTIONAL GRADE</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
