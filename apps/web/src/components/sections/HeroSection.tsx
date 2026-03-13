"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ShieldTick, LayersThree01, ArrowRight, CheckCircle, Zap, Terminal } from "@untitled-ui/icons-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import { EcosystemVisual } from "./EcosystemVisual";

export function HeroSection() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section
      id="hero"
      className="relative pt-32 pb-32 md:pt-48 md:pb-64 overflow-hidden bg-[#49A5BD]"
      aria-labelledby="hero-title"
    >
      <EcosystemVisual />
      
      <div className="max-container flex flex-col items-center text-center relative z-10">
        
        {/* Floating Verification Indicators - more subtle and refined */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute right-[10%] top-[20%] glass-card p-4 flex flex-col gap-3 shadow-xl w-52 bg-[#FFFFFF]"
          >
            <div className="flex items-center gap-2">
              <LayersThree01 className="w-5 h-5 text-[#49A5BD]" />
              <div className="font-bold text-xs text-[#49A5BD]">Identity linked</div>
            </div>
            <div className="h-1 w-full bg-[#49A5BD]/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-full bg-[#49A5BD]" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100, y: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute left-[8%] top-[25%] glass-card px-5 py-3 flex items-center gap-3 border-l-4 border-[#49A5BD] shadow-xl bg-[#FFFFFF] z-20"
          >
            <CheckCircle className="w-6 h-6 text-[#49A5BD]" />
            <div className="text-left">
              <div className="text-xs font-black text-[#49A5BD] uppercase tracking-tight">Private Alpha V1.0</div>
              <div className="text-[10px] text-[#49A5BD] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-70">
                Secured by <WalrusIcon className="w-3 h-3" /> Walrus
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#FFFFFF] rounded-full">
            <SuiIcon className="w-3.5 h-3.5 text-[#49A5BD]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#49A5BD]">
              Native to the Sui Stack
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#FFFFFF] rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#49A5BD] animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#49A5BD]">
              Sui Testnet Live
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FFFFFF] leading-[1.05] max-w-5xl mb-10 text-balance"
        >
          The <span className="text-[#FFFFFF]">Programmable Trust</span> <br className="hidden md:block" />
          Primitive for <span className="inline-flex items-center gap-2">Sui <SuiIcon className="w-10 h-10 md:w-16 md:h-16 text-[#FFFFFF]" /></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-black text-[#FFFFFF] uppercase tracking-[0.2em] mb-8"
        >
          Stop guessing. Start knowing.
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[#FFFFFF] max-w-3xl mb-12 leading-relaxed font-bold tracking-tight"
        >
          Web3 allows you to verify smart contracts, but it cannot verify who built them. Omen introduces a trust layer for the Sui ecosystem so wallets, apps, and AI agents can verify builder reputation before interacting with protocols.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
        >
          <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#FFFFFF] text-[#49A5BD] hover:bg-[#FFFFFF]/90 rounded-xl shadow-lg transition-all flex items-center gap-2" asChild>
            <Link href="/docs">View Docs <ArrowRight className="w-4 h-4" /></Link>
          </Button>
          <Button variant="secondary" size="lg" className="h-14 px-8 text-base font-bold bg-transparent text-[#FFFFFF] rounded-xl border-2 border-[#FFFFFF] hover:bg-[#FFFFFF]/10 transition-all flex items-center gap-2" asChild>
            <Link href="/whitepaper">Read Whitepaper <ArrowRight className="w-4 h-4" /></Link>
          </Button>
          <Button variant="secondary" size="lg" className="h-14 px-8 text-base font-bold bg-transparent text-[#FFFFFF] hover:bg-[#FFFFFF]/10 rounded-xl border-2 border-[#FFFFFF] transition-all shadow-none flex items-center gap-2" onClick={openModal}>
            Request Early Access <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Decorative elements for structural density */}
        <div className="mt-32 relative w-full max-w-[1000px] flex items-center justify-center">
          <div className="relative z-10 w-full h-px bg-[#FFFFFF]/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FFFFFF]/40 blur-sm" />
        </div>

      </div>
    </section>
  );
}
