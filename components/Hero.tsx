import Image from "next/image";
import { ShieldCheck, Layers, Award, Building, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-[#00241f] via-[#002f27] to-[#003830] text-white pt-16 pb-20 border-b border-[#004d40]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Executive Tag */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#00201a] border border-[#d97706]/40 text-xs text-amber-200 mb-8 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#d97706]" />
            <span className="font-semibold tracking-wide uppercase">Executive Digitalization Briefing</span>
            <span className="text-[#005a4b]">|</span>
            <span className="text-emerald-300">Tamarind Management Limited</span>
          </div>

          {/* Unit Crests: Group, Dhow, Village */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 p-2 flex items-center justify-center shadow-md backdrop-blur-sm">
                <Image
                  src="/logo2.png"
                  alt="Tamarind Group Emblem"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-amber-200/80 font-medium mt-1.5 uppercase tracking-wider">Tamarind Group</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md border border-white/20 overflow-hidden">
                <Image
                  src="/dhow.jpg"
                  alt="Tamarind Dhow Mombasa Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-amber-200/80 font-medium mt-1.5 uppercase tracking-wider">Tamarind Dhow</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md border border-white/20 overflow-hidden">
                <Image
                  src="/village.png"
                  alt="Tamarind Village Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-amber-200/80 font-medium mt-1.5 uppercase tracking-wider">Tamarind Village</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Internal Systems Architecture &amp; <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-[#d97706] bg-clip-text text-transparent">
              Process Digitalization Initiatives
            </span>
          </h1>

          {/* Executive Subheading */}
          <p className="mt-6 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-4xl mx-auto">
            A comprehensive portfolio of internal platforms, applied AI tools, and workflow automation architected and deployed by <strong className="text-white font-semibold">Dalienst Owino Oduor</strong> (IT Assistant &amp; Digital Solutions Architect) across Tamarind Mombasa, Tamarind Dhow, Tamarind Village, and Group Operations.
          </p>

          {/* Executive Note to Directors */}
          <div className="mt-8 p-5 rounded-2xl bg-[#00201a]/90 border border-[#004d40] text-left max-w-3xl mx-auto shadow-md">
            <div className="flex items-start space-x-3.5">
              <Building className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-amber-300">
                  Directorate Summary &amp; Scope of Work
                </p>
                <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 leading-relaxed">
                  Working directly under the General Manager, Financial Controller, Operations Heads, and HR to convert manual, paper-heavy workflows into secure, high-availability digital tools—stopping revenue leakages, enforcing financial audit compliance, and delivering real-time operational visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Key Verification Metrics Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#002b24] border border-[#004d40]">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300 block">8</span>
              <span className="text-xs font-semibold text-white mt-0.5 block">Deployed Platforms</span>
              <span className="text-[11px] text-emerald-200/60 leading-tight block mt-0.5">Finance, AI, Marine, HR, Web</span>
            </div>

            <div className="p-4 rounded-xl bg-[#002b24] border border-[#004d40]">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300 block">75%</span>
              <span className="text-xs font-semibold text-white mt-0.5 block">Faster Credit Notes</span>
              <span className="text-[11px] text-emerald-200/60 leading-tight block mt-0.5">4-tier digital approval pipeline</span>
            </div>

            <div className="p-4 rounded-xl bg-[#002b24] border border-[#004d40]">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300 block">&lt; 24h</span>
              <span className="text-xs font-semibold text-white mt-0.5 block">Guest Issue SLA</span>
              <span className="text-[11px] text-emerald-200/60 leading-tight block mt-0.5">Conversational AI analyst</span>
            </div>

            <div className="p-4 rounded-xl bg-[#002b24] border border-[#004d40]">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300 block">&lt; 400ms</span>
              <span className="text-xs font-semibold text-white mt-0.5 block">Jetty QR Check-In</span>
              <span className="text-[11px] text-emerald-200/60 leading-tight block mt-0.5">Daily food cost % visibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
