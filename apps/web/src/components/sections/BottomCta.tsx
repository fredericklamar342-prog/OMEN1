"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export function BottomCta() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section className="py-32 md:py-64 relative flex flex-col items-center justify-center text-center overflow-hidden bg-[#FFFFFF] z-10 w-full">
      {/* Background Decorative Blobs - very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#49A5BD]/5 blur-[160px] rounded-full -z-10" />

      <div className="max-container relative z-10">
        <div className="animate-fade-up space-y-16">
          <div className="space-y-6">
            <h2 id="cta-title" className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#49A5BD] leading-[0.85] text-balance uppercase font-outfit">
              The Trust Layer <br />
              <span className="text-[#49A5BD]">
                for the Agentic Web.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" className="h-16 px-12 text-lg font-bold bg-[#49A5BD] text-[#FFFFFF] hover:bg-[#49A5BD]/90 rounded-2xl transition-all hover:scale-105 active:scale-95 border-none" asChild>
              <Link href="/docs">Explore Docs</Link>
            </Button>
            <Button variant="secondary" size="lg" className="h-16 px-12 text-lg font-bold bg-[#FFFFFF] text-[#49A5BD] border-2 border-[#49A5BD] hover:bg-[#49A5BD]/5 transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/whitepaper">Read Whitepaper</Link>
            </Button>
            <Button variant="secondary" size="lg" className="h-16 px-12 text-lg font-bold bg-[#FFFFFF] text-[#49A5BD] border-2 border-[#49A5BD] hover:bg-[#49A5BD]/5 transition-all hover:scale-105 active:scale-95 shadow-none" onClick={openModal}>
              Join Early Access
            </Button>
          </div>

          <div className="flex flex-col items-center gap-12 mt-32">
            <div className="h-32 w-px bg-[#49A5BD]/20" />
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.6em] text-[#49A5BD]">Private Alpha V1.0 Pulse — Verified by Sui Testnet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
