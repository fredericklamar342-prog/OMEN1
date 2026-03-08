"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

interface EarlyAccessFormProps {
  layout?: "hero" | "bottom";
}

export function EarlyAccessForm({ layout = "hero" }: EarlyAccessFormProps) {
  const [email, setEmail]       = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus]     = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage]   = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list. Check your inbox.");
      } else {
        throw new Error("Error joining. Try again.");
      }
    } catch (err: any) {
      console.error("Waitlist Error:", err);
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");

      // Reset after 5s
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  /* ── Success state ─────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#2B5C92]/20 shadow-lg"
      >
        <CheckCircle className="w-5 h-5 text-[#2B5C92] mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-[#0B1220]">You're in.</p>
          <p className="text-sm text-[#5B6B82] mt-0.5">{message}</p>
        </div>
      </motion.div>
    );
  }

  /* ── Form ──────────────────────────────────────────────────────── */
  return (
    <form 
      name="early-access" 
      method="POST" 
      data-netlify="true" 
      onSubmit={handleSubmit} 
      className="relative w-full" 
      noValidate
    >
      <input type="hidden" name="form-name" value="early-access" />
      {/* Honeypot — hidden from users */}
      <input
        type="text"
        name="bot-field"
        className="hidden"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Input row */}
      <div className="flex flex-col md:flex-row gap-2">
        {/* Email */}
        <input
          id="waitlist-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "submitting"}
          className={[
            "omen-input flex-1",
            status === "error" ? "border-[#FF3B30] focus:border-[#FF3B30] focus:ring-[#FF3B30]/10" : "",
          ].join(" ")}
          aria-label="Email address"
        />


        {/* Submit */}
        <Button
          type="submit"
          isLoading={status === "submitting"}
          size="lg"
          className="shrink-0 md:w-auto w-full"
        >
          {status === "submitting" ? "Joining…" : "Join Private Alpha"}
        </Button>
      </div>

      {/* SDK Documentation — secondary text link */}
      <div className="mt-4 flex items-center gap-4">
        <a
          href="/docs"
          className="text-[11px] font-semibold uppercase tracking-widest text-[#5B6B82] hover:text-[#2B5C92] transition-colors duration-200 underline decoration-black/10 underline-offset-4 hover:decoration-[#2B5C92]/40"
        >
          SDK Documentation
        </a>
      </div>

      {/* Inline error */}
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-xs font-medium text-[#FF3B30]"
            role="alert"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
