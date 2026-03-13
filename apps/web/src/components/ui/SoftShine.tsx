import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SoftShineProps {
  className?: string;
}

export function SoftShine({ className }: SoftShineProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* subtle grid texture - strictly teal */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #49A5BD 1px, transparent 1px), linear-gradient(to bottom, #49A5BD 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* glows - global ambience integration */}
      <div className="absolute -top-40 left-1/4 h-[800px] w-[800px] rounded-full bg-[#49A5BD]/10 blur-[140px] opacity-25" />
      <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#49A5BD]/10 blur-[120px] opacity-20" />
    </div>
  );
}
