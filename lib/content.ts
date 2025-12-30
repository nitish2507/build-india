import {
  ShieldCheck,
  Database,
  Wrench,
  Gauge,
  Radar,
  Workflow,
  ScanSearch,
  Users,
  CalendarClock,
  Laptop,
  Library
} from "lucide-react";

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" }
];

export const credibilityCards = [
  {
    title: "Data Sovereignty First",
    description: "Designed for on-prem, NIC cloud, and state data centres."
  },
  {
    title: "Audit-Ready by Design",
    description: "Role-based access, logs, traceability, and explainability."
  },
  {
    title: "Works with Legacy Reality",
    description: "We integrate; we don’t rip-and-replace."
  },
  {
    title: "Measured Outcomes",
    description: "TAT reduction, leakage prevention, compliance uplift."
  }
];

export const systems = [
  {
    title: "Monitoring, MIS & Command Centres",
    description:
      "Real-time visibility, alerts, and decision support across programs.",
    icon: Radar
  },
  {
    title: "Workflow Automation & Case Management",
    description:
      "Reduce pendency through digitised processes and document intelligence.",
    icon: Workflow
  },
  {
    title: "Inspection, Surveillance & Compliance",
    description:
      "Evidence-backed enforcement using geo-tagging and computer vision.",
    icon: ScanSearch
  },
  {
    title: "Beneficiary Targeting & Eligibility Intelligence",
    description:
      "Minimise leakage, ensure fairness, improve fiscal efficiency.",
    icon: Users
  },
  {
    title: "Forecasting & Resource Planning",
    description:
      "Demand, capacity, and risk forecasting for preparedness.",
    icon: CalendarClock
  },
  {
    title: "Citizen Apps & Service Delivery Portals",
    description:
      "Transparent, trackable, citizen-facing systems.",
    icon: Laptop
  },
  {
    title: "Knowledge & Decision Aids for Officers",
    description:
      "Search, retrieval, and advisory tools over policies and records.",
    icon: Library
  }
];

export const engagementSteps = [
  {
    title: "Diagnose (2–3 weeks)",
    description: "Problem framing, data readiness, system blueprint."
  },
  {
    title: "Pilot (6–10 weeks)",
    description: "Controlled deployment with measurable outcomes."
  },
  {
    title: "Scale",
    description: "Tender support, rollout, and long-term support."
  }
];

export const examples = [
  {
    title: "Backlog Reduction",
    problem: "Claims pendency across districts",
    approach: "Workflow + document intelligence",
    impact: "~30% TAT reduction",
    deployment: "On-prem"
  },
  {
    title: "Compliance & Inspection",
    problem: "Manual inspections, weak evidence",
    approach: "Mobile app + geo-tagging + CV",
    impact: "Higher coverage, lower disputes",
    deployment: "State DC"
  },
  {
    title: "State MIS",
    problem: "Fragmented reporting",
    approach: "Unified dashboard + alerts",
    impact: "Faster escalation, proactive action",
    deployment: "State DC"
  }
];

export const principles = [
  "Simple systems over fragile complexity",
  "Design for operators, not demos",
  "Measurable impact over vanity metrics",
  "Security, compliance, and continuity first"
];

export const solutionsArchetypes = [
  {
    title: "Mission Monitoring & Control",
    buyer: "Secretaries, Mission Directors, Program Chiefs",
    triggers: [
      "Multiple reporting formats",
      "Delayed escalation",
      "No single source of truth"
    ],
    modules: [
      "Unified data lake",
      "Program dashboards",
      "Alerting workflows",
      "Decision notes"
    ],
    deployment: ["State data centre", "NIC cloud", "Hybrid"],
    metrics: ["Time to escalation", "Coverage completeness", "Action closure rate"]
  },
  {
    title: "Compliance & Enforcement",
    buyer: "Commissioners, Inspectors General",
    triggers: [
      "Manual inspection logs",
      "Disputed evidence",
      "Low coverage"
    ],
    modules: [
      "Mobile inspections",
      "Evidence capture",
      "Geo-tagging",
      "Analytics"
    ],
    deployment: ["On-prem", "State DC"],
    metrics: ["Inspection coverage", "Dispute rate", "Penalty recovery"]
  },
  {
    title: "Benefits & Entitlements",
    buyer: "Department heads, PSU welfare teams",
    triggers: ["Leakage concerns", "Eligibility drift", "Fraud reports"],
    modules: [
      "Eligibility engine",
      "Risk scoring",
      "Verification workflows",
      "Beneficiary dashboards"
    ],
    deployment: ["On-prem", "NIC cloud"],
    metrics: ["Leakage reduction", "Approval accuracy", "Turnaround time"]
  }
];

export const caseStudies = [
  {
    title: "District Claims Backlog",
    label: "Anonymised example",
    overview:
      "A social security scheme faced rising claims pendency across 18 districts.",
    approach: [
      "Digitised intake and document validation",
      "Queue-based workflow with SLA alerts",
      "Dashboard for district officers"
    ],
    impact: [
      "~30% reduction in average TAT within 90 days",
      "Improved audit trail for every claim",
      "Reassigned staff based on load heatmaps"
    ],
    deployment: "On-prem"
  },
  {
    title: "Inspection Evidence Stack",
    label: "Anonymised example",
    overview:
      "A regulator struggled with inconsistent evidence in field inspections.",
    approach: [
      "Mobile app with geo-tagging and offline mode",
      "Computer vision checks for tampering",
      "Supervisor review workflow"
    ],
    impact: [
      "Higher inspection coverage in priority zones",
      "Lower dispute rate from regulated entities",
      "Faster prosecution-ready dossiers"
    ],
    deployment: "State data centre"
  },
  {
    title: "State Mission MIS",
    label: "Anonymised example",
    overview:
      "A flagship mission reported through fragmented spreadsheets and PDFs.",
    approach: [
      "Unified MIS with automated data pulls",
      "Alerting on slippages and exceptions",
      "Decision briefs for review meetings"
    ],
    impact: [
      "Faster escalation for red-flag districts",
      "Consistent data definitions across departments",
      "Reduced monthly reporting effort"
    ],
    deployment: "NIC cloud"
  }
];

export const engagementModels = [
  {
    title: "Discovery",
    description:
      "2–3 week deep-dive covering problem framing, data readiness, and system blueprint."
  },
  {
    title: "Proof of Concept (PoC)",
    description:
      "6–10 week controlled pilot with measurable outcomes and field feedback."
  },
  {
    title: "Tender Support",
    description:
      "Technical inputs, scope definition, and evaluation assistance for procurement."
  },
  {
    title: "AMC & Continuous Support",
    description:
      "Long-term operations, compliance updates, and system upgrades."
  }
];

export const complianceChecklist = [
  "Data classification & residency mapping",
  "Role-based access control",
  "Audit logs & traceability",
  "Vulnerability assessment & secure configuration",
  "BCP/DR readiness",
  "Documentation for statutory compliance"
];

export const deliverables = [
  "Business Requirements Document (BRD)",
  "Target architecture & integration plan",
  "Implementation roadmap & rollout plan"
];

export const partnerReasons = [
  "Faster problem framing and delivery sprint plans",
  "Domain depth across public programs",
  "Reusable accelerators without vendor lock-in"
];

export const partnerModels = [
  {
    title: "White-label",
    description: "We operate behind your brand while retaining delivery ownership."
  },
  {
    title: "Subcontract",
    description: "Targeted scope execution with clear outcomes and milestones."
  },
  {
    title: "Joint bids",
    description: "Collaborative proposals with shared delivery commitments."
  }
];

export const footerNotes = [
  "Designed for India’s public sector procurement and compliance environment.",
  "We work with departments, missions, and PSUs on multi-year system programs."
];

export const meta = {
  title: "Build India Systems | Public sector data, AI, and digital systems",
  description:
    "We partner with government departments and PSUs to design and deploy data, AI, and digital systems that measurably improve public outcomes.",
  url: "https://buildindia.example.com"
};

export const iconMap = {
  sovereignty: Database,
  audit: ShieldCheck,
  legacy: Wrench,
  outcomes: Gauge
};
