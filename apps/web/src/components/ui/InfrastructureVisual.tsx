"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function InfrastructureVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center pointer-events-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(177,18,38,0.08)_0%,transparent_70%)] animate-pulse-subtle" />
      
      {/* Abstract Grid SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 500 500">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Rotating Core System */}
      <div className="relative w-4/5 h-4/5 flex items-center justify-center">
        {/* Layer 1: Outer Slow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-white/5 rounded-full"
        />
        
        {/* Layer 2: Dashed Counter-Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[10%] border border-dashed border-white/10 rounded-full"
        />

        {/* Layer 3: Accent Ring Segment */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[20%] border-t border-accent/40 rounded-full"
        />

        {/* Data Nodes Cluster */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1], 
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                top: `${50 + 35 * Math.sin(i * (Math.PI / 6))}%`,
                left: `${50 + 35 * Math.cos(i * (Math.PI / 6))}%`,
                boxShadow: "0 0 8px #49A5BD",
              }}
            />
          ))}
        </div>

        {/* Central Identity Monolith */}
        <div className="relative w-32 h-32 glass-card ring-premium rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "200% 200%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%]"
          />
          <div className="relative z-10 w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-white/20 rotate-45" />
            <div className="w-4 h-4 bg-white shadow-[0_0_15px_white]" />
          </div>
        </div>

        {/* Floating Security Badges */}
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[10%] -right-4 px-3 py-1.5 glass-card border-accent/30 rounded-sm"
        >
          <span className="text-[9px] font-mono text-accent uppercase tracking-tighter">mTLS: Active</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[20%] -left-10 px-3 py-1.5 glass-card border-white/10 rounded-sm"
        >
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Node: SUI-PRIME</span>
        </motion.div>
      </div>

      {/* Cyber-Scanning Laser Line */}
      <motion.div
        animate={{ top: ["-5%", "105%", "-5%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-20"
      >
        <div className="absolute inset-0 blur-[2px] bg-accent/50" />
      </motion.div>

      {/* Peripheral Data Readouts */}
      <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 opacity-20 font-mono text-[8px] text-white tracking-widest uppercase">
        <span>sys.status: optimal</span>
        <span>integrity.chk: 100%</span>
        <span>latency: 14ms</span>
      </div>
    </div>
  );
}
