import { TAMARIND_ARCHITECTURE_STANDARDS } from "@/lib/case-studies";
import { GitBranch, BrainCircuit, UserCheck, Smartphone, CheckCircle } from "lucide-react";

export default function ArchitecturePrinciples() {
  const icons = [GitBranch, BrainCircuit, UserCheck, Smartphone];

  return (
    <section id="standards" className="py-20 bg-[#00241f] text-white border-b border-[#004d40]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#003830] border border-[#d97706]/30 text-xs font-semibold text-amber-200 mb-3">
            <span>Engineering Tenets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core Architectural Standards Across Tamarind Fleet
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100/70 leading-relaxed">
            The foundational engineering patterns implemented to guarantee financial audit integrity, reliable uptime during peak dining hours, and rapid frontline adoption across properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TAMARIND_ARCHITECTURE_STANDARDS.map((standard, idx) => {
            const Icon = icons[idx] || GitBranch;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#002b24] border border-[#004d40] hover:border-[#d97706]/50 transition-all flex items-start space-x-4 shadow-md"
              >
                <div className="p-3 rounded-xl bg-[#003830] text-[#d97706] shrink-0 border border-[#005a4b]">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] uppercase font-bold text-amber-300 font-mono">
                      Standard 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {standard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
