import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    category: "Dev Tool, ML Ventures",
    description:
      "A premium Windows desktop launcher built for developers. One click opens a full 2×2 Windows Terminal layout, File Explorer, and any startup commands — all configured per project via a dark, theme-able PySide6 GUI.",
    outcomes: [
      "Instant project environment launch from a single click",
      "Per-pane terminal paths and commands, drag-and-drop category management",
      "Packaged as a standalone .exe with startup integration",
    ],
    tags: ["Python", "PySide6", "PyInstaller", "Windows Terminal"],
  },
  {
    category: "Revenue Analytics, HousingAnywhere",
    description:
      "Led a full reconciliation of HousingAnywhere's revenue data, repaired broken pipelines, and built the company's core revenue dashboard used by finance and leadership.",
    outcomes: [
      "Full revenue reconciliation across all data sources",
      "Repaired and stabilized existing data pipelines",
      "Automated daily executive dashboards for company-wide visibility",
    ],
    tags: ["SQL", "Python", "dbt", "Looker"],
  },
  {
    category: "Data Platform and ML, Enterprise Client",
    description:
      "End-to-end data platform build for a client spanning web apps, pipeline cleanup, reconciliation work, and machine learning models for specific business predictions.",
    outcomes: [
      "Built and cleaned multiple data pipelines across cloud infrastructure",
      "Developed ML models using scikit-learn for targeted predictions",
      "Delivered web apps, Excel-based tools, and stakeholder-ready outputs",
    ],
    tags: ["Python", "PostgreSQL", "Azure", "Airflow", "dbt", "Snowflake", "scikit-learn", "OpenAI", "Excel"],
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
