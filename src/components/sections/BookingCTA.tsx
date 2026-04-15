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
          <div className="mt-10 flex flex-col items-center gap-2">
            <p className="text-text-primary font-semibold text-lg">
              Michael Castelein
            </p>
            <a
              href="https://linkedin.com/in/michael-castelein"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-2 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
