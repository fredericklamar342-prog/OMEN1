import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "verified" | "watchlist" | "revoked" | "default";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-white/10 text-subtext bg-white/5", // Kept original default as it wasn't in the snippet
    primary:   "border-[#49A5BD]/20 text-[#49A5BD] bg-[#49A5BD]/5",
    secondary: "border-[#49A5BD]/10 text-[#49A5BD] bg-[#FFFFFF]",
    watchlist: "border-[#49A5BD]/20 text-[#49A5BD] bg-[#49A5BD]/5",
    verified:  "border-[#49A5BD] text-[#FFFFFF] bg-[#49A5BD]",
    revoked: "bg-accent text-white border-accent shadow-[0_0_15px_rgba(177,18,38,0.2)]", // Kept original revoked as it wasn't in the snippet
  };

  return (
    <div
      className={cn(
        "inline-flex items-center border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest transition-all",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
