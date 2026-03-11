import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700", "800"], // Headlines
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"], // Code/wallet text
});

export const metadata: Metadata = {
  title: "Omen | Security Infrastructure",
  description: "Enterprise-grade identity and threat intelligence for decentralized ecosystems.",
  icons: {
    icon: [
      { url: "/omen-logo.png", sizes: "512x512", type: "image/png" },
      { url: "/omen-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/omen-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/omen-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/omen-logo.png",
  },
  openGraph: {
    title: "Omen | Security Infrastructure",
    description: "Enterprise-grade identity and threat intelligence for decentralized ecosystems.",
    images: [{ url: "/omen-logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Omen | Security Infrastructure",
    description: "Enterprise-grade identity and threat intelligence for decentralized ecosystems.",
    images: ["/omen-logo.png"],
  },
};


import { ToastProvider } from "@/context/ToastContext";
import { EarlyAccessModalProvider } from "@/context/EarlyAccessModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} font-inter antialiased min-h-screen bg-background text-foreground selection:bg-accent/30`}
      >
        <EarlyAccessModalProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </EarlyAccessModalProvider>
      </body>
    </html>
  );
}
