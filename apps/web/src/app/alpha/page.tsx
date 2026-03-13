"use client";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Shield, Lock, ArrowRight } from "lucide-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export default function AlphaPage() {
  const { openModal } = useEarlyAccessModal();

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0B1220] selection:bg-[#43B6D5]/20 pb-32">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#43B6D5]/5 to-transparent blur-[120px] -mr-64 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0B1220]/5 to-transparent blur-[100px] -ml-48 -mb-32 pointer-events-none" />

        <div className="max-container flex flex-col items-center justify-center pt-24 lg:pt-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#43B6D5]/20 bg-[#43B6D5]/5 rounded-full mb-4">
                <Lock className="w-3.5 h-3.5 text-[#43B6D5]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#43B6D5]">Access Level: Private Alpha</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0B1220] uppercase leading-none">
                Alpha Induction
              </h1>
              <p className="text-[#64748B] text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Secure your protocol with core infrastructure primitives. Apply for early 
                integration with the Omen Registry and Shield SDK.
              </p>
            </div>

            <div className="glass-card bg-white/40 backdrop-blur-2xl border-black/[0.03] overflow-hidden shadow-2xl rounded-[48px] relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43B6D5]/30 to-transparent" />
              
              {/* Form Header */}
              <div className="px-10 py-6 border-b border-black/[0.03] bg-white/30 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/20" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] italic">Entity_Handshake_Registry</div>
              </div>

              <div className="p-10 md:p-16 space-y-12 text-center">
                <div className="space-y-8">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-[28px] bg-[#43B6D5]/5 border border-[#43B6D5]/10 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-[#43B6D5]" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#0B1220] uppercase tracking-tighter leading-none">
                    Join the <br /> Early Registry
                  </h2>
                  <p className="text-[#64748B] text-lg font-medium leading-relaxed max-w-sm mx-auto">
                    Secure your spot in the Omen trust hierarchy. We are onboarding high-trust protocols for the next phase of the Agentic Web.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <Button 
                    onClick={openModal}
                    size="lg"
                    className="w-full h-16 bg-[#0B1220] hover:bg-[#0B1220]/90 text-white border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3" 
                  >
                    Request Early Access <ArrowRight className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center justify-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#43B6D5]" /> Verified Identity
                    </div>
                    <div className="w-[1px] h-3 bg-black/10" />
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#43B6D5]" /> Secure Node Hub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
