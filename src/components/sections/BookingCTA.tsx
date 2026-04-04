import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";

export default function BookingCTA() {
  return (
    <section
      id="contact"
      className="py-32 bg-surface/40 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-teal/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Let&apos;s Talk About{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">
              Your Data.
            </span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            No sales pitch. Just a 30-minute conversation about where you are,
            where you want to be, and whether I&apos;m the right fit to help.
          </p>
          <Button
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="!text-base !px-8 !py-4"
          >
            Book a Free 30-Min Chat →
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
