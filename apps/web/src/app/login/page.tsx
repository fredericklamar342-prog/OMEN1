"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Shield, ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [socialLoading, setSocialLoading] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isForgotSent, setIsForgotSent] = React.useState(false);

  // Strength calculation
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length === 0) return 0;
    if (pass.length > 5) score += 1;
    if (pass.length > 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strength = getPasswordStrength(password);
  const strengthText = ["None", "Very Weak", "Weak", "Medium", "Strong", "Great"][strength];
  const isPassStrongEnough = strength >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !isPassStrongEnough) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1200);
  };

  const handleSocialLogin = (provider: string) => {
    setSocialLoading(provider);
    setTimeout(() => {
      setSocialLoading(null);
      router.push("/dashboard");
    }, 1000);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }
    setIsForgotSent(true);
    setTimeout(() => setIsForgotSent(false), 5000);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-12 px-4 bg-gray-50/30">
        <div className="w-full max-w-md space-y-8 bg-white border border-border p-10 shadow-sm transition-all animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-none mb-4 shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-black">Welcome back to Omen.</h1>
            <p className="text-subtext">Secure access to the Sui Trust Layer.</p>
          </div>

          {isForgotSent ? (
            <div className="p-4 bg-green-50 border border-green-100 text-green-800 text-sm text-center animate-in slide-in-from-top-2">
              <p className="font-bold mb-1">Recovery Email Sent</p>
              <p>Check your inbox at <strong>{email}</strong> for instructions.</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-subtext">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 focus:ring-accent/20"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-[10px] font-bold uppercase tracking-[0.2em] text-subtext">
                  Password
                </label>
                <button 
                  onClick={handleForgotPassword}
                  className="text-[10px] font-bold text-accent hover:underline uppercase tracking-widest"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 px-4 focus:ring-accent/20"
              />
              
              {/* Password Strength Indicator */}
              {password.length > 0 && (
                <div className="space-y-2 pt-1 animate-in fade-in duration-300">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-subtext">Security Strength</span>
                    <span className={strength < 3 ? "text-red-600" : "text-green-600"}>
                      {strengthText}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-gray-100 flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className={`h-full flex-1 transition-all duration-500 ${
                          i <= strength 
                            ? (strength < 3 ? "bg-red-500" : "bg-black") 
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                  {strength < 3 && (
                    <p className="text-[9px] text-red-500 font-medium">
                      Password must be at least "Medium" strength to secure your protocol identity.
                    </p>
                  )}
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg group" 
              isLoading={isLoading}
              disabled={!email || !isPassStrongEnough || socialLoading !== null}
            >
              Sign In
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.3em]">
              <span className="bg-white px-4 text-subtext">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="secondary" 
              className="h-11 border-border/60 hover:border-foreground"
              onClick={() => handleSocialLogin("github")}
              isLoading={socialLoading === "github"}
              disabled={isLoading || (socialLoading !== null && socialLoading !== "github")}
            >
              <Github className="mr-2 w-4 h-4" />
              GitHub
            </Button>
            <Button 
              variant="secondary" 
              className="h-11 border-border/60 hover:border-foreground"
              onClick={() => handleSocialLogin("google")}
              isLoading={socialLoading === "google"}
              disabled={isLoading || (socialLoading !== null && socialLoading !== "google")}
            >
              <svg className="mr-2 w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
          </div>

          <p className="text-center text-xs text-subtext">
            Don't have an account?{" "}
            <Link href="/alpha" className="font-bold text-foreground hover:underline uppercase tracking-widest text-[10px]">
              Join the Private Alpha
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

