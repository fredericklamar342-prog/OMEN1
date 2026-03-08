import { Layout } from "@/components/layout/Layout";
import { ShieldCheck } from "lucide-react";

export default function ProductPage() {
  return (
    <Layout>
      <div className="max-container py-24 lg:py-48 flex flex-col items-center justify-center text-center mt-20">
        
        <div className="w-20 h-20 rounded-full bg-[#EAF3FA] flex items-center justify-center mb-8 relative border border-[#0E2F76]/10">
          <div className="absolute inset-0 bg-[#0E2F76]/10 rounded-full animate-ping" />
          <ShieldCheck className="w-10 h-10 text-[#0E2F76] relative z-10" />
        </div>
        
        <span className="text-[12px] font-bold tracking-[0.4em] text-[#2B5C92] uppercase mb-4">
          Core Infrastructure
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] mb-6 max-w-2xl">
          Product
        </h1>
        
        <p className="text-2xl text-[#4A5568] max-w-[600px] mb-12 font-medium">
          Coming Soon
        </p>
        
      </div>
    </Layout>
  );
}
