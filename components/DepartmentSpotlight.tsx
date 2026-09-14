import { Building2, Shield, HeartHandshake, Award, Cpu, CheckCircle } from "lucide-react";

export default function DepartmentSpotlight() {
  const departments = [
    {
      name: "Finance & Internal Audit",
      headline: "Digital Accounting Controls & Ledger Accuracy",
      description: "Replaced paper credit slips with a 4-stage digital workflow (Initiator → Audit → FC → GM) and automated duplicate verification to strengthen financial governance.",
      metric: "Financial Governance"
    },
    {
      name: "General Management & Operations",
      headline: "AI Operational Intelligence & Feedback Review",
      description: "Enabled executive leadership to query guest reviews across dining, dhow, and village, receiving automated monthly visual briefs on the 1st of every month.",
      metric: "Operational Intelligence"
    },
    {
      name: "Tamarind Dhow Restaurant",
      headline: "Dhow Boarding & Daily F&B Cost Management",
      description: "Implemented smartphone camera QR code boarding passes at the jetty, streamlining boarding operations and providing kitchen supervisors with daily F&B cost tracking.",
      metric: "Dhow Sailing"
    },
    {
      name: "Group HR, Training & Staff Welfare",
      headline: "Standardized SOPs & Frontline Innovation",
      description: "Equipped staff members with role-based digital SOPs via Elimu LMS and created a passwordless Kaizen intake portal validated directly against the internal HR roster.",
      metric: "Workforce Enablement"
    }
  ];

  return (
    <section id="departments" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Operational Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Impact Across Tamarind Operating Divisions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Built in direct consultation with unit managers and department heads to address operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {dept.name}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200">
                    {dept.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {dept.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {dept.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 pt-3 border-t border-slate-200">
                <CheckCircle className="w-4 h-4 text-slate-400" />
                <span>Deployed Across Tamarind Properties</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note for Directors */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 text-center max-w-4xl mx-auto shadow-xl">
          <Award className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Committed to Continuous Operational Innovation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            These systems represent an ongoing commitment to modernizing Tamarind Management Limited&apos;s digital infrastructure. Each tool is built for resilience, compliance, and ease of use by our hospitality teams.
          </p>
          <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 font-mono">
            Tamarind Management Limited · Group Information Technology · tamarind.dalienst.co.ke
          </div>
        </div>
      </div>
    </section>
  );
}
