import Image from "next/image";
import { ShieldCheck, Layers, Award, Building, ArrowDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-slate-50 text-slate-900 pt-16 pb-20 border-b border-slate-200">
      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Executive Tag */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 mb-8 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#d97706]" />
            <span className="font-semibold tracking-wide uppercase">Technical Briefing</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Tamarind Management Limited</span>
          </div>

          {/* Unit Crests: Group, Dhow, Village */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-sm">
                <Image
                  src="/logo2.png"
                  alt="Tamarind Group Emblem"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-500 font-medium mt-1.5 uppercase tracking-wider">Tamarind Group</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-sm border border-slate-200 overflow-hidden">
                <Image
                  src="/dhow.jpg"
                  alt="Tamarind Dhow Mombasa Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-500 font-medium mt-1.5 uppercase tracking-wider">Tamarind Dhow</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-sm border border-slate-200 overflow-hidden">
                <Image
                  src="/village.png"
                  alt="Tamarind Village Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-500 font-medium mt-1.5 uppercase tracking-wider">Tamarind Village</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Internal Systems Architecture &amp; <br />
            <span className="text-slate-700">
              Operational Digitalization Dossier
            </span>
          </h1>

          {/* Executive Subheading */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-4xl mx-auto">
            A structured presentation of internal platforms, applied AI tools, and automated workflows engineered by <strong className="text-slate-900 font-semibold">Dalienst Owino Oduor</strong> (IT Assistant &amp; Digital Solutions Architect) across Tamarind Mombasa, Tamarind Dhow, Tamarind Village, and Group Operations.
          </p>

          {/* Executive Note to Directors */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 text-left max-w-3xl mx-auto shadow-sm">
            <div className="flex items-start space-x-3.5">
              <Building className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Directorate Summary &amp; Scope of Work
                </p>
                <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                  Collaborating with the General Manager, Financial Controller, Operations Heads, and HR to transition manual, paper-based processes into secure digital tools—addressing audit compliance, reporting delays, and operational visibility across properties.
                </p>
              </div>
            </div>
          </div>

          {/* Scope Pillar Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600">
              Financial Audit &amp; Approvals
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600">
              Guest Feedback &amp; AI Analytics
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600">
              Marine QR Boarding &amp; Provisioning
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600">
              Staff SOPs &amp; Kaizen Intake
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
