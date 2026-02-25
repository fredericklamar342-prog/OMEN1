"use client";

import * as React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { CheckCircle2 } from "lucide-react";

export default function AlphaPage() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    role: "",
    projectName: "",
    network: "",
    monthlyUsers: "",
    desiredIntegration: "",
    telegram: "",
  });

  const isValidColor = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const isFormValid = 
    formData.name.trim() !== "" &&
    isValidColor(formData.email) &&
    formData.role !== "" &&
    formData.projectName.trim() !== "" &&
    formData.network !== "" &&
    formData.desiredIntegration.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
  };

  if (status === "success") {
    return (
      <Layout>
        <div className="max-w-xl mx-auto py-32 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Application Received</h1>
          <p className="text-lg text-subtext mb-8">
            Thank you for your interest in the Omen Protocol Private Alpha. Our team will review your application and reach out via email or Telegram soon.
          </p>
          <Button onClick={() => window.location.href = "/"}>Return Home</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4">
        <PageHeader 
          title="Private Alpha Access" 
          description="Apply for early access to the Omen Protocol SDK and Registry."
        />

        <form onSubmit={handleSubmit} className="space-y-8 py-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Full Name *</label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Work Email *</label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@protocol.xyz" 
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Role *</label>
              <Select 
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select a role...</option>
                <option value="Wallet">Wallet</option>
                <option value="DEX">DEX</option>
                <option value="Protocol">Protocol</option>
                <option value="Launchpad">Launchpad</option>
                <option value="Explorer">Explorer</option>
                <option value="Other">Other</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Project Name *</label>
              <Input 
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Omen Labs" 
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Network *</label>
              <Select 
                name="network"
                value={formData.network}
                onChange={handleChange}
                required
              >
                <option value="">Select network...</option>
                <option value="Testnet">Testnet</option>
                <option value="Mainnet">Mainnet</option>
                <option value="Both">Both</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Monthly Users</label>
              <Input 
                name="monthlyUsers"
                value={formData.monthlyUsers}
                onChange={handleChange}
                placeholder="e.g. 50k+" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider">Desired Integration *</label>
            <textarea 
              name="desiredIntegration"
              value={formData.desiredIntegration}
              onChange={handleChange}
              className="flex min-h-[120px] w-full border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-subtext focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
              placeholder="How do you plan to use Omen?"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider">Optional Telegram</label>
            <Input 
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@username" 
            />
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-4">
            <Button 
              type="submit" 
              className="w-full h-12 text-lg" 
              disabled={!isFormValid || status === "loading"}
              isLoading={status === "loading"}
            >
              Submit Application
            </Button>
            <p className="text-xs text-center text-subtext uppercase tracking-widest">
              * Required fields
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
