"use client";

import { useState } from "react";
import Image from "next/image";
import { ENTERPRISE_CASE_STUDIES, CaseStudy } from "@/lib/case-studies";
import {
  ShieldCheck,
  BrainCircuit,
  Compass,
  GraduationCap,
  Lightbulb,
  Building2,
  Ticket,
  Cpu,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Code2
} from "lucide-react";

export default function CaseStudyTabs() {
  const [selectedId, setSelectedId] = useState<string>(ENTERPRISE_CASE_STUDIES[0].id);

  const activeStudy =
    ENTERPRISE_CASE_STUDIES.find((cs) => cs.id === selectedId) ||
    ENTERPRISE_CASE_STUDIES[0];

  const iconMap: Record<string, any> = {
    "finance-portal": ShieldCheck,
    "ai-analyst": BrainCircuit,
    "dhow-cruise": Compass,
    "elimu-lms": GraduationCap,
    "kaizen-portal": Lightbulb,
    "village-booking": Building2,
    "sherehe-ticketing": Ticket,
    "it-service-desk": Cpu
  };

  return (
    <section id="case-studies" className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-5xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#eb8a0c]/10 border border-[#eb8a0c]/30 text-xs font-semibold text-[#eb8a0c] mb-3">
            <span>In-Depth Systems Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Enterprise Case Studies (8 Systems)
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Detailed examinations of the operational challenges, technical architectures, and measurable ROI delivered across the Tamarind Group fleet.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10 pb-4 border-b border-slate-800">
          {ENTERPRISE_CASE_STUDIES.map((study) => {
            const Icon = iconMap[study.id] || ShieldCheck;
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-800 border-2 border-[#eb8a0c] shadow-md shadow-amber-950/20"
                    : "bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60 text-slate-400"
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-2 ${isSelected ? "bg-[#eb8a0c] text-white" : "bg-slate-800 text-slate-400"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block truncate text-slate-500">
                    {study.badge}
                  </span>
                  <span className={`text-xs font-semibold line-clamp-1 ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {study.title.split(" ")[0]} {study.title.split(" ")[1]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Details Panel */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#eb8a0c]/10 text-[#eb8a0c] border border-[#eb8a0c]/30">
                  {activeStudy.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeStudy.businessDomain}
                </span>
              </div>
              <div className="flex items-center space-x-3 mt-1">
                {activeStudy.unitLogo && (
                  <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-md border border-slate-700 overflow-hidden">
                    <Image
                      src={activeStudy.unitLogo}
                      alt={`${activeStudy.title} Unit Logo`}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeStudy.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 mb-8">
            <p className="text-base text-slate-200 leading-relaxed font-normal">
              {activeStudy.executiveSummary}
            </p>
          </div>

          {/* Quantifiable ROI Metric Cards */}
          <div className="mb-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#eb8a0c] mb-4">
              Verified ROI & Business Performance
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {activeStudy.quantifiableROI.map((roi, rIdx) => (
                <div
                  key={rIdx}
                  className="p-5 rounded-xl bg-slate-800/40 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                      {roi.metric}
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                      {roi.label}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {roi.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem vs Architectural Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30">
              <div className="flex items-center space-x-2 text-red-400 mb-3">
                <AlertCircle className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  The Enterprise Challenge
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStudy.businessProblem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/30">
              <div className="flex items-center space-x-2 text-emerald-400 mb-3">
                <CheckCircle className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Architectural Engineering
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStudy.architecturalSolution}
              </p>
            </div>
          </div>

          {/* Architectural Pattern Banner */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 mb-8 flex items-start space-x-3.5">
            <Code2 className="w-5 h-5 text-[#eb8a0c] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Key Architectural & Code Pattern
              </span>
              <p className="text-sm font-mono text-amber-200 mt-1">
                {activeStudy.codePatterns}
              </p>
            </div>
          </div>

          {/* Core Features & Technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Functional Capabilities
              </h4>
              <ul className="space-y-2.5">
                {activeStudy.coreFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#eb8a0c] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies Put in Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStudy.technologiesPutInUse.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
