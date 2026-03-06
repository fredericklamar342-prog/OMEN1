"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";

export function BenefitsGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent" aria-labelledby="benefits-title">
      <div className="max-container">
        <div className="flex flex-col items-center text-center mb-20 animate-fade-up">
          <span 
            className="text-[11px] font-bold tracking-widest text-[#2B5C92] uppercase mb-4"
          >
            What Omen Labs Does
          </span>
          <h2 
            id="benefits-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B1220] mb-6"
          >
            Bring Trust to Web3.
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#0C1446] to-[#B3CDE0] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-up stagger-1">
            <FeatureCard 
              title="Stay Private, Stay Verified" 
              subtitle="For Builders" 
              description="You can prove who you are without revealing your real name. Connect your GitHub or X account, and Omen quietly verifies your identity. No personal data is stored."
              icon={UserCheck}
            />
          </div>
          <div className="animate-fade-up stagger-2">
            <FeatureCard 
              title="Show Users You Are Real" 
              subtitle="For Projects" 
              description="Earn a Verified badge for your project. Users can see it and know: this is a real person behind this project, not a scammer. Trust becomes your biggest advantage."
              icon={ShieldCheck}
            />
          </div>
          <div className="animate-fade-up stagger-3">
            <FeatureCard 
              title="Add Verification in Minutes" 
              subtitle="For Developers" 
              description="Use the Omen SDK to plug trust signals into your app. It only takes a few lines of code. No complicated setup required."
              icon={Zap}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
