"use client";

import { motion } from "framer-motion";
import { Lock01, SearchLg, AlertTriangle, ShieldTick } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function EverydayUsersSection() {
  return (
    <section id="product" className="py-32 md:py-64 relative z-10 bg-transparent" aria-labelledby="everyday-title">
      <div className="max-container flex flex-col items-center text-center relative z-10">
        
        {/* Headline */}
        <motion.h2
          id="everyday-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black tracking-tight text-[#49A5BD] mb-8 font-outfit uppercase leading-[1.1]"
        >
          Stop guessing. <br className="hidden md:block" /> Start knowing.
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="text-lg md:text-xl text-[#49A5BD] max-w-2xl mb-20 leading-relaxed font-bold tracking-tight"
        >
          In Web3 a beautiful interface can still hide a malicious team. Omen Labs helps you verify who is behind a protocol before connecting your wallet.
        </motion.p>

        {/* Visual comparison */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-[900px] mb-16">
          {/* Left card: Unverified */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="glass-card p-12 md:p-14 border-2 border-[#49A5BD] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 rounded-[40px] bg-[#FFFFFF]"
          >
            <div className="w-20 h-20 rounded-[28px] border-2 border-[#49A5BD] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <AlertTriangle className="w-10 h-10 text-[#49A5BD]" />
            </div>
            <h3 className="text-2xl font-black text-[#49A5BD] mb-4 uppercase tracking-tighter">Unverified</h3>
            <p className="text-[#49A5BD] text-[15px] font-bold leading-relaxed px-2">
              Caution: Unverified contract. Proceed at your own risk.
            </p>
          </motion.div>

          {/* Right card: Verified */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="glass-card p-12 md:p-14 border-2 border-[#49A5BD] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 rounded-[40px] bg-[#FFFFFF]"
          >
            <div className="w-20 h-20 rounded-[28px] bg-[#49A5BD] flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <ShieldTick className="w-10 h-10 text-[#FFFFFF] relative z-10" />
            </div>
            <h3 className="text-2xl font-black text-[#49A5BD] mb-4 uppercase tracking-tighter">Omen Verified</h3>
            <p className="text-[#49A5BD] text-[15px] font-bold leading-relaxed px-2">
              Verified Builder. Identity and audit history confirmed.
            </p>
          </motion.div>
        </div>

        {/* Text below cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl bg-[#FFFFFF] border-2 border-[#49A5BD] rounded-[32px] p-8 md:p-10 mb-20 group transition-all duration-500 hover:scale-[1.01]"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#49A5BD] shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lock01 className="w-7 h-7 text-[#FFFFFF]" />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#49A5BD]" />
                 <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#49A5BD]">Protocol Insight</span>
              </div>
              <p className="text-lg md:text-xl text-[#49A5BD] font-bold leading-relaxed tracking-tight">
                Just like you look for the lock icon before entering your card online, look for the Omen Badge before signing a <span className="inline-flex items-center gap-1.5 text-[#49A5BD]"><SuiIcon className="w-5 h-5 text-[#49A5BD]" /> Sui</span> transaction. <span className="text-[#49A5BD]">If it's not verified, it's not safe.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <Link href="/dashboard" className="w-full sm:w-auto">
             <Button size="lg" className="w-full px-12 py-7 rounded-2xl text-[13px] font-black uppercase tracking-widest gap-2.5 shadow-xl shadow-[#49A5BD]/10 hover:shadow-2xl hover:scale-[1.05] transition-all border-none">
               <SearchLg className="w-5 h-5" /> Search the Registry
             </Button>
          </Link>
          <Link href="/alpha" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full px-12 py-7 rounded-2xl text-[13px] font-black uppercase tracking-widest gap-2.5 bg-[#FFFFFF] border-2 border-[#49A5BD]/10 shadow-md shadow-[#49A5BD]/5 hover:shadow-xl hover:scale-[1.05] transition-all">
                <ShieldTick className="w-5 h-5" /> Demand the Badge
              </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
