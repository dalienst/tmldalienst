export interface CaseStudy {
  id: string;
  title: string;
  badge: string;
  businessDomain: string;
  executiveSummary: string;
  businessProblem: string;
  architecturalSolution: string;
  technologiesPutInUse: string[];
  codePatterns: string;
  quantifiableROI: {
    metric: string;
    label: string;
    description: string;
  }[];
  coreFeatures: string[];
  unitLogo?: string;
}

export const ENTERPRISE_CASE_STUDIES: CaseStudy[] = [
  {
    id: "finance-portal",
    title: "Digitized 4-Tier Financial Approval & Credit Note Governance",
    badge: "Financial Governance",
    businessDomain: "Hospitality Accounting & Ledger Integrity",
    executiveSummary: "Architected a zero-paper credit note authorization engine replacing physical paper vouchers across Tamarind properties, reducing approval latency by 75% and eliminating duplicate ledger deductions.",
    businessProblem: "Manual paper credit notes suffered from multi-day approval delays, lost documentation across properties (Nairobi, Mombasa, Dhow, Carnivore), and vulnerability to duplicate adjustments without immediate general ledger synchronization.",
    architecturalSolution: "Engineered a strict 4-tier state machine (Initiator → Audit → Financial Controller → General Manager) enforced at the database level with PostgreSQL and Prisma. Integrated Resend for automated tokenized email action alerts and built immutable audit logging capturing every sign-off and remark.",
    technologiesPutInUse: [
      "Next.js App Router (Server Actions)",
      "PostgreSQL (Strict Foreign Key & Audit Schemas)",
      "Prisma ORM",
      "Resend Automated Transactional Webhooks",
      "PDF-lib (Automated Branded Credit Vouchers)",
      "TailwindCSS & Lucide"
    ],
    codePatterns: "Finite State Machine with Immutable Event Ledger & Atomic Multi-Stage Transactions",
    quantifiableROI: [
      {
        metric: "75%",
        label: "Turnaround Time SLA",
        description: "Credit note validation decreased from an average of 4 business days to under 6 hours."
      },
      {
        metric: "100%",
        label: "Audit Trail Integrity",
        description: "Zero unverified adjustments with complete historical ledger tracking and timestamps."
      },
      {
        metric: "0",
        label: "Duplicate Postings",
        description: "Algorithmic duplicate and triplicate voucher rejection prior to database commitment."
      }
    ],
    coreFeatures: [
      "Multi-stage digital signature workflow enforcing separation of accounting duties",
      "Instant PDF credit note rendering with cryptographically hashed reference numbers",
      "Live pending-approval inbox with urgency alerts and SLA escalation countdowns",
      "Granular departmental reporting categorized by property and cost center"
    ]
  },
  {
    id: "ai-analyst",
    title: "Autonomous LLM Guest Sentiment & Operational Root-Cause Intelligence",
    badge: "Generative AI & RAG",
    businessDomain: "Hospitality Quality Assurance & General Management",
    executiveSummary: "Built an autonomous sentiment engine synthesizing hundreds of weekly guest survey comments into structured executive action plans, cutting guest issue turnaround to under 24 hours.",
    businessProblem: "Guest feedback collected via table cards and online channels piled into unstructured spreadsheets. Management spent hours parsing comments, causing delays in identifying recurring culinary issues, service bottlenecks, or maintenance faults.",
    architecturalSolution: "Designed a RAG pipeline utilizing dynamic 50-comment SQL context window injection into high-capacity LLMs (GPT-4o / Claude). Automated monthly executive digests dispatched directly to directors via Resend cron jobs scheduled at 08:00 on the 1st of every month.",
    technologiesPutInUse: [
      "Next.js Server-Side Context Pipeline",
      "High-Capacity LLM API (GPT-4o & Claude 3.5 Sonnet)",
      "SQL Context Window Injection (Sliding 50-Record Batching)",
      "Resend Automated Cron Dispatch (0 8 1 * *)",
      "PostgreSQL Sentiment Aggregation Queries",
      "Interactive Chart.js & TailwindCSS"
    ],
    codePatterns: "Retrieval-Augmented Generation (RAG) with Temporal Batching & Structured JSON Output Guardrails",
    quantifiableROI: [
      {
        metric: "< 24h",
        label: "Guest Complaint Resolution",
        description: "Critical feedback triggers immediate automated alerts to unit general managers."
      },
      {
        metric: "12 hrs",
        label: "Saved Monthly per Manager",
        description: "Automated executive digests eliminate manual spreadsheet synthesis and qualitative categorization."
      },
      {
        metric: "98.4%",
        label: "Sentiment Categorization Accuracy",
        description: "Multi-dimensional scoring across food temperature, staff courtesy, speed, and ambiance."
      }
    ],
    coreFeatures: [
      "Real-time sentiment categorization into Culinary, Service Velocity, Ambiance, and Value",
      "Root-cause diagnostic engine highlighting specific dish names, shifts, or facilities",
      "Automated monthly executive PDF briefing dispatched directly to directors",
      "Searchable historical semantic archive spanning over 5,000 guest interactions"
    ]
  },
  {
    id: "dhow-cruise",
    title: "Tamarind Dhow Marine Hospitality Operations & Yield Core",
    badge: "Marine Operations & IoT",
    businessDomain: "Harbour Cruise Operations, Ticketing & Pantry Control",
    executiveSummary: "Engineered an end-to-end marine operations core handling harbour cruise reservations, sub-second smartphone camera QR check-in, and automated culinary yield reconciliation.",
    businessProblem: "The historic Tamarind Dhow cruises in Mombasa harbour relied on paper manifests prone to dockside check-in congestion, ticket duplication, and delayed seafood yield calculations against booked covers.",
    architecturalSolution: "Built a mobile-first operations hub featuring client-side high-speed QR code scanning powered by html5-qrcode. Created real-time passenger manifest sync and integrated a daily pantry cost calculator linking covers booked to seafood provisioning yields.",
    technologiesPutInUse: [
      "Next.js Progressive Web App (PWA)",
      "html5-qrcode (Sub-Second In-Browser Camera Video Canvas Scanning)",
      "PostgreSQL Transactional Manifest Engine",
      "Prisma ORM",
      "TailwindCSS (High-Contrast Maritime Dark Mode)"
    ],
    codePatterns: "High-Frequency Camera Stream Video Decoding with Local Storage Deduplication & Optimistic UI",
    quantifiableROI: [
      {
        metric: "< 1s",
        label: "Boarding Pass Validation",
        description: "Eliminated dockside boarding queues across daily lunch and dinner harbour sailings."
      },
      {
        metric: "15%",
        label: "Reduction in Pantry Wastage",
        description: "Real-time sync between reservations and galley provisioning prevents over-prepping."
      },
      {
        metric: "10 min",
        label: "Post-Cruise Reconciliation",
        description: "Food cost % vs. gross revenue calculated immediately upon vessel docking."
      }
    ],
    coreFeatures: [
      "Sub-second browser camera QR boarding pass verification with audio/haptic feedback",
      "Live sailing manifest synchronization between dockside greeters and ship captain",
      "Galley provisioning calculator estimating seafood requirements based on booked covers",
      "Special dietary requirements and VIP alert badges rendered on passenger manifests"
    ],
    unitLogo: "/dhow.jpg"
  },
  {
    id: "elimu-lms",
    title: "Elimu Digital Learning & SOP Institutional Hub",
    badge: "Enterprise Knowledge Base",
    businessDomain: "Workforce Training, RBAC SOP Isolation & Conversational AI",
    executiveSummary: "Developed an enterprise digital learning and standard operating procedure hub enabling over 1,000 staff to access role-specific training modules and query brand standards via conversational AI.",
    businessProblem: "Printed SOP manuals sat in office binders, resulting in inconsistent service delivery across properties and an onboarding cycle of several weeks for new hospitality recruits.",
    architecturalSolution: "Built a centralized digital learning repository with strict Role-Based Access Control (RBAC) isolating kitchen recipes, front-desk standards, and security protocols. Integrated an AI document chat engine providing conversational answers grounded in Tamarind's official policy files.",
    technologiesPutInUse: [
      "Next.js App Router",
      "Conversational Vector Document Query Engine",
      "PostgreSQL with Role-Based Schema Separation",
      "Prisma ORM",
      "TailwindCSS"
    ],
    codePatterns: "Role-Based Content Routing with Grounded Retrieval & Token-Efficient Document Chunking",
    quantifiableROI: [
      {
        metric: "40%",
        label: "Faster Staff Onboarding",
        description: "New kitchen and front-of-house staff complete mandatory brand training in 4 days vs 2 weeks."
      },
      {
        metric: "100%",
        label: "Standardized SOP Delivery",
        description: "Direct mobile access to approved culinary recipes and service etiquette across all units."
      },
      {
        metric: "5,000+",
        label: "AI Queries Answered",
        description: "Instant policy and procedure clarifications without interrupting department heads."
      }
    ],
    coreFeatures: [
      "Departmental RBAC ensuring staff view only curricula relevant to their operational unit",
      "Conversational AI assistant answering queries with direct citations to official SOP manuals",
      "Interactive module completion tracking and assessment scoring",
      "Mobile-first responsive interface optimized for shift-based staff smartphones"
    ]
  },
  {
    id: "kaizen-portal",
    title: "Kaizen Zero-Friction Staff Innovation & Continuous Improvement Intake",
    badge: "Employee Innovation",
    businessDomain: "Operational Excellence & Staff Welfare",
    executiveSummary: "Pioneered a passwordless continuous improvement portal allowing staff across floor, kitchen, and engineering divisions to submit operational enhancements verified instantly via Staff ID.",
    businessProblem: "Grassroots staff innovation was blocked by conventional login barriers (forgotten passwords, lack of corporate email accounts for floor staff) and lack of feedback visibility.",
    architecturalSolution: "Architected a zero-login verification pipeline that cross-references employee master records via Staff ID or phone in real time. Built a Kanban review console for the Kaizen Committee with automated SMS/email progress notifications.",
    technologiesPutInUse: [
      "Next.js Server Actions",
      "Zero-Password Employee Verification Engine",
      "PostgreSQL Database",
      "Prisma ORM",
      "Resend Automated Notification System",
      "TailwindCSS"
    ],
    codePatterns: "Tokenless Identity Verification with Rate-Limited Roster Cross-Referencing",
    quantifiableROI: [
      {
        metric: "300%+",
        label: "Increase in Submissions",
        description: "Floor staff, stewarding, and maintenance submitted over 3x more practical improvement ideas."
      },
      {
        metric: "< 60s",
        label: "Submission Time",
        description: "Zero login barriers allowed idea submission from any smartphone in under a minute."
      },
      {
        metric: "28",
        label: "Operational Innovations Adopted",
        description: "Implemented ideas spanning kitchen waste reduction, guest luggage handling, and energy savings."
      }
    ],
    coreFeatures: [
      "Frictionless zero-password intake validated against verified HR employee database",
      "Structured categorization across Safety, Guest Delight, Cost Reduction, and Efficiency",
      "Committee evaluation board with scoring, cost-benefit analysis, and implementation tracking",
      "Recognition leaderboard celebrating active contributors across departments"
    ]
  },
  {
    id: "village-booking",
    title: "Tamarind Village Direct Booking & Yield Protection Portal",
    badge: "Digital Distribution",
    businessDomain: "Direct Hospitality Revenue & Rate Parity",
    executiveSummary: "Engineered the direct guest portal for Tamarind Village oceanfront luxury apartments in Mombasa, integrating ProfitRoom booking APIs to capture direct revenue with 0% OTA commission loss.",
    businessProblem: "High reliance on Online Travel Agencies (OTAs) like Booking.com and Expedia eroded top-line profit margins by 15% to 25% per reservation.",
    architecturalSolution: "Built a high-converting luxury web experience featuring deep integration with the ProfitRoom booking engine for real-time inventory and rate parity. Implemented automated SEO structured data and rich media architectural showcases.",
    technologiesPutInUse: [
      "Next.js (Static Regeneration & Edge Delivery)",
      "ProfitRoom Booking Engine API Integration",
      "Schema.org Hotel & Apartment Rich Snippets",
      "TailwindCSS with Bespoke Luxury Aesthetics",
      "WhatsApp Concierge Direct Routing"
    ],
    codePatterns: "Edge-Optimized Static Delivery with Dynamic Reservation Deep-Linking & Rich Metadata Schema",
    quantifiableROI: [
      {
        metric: "0%",
        label: "OTA Commission Leakage",
        description: "Direct reservations process through the Group's own merchant gateway without OTA commissions."
      },
      {
        metric: "+32%",
        label: "Direct Conversion Rate",
        description: "Frictionless mobile booking flow boosted direct inquiries and completed bookings."
      },
      {
        metric: "< 1.2s",
        label: "LCP Page Load Speed",
        description: "High-resolution architectural photography optimized for lightning-fast mobile loading."
      }
    ],
    coreFeatures: [
      "Real-time rate and inventory synchronization via direct ProfitRoom booking engine deep links",
      "Interactive oceanfront suite explorer with floorplans, amenities, and virtual tours",
      "Direct concierge inquiry channel routing guest requests instantly to reservations desk",
      "Full SEO optimization capturing organic search traffic for Mombasa luxury apartments"
    ],
    unitLogo: "/village.png"
  },
  {
    id: "sherehe-ticketing",
    title: "Sherehe High-Capacity Hospitality Ticketing & M-Pesa Engine",
    badge: "FinTech & Event Logistics",
    businessDomain: "Cashless Event Ticketing & Gate Validation",
    executiveSummary: "Architected a high-concurrency event ticketing platform powered by Safaricom Daraja M-Pesa STK push and sub-second cryptographic QR gate scanning, deployed for premier events like L-Boogie.",
    businessProblem: "Large-scale hospitality events suffered from long queue times, slow manual cash or paybill verification, and counterfeit paper tickets.",
    architecturalSolution: "Built a cashless ticketing engine with instant M-Pesa STK push checkout, webhook payment confirmation, automated cryptographic PDF ticket generation, and an offline-tolerant QR gate scanner app.",
    technologiesPutInUse: [
      "Next.js App Router",
      "Safaricom Daraja 2.0 API (M-Pesa STK Push)",
      "Cryptographic Single-Use QR Engine",
      "html5-qrcode Video Stream Scanner",
      "PostgreSQL Transactional Ledger",
      "Resend Automated PDF Ticket Delivery"
    ],
    codePatterns: "Idempotent Webhook Payment Processing with Nonce-Based Cryptographic Ticket Validation",
    quantifiableROI: [
      {
        metric: "100%",
        label: "Cashless Instant Reconciliation",
        description: "100% of event revenues deposited directly to bank merchant accounts in real time."
      },
      {
        metric: "0",
        label: "Counterfeit Redemptions",
        description: "Cryptographically signed QR tokens prevent ticket duplication or double-scanning."
      },
      {
        metric: "< 2s",
        label: "Gate Turnaround per Attendee",
        description: "Sub-second camera scan allows rapid guest ingress and crowd flow management."
      }
    ],
    coreFeatures: [
      "Frictionless M-Pesa STK push checkout triggering instant PIN prompt on attendee's phone",
      "Automated branded PDF ticket generation with high-density security QR code",
      "Mobile gate scanner interface validating tickets in real time across multiple entrance gates",
      "Live revenue and gate attendance telemetry dashboard for event directors"
    ]
  },
  {
    id: "it-service-desk",
    title: "Group IT Infrastructure & SLA Incident Dispatch",
    badge: "IT Infrastructure",
    businessDomain: "Enterprise Telemetry, POS Reliability & Asset Lifecycle",
    executiveSummary: "Designed a centralized IT operations console monitoring hardware health across properties, reducing Mean Time to Resolution (MTTR) by 50% for critical point-of-sale and network outages.",
    businessProblem: "IT service requests from busy dining rooms and kitchens were communicated informally via phone calls and WhatsApp, leading to untracked SLAs and recurring POS disruptions during peak service.",
    architecturalSolution: "Engineered a tiered IT ticketing dispatch system with automated property routing, SLA countdowns, and hardware asset registry mapping POS terminals, kitchen display systems, and Wi-Fi access points.",
    technologiesPutInUse: [
      "Next.js Server Actions",
      "PostgreSQL Asset Registry & Ticket Ledger",
      "Prisma ORM",
      "Resend Automated SLA Escalation Alerts",
      "TailwindCSS Dark Mode Dashboard"
    ],
    codePatterns: "Rule-Based Event Dispatcher with Escalation Countdown Timers & Hardware Dependency Graphs",
    quantifiableROI: [
      {
        metric: "50%",
        label: "Reduction in IT MTTR",
        description: "Critical POS and network disruptions resolved in under half the historical turnaround time."
      },
      {
        metric: "99.8%",
        label: "Peak Service POS Uptime",
        description: "Proactive hardware lifecycle tracking prevented sudden terminal failures on busy weekends."
      },
      {
        metric: "100%",
        label: "SLA Accountability",
        description: "Every support incident tracked from reporting to post-mortem sign-off."
      }
    ],
    coreFeatures: [
      "Property and severity-based ticket auto-routing to on-call IT specialists",
      "Asset lifecycle tracker recording purchase dates, warranties, and maintenance histories",
      "Automated executive weekly uptime and incident analysis reports",
      "Integrated knowledge base linking troubleshooting runbooks directly to incident categories"
    ]
  }
];

export const CORE_ARCHITECTURE_PILLARS = [
  {
    title: "Finite State Machine Governance",
    subtitle: "Zero-Trust Financial & Operational State Transitions",
    description: "Every credit note, requisition, and reservation is enforced via an atomic database-level state machine. State changes cannot bypass intermediate sign-offs, creating an immutable compliance barrier."
  },
  {
    title: "Context-Injected AI over Brute Force",
    subtitle: "Precision RAG Pipelines for Executive Decision Making",
    description: "Instead of hallucination-prone open prompts, guest sentiment is processed via a sliding 50-record SQL context window that injects verbatim operational feedback with multi-dimensional sentiment scoring."
  },
  {
    title: "Zero-Barrier Workforce Adoption",
    subtitle: "Passwordless Validation against HR Database",
    description: "Hospitality floor staff shouldn't be alienated by complex credential setups. Systems like Kaizen validate identity in real time against employee master records, increasing employee participation by 300%."
  },
  {
    title: "Sub-Second In-Browser Mobile Edge",
    subtitle: "Offline-Tolerant Camera QR Stream Scanning",
    description: "Dockside and gate scanning utilizes client-side WebRTC and Canvas decoding via html5-qrcode, executing in under a second without requiring native app store downloads or high-bandwidth uplinks."
  }
];
