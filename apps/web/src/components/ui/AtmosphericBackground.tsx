"use client";

import React from "react";

export function AtmosphericBackground() {
  return (
    <div className="atmos-bg pointer-events-none bg-[#FFFFFF]" aria-hidden="true">
      {/* Deep Atmosphere - Static Global Blurs for zero repaint cost */}
      <div className="absolute rounded-full blur-[160px] w-[1200px] h-[1200px] top-[-20%] left-[-20%] bg-[#49A5BD]/10 opacity-40" />
      <div className="absolute rounded-full blur-[160px] w-[1000px] h-[1000px] top-[40%] left-[60%] bg-[#49A5BD]/5 opacity-30" />
      <div className="absolute rounded-full blur-[160px] w-[800px] h-[800px] top-[10%] left-[30%] bg-[#49A5BD]/8 opacity-35" />
      
      {/* Faint Grid and Connection Hints - Static */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #49A5BD 1px, transparent 1px), linear-gradient(to bottom, #49A5BD 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
