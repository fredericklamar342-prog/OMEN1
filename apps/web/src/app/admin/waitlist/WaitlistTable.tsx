"use client";

import React, { useState, useMemo } from "react";
import { format } from "date-fns";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/Table";
import { Search, Download, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistEntry {
  id: number;
  email: string;
  created_at: string;
}

interface WaitlistTableProps {
  initialEntries: WaitlistEntry[];
}

export function WaitlistTable({ initialEntries }: WaitlistTableProps) {
  const [search, setSearch] = useState("");

  const filteredEntries = useMemo(() => {
    return initialEntries.filter(entry => {
      const matchesSearch = entry.email.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [initialEntries, search]);

  const exportToCSV = () => {
    const headers = ["Email", "Joined"];
    const rows = filteredEntries.map(e => [
      e.email,
      format(new Date(e.created_at), "yyyy-MM-dd HH:mm:ss")
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `omen-waitlist-${format(new Date(), "yyyy-MM-dd")}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10">
      {/* Search & Filters Section */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-6">
        <div className="relative flex-1 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#49A5BD]/30 group-focus-within:text-[#49A5BD] transition-all" />
          <input 
            type="text" 
            placeholder="Search by email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-16 pl-14 pr-7 rounded-[20px] border-2 border-[#49A5BD]/5 bg-[#FFFFFF] text-[15px] text-[#49A5BD] font-bold placeholder:text-[#49A5BD]/30 focus:outline-none focus:border-[#49A5BD]/30 focus:ring-4 focus:ring-[#49A5BD]/5 transition-all shadow-sm"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={exportToCSV}
            className="h-16 px-10 rounded-full bg-[#49A5BD] text-[#FFFFFF] font-black uppercase tracking-[0.2em] text-[11px] flex items-center gap-3 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#49A5BD]/20 active:scale-95 w-full sm:w-auto justify-center"
          >
            <Download className="w-4 h-4" /> Export Ledger ({filteredEntries.length})
          </button>
        </div>
      </div>

      {/* Ledger Table Section */}
      <div className="overflow-hidden rounded-[32px] border border-[#49A5BD]/10 bg-[#FFFFFF] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#49A5BD]/[0.02] border-b border-[#49A5BD]/10">
            <TableRow>
              <TableHead className="py-7 px-10 text-[10px] font-black uppercase tracking-[0.25em] text-[#49A5BD]/60">ID</TableHead>
              <TableHead className="py-7 px-10 text-[10px] font-black uppercase tracking-[0.25em] text-[#49A5BD]/60">Email Address</TableHead>
              <TableHead className="py-7 px-10 text-[10px] font-black uppercase tracking-[0.25em] text-[#49A5BD]/60">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence mode="popLayout">
              {filteredEntries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="py-24 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-4 rounded-full bg-[#49A5BD]/5">
                        <Search className="w-8 h-8 text-[#49A5BD]/20" />
                      </div>
                      <p className="text-sm font-bold text-[#49A5BD]/40 uppercase tracking-widest leading-loose">
                        {search 
                          ? "No matches found for active filters" 
                          : "Waitlist ledger is currently empty"}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredEntries.map((entry) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={entry.id} 
                    className="group border-b border-[#49A5BD]/5 hover:bg-[#49A5BD]/[0.01] transition-all duration-300"
                  >
                    <TableCell className="py-8 px-10">
                      <span className="text-[13px] font-black text-[#49A5BD]/40 font-mono">#{entry.id}</span>
                    </TableCell>
                    <TableCell className="py-8 px-10">
                      <span className="text-[17px] font-black text-[#49A5BD] tracking-tight">{entry.email}</span>
                    </TableCell>
                    <TableCell className="py-8 px-10 whitespace-nowrap">
                      <div className="flex items-center gap-2.5 text-[11px] font-black text-[#49A5BD]/60 uppercase tracking-[0.15em]">
                        <CalendarDays className="w-3.5 h-3.5 opacity-40" />
                        {format(new Date(entry.created_at), "MMM dd, yyyy HH:mm")}
                      </div>
                    </TableCell>
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </TableBody>
        </Table>
        </div>
      </div>
    </div>
  );
}
