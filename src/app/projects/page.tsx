import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects — ML Ventures",
  description:
    "Tools and products built by ML Ventures. Download developer tools, language learning apps, and more.",
};

const projects = [
  {
    name: "Dev Cockpit",
    category: "Developer Tool",
    description:
      "A premium Windows desktop launcher built for developers. One click opens a full 2x2 Windows Terminal layout, File Explorer, and any startup commands, all configured per project via a dark, theme-able PySide6 GUI.",
    features: [
      "Instant project environment launch from a single click",
      "Up to 6 launch slots per project: terminals, browsers, editors, folders",
      "Packaged as a standalone .exe with startup integration",
      "Six premium dark themes, switchable on the fly",
    ],
    tags: ["Python", "PySide6", "PyInstaller", "Windows Terminal"],
    status: "Available",
    downloadUrl:
      "https://github.com/mcastelein/ml-ventures-website/releases/download/v1.0/DevCockpit.exe",
    learnMoreUrl: "/dev-cockpit",
  },
  {
    name: "VoiceFlow",
    category: "Voice-to-Text",
    description:
      "A free, open source voice-to-text app for Windows. Hold a hotkey, speak, and the text is pasted at your cursor. Runs entirely on your machine, so your audio never leaves your computer.",
    features: [
      "100% local processing, no audio sent to the cloud",
      "13 Whisper model options, from tiny (instant) to large-v3 (max accuracy)",
      "Auto NVIDIA GPU detection with CPU fallback",
      "Push-to-talk and hands-free modes, customizable hotkeys",
    ],
    tags: ["Python", "Whisper", "PySide6", "CUDA"],
    status: "Available",
    downloadUrl: "#",
    learnMoreUrl: "/voice-flow",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <span className="text-xs font-medium tracking-widest uppercase text-accent-teal mb-4 block">
                Projects
              </span>
              <h1 className="text-4xl font-bold text-text-primary mb-2 leading-tight">
                Tools & Products
              </h1>
              <p className="text-sm text-text-secondary mb-12 max-w-2xl">
                Standalone tools and products built by ML Ventures. Available for
                download or early access.
              </p>
            </AnimatedSection>

            <div className="grid gap-6">
              {projects.map((project) => (
                <AnimatedSection key={project.name} delay={0.1}>
                  <div className="p-8 rounded-xl bg-surface border border-border hover:border-accent-teal/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-1">
                          {project.name}
                        </h2>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-teal/10 text-accent-teal">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-accent-teal font-medium">
                          {project.status}
                        </span>
                        <a
                          href={project.learnMoreUrl}
                          className="inline-flex items-center px-4 py-2.5 text-sm font-medium rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent-teal/50 transition-colors"
                        >
                          Learn More
                        </a>
                        <a
                          href={project.downloadUrl}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-accent-blue to-accent-teal text-white hover:opacity-90 transition-opacity"
                        >
                          Download
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <p className="text-text-primary text-sm leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-accent-teal mt-0.5 shrink-0">
                            →
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-surface-elevated text-text-secondary border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
