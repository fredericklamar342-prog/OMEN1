"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="omen-input w-full" />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="omen-input w-full min-h-[100px] py-3 resize-y" />;
}

export default function EarlyAccessPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#0B1220]">
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-4" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full max-w-[500px]"
        >
          <div className="glass-card p-10 md:p-12 relative flex flex-col items-center">
            
            <Link
              href="/"
              className="mb-8 inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-tr from-[#0C1446]/10 to-[#B3CDE0]/10 border border-[#0C1446]/20 text-[#2B5C92] hover:scale-105 transition-transform"
            >
              <Shield className="w-8 h-8" />
            </Link>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full"
                >
                  <div className="text-center space-y-2 mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220]">
                      Request Early Access
                    </h1>
                    <p className="text-[#5B6B82] text-sm">
                      Join the beta and become an early verified Web3 builder.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5B6B82]">
                        Email Address
                      </label>
                      <Input type="email" placeholder="founder@project.xyz" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5B6B82]">
                        Project Name
                      </label>
                      <Input type="text" placeholder="E.g. Omen" required />
                    </div>


                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5B6B82]">
                        Description
                      </label>
                      <Textarea placeholder="Tell us about what you're building..." required />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        isLoading={isLoading}
                      >
                        Request Access
                      </Button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#2B5C92] mb-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-[#0B1220] mb-3">You're on the list!</h2>
                  <p className="text-[#5B6B82] mb-8 max-w-[300px]">
                    We'll be in touch soon with your exclusive access to the Omen beta.
                  </p>
                  <Link href="/">
                    <Button variant="secondary" className="w-full">
                      Return to Home
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
