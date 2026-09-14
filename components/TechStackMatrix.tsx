import { Layers, Server, Database, Cloud } from "lucide-react";

export default function TechStackMatrix() {
  const layers = [
    {
      name: "Layer 01 · Client Interfaces & Mobile Edge",
      icon: Layers,
      description: "Mobile-first Progressive Web Apps delivering high-concurrency responsiveness and client-side camera scanning.",
      techs: [
        { name: "Next.js App Router", purpose: "Server-side rendering, layout streaming & edge caching" },
        { name: "TypeScript", purpose: "End-to-end type safety & strict API contract enforcement" },
        { name: "html5-qrcode", purpose: "Client-side video stream canvas decoding for sub-second QR scans" },
        { name: "TailwindCSS v4", purpose: "Modern responsive utility styling & dark-mode aesthetics" }
      ]
    },
    {
      name: "Layer 02 · Backend Core & State Engines",
      icon: Server,
      description: "Transactional state machines preventing invalid business status transitions and generating verified documents.",
      techs: [
        { name: "Next.js Server Actions", purpose: "Type-safe RPC boundary with zero REST boilerplates" },
        { name: "Finite State Machine", purpose: "Strict 4-tier financial approval sequence with zero bypass" },
        { name: "PDF-lib", purpose: "Automated generation of audit credit notes & cryptographic tickets" },
        { name: "Node.js Crypto", purpose: "Tamper-evident verification nonces & signed ticket hashes" }
      ]
    },
    {
      name: "Layer 03 · Persistence & Audit Governance",
      icon: Database,
      description: "Strict relational database modeling with foreign key integrity and immutable event tracking.",
      techs: [
        { name: "PostgreSQL", purpose: "ACID compliant relational storage with row-level transaction safety" },
        { name: "Prisma ORM", purpose: "Type-safe database client, migrations & relational modeling" },
        { name: "Immutable Audit Loggers", purpose: "Dedicated append-only tracking tables for all financial mutations" },
        { name: "Connection Pooling", purpose: "High-throughput database connections during peak dining hours" }
      ]
    },
    {
      name: "Layer 04 · AI, Telecom & Integration APIs",
      icon: Cloud,
      description: "Mission-critical external services, cellular payment rails, and autonomous generative intelligence.",
      techs: [
        { name: "Safaricom Daraja 2.0 API", purpose: "Real-time M-Pesa STK push checkout & webhook reconciliation" },
        { name: "GPT-4o & Claude 3.5 Sonnet", purpose: "RAG guest sentiment parsing & root-cause diagnostics" },
        { name: "ProfitRoom Booking API", purpose: "Live rate parity & reservation sync for Tamarind Village" },
        { name: "Resend Transactional API", purpose: "Escalation notifications, executive digests & cron triggers" }
      ]
    }
  ];

  return (
    <section id="tech-matrix" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 mb-3">
            <span>Enterprise Architecture Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Comprehensive Technology Architecture
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            A cohesive 4-layer engineering stack designed for zero downtime, regulatory compliance, and rapid execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-[#eb8a0c]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {layer.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {layer.description}
                  </p>

                  <div className="space-y-3">
                    {layer.techs.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3 rounded-xl bg-slate-800/60 border border-slate-800 flex items-start justify-between gap-3"
                      >
                        <span className="text-xs font-mono font-semibold text-amber-200 shrink-0">
                          {tech.name}
                        </span>
                        <span className="text-xs text-slate-400 text-right">
                          {tech.purpose}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
