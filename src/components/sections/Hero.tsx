import Button from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        <AnimatedSection>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full border border-accent-teal/30 text-accent-teal bg-accent-teal/5 mb-6">
            Data &amp; AI Consultancy
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-[1.1] mb-6">
            Turn Your Data Into{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">
              Decisions That Scale.
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            ML Ventures helps growth-stage companies build AI-powered analytics
            systems, predictive models, and data infrastructure — without the
            overhead of a full team.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Chat →
            </Button>
            <Button href="#work" variant="ghost">
              See My Work
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
