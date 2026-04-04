import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
        />
      </svg>
    ),
    title: "AI Workflow Integration",
    description:
      "Connect your existing tools to AI models that actually work. I design and build AI-assisted pipelines — from LLM-powered reporting to automated insight generation — that fit your current stack.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Data & BI Systems",
    description:
      "End-to-end analytics infrastructure: data warehouses, dashboards, and reporting pipelines built for decision-makers. Clean, maintainable, and built to grow with you.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Predictive Analytics & ML",
    description:
      "Forecasting, classification, and anomaly detection models built from your data. From churn prediction to demand forecasting — deployed and maintained, not just prototyped.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: "Data Engineering",
    description:
      "Pipelines that move, transform, and deliver data reliably. dbt, Airflow, cloud-native ETL — infrastructure you can trust at scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-medium tracking-widest uppercase text-accent-teal mb-4 block">
            Services
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 leading-tight">
            What I Build
          </h2>
          <p className="text-text-secondary mb-12 max-w-xl">
            From raw data to production-ready systems. I work across the full
            analytics stack.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
