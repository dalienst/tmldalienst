import { TrendingUp, Clock, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

export default function RoiSummary() {
  const roiItems = [
    {
      stat: "75%",
      title: "Faster Financial Sign-off",
      platform: "Finance & Credit Note Portal",
      description: "Replaced slow physical voucher circulation with an automated 4-stage digital state machine, reducing credit note turnaround from 4 days to under 6 hours.",
      impact: "Zero duplicate postings · 100% audit trail compliance"
    },
    {
      stat: "< 24h",
      title: "Guest Issue Resolution",
      platform: "Executive AI Sentiment Analyst",
      description: "Autonomous RAG pipeline parsing hundreds of guest comments weekly, instantly flagging negative operational trends to general managers with root-cause diagnostics.",
      impact: "Sub-24h complaint turnaround · 12 hrs saved per GM/month"
    },
    {
      stat: "0%",
      title: "OTA Commission Leakage",
      platform: "Village Direct Booking Engine",
      description: "Direct ProfitRoom reservation engine integration capturing high-value direct bookings, eliminating 15-25% commission fees from third-party travel platforms.",
      impact: "Direct merchant settlement · Full rate parity control"
    },
    {
      stat: "< 1s",
      title: "Gate & Dock QR Validation",
      platform: "Dhow Core & Sherehe Events",
      description: "Client-side video stream QR canvas decoding on mobile browsers, eliminating check-in queues for daily dhow harbour cruises and high-capacity concerts like L-Boogie.",
      impact: "Zero dockside bottlenecks · 100% counterfeit prevention"
    }
  ];

  return (
    <section id="roi" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eb8a0c]/10 border border-[#eb8a0c]/30 text-xs font-semibold text-[#eb8a0c] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Quantifiable Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Measurable Operational & Financial ROI
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Enterprise software must deliver verified business value. Every platform was engineered against strict performance and return-on-investment benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roiItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#eb8a0c]/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="text-4xl font-extrabold text-[#eb8a0c] tracking-tight mb-2 group-hover:scale-105 transition-transform origin-left">
                  {item.stat}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-semibold text-amber-300/80 uppercase tracking-wider block mb-3">
                  {item.platform}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-medium text-emerald-400 block">
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
