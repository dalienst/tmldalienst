import { CORE_ARCHITECTURE_PILLARS } from "@/lib/case-studies";
import { GitBranch, BrainCircuit, UserCheck, Smartphone } from "lucide-react";

export default function ArchitecturePrinciples() {
  const icons = [GitBranch, BrainCircuit, UserCheck, Smartphone];

  return (
    <section id="architecture" className="py-20 bg-[#0B1120] border-b border-slate-800">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 mb-3">
            <span>Engineering Tenets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Architectural Philosophy & System Principles
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            The core design patterns that ensure mission-critical resilience, data integrity, and lightning-fast user adoption across all deployed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_ARCHITECTURE_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx] || GitBranch;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all relative overflow-hidden"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-[#eb8a0c]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#eb8a0c]">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
