import { getWaitlistEntries } from "@/lib/actions";
import { Users } from "lucide-react";
import { WaitlistTable } from "./WaitlistTable";

export const dynamic = "force-dynamic";

export default async function AdminWaitlistPage() {
  const entries = await getWaitlistEntries();

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-20 px-4">
      <div className="max-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-2 border-[#49A5BD]/10 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-[#49A5BD]/10 text-[#49A5BD]">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#49A5BD]">
                Omen Labs Internal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#49A5BD] uppercase font-outfit">
              Waitlist Management
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center px-6 py-3 border-2 border-[#49A5BD] rounded-3xl bg-[#FFFFFF]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#49A5BD]/60">Total Signups</span>
              <span className="text-2xl font-black text-[#49A5BD]">{entries.length}</span>
            </div>
          </div>
        </div>

        <WaitlistTable initialEntries={entries} />
      </div>
    </div>
  );
}
