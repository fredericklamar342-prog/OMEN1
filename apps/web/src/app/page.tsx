import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
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
      <main id="main-content">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <InfrastructureSection />
        <SdkSection />
        <AgentLineageSection />
        <WalrusStorageSection />
        <BottomCta />
      </main>
    </Layout>
  );
}
