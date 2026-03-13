"use client";

import React, { useState, useTransition, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { submitWaitlistAction } from "@/lib/actions";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

interface WaitlistFormProps {
  onSuccess?: () => void;
  source?: string;
}

export function WaitlistForm({ onSuccess, source = "modal" }: WaitlistFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email")).trim().toLowerCase();

    // Basic client-side format validation before submission
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: ["Please enter a valid email address"] });
      return;
    }

    startTransition(async () => {
      const result = await submitWaitlistAction({ email, source });

      if (result.success) {
        // TRIGGER IN BACKGROUND FOR INSTANT FEEDBACK:
        // We don't await EmailJS so the user sees "Confirmed" immediately.
        submitEarlyAccessRegistration({ email, source }).catch(err => {
          console.error("Background EmailJS notification failed:", err);
        });

        setStatus({ type: "success", message: result.message || "" });
        formRef.current?.reset();
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        setStatus({ type: "error", message: result.error || "Submission failed" });
        if (result.details) {
          setErrors(result.details as Record<string, string[]>);
        }
      }
    });
  }

  if (status.type === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-10 text-center"
      >
        <div className="mb-6 rounded-full bg-[#49A5BD]/10 p-4 relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#49A5BD]/5 blur-xl"
          />
          <CheckCircle2 className="h-10 w-10 text-[#49A5BD] relative z-10" />
        </div>
        <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-[#49A5BD] font-outfit">
          Confirmed
        </h3>
        <p className="max-w-[260px] text-sm font-bold text-[#49A5BD]/70 leading-relaxed">
          {status.message}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="relative group">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              className="h-14 sm:h-16 px-6 sm:px-8 rounded-2xl sm:rounded-full border-2 border-[#49A5BD]/10 bg-white text-[15px] sm:text-lg font-bold text-[#49A5BD] placeholder:text-[#49A5BD]/30 focus:outline-none focus:border-[#49A5BD]/40 focus:ring-4 focus:ring-[#49A5BD]/5 transition-all shadow-sm group-hover:border-[#49A5BD]/20"
              error={!!errors.email}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isPending}
            isLoading={isPending}
            className="h-14 sm:h-16 px-8 sm:px-12 rounded-2xl sm:rounded-full bg-[#49A5BD] text-white font-black uppercase tracking-[0.2em] text-xs sm:text-sm shadow-xl shadow-[#49A5BD]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Secure Access</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <AnimatePresence>
          {status.type === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-2.5 px-2"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-[#49A5BD]/10 bg-white/50 backdrop-blur-sm px-5 py-3 shadow-[0_4px_20px_-4px_rgba(73,165,189,0.1)]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#49A5BD]">
                  {status.message}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      
      {!status.type && (
        <p className="mt-6 text-center text-[10px] sm:text-[11px] font-bold text-[#49A5BD]/40 uppercase tracking-[0.15em] leading-relaxed">
          Encrypted Storage • Early Access Priority • Ecosystem Updates
        </p>
      )}
    </div>
  );
}
