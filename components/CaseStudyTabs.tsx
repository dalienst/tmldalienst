"use client";

import { useState } from "react";
import Image from "next/image";
import { TAMARIND_PROJECTS_FOR_DIRECTORS, TamarindDirectorCaseStudy } from "@/lib/case-studies";
import {
  Bot,
  ShieldCheck,
  Compass,
  BookOpen,
  Users,
  Building2,
  Cpu,
  Landmark,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Code2
} from "lucide-react";

export default function CaseStudyTabs() {
  const [selectedId, setSelectedId] = useState<string>(TAMARIND_PROJECTS_FOR_DIRECTORS[0].id);

  const activeProject =
    TAMARIND_PROJECTS_FOR_DIRECTORS.find((p) => p.id === selectedId) ||
    TAMARIND_PROJECTS_FOR_DIRECTORS[0];

  const iconMap: Record<string, any> = {
    "ai-analyst": Bot,
    "finance-portal": ShieldCheck,
    "dhow-cruise": Compass,
    "elimu-sops": BookOpen,
    "kaizen-tracker": Users,
    "village-booking": Building2,
    "tamarind-helpdesk": Cpu,
    "sacco-banking": Landmark
  };

  return (
    <section id="systems" className="py-20 bg-[#00201a] text-white border-b border-[#004d40]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-5xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#003830] border border-[#d97706]/30 text-xs font-semibold text-amber-200 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Operational Systems Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Detailed Systems Case Studies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-emerald-100/70 leading-relaxed">
            Select a platform below to examine the specific operational challenge, engineered architecture, and measurable outcomes delivered for Tamarind Management Limited.
          </p>
        </div>

        {/* 8-Systems Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10 pb-4 border-b border-[#004d40]">
          {TAMARIND_PROJECTS_FOR_DIRECTORS.map((project) => {
            const Icon = iconMap[project.id] || Layers;
            const isSelected = project.id === selectedId;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`p-3.5 rounded-xl text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#004239] border-2 border-[#d97706] shadow-lg shadow-black/40"
                    : "bg-[#002b24] border border-[#004d40] hover:bg-[#003830] text-emerald-200/70"
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-2.5 ${isSelected ? "bg-[#d97706] text-white" : "bg-[#003830] text-emerald-300"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider block text-amber-300/80 truncate">
                    {project.badge.split("&")[0]}
                  </span>
                  <span className={`text-xs font-semibold line-clamp-2 mt-0.5 leading-snug ${isSelected ? "text-white" : "text-emerald-100/80"}`}>
                    {project.systemName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active System Detailed Dossier Panel */}
        <div className="bg-[#002922] rounded-3xl border border-[#004d40] shadow-2xl p-6 sm:p-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#004239] mb-8">
            <div className="flex items-start space-x-4">
              {activeProject.unitLogo && (
                <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md border border-white/20 overflow-hidden">
                  <Image
                    src={activeProject.unitLogo}
                    alt={`${activeProject.unit} Logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#004239] text-amber-200 border border-[#d97706]/30">
                    {activeProject.badge}
                  </span>
                  <span className="text-xs text-emerald-300/80 font-medium">
                    {activeProject.unit}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-[#00201a] border border-[#004d40] text-xs text-emerald-200/80 font-mono shrink-0">
              System ID: <span className="text-amber-300">{activeProject.id}</span>
            </div>
          </div>

          {/* Operational Challenge vs Engineered Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* The Operational Challenge */}
            <div className="p-6 rounded-2xl bg-[#201010] border border-red-900/40 space-y-2.5">
              <div className="flex items-center space-x-2 text-red-300 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  The Operational Challenge
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-red-100/80 leading-relaxed">
                {activeProject.businessChallenge}
              </p>
            </div>

            {/* Engineered Solution */}
            <div className="p-6 rounded-2xl bg-[#003830] border border-[#005a4b] space-y-2.5">
              <div className="flex items-center space-x-2 text-emerald-300 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Engineered Solution &amp; Workflows
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                {activeProject.engineeredSolution}
              </p>
            </div>
          </div>

          {/* Measurable Operational Impact Banner */}
          <div className="p-5 rounded-2xl bg-[#00332a] border border-[#d97706]/40 mb-8 flex items-start space-x-3.5">
            <ShieldCheck className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-300 block">
                Measurable Business &amp; Operational Impact
              </span>
              <p className="text-sm font-semibold text-white mt-1 leading-snug">
                {activeProject.operationalImpact}
              </p>
            </div>
          </div>

          {/* Key Operational Outcomes */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
              Verified Operational Outcomes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeProject.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#00201a] border border-[#004239] flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-emerald-100/90 leading-normal">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Breakdown */}
          <div className="mb-8 pt-6 border-t border-[#004239]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-[#d97706]" />
              <span>Technical Architecture &amp; System Details</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeProject.architecturalDetails.map((detail, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#00201a] border border-[#004239] space-y-1.5">
                  <span className="text-xs font-bold text-white block">
                    {detail.label}
                  </span>
                  <p className="text-xs text-emerald-200/70 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Production Technologies */}
          <div className="pt-6 border-t border-[#004239] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300/80 block mb-2">
                Production Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-[#003830] border border-[#005a4b] text-xs font-mono text-emerald-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-emerald-300/70 block">
                Status: <strong className="text-emerald-300">Live Internal Production</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
