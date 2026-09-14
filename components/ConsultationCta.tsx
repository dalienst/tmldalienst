import { ArrowUpRight, ShieldCheck, Terminal, Globe } from "lucide-react";

export default function ConsultationCta() {
  return (
    <section id="inquire" className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#121c33] border border-slate-800 p-8 sm:p-14 overflow-hidden shadow-2xl text-center">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#eb8a0c]/10 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-amber-300 mb-6">
            <Terminal className="w-3.5 h-3.5 text-[#eb8a0c]" />
            <span>Systems Architecture & Engineering Consultation</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug max-w-2xl mx-auto">
            Ready to Architect Mission-Critical Systems for Your Enterprise?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            From high-throughput financial state machines to edge mobile scanners and generative AI pipelines, let us engineer tailored digital solutions that deliver measurable ROI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://dalienst.co.ke/#contact"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#eb8a0c] to-[#d97706] text-white font-semibold text-xs hover:from-[#d97706] hover:to-[#eb8a0c] shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02] flex items-center space-x-2"
            >
              <span>Consult with Dalienst</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.corbantechnologies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-700 hover:text-white transition-all flex items-center space-x-2"
            >
              <Globe className="w-4 h-4 text-slate-400" />
              <span>Corban Technologies LTD</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Corporate Confidentiality & Non-Disclosure Adherence Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
