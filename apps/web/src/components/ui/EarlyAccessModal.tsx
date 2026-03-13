"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MailCheck } from "lucide-react";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-x-hidden overflow-y-auto px-4 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#49A5BD]/10 backdrop-blur-[8px]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[720px] overflow-hidden rounded-[40px] border-2 border-[#49A5BD]/20 bg-[#FFFFFF] shadow-[0_32px_64px_-16px_rgba(73,165,189,0.15)]"
          >
            {/* Background Decorative Element */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(73,165,189,0.08),transparent_70%)]" />
            
            <button
              onClick={onClose}
              className="absolute right-8 top-8 z-20 rounded-full p-2.5 text-[#49A5BD]/40 transition-all hover:bg-[#49A5BD]/5 hover:text-[#49A5BD] active:scale-90"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full p-8 sm:p-12 md:p-16">
              <div className="mb-14 text-center relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#49A5BD]/10 bg-[#49A5BD]/[0.02] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.35em] text-[#49A5BD]"
                >
                  <MailCheck className="h-3.5 w-3.5" />
                  Request Access
                </motion.div>
                
                <h2 className="mb-4 text-4xl font-black tracking-tight text-[#49A5BD] md:text-5xl uppercase font-outfit leading-tight">
                  Join the Omen <br className="hidden sm:block" /> Waitlist
                </h2>
                <p className="mx-auto max-w-[500px] text-[16px] font-bold leading-relaxed text-[#49A5BD]/60">
                  Join the foundation of the agentic web. Secure your spot in the priority queue for early access and ecosystem insights.
                </p>
              </div>

              <div className="relative z-10">
                <WaitlistForm onSuccess={onClose} source="modal" />
              </div>
            </div>
            
            {/* Corner Decorative */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#49A5BD]/[0.02] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#49A5BD]/[0.02] rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
