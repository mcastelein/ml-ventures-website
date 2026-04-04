import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  {
    label: "3 degrees",
    sub: "Including an MSc in Econometrics from Erasmus University",
  },
  {
    label: "65+ countries",
    sub: "Studied across 5 — globally available from NL, CN & USA",
  },
  {
    label: "4 corporate jobs",
    sub: "Georgia Tech → Southwest Airlines → John Hancock → HousingAnywhere",
  },
  {
    label: "AI-native",
    sub: "Claude Code in daily development workflow",
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
                I&apos;m Michael — a mathematician and engineer turned freelance
                data scientist. I didn&apos;t plan to go this route. But
                somewhere between developing space missions at Georgia Tech,
                optimizing aircraft maintenance scheduling at Southwest
                Airlines, and leading dashboard rollouts at HousingAnywhere
                Rotterdam, I realized I was in love with data — not just
                engineering.
              </p>
              <p>
                I hold a BS in Mathematics &amp; Aerospace Engineering and an
                MS in Econometrics: Quantitative Finance (Erasmus). I&apos;ve
                studied across 5 countries and traveled to 65+. I discovered
                SQL at Southwest and never looked back.
              </p>
              <p>
                Now I help small businesses and startups turn messy data into
                clear decisions — dashboards that actually get used, forecasting
                models built on real business needs, and automation pipelines
                that save hours every week. I combine technical depth (Python,
                SQL, ML, Econometrics) with business context, and I&apos;m
                fully AI-native in my workflow.
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
