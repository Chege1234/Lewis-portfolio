import { Clock } from "lucide-react";

export default function ComingSoonCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border border-dashed border-white/10 text-center opacity-40" style={{ background: "#1c1c1c" }}>
      <Clock className="w-5 h-5 text-[#C9A84C]/50" />
      <p className="text-xs font-inter font-semibold tracking-[0.15em] uppercase text-[#C9A84C]/50">
        In Progress
      </p>
      <p className="text-xs font-inter text-[#F5F0E8]/30 leading-relaxed">
        New project coming soon.
      </p>
    </div>
  );
}