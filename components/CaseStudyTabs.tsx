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
    <section id="systems" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-5xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Systems Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Detailed Systems Case Studies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select a platform below to examine the specific operational challenge, engineered architecture, and outcomes delivered for Tamarind Management Limited.
          </p>
        </div>

        {/* 8-Systems Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10 pb-4 border-b border-slate-200">
          {TAMARIND_PROJECTS_FOR_DIRECTORS.map((project) => {
            const Icon = iconMap[project.id] || Layers;
            const isSelected = project.id === selectedId;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`p-3.5 rounded-xl text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-2 border-slate-900 shadow-md"
                    : "bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600"
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-2.5 ${isSelected ? "bg-[#d97706] text-white" : "bg-white text-slate-700 border border-slate-200"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block truncate ${isSelected ? "text-amber-300" : "text-slate-400"}`}>
                    {project.badge.split("&")[0]}
                  </span>
                  <span className={`text-xs font-semibold line-clamp-2 mt-0.5 leading-snug ${isSelected ? "text-white" : "text-slate-800"}`}>
                    {project.systemName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active System Detailed Dossier Panel */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
            <div className="flex items-start space-x-4">
              {activeProject.unitLogo && (
                <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 overflow-hidden">
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
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    {activeProject.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeProject.unit}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 font-mono shrink-0">
              System ID: <span className="text-[#d97706] font-bold">{activeProject.id}</span>
            </div>
          </div>

          {/* Operational Challenge vs Engineered Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* The Operational Challenge */}
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2.5">
              <div className="flex items-center space-x-2 text-rose-800 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  The Operational Challenge
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProject.businessChallenge}
              </p>
            </div>

            {/* Engineered Solution */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5">
              <div className="flex items-center space-x-2 text-slate-800 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Engineered Solution &amp; Workflows
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProject.engineeredSolution}
              </p>
            </div>
          </div>

          {/* Measurable Operational Impact Banner */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mb-8 flex items-start space-x-3.5">
            <ShieldCheck className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-900 block">
                Operational Outcome &amp; Value
              </span>
              <p className="text-sm font-semibold text-slate-900 mt-1 leading-snug">
                {activeProject.operationalImpact}
              </p>
            </div>
          </div>

          {/* Key Operational Outcomes */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Key Operational Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeProject.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-normal">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Breakdown */}
          <div className="mb-8 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-[#d97706]" />
              <span>Technical Architecture &amp; System Details</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeProject.architecturalDetails.map((detail, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 block">
                    {detail.label}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Production Technologies */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Production Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-slate-500 block">
                Status: <strong className="text-slate-800">Production Infrastructure</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
