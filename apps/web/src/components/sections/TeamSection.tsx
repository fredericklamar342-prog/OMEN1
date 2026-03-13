"use client";

import { motion } from "framer-motion";
import { ShieldTick } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";
import { Github, Twitter } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10 border-t-2 border-[#49A5BD]/10 text-[#49A5BD]">
      <div className="max-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
          <span className="text-[11px] font-bold tracking-widest text-[#49A5BD] uppercase mb-4 flex items-center gap-2">
            <ShieldTick className="w-4 h-4" /> Built on Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#49A5BD] mb-4 uppercase font-outfit">
            The Team Behind Omen
          </h2>
          <div className="h-[2px] w-16 bg-[#49A5BD] rounded-full" />
        </div>

        {/* Team Cards Container */}
        <div className="flex justify-center animate-fade-up stagger-1">
          {/* Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 border-2 border-[#49A5BD] flex flex-col items-center text-center max-w-[400px] w-full rounded-3xl bg-[#FFFFFF]"
          >
            {/* Avatar / Initials */}
            <div className="w-24 h-24 rounded-full bg-[#49A5BD] p-[2px] mb-6 shadow-md">
              <div className="w-full h-full rounded-full bg-[#FFFFFF] flex items-center justify-center border-2 border-[#FFFFFF]">
                <span className="text-3xl font-black text-[#49A5BD] uppercase font-outfit">OM</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-[#49A5BD] mb-1 uppercase font-outfit">Founder Name</h3>
            <p className="text-[15px] text-[#49A5BD] font-bold tracking-wide uppercase mb-6">
              Creator & Lead Builder
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/OmenLabsHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#49A5BD] bg-[#FFFFFF] hover:bg-[#49A5BD] hover:text-[#FFFFFF] text-[#49A5BD] transition-all duration-300 shadow-sm"
                aria-label="X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/omenprotocol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#49A5BD] bg-[#FFFFFF] hover:bg-[#49A5BD] hover:text-[#FFFFFF] text-[#49A5BD] transition-all duration-300 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-[#49A5BD]/10 w-full">
               <p className="text-[13px] text-[#49A5BD] font-bold leading-relaxed flex items-center justify-center gap-1.5 flex-wrap">
                 Building the minimal, programmable trust layer for the <SuiIcon className="w-4 h-4" /> Sui economy. Real identity. Real security.
               </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
