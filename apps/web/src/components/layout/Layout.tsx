import * as React from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-transparent text-[#0B1220]">
      <AtmosphericBackground />
      <Nav />
      <main className="relative z-10 flex-1 pt-28 pb-20">{children}</main>
      <footer className="relative z-10 border-t border-[rgba(14,47,118,0.08)] bg-white/20 py-12 backdrop-blur-xl">
        <div className="max-container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="group flex items-center gap-3">
            <div className="relative flex h-6 w-6 items-center justify-center">
              <div className="absolute inset-0 rotate-45 rounded-md border-[2px] border-[#0E2F76] transition-transform duration-200 group-hover:rotate-90" />
              <div className="h-2 w-2 rounded-[1px] bg-[#AAC0E1]" />
            </div>
            <span className="font-bold tracking-tight text-[#0B1220]">Omen</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/product" className="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#0E2F76]">
              Product
            </Link>
            <Link href="/docs" className="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#0E2F76]">
              Docs
            </Link>
            <Link href="/developer" className="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#0E2F76]">
              Developers
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#0E2F76]">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="max-container mt-8 text-center text-sm text-[#4A5568] md:text-left">
          <p>&copy; {new Date().getFullYear()} Omen. Trust the Builder.</p>
        </div>
      </footer>
    </div>
  );
}
