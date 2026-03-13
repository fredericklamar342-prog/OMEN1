"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { submitWaitlistAction } from "@/lib/actions";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";

interface EarlyAccessFormProps {
  layout?: "hero" | "bottom";
}

export function EarlyAccessForm({ layout = "hero" }: EarlyAccessFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const sanitizedEmail = email.trim().toLowerCase();

    if (!sanitizedEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(sanitizedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email format.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const source = `inline-${layout}`;
      
      // 1. Register in Supabase
      const dbResult = await submitWaitlistAction({ email: sanitizedEmail, source });
      
      if (!dbResult.success) {
        throw new Error(dbResult.error || "Database registration failed");
      }

      // 2. Trigger EmailJS notification
      try {
        await submitEarlyAccessRegistration({
          email: sanitizedEmail,
          source,
        });
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr);
        // We don't crash for email failure since data is saved to DB
      }

      setStatus("success");
      setMessage(dbResult.message || "Your request is in. Check your inbox for confirmation.");
      setEmail("");
    } catch (err: unknown) {
      console.error("Form Error:", err);
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full items-center justify-center py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-3xl border-2 border-[#49A5BD] bg-[#FFFFFF] p-8 text-center shadow-xl shadow-[#49A5BD]/5 sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle,rgba(73,165,189,0.05),transparent_70%)]" />

          <div className="relative mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#49A5BD] shadow-lg shadow-[#49A5BD]/20">
              <svg className="h-8 w-8 text-[#FFFFFF]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#49A5BD] uppercase font-outfit">You&apos;re on the list</h2>
          <p className="mt-3 text-base text-[#49A5BD] sm:text-lg font-bold">{message}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={["relative w-full", layout === "bottom" ? "max-w-2xl" : ""].join(" ")}
      noValidate
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          id="waitlist-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          required
          disabled={status === "submitting"}
          className={[
            "omen-input flex-1",
            status === "error" ? "border-[#49A5BD] focus:border-[#49A5BD] focus:ring-[#49A5BD]/10" : "",
          ].join(" ")}
          aria-label="Email address"
        />

        <Button
          type="submit"
          isLoading={status === "submitting"}
          size="lg"
          className="w-full shrink-0 md:w-auto border-none"
        >
          {status === "submitting" ? "Joining..." : "Request Access"}
        </Button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-xs font-black uppercase tracking-widest text-[#49A5BD]"
            role="alert"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-4 flex items-center gap-4 px-1">
        <a
          href="/docs"
          className="text-[11px] font-black uppercase tracking-[0.2em] text-[#49A5BD] underline decoration-[#49A5BD]/20 underline-offset-4 transition-colors duration-200 hover:opacity-70"
        >
          SDK Documentation
        </a>
      </div>
    </form>
  );
}
