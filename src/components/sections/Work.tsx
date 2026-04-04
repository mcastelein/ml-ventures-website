import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    category: "AI Workflow Integration",
    description:
      "Built an AI-assisted reporting pipeline for a European fintech, reducing analyst time-to-insight from 3 days to under 4 hours.",
    outcomes: [
      "Automated weekly PDF reports via LLM",
      "Integrated with existing Snowflake warehouse",
      "Zero-ops maintenance model",
    ],
    tags: ["Python", "OpenAI API", "Snowflake", "dbt"],
  },
  {
    category: "Data & BI Systems",
    description:
      "Designed and deployed a full BI stack for a SaaS company scaling from seed to Series A, supporting board-level reporting.",
    outcomes: [
      "Unified 5 data sources into a single warehouse",
      "Built 12 executive dashboards",
      "Reduced reporting prep from 8hrs to 30min/week",
    ],
    tags: ["BigQuery", "Looker", "dbt", "Fivetran"],
  },
  {
    category: "Predictive Analytics",
    description:
      "Developed a customer churn prediction model for a subscription business, enabling proactive retention campaigns.",
    outcomes: [
      "82% recall on at-risk customer segment",
      "Integrated with CRM for automated outreach",
      "Model retrained monthly via scheduled pipeline",
    ],
    tags: ["Python", "scikit-learn", "Airflow", "PostgreSQL"],
  },
  {
    category: "Data Engineering",
    description:
      "Rebuilt a fragile legacy ETL system for a logistics company, cutting pipeline failure rate from ~30% to under 1%.",
    outcomes: [
      "Migrated 15 pipelines to dbt + Airflow",
      "Added full observability with alerting",
      "Cut cloud data costs by 40%",
    ],
    tags: ["dbt", "Airflow", "GCP", "Terraform"],
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
