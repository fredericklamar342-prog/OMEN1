import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ListChecks,
  ChevronRight
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      id: "install",
      title: "Install",
      icon: <Terminal className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">Add the Omen SDK to your project via your preferred package manager.</p>
          <div className="bg-foreground p-6 font-mono text-sm shadow-sm">
            <code className="text-background block">npm install @omen-labs/sdk</code>
          </div>
        </div>
      )
    },
    {
      id: "quickstart",
      title: "Quickstart",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">Initialize the client and start querying trust scores immediately.</p>
          <div className="bg-foreground p-6 font-mono text-sm shadow-sm overflow-x-auto">
            <code className="text-background block whitespace-pre">
{`import { OmenSDK } from '@omen-labs/sdk';

const omen = new OmenSDK({ network: 'mainnet' });
const { score, status } = await omen.getTrustScore(CONTRACT_ADDRESS);`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "reader",
      title: "Reader Module",
      icon: <Activity className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">The Reader module provides granular access to risk breakdowns and historical trust signals.</p>
          <div className="bg-foreground p-6 font-mono text-sm shadow-sm overflow-x-auto">
            <code className="text-background block whitespace-pre">
{`const details = await omen.reader.getBreakdown(CONTRACT_ADDRESS);
console.log(details.identity_score); // 0-100`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "shield",
      title: "Shield Middleware",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">Inject security assertions into your transaction pipeline to prevent malicious interactions at the edge.</p>
          <div className="bg-foreground p-6 font-mono text-sm shadow-sm overflow-x-auto">
            <code className="text-background block whitespace-pre">
{`await omen.shield.enforce(tx, {
  target: POOL_ID,
  minTrustScore: 85,
  categories: ['defi', 'bridge']
});`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "thresholds",
      title: "Threshold Guidance",
      icon: <CheckCircle2 className="w-5 h-5" />,
      content: (
        <div className="border border-border p-6 space-y-4">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="font-bold font-mono text-green-600">80+</span>
              <span className="text-subtext">Safe for retail. Recommended for default whitelisting.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold font-mono text-orange-600">50-79</span>
              <span className="text-subtext">Caution required. Trigger secondary confirmation or disclosure UI.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold font-mono text-accent">0-49</span>
              <span className="text-subtext">High Risk. Block by default in user-facing applications.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "checklist",
      title: "Integration Checklist",
      icon: <ListChecks className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          {[
            "Secure API Key in environment variables",
            "Implement fail-safe logic for offline periods",
            "Set appropriate trust thresholds per module",
            "Configure real-time signal listeners",
            "Verify contract addresses on SuiScan"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 border-b border-border py-4">
              <div className="w-4 h-4 border border-foreground flex items-center justify-center">
                <div className="w-2 h-2 bg-foreground" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <PageHeader 
          title="Developer Documentation" 
          description="Build trust directly into your protocol using the Omen SDK."
        />

        <div className="grid md:grid-cols-[200px_1fr] gap-16 py-12">
          {/* Sidebar Nav */}
          <aside className="hidden md:block">
            <nav className="sticky top-32 space-y-1">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="flex items-center justify-between group p-2 text-xs font-bold uppercase tracking-widest text-subtext hover:text-foreground hover:bg-gray-50 transition-all"
                >
                  {s.title}
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-24">
            {sections.map(s => (
              <section key={s.id} id={s.id} className="scroll-mt-32 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent text-white flex items-center justify-center shadow-lg">
                    {s.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">{s.title}</h2>
                </div>
                {s.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
