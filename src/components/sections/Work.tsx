import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    category: "Developer Tool",
    description:
      "A premium Windows desktop launcher built for developers. One click opens a full 2×2 Windows Terminal layout, File Explorer, and any startup commands — all configured per project via a dark, theme-able GUI.",
    outcomes: [
      "Instant project environment launch from a single click",
      "Per-pane terminal paths and commands, drag-and-drop category management",
      "Packaged as a standalone .exe with startup integration",
    ],
    tags: ["Python", "PySide6", "PyInstaller", "Windows Terminal"],
  },
  {
    category: "Revenue Reconciliation",
    description:
      "Led a full reconciliation of a platform's revenue data across multiple sources, identifying and resolving discrepancies that had gone undetected for months.",
    outcomes: [
      "Traced and resolved revenue mismatches across billing, payments, and bookings",
      "Built reconciliation framework used as the ongoing source of truth",
      "Enabled accurate financial reporting for leadership and investors",
    ],
    tags: ["SQL", "Python", "dbt"],
  },
  {
    category: "Executive Dashboards",
    description:
      "Designed and built automated daily dashboards for executive and finance teams, replacing manual reporting with real-time visibility into core business metrics.",
    outcomes: [
      "Automated daily refresh of KPIs across revenue, growth, and operations",
      "Adopted company-wide as the primary decision-making tool",
      "Reduced manual reporting effort by several hours per week",
    ],
    tags: ["Looker", "SQL", "dbt"],
  },
  {
    category: "Data Pipeline Engineering",
    description:
      "Repaired and stabilized a set of broken data pipelines that were causing inconsistencies across analytics and reporting systems.",
    outcomes: [
      "Identified and fixed root causes of data quality issues",
      "Rebuilt pipeline logic for reliability and maintainability",
      "Established monitoring and alerting for pipeline health",
    ],
    tags: ["Python", "SQL", "dbt", "Airflow"],
  },
  {
    category: "Cloud Data Platform",
    description:
      "End-to-end data platform build on cloud infrastructure, from raw ingestion through transformation to analytics-ready outputs for business stakeholders.",
    outcomes: [
      "Architected and deployed a modern data stack from scratch",
      "Integrated multiple source systems into a unified data model",
      "Enabled self-serve analytics for non-technical teams",
    ],
    tags: ["Snowflake", "Azure", "dbt", "Airflow", "PostgreSQL"],
  },
  {
    category: "ML Prediction Models",
    description:
      "Developed machine learning models to predict key business outcomes, delivering actionable insights that directly informed operational decisions.",
    outcomes: [
      "Built and validated predictive models using real business data",
      "Delivered predictions integrated into existing workflows and tools",
      "Improved decision accuracy for targeted business processes",
    ],
    tags: ["Python", "scikit-learn", "SQL", "OpenAI"],
  },
  {
    category: "Internal Data Tools",
    description:
      "Built custom web apps and Excel-based tools to give teams fast, reliable access to data without needing technical expertise.",
    outcomes: [
      "Delivered interactive web apps for data exploration and reporting",
      "Created Excel-based tools for teams more comfortable in spreadsheets",
      "Reduced dependency on ad-hoc analyst requests",
    ],
    tags: ["Python", "Excel", "PostgreSQL"],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-medium tracking-widest uppercase text-accent-teal mb-4 block">
            Work
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-2 leading-tight">
            Selected Work
          </h2>
          <p className="text-xs text-text-secondary mb-12">
            Details anonymized per client agreements.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
