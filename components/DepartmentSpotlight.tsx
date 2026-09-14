import { Building2, Shield, HeartHandshake, Award, Cpu, CheckCircle } from "lucide-react";

export default function DepartmentSpotlight() {
  const departments = [
    {
      name: "Group Finance & Internal Audit",
      headline: "Immutable Accounting Controls & Ledger Accuracy",
      description: "Replaced paper credit slips with a 4-stage digital workflow (Initiator → Audit → FC → GM) and automated duplicate anomaly detection, cutting approval turnaround by 75%.",
      metric: "75% Faster Approval Turnaround"
    },
    {
      name: "General Management & Quality Assurance",
      headline: "Conversational AI Operational Intelligence",
      description: "Enabled executive leadership to query thousands of guest reviews across dining, dhow, and village in plain English, receiving automated monthly visual briefs on the 1st of every month.",
      metric: "Sub-24h Issue Resolution SLA"
    },
    {
      name: "Tamarind Dhow Marine Division",
      headline: "Jetty Check-in & Real-Time Margin Control",
      description: "Implemented high-speed smartphone camera QR code boarding passes at the jetty, eliminating boarding bottlenecks and providing kitchen supervisors with daily food cost % visibility.",
      metric: "< 400ms Boarding Scan Speed"
    },
    {
      name: "Group HR, Training & Staff Welfare",
      headline: "Standardized SOPs & Grassroots Innovation",
      description: "Equipped over 1,000 staff members with role-based digital SOPs via Elimu LMS and created a passwordless Kaizen intake portal validated directly against the HR roster.",
      metric: "40% Faster Hospitality Onboarding"
    }
  ];

  return (
    <section id="departments" className="py-20 bg-[#00201a] text-white border-b border-[#004d40]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#003830] border border-[#d97706]/30 text-xs font-semibold text-amber-200 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Operational Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Impact Across Tamarind Operating Divisions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100/70 leading-relaxed">
            Built in direct daily consultation with unit managers and department heads to address real operational pain points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#002922] border border-[#004d40] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {dept.name}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#004239] text-emerald-200 border border-[#005a4b]">
                    {dept.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {dept.headline}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed mb-4">
                  {dept.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-medium text-emerald-300 pt-3 border-t border-[#003d33]">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Deployed Across Tamarind Properties</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note for Directors */}
        <div className="mt-14 p-8 rounded-2xl bg-[#002b24] border border-[#004d40] text-center max-w-4xl mx-auto shadow-xl">
          <Award className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Committed to Continuous Operational Innovation
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-2xl mx-auto">
            These systems represent an ongoing commitment to modernizing Tamarind Management Limited&apos;s digital infrastructure. Each tool is built for resilience, compliance, and ease of use by our hospitality teams.
          </p>
          <div className="mt-6 pt-5 border-t border-[#003d33] text-xs text-emerald-300/70 font-mono">
            Tamarind Management Limited · Group Information Technology · tamarind.dalienst.co.ke
          </div>
        </div>
      </div>
    </section>
  );
}
