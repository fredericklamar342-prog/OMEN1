import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "verified" | "watchlist" | "revoked" | "default";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-white/10 text-subtext bg-white/5",
    verified: "border-green-500/20 text-green-400 bg-green-500/5",
    watchlist: "border-blue-500/20 text-blue-400 bg-blue-500/5",
    revoked: "bg-accent text-white border-accent shadow-[0_0_15px_rgba(177,18,38,0.2)]",
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
