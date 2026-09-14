export interface TamarindCoreValue {
  id: string;
  name: string;
  statement: string;
  iconName: string;
  badgeColor: string;
}

export const TAMARIND_CORE_VALUES: TamarindCoreValue[] = [
  {
    id: "customer-satisfaction",
    name: "Customer Satisfaction",
    statement: "To make every single customer feel welcome, valued and totally satisfied.",
    iconName: "HeartHandshake",
    badgeColor: "bg-amber-50 text-[#b8860b] border-amber-200"
  },
  {
    id: "hr-development",
    name: "HR Development / Learning and Growth",
    statement: "To develop staff who are enthusiastic, vibrant, responsible, flexible and courteous while ensuring that they feel empowered, respected and cared for in harmonious work environment.",
    iconName: "Users",
    badgeColor: "bg-emerald-50 text-[#004d40] border-emerald-200"
  },
  {
    id: "innovation-process",
    name: "Innovation / Business Process",
    statement: "To challenge all staff to constantly strive to initiate fresh, enticing and innovative products, services and processes.",
    iconName: "Lightbulb",
    badgeColor: "bg-blue-50 text-[#0b3b82] border-blue-200"
  },
  {
    id: "shareholder-financial",
    name: "Shareholder Satisfaction / Financial Results",
    statement: "To achieve long-term growth through profitability in relation to shareholder investment.",
    iconName: "TrendingUp",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200"
  },
  {
    id: "community-relations",
    name: "Community Relations",
    statement: "To treat the wider community and stakeholders with utmost respect, integrity and be actively involved in our community and environmental concerns.",
    iconName: "ShieldCheck",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
  }
];

export interface TamarindDirectorCaseStudy {
  id: string;
  title: string;
  systemName: string;
  unit: string;
  badge: string;
  coreValue: string;
  coreValueAlignment: string;
  unitLogo?: string;
  businessChallenge: string;
  engineeredSolution: string;
  operationalImpact: string;
  keyOutcomes: string[];
  technologies: string[];
  architecturalDetails: {
    label: string;
    description: string;
  }[];
}

export const TAMARIND_PROJECTS_FOR_DIRECTORS: TamarindDirectorCaseStudy[] = [
  {
    id: "ai-analyst",
    title: "AI Guest Sentiment & Operations Analyst",
    systemName: "AI Guest Sentiment & Operations Analyst",
    unit: "Tamarind Mombasa (Dhow, Village, Restaurant)",
    badge: "Operational AI & Intelligence",
    coreValue: "Customer Satisfaction",
    coreValueAlignment: "Actively fulfills the commitment to make every single customer feel welcome, valued and totally satisfied by converting guest feedback into immediate operational resolutions within 24 hours.",
    unitLogo: "/logo.png",
    businessChallenge:
      "Guest feedback across dining rooms, dhow cruises, and apartment suites was captured on physical paper comment cards and scattered spreadsheets. This created reporting delays and made it difficult for General Management to quickly identify emerging service trends or celebrate recognized staff.",
    engineeredSolution:
      "Architected and deployed a centralized guest feedback intelligence platform featuring an integrated conversational AI analyst powered by Google Gemini. Management can ask plain-English operational questions (e.g., 'What were the key guest comments on the Dhow this weekend?' or 'Which dining room staff received positive mentions?') and receive immediate, data-backed summaries. Built an automated cron email service delivering monthly visual performance digests directly to General Managers on the 1st of every month.",
    operationalImpact:
      "Accelerated guest feedback turnaround and eliminated manual spreadsheet collation for monthly management reporting.",
    keyOutcomes: [
      "Natural language ad-hoc business intelligence for General Managers and Operations Heads",
      "Dynamic 50-comment slice context injection avoiding latency hangs and hallucinations",
      "Automated monthly visual email performance reports dispatched via scheduled cron",
      "Actionable sentiment breakdown across dining rooms, dhow cruise sailings, and apartment suites"
    ],
    technologies: [
      "Google Generative AI (Gemini 2.5 Flash)",
      "Next.js App Router",
      "Django REST Framework",
      "PostgreSQL",
      "Resend API (Automated Cron Dispatch)",
      "Recharts Data Visualization"
    ],
    architecturalDetails: [
      {
        label: "Data Ingestion Pipeline",
        description: "Standardized intake converting physical card entries and online guest reviews into a structured PostgreSQL schema categorized by property, date, and service point."
      },
      {
        label: "Dynamic Context Injection",
        description: "Retrieves sliding 50-record sentiment slices dynamically injected into prompt context, ensuring fast sub-2s responses without context-window overflow."
      },
      {
        label: "Monthly Cron Dispatch",
        description: "Railway-hosted background cron scheduler executing at 08:00 on the 1st of each month to generate executive visual summaries sent directly to GMs."
      }
    ]
  },
  {
    id: "finance-portal",
    title: "Finance & Credit Note Portal",
    systemName: "Finance & Credit Note Portal",
    unit: "Group Finance & Internal Audit",
    badge: "Financial Governance & Audit",
    coreValue: "Shareholder Satisfaction / Financial Results",
    coreValueAlignment: "Drives long-term growth and profitability in relation to shareholder investment by eliminating duplicate ledger adjustments and enforcing strict audit approval controls.",
    unitLogo: "/logo2.png",
    businessChallenge:
      "Credit note requests moved across desks on physical paper routing slips. This resulted in processing delays across properties, audit paper trail gaps, and the ongoing risk of undetected duplicate or triplicate credit entries in the general ledger.",
    engineeredSolution:
      "Engineered an online credit note management platform equipped with an automated verification check that cross-checks invoice numbers, guest folios, and amounts to flag potential duplicate and triplicate postings. Replaced manual paperwork with an auditable four-tier digital approval workflow: Initiator → Internal Audit → Financial Controller → General Manager, complete with instant email action alerts and one-click PDF reconciliation summaries.",
    operationalImpact:
      "Streamlined credit note turnaround and established a verifiable digital audit trail across commercial adjustments.",
    keyOutcomes: [
      "Automated algorithmic detection of duplicate/triplicate postings prior to sign-off",
      "Strict 4-tier digital approval pipeline with role-based segregation of duties",
      "Immutable audit logs with timestamped approval histories and explanatory remarks",
      "One-click branded PDF credit note voucher generation for accounting files"
    ],
    technologies: [
      "Next.js App Router",
      "Django REST Framework",
      "PostgreSQL (Strict Audit Schemas)",
      "TanStack Query",
      "PDF Ledger Generation Engine",
      "Resend Email Workflows"
    ],
    architecturalDetails: [
      {
        label: "State Machine Security",
        description: "Enforces non-bypassable sequential transitions: Initiator submission → Internal Audit review → Financial Controller endorsement → General Manager sign-off."
      },
      {
        label: "Duplicate Detection Algorithm",
        description: "Multi-field fuzzy hashing checking invoice IDs, guest folios, and currency amounts against historical approved ledgers to intercept duplicate claims."
      },
      {
        label: "Audit Trail Immutability",
        description: "Every action, comment, approval, or rejection generates an append-only audit event with user identity, timestamp, and IP address."
      }
    ]
  },
  {
    id: "village-booking",
    title: "Tamarind Village Web Revamp & Direct Booking Engine Integration",
    systemName: "Tamarind Village Web Architecture",
    unit: "Tamarind Village & Group Revenue Management",
    badge: "Direct Distribution & Revenue",
    coreValue: "Shareholder Satisfaction / Financial Results",
    coreValueAlignment: "Achieves long-term profitability and shareholder value by optimizing direct bookings, transparent rates, and reducing OTA commission leakages.",
    unitLogo: "/village.png",
    businessChallenge:
      "Heavy reliance on third-party Online Travel Agencies (OTAs) resulted in high 15%–25% commission deductions on luxury oceanfront suites, alongside manual routing delays for banquet, meeting, and dining inquiries.",
    engineeredSolution:
      "Supported the technical overhaul and redesign of the Tamarind Village website and integrated the ProfitRoom direct booking engine API, allowing guests to view live suite availability, view transparent seasonal rates, and reserve directly online. Built an automated inquiry engine that instantly categorizes and routes guest questions for restaurants, meetings, and accommodations directly to departmental inboxes with zero manual delay.",
    operationalImpact:
      "Minimized third-party booking commissions, boosted direct guest inquiries, and established live rate parity across booking channels.",
    keyOutcomes: [
      "Direct ProfitRoom booking engine integration with live suite rates and availability",
      "Significant reduction in third-party OTA commission leakage on direct reservations",
      "Automated routing of event and dining inquiries to specific department inboxes",
      "Fast, fluid luxury UI with high mobile conversion"
    ],
    technologies: [
      "React 19 & Next.js",
      "ProfitRoom API Integration",
      "PostgreSQL",
      "Resend Automated Email Dispatch",
      "SEO Schema.org Structured Metadata"
    ],
    architecturalDetails: [
      {
        label: "ProfitRoom API Deep Linking",
        description: "Seamless synchronization between promotional room packages and the ProfitRoom booking checkout engine."
      },
      {
        label: "Lead Categorization Engine",
        description: "Keyword-based form parsing directing wedding, conference, and suite inquiries to their respective coordinators."
      },
      {
        label: "Mobile Conversion Optimization",
        description: "Lightweight asset delivery ensuring under 1.5s load times on international guest mobile connections."
      }
    ]
  },
  {
    id: "dhow-cruise",
    title: "Tamarind Dhow Cruise Operations & Digital QR Boarding Scanner",
    systemName: "Tamarind Dhow Cruise Core",
    unit: "Tamarind Dhow Restaurant",
    badge: "Dhow Sailing & Cost Control",
    coreValue: "Customer Satisfaction",
    coreValueAlignment: "Ensures every dining cruise guest experiences a welcoming, frictionless arrival through sub-second QR boarding while equipping the galley with live dietary and headcount visibility.",
    unitLogo: "/dhow.jpg",
    businessChallenge:
      "Boarding dinner and lunch cruise guests on the jetty relied on manual clipboard paper manifests. This created boarding queues during high-density sailings and delayed crucial kitchen visibility into exact passenger counts, special dietary requirements, and galley provisioning food costs.",
    engineeredSolution:
      "Developed a mobile-first operations system featuring high-speed smartphone camera QR code scanning for instant guest boarding verification directly at the jetty. Engineered real-time supervisor dashboards providing instant visibility into passenger headcounts, table seating allocations, beverage addon packages, sailing revenues, and daily food cost percentages versus wastage.",
    operationalImpact:
      "Significantly accelerated boarding on busy sailings, eliminated unverified boardings, and gave culinary supervisors daily margin control over food and beverage expenditure.",
    keyOutcomes: [
      "Sub-second digital guest check-in via smartphone camera QR scanning (html5-qrcode)",
      "Live manifest synchronization between jetty greeters and onboard galley teams",
      "Daily visibility into food cost percentages vs. galley wastage per sailing",
      "Beverage addon tracking and dietary requirement alerts rendered on boarding pass scans"
    ],
    technologies: [
      "Next.js App Router",
      "React 19 & TypeScript",
      "html5-qrcode (Camera Video Canvas Scanner)",
      "Django REST Framework",
      "PostgreSQL",
      "TailwindCSS"
    ],
    architecturalDetails: [
      {
        label: "In-Browser QR Decoding",
        description: "High-frequency video stream frame sampling using client-side canvas decoding, validating boarding passes in under 400ms on standard mobile browsers."
      },
      {
        label: "Galley Margin Engine",
        description: "Real-time formula comparing booked guest covers against pantry provisions, calculating daily food cost percentage immediately upon cruise completion."
      },
      {
        label: "Dhow Safety Manifest",
        description: "Instant electronic passenger manifest exportable in real time for coastal authorities and emergency management."
      }
    ]
  },
  {
    id: "elimu-sops",
    title: "Tamarind Elimu: Group SOP Knowledge Repository & AI Assistant",
    systemName: "Tamarind Elimu LMS",
    unit: "Group Human Resources & Operations",
    badge: "Knowledge Base & Training",
    coreValue: "HR Development / Learning and Growth",
    coreValueAlignment: "Develops staff who are enthusiastic, vibrant, responsible, flexible, and courteous by providing instant access to approved SOPs and AI procedural coaching.",
    unitLogo: "/logo.png",
    businessChallenge:
      "Standard Operating Procedures (SOPs) across culinary, service, front office, and maintenance divisions were locked in bulky physical office binders. This made procedure lookup slow for staff and prevented department heads from verifying whether mandatory brand standards were being read and understood.",
    engineeredSolution:
      "Built a centralized digital learning and SOP portal featuring an embedded AI conversational assistant. Staff can ask questions in natural language and receive concise, accurate answers referencing the exact approved SOP manual. Built department-level Role-Based Access Control (RBAC) so employees access only curricula relevant to their operational role, paired with manager compliance tracking dashboards.",
    operationalImpact:
      "Replaced outdated physical manuals, accelerated onboarding for new hospitality recruits by over 40%, and provided management with verifiable records of compliance.",
    keyOutcomes: [
      "Conversational SOP Q&A assistant grounded strictly in verified Tamarind documentation",
      "Department-level Role-Based Access Control (RBAC) isolating sensitive operational manuals",
      "Managerial oversight dashboard tracking employee reading progress and completion",
      "Mobile-friendly micro-learning accessible on staff smartphones during shift briefings"
    ],
    technologies: [
      "Next.js App Router",
      "Google Generative AI (Grounded Document Chat)",
      "Django REST Framework",
      "PostgreSQL (RBAC Schemas)",
      "In-Browser PDF Viewer Engine"
    ],
    architecturalDetails: [
      {
        label: "Grounded Document Chunking",
        description: "Official SOP PDFs parsed and indexed with metadata tags, preventing hallucinations by forcing the AI to cite specific page sections."
      },
      {
        label: "Departmental Access Boundaries",
        description: "Strict RBAC ensures culinary teams see only culinary and food safety SOPs, front office sees guest handling standards, and management views executive guidelines."
      },
      {
        label: "Reading Telemetry",
        description: "Event-driven tracking recording module completion timestamps for HR training audits."
      }
    ]
  },
  {
    id: "kaizen-tracker",
    title: "Kaizen Continuous Improvement & Zero-Login Staff Intake Portal",
    systemName: "Kaizen Innovation Engine",
    unit: "General Management & Staff Welfare Committee",
    badge: "Employee Innovation",
    coreValue: "Innovation / Business Process",
    coreValueAlignment: "Directly challenges all staff to constantly strive to initiate fresh, enticing and innovative processes through an accessible mobile intake channel.",
    unitLogo: "/logo2.png",
    businessChallenge:
      "Capturing staff innovation ideas across multiple branches was difficult because many frontline kitchen, stewarding, and maintenance staff do not have company email addresses or office computer access. Traditional login systems created a barrier to participation.",
    engineeredSolution:
      "Created a frictionless, zero-login submission portal where staff enter only their Staff ID and Email, validated in real time against the internal HR roster. Employees can attach smartphone photos directly before submitting ideas. Built multi-level management views: Department Managers track initiatives on visual Kanban boards while General Managers view branch-wide performance rollups.",
    operationalImpact:
      "Removed credential barriers to drive widespread staff participation across all units while maintaining complete HR verification.",
    keyOutcomes: [
      "Zero-login public intake flow secured via real-time HR roster lookup",
      "Direct smartphone camera photo upload for visual before-and-after improvement proofs",
      "Departmental Kanban status boards (Proposed → Under Review → In Progress → Implemented)",
      "Location-level aggregate analytics for General Management"
    ],
    technologies: [
      "Next.js App Router",
      "Drizzle ORM / Prisma",
      "PostgreSQL",
      "Cloud Image Upload Pipeline",
      "Multi-Tier RBAC Management Consoles"
    ],
    architecturalDetails: [
      {
        label: "Zero-Password HR Validation",
        description: "Validates Staff ID against employee master records via single-purpose rate-limited API, eliminating forgotten passwords."
      },
      {
        label: "Photo Proof Handling",
        description: "Automated mobile photo compression ensuring quick submissions over mobile 3G/4G connections."
      },
      {
        label: "Multi-Tier Review Pipeline",
        description: "Visual Kanban workflow allowing department heads to estimate implementation costs and tag recognized staff."
      }
    ]
  },
  {
    id: "tamarind-helpdesk",
    title: "Tamarind IT Operations & Helpdesk Ticketing Platform",
    systemName: "Group IT Service Desk (Phase 2)",
    unit: "Group Information Technology & Facilities",
    badge: "IT Infrastructure & SLA",
    coreValue: "Innovation / Business Process",
    coreValueAlignment: "Initiates fresh, reliable operational processes across Group properties by enforcing structured SLA resolution targets for mission-critical POS and network hardware.",
    unitLogo: "/logo2.png",
    businessChallenge:
      "IT and maintenance service requests from dining rooms, kitchens, and front desks were communicated informally via phone calls and WhatsApp, leading to untracked SLAs and recurring point-of-sale or network disruptions during peak service hours.",
    engineeredSolution:
      "Engineered a centralized internal service desk platform streamlining request intake, setting clear departmental Service Level Agreements (SLAs), and providing management with operational MTTR metrics and hardware asset tracking.",
    operationalImpact:
      "Halved resolution times for critical POS and network outages and established clear accountability across IT and maintenance support.",
    keyOutcomes: [
      "Centralized ticket intake by property, department, and severity tier",
      "Automated SLA countdown timers and escalation notifications to on-call technicians",
      "POS terminal and network access point asset lifecycle registry",
      "Weekly operational uptime summaries for General Management"
    ],
    technologies: [
      "Next.js App Router",
      "PostgreSQL Ledger",
      "Django REST Framework",
      "Resend Escalation Webhooks",
      "TailwindCSS"
    ],
    architecturalDetails: [
      {
        label: "Severity-Based Dispatch",
        description: "Immediate high-priority SMS and email escalation when dining room POS or payment terminals are flagged down."
      },
      {
        label: "Asset Registry Mapping",
        description: "Links trouble tickets directly to physical hardware IDs, highlighting recurring hardware failures."
      }
    ]
  }
];

export const TAMARIND_ARCHITECTURE_STANDARDS = [
  {
    title: "Deterministic Multi-Tier State Machines",
    description: "Financial governance, credit notes, and requisitions require strict, non-bypassable sequential approvals enforced directly at the database transaction layer."
  },
  {
    title: "Context-Injected Operational AI",
    description: "Rather than general ungrounded prompts, guest sentiment and SOP querying utilizes focused SQL context slices that provide instant, data-backed operational answers."
  },
  {
    title: "Frictionless Zero-Login Workforce UX",
    description: "Frontline hospitality staff interact through single-purpose interfaces validated in real time against the HR roster, eliminating the barrier of forgotten passwords."
  },
  {
    title: "Sub-Second In-Browser Camera Scanning",
    description: "Jetty and event check-ins leverage client-side WebRTC and Canvas video stream decoding, executing in under 400ms without requiring dedicated hardware or app store downloads."
  }
];
