import * as React from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden bg-transparent text-[#0B1220]">
      <AtmosphericBackground />
      <Nav />
      <main className="flex-1 relative z-10 pt-28 pb-20">
        {children}
      </main>
      <footer className="border-t border-[rgba(14, 47, 118, 0.08)] py-12 relative z-10 bg-white/20 backdrop-blur-xl">
        <div className="max-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 group">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 border-[2px] border-[#0E2F76] rounded-md rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="w-2 h-2 bg-[#AAC0E1] rounded-[1px]" />
            </div>
            <span className="font-bold tracking-tight text-[#0B1220]">
              Omen
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#docs" className="text-sm font-medium text-[#4A5568] hover:text-[#0E2F76] transition-colors">
              Docs
            </Link>
            <Link href="#developers" className="text-sm font-medium text-[#4A5568] hover:text-[#0E2F76] transition-colors">
              Developers
            </Link>
            <Link href="#blog" className="text-sm font-medium text-[#4A5568] hover:text-[#0E2F76] transition-colors">
              Blog
            </Link>
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#0E2F76] transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm font-medium text-[#4A5568] hover:text-[#0E2F76] transition-colors">
              X
            </a>
          </div>
        </div>
        <div className="max-container mt-8 text-center md:text-left text-sm text-[#4A5568]">
          <p>© {new Date().getFullYear()} Omen. Trust the Builder.</p>
        </div>
      </footer>
    </div>
  );
}
