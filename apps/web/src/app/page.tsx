import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { EverydayUsersSection } from "@/components/sections/EverydayUsersSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { SdkSection } from "@/components/sections/SdkSection";
import { AgentLineageSection } from "@/components/sections/AgentLineageSection";
import { WalrusStorageSection } from "@/components/sections/WalrusStorageSection";
import { BottomCta } from "@/components/sections/BottomCta";

export default function Home() {
  return (
    <Layout>
      <main id="main-content" className="space-y-0 relative">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Product Preview */}
        <EverydayUsersSection />

        {/* 3. Benefits */}
        <BenefitsSection />

        {/* 4. How Omen Works */}
        <HowItWorksSection />

        {/* 5. Built on the Sui Stack (Infrastructure) */}
        <InfrastructureSection />

        {/* 6. Developer Integration (SDK) */}
        <SdkSection />

        {/* Additional Protocol Context */}
        <AgentLineageSection />
        <WalrusStorageSection />

        {/* 7. Final CTA */}
        <BottomCta />
      </main>
    </Layout>
  );
}
