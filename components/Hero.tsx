import Image from "next/image";
import { ArrowRight, Layers, ShieldCheck, Sparkles, Server, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#0B1120] text-white pt-16 pb-24 border-b border-slate-800">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#eb8a0c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-[#eb8a0c]/40 text-xs text-amber-300 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#eb8a0c]" />
            <span className="font-semibold tracking-wide uppercase">Enterprise Systems Case Study</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Tamarind Management Limited</span>
          </div>

          {/* Group & Operating Units Crests */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center backdrop-blur-sm shadow-xl">
                <Image
                  src="/logo2.png"
                  alt="Tamarind Official Emblem"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">Group</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-xl border border-white/20">
                <Image
                  src="/dhow.jpg"
                  alt="Tamarind Dhow Mombasa Logo"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">Dhow</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-xl border border-white/20">
                <Image
                  src="/village.png"
                  alt="Tamarind Village Logo"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">Village</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Engineering High-Availability <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-[#eb8a0c] bg-clip-text text-transparent">
              Enterprise Hospitality Platforms
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-4xl mx-auto">
            A comprehensive architectural breakdown of the financial state machines, autonomous LLM analytics pipelines, and mobile edge scanners deployed across 8 mission-critical platforms for East Africa&apos;s iconic Tamarind Group.
          </p>

          {/* Architect Attribution Tag */}
          <div className="mt-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex items-start space-x-3.5">
              <Terminal className="w-5 h-5 text-[#eb8a0c] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#eb8a0c]">
                  Lead Systems Architect & Software Engineer
                </p>
                <p className="text-sm text-slate-200 mt-0.5 font-medium">
                  Dalienst Owino Oduor · Founder, Corban Technologies LTD
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Role: IT Assistant & Digital Solutions Architect at Tamarind Management Limited
                </p>
              </div>
            </div>
          </div>

          {/* CTA Group */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#case-studies"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#eb8a0c] to-[#d97706] text-white font-semibold text-sm hover:from-[#d97706] hover:to-[#eb8a0c] shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02] flex items-center space-x-2"
            >
              <Layers className="w-4 h-4" />
              <span>Explore 8 Case Studies</span>
            </a>
            <a
              href="#roi"
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-all flex items-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#eb8a0c]" />
              <span>Review Measurable ROI</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
