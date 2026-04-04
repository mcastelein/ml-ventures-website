import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  {
    label: "3 degrees",
    sub: "Including an MSc in Econometrics from Erasmus University",
  },
  {
    label: "65+ countries",
    sub: "Studied across 5, traveled extensively across the rest",
  },
  {
    label: "4 corporate jobs",
    sub: "Southwest Airlines, John Hancock, HousingAnywhere, Vintus",
  },
  {
    label: "AI-native",
    sub: "Claude Code in daily development workflow",
  },
  {
    label: "4 languages",
    sub: "English, Dutch, Mandarin and Japanese",
  },
  {
    label: "10+ core tools",
    sub: "Python, SQL, dbt, Airflow, Snowflake, Azure, scikit-learn, OpenAI and more",
  },
  {
    label: "3 service pillars",
    sub: "Dashboards, forecasting and data pipelines",
  },
  {
    label: "3 continents",
    sub: "Based seasonally across the Netherlands, China and the USA",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <AnimatedSection>
            <span className="text-xs font-medium tracking-widest uppercase text-accent-teal mb-4 block">
              About
            </span>
            <h2 className="text-4xl font-bold text-text-primary mb-6 leading-tight">
              The Person Behind the Work
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m Michael, a mathematician and engineer who found his way
                into data. I optimized aircraft maintenance scheduling at
                Southwest Airlines, worked in actuarial analytics at John
                Hancock, and led revenue analytics at HousingAnywhere before
                launching ML Ventures.
              </p>
              <p>
                I hold a BS in Mathematics and Aerospace Engineering and an MS
                in Econometrics: Quantitative Finance from Erasmus. I&apos;ve
                studied across 5 countries and traveled to 65+. SQL clicked for
                me at Southwest and became the foundation of everything I build.
              </p>
              <p>
                Today I help small businesses turn messy data into clear
                decisions, through dashboards that get used, forecasting models
                grounded in real business context, and pipelines that save hours
                every week. I combine technical depth with business thinking,
                and I&apos;m fully AI-native in how I work.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: stats */}
          <AnimatedSection
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-surface border border-border"
              >
                <p className="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
