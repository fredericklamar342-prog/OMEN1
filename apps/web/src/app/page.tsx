import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Shield, Database, UserCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl">
          Omen is the Trust Layer for Sui.
        </h1>
        <p className="text-xl md:text-2xl text-subtext max-w-2xl mb-10">
          Verified Code ≠ Safe Intent. Omen makes identity and risk enforceable at the protocol level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="h-12 px-8 text-lg">
            <Link href="/alpha">Join Private Alpha</Link>
          </Button>
          <Button asChild variant="secondary" className="h-12 px-8 text-lg">
            <Link href="/docs">View SDK Documentation</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-border flex flex-col gap-4">
          <Database className="w-8 h-8 text-accent" />
          <h3 className="text-xl font-bold">Registry — Source of Truth</h3>
          <p className="text-subtext">
            A decentralized repository of verified protocol metadata and security audits.
          </p>
        </div>
        <div className="p-8 border border-border flex flex-col gap-4">
          <UserCheck className="w-8 h-8 text-accent" />
          <h3 className="text-xl font-bold">Badge — Programmable Identity</h3>
          <p className="text-subtext">
            Enforce granular permissions and trust levels across the entire Sui ecosystem.
          </p>
        </div>
        <div className="p-8 border border-border flex flex-col gap-4">
          <Shield className="w-8 h-8 text-accent" />
          <h3 className="text-xl font-bold">SDK Shield — Enforced Security</h3>
          <p className="text-subtext">
            Simple integration to prevent malicious transactions before they reach the chain.
          </p>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Programmable Trust.
            </h2>
            <p className="text-lg text-subtext italic">
              “If trust drops, trades fail at the blockchain level.”
            </p>
            <div className="flex items-center gap-2 text-accent font-medium">
              <span>Explore the SDK</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-foreground p-8 font-mono text-sm overflow-x-auto shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-border/20" />
              <div className="w-3 h-3 rounded-full bg-border/20" />
              <div className="w-3 h-3 rounded-full bg-border/20" />
            </div>
            <code className="text-background block whitespace-pre">
{`omen.injectSecurityAssertion(tx, {
  targetContract: POOL_ID,
  minScore: 85
});`}
            </code>
          </div>
        </div>
      </section>
    </Layout>
  );
}
