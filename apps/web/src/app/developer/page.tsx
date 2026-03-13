"use client";

import * as React from "react";
import { Layout } from "@/components/layout/Layout";
import { Shield, ChevronLeft, ArrowRight } from "lucide-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DeveloperPage() {
  const { openModal } = useEarlyAccessModal();

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-[#FFFFFF] text-[#49A5BD] selection:bg-[#49A5BD]/20">
        


        <div className="max-container flex flex-col items-center justify-center py-24 lg:py-36 relative z-10">
          
          <div className="w-full max-w-[640px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 md:p-14 relative flex flex-col border-2 border-[#49A5BD] rounded-[48px] bg-[#FFFFFF]"
            >
              <div className="w-full text-center space-y-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 mb-8">
                     <div className="h-px w-6 bg-[#49A5BD]" />
                     <span className="text-[10px] font-black tracking-[0.4em] text-[#49A5BD] uppercase">
                       Protocol Induction
                     </span>
                     <div className="h-px w-6 bg-[#49A5BD]" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#49A5BD] mb-6 uppercase">
                    Developer <br /> Early Access
                  </h1>
                  <p className="text-[#49A5BD] text-lg font-bold leading-relaxed max-w-md mx-auto">
                    Be the first to integrate with the Omen Trust Layer. Join our private beta waitlist for prioritized SDK access and technical support.
                  </p>
                </div>

                <div className="pt-8 space-y-6">
                  <Button 
                    onClick={openModal}
                    size="lg" 
                    className="w-full h-16 text-xs font-black uppercase tracking-[0.2em] bg-[#49A5BD] hover:opacity-70 text-[#FFFFFF] rounded-2xl transition-all flex items-center justify-center gap-3 border-none" 
                  >
                    Join the Waitlist <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-center text-[9px] font-bold text-[#49A5BD] opacity-70 uppercase tracking-widest italic leading-relaxed">
                    Priority access is granted to active Sui ecosystem contributors <br /> and mission-critical infrastructure projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
